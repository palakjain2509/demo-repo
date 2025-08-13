"use client";

import React from 'react';
import { ArrowRight, Shield, CheckCircle, BarChart, Lightbulb, AlertTriangle, TrendingUp, Clock, Eye } from 'lucide-react';

// Feature card component for red flag alerts
interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  stats?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, gradient, stats }) => (
  <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
    <div className="relative p-8">
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} text-white mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-4">
        {description}
      </p>
      {stats && (
        <div className="flex items-center text-sm font-semibold text-green-600">
          <TrendingUp className="h-4 w-4 mr-2" />
          {stats}
        </div>
      )}
    </div>
  </div>
);

const RedFlagAlertsSection: React.FC = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: "Proactive Risk Detection",
      description: "Advanced AI algorithms continuously monitor your procurement data to identify potential issues before they escalate. Get instant alerts for unusual pricing patterns, supplier performance issues, and compliance violations.",
      gradient: "from-red-500 to-red-600",
      stats: "85% faster issue detection"
    },
    {
      icon: Shield,
      title: "Fraud Prevention & Security",
      description: "Comprehensive fraud detection system that automatically identifies suspicious activities, data inconsistencies, and potential corruption indicators. Protect your organization's reputation and financial integrity.",
      gradient: "from-blue-500 to-blue-600",
      stats: "99.7% fraud detection accuracy"
    },
    {
      icon: CheckCircle,
      title: "Automated Compliance Monitoring",
      description: "Real-time compliance checking ensures every contract and tender meets regulatory standards. Automatically validate documentation completeness and accuracy to eliminate audit failures.",
      gradient: "from-green-500 to-green-600",
      stats: "100% audit readiness"
    },
    {
      icon: Eye,
      title: "Intelligent Analytics Dashboard",
      description: "Transform alerts into actionable insights with comprehensive dashboards. Visualize trends, compare performance metrics, and identify optimization opportunities for data-driven decision making.",
      gradient: "from-purple-500 to-purple-600",
      stats: "3x faster decision making"
    }
  ];

  const riskTypes = [
    { name: "Supplier Performance", percentage: 92, color: "bg-red-500" },
    { name: "Pricing Anomalies", percentage: 88, color: "bg-orange-500" },
    { name: "Compliance Issues", percentage: 95, color: "bg-yellow-500" },
    { name: "Contract Violations", percentage: 90, color: "bg-blue-500" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" aria-labelledby="alerts-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-semibold mb-6">
            <AlertTriangle className="mr-2 h-4 w-4" />
            Risk Prevention & Detection
          </div>
          <h2 id="alerts-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Stop Problems Before They Start
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            MyGETS provides 24/7 intelligent monitoring of your procurement operations, delivering 
            instant alerts and actionable insights to protect your organization from risks and optimize performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Risk Detection Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Risk Coverage
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI-powered system detects and prevents various types of procurement risks 
              with industry-leading accuracy rates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {riskTypes.map((risk, index) => (
              <div key={index} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-200"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - risk.percentage / 100)}`}
                      className={risk.color.replace('bg-', 'text-')}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">{risk.percentage}%</span>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{risk.name}</h4>
                <p className="text-sm text-gray-600">Detection Rate</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Proven Results from Leading Organizations
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact of proactive risk management on procurement operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-blue-400 mr-3" />
                <div className="text-4xl font-bold text-blue-400">85%</div>
              </div>
              <div className="text-lg font-semibold mb-2">Faster Issue Resolution</div>
              <div className="text-sm text-gray-300">Average time to identify and resolve procurement issues</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-green-400 mr-3" />
                <div className="text-4xl font-bold text-green-400">$2.3M</div>
              </div>
              <div className="text-lg font-semibold mb-2">Average Cost Savings</div>
              <div className="text-sm text-gray-300">Annual savings from early risk detection and prevention</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <BarChart className="h-8 w-8 text-purple-400 mr-3" />
                <div className="text-4xl font-bold text-purple-400">72%</div>
              </div>
              <div className="text-lg font-semibold mb-2">Compliance Improvement</div>
              <div className="text-sm text-gray-300">Reduction in compliance violations and audit findings</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12 border border-blue-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Experience Proactive Risk Management
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              See how MyGETS transforms reactive problem-solving into proactive risk prevention, 
              protecting your organization and optimizing procurement performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-demo"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Eye className="mr-2 h-5 w-5" />
                See Risk Detection in Action
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/resources/risk-management"
                className="inline-flex items-center px-8 py-4 bg-white border-2 border-blue-200 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200"
              >
                <Shield className="mr-2 h-5 w-5" />
                Download Risk Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedFlagAlertsSection;