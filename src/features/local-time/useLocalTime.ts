'use client';

import { useEffect, useState } from 'react';

import { formatLocalTime, type LocalTime } from './format-local-time';

const REFRESH_MS = 30_000;

export function useLocalTime(): LocalTime | null {
  const [value, setValue] = useState<LocalTime | null>(null);

  useEffect(() => {
    const update = () => {
      setValue(formatLocalTime(new Date()));
    };
    update();
    const id = window.setInterval(update, REFRESH_MS);
    return () => {
      window.clearInterval(id);
    };
  }, []);

  return value;
}
