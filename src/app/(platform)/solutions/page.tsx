import React, { Suspense } from 'react';
import { generatePageSEO } from '@/lib/seo/utils';
import SolutionsContent from './SolutionsContent';

// Generate SEO data for the solutions page
const seoData = generatePageSEO({
  pageKey: 'solutions',
  path: '/solutions'
});

// Export metadata for Next.js App Router
export const metadata = seoData.metadata;

export default function SolutionsPage() {
  return (
    <>
      {/* Embed JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.jsonLd) }}
      />
      
      <Suspense fallback={<div>Loading...</div>}>
        <SolutionsContent />
      </Suspense>
    </>
  );
}