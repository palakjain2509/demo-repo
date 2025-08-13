'use client';

import Link from "next/link";

export default function PlatformContent() {
  const platformFeatures = [
    {
      name: "Spend Analytics & Insights",
      description: "Gain deep, actionable insights into your organization's procurement spend. Identify savings opportunities, track budget adherence, and make data-driven decisions with powerful, OCDS-enhanced analytics and customizable reporting.",
      link: "/platform/spend-analytics",
      icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
    },
    {
      name: "Supplier Relationship Management (SRM)",
      description: "Effectively manage the entire supplier lifecycle. Streamline onboarding, track performance with scorecards, mitigate risks, and foster collaboration for stronger, more resilient supplier partnerships.",
      link: "/platform/supplier-management",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      name: "Contract Lifecycle Management (CLM)",
      description: "Streamline contract creation, negotiation, execution, and monitoring. Ensure compliance, minimize risk, and maximize contract value with our OCDS-aligned CLM tools.",
      link: "/platform/contract-lifecycle",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      name: "OCDS Reporting & Compliance Hub",
      description: "Leverage the full power of the Open Contracting Data Standard. Publish, analyze, and share your procurement data effortlessly for enhanced transparency, interoperability, and robust compliance.",
      link: "/platform/ocds-reporting",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
      name: "Seamless System Integrations",
      description: "Connect MyGets with your existing ERP, financial systems, CRM, and other business applications. Create a unified procurement ecosystem for automated workflows and consistent data.",
      link: "/platform/integrations",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      name: "Enterprise-Grade Security & Compliance",
      description: "Trust in our robust security architecture, designed to protect your sensitive procurement data and meet stringent compliance standards, including data sovereignty requirements for Australian organizations.",
      link: "/platform/security",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    }
  ];

  return (
    <div className="space-y-12">
        {/* Hero Section - Now Full Width */}
        <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
                The MyGets Procurement Platform
              </h1>
              <p className="text-xl mb-8 font-sans leading-relaxed">
                Discover a smarter, more transparent, and efficient way to manage your entire procurement lifecycle. MyGets is an OCDS-native, AI-enhanced platform built for strategic decision-making and superior outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/request-demo"
                  className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Request a Platform Demo
                </Link>
                <Link 
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center"
                >
                  Contact Our Solutions Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Introduction */}
        <section id="platform-introduction" className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 font-sans">
            Transforming Procurement with Intelligence and Transparency
          </h2>
          <p className="text-base text-gray-700 mb-6 leading-relaxed font-sans">
            MyGets offers a comprehensive suite of integrated tools designed to streamline your procurement processes from end to end. We empower organizations to move beyond traditional, often fragmented approaches by providing a unified platform that leverages the Open Contracting Data Standard (OCDS) for unparalleled data consistency and AI-powered insights for smarter decision-making.
          </p>
          <p className="text-base text-gray-700 leading-relaxed font-sans">
            Our commitment is to provide a solution that is not only powerful and feature-rich but also intuitive and adaptable to your unique organizational needs. Explore our core capabilities below to see how MyGets can revolutionize your procurement operations.
          </p>
        </section>

        {/* Core Capabilities */}
        <section id="core-capabilities" className="py-10 bg-slate-50 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 font-sans">
            Core Platform Capabilities
          </h2>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {platformFeatures.map((feature) => (
              <div key={feature.name} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col">
                <div className="mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center text-gray-800 font-sans">
                  {feature.name}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed flex-grow font-sans">
                  {feature.description}
                </p>
                <div className="mt-6 text-center">
                  <Link 
                    href={feature.link}
                    className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded-md text-sm transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Platform Benefits */}
        <section id="platform-benefits" className="py-10 mb-12">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 font-sans">
            Key Benefits of the MyGets Platform
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-10 gap-y-8 px-4">
            {[
              {
                title: "Unified Procurement View",
                description: "Gain a single source of truth for all procurement activities, from planning and sourcing to contract management and payment."
              },
              {
                title: "Enhanced Data Transparency (OCDS-Native)",
                description: "Leverage standardized, machine-readable OCDS data for improved visibility, interoperability, and compliance."
              },
              {
                title: "AI-Powered Insights & Efficiency",
                description: "Utilize artificial intelligence for tasks like tender document Q&A, risk identification, and predictive analytics."
              },
              {
                title: "Strategic Spend Optimization",
                description: "Identify cost-saving opportunities, control maverick spend, and maximize value for money through advanced analytics."
              },
              {
                title: "Improved Supplier Collaboration & Performance",
                description: "Streamline supplier interactions, monitor performance effectively, and build stronger, more strategic partnerships."
              },
              {
                title: "Robust Compliance & Risk Mitigation",
                description: "Ensure adherence to internal policies and external regulations, and proactively manage procurement-related risks."
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
              Ready to Elevate Your Procurement Strategy?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed font-sans">
              Experience the future of procurement with MyGets. Our comprehensive platform is designed to deliver tangible results and transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/request-demo"
                className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Schedule a Personalized Demo
              </Link>
              <Link 
                href="/contact"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center"
              >
                Contact Our Solutions Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }