'use client';

import Link from "next/link";

export default function SpendAnalyticsContent() {
  return (
    <>
      <div className="space-y-12">
        {/* Hero Section - Now Full Width */}
        <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-40 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
                Unlock Spend Analytics With MyGets
              </h1>
              <p className="text-xl mb-8 font-sans leading-relaxed">
                Transform raw procurement data into powerful, actionable intelligence. MyGets Spend Analytics empowers you to drive substantial savings, enhance operational efficiency, and make truly strategic sourcing decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/request-demo?feature=spend-analytics"
                  className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
                >
                  See Spend Analytics in Action
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
        <section id="spend-analytics-overview" className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 font-sans">
            From Data Overload to Data-Driven Decisions
          </h2>
          <p className="text-base text-gray-700 mb-6 leading-relaxed font-sans">
            In today's intricate global procurement landscape, merely collecting data isn't enough. The ability to analyze, interpret, and act upon spend information is paramount to achieving competitive advantage and operational excellence. MyGets Spend Analytics provides comprehensive, real-time visibility into your organization's complete purchasing activities, helping you uncover hidden trends, meticulously control costs, and proactively mitigate financial and operational risks.
          </p>
          <p className="text-base text-gray-700 leading-relaxed font-sans">
            Our intuitive platform translates complex datasets into clear, visual insights, enabling your procurement team to move beyond reactive reporting to proactive, strategic spend management that directly impacts the bottom line and supports broader organizational goals, including sustainability and innovation.
          </p>
        </section>

        {/* Features Section */}
        <section id="key-analytics-features" className="py-10 bg-slate-50 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 font-sans">
            Core Capabilities of MyGets Spend Analytics
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[
              {
                title: "Interactive & Customizable Dashboards",
                description: "Visualize your entire spend landscape through intuitive, role-based dashboards. Track KPIs, monitor budget vs. actuals, and drill down into granular details with ease. Customize views to focus on what matters most to your team.",
                icon: "📊"
              },
              {
                title: "AI-Powered Spend Categorization",
                description: "Leverage advanced algorithms for automated and accurate spend categorization across suppliers, GL codes, cost centers, and custom dimensions. Overcome inconsistent data and gain true visibility into where your money is going.",
                icon: "🔍"
              },
              {
                title: "Proactive Savings Opportunity Identification",
                description: "Our analytics engine proactively identifies and quantifies potential cost savings. Uncover opportunities for demand aggregation, supplier consolidation, contract compliance improvements, and better negotiation leverage.",
                icon: "💰"
              },
              {
                title: "Comprehensive Supplier Performance Insights",
                description: "Analyze spend with individual suppliers to evaluate performance against contracts, identify critical dependencies, manage risks, and ensure you are maximizing value from key supplier relationships.",
                icon: "📈"
              },
              {
                title: "Robust Compliance & Risk Monitoring",
                description: "Continuously monitor procurement activities for compliance with internal policies, preferred supplier programs, and external regulations. Detect anomalies, maverick spend, and potential fraudulent activities early.",
                icon: "⚠️"
              },
              {
                title: "Flexible & Exportable Reporting",
                description: "Generate a wide range of standard and custom reports tailored to your specific analytical needs. Easily export data and visualizations for sharing with stakeholders and supporting strategic decision-making processes.",
                icon: "📋"
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
        <section id="analytics-benefits" className="py-10">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 font-sans">
            Tangible Benefits of MyGets Spend Analytics
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-10 gap-y-8 px-4">
            {[
              {
                title: "Achieve Significant & Sustainable Cost Savings",
                description: "Directly identify, track, and realize tangible savings opportunities across all spend categories, contributing to improved profitability."
              },
              {
                title: "Enhance Budget Control & Financial Predictability",
                description: "Gain superior visibility into spend patterns, improve budget adherence, and enhance forecasting accuracy for better financial planning."
              },
              {
                title: "Drive Smarter, Strategic Sourcing Decisions",
                description: "Leverage comprehensive data and insights to make more informed sourcing choices, optimize supplier portfolios, and negotiate from a position of strength."
              },
              {
                title: "Optimize Supplier Relationships & Performance",
                description: "Objectively assess supplier performance, manage risks associated with critical suppliers, and foster more collaborative, value-driven partnerships."
              },
              {
                title: "Drastically Reduce Maverick Spend & Improve Compliance",
                description: "Increase control over decentralized purchasing, enforce policy compliance, and minimize unmanaged spend across the organization."
              },
              {
                title: "Enable Proactive Risk Mitigation & Management",
                description: "Identify potential supply chain disruptions, supplier financial instability, and other procurement-related risks early, allowing for timely intervention."
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
              Ready to Illuminate Your Path to Procurement Excellence?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed font-sans">
              Let MyGets Spend Analytics provide the clarity, control, and strategic insights you need to optimize every facet of your procurement operations. Our experts are eager to demonstrate the power of our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/request-demo?feature=spend-analytics"
                className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Get a Personalized Analytics Demo
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