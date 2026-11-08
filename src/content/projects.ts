import type { Project, ProjectEntry } from './schema';

const entries: ProjectEntry[] = [
  {
    title: 'UmiFy',
    kind: 'Fullstack · pet project',
    summary: {
      full: 'Web app for building UML use case diagrams. Drag actors, use cases and system boundaries onto a canvas, connect them with real UML relationships, then export the result or share a read-only link.',
      short: 'Web app for building UML use case diagrams with export and read-only share links.',
    },
    highlights:
      'A React Flow editor with association, include, extend and generalization edges, undo / redo and PNG / SVG export. Auth.js sign-in with GitHub, Google or as a guest, and a Drizzle data layer tested against in-memory Postgres (PGlite).',
    stack: ['Next.js', 'TypeScript', 'React Flow', 'Zustand', 'Drizzle ORM', 'PostgreSQL'],
    links: { source: 'https://github.com/andriipasiura/umify', live: "https://umify-omega.vercel.app" },
    image: {
      src: '/projects/umify.png',
      alt: 'UmiFy editor with a patient booking use case diagram',
    },
  },
  {
      title: 'Web Vitals Monitor',
      kind: 'Fullstack · pet project',
      summary: {
        full: 'Self-hosted real-user monitoring for Core Web Vitals. A tiny script collects LCP, INP, CLS, FCP and TTFB from real visitors; the dashboard shows percentiles per route, device and release, and flags the release that made a page slower.',
        short: 'Self-hosted real-user monitoring for Core Web Vitals, with per-route, per-device and per-release breakdowns.',
      },
      highlights:
        'A collector SDK under a 7 KB gzipped budget enforced in CI, and a NestJS ingestion API that queues events through BullMQ with Redis rate limits. Events land in daily Postgres partitions and roll up into hourly histograms, so percentiles over 90 days come from rollups instead of raw rows. Regressions are detected by comparing each release with the previous one per route and ranking changes by how far they exceed sampling noise.',
      stack: ['NestJS', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Redis', 'BullMQ', 'Next.js', 'React'],
      links: {
        source: 'https://github.com/andriipasiura/web-vitals-monitor',
      },
      image: {
        src: '/projects/web-vitals-monitor.png',
        alt: 'Web Vitals Monitor overview with metric cards, an LCP trend chart with release markers and a regression on /checkout',
      },
    },
];

export const projects: Project[] = entries.map((project, index) => ({
  ...project,
  links: project.links ?? {},
  number: String(index + 1).padStart(2, '0'),
}));
