import { Metadata } from 'next';
import { generatePageSEO } from '@/lib/seo/utils';
import IntegrationsContent from './IntegrationsContent';

const seoData = generatePageSEO({ 
  pageKey: 'integrations',
  path: '/platform/integrations',
  pageType: 'article',
  article: {
    publishedTime: '2024-10-03T09:00:00+10:00',
    modifiedTime: '2025-05-11T12:00:00+10:00',
    author: 'https://mygets.net/about-us',
    tags: ['Platform Integration', 'API', 'ERP Integration', 'CRM Integration', 'Financial Systems', 'Automation', 'MyGets']
  }
});
export const metadata: Metadata = seoData.metadata;

export default function IntegrationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.jsonLd) }}
      />
      <IntegrationsContent />
    </>
  );
}

