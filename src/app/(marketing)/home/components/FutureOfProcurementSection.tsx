"use client";

import React from 'react';
import { X, Check, TrendingUp, Clock, DollarSign, ArrowRight, Zap } from 'lucide-react';

const FutureOfProcurementSection: React.FC = () => {
  const oldWayItems = [
    "Manual data entry and endless spreadsheets",
    "Discovering problems after they've cost money",
    "Scrambling to prepare for audits",
    "Making decisions based on incomplete information",
    "Locked into expensive vendor systems"
  ];

  const newWayItems = [
    "Automatic data processing and real-time insights",
    "Catching problems before they happen",
    "Always audit-ready with complete compliance",
    "Clear dashboards showing exactly what matters",
    "Your data, your choice - no vendor lock-in"
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: "85%",
      label: "Less time on manual tasks",
      description: "Automate routine processes"
    },
    {
      icon: DollarSign,
      value: "$2M+",
      label: "Average annual savings",
      description: "Measurable cost reductions"
    },
    {
      icon: Clock,
      value: "3 weeks",
      label: "From setup to full operation",
      description: "Rapid implementation"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6">
            <span className="mr-2">⚡</span>
            Transformation
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Future of Procurement is Here
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            While others struggle with spreadsheets and manual processes, 
            forward-thinking organizations are already transforming their procurement with MyGETS.
          </p>
        </div>

        {/* Future vs Present Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Old Way */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mr-4">
                <X className="h-6 w-6 text-red-300" />
              </div>
              <h3 className="text-2xl font-bold text-red-200">The Old Way</h3>
            </div>
            <ul className="space-y-4">
              {oldWayItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <span className="text-blue-100 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* New Way */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:bg-white/25 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                <Zap className="h-6 w-6 text-green-300" />
              </div>
              <h3 className="text-2xl font-bold text-green-200">The MyGETS Way</h3>
            </div>
            <ul className="space-y-4">
              {newWayItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-white leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <p className="text-blue-200 font-semibold mb-1">{stat.label}</p>
              <p className="text-blue-300 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <h3 className="text-3xl font-bold mb-6">
            Don't Get Left Behind
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the organizations already transforming their procurement. 
            See why early adopters are saving millions and sleeping better at night.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/demo"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              See MyGETS in Action
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/early-adopter"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200"
            >
              Join Early Adopter Program
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureOfProcurementSection;