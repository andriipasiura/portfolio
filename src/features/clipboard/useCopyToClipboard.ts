'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { copyText } from './copy-text';

const RESET_MS = 2000;

export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(
    () => () => {
      window.clearTimeout(timer.current);
    },
    [],
  );

  const copy = useCallback(async (text: string) => {
    const ok = await copyText(text);
    if (!ok) return;
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setCopied(false);
    }, RESET_MS);
  }, []);

  return { copied, copy };
}
