import { describe, expect, it } from 'vitest';

import { site } from '@/content';

import { buildMetadata, buildPersonJsonLd, serializeJsonLd } from './seo';

describe('seo', () => {
  it('builds a Person with socials and Kyiv locality', () => {
    const person = buildPersonJsonLd(site);
    expect(person['@type']).toBe('Person');
    expect(person.sameAs).toHaveLength(3);
    expect(person.address.addressLocality).toBe('Kyiv');
  });

  it('uses the site url as metadata base and a large twitter card', () => {
    const metadata = buildMetadata(site);
    expect(metadata.metadataBase?.toString()).toBe('https://pasiura.com/');
    expect(metadata.twitter).toMatchObject({ card: 'summary_large_image' });
  });

  it('escapes closing script tags in JSON-LD', () => {
    expect(serializeJsonLd({ a: '</script>' })).not.toContain('</script>');
  });
});
