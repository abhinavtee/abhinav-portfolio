# Abhinav Tripathi — Dark Portfolio

A mobile-first, dark editorial-style developer portfolio built with React, Vite, Tailwind CSS v4, Framer Motion, Lucide React, and React Icons. Base layout rules target narrow touch screens; larger layouts progressively enhance at 560px, 640px, 800px, 1024px, and 1400px. The UI uses your own hero portrait plus CSS-built project previews, so the portfolio does not depend on stock images or image-hosting services.

## Requirements

- Node.js 20.19+ or 22.12+ recommended
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production site is output to `dist/`.

## Project structure

```text
abhinav-dark-portfolio/
├── public/
│   ├── Abhinav-Tripathi-Resume.pdf
│   ├── abhinav.jpg
│   ├── favicon.svg
│   ├── favicon-32.png
│   ├── apple-touch-icon.png
│   └── og-cover.svg
├── src/
│   ├── components/
│   │   ├── BrandMark.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectVisual.jsx
│   │   ├── Reveal.jsx
│   │   └── SectionHeading.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Personal details and links to verify

Edit `src/data/portfolio.js`:

- **Email, LinkedIn and GitHub:** prefilled from the supplied CV.
- **Resume:** the supplied PDF is copied to `public/Abhinav-Tripathi-Resume.pdf`. Replace it with an updated PDF using the same filename, or change `profile.resume`.
- **Logo and favicon:** a custom A monogram is shared by the navigation and footer. The matching SVG favicon, 32px PNG favicon, Apple touch icon, and social sharing cover live in `public/`.
- **Toolkit icons:** the Skills section shows technology-specific brand icons inside each skill tag. These use `react-icons`; it is listed in `package.json`.
- **Theme toggle:** the sun/moon control in the navbar toggles dark/light mode and remembers the choice in local storage.
- **Contact form:** sends the visitor email, reason, and query to `abhi9651.at@outlook.com` through FormSubmit. Complete the one-time email activation described below before publishing.
- **Hero portrait:** your supplied photo is stored at `public/abhinav.jpg` and shown in the hero. Replace that file with another photo using the same filename to update it. The image is styled with a subtle brightness lift and responsive crop; the original photo file is otherwise preserved.
- **URLBee live demo:** currently set to `https://urlbee-production.up.railway.app` based on the earlier project URL. Verify that it is still live before publishing.
- **Info Bridge demo and repositories:** the CV describes the project and stack, but it does not provide direct project URLs. Add the actual `demo` and `source` URLs in the corresponding project object. Keep them empty until you have verified links.
- **Portfolio URL:** add it to `profile.portfolioUrl` once deployed if you want to reuse it elsewhere.
- **Phone number:** stored in `profile.phone`; displayed nowhere by default. Add a `tel:` link if you want recruiters to call.

For missing repository links, the project cards deliberately show a muted placeholder rather than linking to a guessed repository. The project preview artwork is a CSS mockup, not a screenshot of a live service.

## Contact form and email delivery

The contact form sends the visitor's email address, selected reason, optional name, and message to `abhi9651.at@outlook.com` through the FormSubmit AJAX endpoint (`https://formsubmit.co/ajax/…`). The form includes browser validation, a honeypot field, an in-progress state, and success/error feedback. The email address is already public in the portfolio; no email password or secret key is included in the frontend.

**One-time setup required:** after running the site, send a test submission from the contact form. FormSubmit will send an activation/confirmation email to `abhi9651.at@outlook.com`. Open that email and confirm the form service; check Spam/Junk if it does not arrive. Complete this activation before relying on the form for real enquiries. The form uses a third-party service, so review FormSubmit's terms and privacy information before publishing if you prefer to route submissions through your own backend. The direct email and copy-email options remain available as fallbacks.

## Theme switch

The sun/moon button in the navigation toggles between dark and light themes. The selected theme is stored in browser `localStorage` and is restored on subsequent visits. Theme colors are implemented in `src/index.css` using the `:root[data-theme="light"]` overrides.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Sign in to Vercel and choose **Add New → Project**. Import the repository.
3. Vercel should detect Vite. Set **Framework Preset** to `Vite`, **Build Command** to `npm run build`, and **Output Directory** to `dist`.
4. No environment variables are required for the current static portfolio.
5. Click **Deploy**. After deploying, test the site at phone widths, download the resume, confirm your social URLs, and open every demo link.

Because the site uses only anchor navigation, no SPA rewrite configuration is needed.

## Responsive layout notes

- Mobile layout is the default; the menu toggle replaces desktop navigation below 800px.
- Skills use two columns on phones and four columns on wider desktop screens; project cards stack on phones and move to two columns from 640px up.
- The layout stylesheet was checked in Chromium at 320, 375, 390, 430, 768, 800, 1024, and 1440 CSS pixels. The representative responsive fixture had no document-level horizontal scrolling at those widths. After installing dependencies locally, also check the full React app in DevTools and test the expanded navigation menu on your target devices.
- A full production bundle could not be verified in this environment because `npm install` timed out. Run `npm install` and `npm run build` before deployment.
