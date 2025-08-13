import { Metadata } from 'next';
import { generatePageSEO } from '@/lib/seo/utils';
import WhitepapersContent from './WhitepapersContent';

const seoData = generatePageSEO({ pageKey: 'whitepapers', path: '/resources/whitepapers' });

export const metadata: Metadata = seoData.metadata;

export default function WhitepapersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.jsonLd) }}
      />
      <WhitepapersContent />
    </>
  );
}
