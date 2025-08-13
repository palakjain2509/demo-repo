'use client';

import Link from "next/link";

export default function EngineContent() {
  return (
    <>
      <div className="space-y-12">
        {/* Hero Section - Now Full Width */}
        <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
                MyGets: Intelligent Procurement Engine
              </h1>
              <p className="text-xl mb-8 font-sans leading-relaxed">
                Powering the future of procurement with advanced AI and machine learning. Transform your data into actionable insights and drive strategic decision-making.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/request-demo"
                  className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Experience the Power
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
        <section id="engine-overview" className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 font-sans">
            Intelligent Procurement at Scale
          </h2>
          <p className="text-base text-gray-700 mb-6 leading-relaxed font-sans">
            The MyGets Engine is the core intelligence layer that powers our entire platform. Built on cutting-edge AI and machine learning technologies, it processes vast amounts of procurement data to deliver actionable insights, automate complex tasks, and enable data-driven decision-making.
          </p>
          <p className="text-base text-gray-700 leading-relaxed font-sans">
            From spend analysis and supplier management to contract lifecycle and compliance monitoring, our engine continuously learns and adapts to your organization's unique procurement patterns and requirements.
          </p>
        </section>

        {/* Core Capabilities */}
        <section id="engine-capabilities" className="py-10 bg-slate-50 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 font-sans">
            Core Engine Capabilities
          </h2>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[
              {
                title: "Advanced Analytics",
                description: "Leverage machine learning algorithms to analyze procurement patterns, identify trends, and predict future outcomes with high accuracy.",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              },
              {
                title: "Natural Language Processing",
                description: "Process and understand complex procurement documents, contracts, and communications using advanced NLP techniques.",
                icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
              },
              {
                title: "Predictive Intelligence",
                description: "Forecast market trends, supplier performance, and procurement needs using sophisticated predictive models.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
              },
              {
                title: "Automated Workflows",
                description: "Streamline procurement processes with intelligent automation that learns and adapts to your organization's needs.",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              },
              {
                title: "Risk Assessment",
                description: "Identify and mitigate procurement risks using AI-powered analysis of supplier data and market conditions.",
                icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              },
              {
                title: "Continuous Learning",
                description: "Our engine continuously improves its performance through machine learning and user feedback.",
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              }
            ].map((capability) => (
              <div key={capability.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col">
                <div className="mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={capability.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center text-gray-800 font-sans">
                  {capability.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed flex-grow font-sans">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section id="engine-benefits" className="py-10 mb-12">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 font-sans">
            Benefits of the MyGets Engine
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-10 gap-y-8 px-4">
            {[
              {
                title: "Enhanced Decision Making",
                description: "Make data-driven decisions with confidence using AI-powered insights and predictions."
              },
              {
                title: "Increased Efficiency",
                description: "Automate routine tasks and streamline processes to save time and reduce errors."
              },
              {
                title: "Better Risk Management",
                description: "Proactively identify and mitigate risks using advanced analytics and predictive models."
              },
              {
                title: "Improved Compliance",
                description: "Ensure adherence to regulations and policies with automated monitoring and alerts."
              },
              {
                title: "Cost Optimization",
                description: "Identify savings opportunities and optimize procurement spend through intelligent analysis."
              },
              {
                title: "Scalable Intelligence",
                description: "Scale your procurement operations with AI that grows and adapts with your needs."
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
              Ready to Experience the Power of AI in Procurement?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed font-sans">
              Discover how the MyGets Engine can transform your procurement operations with intelligent automation and insights.
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