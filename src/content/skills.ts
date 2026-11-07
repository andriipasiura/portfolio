import { type SkillGroup } from './schema';

export const skills: SkillGroup[] = [
  {
    name: 'Frontend',
    items: [
      { name: 'TypeScript', icon: 'simple-icons:typescript' },
      { name: 'JavaScript', icon: 'simple-icons:javascript' },
      { name: 'React', icon: 'simple-icons:react' },
      { name: 'Next.js', icon: 'simple-icons:nextdotjs' },
      { name: 'HTML', icon: 'simple-icons:html5' },
      { name: 'CSS / SCSS', icon: 'simple-icons:css' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
      { name: 'shadcn/ui', icon: 'simple-icons:shadcnui' },
    ],
  },
  {
    name: 'State & data',
    items: [
      { name: 'Zustand', icon: 'devicon-plain:zustand' },
      { name: 'Redux', icon: 'simple-icons:redux' },
      { name: 'TanStack Query', icon: 'simple-icons:reactquery' },
      { name: 'React Hook Form', icon: 'simple-icons:reacthookform' },
      { name: 'Zod', icon: 'simple-icons:zod' },
    ],
  },
  {
    name: 'Backend',
    items: [
      { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
      { name: 'NestJS', icon: 'simple-icons:nestjs' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
      { name: 'Drizzle ORM', icon: 'simple-icons:drizzle' },
      { name: 'Redis', icon: 'simple-icons:redis' },
      { name: 'REST API design', icon: 'lucide:braces' },
      { name: 'JWT auth', icon: 'simple-icons:jsonwebtokens' },
    ],
  },
  {
    name: 'Architecture & build',
    items: [
      { name: 'Module Federation', icon: 'lucide:network' },
      { name: 'Webpack', icon: 'simple-icons:webpack' },
      { name: 'Vite', icon: 'simple-icons:vite' },
      { name: 'pnpm workspaces', icon: 'simple-icons:pnpm' },
    ],
  },
  {
    name: 'Performance & monitoring',
    items: [
      { name: 'Core Web Vitals', icon: 'lucide:gauge' },
      { name: 'Lighthouse', icon: 'simple-icons:lighthouse' },
      { name: 'Bundle analysis', icon: 'lucide:package-search' },
      { name: 'Looker', icon: 'simple-icons:looker' },
      { name: 'Coralogix', icon: 'lucide:activity' },
      { name: 'BigQuery', icon: 'simple-icons:googlebigquery' },
    ],
  },
  {
    name: 'Testing, DevOps & AI',
    items: [
      { name: 'Jest', icon: 'simple-icons:jest' },
      { name: 'Testing Library', icon: 'simple-icons:testinglibrary' },
      { name: 'Playwright', icon: 'devicon-plain:playwright' },
      { name: 'Testcontainers', icon: 'lucide:container' },
      { name: 'Docker', icon: 'simple-icons:docker' },
      { name: 'GitLab CI', icon: 'simple-icons:gitlab' },
      { name: 'Claude Code', icon: 'simple-icons:claude' },
      { name: 'Codex', icon: 'devicon-plain:codex' },
    ],
  },
];
