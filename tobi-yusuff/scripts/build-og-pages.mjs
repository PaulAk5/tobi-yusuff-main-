#!/usr/bin/env node
/**
 * Generate per-article HTML files with proper Open Graph and Twitter Card
 * meta tags baked in, so link previews on WhatsApp, LinkedIn, X, Facebook,
 * iMessage, Slack, Telegram etc. show the right cover image, title and
 * description for each article.
 *
 * The site is a client-rendered React SPA. Social-media crawlers don't run
 * JavaScript, so meta tags injected by react-helmet-async at runtime are
 * invisible to them. This script writes a tiny static HTML file per article
 * (dist/insights/<slug>/index.html) that:
 *
 *   - Overrides <title>, description, og:*, twitter:* in the <head>
 *   - Keeps the same Vite-built <script> bundle in <body>, so humans visiting
 *     the URL still get the full React app and the article renders exactly
 *     as before.
 *
 * Runs after `vite build` — reads the freshly built dist/index.html as a
 * template and emits per-slug files alongside it. Also writes a per-slug
 * HTML for the /insights index itself.
 *
 * vercel.json sends matching URLs to these files; everything else keeps
 * falling back to /index.html.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const distDir = path.join(repoRoot, "dist");
const indexHtmlPath = path.join(distDir, "index.html");

const SITE_URL = (process.env.SITE_URL || "https://tobiyusuff.com").replace(/\/+$/, "");

function die(msg) {
  console.error(`✗ build-og-pages: ${msg}`);
  process.exit(1);
}

function escapeHtml(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function absoluteImage(src) {
  if (!src) return "";
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  if (src.startsWith("/")) return SITE_URL + src;
  return SITE_URL + "/" + src;
}

function buildHeadMeta({ title, description, image, url, type = "article" }) {
  const absUrl = url.startsWith("http") ? url : `${SITE_URL}${url}`;
  const absImg = absoluteImage(image);
  const escTitle = escapeHtml(title);
  const escDesc = escapeHtml(description);
  const escUrl = escapeHtml(absUrl);
  const escImg = escapeHtml(absImg);

  return [
    `<title>${escTitle}</title>`,
    `<meta name="description" content="${escDesc}" />`,
    `<link rel="canonical" href="${escUrl}" />`,
    `<meta property="og:type" content="${escapeHtml(type)}" />`,
    `<meta property="og:url" content="${escUrl}" />`,
    `<meta property="og:title" content="${escTitle}" />`,
    `<meta property="og:description" content="${escDesc}" />`,
    `<meta property="og:image" content="${escImg}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:site_name" content="Tobi Yusuff" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:url" content="${escUrl}" />`,
    `<meta name="twitter:title" content="${escTitle}" />`,
    `<meta name="twitter:description" content="${escDesc}" />`,
    `<meta name="twitter:image" content="${escImg}" />`,
  ].join("\n    ");
}

function rewriteHeadMeta(template, meta) {
  let html = template;

  // Replace <title>...</title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, "");

  // Strip existing meta/link tags we're overriding, so there are no duplicates.
  const stripPatterns = [
    /<meta\s+name=["']description["'][^>]*>/gi,
    /<link\s+rel=["']canonical["'][^>]*>/gi,
    /<meta\s+property=["']og:[^"']+["'][^>]*>/gi,
    /<meta\s+name=["']twitter:[^"']+["'][^>]*>/gi,
  ];
  for (const re of stripPatterns) html = html.replace(re, "");

  // Collapse the whitespace left by stripping.
  html = html.replace(/\n\s*\n\s*\n/g, "\n\n");

  // Inject our block just before </head>.
  const block = `    ${meta}\n  `;
  html = html.replace(/<\/head>/i, `${block}</head>`);
  return html;
}

function writePage(destRel, meta) {
  const destPath = path.join(distDir, destRel);
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  const template = fs.readFileSync(indexHtmlPath, "utf8");
  const headMeta = buildHeadMeta(meta);
  const html = rewriteHeadMeta(template, headMeta);
  fs.writeFileSync(destPath, html, "utf8");
  return destPath;
}

async function main() {
  if (!fs.existsSync(indexHtmlPath)) {
    die(`dist/index.html not found at ${indexHtmlPath}. Run \`vite build\` first.`);
  }

  // Dynamic import so this script works on a fresh checkout even before the
  // registry has ever been generated (the insights:build prebuild hook will
  // have run before this postbuild script).
  const registryPath = path.join(repoRoot, "src", "generated", "insights.js");
  if (!fs.existsSync(registryPath)) {
    die(`generated insights registry missing at ${registryPath}`);
  }
  const { INSIGHTS } = await import(registryPath);

  let count = 0;
  for (const a of INSIGHTS) {
    const destRel = path.join("insights", a.slug, "index.html");
    writePage(destRel, {
      title: a.seoTitle || `${a.title} - Tobi Yusuff`,
      description: a.metaDescription || a.excerpt || "",
      image: a.cover,
      url: `/insights/${a.slug}`,
      type: "article",
    });
    count += 1;
  }

  // Also emit a fresh /insights/index.html so the listing page has its own
  // meta instead of inheriting the homepage's.
  writePage(path.join("insights", "index.html"), {
    title: "Thought Leadership & Insights - Tobi Yusuff",
    description:
      "Writing and speaking on real estate, strategy, finance and digital transformation in Africa. Key themes shaping the future of real assets.",
    image: "/election-cover-page.jpg",
    url: "/insights",
    type: "website",
  });

  console.log(`✓ og pages: ${count} article page(s) + insights index`);
}

main().catch((err) => die(err.stack || err.message));
