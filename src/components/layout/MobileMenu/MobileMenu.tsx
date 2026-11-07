'use client';

import { Menu, X } from 'lucide-react';
import { type MouseEvent, type ReactNode, useRef } from 'react';

import { IconButton } from '@/components/ui/IconButton';
import { type NavItem } from '@/content';

import styles from './MobileMenu.module.scss';

type Props = {
  items: NavItem[];
  labels: { mainNav: string; openMenu: string; closeMenu: string };
  resume: ReactNode;
};

export function MobileMenu({ items, labels, resume }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);

  const close = () => {
    dialog.current?.close();
  };

  const closeOnNavigate = (event: MouseEvent<HTMLElement>) => {
    if (event.target instanceof Element && event.target.closest('a')) close();
  };

  const closeOnBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) close();
  };

  return (
    <div className={styles.root}>
      <IconButton
        label={labels.openMenu}
        aria-haspopup="dialog"
        onClick={() => {
          dialog.current?.showModal();
        }}
      >
        <Menu size={18} strokeWidth={1.5} aria-hidden />
      </IconButton>
      <dialog
        ref={dialog}
        className={styles.sheet}
        aria-label={labels.mainNav}
        onClick={closeOnBackdrop}
      >
        <div className={styles.panel} onClick={closeOnNavigate}>
          <div className={styles.top}>
            <IconButton label={labels.closeMenu} onClick={close}>
              <X size={18} strokeWidth={1.5} aria-hidden />
            </IconButton>
          </div>
          <nav aria-label={labels.mainNav}>
            <ul className={styles.list}>
              {items.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={styles.link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.footer}>{resume}</div>
        </div>
      </dialog>
    </div>
  );
}
