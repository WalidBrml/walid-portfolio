# Walid Bouremel — Data Analyst Portfolio

React + TypeScript + Vite + Tailwind CSS + Framer Motion + Recharts + Lucide.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build

```bash
npm run build      # type-checks, then writes ./dist
npm run preview    # serves ./dist locally to check it
```

## Edit content (no component changes needed)

| File | Controls |
|---|---|
| `src/data/site.ts` | Name, email, phone, links, hero text and stats, About text and counters, footer |
| `src/data/skills.ts` | The 12 skills, categories, percentages, radar chart values |
| `src/data/experience.ts` | The two internships |
| `src/data/projects.ts` | Projects, filters, GitHub / Live Dashboard / LinkedIn links (a button shows only if its URL exists) |
| `src/data/certifications.ts` | Certificates and verification links |
| `public/Walid_Bouremel_CV.pdf` | Resume used by every download button (replace the file, keep the name) |
| `public/images/walid.webp`, `walid.jpg` | Portrait |

## Deploy

### Vercel (simplest)
1. Push this folder to a GitHub repository.
2. Go to vercel.com, choose **Add New → Project**, import the repo.
3. Keep the detected Vite settings and click **Deploy**.

### GitHub Pages
1. Push to a repository (the workflow in `.github/workflows/deploy.yml` is included).
2. In the repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`. The site appears at `https://<username>.github.io/<repo-name>/`.
   For a user site (repo named `<username>.github.io`), set `VITE_BASE` to `/` in the workflow.

Manual alternative: `VITE_BASE=/<repo-name>/ npm run build` and publish `dist/`.
