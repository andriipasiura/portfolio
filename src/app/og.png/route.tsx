import { ImageResponse } from 'next/og';

import { site } from '@/content';
import { OG_IMAGE_SIZE } from '@/lib/seo';

export const dynamic = 'force-static';

export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 96px',
        background: '#09090b',
        backgroundImage:
          'radial-gradient(circle at 50% 42%, rgba(255,107,53,0.24), rgba(9,9,11,0) 55%)',
        color: '#fafafa',
      }}
    >
      <div style={{ fontSize: 30, color: '#ff8a5c', fontFamily: 'monospace' }}>
        {site.hero.greeting}
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 120,
          fontWeight: 800,
          letterSpacing: '-0.045em',
          lineHeight: 1.05,
          marginTop: 12,
        }}
      >
        {site.name}
        <span style={{ color: '#ff6b35' }}>.</span>
      </div>
      <div style={{ fontSize: 56, color: '#a1a1aa', marginTop: 20, letterSpacing: '-0.03em' }}>
        {site.hero.title}
      </div>
      <div style={{ fontSize: 26, color: '#8b8b93', marginTop: 48 }}>
        {site.url.replace('https://', '')}
      </div>
    </div>,
    OG_IMAGE_SIZE,
  );
}
