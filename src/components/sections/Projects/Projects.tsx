import { Code, ExternalLink } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { type Project, type Site } from '@/content';
import { cn } from '@/lib/cn';

import styles from './Projects.module.scss';

type Labels = Pick<
  Site['ui'],
  'liveDemo' | 'sourceCode' | 'highlights' | 'techStack' | 'technologies' | 'screenshotPlaceholder'
>;

type Props = {
  title: string;
  projects: Project[];
  labels: Labels;
};

function externalProps(href: string) {
  return href.startsWith('https://') ? { target: '_blank', rel: 'noopener noreferrer' } : {};
}

function ProjectCard({ project, labels }: { project: Project; labels: Labels }) {
  const { live, source } = project.links;

  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <span className={styles.number} aria-hidden>
          {project.number}
        </span>
        <div className={styles.titles}>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={cn(styles.kind, 'desktopOnly')}>{project.kind}</span>
        </div>
      </div>

      {(live ?? source) && (
        <div className={styles.actions}>
          {live && (
            <Button
              href={live}
              size="md"
              stretchOnMobile
              icon={<ExternalLink size={14} strokeWidth={1.5} aria-hidden />}
              {...externalProps(live)}
            >
              {labels.liveDemo}
            </Button>
          )}
          {source && (
            <Button
              href={source}
              size="md"
              variant="subtle"
              stretchOnMobile
              icon={<Code size={14} strokeWidth={1.5} aria-hidden />}
              {...externalProps(source)}
            >
              {labels.sourceCode}
            </Button>
          )}
        </div>
      )}

      <div className={cn(styles.media, project.secondaryImage && styles.stacked)}>
        <div className={styles.stage}>
          {project.secondaryImage && (
            <div className={cn(styles.shot, styles.back)}>
              <Image
                src={project.secondaryImage.src}
                alt={project.secondaryImage.alt}
                fill
                sizes="560px"
                className={styles.image}
              />
            </div>
          )}
          <div className={cn(styles.shot, project.secondaryImage && styles.front)}>
            {project.image ? (
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(width >= 1024px) 560px, 100vw"
                className={styles.image}
              />
            ) : (
              <div
                className={styles.placeholder}
                role="img"
                aria-label={`${project.title} screenshot placeholder`}
              >
                <span className={styles.placeholderLabel}>{labels.screenshotPlaceholder}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <p className={styles.summary}>
          <span className="desktopOnly">{project.summary.full}</span>
          <span className="mobileOnly">{project.summary.short}</span>
        </p>
        <dl className={styles.details}>
          <div className="desktopOnly">
            <dt className={styles.term}>{labels.highlights}</dt>
            <dd className={styles.highlights}>{project.highlights}</dd>
          </div>
          <div>
            <dt className={cn(styles.term, 'desktopOnly')}>{labels.techStack}</dt>
            <dd className={styles.stackWrap}>
              <ul className={styles.stack} aria-label={labels.technologies}>
                {project.stack.map((tech, index) => (
                  <Chip key={`${tech}-${String(index)}`}>{tech}</Chip>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export function Projects({ title, projects, labels }: Props) {
  return (
    <Container
      as="section"
      id="projects"
      className={styles.section}
      aria-labelledby="projects-title"
    >
      <SectionTitle id="projects-title">{title}</SectionTitle>
      <div className={styles.list}>
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} labels={labels} />
        ))}
      </div>
    </Container>
  );
}
