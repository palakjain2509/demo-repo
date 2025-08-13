"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, CheckCircle2, Users, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const trustIndicators = [
    { icon: Users, label: '500+ Organizations', color: 'text-blue-400' },
    { icon: Globe, label: '50+ Countries', color: 'text-green-400' },
    { icon: Shield, label: 'Enterprise Security', color: 'text-purple-400' }
  ];

  const keyBenefits = [
    'Reduce procurement costs by up to 30%',
    'Eliminate compliance risks automatically',
    'Get actionable insights in real-time'
  ];

  return (
    <section 
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 text-white flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-semibold backdrop-blur-sm">
              <span className="mr-2">🚀</span>
              Procurement Risk Intelligence Engine
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 id="hero-heading" className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Procurement Data into
                </span>
                Actionable Intelligence
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                MyGETS delivers procurement intelligence that helps organizations 
                <span className="text-white font-semibold"> save millions, reduce risks, and ensure compliance</span> 
                with automated insights and real-time monitoring.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {keyBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center text-gray-200"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group border-0"
                asChild
              >
                <Link href="/request-demo" className="inline-flex items-center">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl backdrop-blur-sm transition-all duration-300 group"
                asChild
              >
                <Link href="/product-demo" className="inline-flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-gray-400 text-sm mb-4">Trusted by leading organizations worldwide</p>
              <div className="flex flex-wrap gap-6">
                {trustIndicators.map((indicator, index) => (
                  <div 
                    key={index}
                    className="flex items-center text-gray-300 group"
                  >
                    <indicator.icon className={`h-5 w-5 ${indicator.color} mr-2`} />
                    <span className="text-sm font-medium group-hover:text-white transition-colors duration-200">
                      {indicator.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                      <div className="text-white font-semibold">MyGETS Dashboard</div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Metrics Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 border border-white/10">
                      <div className="text-2xl font-bold text-green-400">$2.4M</div>
                      <div className="text-gray-300 text-sm">Cost Savings</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 border border-white/10">
                      <div className="text-2xl font-bold text-blue-400">98.5%</div>
                      <div className="text-gray-300 text-sm">Compliance</div>
                    </div>
                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-white/5 rounded-lg p-4 h-32 border border-white/10">
                    <div className="flex items-end justify-between h-full space-x-2">
                      {[40, 65, 45, 80, 55, 70, 85].map((height, index) => (
                        <div 
                          key={index}
                          className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-sm flex-1"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Status Indicators */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">Risk Detection</span>
                      <span className="text-green-400 font-medium">Active</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">Compliance Monitor</span>
                      <span className="text-green-400 font-medium">Healthy</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">Cost Analytics</span>
                      <span className="text-blue-400 font-medium">Running</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-green-500/20 backdrop-blur-sm rounded-lg p-3 border border-green-400/30">
                <div className="text-green-400 text-sm font-semibold">Alert Resolved</div>
                <div className="text-white text-xs">Compliance check passed</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-blue-500/20 backdrop-blur-sm rounded-lg p-3 border border-blue-400/30">
                <div className="text-blue-400 text-sm font-semibold">Cost Saved</div>
                <div className="text-white text-xs">$45,000 this month</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;