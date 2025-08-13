"use client";

import React from 'react';
import { CheckCircle, X, Shield, BarChart, ShieldAlert, TrendingUp, Globe, Target, Award, ArrowRight } from 'lucide-react';

const GlobalDataBarometerSection: React.FC = () => {
  const marketStats = [
    {
      value: "$13T",
      label: "Global Procurement Market",
      description: "Annual worldwide procurement spending represents the largest marketplace opportunity",
      icon: Globe,
      color: "from-blue-600 to-blue-700"
    },
    {
      value: "68%",
      label: "Leading Organizations",
      description: "Progressive organizations already leveraging modern data standards for competitive advantage",
      icon: Award,
      color: "from-green-600 to-green-700"
    },
    {
      value: "83%",
      label: "Data Visibility Gap",
      description: "Organizations lacking complete visibility into post-contract execution and performance",
      icon: Target,
      color: "from-orange-600 to-orange-700"
    }
  ];

  const bestPractices = [
    "Publishing procurement data online for complete transparency",
    "Implementing machine-readable formats for advanced analytics",
    "Providing seamless API access and data downloads",
    "Tracking the complete procurement lifecycle end-to-end",
    "Enabling real-time performance monitoring and alerts",
    "Integrating with existing enterprise systems"
  ];

  const commonGaps = [
    "Limited visibility into post-contract execution",
    "Disconnected data across procurement stages",
    "Manual processes prone to errors and delays",
    "Inability to track actual spending vs. budgets",
    "No real-time supplier performance monitoring",
    "Fragmented systems that don't communicate"
  ];

  const myGETSFeatures = [
    {
      icon: Shield,
      title: "Complete Visibility",
      description: "End-to-end transparency from planning to payment execution"
    },
    {
      icon: BarChart,
      title: "Connected Intelligence",
      description: "Unified data platform integrating all procurement systems"
    },
    {
      icon: ShieldAlert,
      title: "Proactive Alerts",
      description: "AI-powered early warning system for risk prevention"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Real-time insights and predictive performance metrics"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" aria-labelledby="market-heading">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <Globe className="mr-2 h-4 w-4" />
            Global Market Intelligence
          </div>
          <h2 id="market-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The $13 Trillion Opportunity
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Global research reveals massive inefficiencies in procurement data management. 
            These gaps represent both significant risks and unprecedented opportunities for organizations 
            ready to embrace modern data standards.
          </p>
        </div>

        {/* Market Statistics */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {marketStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className={`bg-gradient-to-br ${stat.color} p-8 rounded-2xl text-white relative overflow-hidden`}>
                <div className="absolute top-4 right-4 opacity-20">
                  <IconComponent className="h-16 w-16" />
                </div>
                <div className="relative">
                  <div className="text-5xl font-bold mb-3">{stat.value}</div>
                  <div className="text-xl font-semibold mb-3">{stat.label}</div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Best Practices vs Common Gaps */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* What Leading Organizations Do */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Leading Organizations</h3>
                <p className="text-green-600 font-medium">Best Practices in Action</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {bestPractices.map((practice, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{practice}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Common Gaps */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                <X className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Common Challenges</h3>
                <p className="text-red-600 font-medium">Where Most Organizations Struggle</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {commonGaps.map((gap, index) => (
                <div key={index} className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{gap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MyGETS Solution */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 border border-blue-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              MyGETS: Bridging the Global Data Gap
            </h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              While others struggle with fragmented data and limited visibility, MyGETS provides 
              a comprehensive solution that transforms procurement operations through intelligent 
              data management and real-time insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {myGETSFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 hover:bg-white/80 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Impact Metrics */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-white/50">
            <h4 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Measurable Impact on Global Standards
            </h4>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">25%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Cost Reduction</div>
                <div className="text-sm text-gray-600">Average procurement cost savings</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Compliance Rate</div>
                <div className="text-sm text-gray-600">Improvement in regulatory compliance</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Time Savings</div>
                <div className="text-sm text-gray-600">Reduction in manual processing time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Join the Global Transformation
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't let your organization fall behind in the global procurement revolution. 
              Experience how MyGETS transforms data challenges into competitive advantages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-demo"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Globe className="mr-2 h-5 w-5" />
                See Global Impact
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/resources/global-standards"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                <BarChart className="mr-2 h-5 w-5" />
                Download Market Report
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalDataBarometerSection;