"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

const faqData: FAQItem[] = [
  // Platform & Technology
  {
    id: 'what-is-mygets',
    question: 'What is MyGETS?',
    answer: 'MyGETS is an OCDS-native procurement intelligence platform that streamlines the entire procurement lifecycle with built-in compliance, transparency, and analytics. It transforms procurement data into actionable intelligence through automated risk detection and real-time analytics.',
    category: 'Platform & Technology',
    tags: ['platform', 'ocds', 'procurement', 'intelligence']
  },
  {
    id: 'what-is-ocds',
    question: 'What is OCDS?',
    answer: 'The Open Contracting Data Standard (OCDS) is an internationally recognized framework for publishing structured procurement data that enhances transparency and enables better analysis. It provides a standardized way to publish and use procurement data.',
    category: 'Platform & Technology',
    tags: ['ocds', 'standard', 'transparency', 'data']
  },
  {
    id: 'how-different-from-traditional',
    question: 'How does MyGETS differ from traditional procurement systems?',
    answer: 'MyGETS combines procurement lifecycle management with advanced risk intelligence, automatically structures data in OCDS format, and provides real-time risk assessment with predictive analytics. Unlike traditional systems, it offers real-time processing, AI-powered insights, and enterprise-grade security.',
    category: 'Platform & Technology',
    tags: ['comparison', 'traditional', 'ai', 'real-time']
  },
  
  // Features & Capabilities
  {
    id: 'risk-detection',
    question: 'How does real-time risk detection work?',
    answer: 'MyGETS uses 73+ risk indicators and machine learning algorithms to automatically identify procurement risks. The system analyzes patterns in real-time, flagging potential issues like cost overruns, compliance violations, and supplier risks.',
    category: 'Features & Capabilities',
    tags: ['risk', 'detection', 'ml', 'analytics']
  },
  {
    id: 'predictive-analytics',
    question: 'What kind of predictive analytics does MyGETS provide?',
    answer: 'MyGETS offers predictive analytics for win rates, cost overruns, and compliance risks. The AI models are trained on live procurement data to forecast outcomes and identify potential issues before they occur.',
    category: 'Features & Capabilities',
    tags: ['predictive', 'analytics', 'ai', 'forecasting']
  },
  {
    id: 'compliance-features',
    question: 'What compliance features are included?',
    answer: 'MyGETS ensures 100% audit readiness with automated reporting and built-in OCDS compliance. The platform automatically structures data according to international standards and provides comprehensive audit trails.',
    category: 'Features & Capabilities',
    tags: ['compliance', 'audit', 'reporting', 'standards']
  },
  
  // Implementation & Integration
  {
    id: 'implementation-time',
    question: 'How long does implementation take?',
    answer: 'Implementation time varies based on your current systems and data complexity. Most organizations can be up and running within 4-8 weeks, with basic functionality available in the first 2 weeks.',
    category: 'Implementation & Integration',
    tags: ['implementation', 'timeline', 'setup']
  },
  {
    id: 'system-integration',
    question: 'Can MyGETS integrate with existing systems?',
    answer: 'Yes, MyGETS is designed for seamless integration with existing procurement systems. The OCDS-native architecture ensures compatibility with most enterprise systems and data formats.',
    category: 'Implementation & Integration',
    tags: ['integration', 'systems', 'compatibility']
  },
  {
    id: 'data-migration',
    question: 'What about data migration from existing systems?',
    answer: 'MyGETS provides comprehensive data migration support. Our team works with you to map existing data structures to OCDS format and ensures a smooth transition with minimal disruption.',
    category: 'Implementation & Integration',
    tags: ['migration', 'data', 'transition']
  },
  
  // Pricing & Plans
  {
    id: 'pricing-structure',
    question: 'What is the pricing structure?',
    answer: 'MyGETS offers flexible pricing based on your organization size and requirements. We provide transparent pricing with no hidden fees, and early adopter discounts are available for organizations joining our program.',
    category: 'Pricing & Plans',
    tags: ['pricing', 'cost', 'plans']
  },
  {
    id: 'early-adopter-benefits',
    question: 'What are the benefits of the early adopter program?',
    answer: 'Early adopters receive exclusive benefits including discounted pricing, priority support, direct input on product development, and guaranteed feature access. Limited spots are available.',
    category: 'Pricing & Plans',
    tags: ['early-adopter', 'benefits', 'discount']
  },
  {
    id: 'free-trial',
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a comprehensive demo and trial period to help you evaluate MyGETS. Contact our team to schedule a personalized demonstration and discuss trial options.',
    category: 'Pricing & Plans',
    tags: ['trial', 'demo', 'evaluation']
  },
  
  // Security & Support
  {
    id: 'security-measures',
    question: 'What security measures are in place?',
    answer: 'MyGETS implements enterprise-grade security including data encryption, secure cloud infrastructure, regular security audits, and compliance with industry standards. Your data security is our top priority.',
    category: 'Security & Support',
    tags: ['security', 'encryption', 'compliance']
  },
  {
    id: 'support-options',
    question: 'What support options are available?',
    answer: 'We provide comprehensive support including 24/7 technical support, dedicated account managers, training programs, and extensive documentation. Enterprise customers receive priority support with dedicated resources.',
    category: 'Security & Support',
    tags: ['support', 'help', 'training']
  },
  {
    id: 'data-backup',
    question: 'How is data backed up and protected?',
    answer: 'MyGETS uses redundant cloud infrastructure with automatic backups, disaster recovery protocols, and geographic redundancy. Your data is protected with multiple layers of security and backup systems.',
    category: 'Security & Support',
    tags: ['backup', 'recovery', 'protection']
  }
];

const categories = Array.from(new Set(faqData.map(item => item.category)));

const FAQContent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about MyGETS, the OCDS-native procurement intelligence platform
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No FAQs found matching your search criteria.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm border">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.question}
                      </h3>
                      <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                    {expandedItems.has(item.id) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  
                  {expandedItems.has(item.id) && (
                    <div className="px-6 pb-4">
                      <div className="border-t pt-4">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.tags.map(tag => (
                            <span
                              key={tag}
                              className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Still have questions?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our team is here to help you understand how MyGETS can transform your procurement process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Sales
            </a>
            <a
              href="/request-demo"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Request Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQContent;