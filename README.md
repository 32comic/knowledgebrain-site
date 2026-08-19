# KnowledgeBrain site

Public product intro, beginner's guide, Privacy Policy and Terms of Use (en / zh-Hans / zh-Hant / ja).

Contact: info@pixelart.tech

## Pages

- `index.html` — product intro (features, screenshots, links)
- `guide.html` — step-by-step beginner's guide (linked from the app's Settings → 使用帮助)
- `privacy.html` / `terms.html` — legal pages
- `screenshots/<lang>/` — iPhone screenshots per language (en / zh-Hans / zh-Hant / ja), each shown only in its own language panel. Regenerate with `release/appstore/capture_screenshots.sh` (boots the iOS Simulator, seeds localized demo data via `seed_demo_data.py <db> <lang>`, captures via `simctl`).

Language switching is handled by `lang.js` (`?lang=` query param, persisted in localStorage).

## URLs (after GitHub Pages is on)

- Home: `https://32comic.github.io/knowledgebrain-site/`
- Guide: `https://32comic.github.io/knowledgebrain-site/guide.html`
- Privacy: `https://32comic.github.io/knowledgebrain-site/privacy.html`
- Terms: `https://32comic.github.io/knowledgebrain-site/terms.html`

## Cloudflare Pages (optional)

Dashboard → Workers & Pages → Import Git repo `knowledgebrain-site`:

- Production branch: `main`
- Build command: empty
- Output directory: `/`
- Project name: `knowledgebrain` → `https://knowledgebrain.pages.dev/`

Then point App Store Connect Privacy Policy URL at `/privacy` (see `_redirects`).
