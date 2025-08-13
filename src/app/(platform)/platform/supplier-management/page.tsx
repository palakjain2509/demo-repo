import { Metadata } from "next";
import { generatePageSEO } from '@/lib/seo/utils';
import SupplierManagementContent from './SupplierManagementContent';

// TODO: PRODUCTION - Embed a short video or interactive graphic showcasing the supplier portal or key SRM workflows.
// TODO: PRODUCTION - Include 1-2 strong client or supplier testimonials highlighting improved collaboration or risk reduction.
// TODO: PRODUCTION - Ensure all CTAs are tracked for analytics (e.g., GTM events).

const seoData = generatePageSEO({ 
  pageKey: 'supplier-management',
  path: '/platform/supplier-management',
  pageType: 'article',
  article: {
    publishedTime: '2024-10-07T09:00:00+10:00',
    modifiedTime: '2025-05-11T16:00:00+10:00',
    author: 'https://mygets.net/about-us',
    tags: ['Supplier Management', 'SRM', 'Supplier Collaboration', 'Risk Mitigation', 'Supply Chain Resilience', 'Procurement Platform', 'MyGets']
  }
});
export const metadata: Metadata = seoData.metadata;

export default function SupplierManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.jsonLd) }}
      />
      <SupplierManagementContent />
    </>
  );
}

