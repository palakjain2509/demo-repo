import { Metadata } from 'next';
import { generatePageSEO } from '@/lib/seo';
import ProcurementLeadsContent from './ProcurementLeadsContent';

// Generate metadata for the Procurement Leads page
const seoData = generatePageSEO({
  pageKey: 'procurement-leads',
  path: '/solutions/procurement-leads',
  pageType: 'website'
});

export const metadata: Metadata = seoData.metadata;

export default function ProcurementLeadsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: seoData.jsonLd }}
      />
      <ProcurementLeadsContent />
    </>
  );
}
