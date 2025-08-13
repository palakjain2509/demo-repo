import { Metadata } from 'next';
import { generatePageSEO } from '@/lib/seo/utils';
import EngineContent from './EngineContent';

const seoData = generatePageSEO({ 
  pageKey: 'our-engine',
  path: '/platform/our-engine',
  pageType: 'article',
  article: {
    publishedTime: '2024-10-03T09:00:00+10:00',
    modifiedTime: '2025-05-11T12:00:00+10:00',
    author: 'https://mygets.net/about-us',
    tags: ['AI Engine', 'Machine Learning', 'Procurement Intelligence', 'Automation', 'Data Analytics', 'MyGets Platform']
  }
});
export const metadata: Metadata = seoData.metadata;

export default function EnginePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.jsonLd) }}
      />
      <EngineContent />
    </>
  );
}