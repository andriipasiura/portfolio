export const KYIV_TIME_ZONE = 'Europe/Kyiv';

export type LocalTime = {
  time: string;
  offset: string;
};

export function formatLocalTime(date: Date, timeZone: string = KYIV_TIME_ZONE): LocalTime {
  const time = new Intl.DateTimeFormat('en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).format(date);

  const zoneName =
    new Intl.DateTimeFormat('en-US', { timeZone, timeZoneName: 'shortOffset' })
      .formatToParts(date)
      .find((part) => part.type === 'timeZoneName')?.value ?? 'GMT';

  const offset = zoneName.replace('GMT', '') || '+0';

  return { time, offset };
}

export type TemplatePart =
  { kind: 'text'; value: string } | { kind: 'slot'; name: keyof LocalTime };

export function parseTimeTemplate(template: string): TemplatePart[] {
  return template
    .split(/(\{time\}|\{offset\})/)
    .filter((chunk) => chunk !== '')
    .map((chunk) => {
      if (chunk === '{time}') return { kind: 'slot', name: 'time' };
      if (chunk === '{offset}') return { kind: 'slot', name: 'offset' };
      return { kind: 'text', value: chunk };
    });
}
