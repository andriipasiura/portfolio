import { type Site } from './schema';

export const site: Site = {
  name: 'Andrii Pasiura',
  jobTitle: 'Frontend / Fullstack Developer',
  url: 'https://pasiura.com',
  locale: 'en_US',
  city: 'Kyiv',
  country: 'UA',
  email: 'pasiura.andrii.dev@gmail.com',
  cv: { href: '/cv/CV_Andrii_Pasiura_Fullstack_Developer.pdf', fileName: 'CV_Andrii_Pasiura_Fullstack_Developer.pdf' },
  seo: {
    title: 'Andrii Pasiura · Frontend / Fullstack Developer',
    description:
      'Frontend / fullstack developer from Kyiv with 3 years of React and TypeScript, now building with NestJS and PostgreSQL. Open to remote roles.',
    ogImageAlt: 'Andrii Pasiura, Frontend / Fullstack Developer',
  },
  socials: [
    { network: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/andrii-pasiura' },
    { network: 'github', label: 'GitHub', url: 'https://github.com/andriipasiura' },
    { network: 'telegram', label: 'Telegram', url: 'https://t.me/pa_andrii' },
  ],
  nav: [
    { id: 'top', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],
  ui: {
    skipLink: 'Skip to content',
    mainNav: 'Main',
    profilesNav: 'Profiles',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    resume: 'Resume',
    backToTop: 'Back to top',
    copyEmail: 'Copy email',
    emailCopied: 'Email copied',
    emailCopiedAnnouncement: 'Email copied to clipboard',
    technologies: 'Technologies',
    liveDemo: 'Live demo',
    sourceCode: 'Source code',
    highlights: 'Highlights',
    techStack: 'Tech stack',
    screenshotPlaceholder: '[ app screenshot ]',
  },
  hero: {
    greeting: 'Hi, my name is,',
    title: 'Frontend / Fullstack Developer.',
    intro: {
      full: '3 years of React and TypeScript on a live streaming platform with 30+ micro-frontends and a multi-brand iGaming platform. Now building with NestJS and PostgreSQL.',
      short:
        '3 years of React and TypeScript on a live streaming platform (30+ micro-frontends) and a multi-brand iGaming platform. Now building with NestJS and PostgreSQL.',
    },
    primaryAction: 'Get in touch',
    secondaryAction: 'View projects',
  },
  about: {
    title: 'About me',
    lead: {
      before: 'Hey, I’m',
      accent: 'Andrii',
      after: ', a frontend developer from Kyiv moving into fullstack.',
    },
    paragraphs: {
      full: [
        'For the last two years I worked in the web infrastructure team of an international live streaming platform: a micro-frontend setup with 30+ apps and 10+ frontend teams. I built a shared library that removed about a third of host merge requests, set up performance monitoring and a Slack AI agent that explains metric drops after releases.',
        'Before that I shipped features and launched partner brands on a multi-brand iGaming platform. Now I’m building fullstack projects with NestJS and PostgreSQL and finishing my Software Engineering degree at KPI.',
      ],
      short: [
        'Two years in the web infrastructure team of an international live streaming platform: 30+ micro-frontends, 10+ frontend teams. Before that, features and brand launches on a multi-brand iGaming platform.',
        'Now building fullstack projects with NestJS and PostgreSQL and finishing my degree at KPI.',
      ],
    },
    cvAction: 'Download CV',
  },
  sections: {
    experience: 'Experience',
    skills: 'My skills',
    projects: 'Projects',
    contact: 'Contact',
  },
  contact: {
    heading: { before: 'Have a role in mind?', accent: 'Let’s talk.' },
    channels: ['telegram', 'linkedin', 'github'],
    note: {
      full: 'Fullstack or frontend, product teams, remote. Email and Telegram reach me fastest; I’m in Kyiv, UTC{offset}, and it’s {time} here now.',
      short: 'Email and Telegram reach me fastest. Kyiv, {time} now.',
    },
  },
  copyright: '© 2026 Andrii Pasiura',
};

export const contactSocials = site.contact.channels.flatMap((network) =>
  site.socials.filter((social) => social.network === network),
);
