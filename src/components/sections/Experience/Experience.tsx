import { Chip } from '@/components/ui/Chip';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { type Job } from '@/content';
import { cn } from '@/lib/cn';

import styles from './Experience.module.scss';

type Props = {
  title: string;
  jobs: Job[];
  technologiesLabel: string;
};

function Bullets({ items, className }: { items: string[]; className: string }) {
  return (
    <ul className={cn(styles.bullets, className)}>
      {items.map((item) => (
        <li key={item} className={styles.bullet}>
          <span className={styles.marker} aria-hidden>
            ▹
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Experience({ title, jobs, technologiesLabel }: Props) {
  return (
    <Container
      as="section"
      id="experience"
      className={styles.section}
      aria-labelledby="experience-title"
    >
      <SectionTitle id="experience-title">{title}</SectionTitle>
      <ol className={styles.timeline}>
        {jobs.map((job) => (
          <li key={`${job.company}-${job.period}`} className={styles.item}>
            <span className={cn(styles.dot, job.current && styles.current)} aria-hidden />
            <article className={styles.card}>
              <header className={styles.head}>
                <div className={styles.heading}>
                  <h3 className={styles.role}>
                    {job.role} <span className={styles.at}>@</span>{' '}
                    <span className={styles.company}>{job.company}</span>
                  </h3>
                  <p className={styles.meta}>
                    <span className="desktopOnly">{job.meta.full}</span>
                    <span className="mobileOnly">{job.meta.short}</span>
                  </p>
                </div>
                <span className={styles.period}>{job.period}</span>
              </header>
              <Bullets items={job.bullets.full} className="desktopOnly" />
              <Bullets items={job.bullets.short} className="mobileOnly" />
              <ul className={styles.tech} aria-label={technologiesLabel}>
                {job.tech.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Container>
  );
}
