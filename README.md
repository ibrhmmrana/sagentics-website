# Sagentics Website

Next.js 15 app with **Host Grotesk** and **Inter** (Google Fonts), Tailwind CSS v4, and a dedicated images folder.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Images

- **Folder:** `public/images/` (create subfolders as needed, e.g. `public/images/hero/`, `public/images/team/`).
- **In code:** Use paths like `/images/photo.jpg` or `/images/hero/banner.jpg`.
- **Next.js Image:** Use `next/image` with `src="/images/..."` and set `width`/`height` or `fill`.

## Fonts

- **Inter** – default body text (`font-sans` in Tailwind).
- **Host Grotesk** – headings / display (`font-display` in Tailwind).

Both are loaded via `next/font/google` and exposed as CSS variables in the root layout.

## What to build next

Tell your AI assistant what you want (e.g. “landing page with hero and CTA”, “about page with team grid”, “pricing section”) and it can build on this setup.
