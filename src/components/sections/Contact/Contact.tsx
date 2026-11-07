import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { type Site } from '@/content';
import { CopyEmailButton } from '@/features/clipboard';
import { LocalTime } from '@/features/local-time';

import styles from './Contact.module.scss';

type Props = {
  title: string;
  contact: Site['contact'];
  email: string;
  socials: Site['socials'];
  labels: Pick<Site['ui'], 'copyEmail' | 'emailCopied' | 'emailCopiedAnnouncement'>;
};

export function Contact({ title, contact, email, socials, labels }: Props) {
  return (
    <Container as="section" id="contact" className={styles.section} aria-labelledby="contact-title">
      <SectionTitle id="contact-title">{title}</SectionTitle>
      <div className={styles.body}>
        <h3 className={styles.heading}>
          {contact.heading.before} <span className={styles.accent}>{contact.heading.accent}</span>
          {contact.heading.after}
        </h3>
        <p className={styles.note}>
          <span className="desktopOnly">
            <LocalTime template={contact.note.full} />
          </span>
          <span className="mobileOnly">
            <LocalTime template={contact.note.short} />
          </span>
        </p>
        <div className={styles.emailField}>
          <a href={`mailto:${email}`} className={styles.email}>
            {email}
          </a>
          <CopyEmailButton
            email={email}
            labels={{
              copy: labels.copyEmail,
              copied: labels.emailCopied,
              announcement: labels.emailCopiedAnnouncement,
            }}
          />
        </div>
        <ul className={styles.socials}>
          {socials.map((social) => (
            <li key={social.network}>
              <Button
                href={social.url}
                variant="outline"
                stretchOnMobile
                icon={<SocialIcon network={social.network} size={17} />}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
