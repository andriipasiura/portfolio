import { Download } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { type NavItem } from '@/content';
import { ThemeToggle } from '@/features/theme';

import { MobileMenu } from '../MobileMenu';

import styles from './Header.module.scss';
import { HeaderNav } from './HeaderNav';

type Props = {
  name: string;
  nav: NavItem[];
  cv: { href: string; fileName: string };
  labels: { mainNav: string; resume: string; openMenu: string; closeMenu: string };
};

export function Header({ name, nav, cv, labels }: Props) {
  const resumeIcon = <Download size={14} strokeWidth={1.5} aria-hidden />;

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a href="#top" className={styles.logo}>
          {name}
          <span className={styles.dot}>.</span>
        </a>
        <HeaderNav items={nav} label={labels.mainNav} />
        <div className={styles.actions}>
          <ThemeToggle />
          <Button
            href={cv.href}
            download={cv.fileName}
            size="sm"
            icon={resumeIcon}
            iconPosition="end"
            className={styles.resume}
          >
            {labels.resume}
          </Button>
          <MobileMenu
            items={nav}
            labels={labels}
            resume={
              <Button href={cv.href} download={cv.fileName} icon={resumeIcon} iconPosition="end">
                {labels.resume}
              </Button>
            }
          />
        </div>
      </Container>
    </header>
  );
}
