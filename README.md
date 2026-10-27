# bearrangecapital.com

Static landing page for Bear Range Capital, hosted on Vercel. There is no build step: Vercel serves these files as they are, and every push to `main` goes live.

## Pages
- `index.html` – the homepage (logo, name, tagline, email)
- `investors.html` – investor login. **A placeholder**: nothing is checked or sent anywhere; every attempt shows "Invalid email or password".
- `invalid.html` – the same login with the error showing (used if JavaScript is off, and for old links)
- `404.html` – page not found

`vercel.json` serves pages without `.html` (`/investors`), sends the old `/home.html` to `/`, and adds basic security headers.

## Files
- `styles.css` – all styling (colours at the top under `:root`)
- `fonts/` – Cormorant Garamond and Inter, self-hosted (SIL Open Font License, see the LICENSE files)
- `images/logo.png` – the logo, pure black on transparent
- `images/BRCLogoTransparent.png` – the original logo file, kept as the source
- `favicon.ico`, `images/favicon.ico`, `images/favicon-32.png`, `images/apple-touch-icon.png` – browser and phone icons
- `images/og.png` – the preview image shown when the link is shared
