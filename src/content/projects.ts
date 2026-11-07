import { type Project, type ProjectEntry, type ProjectLinks, type ResponsiveText } from './schema';

const SUMMARY_PLACEHOLDER: ResponsiveText = {
  full: '[Two or three sentences: what the project does, who it is for, and what makes it interesting technically.]',
  short: '[Two or three sentences: what it does and what makes it interesting technically.]',
};

const PLACEHOLDER_LINKS: ProjectLinks = { live: '#', source: '#' };

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
    links: { source: 'https://github.com/andriipasiura/umify' },
    image: {
      src: '/projects/umify.png',
      alt: 'UmiFy editor with a patient booking use case diagram',
    },
  },
  {
    title: '[Project name]',
    kind: '[Frontend · pet project]',
    summary: SUMMARY_PLACEHOLDER,
    highlights: '[One or two concrete things you solved.]',
    stack: ['[Tech]', '[Tech]', '[Tech]', '[Tech]'],
    links: PLACEHOLDER_LINKS,
  },
  {
    title: '[Project name]',
    kind: '[Desktop · pet project]',
    summary: SUMMARY_PLACEHOLDER,
    highlights: '[One or two concrete things you solved.]',
    stack: ['[Tech]', '[Tech]', '[Tech]'],
    links: PLACEHOLDER_LINKS,
  },
];

export const projects: Project[] = entries.map((project, index) => ({
  ...project,
  links: project.links ?? {},
  number: String(index + 1).padStart(2, '0'),
}));
