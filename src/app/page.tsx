import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { SideRail } from '@/components/layout/SideRail';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Experience } from '@/components/sections/Experience';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { contactSocials, experience, projects, site, skills } from '@/content';

import styles from './page.module.scss';

export default function HomePage() {
  const { ui } = site;

  return (
    <>
      <a href="#main" className={styles.skipLink}>
        {ui.skipLink}
      </a>
      <Header name={site.name} nav={site.nav} cv={site.cv} labels={ui} />
      <SideRail socials={site.socials} label={ui.profilesNav} />
      <main id="main" tabIndex={-1} className={styles.main}>
        <Hero
          name={site.name}
          hero={site.hero}
          socials={site.socials}
          profilesLabel={ui.profilesNav}
        />
        <About about={site.about} cv={site.cv} />
        <Experience
          title={site.sections.experience}
          jobs={experience}
          technologiesLabel={ui.technologies}
        />
        <Skills title={site.sections.skills} groups={skills} />
        <Projects title={site.sections.projects} projects={projects} labels={ui} />
        <Contact
          title={site.sections.contact}
          contact={site.contact}
          email={site.email}
          socials={contactSocials}
          labels={ui}
        />
      </main>
      <Footer copyright={site.copyright} backToTopLabel={ui.backToTop} />
    </>
  );
}
