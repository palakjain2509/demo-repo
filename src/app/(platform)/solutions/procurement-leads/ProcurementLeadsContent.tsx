'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, FileText, Shield, BarChart4, Clock, Search } from 'lucide-react';

export default function ProcurementLeadsContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
              Procurement Excellence Through OCDS-Native Design
            </h1>
            <p className="text-xl mb-8 font-sans leading-relaxed">
              MyGETS empowers procurement professionals with unparalleled compliance, efficiency, and audit capabilities through our purpose-built OCDS-native platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/request-demo"
                className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Request Demo
              </Link>
              <Link
                href="/platform"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center"
              >
                View Platform Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Procurement Challenges Solved</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MyGETS addresses the most pressing challenges facing procurement professionals today with our OCDS-native approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Challenge 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-blue-900" />
                </div>
                <CardTitle className="text-xl font-bold text-blue-900">Compliance Complexity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Navigating complex regulatory requirements and transparency mandates creates significant administrative burden.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">How MyGETS Solves This:</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Built-in OCDS compliance at every step</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Automated validation against standards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>One-click compliance reporting</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Challenge 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-900" />
                </div>
                <CardTitle className="text-xl font-bold text-blue-900">Process Inefficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Manual processes and disconnected systems create redundant work and slow down procurement cycles.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">How MyGETS Solves This:</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>End-to-end procurement workflow</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Automated data capture and validation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Intelligent approval routing</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Challenge 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-900" />
                </div>
                <CardTitle className="text-xl font-bold text-blue-900">Audit Readiness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Maintaining comprehensive audit trails and demonstrating compliance is time-consuming and error-prone.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">How MyGETS Solves This:</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Immutable audit trails for all actions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Comprehensive version history</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>One-click audit report generation</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* OCDS Advantage Section */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">The OCDS-Native Advantage</h2>
              <p className="text-lg text-gray-600 mb-6">
                Unlike traditional procurement systems that treat OCDS as an afterthought or export format, MyGETS is built with OCDS as its core data model. This fundamental difference delivers significant advantages:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Real-time Compliance</span>
                    <p className="text-gray-600 mt-1">Data is structured according to OCDS from the moment of creation, not retrofitted later</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Complete Audit History</span>
                    <p className="text-gray-600 mt-1">Every change is logged as an immutable OCDS "release," creating a robust, auditable history</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Seamless Reporting</span>
                    <p className="text-gray-600 mt-1">Generate compliant reports instantly without data transformation or manual intervention</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Future-Proof Architecture</span>
                    <p className="text-gray-600 mt-1">Easily adapt to OCDS standard updates and extensions without system overhauls</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-gray-100 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">What is OCDS?</h3>
              <p className="text-gray-600 mb-4">
                The Open Contracting Data Standard (OCDS) is a global standard for publishing structured data on all stages of the contracting process, from planning to implementation.
              </p>
              <p className="text-gray-600 mb-4">
                OCDS promotes transparency, enables deeper analysis of procurement data, and facilitates better decision-making for both buyers and suppliers.
              </p>
              <div className="mt-6">
                <Link href="/resources/ocds-guide" className="text-blue-600 font-semibold hover:underline flex items-center">
                  Learn more about OCDS
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Key Features for Procurement Professionals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MyGETS delivers powerful tools designed specifically for procurement teams to streamline processes and ensure compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Comprehensive Procurement Workflow</h3>
              <p className="text-gray-600 mb-4">
                Manage the entire procurement lifecycle from planning and budgeting through to contract implementation and closure, with every step meticulously mapped to relevant OCDS fields.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Structured planning and needs assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Tender creation and management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Evaluation and award processes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Contract management and monitoring</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart4 className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Advanced Analytics and Reporting</h3>
              <p className="text-gray-600 mb-4">
                Leverage structured OCDS data to gain powerful insights into procurement performance, compliance, and strategic opportunities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Real-time procurement dashboards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Spend analysis and categorization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Compliance monitoring and alerts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Custom report generation</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Compliance and Risk Management</h3>
              <p className="text-gray-600 mb-4">
                Ensure adherence to procurement regulations and identify potential risks before they become issues.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automated compliance checks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>OCDS red flag indicators</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Audit-ready documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Proactive risk monitoring</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Document and Data Management</h3>
              <p className="text-gray-600 mb-4">
                Centralize all procurement documentation with powerful search and retrieval capabilities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Centralized document repository</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Version control and change tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Advanced search capabilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Secure document sharing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Success Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how procurement professionals are transforming their operations with MyGETS.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 md:p-12">
            <div className="md:flex gap-8 items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="aspect-square bg-gray-200 rounded-lg"></div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">National Procurement Authority</h3>
                <p className="text-gray-600 mb-6">
                  The National Procurement Authority (NPA) faced significant challenges with transparency reporting and compliance, including manual data collection across disconnected systems, inconsistent data formats, and time-consuming reporting processes.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">90% reduction in compliance reporting time</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">100% OCDS compliance achieved</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">$12.3 million in savings identified</p>
                    </div>
                  </div>
                </div>
                <div className="italic text-gray-600 border-l-4 border-blue-500 pl-4 mb-6">
                  "MyGETS transformed our procurement operations from a compliance burden to a strategic advantage. The OCDS-native approach means we're no longer retrofitting data for transparency—it's built in from the start."
                </div>
                <div>
                  <Link href="/resources/case-studies/national-procurement-authority" className="text-blue-600 font-semibold hover:underline flex items-center">
                    Read the full case study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions from procurement professionals about MyGETS.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">How does MyGETS ensure compliance with procurement regulations?</h3>
              <p className="text-gray-600">
                MyGETS is built on the Open Contracting Data Standard (OCDS), which aligns with global best practices for procurement transparency. The platform includes configurable validation rules that can be tailored to your specific regulatory requirements, whether you're following Commonwealth Procurement Rules, EU directives, or other frameworks. Every action in the system is automatically validated against these rules, with clear alerts for any compliance issues.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">How difficult is it to migrate from our current procurement system?</h3>
              <p className="text-gray-600">
                We've designed MyGETS with migration in mind. Our implementation team provides comprehensive data mapping and migration services to transfer your existing procurement data into the OCDS-native structure. The platform includes flexible import tools that can handle data from various sources, including spreadsheets, legacy systems, and other procurement platforms. Most customers complete migration within 4-8 weeks, depending on data volume and complexity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Can MyGETS integrate with our existing ERP or financial systems?</h3>
              <p className="text-gray-600">
                Yes, MyGETS offers robust integration capabilities with major ERP and financial systems. We provide standard connectors for popular platforms like SAP, Oracle, and Microsoft Dynamics, as well as a comprehensive API for custom integrations. These integrations enable seamless data flow between systems, eliminating duplicate data entry and ensuring consistency across your procurement and financial processes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">How does MyGETS help with audit preparation?</h3>
              <p className="text-gray-600">
                MyGETS dramatically simplifies audit preparation through its OCDS-native architecture. Every change in the system is captured as an immutable OCDS "release," creating a comprehensive audit trail. The platform includes pre-built audit reports that can be generated with a single click, showing the complete history of each procurement activity, including who made changes, when they were made, and what specifically changed. This level of detail and transparency typically reduces audit preparation time by 80-90%.
              </p>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600">
                Have more questions? <Link href="/resources/faq" className="text-blue-600 hover:underline">View all FAQs</Link> or <Link href="/contact" className="text-blue-600 hover:underline">contact our team</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Procurement Process?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join procurement leaders who are leveraging MyGETS to achieve compliance, efficiency, and strategic advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center">
              Join Early Adopter Program
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}