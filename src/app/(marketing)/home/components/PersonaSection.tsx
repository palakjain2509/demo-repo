"use client";

import React from 'react';
import { Users, Building2, Globe, TrendingUp, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PersonaCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  challenges: string[];
  solutions: string[];
  gradient: string;
  ctaText: string;
  ctaLink: string;
}

const PersonaCard: React.FC<PersonaCardProps> = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  description, 
  challenges, 
  solutions, 
  gradient, 
  ctaText, 
  ctaLink 
}) => (
  <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full">
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start mb-6">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-8 w-8" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm font-medium text-blue-600">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6">
        {description}
      </p>

      {/* Challenges */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
          Key Challenges
        </h4>
        <div className="space-y-2">
          {challenges.map((challenge, index) => (
            <div key={index} className="flex items-start text-sm text-gray-600">
              <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0" />
              <span>{challenge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Solutions */}
      <div className="mb-8 flex-grow">
        <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
          MyGETS Solutions
        </h4>
        <div className="space-y-2">
          {solutions.map((solution, index) => (
            <div key={index} className="flex items-start text-sm text-gray-600">
              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>{solution}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <a
        href={ctaLink}
        className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl group/cta"
      >
        {ctaText}
        <ArrowRight className="ml-2 h-4 w-4 group-hover/cta:translate-x-1 transition-transform duration-200" />
      </a>

      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  </div>
);

const PersonaSection: React.FC = () => {
  const personas = [
    {
      icon: Building2,
      title: "Government Agencies",
      subtitle: "Public Sector Excellence",
      description: "Transform your procurement operations with transparent, compliant, and efficient processes that build public trust and deliver value.",
      challenges: [
        "Complex regulatory compliance requirements",
        "Limited visibility into procurement processes",
        "Manual reporting and audit preparation",
        "Difficulty tracking performance metrics"
      ],
      solutions: [
        "Automated compliance monitoring and reporting",
        "Real-time transparency and audit trails",
        "Standardized OCDS data for easy analysis",
        "Performance dashboards and KPI tracking"
      ],
      gradient: "from-blue-500 to-blue-600",
      ctaText: "Explore Government Solutions",
      ctaLink: "/solutions/government"
    },
    {
      icon: Globe,
      title: "International Organizations",
      subtitle: "Global Impact at Scale",
      description: "Coordinate complex multi-country procurement programs with standardized data, enhanced oversight, and measurable impact tracking.",
      challenges: [
        "Inconsistent data across multiple countries",
        "Lack of standardized reporting formats",
        "Difficulty measuring program effectiveness",
        "Complex stakeholder coordination"
      ],
      solutions: [
        "Unified OCDS-compliant data platform",
        "Standardized cross-country reporting",
        "Impact measurement and analytics",
        "Collaborative stakeholder dashboards"
      ],
      gradient: "from-green-500 to-green-600",
      ctaText: "See Global Solutions",
      ctaLink: "/solutions/international"
    },
    {
      icon: TrendingUp,
      title: "Private Enterprises",
      subtitle: "Competitive Advantage",
      description: "Gain strategic insights into market opportunities, optimize supplier relationships, and drive cost savings through data-driven procurement intelligence.",
      challenges: [
        "Limited market intelligence and insights",
        "Inefficient supplier discovery and evaluation",
        "Lack of competitive benchmarking",
        "Manual market research processes"
      ],
      solutions: [
        "Comprehensive market intelligence platform",
        "AI-powered supplier recommendations",
        "Competitive analysis and benchmarking",
        "Automated opportunity identification"
      ],
      gradient: "from-purple-500 to-purple-600",
      ctaText: "Discover Enterprise Features",
      ctaLink: "/solutions/enterprise"
    },
    {
      icon: Users,
      title: "Development Partners",
      subtitle: "Transparency & Accountability",
      description: "Support sustainable development goals with transparent procurement monitoring, impact measurement, and evidence-based program optimization.",
      challenges: [
        "Difficulty tracking aid effectiveness",
        "Limited transparency in funded projects",
        "Inconsistent impact measurement",
        "Complex multi-stakeholder coordination"
      ],
      solutions: [
        "Real-time project monitoring and tracking",
        "Transparent procurement data access",
        "Impact analytics and reporting",
        "Stakeholder collaboration tools"
      ],
      gradient: "from-orange-500 to-orange-600",
      ctaText: "Learn About Development Tools",
      ctaLink: "/solutions/development"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="personas-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <span className="mr-2">🎯</span>
            Tailored Solutions
          </div>
          <h2 id="personas-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Built for Your Organization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            MyGETS adapts to your unique needs, whether you're a government agency, international organization, 
            private enterprise, or development partner. Discover how we can transform your procurement processes.
          </p>
        </div>

        {/* Personas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {personas.map((persona, index) => (
            <div
              key={persona.title}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <PersonaCard {...persona} />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Transform Your Procurement?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Join organizations worldwide who trust MyGETS to deliver transparency, 
              efficiency, and measurable results in their procurement operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonaSection;