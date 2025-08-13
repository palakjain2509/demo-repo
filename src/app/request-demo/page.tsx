import type { Metadata } from 'next';
import { generatePageSEO } from '@/lib/seo';
import RequestDemoContent from './RequestDemoContent';
import { Suspense } from 'react';

// Generate metadata for the Request Demo page
const seoData = generatePageSEO({
  pageKey: 'request-demo',
  path: '/request-demo',
  pageType: 'website'
});

export const metadata: Metadata = seoData.metadata;

export default function RequestDemoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: seoData.jsonLd }}
      />
      <Suspense fallback={
        <div className="min-h-screen bg-white">
          <div className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="max-w-3xl">
                <div className="h-12 bg-white/20 rounded-lg animate-pulse mb-6"></div>
                <div className="h-6 bg-white/20 rounded-lg animate-pulse mb-4 w-3/4"></div>
                <div className="h-6 bg-white/20 rounded-lg animate-pulse mb-4 w-1/2"></div>
              </div>
            </div>
          </div>
          <div className="w-full py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="text-center mb-12">
                <div className="h-8 bg-gray-200 rounded-lg animate-pulse w-64 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-96 mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="h-8 bg-gray-200 rounded-lg animate-pulse w-48 mb-6"></div>
                  <div className="space-y-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                        <div className="flex-1">
                          <div className="h-6 bg-gray-200 rounded-lg animate-pulse mb-2 w-48"></div>
                          <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-8">
                  <div className="h-8 bg-gray-200 rounded-lg animate-pulse w-48 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-3/4 mb-8"></div>
                  <div className="space-y-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }>
        <RequestDemoContent />
      </Suspense>
    </>
  );
}

