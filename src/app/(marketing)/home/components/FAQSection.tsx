"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, ArrowRight, HelpCircle, Users } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'implementation' | 'benefits' | 'technical' | 'support';
}

const faqData: FAQItem[] = [
  {
    id: 'what-is-mygets',
    category: 'benefits',
    question: 'What exactly is MyGETS and how will it help my organization?',
    answer: 'MyGETS is a comprehensive procurement intelligence platform that provides complete visibility across your entire procurement lifecycle. You\'ll reduce costs by 15-25%, eliminate compliance risks, and make data-driven decisions with real-time insights and automated alerts.'
  },
  {
    id: 'implementation-time',
    category: 'implementation',
    question: 'How quickly can we get up and running?',
    answer: 'Most organizations see immediate value within 2 weeks and achieve full deployment within 4-8 weeks. Our expert team handles the technical implementation while you focus on your business—no lengthy IT projects or complex training required.'
  },
  {
    id: 'cost-savings',
    category: 'benefits',
    question: 'What kind of savings can we expect?',
    answer: 'Organizations typically achieve 15-25% cost reduction through optimized supplier management, reduced compliance issues, and early risk detection. Most clients see positive ROI within the first 6 months of implementation.'
  },
  {
    id: 'integration',
    category: 'technical',
    question: 'Will MyGETS work with our existing systems?',
    answer: 'Absolutely. MyGETS integrates seamlessly with your current ERP, accounting, and procurement systems using open standards and APIs. You won\'t need to replace existing infrastructure—we enhance what you already have.'
  },
  {
    id: 'support-training',
    category: 'support',
    question: 'What support and training do you provide?',
    answer: 'We provide comprehensive onboarding, team training, and ongoing support. Our platform is designed for intuitive use, ensuring most users are productive from day one. You\'ll have dedicated support throughout your entire journey.'
  },
  {
    id: 'security-compliance',
    category: 'technical',
    question: 'How do you ensure our data is secure and compliant?',
    answer: 'Security and compliance are foundational to our platform. We employ enterprise-grade security, conduct regular audits, and follow international standards including SOC 2 and ISO 27001. Your data remains secure while automatically meeting compliance requirements.'
  },
  {
    id: 'pricing',
    category: 'implementation',
    question: 'How does pricing work?',
    answer: 'We offer flexible, scalable pricing based on your organization size and requirements. Early adopters receive special incentives, and we can customize a plan that fits your budget. Contact us for a personalized assessment and quote.'
  }
];

const categoryColors = {
  implementation: 'bg-blue-100 text-blue-700',
  benefits: 'bg-green-100 text-green-700',
  technical: 'bg-purple-100 text-purple-700',
  support: 'bg-orange-100 text-orange-700'
};

const categoryLabels = {
  implementation: 'Implementation',
  benefits: 'Benefits',
  technical: 'Technical',
  support: 'Support'
};

const FAQSection: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const filteredFAQs = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  // FAQ structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="faq-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <HelpCircle className="mr-2 h-4 w-4" />
            Frequently Asked Questions
          </div>
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Everything You Need to Know
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about MyGETS and discover how we can 
            transform your procurement operations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-gray-900 text-white shadow-lg'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            All Questions
          </button>
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === key
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {filteredFAQs.map((item) => (
            <article 
              key={item.id} 
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-2xl"
                aria-expanded={expandedItems.has(item.id)}
                aria-controls={`faq-answer-${item.id}`}
                aria-labelledby={`faq-question-${item.id}`}
              >
                <div className="flex-1 pr-4">
                  <div className="flex items-center mb-2">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${categoryColors[item.category]} mr-3`}>
                      {categoryLabels[item.category]}
                    </span>
                  </div>
                  <h3 
                    id={`faq-question-${item.id}`}
                    className="text-lg font-semibold text-gray-900"
                  >
                    {item.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {expandedItems.has(item.id) ? (
                    <ChevronUp className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  )}
                </div>
              </button>
              
              {expandedItems.has(item.id) && (
                <div 
                  id={`faq-answer-${item.id}`}
                  className="px-8 pb-6"
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                >
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
                <p className="text-gray-300">Our experts are here to help</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is ready to provide personalized answers and show you exactly 
              how MyGETS can transform your procurement operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-demo"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Users className="mr-2 h-5 w-5" />
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
      />
    </section>
  );
};

export default FAQSection;