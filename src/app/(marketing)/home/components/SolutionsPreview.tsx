"use client";

import React from 'react';
import { Shield, BarChart3, AlertTriangle, CheckCircle2, ArrowRight, Zap } from 'lucide-react';

interface Solution {
  name: string;
  description: string;
  icon: React.ElementType;
  link: string;
  gradient: string;
  benefits: string[];
  metrics: {
    value: string;
    label: string;
  };
}

const solutions: Solution[] = [
  {
    name: 'AI-Powered Risk Detection',
    description: 'Advanced machine learning algorithms identify procurement anomalies, bid rigging, and compliance violations in real-time across your entire procurement ecosystem.',
    link: '/solutions/risk-detection',
    icon: Shield,
    gradient: 'from-red-500 to-red-600',
    benefits: [
      '73+ detection algorithms',
      'Real-time monitoring',
      'Predictive risk scoring'
    ],
    metrics: {
      value: '95%',
      label: 'Risk Detection Accuracy'
    }
  },
  {
    name: 'Advanced Analytics Engine',
    description: 'Transform procurement data into actionable insights with comprehensive dashboards, predictive analytics, and customizable reporting capabilities.',
    link: '/solutions/analytics',
    icon: BarChart3,
    gradient: 'from-blue-500 to-blue-600',
    benefits: [
      'Real-time dashboards',
      'Predictive modeling',
      'Custom KPI tracking'
    ],
    metrics: {
      value: '40%',
      label: 'Faster Decision Making'
    }
  },
  {
    name: 'Intelligent Risk Management',
    description: 'Proactive risk identification and mitigation through network analysis, supplier monitoring, and automated compliance tracking.',
    link: '/solutions/risk-management',
    icon: AlertTriangle,
    gradient: 'from-orange-500 to-orange-600',
    benefits: [
      'Network analysis',
      'Supplier risk scoring',
      'Automated alerts'
    ],
    metrics: {
      value: '60%',
      label: 'Risk Reduction'
    }
  },
  {
    name: 'Automated Compliance',
    description: 'Ensure regulatory adherence with built-in compliance monitoring, audit trail generation, and automated reporting across multiple jurisdictions.',
    link: '/solutions/compliance',
    icon: CheckCircle2,
    gradient: 'from-green-500 to-green-600',
    benefits: [
      'Multi-jurisdiction support',
      'Automated audit trails',
      'Compliance scoring'
    ],
    metrics: {
      value: '99.9%',
      label: 'Compliance Rate'
    }
  },
];

const SolutionCard: React.FC<{ solution: Solution; index: number }> = ({ solution, index }) => {
  const { name, description, icon: Icon, link, gradient, benefits, metrics } = solution;

  return (
    <div 
      className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="h-8 w-8" />
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">{metrics.value}</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">{metrics.label}</div>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
          {name}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Benefits */}
        <div className="space-y-2 mb-6">
          {benefits.map((benefit, benefitIndex) => (
            <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
              <Zap className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* Learn More Link */}
        <a
          href={link}
          className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors duration-200 group/link"
        >
          Explore Solution
          <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
        </a>

        {/* Hover Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  );
};

const SolutionsPreview: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" aria-labelledby="solutions-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <span className="mr-2">🚀</span>
            Core Solutions
          </div>
          <h2 id="solutions-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive Procurement Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From risk detection to compliance automation, MyGETS provides end-to-end solutions 
            that transform how organizations manage procurement processes and data.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.name} solution={solution} index={index} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Ready to See These Solutions in Action?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Discover how our integrated platform can transform your procurement operations 
              with measurable results and enterprise-grade reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/solutions"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                View All Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsPreview;