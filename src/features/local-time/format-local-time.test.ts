import { describe, expect, it } from 'vitest';

import { formatLocalTime, parseTimeTemplate } from './format-local-time';

describe('formatLocalTime', () => {
  it('uses UTC+2 in winter', () => {
    expect(formatLocalTime(new Date('2026-01-15T10:05:00Z'))).toEqual({
      time: '12:05',
      offset: '+2',
    });
  });

  it('uses UTC+3 in summer', () => {
    expect(formatLocalTime(new Date('2026-07-01T21:30:00Z'))).toEqual({
      time: '00:30',
      offset: '+3',
    });
  });

  it('switches offset at the DST boundary', () => {
    expect(formatLocalTime(new Date('2026-03-29T00:59:00Z')).offset).toBe('+2');
    expect(formatLocalTime(new Date('2026-03-29T01:00:00Z')).offset).toBe('+3');
  });

  it('formats midnight as 00, never 24', () => {
    expect(formatLocalTime(new Date('2026-01-15T22:00:00Z')).time).toBe('00:00');
  });

  it('reports +0 for UTC', () => {
    expect(formatLocalTime(new Date('2026-01-15T10:05:00Z'), 'UTC')).toEqual({
      time: '10:05',
      offset: '+0',
    });
  });
});

describe('parseTimeTemplate', () => {
  it('splits text and slots in order', () => {
    expect(parseTimeTemplate('Kyiv, UTC{offset}, {time} now.')).toEqual([
      { kind: 'text', value: 'Kyiv, UTC' },
      { kind: 'slot', name: 'offset' },
      { kind: 'text', value: ', ' },
      { kind: 'slot', name: 'time' },
      { kind: 'text', value: ' now.' },
    ]);
  });

  it('returns plain text when there are no slots', () => {
    expect(parseTimeTemplate('Hello')).toEqual([{ kind: 'text', value: 'Hello' }]);
  });
});
