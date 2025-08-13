import React from 'react';
import { Shield, BarChart3, DollarSign, CheckCircle2 } from 'lucide-react';

interface Solution {
  name: string;
  description: string;
  icon: React.ElementType;
  link: string;
  gradient: string;
}

const solutions: Solution[] = [
  {
    name: 'Risk Detection',
    description: 'Advanced AI algorithms identify anomalies, suspicious patterns, and compliance risks before they impact your organization.',
    link: '#',
    icon: Shield,
    gradient: 'from-red-500 to-red-600'
  },
  {
    name: 'Data Analytics',
    description: 'Transform complex procurement data into actionable insights with real-time dashboards and predictive analytics.',
    link: '#',
    icon: BarChart3,
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Cost Optimization',
    description: 'Identify savings opportunities, optimize supplier relationships, and reduce procurement costs by up to 30%.',
    link: '#',
    icon: DollarSign,
    gradient: 'from-green-500 to-green-600'
  },
  {
    name: 'Compliance Assurance',
    description: 'Automated compliance monitoring ensures adherence to regulations and organizational policies at all times.',
    link: '#',
    icon: CheckCircle2,
    gradient: 'from-purple-500 to-purple-600'
  },
];

const SolutionsOverview: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <span className="mr-2">🚀</span>
            Core Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive Procurement Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            MyGETS delivers enterprise-grade solutions that transform how your organization manages procurement, 
            from risk detection to cost optimization.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={solution.name} 
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <solution.icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                {solution.name}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                {solution.description}
              </p>

              {/* Learn More Link */}
              <a
                href={solution.link}
                className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors duration-200 group/link"
              >
                Learn more
                <svg 
                  className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Ready to see these solutions in action?
          </p>
          <a
            href="/request-demo"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Schedule a Demo
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;