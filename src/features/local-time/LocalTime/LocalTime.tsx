'use client';

import { cn } from '@/lib/cn';

import { type LocalTime as LocalTimeValue, parseTimeTemplate } from '../format-local-time';
import { useLocalTime } from '../useLocalTime';

import styles from './LocalTime.module.scss';

const PLACEHOLDER: LocalTimeValue = { time: '00:00', offset: '+0' };

type Props = {
  template: string;
};

export function LocalTime({ template }: Props) {
  const value = useLocalTime();
  const shown = value ?? PLACEHOLDER;

  return parseTimeTemplate(template).map((part, index) =>
    part.kind === 'text' ? (
      part.value
    ) : (
      <span
        key={index}
        className={cn(styles.slot, !value && styles.pending)}
        aria-hidden={value ? undefined : true}
      >
        {shown[part.name]}
      </span>
    ),
  );
}
