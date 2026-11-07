import { describe, expect, it } from 'vitest';

import { skills } from '@/content';

import { resolveIcon } from './icons';

describe('resolveIcon', () => {
  it('returns a viewBox and an svg body', () => {
    const icon = resolveIcon('simple-icons:react');
    expect(icon.viewBox).toBe('0 0 24 24');
    expect(icon.body).toContain('currentColor');
  });

  it('throws on unknown icons so the build fails', () => {
    expect(() => resolveIcon('lucide:definitely-not-an-icon')).toThrow(/Unknown icon/);
  });

  it('resolves every skill icon', () => {
    for (const skill of skills.flatMap((group) => group.items)) {
      expect(() => resolveIcon(skill.icon)).not.toThrow();
    }
  });
});
