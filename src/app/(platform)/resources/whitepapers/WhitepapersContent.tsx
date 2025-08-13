'use client';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// Sample whitepapers data - in a real app, this would come from a CMS or API
const sampleWhitepapers = [
  {
    slug: 'ocds-adoption-framework',
    title: 'OCDS Adoption Framework: A Comprehensive Guide for Australian Organizations',
    date: '2025-04-15',
    pages: '45 pages',
    excerpt: 'A detailed framework for implementing OCDS in Australian organizations, including best practices, common challenges, and success metrics.',
    category: 'OCDS Implementation'
  },
  {
    slug: 'procurement-digital-transformation',
    title: 'Digital Transformation in Public Procurement: The Role of Data Standards',
    date: '2025-03-28',
    pages: '38 pages',
    excerpt: 'Explore how data standards like OCDS are driving digital transformation in public procurement and enabling better decision-making.',
    category: 'Digital Transformation'
  },
  {
    slug: 'procurement-analytics-framework',
    title: 'Building a Data-Driven Procurement Analytics Framework',
    date: '2025-03-15',
    pages: '52 pages',
    excerpt: 'Learn how to build and implement a comprehensive procurement analytics framework that leverages OCDS data for strategic insights.',
    category: 'Data Analytics'
  }
];

export default function WhitepapersContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
              MyGETS Whitepapers
            </h1>
            <p className="text-xl mb-8 font-sans">
              Access our in-depth research and analysis on procurement best practices, OCDS implementation, 
              and data-driven strategies for Australian organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-sans">
            Latest Research & Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleWhitepapers.map((whitepaper) => (
              <article 
                key={whitepaper.slug} 
                className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3 font-sans">
                    <Link href={`/resources/whitepapers/${whitepaper.slug}`} className="hover:text-blue-800">
                      {whitepaper.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 font-sans">
                    {whitepaper.date} | {whitepaper.pages} | {whitepaper.category}
                  </p>
                  <p className="text-gray-600 mb-4 line-clamp-3 font-sans">
                    {whitepaper.excerpt}
                  </p>
                  <Link 
                    href={`/resources/whitepapers/${whitepaper.slug}`}
                    className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium font-sans"
                  >
                    Download Whitepaper
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 italic font-sans">
              Pagination controls will be added here.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-sans">
              Don't Miss an Update
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-sans">
              Subscribe to our newsletter for the latest whitepapers, procurement news, and MyGETS updates delivered to your inbox.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-sans"
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors font-sans"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Full-width CTA Section */}
      <section className="w-screen bg-blue-900 text-white relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-sans">Ready to Transform Your Procurement?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-sans">
            Discover how MyGETS can help your organization implement OCDS and realize the benefits of structured, standardized procurement data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/early-adopter-program" 
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors text-center font-sans"
            >
              Join Our Early Adopter Program
            </Link>
            <Link 
              href="/request-demo" 
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center font-sans"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}