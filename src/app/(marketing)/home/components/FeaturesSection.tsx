"use client";

import React from 'react';
import { Shield, BarChart3, Zap, CheckCircle2, Database, Globe, ArrowRight } from 'lucide-react';

// Feature card component
interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  benefits: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, gradient, benefits }) => (
  <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
    <div className="flex flex-col h-full">
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="h-8 w-8" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      {/* Benefits */}
      <div className="space-y-2 mb-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start text-sm text-gray-600">
            <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>

      {/* Learn More Link */}
      <a
        href="#"
        className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors duration-200 group/link"
      >
        Learn more
        <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
      </a>

      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  </div>
);

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: "Intelligent Data Processing",
      description: "Transform complex procurement data into standardized, actionable intelligence with AI-powered analysis and automated categorization.",
      gradient: "from-blue-500 to-blue-600",
      benefits: [
        "OCDS-compliant data standardization",
        "Real-time data validation",
        "Automated quality assurance"
      ]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics Engine",
      description: "Make data-driven decisions with comprehensive analytics, predictive insights, and customizable reporting dashboards.",
      gradient: "from-purple-500 to-purple-600",
      benefits: [
        "Predictive cost modeling",
        "Performance benchmarking",
        "Custom KPI tracking"
      ]
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Connect effortlessly with your existing ERP, procurement, and financial systems through our robust API infrastructure.",
      gradient: "from-green-500 to-green-600",
      benefits: [
        "Enterprise system compatibility",
        "RESTful API access",
        "Real-time synchronization"
      ]
    },
    {
      icon: Shield,
      title: "Automated Compliance",
      description: "Ensure regulatory adherence with built-in compliance monitoring, audit trails, and automated reporting capabilities.",
      gradient: "from-red-500 to-red-600",
      benefits: [
        "Regulatory compliance tracking",
        "Automated audit preparation",
        "Risk assessment protocols"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <span className="mr-2">⚡</span>
            Platform Features
          </div>
          <h2 id="features-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Enterprise-Grade Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            MyGETS combines cutting-edge technology with proven procurement expertise to deliver 
            a comprehensive platform that scales with your organization's needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>

        {/* Additional Value Props */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Built for Global Scale
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Our platform processes billions of procurement transactions across 50+ countries, 
              ensuring reliability and performance at enterprise scale.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-300">Countries Supported</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400 mb-2">$10B+</div>
                <div className="text-gray-300">Procurement Value Processed</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/platform-overview"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/technical-specs"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                Technical Specifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;