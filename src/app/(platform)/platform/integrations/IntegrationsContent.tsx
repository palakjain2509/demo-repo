'use client';

import Link from "next/link";

export default function IntegrationsContent() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mygets.net";

  return (
    <div className="space-y-12">
      {/* Hero Section - Now Full Width */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
              Seamless Integrations
            </h1>
            <p className="text-xl mb-8 font-sans leading-relaxed">
              Connect MyGets with your existing systems and tools. Our platform integrates with leading ERP, accounting, and procurement systems to create a unified procurement ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/request-demo"
                className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Request Integration Demo
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
      <section id="integrations-overview" className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 font-sans">
          Connect Your Procurement Ecosystem
        </h2>
        <p className="text-base text-gray-700 mb-6 leading-relaxed font-sans">
          MyGets offers seamless integration capabilities with your existing systems and tools. Our platform is designed to work harmoniously with your current technology stack, ensuring a smooth transition and enhanced functionality.
        </p>
        <p className="text-base text-gray-700 leading-relaxed font-sans">
          Whether you're using ERP systems, accounting software, or other procurement tools, our integration solutions ensure data consistency, process automation, and improved efficiency across your organization.
        </p>
      </section>

      {/* Integration Categories */}
      <section id="integration-categories" className="py-10 bg-slate-50 rounded-xl shadow-lg mb-12">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 font-sans">
          Integration Categories
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {[
            {
              title: "ERP Systems",
              description: "Integrate with leading ERP systems like SAP, Oracle, and Microsoft Dynamics for seamless data flow and process automation.",
              icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            },
            {
              title: "Accounting Software",
              description: "Connect with popular accounting platforms to streamline financial processes and ensure accurate record-keeping.",
              icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            },
            {
              title: "Procurement Tools",
              description: "Integrate with existing procurement tools to enhance functionality and create a unified procurement experience.",
              icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            },
            {
              title: "Supplier Portals",
              description: "Connect with supplier portals to streamline communication and enhance supplier relationship management.",
              icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            },
            {
              title: "Analytics Platforms",
              description: "Integrate with analytics tools to enhance data visualization and reporting capabilities.",
              icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            },
            {
              title: "Document Management",
              description: "Connect with document management systems to streamline contract and document handling.",
              icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            }
          ].map((category) => (
            <div key={category.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col">
              <div className="mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d={category.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center text-gray-800 font-sans">
                {category.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed flex-grow font-sans">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="integration-benefits" className="py-10 mb-12">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 font-sans">
          Benefits of Integration
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-10 gap-y-8 px-4">
          {[
            {
              title: "Data Consistency",
              description: "Ensure data accuracy and consistency across all your systems and tools."
            },
            {
              title: "Process Automation",
              description: "Automate workflows and reduce manual data entry across platforms."
            },
            {
              title: "Enhanced Visibility",
              description: "Gain comprehensive visibility into your procurement operations."
            },
            {
              title: "Improved Efficiency",
              description: "Streamline processes and reduce operational overhead."
            },
            {
              title: "Better Decision Making",
              description: "Access unified data for more informed decision-making."
            },
            {
              title: "Scalable Solution",
              description: "Easily scale your integration capabilities as your needs grow."
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
            Ready to Connect Your Systems?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed font-sans">
            Discover how MyGets can integrate with your existing systems to create a unified procurement ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/request-demo"
              className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              Schedule Integration Demo
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
  );
} 