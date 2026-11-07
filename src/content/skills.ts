import { type SkillGroup } from './schema';

export const skills: SkillGroup[] = [
  {
    name: 'Frontend',
    items: [
      { mark: 'TS', name: 'TypeScript' },
      { mark: 'JS', name: 'JavaScript' },
      { mark: 'Re', name: 'React' },
      { mark: 'Nx', name: 'Next.js' },
      { mark: 'H5', name: 'HTML' },
      { mark: 'Cs', name: 'CSS / SCSS' },
      { mark: 'Tw', name: 'Tailwind CSS' },
      { mark: 'ui', name: 'shadcn/ui' },
    ],
  },
  {
    name: 'State & data',
    items: [
      { mark: 'Zu', name: 'Zustand' },
      { mark: 'Rx', name: 'Redux' },
      { mark: 'TQ', name: 'TanStack Query' },
      { mark: 'RH', name: 'React Hook Form' },
      { mark: 'Zd', name: 'Zod' },
    ],
  },
  {
    name: 'Backend',
    items: [
      { mark: 'No', name: 'Node.js' },
      { mark: 'Ne', name: 'NestJS' },
      { mark: 'Pg', name: 'PostgreSQL' },
      { mark: 'Dz', name: 'Drizzle ORM' },
      { mark: 'Rd', name: 'Redis' },
      { mark: '{}', name: 'REST API design' },
      { mark: 'JW', name: 'JWT auth' },
    ],
  },
  {
    name: 'Architecture & build',
    items: [
      { mark: 'MF', name: 'Module Federation' },
      { mark: 'Wp', name: 'Webpack' },
      { mark: 'Vi', name: 'Vite' },
      { mark: 'pn', name: 'pnpm workspaces' },
    ],
  },
  {
    name: 'Performance & monitoring',
    items: [
      { mark: 'WV', name: 'Core Web Vitals' },
      { mark: 'LH', name: 'Lighthouse' },
      { mark: 'BA', name: 'Bundle analysis' },
      { mark: 'Lk', name: 'Looker' },
      { mark: 'Cx', name: 'Coralogix' },
      { mark: 'BQ', name: 'BigQuery' },
    ],
  },
  {
    name: 'Testing, DevOps & AI',
    items: [
      { mark: 'Je', name: 'Jest' },
      { mark: 'TL', name: 'Testing Library' },
      { mark: 'Pw', name: 'Playwright' },
      { mark: 'TC', name: 'Testcontainers' },
      { mark: 'Dk', name: 'Docker' },
      { mark: 'CI', name: 'GitLab CI' },
      { mark: 'CC', name: 'Claude Code' },
      { mark: 'Cx', name: 'Codex' },
    ],
  },
];
