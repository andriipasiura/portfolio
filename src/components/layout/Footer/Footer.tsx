import { ArrowUp } from 'lucide-react';

import { IconButton } from '@/components/ui/IconButton';

import styles from './Footer.module.scss';

type Props = {
  copyright: string;
  backToTopLabel: string;
};

export function Footer({ copyright, backToTopLabel }: Props) {
  return (
    <footer className={styles.footer}>
      <IconButton href="#top" label={backToTopLabel} variant="round">
        <ArrowUp size={16} strokeWidth={1.75} aria-hidden />
      </IconButton>
      <p className={styles.copyright}>{copyright}</p>
    </footer>
  );
}
