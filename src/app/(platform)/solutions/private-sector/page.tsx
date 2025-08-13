import { Metadata } from "next";
import { generatePageSEO } from '@/lib/seo/utils';
import PrivateSectorContent from './PrivateSectorContent';

const seoData = generatePageSEO({ 
  pageKey: 'private-sector',
  path: '/solutions/private-sector',
  pageType: 'article',
  article: {
    publishedTime: '2024-10-07T09:00:00+10:00',
    modifiedTime: '2025-05-11T16:00:00+10:00',
    author: 'https://mygets.net/about-us',
    tags: ['Private Sector', 'Procurement Solutions', 'Supply Chain', 'Cost Reduction', 'Strategic Sourcing', 'MyGets']
  }
});
export const metadata: Metadata = seoData.metadata;

export default function PrivateSectorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.jsonLd) }}
      />
      <PrivateSectorContent />
    </>
  );
}

