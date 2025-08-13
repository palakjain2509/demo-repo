import React, { Suspense } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | MyGETS',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Page Not Found | MyGETS',
    description: 'The page you are looking for could not be found.',
    type: 'website',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'MyGETS - Page Not Found',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Not Found | MyGETS',
    description: 'The page you are looking for could not be found.',
    images: ['/images/twitter-image.svg'],
  },
};

/**
 * Static 404 Error Page
 * 
 * Provides a user-friendly error page with navigation options
 * when users attempt to access non-existent pages.
 */
export default function NotFound() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-lg w-full text-center">
          <div className="h-16 bg-gray-200 rounded-lg animate-pulse mb-6 mx-auto w-32"></div>
          <div className="h-8 bg-gray-200 rounded-lg animate-pulse mb-4 mx-auto w-48"></div>
          <div className="h-4 bg-gray-200 rounded-lg animate-pulse mb-8 mx-auto w-3/4"></div>
          <div className="h-12 bg-gray-200 rounded-lg animate-pulse mx-auto w-48"></div>
        </div>
      </div>
    }>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">        
        <div className="max-w-lg w-full text-center">
          <h1 className="text-6xl font-bold text-blue-700 mb-6">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
          </p>
          <div className="space-y-4">
            <div>
              <Link 
                href="/" 
                className="inline-block bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Return to Homepage
              </Link>
            </div>
            <div className="mt-8 border-t pt-6">
              <h3 className="text-lg font-medium mb-4">You might be looking for:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link 
                  href="/resources/ocds-guide" 
                  className="text-blue-700 hover:underline"
                >
                  OCDS Guide
                </Link>
                <Link 
                  href="/early-adopter-program" 
                  className="text-blue-700 hover:underline"
                >
                  Early Adopter Program
                </Link>
                <Link 
                  href="/contact" 
                  className="text-blue-700 hover:underline"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/resources/faq" 
                  className="text-blue-700 hover:underline"
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
