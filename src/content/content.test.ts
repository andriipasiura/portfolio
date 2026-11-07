import { describe, expect, it } from 'vitest';

import { contactSocials, experience, projects, site, skills } from './index';

const EM_DASH = String.fromCharCode(0x2014);

const allContent = { site, experience, skills, projects };

function collectStrings(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === 'object') return Object.values(value).flatMap(collectStrings);
  return [];
}

describe('content', () => {
  const strings = collectStrings(allContent);

  it('has no em dashes anywhere', () => {
    expect(strings.filter((text) => text.includes(EM_DASH))).toEqual([]);
  });

  it('has no empty or padded strings', () => {
    expect(strings.filter((text) => text.trim() !== text || text === '')).toEqual([]);
  });

  it('keeps nav ids unique and pointing at known sections', () => {
    const ids = site.nav.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids).toEqual(['top', 'about', 'experience', 'skills', 'projects', 'contact']);
  });

  it('lists every social network exactly once', () => {
    const networks = site.socials.map((social) => social.network).sort();
    expect(networks).toEqual(['github', 'linkedin', 'telegram']);
  });

  it('orders contact channels as configured', () => {
    expect(contactSocials.map((social) => social.network)).toEqual(site.contact.channels);
  });

  it('keeps the meta description within search snippet length', () => {
    expect(site.seo.description.length).toBeLessThanOrEqual(170);
  });

  it('has exactly one current job with tech and bullets', () => {
    expect(experience.filter((job) => job.current)).toHaveLength(1);
    for (const job of experience) {
      expect(job.tech.length).toBeGreaterThan(0);
      expect(job.bullets.full.length).toBeGreaterThan(0);
      expect(job.bullets.short.length).toBeGreaterThan(0);
    }
  });

  it('uses short badge marks and unique names within each skill group', () => {
    for (const group of skills) {
      expect(group.items.length).toBeGreaterThan(0);
      for (const skill of group.items) expect(skill.mark.length).toBeLessThanOrEqual(2);
      const names = group.items.map((skill) => skill.name);
      expect(new Set(names).size).toBe(names.length);
    }
  });

  it('numbers projects and defaults their links', () => {
    expect(projects.map((project) => project.number)).toEqual(['01', '02', '03']);
    for (const project of projects) expect(project.links).toBeDefined();
  });
});
