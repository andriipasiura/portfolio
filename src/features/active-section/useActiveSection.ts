'use client';

import { useEffect, useState } from 'react';

export function useActiveSection(ids: readonly string[]): string | undefined {
  const [active, setActive] = useState<string | undefined>(ids[0]);
  const key = ids.join(',');

  useEffect(() => {
    const sections = key
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const current = sections.find((section) => visible.has(section.id));
        if (current) setActive(current.id);
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    for (const section of sections) observer.observe(section);
    return () => {
      observer.disconnect();
    };
  }, [key]);

  return active;
}
