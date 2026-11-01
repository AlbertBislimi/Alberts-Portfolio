# Sitet — Albert Bislimi

Vite + React website implementing the approved 2026-11-01 redesign. Albanian is the default; English is available through the language controls. The German translation entry is an unpublished English fallback.

## Local development

```sh
npm install
npm run dev
```

## Production and verification

```sh
npm run build
npm run preview -- --host 127.0.0.1
# In another terminal:
node scripts/verify.mjs
```

The browser check uses `/usr/bin/google-chrome`; override it with `CHROME_PATH`. Override the preview URL with `TEST_URL`.

The build renders the Albanian page into `dist/index.html` before React hydration, so headings, pricing and FAQ remain readable without JavaScript or scrolling. FAQ uses native details controls. Motion is limited to hover effects and respects reduced motion.

## Content and assets

- `src/i18n/translations.js`: SQ/EN copy and unpublished DE fallback.
- `src/data/markets.json`: four market prices, currencies and setup fees. Used by the visible prices and build-generated offer schema. Annual prices follow the approved ten-month policy; update translated footnotes and the source metadata when changing this policy.
- `src/data/demos.json`: public names, slugs and sector groups for all 75 demos, sourced from the Sitet `originals.json` catalog on 2026-11-01. Links use `https://app.albertbislimi.com/s/<slug>`. Six featured screenshots keep the initial gallery compact; the expanded catalog filters across all 75 entries.
- `public/demos/`: nine compressed WebP screenshots; below-fold images load lazily.
- `public/og.jpg`: 1200×630 JPEG export of the implemented hero, approximately 104 KB.

Pricing is user-selected and starts with Kosovo. Language changes do not silently select a different market. There is no geo-IP lookup.

The verification script covers SQ/EN, all four markets, keyboard tabs, the 75-demo catalog and sector filtering, FAQ, the exact floating WhatsApp link, image loading, mobile overflow, the image budget, browser errors, and content with JavaScript disabled.
