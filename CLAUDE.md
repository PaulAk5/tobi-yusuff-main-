# CLAUDE.md — tobiyusuff.com

Project notes for Claude working in this repository. Read this before making any change.

## Repository layout

The app lives in `tobi-yusuff/`, not at the repo root. Everything below is relative to that folder unless stated otherwise.

- Stack: Vite 8, React 19, React Router 7, Tailwind CSS 3, `react-helmet-async` for SEO.
- Deployment: Vercel. Production branch is `master` (the `HEAD` of `origin`). Feature branches deploy as previews.
- Insights content system: markdown files in `content/insights/`, compiled at build time by `scripts/build-insights.mjs` into `src/generated/insights.js`, which the app imports.

## Where things live

| What                                 | Where                                             |
| ------------------------------------ | ------------------------------------------------- |
| Insight articles                     | `tobi-yusuff/content/insights/<slug>.md`          |
| Article registry (generated)         | `tobi-yusuff/src/generated/insights.js` (gitignored) |
| Insight index page                   | `tobi-yusuff/src/pages/InsightsPage.jsx`          |
| Insight article template             | `tobi-yusuff/src/pages/InsightArticlePage.jsx`    |
| Article prose styling                | `.insight-prose` rules in `tobi-yusuff/src/index.css` |
| SEO helper                           | `tobi-yusuff/src/components/SEO.jsx`              |
| Build script                         | `tobi-yusuff/scripts/build-insights.mjs`          |
| Sitemap (generated)                  | `tobi-yusuff/public/sitemap.xml` (gitignored)     |
| Static images referenced in content  | `tobi-yusuff/public/<file>.png` (paths like `/hero.png`) |

## Rules for publishing insights

1. **Every new insight is a single markdown file** in `content/insights/`. Never add a new hand-written article `.jsx` component or a new route to `App.jsx` for one — the dynamic `/insights/:slug` route already covers it.
2. **Do not change layout, colours, typography, navigation or components** to publish an article. Content-only changes only. If a design change is genuinely needed, raise it as a separate task and wait for approval.
3. **Filenames and slugs are lowercase, hyphen-separated, ASCII only** (regex `^[a-z0-9]+(?:-[a-z0-9]+)*$`). The filename must exactly equal the `slug` field in the frontmatter — the build script rejects any mismatch.
4. **British English throughout.** "Organisation", "recognise", "programme", "colour", "utilise". Prefer serial commas only when they aid clarity. Use en-dashes for ranges. Currency prefixes go before figures (`₦1.3 trillion`, `$20 billion`).
5. **Preserve Tobi Yusuff's voice** — professional, strategic, analytical. Long sentences with subordinate clauses are fine; slang, exclamation marks and marketing-speak are not.
6. **Never invent facts, quotations, research findings or statistics.** If a piece Tobi supplies contains a claim without a source and the source isn't obvious, ask before publishing — do not assign a plausible citation.
7. **Factual claims should be sourced when sources are supplied.** Inline mentions in the body ("according to the World Bank Enterprise Survey…") are the site's house style; do not silently add footnotes or citation blocks the article did not carry.
8. **Every cover image needs descriptive alt text** in `coverAlt` (and `heroAlt` when the hero differs). Never leave alt empty. Never repeat the title verbatim — describe what the image shows.
9. **Run validation and the production build before opening a PR:**
   ```bash
   cd tobi-yusuff
   npm run insights:build   # validates frontmatter, generates the registry
   npm run lint             # ESLint — surfaces pre-existing warnings; do not add new ones
   VERCEL=1 npm run build   # matches Vercel's build (skips local prerender)
   ```
   The insights build will fail loudly if a required frontmatter field is missing, a slug is malformed, or two files claim the same slug.
10. **Article changes go on a separate branch** whose name starts with `content/` or `feature/`. Never commit article changes directly to `master`. Never merge or push to `master` without Tobi's explicit approval on the PR.

## Frontmatter schema

Every markdown file in `content/insights/` must start with a YAML frontmatter block:

```yaml
---
title: "Human-facing article title"
slug: "url-slug-matching-filename"
date: 2026-09-13              # required, ISO date (YYYY-MM-DD)
updated: 2026-09-20           # optional, only when the article is materially revised
author: "Tobi Yusuff"          # optional; defaults to "Tobi Yusuff"
category: "Real Estate"        # one of: Real Estate | Finance | Strategy | Marketing (or a new one — the filter chips derive from the data)
tags: ["off-plan", "wealth"]   # freeform; used for grouping later
cover: "/hidden-economics.png" # /path relative to public/; used on the Insights grid and social cards
coverAlt: "Descriptive alt text for the grid image"
hero: "/hidden-article.jpg"    # optional; defaults to cover. Used on the article's own hero.
heroAlt: "Alt for the hero image"
badge: "Real Estate Finance"   # optional pill shown over the hero; defaults to the category
excerpt: "One-sentence summary" # optional; auto-derived from first paragraph if omitted
featured: false                # optional flag
seoTitle: "Custom SEO title"   # optional; defaults to "<title> — Tobi Yusuff"
metaDescription: "..."         # optional; defaults to excerpt
canonical: "https://..."       # optional; use when re-publishing an article that lives canonically elsewhere
hashtags: "#a #b #c"           # optional trailing hashtag line the article should show
draft: false                    # required; must be `false` to publish. `true` keeps the article out of prod.
---
```

Required fields: `title`, `slug`, `date`, `category`, `cover`, `coverAlt`. All others are optional or have sensible defaults.

## Markdown conventions

- Use `##` for section headings inside articles. Never `#` — the article's `h1` comes from the hero, not the markdown body.
- Bulleted lists (`- ` and `- **Label:** text`) render with the site's custom bullet style. Prefer this over paragraph enumerations.
- Blockquotes render as gold-ruled pull quotes.
- Inline HTML is allowed but discouraged — the site's typography assumes plain markdown.

## Adding a new insight — cheat sheet

```bash
git checkout -b content/short-descriptive-slug
cd tobi-yusuff
$EDITOR content/insights/short-descriptive-slug.md   # write frontmatter + body
# Put any new images in tobi-yusuff/public/ with the same slug prefix.
npm run insights:build
npm run lint
VERCEL=1 npm run build
git add content/insights tobi-yusuff/public
git commit -m "content: add <title>"
git push -u origin content/short-descriptive-slug
# Open a PR against master. Never merge without Tobi's approval.
```

The reusable `publish-insight` skill under `.claude/skills/publish-insight/` codifies the fuller workflow (asking for missing metadata, optimising the cover image, generating SEO, and delivering the preview link).
