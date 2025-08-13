import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SolutionsContent() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Procurement Solutions
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              Tailored procurement intelligence solutions for government agencies and enterprise organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/solutions/government" 
                className="inline-flex items-center justify-center bg-white text-green-900 font-semibold py-3 px-8 rounded-lg hover:bg-green-50 transition-colors"
              >
                Government Solutions
              </Link>
              <Link 
                href="/solutions/enterprise" 
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors"
              >
                Enterprise Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Government Solutions */}
      <section className="py-16 bg-gray-50" aria-labelledby="government-heading">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="government-heading" className="text-3xl font-bold text-gray-900 mb-6">
                Government Procurement Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Transform government procurement with OCDS-compliant solutions that enhance transparency, ensure compliance, and deliver measurable results.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">OCDS compliance and transparency</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Real-time risk detection and monitoring</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Automated reporting and audit trails</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Cost savings and efficiency gains</span>
                </li>
              </ul>
              <Link 
                href="/solutions/government" 
                className="inline-flex items-center justify-center bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors"
              >
                Learn More About Government Solutions
              </Link>
            </div>
            <div className="relative">
              <Image 
                src="/images/solutions/government-procurement.jpg" 
                alt="Government procurement dashboard showing OCDS compliance metrics and transparency reporting"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                priority={false}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-16 bg-white" aria-labelledby="enterprise-heading">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 id="enterprise-heading" className="text-3xl font-bold text-gray-900 mb-6">
                Enterprise Procurement Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Empower enterprise organizations with AI-powered procurement intelligence that drives strategic decision-making and operational excellence.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">AI-powered predictive analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Advanced supplier management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Strategic spend optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Enterprise-grade security and scalability</span>
                </li>
              </ul>
              <Link 
                href="/solutions/enterprise" 
                className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More About Enterprise Solutions
              </Link>
            </div>
            <div className="lg:order-1 relative">
              <Image 
                src="/images/solutions/enterprise-procurement.jpg" 
                alt="Enterprise procurement intelligence dashboard with AI-powered analytics and strategic insights"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                priority={false}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="py-16 bg-gray-50" aria-labelledby="categories-heading">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <header className="text-center mb-16">
            <h2 id="categories-heading" className="text-3xl font-bold text-gray-900 mb-4">
              Solution Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to address specific procurement challenges and requirements
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Public Sector</h3>
              <p className="text-gray-600 mb-4">
                Government agencies and public institutions requiring transparency and compliance.
              </p>
              <Link 
                href="/solutions/public-sector" 
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn More →
              </Link>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Private Sector</h3>
              <p className="text-gray-600 mb-4">
                Private companies seeking efficiency and strategic procurement advantages.
              </p>
              <Link 
                href="/solutions/private-sector" 
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn More →
              </Link>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Executives</h3>
              <p className="text-gray-600 mb-4">
                Executive-level insights and strategic procurement intelligence.
              </p>
              <Link 
                href="/solutions/executives" 
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn More →
              </Link>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Development</h3>
              <p className="text-gray-600 mb-4">
                Tools and insights for business development and growth strategies.
              </p>
              <Link 
                href="/solutions/business-development" 
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn More →
              </Link>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Procurement Leads</h3>
              <p className="text-gray-600 mb-4">
                Lead generation and opportunity identification in procurement.
              </p>
              <Link 
                href="/solutions/procurement-leads" 
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn More →
              </Link>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Public Procurement</h3>
              <p className="text-gray-600 mb-4">
                Specialized solutions for public procurement processes and compliance.
              </p>
              <Link 
                href="/solutions/public" 
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn More →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Procurement?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Discover how MyGETS solutions can address your specific procurement challenges and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/request-demo" 
              className="inline-flex items-center justify-center bg-white text-green-600 font-semibold py-3 px-8 rounded-lg hover:bg-green-50 transition-colors"
            >
              Schedule Demo
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}