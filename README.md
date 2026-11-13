# ArizoTek — Business Website

Official static business website for **ArizoTek** (*IT Automation for Small to Mid-Size Businesses*), built with React, TypeScript, Tailwind CSS, and Vite for seamless hosting on GitHub Pages.

## Website Pages

1. **Home (`/`)** — Hero value proposition, Services overview, About ArizoTek, Why Choose ArizoTek, Four-step process, and CTA.
2. **Services (`/services`)** — Detailed overview of AI Automation Solutions, Business Process Automation, AI Chatbots & Virtual Assistants, and Workflow Integration & Automation, plus Our Approach.
3. **Contact Us (`/contact`)** — Editable business contact placeholders and a validated static contact form ready for Formspree.

## Configuration Before Going Live

All editable placeholders and static integration settings live in a single file:

`src/config/siteConfig.ts`

1. **Contact Information**: Replace the placeholder `email`, `phone`, and `location` strings with ArizoTek's official business details.
2. **Social Links**: Update `socialLinks` with live URLs and set `isPlaceholder: false`.
3. **Contact Form (Formspree)**:
   - Create a form at [https://formspree.io](https://formspree.io).
   - Set `formspreeEndpoint` to your Formspree endpoint (for example, `https://formspree.io/f/abcd1234`).
   - While `formspreeEndpoint` is empty, the Contact form validates inputs and transparently notifies visitors that the form endpoint has not yet been connected.

## Local Development

```bash
npm install
npm run dev
```

## Static Production Build & GitHub Pages Deployment

The project uses `HashRouter` (`#/`, `#/services`, `#/contact`) and `base: './'` in `vite.config.ts` so direct page loads, refreshes, and relative assets (including the ArizoTek logo in `public/assets/aistudio/image_d534bb24.png`) work without 404 errors on any GitHub Pages repository subpath or custom domain.

### Build Locally

```bash
npm run build
```

This generates the static site inside the `dist/` directory.

### Deploy to GitHub Pages

Option A — **GitHub Actions (Recommended)**:
1. Push this repository to GitHub.
2. Go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions** (or deploy the `dist/` folder via `peaceiris/actions-gh-pages` / official `actions/deploy-pages`).
3. Ensure your workflow runs `npm ci && npm run build` and publishes `./dist`.

Option B — **Manual `gh-pages` Branch**:
```bash
npm run build
npx gh-pages -d dist
```
Then set **Settings → Pages → Source** to the `gh-pages` branch.
