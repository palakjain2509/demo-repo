'use client';

import Link from "next/link";

export default function OcdsReportingContent() {
  return (
    <>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
                OCDS Implementation with MyGETS
              </h1>
              <p className="text-xl mb-8 font-sans leading-relaxed">
                Embrace the power of the Open Contracting Data Standard (OCDS). MyGETS provides native, end-to-end OCDS capabilities for unparalleled transparency, robust compliance, and data-driven procurement insights.
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

        {/* Main Content */}
        <section className="w-full py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div id="ocds-overview" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 font-sans">Championing Open Contracting for a Better Future</h2>
                <p className="text-base text-gray-700 mb-4 font-sans leading-relaxed">
                  The Open Contracting Data Standard (OCDS) is a global benchmark for publishing structured, shareable data about public and private procurement processes. It enables comprehensive disclosure of information and documents at all stages of the contracting cycle – from initial planning and tendering through to award, contract execution, and implementation. MyGETS is fundamentally built with OCDS at its core, empowering organizations to not just comply, but to lead in procurement transparency and effectiveness.
                </p>
                <p className="text-base text-gray-700 mb-4 font-sans leading-relaxed">
                  Whether you are a public sector entity striving for greater accountability, a private enterprise seeking enhanced supply chain visibility and ethical sourcing, or an NGO monitoring contract performance, MyGETS provides the sophisticated tools you need to harness the full potential of OCDS data.
                </p>
              </div>

              <div id="mygets-ocds-features" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 font-sans">MyGETS & OCDS: A Seamless Synergy</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Native OCDS Data Architecture",
                      description: "MyGETS doesn't just export to OCDS; it thinks in OCDS. Our platform stores and manages all procurement data in a way that is inherently compatible with the standard, eliminating complex data transformations and ensuring fidelity.",
                      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    },
                    {
                      title: "Automated OCDS Publishing & Export",
                      description: "Effortlessly publish your procurement data in OCDS JSON format (releases and records). Configure publication schedules, define data scopes, and ensure your information is readily accessible to all stakeholders.",
                      icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    },
                    {
                      title: "Built-in OCDS Data Validation",
                      description: "Ensure the integrity and compliance of your OCDS data with our integrated validation tools. MyGETS helps you identify and rectify errors against the OCDS schema before publication, guaranteeing data quality.",
                      icon: "M9 12l2 2 4-4m0 0l-4-4m4 4H5"
                    },
                    {
                      title: "Advanced OCDS Data Analysis & Visualization",
                      description: "Go beyond mere publication. Leverage MyGETS powerful analytics and visualization capabilities to interpret OCDS data, uncover trends, monitor performance, and identify potential red flags or areas for improvement.",
                      icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="text-blue-700 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 font-sans">{feature.title}</h3>
                      <p className="text-base text-gray-700 font-sans leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div id="ocds-benefits" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 font-sans">Transformative Benefits of OCDS Adoption</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Radically Enhanced Transparency",
                      description: "Build profound trust with citizens, suppliers, CSOs, and oversight bodies by openly sharing comprehensive procurement information in a standardized format."
                    },
                    {
                      title: "Strengthened Accountability & Governance",
                      description: "Make procurement processes and decisions fully accountable to all stakeholders, reducing opportunities for corruption and mismanagement."
                    },
                    {
                      title: "Improved Value for Money & Efficiency",
                      description: "Analyze standardized data to identify inefficiencies, reduce waste, mitigate corruption risks, and achieve superior procurement outcomes."
                    },
                    {
                      title: "Increased Market Competition & Fairness",
                      description: "Fair, open, and accessible procurement processes attract a wider, more diverse range of suppliers, fostering healthy competition and innovation."
                    },
                    {
                      title: "Data-Driven Policy Making & Reform",
                      description: "Utilize high-quality, standardized OCDS data to inform evidence-based procurement policies, strategic reforms, and sustainable development goals."
                    },
                    {
                      title: "Simplified Compliance & Reporting",
                      description: "Meet national and international open contracting commitments, regulatory requirements, and internal reporting obligations with greater ease and accuracy."
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold mb-3 font-sans">{benefit.title}</h3>
                      <p className="text-base text-gray-700 font-sans leading-relaxed">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full-width CTA Section */}
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 font-sans">Ready to Lead in Open Contracting?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto font-sans leading-relaxed">
              MyGETS is your dedicated partner in implementing and leveraging the Open Contracting Data Standard for truly impactful and transformative procurement. Our experts are here to guide you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?subject=OCDS_Implementation_Inquiry"
                className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Speak to an OCDS Expert
              </Link>
              <Link 
                href="https://www.open-contracting.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center"
              >
                Visit Open Contracting Partnership
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}