import { Metadata } from 'next';
import { generatePageSEO } from '@/lib/seo';
import OCDSGuideContent from './OCDSGuideContent';

// Generate metadata for the OCDS Guide page
const seoData = generatePageSEO({
  pageKey: 'ocds-guide',
  path: '/resources/ocds-guide',
  pageType: 'article',
  article: {
    publishedTime: '2024-01-15T00:00:00Z',
    modifiedTime: '2024-01-15T00:00:00Z',
    author: 'MyGETS Team',
    section: 'Resources',
    tags: ['OCDS', 'Open Contracting', 'Procurement', 'Data Standards', 'Transparency']
  }
});

export const metadata: Metadata = seoData.metadata;

export default function OCDSGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: seoData.jsonLd }}
      />
      <OCDSGuideContent />
    </>
  );
}
