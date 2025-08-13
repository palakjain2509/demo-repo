import { Metadata } from "next";
import { generatePageSEO } from '@/lib/seo/utils';
import SecurityContent from './SecurityContent';
import { Suspense } from 'react';

// TODO: PRODUCTION - Prominently display specific security certifications (e.g., ISO 27001, SOC 2 Type II) and compliance badges (e.g., IRAP assessed for specific services).
// TODO: PRODUCTION - Link to a dedicated Trust Center page or a downloadable, comprehensive security whitepaper.
// TODO: PRODUCTION - Ensure all CTAs are tracked for analytics (e.g., GTM events).

const seoData = generatePageSEO({ 
  pageKey: 'security',
  path: '/platform/security',
  pageType: 'article',
  article: {
    publishedTime: '2024-10-05T09:00:00+10:00',
    modifiedTime: '2025-05-11T14:00:00+10:00',
    author: 'https://mygets.net/about-us',
    tags: ['Data Security', 'Compliance', 'Cybersecurity', 'Data Protection', 'Australian Data Sovereignty', 'IRAP', 'ISO 27001', 'SOC 2', 'MyGets Platform']
  }
});
export const metadata: Metadata = seoData.metadata;

export default function SecurityPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.jsonLd) }}
      />
      <SecurityContent />
    </Suspense>
  );
}

