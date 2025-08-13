import { Metadata } from "next";
import { generatePageSEO } from '@/lib/seo/utils';
import ContractLifecycleContent from './ContractLifecycleContent';

const seoData = generatePageSEO({ 
  pageKey: 'contract-lifecycle',
  path: '/platform/contract-lifecycle',
  pageType: 'article',
  article: {
    publishedTime: '2024-10-05T09:00:00+10:00',
    modifiedTime: '2025-05-11T14:00:00+10:00',
    author: 'https://mygets.net/about-us',
    tags: ['Contract Lifecycle Management', 'CLM', 'Contract Management', 'Compliance', 'Risk Management', 'OCDS', 'MyGets Platform']
  }
});
export const metadata: Metadata = seoData.metadata;

export default function ContractLifecyclePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.jsonLd) }}
      />
      <ContractLifecycleContent />
    </>
  );
}

