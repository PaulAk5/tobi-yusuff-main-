#!/usr/bin/env node
/**
 * Build-time processor for the Insights content system.
 *
 * Reads every Markdown file in content/insights/, validates the frontmatter,
 * renders the body to HTML, and emits:
 *
 *   src/generated/insights.js  - the registry the app imports
 *   public/sitemap.xml         - a sitemap covering core pages + insights
 *
 * Exits non-zero if any file is invalid so `vite build` (and Vercel) fails
 * loudly rather than silently deploying a broken registry.
 *
 * INCLUDE_DRAFTS=1 opts drafts in (for local preview only).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const contentDir = path.join(repoRoot, "content", "insights");
const outFile = path.join(repoRoot, "src", "generated", "insights.js");
const sitemapFile = path.join(repoRoot, "public", "sitemap.xml");
const publicDir = path.join(repoRoot, "public");

const SITE_URL = process.env.SITE_URL || "https://tobiyusuff.com";
const INCLUDE_DRAFTS = process.env.INCLUDE_DRAFTS === "1";

// Non-article routes to include in the sitemap.
const STATIC_ROUTES = [
  "/",
  "/about",
  "/expertise",
  "/media",
  "/philanthropy",
  "/insights",
  "/contact",
];

const REQUIRED = ["title", "slug", "date", "category", "cover", "coverAlt"];
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const md = new MarkdownIt({
  html: true,     // preserve raw HTML in the source (used for pull quotes etc.)
  linkify: true,
  typographer: true,
  breaks: false,
});

function die(msg) {
  console.error(`✗ insights build failed: ${msg}`);
  process.exit(1);
}

function warn(msg) {
  console.warn(`⚠ ${msg}`);
}

function readArticles() {
  if (!fs.existsSync(contentDir)) {
    die(`content directory not found: ${contentDir}`);
  }
  const files = fs
    .readdirSync(contentDir)
    .filter(
      (f) =>
        f.endsWith(".md") &&
        !f.startsWith("_") &&
        f !== "README.md" &&
        f !== "readme.md"
    );
  if (files.length === 0) {
    warn("no articles found in content/insights/ (this is OK on a fresh setup)");
  }

  const seen = new Map();
  const articles = [];

  for (const file of files) {
    const filepath = path.join(contentDir, file);
    const raw = fs.readFileSync(filepath, "utf8");
    let parsed;
    try {
      parsed = matter(raw);
    } catch (err) {
      die(`could not parse frontmatter in ${file}: ${err.message}`);
    }
    const data = parsed.data || {};
    const body = parsed.content || "";

    // Filename must equal slug for URL predictability.
    const filenameSlug = file.replace(/\.md$/, "");
    if (data.slug && data.slug !== filenameSlug) {
      die(
        `${file}: frontmatter slug "${data.slug}" does not match filename "${filenameSlug}". Rename the file or fix the slug.`
      );
    }
    data.slug = data.slug || filenameSlug;

    // Required fields present.
    for (const key of REQUIRED) {
      if (data[key] === undefined || data[key] === null || data[key] === "") {
        die(`${file}: missing required frontmatter field "${key}"`);
      }
    }

    // Slug format.
    if (!SLUG_RE.test(data.slug)) {
      die(
        `${file}: slug "${data.slug}" must be lowercase letters, digits and single hyphens`
      );
    }

    // Duplicate detection.
    if (seen.has(data.slug)) {
      die(`duplicate slug "${data.slug}" in ${file} and ${seen.get(data.slug)}`);
    }
    seen.set(data.slug, file);

    // Cover image sanity check (soft — warn if missing on disk).
    if (typeof data.cover === "string" && data.cover.startsWith("/")) {
      const onDisk = path.join(publicDir, data.cover.replace(/^\//, ""));
      if (!fs.existsSync(onDisk)) {
        warn(`${file}: cover image "${data.cover}" not found in public/`);
      }
    }

    // Normalise date to ISO string.
    let dateISO;
    try {
      const d = new Date(data.date);
      if (isNaN(d.getTime())) throw new Error("invalid");
      dateISO = d.toISOString().slice(0, 10);
    } catch {
      die(`${file}: invalid publication date "${data.date}"`);
    }

    let updatedISO = null;
    if (data.updated) {
      const d = new Date(data.updated);
      if (isNaN(d.getTime())) die(`${file}: invalid updated date "${data.updated}"`);
      updatedISO = d.toISOString().slice(0, 10);
    }

    const draft = Boolean(data.draft);
    if (draft && !INCLUDE_DRAFTS) {
      // Drafts are excluded from production output.
      continue;
    }

    const excerpt = (data.excerpt || firstParagraph(body) || "").trim();
    const html = md.render(body).trim();

    const featureItem = {
      slug: data.slug,
      title: String(data.title).trim(),
      excerpt,
      date: dateISO,
      updated: updatedISO,
      author: (data.author || "Tobi Yusuff").trim(),
      category: String(data.category).trim(),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      cover: data.cover,
      coverAlt: String(data.coverAlt).trim(),
      hero: data.hero || data.cover,
      heroAlt: (data.heroAlt || data.coverAlt || data.title || "").toString().trim(),
      badge: (data.badge || data.category || "").toString().trim(),
      featured: Boolean(data.featured),
      draft,
      seoTitle: (data.seoTitle || `${data.title} — Tobi Yusuff`).toString().trim(),
      metaDescription: (data.metaDescription || excerpt).toString().trim(),
      canonical: data.canonical ? String(data.canonical) : null,
      hashtags: (data.hashtags || "").toString().trim(),
      html,
    };

    articles.push(featureItem);
  }

  // Newest first.
  articles.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return articles;
}

function firstParagraph(body) {
  const match = body
    .replace(/^---[\s\S]*?---/, "")
    .split(/\n\n+/)
    .map((s) => s.trim())
    .find((s) => s && !s.startsWith("#") && !s.startsWith("<"));
  if (!match) return "";
  return match.replace(/\s+/g, " ").slice(0, 280);
}

function writeRegistry(articles) {
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  const banner = `/* AUTO-GENERATED by scripts/build-insights.mjs. Do not edit by hand. */\n`;
  const body = `export const INSIGHTS = ${JSON.stringify(articles, null, 2)};\n\n`
    + `export const INSIGHT_SLUGS = ${JSON.stringify(articles.map((a) => a.slug), null, 2)};\n\n`
    + `export function findInsight(slug) { return INSIGHTS.find((a) => a.slug === slug) || null; }\n\n`
    + `export function neighbours(slug) {\n`
    + `  const i = INSIGHTS.findIndex((a) => a.slug === slug);\n`
    + `  if (i === -1) return { prev: null, next: null };\n`
    + `  return { prev: INSIGHTS[i + 1] || null, next: INSIGHTS[i - 1] || null };\n`
    + `}\n`;
  fs.writeFileSync(outFile, banner + body, "utf8");
}

function writeSitemap(articles) {
  const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const urls = [];
  for (const route of STATIC_ROUTES) {
    urls.push(`  <url><loc>${escape(SITE_URL + route)}</loc></url>`);
  }
  for (const a of articles) {
    urls.push(
      `  <url>\n`
      + `    <loc>${escape(SITE_URL + "/insights/" + a.slug)}</loc>\n`
      + `    <lastmod>${a.updated || a.date}</lastmod>\n`
      + `  </url>`
    );
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(sitemapFile, xml, "utf8");
}

function main() {
  const articles = readArticles();
  writeRegistry(articles);
  writeSitemap(articles);
  console.log(
    `✓ insights build: ${articles.length} article(s) → ${path.relative(repoRoot, outFile)}`
  );
}

main();
