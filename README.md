# Mahmoud Ahmed Hassan — Software Engineer Portfolio

Premium, dark-themed, responsive personal portfolio built with **React + Vite + Tailwind CSS + Framer Motion + Lucide icons**.

## 1. Project structure

```
mahmoud-hassan-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── assets/                  ← put screenshots / images here
│   └── Mahmoud-Hassan-CV.pdf    ← replace with the real CV (same file name)
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── data/
│   │   └── portfolioData.js     ← ★ edit ALL content/links here
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Education.jsx
│       ├── Certificates.jsx
│       ├── Languages.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
└── README.md
```

## 2. Installation

Requirements: **Node.js 18+**

```bash
cd mahmoud-hassan-portfolio
npm install
```

> On Windows, if `npm` is blocked by ExecutionPolicy, run:
> `& "C:\Program Files\nodejs\npm.cmd" install`

## 3. Run the dev server

```bash
npm run dev
```

Open http://localhost:5173

## 4. Production build

```bash
npm run build
npm run preview   # preview the dist/ output locally
```

The static output is in `dist/` — deploy that folder anywhere.

## 5. Deploy

### Vercel (recommended)
1. Push the folder to GitHub.
2. Go to https://vercel.com → **Add New → Project** → import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output dir `dist`.
4. Deploy.

### Netlify
1. Push to GitHub, then https://app.netlify.com → **Add new site → Import an existing project**.
2. Build command: `npm run build`, publish directory: `dist`.
3. Or drag-and-drop `dist/` into https://app.netlify.com/drop.

## 6. Customization — CV, LinkedIn, project URLs

Everything lives in **`src/data/portfolioData.js`**:

| What | Where | How |
|---|---|---|
| Real CV | `public/Mahmoud-Hassan-CV.pdf` | Replace the placeholder PDF, keep the same name. Or change `personal.cvFile`. |
| LinkedIn | `personal.linkedin` | Paste full URL, e.g. `https://www.linkedin.com/in/your-handle`. While empty, buttons show **Coming Soon** and stay disabled. |
| Project demo | `projects[i].liveUrl` | Paste URL to enable the **Live Demo** button, else it renders **Coming Soon** disabled. |
| Project source | `projects[i].sourceUrl` | Paste repo URL to enable **Source**, else disabled. |
| Email / phone / location | `personal.*` | Edit in place. |
| Grade wording | `education.grade` | Confirm official wording with Benha University before publishing. |

> Placeholders never look like working links: empty URLs render a dashed **“· Soon”** disabled chip with `aria-disabled` + tooltip.

## 7. Contact form — how delivery works

- There is **no backend** by default.
- The form does full front-end validation with accessible error messages.
- On valid submit it opens the visitor's mail app via `mailto:` pre-filled to `mahmoudahmed600080@gmail.com`.
- The success message explicitly says the mail app was opened — it never claims auto-delivery.
- To receive messages directly later, connect **Formspree** or **EmailJS** and replace the `window.location.href = mailto…` line in `src/components/Contact.jsx`.

## 8. Testing checklist

- [ ] **Mobile (360px):** no horizontal scroll, hero stacks, hamburger opens/closes, buttons ≥ 44px.
- [ ] **Tablet / desktop:** 2–3 col grids, visuals aligned, no overlap.
- [ ] **Navbar:** sticky, glass on scroll, active link underline follows sections, Let's Talk scrolls to contact.
- [ ] **Hero buttons:** View My Projects → #projects, Contact Me → #contact, Download CV downloads the PDF.
- [ ] **Projects:** all Coming-Soon buttons are disabled with tooltip; paste a test URL → button becomes a working `_blank` link.
- [ ] **Contact:** empty submit shows errors; invalid email shows error; valid submit opens mail app + shows info message.
- [ ] **Footer:** year is current, copyright reads `© [year] Mahmoud Hassan. All rights reserved.`
- [ ] **A11y:** Tab through all controls, visible focus ring, skip-to-content link, `prefers-reduced-motion` disables animation.
- [ ] **Console:** `npm run build` passes with zero errors/warnings about the portfolio code.
