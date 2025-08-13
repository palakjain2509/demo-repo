'use client';

import Link from 'next/link';
import { ArrowLeftIcon, ShareIcon } from '@heroicons/react/24/outline';

// Define the interface for the case study data
interface CaseStudy {
  slug: string;
  title: string;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  summary: string;
}

// Define the props interface for the component
interface CaseStudyContentProps {
  study: CaseStudy;
}

export default function CaseStudyContent({ study }: CaseStudyContentProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl shadow-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">
              {study.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-lg text-white/90 font-sans">
              <span>{study.clientName}</span>
              <span>•</span>
              <span>{study.industry}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Main Content */}
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="prose prose-lg max-w-none font-sans">
                  <h2>Overview</h2>
                  <p>{study.summary}</p>

                  <h2>The Challenge</h2>
                  <p>{study.challenge}</p>

                  <h2>The Solution</h2>
                  <p>{study.solution}</p>

                  <h2>Results</h2>
                  <ul>
                    {study.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="sticky top-8 bg-gray-50 p-6 rounded-lg">
                <h2 className="text-lg font-bold mb-4 font-sans">Share This Case Study</h2>
                <div className="flex gap-4">
                  <button className="p-2 text-blue-700 hover:text-blue-800 transition-colors">
                    <ShareIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Case Studies Link */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <Link 
          href="/resources/case-studies"
          className="inline-flex items-center text-blue-700 hover:text-blue-800 font-sans"
        >
          <ArrowLeftIcon className="mr-2 h-5 w-5" />
          Back to Case Studies
        </Link>
      </div>

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