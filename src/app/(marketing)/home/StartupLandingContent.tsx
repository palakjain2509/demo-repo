'use client';

import React from 'react';
import { ArrowRight, CheckCircle, Star, Users, Shield, BarChart, Clock, Globe, Target, Award, Zap, TrendingUp, FileText, Search, Upload, ClipboardCheck, HandHeart, FileSignature, CheckSquare, AlertTriangle } from 'lucide-react';

export default function StartupLandingContent() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Clear Value Proposition */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-8">
              <Zap className="mr-2 h-4 w-4" />
              Complete Procurement Lifecycle with Smart Risk Intelligence Engine
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Losing Money on
              <span className="text-blue-600 block">Hidden Procurement Risks</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              MyGETS supports your complete procurement lifecycle from planning to implementation, with ML-powered risk detection 
              that prevents failures and fraud proactively. Save up to 25% on costs while ensuring 100% compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="/request-demo"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Target className="mr-2 h-5 w-5" />
                Get Free Risk Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
              >
                <BarChart className="mr-2 h-5 w-5" />
                Watch 2-Min Demo
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                No Credit Card Required
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 text-green-500 mr-2" />
                Enterprise Security
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-green-500 mr-2" />
                Setup in 24 Hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The $13 Trillion Spending Problem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations lose billions annually due to procurement blind spots and compliance failures.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">83% Visibility Gap</h3>
              <p className="text-gray-600">Organizations can't track what happens after contracts are signed, leading to cost overruns and compliance issues.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Manual Risk Detection</h3>
              <p className="text-gray-600">Teams spend weeks manually checking for risks that could be detected automatically in real-time.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <BarChart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Disconnected Systems</h3>
              <p className="text-gray-600">Fragmented data across multiple systems makes it impossible to get a complete procurement picture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution - Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              One Platform. Complete Lifecycle Control.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MyGETS manages your entire procurement journey from planning to implementation, with risk detection 
              that prevents failures and fraud before they become expensive problems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "ML-Powered Risk Intelligence",
                description: "Predict high-risk procurements using logistic regression and random forests models",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: BarChart,
                title: "Complete Lifecycle Management",
                description: "Manage every stage from planning to implementation in one unified platform",
                color: "from-green-500 to-green-600"
              },
              {
                icon: TrendingUp,
                title: "Proactive Fraud Prevention",
                description: "Detect red flags like fast tender cycles and missing records before they impact you",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Globe,
                title: "Automated Compliance",
                description: "Ensure 100% compliance with automated OCDS reporting and documentation",
                color: "from-orange-500 to-orange-600"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Procurement Lifecycle */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Procurement Lifecycle Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial planning to final implementation, MyGETS manages every stage of your procurement process 
              with intelligent automation and risk detection at each step.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileText,
                title: "Planning",
                description: "Define procurement goals, stakeholders, needs assessment, and budget frameworks",
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200"
              },
              {
                icon: Search,
                title: "Tendering",
                description: "Manage open calls, RFQs, RFIs, and publishing tender documents",
                color: "from-green-500 to-green-600",
                bgColor: "bg-green-50",
                borderColor: "border-green-200"
              },
              {
                icon: Upload,
                title: "Submission",
                description: "Accept bid submissions, vendor info, submission documents",
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200"
              },
              {
                icon: ClipboardCheck,
                title: "Evaluation",
                description: "Capture scoring metrics, evaluation notes, ranking, and vendor status",
                color: "from-orange-500 to-orange-600",
                bgColor: "bg-orange-50",
                borderColor: "border-orange-200"
              },
              {
                icon: HandHeart,
                title: "Award",
                description: "Record contract award details, supplier confirmation, contract value",
                color: "from-red-500 to-red-600",
                bgColor: "bg-red-50",
                borderColor: "border-red-200"
              },
              {
                icon: FileSignature,
                title: "Contract",
                description: "Store contract metadata, performance clauses, amendments",
                color: "from-indigo-500 to-indigo-600",
                bgColor: "bg-indigo-50",
                borderColor: "border-indigo-200"
              },
              {
                icon: CheckSquare,
                title: "Implementation",
                description: "Track progress, deliverables, milestones, and final closeout info",
                color: "from-teal-500 to-teal-600",
                bgColor: "bg-teal-50",
                borderColor: "border-teal-200"
              },
              {
                icon: AlertTriangle,
                title: "Risk Intelligence",
                description: "ML models predict high-risk procurements and show red flags in real-time",
                color: "from-yellow-500 to-yellow-600",
                bgColor: "bg-yellow-50",
                borderColor: "border-yellow-200"
              }
            ].map((stage, index) => (
              <div key={index} className={`bg-white p-6 rounded-2xl shadow-sm border ${stage.borderColor} hover:shadow-md transition-shadow duration-200`}>
                <div className={`w-14 h-14 bg-gradient-to-br ${stage.color} rounded-xl flex items-center justify-center mb-4`}>
                  <stage.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{stage.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{stage.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart-Powered Risk Intelligence</h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Our machine learning models use logistic regression and random forests to predict high-risk procurements 
                based on historical risk events, lifecycle stages, budget sizes, and vendor history.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-red-50 rounded-xl border border-red-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Fast Tender Cycles</h4>
                <p className="text-sm text-gray-600">Detect unusually fast tender cycles that may indicate rushed or biased processes</p>
              </div>
              
              <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-200">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Missing Records</h4>
                <p className="text-sm text-gray-600">Identify missing planning records or incomplete documentation that creates compliance risks</p>
              </div>
              
              <div className="text-center p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Narrow Eligibility</h4>
                <p className="text-sm text-gray-600">Flag overly narrow vendor eligibility criteria that may limit fair competition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Adopter Program */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Join Our Early Adopter Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be among the first to experience next-generation procurement technology. 
              Early adopters get exclusive benefits and help shape the future of procurement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Exclusive Access</h3>
              <p className="text-gray-600 text-center">Get first access to new features and capabilities as we continue to innovate.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Direct Influence</h3>
              <p className="text-gray-600 text-center">Your feedback directly shapes product development and feature priorities.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Special Pricing</h3>
              <p className="text-gray-600 text-center">Lock in founder pricing and get significant discounts as an early supporter.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/early-adopter-program"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Star className="mr-2 h-5 w-5" />
              Join Early Adopter Program
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Potential Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Expected Results Based on Industry Research
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Based on procurement industry studies and our platform capabilities, 
              organizations typically see these improvements when implementing automated procurement solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">Up to 25%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Cost Reduction</div>
              <div className="text-sm text-gray-600">Potential procurement savings</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-600 mb-2">Up to 90%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Risk Prevention</div>
              <div className="text-sm text-gray-600">Issues caught before impact</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-600 mb-2">Up to 60%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Time Savings</div>
              <div className="text-sm text-gray-600">Reduction in manual work</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Compliance</div>
              <div className="text-sm text-gray-600">Automated reporting accuracy</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 italic">
              * Results may vary based on organization size, current processes, and implementation approach
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Procurement?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Be among the first to experience next-generation procurement technology. Get your free risk assessment today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/request-demo"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Target className="mr-2 h-5 w-5" />
              Start Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200"
            >
              <Users className="mr-2 h-5 w-5" />
              Talk to Expert
            </a>
          </div>
          
          <div className="mt-8 text-blue-100 text-sm">
            ✓ No credit card required  ✓ Setup in 24 hours  ✓ 30-day money-back guarantee
          </div>
        </div>
      </section>
    </main>
  );
}