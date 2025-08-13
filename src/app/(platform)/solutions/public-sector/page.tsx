import type { Metadata } from 'next';
import { generatePageSEO } from '@/lib/seo/utils';
import PublicSectorContent from './PublicSectorContent';

const seoData = generatePageSEO({ 
  pageKey: 'public-sector',
  path: '/solutions/public-sector'
});
export const metadata: Metadata = seoData.metadata;

export default function PublicSectorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.jsonLd) }}
      />
      <PublicSectorContent />
    </>
  );
}

