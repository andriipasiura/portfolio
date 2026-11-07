import { type Job } from './schema';

export const experience: Job[] = [
  {
    role: 'Frontend Developer',
    company: 'Live streaming platform',
    meta: {
      full: 'Web Infrastructure Team · international product, NDA · 10+ frontend teams · 30+ micro-frontends',
      short: 'Web Infrastructure · NDA · 10+ FE teams · 30+ MFEs',
    },
    period: 'Sep 2024 – Oct 2026',
    current: true,
    bullets: {
      full: [
        'Built a host-initialized shared library that gives micro-frontends direct access to feature flags and store data: ~20% fewer loader dependencies, no host redeploys for dependency changes (about ⅓ of host MRs).',
        'Built an internal Slack AI agent that analyzes metric drops after web releases and points to likely causes; contributed to the team’s AI skills library.',
        'Introduced custom performance marks tracked in Looker and Coralogix by platform, browser and device; analyzed regressions with ad-hoc SQL in BigQuery.',
        'Added size-limit bundle reporting to GitLab CI and advised product teams on the impact of their changes.',
        'Served twice as web release sheriff: release scope, staged rollout monitoring, hotfixes, go/no-go sign-off.',
      ],
      short: [
        'Shared library for MFEs: ~20% fewer loader dependencies, about ⅓ of host MRs gone.',
        'Slack AI agent that explains metric drops after releases.',
        'Performance marks in Looker and Coralogix, SQL analysis in BigQuery.',
        'size-limit in GitLab CI; web release sheriff twice.',
      ],
    },
    tech: ['React', 'TypeScript', 'Module Federation', 'Webpack', 'Vite', 'GitLab CI', 'BigQuery'],
  },
  {
    role: 'Frontend Developer',
    company: 'Betinvest Ltd',
    meta: {
      full: 'B2B Platform Team · outstaff · multi-brand iGaming platform, 20+ brands · React / TypeScript monorepo',
      short: 'B2B Platform · outstaff · iGaming, 20+ brands',
    },
    period: 'Sep 2023 – Aug 2024',
    current: false,
    bullets: {
      full: [
        'Delivered user-facing features from BA requirements to production: KYC verification flows, affiliate tracking, bonus cards and casino lobby game grids.',
        'Launched 4 partner brands (frontend and CMS setup); the fastest went live in 10 days.',
        'Migrated 10+ shared libraries from JavaScript to TypeScript and global state from React Context to Zustand to cut app-wide re-renders.',
        'Raised the casino lobby’s Lighthouse score from 35 to 65 through code splitting, lazy loading and resource prioritization.',
      ],
      short: [
        'KYC flows, affiliate tracking, bonus cards, lobby game grids, from BA specs to production.',
        'Launched 4 partner brands; the fastest in 10 days.',
        '10+ libraries to TypeScript; Context to Zustand.',
        'Casino lobby Lighthouse 35 → 65.',
      ],
    },
    tech: ['React', 'TypeScript', 'Zustand', 'Monorepo', 'CMS'],
  },
];
