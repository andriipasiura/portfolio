'use client';

import { Check, Copy } from 'lucide-react';

import { IconButton } from '@/components/ui/IconButton';
import { cn } from '@/lib/cn';

import { useCopyToClipboard } from '../useCopyToClipboard';

import styles from './CopyEmailButton.module.scss';

type Props = {
  email: string;
  labels: {
    copy: string;
    copied: string;
    announcement: string;
  };
};

export function CopyEmailButton({ email, labels }: Props) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <>
      <IconButton
        label={copied ? labels.copied : labels.copy}
        variant="bare"
        className={cn(styles.button, copied && styles.copied)}
        onClick={() => {
          void copy(email);
        }}
      >
        {copied ? (
          <Check size={18} strokeWidth={2} aria-hidden />
        ) : (
          <Copy size={18} strokeWidth={1.6} aria-hidden />
        )}
      </IconButton>
      <span className={styles.status} aria-live="polite">
        {copied ? labels.announcement : ''}
      </span>
    </>
  );
}
