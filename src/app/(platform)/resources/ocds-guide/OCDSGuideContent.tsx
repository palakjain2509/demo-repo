'use client';

import React from 'react';
import Link from 'next/link';

const OCDSGuideContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
              Understanding the Open Contracting Data Standard
            </h1>
            <p className="text-xl mb-8 font-sans">
              A comprehensive guide to OCDS and how it's transforming procurement worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left: Table of Contents */}
            <div className="md:w-1/4">
              <div className="sticky top-8 bg-gray-50 p-6 rounded-lg">
                <h2 className="text-lg font-bold mb-4 font-sans">In This Guide</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#what-is-ocds" className="text-blue-700 hover:underline">What is OCDS?</a>
                  </li>
                  <li>
                    <a href="#core-components" className="text-blue-700 hover:underline">Core Components</a>
                  </li>
                  <li>
                    <a href="#business-case" className="text-blue-700 hover:underline">Business Case for OCDS</a>
                  </li>
                  <li>
                    <a href="#implementation" className="text-blue-700 hover:underline">Implementation Approaches</a>
                  </li>
                  <li>
                    <a href="#success-stories" className="text-blue-700 hover:underline">Success Stories</a>
                  </li>
                  <li>
                    <a href="#mygets-advantage" className="text-blue-700 hover:underline">The MyGETS Advantage</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Content */}
            <div className="md:w-3/4">
              <div id="what-is-ocds" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 font-sans">What is OCDS?</h2>
                <p className="text-gray-700 mb-4 font-sans">
                  The Open Contracting Data Standard (OCDS) is a global, non-proprietary data standard that defines a common data model for disclosing data and documents at all stages of the contracting process. It was developed by the Open Contracting Partnership (OCP) to enhance transparency, accountability, and efficiency in public contracting worldwide.
                </p>
                <p className="text-gray-700 mb-4 font-sans">
                  OCDS provides a structured format for publishing information about the planning, procurement, awards, contracts, and implementation of public contracts. By standardizing this information, OCDS makes procurement data more accessible, usable, and valuable for a wide range of stakeholders.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-3 font-sans">Key Benefits of OCDS</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-gray-700 font-sans">Enhanced transparency and accountability in procurement processes</li>
                    <li className="text-gray-700 font-sans">Improved data quality and consistency across procurement activities</li>
                    <li className="text-gray-700 font-sans">Better analytics and insights through standardized data</li>
                    <li className="text-gray-700 font-sans">Reduced compliance costs and manual reporting effort</li>
                    <li className="text-gray-700 font-sans">Increased competition through better information for suppliers</li>
                  </ul>
                </div>
              </div>

              <div id="core-components" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 font-sans">Core Components of OCDS</h2>
                <p className="text-gray-700 mb-6 font-sans">
                  The OCDS framework consists of several key components that work together to create a comprehensive standard for procurement data:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 font-sans">JSON Schema</h3>
                    <p className="text-gray-700 font-sans">
                      A formal specification that defines the structure and format of OCDS data, ensuring consistency and interoperability.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 font-sans">Release Structure</h3>
                    <p className="text-gray-700 font-sans">
                      A flexible model for publishing contracting information as discrete "releases" throughout the contracting process.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 font-sans">Record Structure</h3>
                    <p className="text-gray-700 font-sans">
                      A mechanism for compiling releases into comprehensive "records" that show the complete history of a contracting process.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 font-sans">Codelists</h3>
                    <p className="text-gray-700 font-sans">
                      Standardized lists of codes used to classify and categorize different aspects of contracting data.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 font-sans">The OCDS Contracting Process</h3>
                <p className="text-gray-700 mb-6 font-sans">
                  OCDS organizes information according to the stages of a contracting process:
                </p>

                <div className="relative">
                  <div className="absolute left-4 inset-y-0 w-0.5 bg-blue-200"></div>
                  <div className="space-y-8 relative">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold">1</div>
                      </div>
                      <div className="ml-6">
                        <h4 className="text-lg font-semibold font-sans">Planning</h4>
                        <p className="text-gray-700 font-sans">Information about the rationale and planning for a contracting process.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold">2</div>
                      </div>
                      <div className="ml-6">
                        <h4 className="text-lg font-semibold font-sans">Tender</h4>
                        <p className="text-gray-700 font-sans">Details about the tender notice, specifications, and bidding process.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold">3</div>
                      </div>
                      <div className="ml-6">
                        <h4 className="text-lg font-semibold font-sans">Award</h4>
                        <p className="text-gray-700 font-sans">Information about the award decision and the selected supplier(s).</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold">4</div>
                      </div>
                      <div className="ml-6">
                        <h4 className="text-lg font-semibold font-sans">Contract</h4>
                        <p className="text-gray-700 font-sans">The signed contract and any subsequent amendments.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold">5</div>
                      </div>
                      <div className="ml-6">
                        <h4 className="text-lg font-semibold font-sans">Implementation</h4>
                        <p className="text-gray-700 font-sans">Data on the implementation of the contract, including payments and progress updates.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="business-case" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 font-sans">Business Case for OCDS Adoption</h2>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 font-sans">For Public Sector Organizations</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold mb-2 font-sans">Enhanced Transparency and Trust</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li className="text-gray-700 font-sans">Demonstrate commitment to open government principles</li>
                        <li className="text-gray-700 font-sans">Build public trust through accessible procurement information</li>
                        <li className="text-gray-700 font-sans">Reduce corruption risks through increased scrutiny</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold mb-2 font-sans">Improved Efficiency and Value</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li className="text-gray-700 font-sans">Reduce administrative burden through standardized data</li>
                        <li className="text-gray-700 font-sans">Enable better analysis of spending patterns</li>
                        <li className="text-gray-700 font-sans">Identify opportunities for cost savings</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-sans">For Private Sector Organizations</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold mb-2 font-sans">Competitive Advantage</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li className="text-gray-700 font-sans">Demonstrate transparency commitment to stakeholders</li>
                        <li className="text-gray-700 font-sans">Differentiate from competitors through open practices</li>
                        <li className="text-gray-700 font-sans">Attract partners who value transparency</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold mb-2 font-sans">Risk Management</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li className="text-gray-700 font-sans">Identify and address compliance risks proactively</li>
                        <li className="text-gray-700 font-sans">Create comprehensive audit trails</li>
                        <li className="text-gray-700 font-sans">Detect potential fraud through data analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div id="implementation" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 font-sans">Implementation Approaches</h2>
                <p className="text-gray-700 mb-6 font-sans">
                  Organizations can implement OCDS in several ways, depending on their existing systems, resources, and goals:
                </p>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 font-sans">Phased Implementation</h3>
                    <p className="text-gray-700 mb-3 font-sans">
                      Start with basic compliance, publishing key information about tenders and awards, then gradually expand to include more detailed information and additional stages.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 font-sans">System Integration</h3>
                    <p className="text-gray-700 mb-3 font-sans">
                      Integrate OCDS into existing procurement systems through APIs or data exports, mapping internal data structures to OCDS fields and formats.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 font-sans">Platform-Based Approach</h3>
                    <p className="text-gray-700 mb-3 font-sans">
                      Adopt an OCDS-native platform like MyGETS that handles compliance automatically, configured to match organizational processes and requirements.
                    </p>
                    <div className="mt-4">
                      <Link 
                        href="/platform/ocds-advantage" 
                        className="text-blue-700 font-semibold hover:underline"
                      >
                        Learn more about the MyGETS OCDS-native approach →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div id="success-stories" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 font-sans">Success Stories</h2>
                <p className="text-gray-700 mb-6 font-sans">
                  Organizations around the world have successfully implemented OCDS and realized significant benefits:
                </p>

                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 font-sans">Ukraine's ProZorro System</h3>
                    <p className="text-gray-700 mb-3 font-sans">
                      One of the world's most successful OCDS implementations, ProZorro has saved over $6 billion in public funds, increased supplier participation by 50%, and significantly reduced corruption in procurement processes.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 font-sans">Montreal, Canada</h3>
                    <p className="text-gray-700 mb-3 font-sans">
                      The city implemented an OCDS-based open contracting portal that provides comprehensive visibility into city contracts, improving supplier diversity and enhancing public oversight of municipal spending.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 font-sans">Global Pharmaceutical Company</h3>
                    <p className="text-gray-700 mb-3 font-sans">
                      A major pharmaceutical company implemented an OCDS-based procurement data management system to streamline compliance with diverse regulatory requirements and enhance risk monitoring across their global supply chain.
                    </p>
                  </div>
                </div>
              </div>

              <div id="mygets-advantage" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 font-sans">The MyGETS Advantage</h2>
                <p className="text-gray-700 mb-6 font-sans">
                  MyGETS transforms how organizations implement and benefit from OCDS:
                </p>

                <div className="bg-blue-50 p-8 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 font-sans">OCDS-Native Architecture</h3>
                      <p className="text-gray-700 mb-4 font-sans">
                        Unlike traditional systems that bolt on OCDS compliance, MyGETS is built from the ground up with OCDS at its core, ensuring complete, accurate data without manual effort.
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li className="text-gray-700 font-sans">Automatic data validation and structuring</li>
                        <li className="text-gray-700 font-sans">Built-in compliance with all OCDS requirements</li>
                        <li className="text-gray-700 font-sans">Seamless updates as the standard evolves</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 font-sans">Beyond Compliance</h3>
                      <p className="text-gray-700 mb-4 font-sans">
                        MyGETS leverages OCDS data to deliver strategic value beyond basic compliance:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li className="text-gray-700 font-sans">AI-powered analytics and insights</li>
                        <li className="text-gray-700 font-sans">Proactive risk monitoring and alerts</li>
                        <li className="text-gray-700 font-sans">Seamless integration with existing systems</li>
                        <li className="text-gray-700 font-sans">Enhanced supplier engagement</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <Link 
                      href="/early-adopter-program" 
                      className="inline-block bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors"
                    >
                      Join Our Early Adopter Program
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Procurement with OCDS?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover how MyGETS can help you implement OCDS seamlessly and unlock the full potential of your procurement data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-demo"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Request Demo
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OCDSGuideContent;