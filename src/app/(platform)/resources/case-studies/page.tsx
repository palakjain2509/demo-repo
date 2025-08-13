import type { Metadata } from 'next';
import { generatePageSEO } from '@/lib/seo/utils';
import CaseStudiesContent from './CaseStudiesContent';
import { Suspense } from 'react';

const seoData = generatePageSEO({ 
  pageKey: 'case-studies',
  path: '/resources/case-studies'
});
export const metadata: Metadata = seoData.metadata;

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.jsonLd) }}
      />
      <Suspense fallback={
        <div className="min-h-screen">
          <div className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="h-12 bg-white/20 rounded-lg animate-pulse mb-6 w-3/4 mx-auto"></div>
                <div className="h-6 bg-white/20 rounded-lg animate-pulse mb-4 w-1/2 mx-auto"></div>
                <div className="h-6 bg-white/20 rounded-lg animate-pulse w-2/3 mx-auto"></div>
              </div>
            </div>
          </div>
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-8 bg-gray-200 rounded-lg animate-pulse w-48 mx-auto mb-12"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                    <div className="h-8 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded-lg animate-pulse mb-3 w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded-lg animate-pulse mb-4 w-full"></div>
                    <div className="h-6 bg-gray-200 rounded-lg animate-pulse w-32"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }>
        <CaseStudiesContent />
      </Suspense>
    </>
  );
}

