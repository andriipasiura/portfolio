import { SocialIcon } from '@/components/ui/SocialIcon';
import { type Social } from '@/content';

import styles from './SideRail.module.scss';

type Props = {
  socials: Social[];
  label: string;
};

export function SideRail({ socials, label }: Props) {
  return (
    <nav className={styles.rail} aria-label={label}>
      <ul className={styles.list}>
        {socials.map((social) => (
          <li key={social.network}>
            <a
              href={social.url}
              className={styles.link}
              aria-label={social.label}
              title={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon network={social.network} />
            </a>
          </li>
        ))}
      </ul>
      <span className={styles.line} aria-hidden />
    </nav>
  );
}
