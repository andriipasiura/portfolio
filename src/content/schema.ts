export type HttpsUrl = `https://${string}`;

export type LinkHref = HttpsUrl | '#';

export type TimeTemplate = `${string}{time}${string}`;

export type ResponsiveText = {
  full: string;
  short: string;
};

export type ResponsiveList = {
  full: string[];
  short: string[];
};

export type AccentedText = {
  before?: string;
  accent: string;
  after?: string;
};

export type SocialNetwork = 'linkedin' | 'github' | 'telegram';

export type Social = {
  network: SocialNetwork;
  label: string;
  url: HttpsUrl;
};

export type NavItem = {
  id: string;
  label: string;
};

export type Site = {
  name: string;
  jobTitle: string;
  url: HttpsUrl;
  locale: string;
  city: string;
  country: string;
  email: `${string}@${string}`;
  cv: { href: `/${string}.pdf`; fileName: `${string}.pdf` };
  seo: { title: string; description: string; ogImageAlt: string };
  socials: Social[];
  nav: NavItem[];
  ui: {
    skipLink: string;
    mainNav: string;
    profilesNav: string;
    openMenu: string;
    closeMenu: string;
    resume: string;
    backToTop: string;
    copyEmail: string;
    emailCopied: string;
    emailCopiedAnnouncement: string;
    technologies: string;
    liveDemo: string;
    sourceCode: string;
    highlights: string;
    techStack: string;
    screenshotPlaceholder: string;
  };
  hero: {
    greeting: string;
    title: string;
    intro: ResponsiveText;
    primaryAction: string;
    secondaryAction: string;
  };
  about: {
    title: string;
    lead: AccentedText;
    paragraphs: ResponsiveList;
    cvAction: string;
  };
  sections: {
    experience: string;
    skills: string;
    projects: string;
    contact: string;
  };
  contact: {
    heading: AccentedText;
    channels: SocialNetwork[];
    note: { full: TimeTemplate; short: TimeTemplate };
  };
  copyright: string;
};

export type Job = {
  role: string;
  company: string;
  meta: ResponsiveText;
  period: string;
  current: boolean;
  bullets: ResponsiveList;
  tech: string[];
};

export type Skill = {
  name: string;
  mark: string;
};

export type SkillGroup = {
  name: string;
  items: Skill[];
};

export type ProjectLinks = {
  live?: LinkHref;
  source?: LinkHref;
};

export type ProjectEntry = {
  title: string;
  kind: string;
  summary: ResponsiveText;
  highlights: string;
  stack: string[];
  links?: ProjectLinks;
  image?: { src: `/${string}`; alt: string };
};

export type Project = ProjectEntry & {
  number: string;
  links: ProjectLinks;
};
