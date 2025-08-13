import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Award, Zap, Shield, Users, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

const WhyMyGETS = () => {
  const metrics = [
    {
      value: '40%',
      label: 'Faster Processing',
      description: 'Reduce procurement cycle times',
      icon: Clock,
      color: 'text-blue-600'
    },
    {
      value: '20% +',
      label: 'Average Savings',
      description: 'Annual cost reduction per client',
      icon: Award,
      color: 'text-green-600'
    },
    {
      value: '100%',
      label: 'Audit Ready',
      description: 'Compliance guarantee',
      icon: Shield,
      color: 'text-purple-600'
    },
    {
      value: '24/7',
      label: 'Monitoring',
      description: 'Continuous risk detection',
      icon: Zap,
      color: 'text-orange-600'
    }
  ];

  const advantages = [
    {
      icon: Users,
      title: 'Enterprise Integration',
      description: 'Seamlessly connects with your existing ERP, procurement, and financial systems',
      features: ['SAP integration', 'Oracle compatibility', 'Custom API support']
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Get up and running quickly with our proven implementation methodology',
      features: ['2-week setup', 'Automated data migration', 'Zero downtime deployment']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with comprehensive compliance and data protection',
      features: ['SOC 2 certified', 'GDPR compliant', 'End-to-end encryption']
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6">
            <span className="mr-2">⭐</span>
            Why MyGETS
          </div>
          <h2 id="why-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The Enterprise Choice for Procurement Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built on proven international standards, MyGETS delivers enterprise-grade performance 
            with the agility and ease-of-use that modern organizations demand.
          </p>
        </header>

        {/* Key Metrics */}
        <section className="mb-20" aria-labelledby="metrics-heading">
          <h3 id="metrics-heading" className="sr-only">Performance Metrics</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div 
                key={metric.label}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-gray-200">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className={`h-6 w-6 ${metric.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">{metric.label}</div>
                  <div className="text-xs text-gray-500">{metric.description}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Advantages */}
        <section className="mb-20" aria-labelledby="advantages-heading">
          <div className="text-center mb-12">
            <h3 id="advantages-heading" className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Advantages
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Designed for large organizations with complex procurement needs and stringent security requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={advantage.title}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="h-7 w-7 text-blue-600" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                  {advantage.title}
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {advantage.description}
                </p>
                
                <ul className="space-y-2">
                  {advantage.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="mb-16" aria-labelledby="trust-heading">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white text-center">
            <h3 id="trust-heading" className="text-2xl font-bold mb-6">
              Trusted by Leading Organizations Worldwide
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$10B+</div>
                <div className="text-gray-300 text-sm">Procurement Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From government agencies to Fortune 500 companies, organizations trust MyGETS 
              to manage their most critical procurement operations.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Procurement?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the leading organizations that have already revolutionized their procurement operations with MyGETS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transition-colors border-0 shadow-lg group" 
              asChild
            >
              <Link href="/request-demo" className="inline-flex items-center">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/10 transition-colors" 
              asChild
            >
              <Link href="/early-adopter-program">
                Join Early Access
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMyGETS;