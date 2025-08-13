"use client";

import React from 'react';
import { ArrowRight, CheckCircle2, Database, Globe, Shield, Zap, BookOpen, Users } from 'lucide-react';

const OCDSDefinitionSection: React.FC = () => {
  const advantages = [
    {
      icon: Database,
      title: "Standardized Data Formats",
      description: "Consistent structure across all procurement stages"
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Connect with existing systems effortlessly"
    },
    {
      icon: Shield,
      title: "Enhanced Transparency",
      description: "Build trust through open accountability"
    },
    {
      icon: Globe,
      title: "Global Compatibility",
      description: "International standard recognition"
    }
  ];

  const benefits = [
    "Complete procurement lifecycle coverage",
    "Machine-readable structured data",
    "International best practices compliance",
    "Advanced analytics and AI capabilities",
    "Audit-ready documentation",
    "Cross-platform interoperability"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="ocds-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <span className="mr-2">📊</span>
            Open Standards
          </div>
          <h2 id="ocds-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Built on the Open Contracting Data Standard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            OCDS transforms procurement data into a powerful asset, enabling transparency, 
            efficiency, and innovation across your entire organization.
          </p>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* What is OCDS */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">What is OCDS?</h3>
                <p className="text-blue-600 font-medium">The Global Standard for Procurement Data</p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              The Open Contracting Data Standard (OCDS) is an internationally recognized framework 
              that transforms complex procurement information into standardized, machine-readable data. 
              It covers the entire contracting process from planning to implementation, enabling 
              unprecedented transparency and analytical capabilities.
            </p>

            <div className="space-y-3 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="/resources/ocds-guide" 
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
            >
              Learn More About OCDS
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          {/* The OCDS Advantage */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">The OCDS Advantage</h3>
                <p className="text-green-600 font-medium">Why Leading Organizations Choose OCDS</p>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              OCDS transforms how organizations manage procurement data by creating a unified, 
              standardized approach that enables powerful analytics, seamless integration, 
              and enhanced decision-making capabilities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div 
                  key={index} 
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 hover:bg-white/80 transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <advantage.icon className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">{advantage.title}</h4>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Experience the Power of Standardized Data
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              See how MyGETS leverages OCDS to transform your procurement data into 
              actionable intelligence and measurable business value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                See OCDS in Action
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/resources/ocds-guide"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                Download OCDS Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OCDSDefinitionSection;