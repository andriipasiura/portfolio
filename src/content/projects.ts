import { type Project, type ProjectEntry, type ProjectLinks, type ResponsiveText } from './schema';

const SUMMARY_PLACEHOLDER: ResponsiveText = {
  full: '[Two or three sentences: what the project does, who it is for, and what makes it interesting technically.]',
  short: '[Two or three sentences: what it does and what makes it interesting technically.]',
};

const PLACEHOLDER_LINKS: ProjectLinks = { live: '#', source: '#' };

const entries: ProjectEntry[] = [
  {
    title: '[Project name]',
    kind: '[Fullstack · pet project]',
    summary: SUMMARY_PLACEHOLDER,
    highlights:
      '[One or two concrete things you solved: a tricky feature, an architecture decision, a measurable result.]',
    stack: ['[Tech]', '[Tech]', '[Tech]', '[Tech]', '[Tech]'],
    links: PLACEHOLDER_LINKS,
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
