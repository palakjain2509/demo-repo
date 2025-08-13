'use client';

import Link from "next/link";

export default function ContractLifecycleContent() {
  return (
    <>
      <div className="space-y-12">
        {/* Hero Section - Now Full Width */}
        <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
                Smart Contract Management with MyGets
              </h1>
              <p className="text-xl mb-8 font-sans leading-relaxed">
                Streamline your entire contract lifecycle with MyGets. From creation to renewal, our platform ensures compliance, minimizes risk, and maximizes contract value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/request-demo"
                  className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Request a Demo
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
        <section id="clm-overview" className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 font-sans">
            End-to-End Contract Management
          </h2>
          <p className="text-base text-gray-700 mb-6 leading-relaxed font-sans">
            MyGets provides a comprehensive solution for managing the entire contract lifecycle. Our platform streamlines every stage, from initial creation and negotiation to execution, monitoring, and renewal. With built-in compliance checks, automated workflows, and powerful analytics, you can ensure your contracts deliver maximum value while minimizing risk.
          </p>
          <p className="text-base text-gray-700 leading-relaxed font-sans">
            Whether you're managing supplier contracts, service agreements, or complex procurement contracts, MyGets gives you the tools and visibility you need to stay in control.
          </p>
        </section>

        {/* Features Section */}
        <section id="clm-features" className="py-10 bg-slate-50 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 font-sans">
            Key CLM Features
          </h2>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[
              {
                title: "Contract Creation & Templates",
                description: "Create contracts quickly using customizable templates, with built-in compliance checks and approval workflows.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              },
              {
                title: "Automated Workflows",
                description: "Streamline contract processes with configurable workflows for approvals, notifications, and renewals.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
              },
              {
                title: "Compliance & Risk Management",
                description: "Ensure compliance with regulations and internal policies while proactively managing contract risks.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              },
              {
                title: "Contract Analytics",
                description: "Gain insights into contract performance, compliance, and value with powerful analytics tools.",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              },
              {
                title: "Document Management",
                description: "Securely store and manage all contract-related documents with version control and audit trails.",
                icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              },
              {
                title: "Integration Capabilities",
                description: "Seamlessly integrate with your existing systems for a unified contract management experience.",
                icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
              }
            ].map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col">
                <div className="mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center text-gray-800 font-sans">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed flex-grow font-sans">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section id="clm-benefits" className="py-10 mb-12">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 font-sans">
            Benefits of MyGets CLM
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-10 gap-y-8 px-4">
            {[
              {
                title: "Improved Contract Visibility",
                description: "Gain complete visibility into your contract portfolio with centralized management and real-time tracking."
              },
              {
                title: "Enhanced Compliance",
                description: "Ensure adherence to regulations and internal policies with automated compliance checks and monitoring."
              },
              {
                title: "Risk Reduction",
                description: "Proactively identify and mitigate contract risks with automated alerts and monitoring tools."
              },
              {
                title: "Increased Efficiency",
                description: "Streamline contract processes with automated workflows, reducing manual effort and processing time."
              },
              {
                title: "Better Decision Making",
                description: "Make informed decisions with comprehensive contract analytics and reporting capabilities."
              },
              {
                title: "Cost Savings",
                description: "Reduce contract-related costs through improved efficiency, compliance, and risk management."
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

        {/* Call to Action */}
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 font-sans">
              Ready to Transform Your Contract Management?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed font-sans">
              Experience the power of MyGets Contract Lifecycle Management. Our platform is designed to streamline your processes and deliver real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/request-demo"
                className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Schedule a Demo
              </Link>
              <Link 
                href="/platform"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center"
              >
                Explore All Platform Features
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}