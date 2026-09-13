---
name: publish-insight
description: Publish a new article to the tobiyusuff.com Insights section. Use when Tobi asks to add, publish, draft, or update an article, essay, insight, or piece of thought leadership for tobiyusuff.com/insights. Handles review, missing-info gathering, file creation, SEO, validation, build, branch and PR — but never merges to production.
---

# Publishing an insight to tobiyusuff.com

You are working in a Vite/React repository whose Insights section is content-driven: every article is a single markdown file in `tobi-yusuff/content/insights/`, compiled at build time into a registry the app consumes. This skill walks through publishing one end-to-end, without touching the site's design or layout.

Read `CLAUDE.md` at the repo root before starting. The rules there — British English, no invented facts, no layout changes, filenames match slugs, PRs never auto-merge — apply throughout this skill.

## 1. Review what Tobi supplied

Read whatever Tobi has provided in this session: pasted text, an attached document, a URL, notes. Extract:

- The **title** and a working slug (kebab-case, ASCII, lowercase).
- The **body** — the actual prose. Preserve his phrasing; correct typos and clear British-English lapses only when the meaning is unambiguous.
- The **category**. If the article fits one of Real Estate, Finance, Strategy, or Marketing, use that. Otherwise pick the closest and flag it in the summary.
- Any **stats, quotations, or citations** he included. If a claim looks like a specific figure and no source is given, ask — do not source it yourself.

## 2. Ask only for genuinely missing information

Before writing a file, ask Tobi in a single short turn for whatever is genuinely required and not already implied. Never ask for something you can derive.

Required fields the article MUST have that you cannot infer:

- **Cover image path** in `/tobi-yusuff/public/` (or the actual image, so you can save it there). Ask which file, or offer to use a placeholder from `public/` if he says he'll add one later.
- **Cover alt text** — a short description of what the image shows. Never repeat the title verbatim.
- **Publication date** — offer today as the default; confirm with him.

Fields you can derive without asking:

- `slug`: from the title, kebab-case, lowercase.
- `excerpt`: pull the first substantive paragraph, trim to ~40 words.
- `seoTitle`: defaults to `"<title> — Tobi Yusuff"`.
- `metaDescription`: defaults to the excerpt.
- `badge`: defaults to the category.
- `tags`: infer 3–5 from the body; run them past him only if the article is unusual.

## 3. Create the article file

- Path: `tobi-yusuff/content/insights/<slug>.md`.
- The filename must match the `slug` field exactly.
- Populate the frontmatter following the schema documented in `CLAUDE.md`. Include every field the article actually uses; omit optional fields when they'd just repeat defaults.
- Body:
  - Use `##` for internal section headings — never `#` (the hero renders the H1).
  - British English throughout.
  - Preserve Tobi's voice — measured, analytical, long sentences with subordinate clauses are fine.
  - Do not fabricate statistics, sources or quotations.
  - Do not add "Author: Tobi Yusuff" or a date line inside the body — the template renders those from frontmatter.
- Set `draft: false` when Tobi wants the article live in the next preview. Set `draft: true` if he wants it staged but hidden from production.

## 4. Handle the cover image

If Tobi supplied an image:

- Save it to `tobi-yusuff/public/<slug>-cover.<ext>` (or whatever filename he prefers).
- If it's a huge original (over ~500 KB), offer to compress it. Use standard tools available in the workspace (`sharp`, `imagemagick`, or manual export) — never inline base64 or store the original binary in the markdown.
- Reference it in `cover:` and (if the article's hero uses a different crop) `hero:`.

If he hasn't supplied one yet, use a plausible existing image from `tobi-yusuff/public/` as a placeholder, flag it clearly in the PR body, and note it in the final summary so he replaces it before merge.

## 5. Generate SEO metadata

- `seoTitle`: keep it under ~65 characters. If the article title is long, shorten to a punchy phrase and add "— Tobi Yusuff".
- `metaDescription`: 140–160 characters, benefit-oriented, matches the article's actual claim.
- `canonical`: only set this if the article is republished from Substack, The Fulcrum, or elsewhere where the original URL should get the SEO credit.
- Do not stuff keywords. Do not write clickbait.

## 6. Check the slug and date

- Confirm `slug === filename` and slug matches `^[a-z0-9]+(?:-[a-z0-9]+)*$`.
- Check the slug isn't already used by another file in `content/insights/`. The build script will fail if it is; catch it here.
- Confirm the date is ISO (`YYYY-MM-DD`) and not in the future unless Tobi is intentionally scheduling.

## 7. Run validation, lint and the production build

From `tobi-yusuff/`:

```bash
npm run insights:build   # validates frontmatter + renders the registry
npm run lint             # do not add new lint errors; pre-existing ones are out of scope
VERCEL=1 npm run build   # matches Vercel's build behaviour (skips local prerender)
```

The insights build fails loudly on missing required fields, malformed slugs, duplicate slugs, or invalid dates. Read the error and fix the article rather than working around the script.

If the lint step surfaces errors you did not introduce, note them in the PR body but do not fix them here — that's not this skill's scope.

## 8. Create the branch and pull request

- Branch name: `content/<slug>` (or `content/<short-descriptive-name>` when the slug is very long).
- Never commit article changes on `master`. Never merge without Tobi's approval.
- Commit message: `content: add <article title>` (or `content: update <article title>` for edits).
- Push the branch and open a pull request to `master`.
- PR body should include:
  - One-sentence description of the article.
  - A checklist: file created, cover uploaded, alt text present, validation + build passed.
  - Any flags Tobi should look at (placeholder cover, ambiguous statistic, canonical URL used, etc.).
  - The words: **Do not merge until Tobi has reviewed the Vercel preview.**

## 9. Deliver the preview

Once the PR exists:

- Retrieve the Vercel preview URL. Vercel posts it as a check on the PR — read it with `gh pr view <number> --json statusCheckRollup` and pluck the deployment URL from there, or read it off the "Vercel" bot's comment.
- Format the article's own preview URL as `<preview-root>/insights/<slug>`.
- Reply to Tobi with:
  - The PR link.
  - The Vercel preview root.
  - The direct article preview URL.
  - A one-line reminder to approve before merging.

## 10. Never merge into production

Under no circumstances should this skill:

- Merge the pull request.
- Push directly to `master`.
- Delete the feature branch before merge.
- Bypass CI or Vercel's checks.

If Tobi asks you to "just merge it", confirm explicitly ("You want me to merge and deploy this to tobiyusuff.com now?") and only proceed on a plain yes.
