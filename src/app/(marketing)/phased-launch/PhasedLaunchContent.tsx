'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Shield, Users, Building2, BarChart3, Globe, CheckCircle2 } from 'lucide-react';

export default function PhasedLaunchContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-700/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              Strategic Roadmap
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Driving Innovation and Sustainable Procurement
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed">
              Our phased release strategy transforms procurement through innovation, sustainability, and transparency. Building the critical infrastructure for strategic initiatives and positive global change.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#phase-1"
                className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
              >
                Explore Our Phases
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-all"
              >
                Get Early Access
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-center space-x-8 py-4 overflow-x-auto">
            <a href="#introduction" className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors whitespace-nowrap">
              Why MyGets
            </a>
            <a href="#phase-1" className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors whitespace-nowrap">
              Phase 1: Foundation
            </a>
            <a href="#phase-2" className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors whitespace-nowrap">
              Phase 2: Expansion
            </a>
            <a href="#phase-3" className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors whitespace-nowrap">
              Phase 3: Leadership
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-16 py-12 px-4 md:px-6 lg:px-8">
        {/* Introduction Section */}
        <section id="introduction" className="max-w-4xl mx-auto scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
            Why MyGets Matters Now
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Drive Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Standardizing data, streamlining processes, and fostering collaboration to free up resources for strategic initiatives and value creation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-700">Champion Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                Track, measure, and report on sustainability metrics within supply chains, enabling informed and ethical procurement decisions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Build Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                Enhance transparency, reduce corruption risks, and build trust among stakeholders through open contracting principles.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Visualization */}
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          <div className="space-y-24">
            {/* Phase 1 */}
            <section id="phase-1" className="relative scroll-mt-24">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white"></div>
              <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-slate-50 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Building2 className="w-8 h-8 text-blue-700" />
                      </div>
                      <div className="text-sm font-medium text-blue-600 mb-2">Phase 1</div>
                      <div className="text-2xl font-bold text-gray-800">Foundation & Early Adopters</div>
                      <div className="text-sm text-gray-500 mt-2">0-6 Months</div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="prose prose-blue max-w-none">
                      <p className="text-gray-600 mb-6">
                        Establishing core platform functionality and onboarding initial lighthouse clients to gather critical feedback for refinement.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <Users className="w-5 h-5 text-blue-600" />
                            Target Audience
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              Select Public Sector Agencies
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              Mid-Sized Private Enterprises
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              Procurement Consultants
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-blue-600" />
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              Core Procurement Workflow
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              OCDS-Native Data Structure
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              Supplier Management
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Phase 2 */}
            <section id="phase-2" className="relative scroll-mt-24">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white"></div>
              <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
                <div className="md:flex md:flex-row-reverse">
                  <div className="md:w-1/3 bg-slate-50 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BarChart3 className="w-8 h-8 text-green-700" />
                      </div>
                      <div className="text-sm font-medium text-green-600 mb-2">Phase 2</div>
                      <div className="text-2xl font-bold text-gray-800">Expansion & Enrichment</div>
                      <div className="text-sm text-gray-500 mt-2">6-18 Months</div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="prose prose-green max-w-none">
                      <p className="text-gray-600 mb-6">
                        Expanding feature set based on Phase 1 feedback, broadening market reach, and building a vibrant user community.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <Users className="w-5 h-5 text-green-600" />
                            Target Audience
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              Broader Public Sector
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              Larger Private Companies
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              Technology Partners
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-green-600" />
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              Advanced Analytics
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              System Integrations
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              Community Platform
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Phase 3 */}
            <section id="phase-3" className="relative scroll-mt-24">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white"></div>
              <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-slate-50 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8 text-purple-700" />
                      </div>
                      <div className="text-sm font-medium text-purple-600 mb-2">Phase 3</div>
                      <div className="text-2xl font-bold text-gray-800">Market Leadership</div>
                      <div className="text-sm text-gray-500 mt-2">18+ Months</div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="prose prose-purple max-w-none">
                      <p className="text-gray-600 mb-6">
                        Establishing MyGets as a market leader, driving widespread adoption, and fostering a rich ecosystem of partners and applications.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <Users className="w-5 h-5 text-purple-600" />
                            Target Audience
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              Global Markets
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              International Organizations
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              Research Institutions
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-purple-600" />
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              Advanced AI/ML
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              Blockchain Integration
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              Global Marketplace
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="relative w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 mt-16">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-700/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            Join Our Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of the Future of Procurement
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-blue-100">
            Whether you're an early adopter, potential partner, or interested in our vision, we invite you to connect with us and shape the future of procurement together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105"
            >
              Get Early Access
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/about-us" 
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-lg transition-all"
            >
              Learn More About MyGets
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}