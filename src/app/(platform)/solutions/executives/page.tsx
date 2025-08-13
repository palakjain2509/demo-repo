import type { Metadata } from 'next';
import { generatePageSEO } from '@/lib/seo/utils';
import ExecutivesContent from './ExecutivesContent';

const seoData = generatePageSEO({ 
  pageKey: 'executives',
  path: '/solutions/executives'
});
export const metadata: Metadata = seoData.metadata;

export default function ExecutivesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.jsonLd) }}
      />
      <ExecutivesContent />
    </>
  );
}
