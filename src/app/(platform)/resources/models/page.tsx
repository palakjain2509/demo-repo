import { Metadata } from 'next';
import { generatePageSEO } from '@/lib/seo/utils';
import ModelsContent from './ModelsContent';

const seoData = generatePageSEO({ 
  pageKey: 'models',
  path: '/resources/models'
});
export const metadata: Metadata = seoData.metadata;

export default function ModelsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.jsonLd) }}
      />
      <ModelsContent />
    </>
  );
}

