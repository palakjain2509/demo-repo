'use client';

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  BarChart4,
  Shield,
  TrendingUp,
  Eye,
  LineChart,
} from "lucide-react";

export default function ExecutivesContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
              Strategic Procurement Intelligence for Executive Leadership
            </h1>
            <p className="text-xl mb-8 font-sans leading-relaxed">
              Transform procurement from a cost center to a strategic advantage
              with MyGETS—the OCDS-native platform that delivers unprecedented
              visibility, compliance, and strategic insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/request-demo"
                className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Request Executive Demo
              </Link>
              <Link
                href="/dashboard"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center"
              >
                View ROI Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Executive Challenges Solved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MyGETS addresses the most pressing procurement challenges facing
              executive leadership with our OCDS-native approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Challenge 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-blue-900" />
                </div>
                <CardTitle className="text-xl font-bold text-blue-900">
                  Limited Visibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fragmented procurement data across multiple systems creates
                  blind spots and prevents strategic decision-making.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">
                    How MyGETS Solves This:
                  </p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Unified procurement dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Real-time spend visibility</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Cross-organizational insights</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Challenge 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-900" />
                </div>
                <CardTitle className="text-xl font-bold text-blue-900">
                  Compliance Risk
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Increasing regulatory requirements and transparency mandates
                  create significant compliance and reputational risks.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">
                    How MyGETS Solves This:
                  </p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Built-in OCDS compliance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Automated risk monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Comprehensive audit trails</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Challenge 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-900" />
                </div>
                <CardTitle className="text-xl font-bold text-blue-900">
                  Strategic Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Procurement is often viewed as a tactical function rather than
                  a strategic driver of business value and competitive
                  advantage.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">
                    How MyGETS Solves This:
                  </p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Strategic spend analytics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Supplier performance insights</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Value-driven procurement KPIs</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* OCDS Advantage Section */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                The OCDS-Native Executive Advantage
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                MyGETS is built from the ground up on the Open Contracting Data
                Standard (OCDS), delivering unique strategic advantages for
                executive leadership:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Unparalleled Transparency
                    </h3>
                    <p className="text-gray-600">
                      Complete visibility into every aspect of your procurement
                      lifecycle, from planning to contract completion.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Future-Proof Compliance
                    </h3>
                    <p className="text-gray-600">
                      Built-in compliance with emerging transparency regulations
                      and international standards.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Strategic Intelligence
                    </h3>
                    <p className="text-gray-600">
                      Advanced analytics and insights that transform procurement
                      into a strategic business function.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Executive Dashboard Preview
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">
                        Total Procurement Value
                      </span>
                      <BarChart4 className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      $24.7M
                    </div>
                    <div className="text-sm text-green-600">+12% vs last year</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">
                        Compliance Score
                      </span>
                      <Shield className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">98.5%</div>
                    <div className="text-sm text-green-600">
                      Exceeds industry benchmark
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">
                        Cost Savings
                      </span>
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">$3.2M</div>
                    <div className="text-sm text-blue-600">
                      13% of total spend
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Executive-Grade Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MyGETS provides the strategic tools and insights executives need
              to drive organizational value through procurement excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart4 className="h-6 w-6 text-blue-900" />
                </div>
                <CardTitle className="text-xl font-bold text-blue-900">
                  Strategic Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced analytics and reporting that provide deep insights
                  into procurement performance, spend patterns, and strategic
                  opportunities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Real-time spend analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Supplier performance metrics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Cost savings tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-900" />
                </div>
                <CardTitle className="text-xl font-bold text-blue-900">
                  Risk Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive risk assessment and monitoring capabilities that
                  protect your organization from compliance, financial, and
                  operational risks.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Automated compliance monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Supplier risk assessment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Contract risk analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-blue-900" />
                </div>
                <CardTitle className="text-xl font-bold text-blue-900">
                  Performance Optimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Data-driven insights and recommendations that help optimize
                  procurement performance and drive continuous improvement.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Process optimization insights</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Benchmarking analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">ROI measurement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Transform Your Procurement Strategy
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join forward-thinking executives who are leveraging MyGETS to drive
            strategic value, ensure compliance, and gain competitive advantage
            through procurement excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-demo"
              className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Schedule Executive Demo
            </Link>
            <Link
              href="/dashboard"
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors"
            >
              View ROI Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}