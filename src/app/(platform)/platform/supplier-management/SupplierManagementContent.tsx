'use client';

import Link from "next/link";

export default function SupplierManagementContent() {
  return (
    <>
      <div className="space-y-12">
        {/* Hero Section - Now Full Width */}
        <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
                Supplier Management with MyGets
              </h1>
              <p className="text-xl mb-8 font-sans leading-relaxed">
                Forge stronger, more resilient, and mutually beneficial supplier relationships. MyGets helps you to streamline management, foster collaboration, and drive strategic value from your supply base.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/request-demo?feature=supplier-management"
                  className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Explore Supplier Management Tools
                </Link>
                <Link 
                  href="/platform"
                  className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center"
                >
                  Explore All Platform Features
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="supplier-management-overview" className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 font-sans">
            Strategic Supplier Relationship Management (SRM): Beyond Transactions
          </h2>
          <p className="text-base text-gray-700 mb-6 leading-relaxed font-sans">
            In an increasingly interconnected and volatile world, effective Supplier Relationship Management (SRM) is no longer just an operational task—it's a critical strategic imperative. MyGets provides a sophisticated, centralized platform to manage the entire lifecycle of your supplier relationships. From seamless initial onboarding and rigorous qualification to continuous performance evaluation, proactive risk mitigation, and fostering innovation, our tools are designed to help you build a truly resilient and high-performing supplier network.
          </p>
          <p className="text-base text-gray-700 leading-relaxed font-sans">
            Move beyond tactical purchasing and cultivate strategic partnerships that unlock new sources of value, drive innovation, enhance sustainability, and secure your supply chain against disruption.
          </p>
        </section>

        {/* Features Section */}
        <section id="key-srm-features" className="py-10 bg-slate-50 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 font-sans">
            Core Capabilities of MyGets Supplier Management
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[
              {
                title: "Centralized 360° Supplier View",
                description: "Maintain a comprehensive, up-to-date repository of all supplier information: contacts, contracts, OCDS data, certifications, performance history, risk profiles, diversity status, and communication logs.",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              },
              {
                title: "Streamlined & Automated Onboarding",
                description: "Automate and simplify the supplier registration, pre-qualification, and onboarding process. Collect necessary documentation, conduct due diligence, and ensure compliance from day one with configurable workflows.",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              },
              {
                title: "Dynamic Performance Monitoring & Scorecards",
                description: "Track and evaluate supplier performance against configurable KPIs, SLAs, and qualitative factors. Utilize customizable scorecards and dashboards to identify top performers, manage underperformance, and drive continuous improvement.",
                icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              },
              {
                title: "Proactive Risk & Compliance Management",
                description: "Continuously identify, assess, and mitigate supplier-related risks (financial, operational, geopolitical, ESG, compliance). Monitor certifications, insurance, and adherence to your organization's ethical and sustainability standards.",
                icon: "M9 12l2 2 4-4m0 0l-4-4m4 4H5m13-2L15 3l-3 3m5 14l-3 3-3-3M15 21v-3.5A2.5 2.5 0 0012.5 15h-1A2.5 2.5 0 009 17.5V21M3 9l3-3 3 3M3 15l3 3 3-3"
              },
              {
                title: "Secure Supplier Collaboration Portal",
                description: "Facilitate seamless, two-way communication and collaboration with your suppliers. Share documents, track correspondence, manage queries, conduct surveys, and co-develop solutions efficiently through a secure, centralized portal.",
                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              },
              {
                title: "Strategic Supplier Segmentation & Development",
                description: "Segment your supplier base according to strategic importance, spend, risk, and other criteria. Develop tailored engagement, development, and innovation programs to maximize value from key partnerships.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                <div className="text-blue-700 mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center text-gray-800 font-sans">
                  {item.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section id="srm-benefits" className="py-10">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 font-sans">
            Strategic Advantages of MyGets Supplier Management
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-10 gap-y-8 px-4">
            {[
              {
                title: "Cultivate Stronger, More Collaborative Partnerships",
                description: "Build trust, transparency, and foster open communication for mutual benefit, leading to improved supplier responsiveness and innovation."
              },
              {
                title: "Significantly Reduce Supply Chain Risks",
                description: "Proactively identify, assess, and mitigate a wide range of supplier risks (financial, operational, reputational, ESG) to ensure business continuity and resilience."
              },
              {
                title: "Drive Continuous Supplier Performance Improvement",
                description: "Objectively monitor and evaluate supplier performance, providing actionable feedback and fostering a culture of continuous improvement and excellence."
              },
              {
                title: "Enhance Compliance & Ethical Sourcing",
                description: "Ensure suppliers consistently meet contractual obligations, regulatory requirements, and your organization's ethical and sustainability standards."
              },
              {
                title: "Achieve Greater Operational Efficiency",
                description: "Automate manual tasks, streamline supplier-related processes (e.g., onboarding, information updates), and reduce administrative overhead."
              },
              {
                title: "Unlock Increased Value & Drive Innovation",
                description: "Collaborate more effectively with strategic suppliers to identify cost-saving opportunities, improve product/service quality, and co-create innovative solutions."
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 font-sans">{benefit.title}</h4>
                  <p className="text-base text-gray-700 leading-relaxed font-sans">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 font-sans">
              Ready to Optimize Your Supplier Network and Drive Strategic Advantage?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed font-sans">
              Discover how MyGets can help you build a more resilient, efficient, innovative, and collaborative supplier ecosystem. Our experts are ready to tailor a solution to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/request-demo?feature=supplier-management"
                className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Request a Supplier Management Demo
              </Link>
              <Link 
                href="/platform"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center"
              >
                Explore All Platform Capabilities
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}