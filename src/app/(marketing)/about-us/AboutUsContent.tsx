'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Users, 
  Lightbulb, 
  BarChart,
  Target,
  Globe,
  TrendingUp,
  Award
} from 'lucide-react';

const AboutUsContent: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              About MyGETS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Transforming Procurement Through 
              <span className="text-blue-300"> Open Standards</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed">
              MyGETS is revolutionizing government procurement by making it transparent, collaborative, and data-driven. Built on the Open Contracting Data Standard (OCDS), we're creating a future where procurement serves everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="#our-story"
                className="inline-flex items-center justify-center bg-white text-blue-900 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
              >
                Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="#mission-vision"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                Mission & Vision
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { href: "#our-story", label: "Our Story" },
              { href: "#mission-vision", label: "Mission & Vision" },
              { href: "#core-values", label: "Core Values" },
              { href: "#red-flags", label: "Red Flag Alerts" }
            ].map((item, index) => (
              <Link 
                key={index}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Our Story Section */}
          <section id="our-story" className="mb-24 scroll-mt-24">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Born from a vision to make government procurement transparent and accessible, MyGETS represents the next evolution in public sector efficiency and accountability.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-700">The Challenge</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Government procurement has long been plagued by opacity, inefficiency, and limited public engagement. Traditional systems operate in silos, making it difficult for agencies to collaborate, businesses to compete fairly, and citizens to understand how their tax dollars are spent.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-700">The Solution</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    MyGETS leverages the Open Contracting Data Standard (OCDS) to create a unified, transparent platform that connects all stakeholders in the procurement ecosystem. By standardizing data and opening processes, we're building trust and driving better outcomes for everyone.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <Globe className="h-8 w-8 text-blue-600" />
                    <h4 className="text-xl font-semibold text-gray-900">Global Standards, Local Impact</h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Built on internationally recognized open standards, MyGETS ensures compatibility and interoperability while addressing the unique needs of Australian and New Zealand procurement.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "OCDS-compliant data structure",
                      "Cross-agency collaboration tools",
                      "Real-time transparency reporting",
                      "Automated compliance monitoring"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                    <h4 className="text-xl font-semibold text-gray-900">Measurable Impact</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: "40%", label: "Faster Processing" },
                      { value: "60%", label: "Cost Reduction" },
                      { value: "95%", label: "Transparency Score" },
                      { value: "100%", label: "OCDS Compliance" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section id="mission-vision" className="mb-24 scroll-mt-24">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                Our Purpose
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Mission & Vision
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-green-700 mb-6">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  To revolutionize government procurement by creating a transparent, collaborative, and data-driven ecosystem that serves agencies, businesses, and citizens alike. Through the power of open standards and innovative technology, we're building a future where procurement is efficient, accountable, and accessible to all.
                </p>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-green-700">Key Objectives:</h4>
                  <ul className="space-y-3">
                    {[
                      "Enhances Transparency: Open data standards for full visibility into procurement processes.",
                      "Streamlines Collaboration: Unified platform connecting agencies, suppliers, and stakeholders.",
                      "Drives Efficiency: Automated workflows and intelligent matching reduce time and costs.",
                      "Ensures Accountability: Red-flag alerts and audit trails for full compliance."
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-700 mb-6">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  We envision a world where procurement is a collaborative, data-driven service that fosters innovation and public trust. Starting with Australia and New Zealand, MyGETS aims to become the global standard for open, efficient, and accountable procurement—bridging the gap between government action and citizen engagement.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Lightbulb className="h-8 w-8 text-blue-600" />
                  <p className="text-sm text-gray-600 italic">
                    "Building a future where procurement serves everyone"
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values Section */}
          <section id="core-values" className="mb-24 scroll-mt-24">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                What Drives Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our Core Values
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "Transparency",
                  description: "We shine a light on every step of the procurement journey.",
                  icon: Shield
                },
                {
                  title: "Collaboration",
                  description: "We build bridges between agencies, businesses, and the public.",
                  icon: Users
                },
                {
                  title: "Innovation",
                  description: "We harness open standards and smart technology to solve real-world challenges.",
                  icon: Lightbulb
                },
                {
                  title: "Integrity",
                  description: "We hold data to the highest standards of accuracy and security.",
                  icon: CheckCircle
                },
                {
                  title: "Simplicity",
                  description: "We turn complex datasets into clear, actionable insights.",
                  icon: BarChart
                }
              ].map((value, index) => (
                <div key={index} className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-8">
                    <div className="text-blue-700 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-12 w-12" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Red Flag Alerts Section */}
          <section id="red-flags" className="mb-24 scroll-mt-24">
            <div className="w-full py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-transparent"></div>
              
              <div className="relative max-w-4xl mx-auto px-4 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                  <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                    Risk Management
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    Red Flag Alerts: Proactive Risk Management
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    MyGETS' Red Flag Alerts leverage the Open Contracting Data Standard (OCDS) and advanced analytics to spot risks before they become problems—boosting transparency, data quality, and informed decision-making across your procurement lifecycle.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                  {[
                    {
                      title: "Proactive Risk Monitoring",
                      description: "Built-in OCDS red-flag indicators detect early warning signs—such as supplier performance issues, compliance deviations, or integrity risks—so you can investigate and resolve concerns before they escalate.",
                      icon: Shield,
                      color: "from-blue-500 to-blue-600"
                    },
                    {
                      title: "Enhanced Transparency & Accountability",
                      description: "Whenever the platform uncovers suspicious transactions or data inconsistencies, it raises a clear alert. This continuous monitoring empowers your team to uphold robust governance, minimize corruption risk, and demonstrate accountability to stakeholders.",
                      icon: CheckCircle,
                      color: "from-green-500 to-green-600"
                    },
                    {
                      title: "Improved Data Quality & Compliance",
                      description: "Our OCDS-native data validation tools automatically flag incomplete or malformed records. By correcting errors in real time, you ensure every contract and tender meets your compliance standards and audit requirements.",
                      icon: BarChart,
                      color: "from-purple-500 to-purple-600"
                    },
                    {
                      title: "Data-Driven Decision-Making",
                      description: "Integrated dashboards and visualizations turn red-flag events into actionable insights. Track trends, benchmark performance, and pinpoint areas for process improvement—so you can steer procurement strategy with confidence.",
                      icon: Lightbulb,
                      color: "from-orange-500 to-orange-600"
                    }
                  ].map((feature, index) => (
                    <div 
                      key={index} 
                      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                      
                      <div className="relative p-8 md:p-10">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                          <feature.icon className="h-8 w-8" />
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                        
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                  <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-6 shadow-sm">
                    <p className="text-gray-700 font-medium">
                      Ready to enhance your procurement risk management?
                    </p>
                    <Link 
                      href="/platform/features"
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
                    >
                      Explore Features
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Transforming Procurement
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-blue-100">
            Whether you're a government agency looking to enhance transparency, a business seeking better procurement insights, or a citizen wanting to engage with public spending, MyGETS is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-900 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/phased-launch"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              View Our Roadmap
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsContent;