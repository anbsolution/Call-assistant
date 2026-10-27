# Z7 Smart Calling Assistant — Version 1.0

A mobile-first static web app with interactive branching call scripts in Simple English and Hinglish.

## Files
- `index.html` — app structure
- `styles.css` — responsive mobile UI
- `app.js` — branching logic and copy buttons
- `manifest.webmanifest`, `icon.svg` — installable PWA metadata
- `sw.js` — basic offline caching after the first successful load over HTTPS

## Run locally
Open `index.html` in a browser. Interactive scripts and copy controls work; PWA install/offline caching require hosting over HTTPS.

## Publish using GitHub Pages (mobile browser)
1. Create or open the intended public GitHub repository.
2. Upload the contents of this folder to the repository root. Do not upload the ZIP alone if you want Pages to serve the app.
3. Open repository **Settings → Pages**.
4. Under build/deployment, choose **Deploy from a branch**, select `main` and `/(root)`, then Save.
5. Wait for the Pages URL to appear in Settings → Pages, then open that exact URL and test the branches, language selector, copy buttons, back and restart.
6. If the repository already contains a project, back it up first and do not overwrite unrelated files.

## Notes
- No customer names or customer data are stored.
- No API keys, external analytics, or account credentials are used.
- The amounts in the screenshots are presented as unverified advertised maxima, not guaranteed rewards. Verify current official terms before quoting any offer.
- Respect customer opt-outs and applicable laws.
