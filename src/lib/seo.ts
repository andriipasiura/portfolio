import { type Metadata, type Viewport } from 'next';

import { type Site } from '@/content';

export const OG_IMAGE_PATH = '/og.png';

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

export function buildMetadata(site: Site): Metadata {
  return {
    metadataBase: new URL(site.url),
    title: site.seo.title,
    description: site.seo.description,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    alternates: { canonical: '/' },
    openGraph: {
      type: 'profile',
      url: '/',
      siteName: site.name,
      title: site.seo.title,
      description: site.seo.description,
      locale: site.locale,
      images: [{ url: OG_IMAGE_PATH, ...OG_IMAGE_SIZE, alt: site.seo.ogImageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: site.seo.title,
      description: site.seo.description,
      images: [OG_IMAGE_PATH],
    },
    robots: { index: true, follow: true },
    formatDetection: { email: false, telephone: false, address: false },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
  ],
};

export function buildPersonJsonLd(site: Site) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.jobTitle,
    url: site.url,
    email: `mailto:${site.email}`,
    sameAs: site.socials.map((social) => social.url),
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressCountry: site.country,
    },
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
