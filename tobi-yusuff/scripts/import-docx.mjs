#!/usr/bin/env node
/**
 * scripts/import-docx.mjs
 *
 * Turn a Word document (.docx) into a ready-to-publish insight:
 *   - Reads paragraphs, headings, bold/italic runs, and inline images
 *     in document order.
 *   - Writes content/insights/<slug>.md with correct frontmatter.
 *   - Copies each embedded image into public/ with slug-prefixed
 *     filenames.
 *   - Places every image inline in the exact spot it sat in the docx.
 *
 * Usage:
 *   node scripts/import-docx.mjs <path/to/article.docx>
 *        [--title "..."]           Override the title (default: first Heading in the docx)
 *        [--slug "..."]            Override the slug  (default: kebab-case of title)
 *        [--category "..."]        Real Estate | Finance | Strategy | Marketing (default: Strategy)
 *        [--date YYYY-MM-DD]       Publication date (default: today)
 *        [--cover "/path.jpg"]     Cover image path in /public (default: first inline image)
 *        [--cover-alt "..."]       Alt text for the cover
 *        [--author "..."]          Default: Tobi Yusuff
 *        [--draft]                 Save as draft (excluded from production)
 *        [--force]                 Overwrite an existing file with the same slug
 *
 * Requires: adm-zip, fast-xml-parser (both installed as devDependencies).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import AdmZip from "adm-zip";
import { XMLParser } from "fast-xml-parser";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const contentDir = path.join(repoRoot, "content", "insights");
const publicDir = path.join(repoRoot, "public");

// ---------- CLI arg parsing ---------------------------------------------

function parseArgs(argv) {
  const args = { flags: {} };
  let i = 0;
  while (i < argv.length) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith("--")) {
        args.flags[key] = true;
        i += 1;
      } else {
        args.flags[key] = next;
        i += 2;
      }
    } else if (!args.docxPath) {
      args.docxPath = a;
      i += 1;
    } else {
      i += 1;
    }
  }
  return args;
}

function die(msg) {
  console.error(`✗ ${msg}`);
  process.exit(1);
}

function warn(msg) {
  console.warn(`⚠ ${msg}`);
}

// ---------- slug + naming helpers ---------------------------------------

function slugify(s) {
  return String(s)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/['‘’]/g, "")
    .replace(/[^\w\s-]/g, " ")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function extForContentType(ct) {
  if (!ct) return "png";
  if (ct.includes("jpeg") || ct.includes("jpg")) return "jpg";
  if (ct.includes("png")) return "png";
  if (ct.includes("gif")) return "gif";
  if (ct.includes("svg")) return "svg";
  if (ct.includes("webp")) return "webp";
  return "png";
}

// ---------- docx unpacking ----------------------------------------------

function readDocx(zipPath) {
  const zip = new AdmZip(zipPath);
  const entries = zip.getEntries().reduce((acc, e) => {
    acc[e.entryName] = e;
    return acc;
  }, {});

  const document = entries["word/document.xml"];
  const rels = entries["word/_rels/document.xml.rels"];
  if (!document || !rels) {
    die(`${zipPath} does not look like a valid .docx (missing document.xml)`);
  }

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    parseAttributeValue: false,
    preserveOrder: true,
    trimValues: false,
  });

  const doc = parser.parse(document.getData().toString("utf8"));
  const relsXml = parser.parse(rels.getData().toString("utf8"));

  // Build rId → { path, buffer } map
  const relsById = {};
  walkPreserveOrder(relsXml, (name, node) => {
    if (name.endsWith(":Relationship") || name === "Relationship") {
      const attrs = pickAttrs(node);
      if (attrs.Type && attrs.Type.includes("/image")) {
        const rid = attrs.Id;
        const target = attrs.Target; // e.g. media/image1.png
        const entryName = `word/${target}`;
        const entry = entries[entryName];
        if (entry) {
          relsById[rid] = {
            path: entryName,
            buffer: entry.getData(),
          };
        }
      }
    }
  });

  return { doc, relsById };
}

function pickAttrs(node) {
  const attrs = {};
  for (const k of Object.keys(node || {})) {
    if (k.startsWith("@_")) attrs[k.slice(2)] = node[k];
  }
  return attrs;
}

function walkPreserveOrder(nodes, fn) {
  if (!Array.isArray(nodes)) return;
  for (const n of nodes) {
    const keys = Object.keys(n).filter((k) => !k.startsWith("@_") && k !== "#text" && k !== ":@");
    for (const k of keys) {
      fn(k, n[":@"] || {}, n);
      walkPreserveOrder(n[k], fn);
    }
  }
}

// ---------- convert docx AST → markdown blocks --------------------------

function normalise(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[*_`~]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function isBylineParagraph(b) {
  if (!b || b.kind !== "p") return false;
  const t = b.text.replace(/[*_]/g, "").trim();
  if (!t) return true;
  if (t.length > 120) return false;
  if (/^by\s/i.test(t)) return true;
  if (/^(partner|marketing|communications|veritasi|tobi yusuff|august|september|october|november|december|january|february|march|april|may|june|july)/i.test(t)) return true;
  return false;
}

function docxToBlocks(doc, relsById, slug, opts = {}) {
  const firstImageIsCover = opts.firstImageIsCover !== false;
  const blocks = [];
  const imageAssignments = []; // { name, buffer, ext }

  // Walk the top-level body
  const body = findChild(doc, "w:document")?.find((n) => Object.keys(n).some((k) => k === "w:body"))?.["w:body"];
  if (!body) return { blocks, imageAssignments };

  let imgCounter = 0;
  const imageIdSeen = new Map(); // rId → assigned filename

  for (const el of body) {
    const tag = Object.keys(el).find((k) => !k.startsWith("@_") && k !== ":@");
    if (!tag) continue;
    if (tag === "w:p") {
      const children = el[tag];
      const attrs = el[":@"] || {};

      // Extract paragraph style
      const styleId = extractStyle(children);

      // Text runs (with basic bold/italic)
      const text = extractText(children);

      // Images (inline drawings)
      const drawings = extractDrawings(children);

      const trimmed = text.trim();
      if (trimmed) {
        blocks.push({ kind: styleId, text: trimmed });
      }
      for (const { rId, alt } of drawings) {
        let assignment = imageIdSeen.get(rId);
        if (!assignment) {
          imgCounter += 1;
          const src = relsById[rId];
          if (!src) {
            warn(`missing media for relationship ${rId}`);
            continue;
          }
          const ext = path.extname(src.path).slice(1) || "png";
          const name = imgCounter === 1 && firstImageIsCover
            ? `${slug}-cover.${ext}`
            : `${slug}-figure-${firstImageIsCover ? imgCounter - 1 : imgCounter}.${ext}`;
          assignment = { name, buffer: src.buffer, ext };
          imageIdSeen.set(rId, assignment);
          imageAssignments.push(assignment);
        }
        blocks.push({ kind: "image", src: `/${assignment.name}`, alt: alt || "" });
      }
    }
  }

  return { blocks, imageAssignments };
}

function findChild(nodes, name) {
  if (!Array.isArray(nodes)) return null;
  const hit = nodes.find((n) => Object.keys(n).some((k) => k === name));
  return hit ? hit[name] : null;
}

function extractStyle(children) {
  if (!Array.isArray(children)) return "p";
  for (const c of children) {
    if (c["w:pPr"]) {
      for (const p of c["w:pPr"]) {
        if (p["w:pStyle"]) {
          const attrs = p[":@"] || {};
          const val = attrs["@_w:val"] || "";
          if (/Heading1|Title/i.test(val)) return "h2"; // treat Heading 1 as an H2 in-body
          if (/Heading2/i.test(val)) return "h2";
          if (/Heading3/i.test(val)) return "h3";
          if (/Heading4|Heading5|Heading6/i.test(val)) return "h4";
        }
      }
    }
  }
  return "p";
}

function extractText(children) {
  if (!Array.isArray(children)) return "";
  let out = "";
  for (const c of children) {
    if (c["w:r"]) {
      const run = c["w:r"];
      let runText = "";
      let bold = false;
      let italic = false;
      for (const r of run) {
        if (r["w:rPr"]) {
          for (const rp of r["w:rPr"]) {
            if (rp["w:b"]) bold = true;
            if (rp["w:i"]) italic = true;
          }
        }
        if (r["w:t"]) {
          for (const t of r["w:t"]) {
            if (t["#text"] !== undefined) runText += t["#text"];
          }
        }
        if (r["w:tab"]) runText += " ";
        if (r["w:br"]) runText += "\n";
      }
      if (runText) {
        if (bold && italic) out += `***${runText}***`;
        else if (bold) out += `**${runText}**`;
        else if (italic) out += `*${runText}*`;
        else out += runText;
      }
    }
    if (c["w:hyperlink"]) {
      const inner = extractText(c["w:hyperlink"]);
      if (inner) out += inner;
    }
  }
  return out;
}

function extractDrawings(children) {
  // Return [{rId, alt}] pairs so we can carry the docx's own alt text
  // into markdown when Word's "Alt Text" field was filled in.
  const drawings = [];
  let currentAlt = "";
  const walk = (nodes) => {
    if (!Array.isArray(nodes)) return;
    for (const n of nodes) {
      for (const k of Object.keys(n)) {
        if (k === ":@") continue;
        if (k === "wp:docPr" || k === "pic:cNvPr") {
          const attrs = n[":@"] || {};
          const descr = attrs["@_descr"] || attrs["@_title"];
          if (descr) currentAlt = descr;
        }
        if (k === "a:blip") {
          const attrs = n[":@"] || {};
          const rid = attrs["@_r:embed"] || attrs["@_r:link"];
          if (rid) drawings.push({ rId: rid, alt: currentAlt });
          currentAlt = "";
        } else if (Array.isArray(n[k])) {
          walk(n[k]);
        }
      }
    }
  };
  walk(children);
  return drawings;
}

// ---------- render markdown ---------------------------------------------

function stripInlineEmphasis(s) {
  return String(s || "").replace(/^\*+|\*+$/g, "").trim();
}

function renderMarkdown(blocks) {
  const parts = [];
  for (const b of blocks) {
    if (b.kind === "h2") parts.push(`\n## ${stripInlineEmphasis(b.text)}\n`);
    else if (b.kind === "h3") parts.push(`\n### ${stripInlineEmphasis(b.text)}\n`);
    else if (b.kind === "h4") parts.push(`\n#### ${stripInlineEmphasis(b.text)}\n`);
    else if (b.kind === "p") parts.push(`\n${b.text}\n`);
    else if (b.kind === "image") parts.push(`\n![${b.alt || ""}](${b.src})\n`);
  }
  return parts.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}

function frontmatter(meta) {
  const lines = ["---"];
  const emit = (k, v) => {
    if (v === undefined || v === null || v === "") return;
    if (Array.isArray(v)) {
      lines.push(`${k}: [${v.map((x) => JSON.stringify(x)).join(", ")}]`);
    } else if (typeof v === "boolean") {
      lines.push(`${k}: ${v ? "true" : "false"}`);
    } else {
      const s = String(v);
      if (/[:#\[\]{}&*!|>'"%@`]/.test(s) || s.trim() !== s || /^(true|false|null|~|yes|no)$/i.test(s)) {
        lines.push(`${k}: ${JSON.stringify(s)}`);
      } else {
        lines.push(`${k}: ${s}`);
      }
    }
  };
  emit("title", meta.title);
  emit("slug", meta.slug);
  emit("date", meta.date);
  emit("author", meta.author);
  emit("category", meta.category);
  emit("tags", meta.tags || []);
  emit("cover", meta.cover);
  emit("coverAlt", meta.coverAlt);
  emit("hero", meta.hero);
  emit("heroAlt", meta.heroAlt);
  emit("badge", meta.badge);
  emit("excerpt", meta.excerpt);
  emit("featured", false);
  emit("seoTitle", meta.seoTitle);
  emit("metaDescription", meta.metaDescription);
  emit("draft", Boolean(meta.draft));
  lines.push("---");
  return lines.join("\n") + "\n\n";
}

// ---------- main --------------------------------------------------------

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.docxPath) {
    console.log("Usage: node scripts/import-docx.mjs <path/to/article.docx> [options]");
    console.log("Options: --title | --slug | --category | --date | --cover | --cover-alt | --author | --draft | --force");
    process.exit(1);
  }
  const docxPath = path.resolve(args.docxPath);
  if (!fs.existsSync(docxPath)) die(`file not found: ${docxPath}`);

  const { doc, relsById } = readDocx(docxPath);

  // First pass — build blocks with a placeholder slug so the image
  // filenames pick up the real slug once we know the title.
  const placeholderSlug = "import-" + Date.now();
  const first = docxToBlocks(doc, relsById, placeholderSlug);

  // The first heading in a docx is almost always its cover title —
  // never useful inside the article body (the hero renders it above).
  // Drop it whether or not the user overrides the title.
  const firstHeadingIdx = first.blocks.findIndex((b) => b.kind === "h2" || b.kind === "h3");
  const firstHeadingText = firstHeadingIdx >= 0 ? first.blocks[firstHeadingIdx].text : "";

  let title = args.flags.title || firstHeadingText || path.basename(docxPath, path.extname(docxPath)).replace(/[_-]+/g, " ");
  const slug = args.flags.slug || slugify(title);

  // Second pass — re-run with the real slug so image filenames match.
  const withCoverOverride = Boolean(args.flags.cover);
  const { blocks, imageAssignments } = docxToBlocks(doc, relsById, slug, { firstImageIsCover: !withCoverOverride });
  // Drop the docx-level title heading; also drop any later heading that
  // matches the article title exactly (case-insensitive).
  const idxFirst = blocks.findIndex((b) => b.kind === "h2" || b.kind === "h3");
  if (idxFirst >= 0) blocks.splice(idxFirst, 1);
  for (let i = blocks.length - 1; i >= 0; i--) {
    const b = blocks[i];
    if ((b.kind === "h2" || b.kind === "h3") && normalise(b.text) === normalise(title)) {
      blocks.splice(i, 1);
    }
  }
  // Drop any byline/author paragraphs at the very top of the body.
  while (blocks.length && isBylineParagraph(blocks[0])) blocks.shift();

  const outMd = path.join(contentDir, `${slug}.md`);
  if (fs.existsSync(outMd) && !args.flags.force) {
    die(`${outMd} already exists (use --force to overwrite)`);
  }

  // Write images to public/. Images over 500 KB get a size warning so
  // Paul knows to compress them (Word originals are usually huge).
  fs.mkdirSync(publicDir, { recursive: true });
  const oversized = [];
  for (const asset of imageAssignments) {
    const out = path.join(publicDir, asset.name);
    fs.writeFileSync(out, asset.buffer);
    const kb = asset.buffer.length / 1024;
    console.log(`  wrote public/${asset.name} (${kb.toFixed(0)} KB)`);
    if (kb > 500) oversized.push({ name: asset.name, kb });
  }
  if (oversized.length) {
    console.log("");
    warn("large image(s) detected — consider compressing before publishing:");
    for (const o of oversized) console.log(`     public/${o.name}  ${o.kb.toFixed(0)} KB`);
    console.log("     Anything under ~250 KB loads cleanly on mobile connections.");
  }

  // Compute frontmatter
  const today = new Date().toISOString().slice(0, 10);
  const excerpt = firstNonHeading(blocks) || "";
  const coverFromArgs = args.flags.cover || null;
  const firstImage = imageAssignments[0]?.name ? `/${imageAssignments[0].name}` : null;
  const cover = coverFromArgs || firstImage || "/placeholder-cover.png";
  const coverAlt = args.flags["cover-alt"] || title;
  const category = args.flags.category || "Strategy";
  const meta = {
    title,
    slug,
    date: args.flags.date || today,
    author: args.flags.author || "Tobi Yusuff",
    category,
    tags: [],
    cover,
    coverAlt,
    hero: cover,
    heroAlt: coverAlt,
    badge: category,
    excerpt: truncate(excerpt, 260),
    featured: false,
    seoTitle: `${title} — Tobi Yusuff`,
    metaDescription: truncate(excerpt, 155),
    draft: Boolean(args.flags.draft),
  };

  const body = renderMarkdown(blocks);
  const md = frontmatter(meta) + body;

  fs.mkdirSync(contentDir, { recursive: true });
  fs.writeFileSync(outMd, md, "utf8");

  console.log(`✓ wrote content/insights/${slug}.md`);
  console.log("");
  console.log("Next steps:");
  console.log(`  1. Open ${path.relative(process.cwd(), outMd)} — check the title, category, cover, tags and excerpt.`);
  console.log(`     By default the FIRST inline image was set as the cover. Change 'cover:' if that's not right.`);
  console.log(`  2. npm run insights:build      # validates the frontmatter and regenerates the registry`);
  console.log(`  3. VERCEL=1 npm run build      # optional: prove the whole build is clean before pushing`);
  console.log(`  4. git add ${path.relative(process.cwd(), contentDir)} ${path.relative(process.cwd(), publicDir)}`);
  console.log(`     git commit -m "content: add ${title}"`);
  console.log(`     git push`);
}

function firstNonHeading(blocks) {
  // Skip bylines, short attribution lines, and headings — grab the first
  // real body paragraph so the excerpt actually describes the article.
  for (const b of blocks) {
    if (b.kind !== "p") continue;
    if (isBylineParagraph(b)) continue;
    const t = b.text.replace(/[*_]/g, "").replace(/\s+/g, " ").trim();
    if (t.length >= 80) return t;
  }
  return "";
}

function truncate(s, n) {
  if (!s) return "";
  return s.length > n ? s.slice(0, n).replace(/\s+\S*$/, "") + "…" : s;
}

main();
