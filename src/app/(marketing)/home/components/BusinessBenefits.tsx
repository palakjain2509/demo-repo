import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { DollarSign, Shield, Zap, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';

const BusinessBenefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Identify savings opportunities and optimize spending across all procurement categories',
      metric: '15-30%',
      metricLabel: 'Average cost savings',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Proactive detection of compliance issues, fraud patterns, and supplier risks',
      metric: '95%',
      metricLabel: 'Risk reduction',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: Zap,
      title: 'Process Efficiency',
      description: 'Streamline workflows and eliminate manual tasks with intelligent automation',
      metric: '60%',
      metricLabel: 'Faster processing',
      gradient: 'from-blue-500 to-blue-600'
    }
  ];

  const outcomes = [
    {
      icon: TrendingUp,
      title: 'Improved Performance',
      items: ['Better supplier relationships', 'Enhanced contract terms', 'Optimized procurement cycles']
    },
    {
      icon: Clock,
      title: 'Time Savings',
      items: ['Automated reporting', 'Real-time monitoring', 'Instant compliance checks']
    },
    {
      icon: CheckCircle2,
      title: 'Quality Assurance',
      items: ['Data accuracy guarantee', 'Audit-ready documentation', 'Regulatory compliance']
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24" aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
            <span className="mr-2">📈</span>
            Measurable Impact
          </div>
          <h2 id="benefits-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Quantifiable Business Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            MyGETS delivers measurable outcomes that directly impact your bottom line, 
            operational efficiency, and organizational risk profile.
          </p>
        </header>

        {/* Key Metrics */}
        <section className="mb-20" aria-labelledby="key-metrics-heading">
          <h3 id="key-metrics-heading" className="sr-only">Key Performance Metrics</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <article 
                key={benefit.title}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="h-8 w-8" />
                </div>

                {/* Metric */}
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{benefit.metric}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">{benefit.metricLabel}</div>
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </article>
            ))}
          </div>
        </section>

        {/* Additional Outcomes */}
        <section className="mb-16" aria-labelledby="outcomes-heading">
          <div className="text-center mb-12">
            <h3 id="outcomes-heading" className="text-3xl font-bold text-gray-900 mb-4">
              Beyond the Numbers
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform delivers comprehensive improvements across your entire procurement ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <div 
                key={outcome.title}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-200 transition-colors duration-200"
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <outcome.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{outcome.title}</h4>
                </div>
                <ul className="space-y-2">
                  {outcome.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Achieve These Results?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join leading organizations that have transformed their procurement operations with MyGETS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-50 transition-colors border-0 shadow-lg" 
              asChild
            >
              <Link href="/case-studies">
                View Case Studies
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white/10 transition-colors" 
              asChild
            >
              <Link href="/request-demo">
                Schedule Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefits;