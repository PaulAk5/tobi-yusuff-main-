# Insights content

Every article on tobiyusuff.com/insights is one markdown file in this directory. The build script at `../../scripts/build-insights.mjs` reads every `*.md` file here at build time, validates its frontmatter, renders the body to HTML, and emits `../../src/generated/insights.js` — the registry the React app imports.

## Adding a new article

1. Create a new file `<slug>.md` where `<slug>` is lowercase, hyphen-separated, and matches the `slug` frontmatter field exactly.
2. Fill in the frontmatter — see `CLAUDE.md` at the repo root for the full schema. Required fields: `title`, `slug`, `date`, `category`, `cover`, `coverAlt`. Every article also needs `draft: false` to appear in production.
3. Write the body in plain markdown. Use `##` for section headings — the article's `h1` comes from the hero. Bullet lists render with the site's custom style.
4. Put any images in `../../public/` and reference them with `/filename.png` paths.
5. Run `npm run insights:build` from `tobi-yusuff/` to validate. Duplicate slugs, missing fields, and malformed dates all fail the build.

## What NOT to put here

- The article's `h1` — the hero renders that from `title`.
- An author line or a date inside the body — the template renders those from frontmatter.
- Site chrome (nav, footer, share buttons, comment forms, related articles) — the template handles all of it.

Files prefixed with `_` and `README.md` are ignored by the build script.
