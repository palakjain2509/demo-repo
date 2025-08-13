import { generatePageSEO } from '@/lib/seo/utils';
import { Suspense } from 'react';
import PricingContent from './PricingContent';

const seoData = generatePageSEO({ pageKey: 'pricing', path: '/pricing' });

export const metadata = seoData.metadata;

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.jsonLd) }}
      />
      <Suspense fallback={
        <div className="min-h-screen bg-white">
          <div className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="max-w-3xl">
                <div className="h-12 bg-white/20 rounded-lg animate-pulse mb-6"></div>
                <div className="h-6 bg-white/20 rounded-lg animate-pulse mb-4 w-3/4"></div>
                <div className="h-10 bg-white/20 rounded-lg animate-pulse w-48"></div>
              </div>
            </div>
          </div>
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-8 bg-gray-200 rounded-lg animate-pulse w-48 mx-auto mb-12"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                    <div className="h-8 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded-lg animate-pulse mb-3 w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded-lg animate-pulse mb-4 w-full"></div>
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((j) => (
                        <div key={j} className="h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                      ))}
                    </div>
                    <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-full mt-6"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }>
        <PricingContent />
      </Suspense>
    </>
  );
}
