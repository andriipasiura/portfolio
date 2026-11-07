# pasiura.com

Personal portfolio of Andrii Pasiura. A single static page built with Next.js and exported to plain HTML, CSS and a little JS.

## Stack

- Next.js (App Router) with `output: 'export'`, TypeScript `strict`
- SCSS modules on top of design tokens exposed as CSS custom properties
- `next/font/google`: Inter and JetBrains Mono
- `lucide-react` for UI icons, [Iconify](https://icon-sets.iconify.design/) sets (`simple-icons`, `devicon-plain`, `lucide`, `mdi`) for brand and tech icons, inlined as SVG at build time
- Vitest, ESLint (`eslint-config-next` + `typescript-eslint`), Stylelint, Prettier
- pnpm

## Scripts

| Script             | What it does                                 |
| ------------------ | -------------------------------------------- |
| `pnpm dev`         | Dev server on http://localhost:3000          |
| `pnpm build`       | Static export into `out/`                    |
| `pnpm start`       | Serves `out/` locally (run `build` first)    |
| `pnpm lint`        | ESLint                                       |
| `pnpm lint:styles` | Stylelint (blocks raw hex, spacing, z-index) |
| `pnpm typecheck`   | `tsc --noEmit`                               |
| `pnpm test`        | Vitest unit tests                            |
| `pnpm format`      | Prettier                                     |

## Structure

```
src/
  app/            layout (fonts, theme init script, metadata, JSON-LD), page, robots, sitemap, og.png, icon
  components/
    layout/       Header, MobileMenu, SideRail, Footer
    sections/     Hero, About, Experience, Skills, Projects, Contact
    ui/           Container, SectionTitle, Button, IconButton, Chip, Icon, TechIcon, SocialIcon
  features/
    theme/        system-aware theme with a flash-free inline script and a toggle
    clipboard/    copy email button with Clipboard API fallback
    local-time/   Kyiv time formatter, hook and <LocalTime/>
    active-section/ IntersectionObserver hook for the nav underline
  content/        all copy and data, typed by content/schema.ts
  lib/            SEO builders, cn helper
  styles/         tokens (primitives, semantic themes), breakpoints, mixins, reset, globals
docs/handoff/     the original brief and design files
```

Every component lives in its own folder with `Component.tsx`, `Component.module.scss` and `index.ts`. Only the theme toggle, mobile menu, nav highlight, copy button and local time ship client JS; everything else renders on the server at build time.

## Editing content

All copy lives in `src/content/`:

- `site.ts`: name, links, SEO, navigation, UI labels, hero, about, contact
- `experience.ts`: jobs (`full` copy for desktop, `short` copy for mobile)
- `skills.ts`: skill groups; `icon` is an Iconify id such as `simple-icons:react`
- `projects.ts`: project cards

Types in `content/schema.ts` describe every field, so a missing or wrong field fails `pnpm typecheck` and `pnpm build`. `content/content.test.ts` checks the rules types can't express (no em dashes, unique nav ids, one current job and so on).

Icons are Iconify ids (`prefix:name`). Find one at https://icon-sets.iconify.design/ and use it directly if its set is registered in `src/components/ui/Icon/icons.ts`; otherwise install `@iconify-json/<prefix>` and add it there. An unknown id fails the build.

## Replacing the project placeholders

Each entry in `src/content/projects.ts` accepts:

```ts
{
  title: 'My app',
  kind: 'Fullstack · pet project',
  summary: { full: 'Desktop summary.', short: 'Mobile summary.' },
  highlights: 'What was hard and how it was solved.',
  stack: ['Next.js', 'NestJS', 'PostgreSQL'],
  links: { live: 'https://…', source: 'https://github.com/…' },
  image: { src: '/projects/my-app.webp', alt: 'My app dashboard' },
}
```

`links` and `image` are optional. Without `image` the striped placeholder is shown; without links the buttons are hidden. Put screenshots in `public/projects/` at 16:10 (for example 1600 × 1000).

## Replacing the CV

Overwrite `public/cv/Andrii_Pasiura_CV.pdf`. To rename it, update `cv` in `src/content/site.ts`.

## Deploying

`pnpm build` writes a fully static site to `out/`. Upload that folder to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3). URLs use trailing slashes, and the OG image is generated at build time as `out/og.png`. The canonical URL comes from `url` in `src/content/site.ts`.
