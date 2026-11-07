import { FolderOpen, Mail } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { IconButton } from '@/components/ui/IconButton';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { type Site } from '@/content';

import styles from './Hero.module.scss';

type Props = {
  name: string;
  hero: Site['hero'];
  socials: Site['socials'];
  profilesLabel: string;
};

export function Hero({ name, hero, socials, profilesLabel }: Props) {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-name">
      <div className={styles.glow} aria-hidden />
      <div className={styles.content}>
        <div className={styles.nameBlock}>
          <p className={styles.greeting}>{hero.greeting}</p>
          <h1 id="hero-name" className={styles.name}>
            {name}
          </h1>
        </div>
        <p className={styles.title}>{hero.title}</p>
        <p className={styles.intro}>
          <span className="desktopOnly">{hero.intro.full}</span>
          <span className="mobileOnly">{hero.intro.short}</span>
        </p>
        <div className={styles.actions}>
          <Button
            href="#contact"
            stretchOnMobile
            icon={<Mail size={16} strokeWidth={1.5} aria-hidden />}
          >
            {hero.primaryAction}
          </Button>
          <Button
            href="#projects"
            variant="ghost"
            stretchOnMobile
            icon={<FolderOpen size={16} strokeWidth={1.5} aria-hidden />}
          >
            {hero.secondaryAction}
          </Button>
        </div>
        <nav className={styles.socials} aria-label={profilesLabel}>
          {socials.map((social) => (
            <IconButton
              key={social.network}
              href={social.url}
              label={social.label}
              variant="bare"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon network={social.network} />
            </IconButton>
          ))}
        </nav>
      </div>
    </section>
  );
}
