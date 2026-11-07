This repo already contains an older version of my portfolio (pasiura.com). Throw that implementation away and rebuild the site from scratch, in one pass, from these files (they sit in the repo root, untracked):

- `design/desktop.dc.html`: desktop design (1440 px)
- `design/mobile.dc.html`: mobile design (390 px)
- `CONTENT.md`: all copy, links and data
- `PROMPT.md`: this file
- `.claude/settings.json`: your permissions

The two design files use a canvas tool's template format (`<x-dc>`, `{{holes}}`, `<sc-for>`, `<sc-if>`, a `DCLogic` class). Treat them as the visual spec: take layout, spacing, sizes, colors, radii, typography and behavior from them, but do not port the format or copy their inline styles. Rebuild everything as clean Next.js components with SCSS modules. Where the design and CONTENT.md disagree, CONTENT.md wins.

Work autonomously and do not stop to ask me questions. When something is ambiguous, pick the option that matches the design and note it in the final summary. Run commands yourself (install, lint, typecheck, test, build) and fix what fails. Only stop once everything below is done and green.

## Step 0: reset the repo and drop the old history

Do this first, exactly in this order:

1. **Check the state.** Run `git status` and `git log --oneline -5`. If there are uncommitted changes to tracked files, commit them as `chore: snapshot before redesign`, so nothing is lost.
2. **Make a local safety net.** Create the branch `legacy` and the tag `legacy-before-redesign` pointing at the current HEAD. Do not push them. They are the only copy of the old history after the reset; I'll delete them myself later.
3. **Salvage assets.** Inspect the old project and copy anything still useful to `/tmp/portfolio-assets/`: the CV PDF, project screenshots, favicon or logo files, an OG image, and domain or deploy config (`CNAME`, `vercel.json`, `netlify.toml`, GitHub Actions deploy workflow). Copy nothing else: no components, styles, configs or dependencies. List what you saved in the final summary.
4. **Start a fresh history.** First copy the five handoff files to `/tmp/portfolio-handoff/`. Then run `git checkout --orphan redesign` and `git rm -r -q .`, which removes every old tracked file from the index and the disk. Untracked files stay. If any handoff file was tracked and got removed, copy it back from `/tmp/portfolio-handoff/`. Use `git rm`, not `rm`, for the old files; never run `git clean`; leave `.env*` files alone.
5. **Build the new project** in this same folder (everything below). Bring the salvaged assets back into `public/` (CV as `public/cv/Andrii_Pasiura_CV.pdf`) and the deploy config into the right place, updated for a static `out/` export if needed.
6. **Commit** in a few logical commits, for example: `chore: scaffold Next.js app and tooling`, `feat: design tokens, themes and layout`, `feat: sections and content`, `feat: seo, og, sitemap`, `test: unit tests`. Commit the handoff files too, in a `docs/handoff/` folder with `design/` inside it. Leave `.claude/settings.json` where it is.
7. **Replace main.** Run `git branch -D main` (or `master`, whichever exists), then `git branch -m main`. Main now has only the new commits, and the old history lives only in the local `legacy` branch and tag.
8. **Do not push.** In the final summary, give me the exact commands: `git push --force-with-lease origin main`, and how to delete `legacy` and the tag once I've checked the result.

## Stack (fixed, do not change)

- Next.js (latest stable), App Router, TypeScript `strict`, `output: 'export'` (fully static).
- Styling: SCSS modules plus design tokens as CSS custom properties. No Tailwind, CSS-in-JS or UI kits.
- pnpm.
- Pre-approved dependencies, install without asking: `next`, `react`, `react-dom`, `sass`, `zod`, `lucide-react`, `react-icons`. Dev: `typescript`, `@types/*`, `eslint`, `eslint-config-next`, `typescript-eslint`, `prettier`, `stylelint`, `stylelint-config-standard-scss`, `vitest`. Add nothing else.
- Fonts via `next/font/google`: Inter (400–800) and JetBrains Mono (400, 500).

## Folder structure

```
src/
  app/
    layout.tsx           # <html lang="en">, fonts, theme init script, metadata, JSON-LD
    page.tsx             # composes sections only
    robots.ts
    sitemap.ts
    opengraph-image.tsx  # 1200x630 matching the site; if it can't build under static
                         # export, ship a static public/og.png and reference it instead
    icon.svg
  components/
    layout/              # Header, MobileMenu, SideRail, Footer
    sections/            # Hero, About, Experience, Skills, Projects, Contact
    ui/                  # Container, SectionTitle, Button, IconButton, Chip, TechIcon
  features/
    theme/               # init script, ThemeProvider/useTheme, ThemeToggle
    clipboard/           # useCopyToClipboard, CopyEmailButton
    local-time/          # pure formatter + useKyivTime hook + <LocalTime/>
    active-section/      # useActiveSection (IntersectionObserver) for nav underline
  content/               # site.ts, experience.ts, skills.ts, projects.ts, schema.ts
  lib/                   # seo.ts (metadata, JSON-LD builders), cn helper if needed
  styles/
    tokens/_primitives.scss  _semantic.scss
    _breakpoints.scss  _mixins.scss  reset.scss  globals.scss
```

Each component lives in its own folder: `Component.tsx`, `Component.module.scss`, `index.ts`.

## Design tokens (from the design)

Dark theme / light theme:
- bg `#09090B` / `#FAFAF9`
- surface `#111113` / `#FFFFFF`
- surface-2 `#18181B` / `#F4F4F5`
- header bg `rgba(9,9,11,.78)` / `rgba(250,250,249,.82)`, backdrop blur 14px
- fg `#FAFAFA` / `#09090B`
- fg-2 `#D4D4D8` / `#27272A`
- muted `#A1A1AA` / `#52525B`
- dim `#8B8B93` / `#63636B`
- line `#232326` / `#E7E7EA`
- line-2 `#34343A` / `#D4D4D8`
- success `#3DD68C` / `#15803D`
- accent `#FF6B35` in both themes (fills, borders); accent-text `#FF8A5C` / `#C2410C`; on-accent `#09090B`
- tint: accent at 14% / 10% (chip backgrounds)
- glow: accent at 22% / 14% (hero radial glow, project screenshot shadow)

Also: radii 10 / 14 / 18 / 22 px and 999 px pills, content max-width 1240 px with 48 px side padding (20 px on mobile), 76 px header (64 px mobile), 140 px between sections (88 px mobile). Use clamp() for the hero sizes (title 104 → 58 px, subtitle 52 → 28 px). No raw hex values, spacing numbers or z-index numbers in component modules; enforce this with Stylelint where possible.

## Behavior

- **Theme.** Follows the system by default, with a toggle in the header (sun/moon). Persist an explicit choice in localStorage. An inline script in `<head>` sets `data-theme` before first paint, so there is no flash. Follow system changes while the user hasn't picked a theme. The toggle needs `aria-label` "Switch to light/dark theme".
- **Header.** Sticky, blurred. The active section is underlined in accent, driven by IntersectionObserver. Below the tablet breakpoint the nav collapses into an accessible menu button with a sheet: focus trap, Esc closes, body scroll locked.
- **Side rail.** Desktop only: fixed bottom-right, icons in this order: LinkedIn, GitHub, Telegram, with a 1 px vertical line under them. On mobile the same three icons sit right-aligned in the hero, each with a 44 px tap area.
- **Smooth scrolling** for in-page anchors with a header offset (`scroll-margin-top`), disabled under `prefers-reduced-motion`.
- **Hero entrance.** CSS fade-up with stagger (opacity and transform only), plus the radial accent glow behind the hero. No animation library.
- **Copy email** (Contact). An icon button inside the bordered email field. It uses the Clipboard API with a fallback. On success it shows a check icon in the success color for 2 s, and an aria-live region announces "Email copied to clipboard".
- **Kyiv local time** (Contact copy). Compute with `Intl.DateTimeFormat` for Europe/Kyiv, including the UTC offset, and update every 30 s. Render it only on the client after mount, so static HTML never causes a hydration mismatch. The formatter is a pure function with unit tests.
- **Back to top.** A round button in the footer that scrolls smoothly to the top (instantly under reduced motion).
- **Hover states** as in the design: outlined accent buttons fill with accent, chips lift 2 px and get an accent border, the project screenshot scales 1.01.

## Sections

Follow the design for each section. Highlights:
- **Section titles** use the `< Title />` pattern, with the brackets in accent mono and a gradient hairline on both sides.
- **Experience** is a vertical timeline: a gradient line, an accent dot for the current job and a muted dot for the previous one. Each job card has role @ company (company in accent), meta, a period pill, bullets with the `▹` marker in accent, and tech chips. On desktop the bullets sit in two columns. On mobile use the short variants from CONTENT.md and still show the tech chips.
- **Skills** have no container around a group: group title + accent `()`, chips with icons centered underneath.
- **Projects** show one per row. The card header has the number, title, kind and buttons (Live demo, Source code). Below it: the screenshot (16:10) left, text right (summary, Highlights, Tech stack chips). On mobile the card stacks: image, then content, then two buttons with icons.
- **Contact** has no outer container: heading, text, email field with copy icon, then three icon buttons (Telegram, LinkedIn, GitHub).
- **Footer** has the round back-to-top button and the copyright only, with no background or border.
- Every button and link that has an icon in the design keeps it on mobile too.

## Content and data

- All copy goes in `src/content/*.ts`, typed, validated with Zod at build time; invalid content fails the build. Components get typed props and contain no copy and no logic.
- Projects are placeholders exactly as in CONTENT.md; the schema supports optional links and image.

## SEO and sharing

- Metadata API: title, description, canonical, `metadataBase` from site config, OpenGraph and Twitter `summary_large_image`.
- JSON-LD `Person` (name, jobTitle, url, `sameAs` socials, address locality Kyiv).
- `robots.ts`, `sitemap.ts`, favicon/icon, `theme-color` for both schemes.
- Semantic HTML: one h1, landmarks, a skip link, `aria-label` on icon-only buttons and links, `alt` on images.

## Quality bar

- Accessibility: keyboard navigation, visible focus (2 px accent outline, 3 px offset, `:focus-visible` only), AA contrast in both themes, touch targets ≥ 44 px on mobile.
- Performance: zero layout shift, no client JS except ThemeToggle, MobileMenu, CopyEmailButton, LocalTime and the active-section hook; everything else stays a Server Component.
- Unit tests (Vitest) for the local-time formatter, the theme resolver and the content schemas.
- Scripts: `dev`, `build`, `start` (serve `out/`), `lint`, `lint:styles`, `typecheck`, `test`, `format`.
- No em dashes anywhere in the copy.
- README (replace the old one): stack, structure, how to edit content, how to replace the project placeholders and the CV, how to deploy the static `out/` folder.

## Definition of done

`pnpm lint`, `pnpm lint:styles`, `pnpm typecheck`, `pnpm test` and `pnpm build` all pass, and the static export renders both themes correctly at 390 px and 1440 px. The repo is reset as described in Step 0, `main` contains only the new history, and nothing was pushed. Finish with a short summary: what was built, the salvaged assets, any decisions you made where the spec was ambiguous, and what I still need to provide (real projects, screenshots, CV PDF, OG image check).
