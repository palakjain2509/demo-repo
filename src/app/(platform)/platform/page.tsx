import React, { Suspense } from 'react';
import { generatePageSEO } from '@/lib/seo/utils';
import PlatformContent from './PlatformContent';

// Generate SEO data for the platform page
const seoData = generatePageSEO({
  pageKey: 'platform',
  path: '/platform'
});

// Export metadata for Next.js App Router
export const metadata = seoData.metadata;

export default function PlatformPage() {
  return (
    <>
      {/* Embed JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.jsonLd) }}
      />
      
      <Suspense fallback={<div>Loading...</div>}>
        <PlatformContent />
      </Suspense>
    </>
  );
}

