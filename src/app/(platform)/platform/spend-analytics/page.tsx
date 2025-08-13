import { Metadata } from "next";
import { generatePageSEO } from '@/lib/seo/utils';
import SpendAnalyticsContent from './SpendAnalyticsContent';

// TODO: PRODUCTION - Include interactive charts or mockups of spend analytics dashboards.
// TODO: PRODUCTION - Add case studies or testimonials highlighting savings achieved through MyGets spend analytics.

const seoData = generatePageSEO({ 
  pageKey: 'spend-analytics',
  path: '/platform/spend-analytics',
  pageType: 'article',
  article: {
    publishedTime: '2024-10-06T09:00:00+10:00',
    modifiedTime: '2025-05-11T15:00:00+10:00',
    author: 'https://mygets.net/about-us',
    tags: ['Spend Analytics', 'Procurement Analytics', 'Data Visualization', 'Cost Savings', 'Budget Optimization', 'Strategic Sourcing', 'MyGets Platform']
  }
});
export const metadata: Metadata = seoData.metadata;

export default function SpendAnalyticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.jsonLd) }}
      />
      <SpendAnalyticsContent />
    </>
  );
}

