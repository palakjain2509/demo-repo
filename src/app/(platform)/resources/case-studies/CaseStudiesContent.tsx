'use client';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// Sample case studies data - in a real app, this would come from a CMS or API
const sampleCaseStudies = [
  {
    slug: 'gov-agency-achieves-cpr-compliance',
    clientName: 'WA State Government Agency (Anonymous)',
    title: 'WA Government Agency Achieves Full CPR Compliance and 20% Efficiency Gain with MyGETS',
    summary: 'Discover how a Western Australian state government agency leveraged MyGETS to streamline their procurement, ensure Commonwealth Procurement Rules (CPRs) compliance, and achieve significant operational efficiencies.',
    industry: 'Public Sector / Government',
    challenge: 'Ensuring CPR compliance, managing complex tender evaluations, lack of transparency in procurement lifecycle.',
    solution: 'Implementation of MyGETS OCDS-native platform with configurable workflows for CPR, centralized document management, and transparent reporting.',
    results: ['Achieved 100% CPR compliance reporting accuracy.', 'Reduced tender evaluation time by 20%.', 'Increased transparency for internal stakeholders and audit processes.']
  },
  {
    slug: 'sme-optimizes-spend-visibility',
    clientName: 'National Retail Solutions Pty Ltd',
    title: 'Australian SME Boosts Spend Visibility by 40% and Reduces Maverick Spend with MyGETS',
    summary: 'Learn how a national retail SME utilized MyGETS to gain unprecedented visibility into their procurement spend, control maverick purchasing, and identify key cost-saving opportunities.',
    industry: 'Private Sector / Retail',
    challenge: 'Limited visibility into procurement spend across multiple departments, high maverick spend, difficulty in negotiating supplier contracts.',
    solution: 'MyGETS platform implementation with spend analytics dashboards, automated approval workflows, and centralized supplier contract management.',
    results: ['Increased overall spend visibility by 40%.', 'Reduced maverick spend by 15% within the first six months.', 'Identified annual cost savings of 8% through better supplier negotiation.']
  }
];

export default function CaseStudiesContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
              MyGETS Success Stories
            </h1>
            <p className="text-xl mb-8 font-sans">
              Discover how organizations across Australia are transforming their procurement processes, 
              achieving compliance, and driving significant savings with MyGETS.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-sans">
            Real-World Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleCaseStudies.map((study) => (
              <article 
                key={study.slug}
                className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3 font-sans">
                    <Link 
                      href={`/resources/case-studies/${study.slug}`}
                      className="hover:text-blue-800"
                    >
                      {study.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 font-sans">
                    Client: {study.clientName} | Industry: {study.industry}
                  </p>
                  <p className="text-gray-600 mb-4 line-clamp-3 font-sans">
                    {study.summary}
                  </p>
                  <Link 
                    href={`/resources/case-studies/${study.slug}`}
                    className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium font-sans"
                  >
                    Read Full Case Study
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
              Subscribe to our newsletter for the latest case studies, procurement news, and MyGETS updates delivered to your inbox.
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