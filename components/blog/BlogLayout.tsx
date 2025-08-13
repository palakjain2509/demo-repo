'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface BlogLayoutProps {
  children: ReactNode;
  showBackButton?: boolean;
  backButtonText?: string;
  backButtonHref?: string;
}

export default function BlogLayout({ 
  children, 
  showBackButton = false, 
  backButtonText = "Back to Blog",
  backButtonHref = "/resources/blog"
}: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {showBackButton && (
                <Link
                  href={backButtonHref}
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeftIcon className="h-5 w-5 mr-2" />
                  {backButtonText}
                </Link>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/resources/blog"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/resources/case-studies"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Case Studies
              </Link>
              <Link
                href="/resources/whitepapers"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Whitepapers
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Stay updated with the latest procurement insights and trends
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/resources/blog"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                All Posts
              </Link>
              <Link
                href="/resources/newsletter"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Newsletter
              </Link>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 