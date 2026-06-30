# Thiranex

A multi-page personal portfolio website for **Munagala Jahnavi**, built with semantic HTML5 and following WCAG accessibility guidelines.

## About

Thiranex showcases education, technical skills, certifications, achievements, and project work — including **PulseGuard AI** (an ML-based blood pressure prediction system) and a **Personal Finance Tracker System**.

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Introduction and featured project highlights |
| About | `about.html` | Education timeline, skills, certifications, achievements |
| Projects | `projects.html` | Detailed project breakdowns |
| Contact | `contact.html` | Contact details and an accessible message form |

## Features

- Semantic HTML5 structure (`header`, `nav`, `main`, `section`, `article`, `footer`)
- ARIA labels and roles for screen reader support
- Fully tab-navigable, labeled contact form with inline validation
- Skip-to-content link and visible keyboard focus states
- SEO-friendly meta tags (title, description, Open Graph) on every page
- Responsive layout with a mobile navigation toggle
- Respects `prefers-reduced-motion`

## Tech Stack

- HTML5
- CSS3 (custom properties / design tokens, no framework)
- Vanilla JavaScript (nav toggle, form handling)
- Fonts: Space Grotesk, Inter, JetBrains Mono (Google Fonts)

## Project Structure

```
thiranex/
├── index.html
├── about.html
├── projects.html
├── contact.html
├── style.css
├── script.js
└── README.md
```

## Running Locally

**Option 1 — Open directly**
Just open `index.html` in your browser. No build step or server required.

**Option 2 — VS Code Live Server**
Open the folder in VS Code, install the "Live Server" extension, right-click `index.html` → "Open with Live Server".

**Option 3 — Python server**
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Deployment

This site is static and can be deployed for free on:
- **GitHub Pages** — push to a repo and enable Pages in Settings
- **Netlify** — drag and drop the folder, or connect the repo
- **Vercel** — import the repo and deploy

## Before Going Live

Update the placeholder URLs in each page's `<link rel="canonical">` and `<meta property="og:url">` tags (currently `https://example.com/...`) with your real domain or GitHub Pages URL.

## Contact

- Email: [jahnavigoud2007@gmail.com](mailto:jahnavigoud2007@gmail.com)
- Phone: +91 8179110525
- Location: Jogulamba Gadwal, Telangana, India

## License

© 2026 Munagala Jahnavi. All rights reserved.
