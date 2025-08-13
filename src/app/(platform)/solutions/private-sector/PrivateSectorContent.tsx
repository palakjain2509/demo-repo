'use client';

import Link from "next/link";

export default function PrivateSectorContent() {
  return (
    <>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
                Private Sector Procurement with MyGets
              </h1>
              <p className="text-xl mb-8 font-sans">
                Transform your procurement operations with MyGets. Our platform helps private sector organizations streamline processes, reduce costs, and drive strategic value through intelligent procurement solutions.
              </p>
              <div className="flex justify-start">
                <Link 
                  href="/request-demo?feature=private-sector"
                  className="bg-white text-blue-900 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg text-lg transition-colors"
                >
                  Explore Private Sector Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <div className="space-y-12 py-8 px-4 md:px-6 lg:px-8">
          <section id="private-sector-overview" className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 font-sans text-center text-gray-800">
              Comprehensive Procurement Solutions for Private Sector
            </h2>
            <p className="text-base text-gray-700 mb-6 leading-relaxed font-sans">
              MyGets provides end-to-end procurement solutions tailored for private sector organizations. From strategic sourcing and supplier management to contract lifecycle management and spend analytics, our platform helps you optimize every aspect of your procurement operations.
            </p>
            <p className="text-base text-gray-700 leading-relaxed font-sans">
              Leverage advanced AI and machine learning capabilities to make data-driven decisions, reduce costs, and enhance supplier relationships while maintaining compliance and mitigating risks.
            </p>
          </section>

          {/* Features Section */}
          <section id="key-features" className="py-10 bg-slate-50 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 font-sans">
              Key Features for Private Sector
            </h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {[
                {
                  title: "Strategic Sourcing",
                  description: "Optimize your sourcing strategies with AI-powered insights, automated RFx processes, and comprehensive supplier evaluation tools.",
                  icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                },
                {
                  title: "Supplier Management",
                  description: "Build and maintain strong supplier relationships with comprehensive onboarding, performance monitoring, and collaboration tools.",
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                },
                {
                  title: "Contract Management",
                  description: "Streamline contract lifecycle management with automated workflows, compliance monitoring, and risk assessment tools.",
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                },
                {
                  title: "Spend Analytics",
                  description: "Gain deep insights into your spending patterns with advanced analytics, visualization tools, and predictive capabilities.",
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                },
                {
                  title: "Risk Management",
                  description: "Proactively identify and mitigate procurement risks with comprehensive monitoring and assessment tools.",
                  icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                },
                {
                  title: "Integration Capabilities",
                  description: "Seamlessly connect with your existing systems through our robust API and integration framework.",
                  icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-center text-blue-700 font-sans">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed font-sans">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="py-10">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 font-sans">
              Benefits for Private Sector Organizations
            </h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-10 gap-y-8 px-4">
              {[
                {
                  title: "Cost Reduction & Savings",
                  description: "Identify and realize significant cost savings through strategic sourcing, spend analysis, and supplier optimization."
                },
                {
                  title: "Operational Efficiency",
                  description: "Streamline procurement processes, reduce manual tasks, and improve productivity across your organization."
                },
                {
                  title: "Risk Mitigation",
                  description: "Proactively identify and manage procurement risks, ensuring business continuity and compliance."
                },
                {
                  title: "Strategic Value",
                  description: "Transform procurement from a cost center to a strategic value driver for your organization."
                },
                {
                  title: "Supplier Collaboration",
                  description: "Build stronger, more collaborative relationships with suppliers to drive innovation and mutual success."
                },
                {
                  title: "Data-Driven Decisions",
                  description: "Make informed decisions with comprehensive analytics and real-time insights into your procurement operations."
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 font-sans">{benefit.title}</h4>
                    <p className="text-base text-gray-700 leading-relaxed font-sans">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Full-width CTA Section */}
      <section className="w-screen bg-gradient-to-r from-blue-900 to-blue-700 text-white relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 font-sans">
            Ready to Transform Your Private Sector Procurement?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-sans">
            Discover how MyGets can help you optimize your procurement operations and drive strategic value. Our experts are ready to guide you through the transformation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/request-demo?feature=private-sector"
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg text-lg transition-colors w-full sm:w-auto"
            >
              Request a Private Sector Demo
            </Link>
            <Link 
              href="/platform"
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors w-full sm:w-auto"
            >
              Explore Platform Features
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}