import { Metadata } from 'next';
import { generatePageSEO } from '@/lib/seo/utils';
import LegalContent from './LegalContent';

const seoData = generatePageSEO({ pageKey: 'legal', path: '/legal' });

export const metadata: Metadata = seoData.metadata;

export default function LegalOverviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.jsonLd) }}
      />
      <LegalContent />
    </>
  );
}

