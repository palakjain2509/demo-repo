import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Government Procurement Solutions Australia - MyGETS',
  description: 'MyGETS: CPR-compliant and OCDS-driven procurement solutions for Australian government agencies. Enhance transparency and achieve value for money.',
  metadataBase: new URL('https://mygets.net'),
  alternates: {
    canonical: '/solutions/public',
  },
  openGraph: {
    title: 'Government Procurement Solutions Australia - MyGETS',
    description: 'MyGETS: CPR-compliant and OCDS-driven procurement solutions for Australian government agencies. Enhance transparency and achieve value for money.',
    type: 'website',
    url: 'https://mygets.net/solutions/public',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'MyGETS Government Procurement Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Government Procurement Solutions Australia - MyGETS',
    description: 'MyGETS: CPR-compliant and OCDS-driven procurement solutions for Australian government agencies. Enhance transparency and achieve value for money.',
    images: ['/images/twitter-image.svg'],
  },
};

// Placeholder for actual Fluent UI components and Redux integration

const PublicSectorSolutionsPage = () => {
  // Service structured data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Procurement Software Solutions for Public Sector",
    "provider": {
      "@type": "Organization",
      "name": "MyGETS"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "description": "MyGETS provides CPR-compliant and OCDS-driven procurement solutions to help Australian government agencies enhance transparency, ensure compliance, and achieve value for money.",
    "name": "MyGETS Public Sector Procurement Solutions"
  };

  // Breadcrumb structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mygets.net"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Solutions",
        "item": "https://mygets.net/solutions"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Public Sector Solutions"
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
                Empowering Australian Government Agencies with Transparent Procurement
              </h1>
              <p className="text-xl mb-8 font-sans">
                MyGETS delivers OCDS-native solutions to meet the unique demands of public sector procurement, ensuring compliance, transparency, and value for taxpayer money.
              </p>
              <div className="flex justify-start">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg text-lg transition-colors inline-flex items-center"
                >
                  Request a Government Demo
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Procurement Challenges Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 font-sans">
                Meeting the Mandates of Public Procurement
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed font-sans">
                Australian government agencies operate under strict guidelines, including the Commonwealth Procurement Rules (CPRs). Key challenges include ensuring value for money, maintaining transparency and accountability, managing complex contracts, adhering to data security and sovereignty requirements, and fostering fair competition.
              </p>
            </div>
          </div>
        </section>

        {/* The MyGETS Solution Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 font-sans">
                The Clear Path to Compliant and Efficient Procurement
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed font-sans">
                MyGETS is designed from the ground up with public sector needs in mind. Our OCDS-native platform provides the tools and transparency required to meet your obligations and deliver better public outcomes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Ensure CPR Compliance",
                  description: "Utilize configurable workflows and robust audit trails designed to support adherence to the Commonwealth Procurement Rules and other regulatory frameworks."
                },
                {
                  title: "Enhance Transparency with OCDS",
                  description: "Leverage the Open Contracting Data Standard for open data publishing, clear audit trails, and enhanced public monitoring of procurement activities."
                },
                {
                  title: "Achieve Value for Money",
                  description: "Gain better insights into spending, manage contracts effectively, and utilize data-driven analytics to ensure optimal use of public funds."
                },
                {
                  title: "Uphold Data Security & Sovereignty",
                  description: "Benefit from a platform built with robust security features, meeting Australian government standards for data protection and sovereignty."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-700 font-sans">{feature.title}</h3>
                  <p className="text-base text-gray-700 leading-relaxed font-sans">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 font-sans">
                Key Features for Government Agencies
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-4">
                {[
                  "OCDS Data Publishing & Reporting Tools: Simplify compliance with open data mandates.",
                  "Configurable Workflows for CPR Compliance: Adapt processes to meet specific regulatory needs.",
                  "Robust Audit Trails: Maintain comprehensive records for accountability.",
                  "Enhanced Security Features: Meet government standards for data protection.",
                  "Supplier Diversity Tracking: Support for ethical and inclusive procurement practices.",
                  "WCAG Accessibility Compliance: Ensuring the platform is accessible to all users."
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-700 leading-relaxed font-sans">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center mt-8">
                <Link
                  href="/platform"
                  className="text-blue-700 hover:text-blue-800 font-semibold inline-flex items-center"
                >
                  Explore All Platform Capabilities
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-sans">
              Trusted by Australian Public Sector Organizations
            </h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed font-sans">
              Placeholder for government agency logos, testimonials, and case studies highlighting CPR compliance, transparency gains, or efficiency improvements.
            </p>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-sans">
              Committed to Your Compliance and Security
            </h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed font-sans mb-8">
              MyGETS is built with a deep understanding of Australian public sector requirements. We are committed to helping you meet your obligations under the CPRs, Australian Privacy Principles (APPs), and data sovereignty mandates. Our platform incorporates robust security measures, and we can discuss specific requirements such as IRAP assessment alignment.
            </p>
            <Link
              href="/platform/security"
              className="text-blue-700 hover:text-blue-800 font-semibold inline-flex items-center"
            >
              Learn More About Our Security & Compliance
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-sans">
              Resources for Public Sector Professionals
            </h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed font-sans">
              Placeholder for links to blog posts, whitepapers, and case studies specific to government.
            </p>
          </div>
        </section>

        {/* Full-width CTA Section */}
        <section className="w-screen bg-gradient-to-r from-blue-900 to-blue-700 text-white relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 font-sans">
              Partner with MyGETS for Public Procurement Excellence
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-900 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg text-lg transition-colors w-full sm:w-auto inline-flex items-center"
              >
                Request a Government Demo
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/resources/whitepapers/cpr-compliance-guide"
                className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors w-full sm:w-auto inline-flex items-center"
              >
                Download the Government Solutions Guide
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PublicSectorSolutionsPage;

