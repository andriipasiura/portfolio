import { type IconType } from 'react-icons';
import {
  SiClaude,
  SiCss,
  SiDocker,
  SiDrizzle,
  SiGitlab,
  SiGooglebigquery,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiLighthouse,
  SiLooker,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPnpm,
  SiPostgresql,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVite,
  SiWebpack,
  SiZod,
} from 'react-icons/si';

import styles from './TechIcon.module.scss';

const ICONS: Partial<Record<string, IconType>> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  React: SiReact,
  'Next.js': SiNextdotjs,
  HTML: SiHtml5,
  'CSS / SCSS': SiCss,
  'Tailwind CSS': SiTailwindcss,
  'shadcn/ui': SiShadcnui,
  Redux: SiRedux,
  'TanStack Query': SiReactquery,
  'React Hook Form': SiReacthookform,
  Zod: SiZod,
  'Node.js': SiNodedotjs,
  NestJS: SiNestjs,
  PostgreSQL: SiPostgresql,
  'Drizzle ORM': SiDrizzle,
  Redis: SiRedis,
  'JWT auth': SiJsonwebtokens,
  Webpack: SiWebpack,
  Vite: SiVite,
  'pnpm workspaces': SiPnpm,
  Lighthouse: SiLighthouse,
  Looker: SiLooker,
  BigQuery: SiGooglebigquery,
  Jest: SiJest,
  'Testing Library': SiTestinglibrary,
  Docker: SiDocker,
  'GitLab CI': SiGitlab,
  'Claude Code': SiClaude,
};

type Props = {
  name: string;
  mark: string;
};

export function TechIcon({ name, mark }: Props) {
  const Icon = ICONS[name];
  return (
    <span className={styles.badge} aria-hidden>
      {Icon ? <Icon className={styles.icon} /> : mark}
    </span>
  );
}
