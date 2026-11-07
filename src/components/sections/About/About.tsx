import { Download } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { type Site } from '@/content';
import { cn } from '@/lib/cn';

import styles from './About.module.scss';

type Props = {
  about: Site['about'];
  cv: Site['cv'];
};

export function About({ about, cv }: Props) {
  return (
    <Container as="section" id="about" className={styles.section} aria-labelledby="about-title">
      <SectionTitle id="about-title">{about.title}</SectionTitle>
      <div className={styles.body}>
        <p className={styles.lead}>
          {about.lead.before} <span className={styles.accent}>{about.lead.accent}</span>
          {about.lead.after}
        </p>
        <div className={cn(styles.paragraphs, 'desktopOnly')}>
          {about.paragraphs.full.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className={cn(styles.paragraphs, 'mobileOnly')}>
          {about.paragraphs.short.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className={styles.actions}>
          <Button
            href={cv.href}
            download={cv.fileName}
            stretchOnMobile
            icon={<Download size={14} strokeWidth={1.5} aria-hidden />}
            iconPosition="end"
          >
            {about.cvAction}
          </Button>
        </div>
      </div>
    </Container>
  );
}
