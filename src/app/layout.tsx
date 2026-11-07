import { Inter, JetBrains_Mono } from 'next/font/google';
import { type ReactNode } from 'react';

import { site } from '@/content';
import { themeInitScript } from '@/features/theme';
import { buildMetadata, buildPersonJsonLd, serializeJsonLd } from '@/lib/seo';

import '@/styles/globals.scss';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata = buildMetadata(site);

export { viewport } from '@/lib/seo';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildPersonJsonLd(site)) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
