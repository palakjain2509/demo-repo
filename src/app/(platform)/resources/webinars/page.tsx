'use client';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { generatePageSEO } from '@/lib/seo/utils';

// Generate SEO data for webinars page
const seoData = generatePageSEO({ 
  pageKey: 'webinars',
  path: '/resources/webinars'
});

// Sample webinars data - in a real app, this would come from a CMS or API
const sampleWebinars = [
  {
    slug: 'ocds-implementation-guide',
    title: 'OCDS Implementation Guide: Best Practices for Australian Agencies',
    date: '2025-04-20',
    duration: '60 min',
    excerpt: 'Learn the step-by-step process of implementing OCDS in your organization, with real-world examples from Australian government agencies.',
    category: 'OCDS Implementation'
  },
  {
    slug: 'procurement-analytics',
    title: 'Leveraging Procurement Analytics for Better Decision Making',
    date: '2025-04-15',
    duration: '45 min',
    excerpt: 'Discover how to use procurement data analytics to drive better decision-making and identify cost-saving opportunities in your organization.',
    category: 'Data Analytics'
  },
  {
    slug: 'cpr-compliance',
    title: 'Ensuring CPR Compliance in the Digital Age',
    date: '2025-04-10',
    duration: '75 min',
    excerpt: 'A comprehensive guide to maintaining Commonwealth Procurement Rules compliance while digitizing your procurement processes.',
    category: 'Compliance'
  }
];

export default function WebinarsPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.jsonLd) }}
      />
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
              MyGETS Webinars
            </h1>
            <p className="text-xl mb-8 font-sans">
              Join our expert-led webinars to learn about procurement best practices, OCDS implementation, 
              and how to leverage data for better decision-making in your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Webinars Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-sans">
            Upcoming & Recorded Webinars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleWebinars.map((webinar) => (
              <article 
                key={webinar.slug} 
                className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3 font-sans">
                    <Link href={`/resources/webinars/${webinar.slug}`} className="hover:text-blue-800">
                      {webinar.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 font-sans">
                    {webinar.date} | {webinar.duration} | {webinar.category}
                  </p>
                  <p className="text-gray-600 mb-4 line-clamp-3 font-sans">
                    {webinar.excerpt}
                  </p>
                  <Link 
                    href={`/resources/webinars/${webinar.slug}`}
                    className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium font-sans"
                  >
                    Register Now
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
              Subscribe to our newsletter for the latest webinars, procurement news, and MyGETS updates delivered to your inbox.
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
  