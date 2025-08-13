import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Target, Users, TrendingUp, Zap, BarChart4 } from 'lucide-react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function BusinessDevelopment() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
              Accelerate Business Development with OCDS-Native Intelligence
            </h1>
            <p className="text-xl mb-8 font-sans leading-relaxed">
              Discover, qualify, and win more opportunities with MyGETS—the only platform that combines OCDS data, CRM integration, and AI-powered insights to transform your business development process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/request-demo"
                className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Request Demo
              </Link>
              <Link
                href="/case-studies"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Business Development Challenges Solved</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MyGETS addresses the most pressing challenges facing business development teams with our integrated approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Challenge 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-900" />
                </div>
                <CardTitle className="text-xl font-bold text-blue-900">Opportunity Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Finding relevant procurement opportunities early enough to prepare competitive bids is time-consuming and often reactive.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">How MyGETS Solves This:</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Proactive opportunity alerts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>AI-powered opportunity matching</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Early planning stage visibility</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Challenge 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-900" />
                </div>
                <CardTitle className="text-xl font-bold text-blue-900">Relationship Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tracking interactions with procurement teams and decision-makers across multiple organizations is complex and disjointed.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">How MyGETS Solves This:</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Integrated CRM functionality</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>360° view of buyer relationships</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Communication history tracking</span>
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
                <CardTitle className="text-xl font-bold text-blue-900">Win Rate Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Understanding what drives successful bids and optimizing proposal strategies is difficult without structured data and insights.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">How MyGETS Solves This:</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Competitive intelligence</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Historical award analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Win/loss pattern identification</span>
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900">The OCDS-Native Advantage for Business Development</h2>
              <p className="text-lg text-gray-600 mb-6">
                MyGETS is the only platform that combines OCDS-native data with powerful business development tools, giving your team unprecedented advantages:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Early Opportunity Intelligence</span>
                    <p className="text-gray-600 mt-1">Access procurement plans and budgets at the earliest stages, before formal tenders are published</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Structured Competitive Analysis</span>
                    <p className="text-gray-600 mt-1">Analyze historical award data in a consistent format to identify patterns and competitive positioning</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Integrated Opportunity-to-CRM Flow</span>
                    <p className="text-gray-600 mt-1">Seamlessly convert procurement opportunities into qualified leads and manage the entire sales process</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">AI-Powered Tender Analysis</span>
                    <p className="text-gray-600 mt-1">Quickly extract key requirements, evaluation criteria, and hidden insights from complex tender documents</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-gray-100 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">What is OCDS?</h3>
              <p className="text-gray-600 mb-4">
                The Open Contracting Data Standard (OCDS) is a global standard for publishing structured data on all stages of the contracting process, from planning to implementation.
              </p>
              <p className="text-gray-600 mb-4">
                For business development teams, OCDS provides a consistent format for procurement data across different organizations and jurisdictions, making it easier to discover, analyze, and respond to opportunities.
              </p>
              <div className="mt-6">
                <Link href="/resources/ocds-guide" className="text-blue-600 font-semibold hover:underline flex items-center">
                  Learn more about OCDS
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Key Features for Business Development Teams</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MyGETS delivers powerful tools designed specifically for business development professionals to identify, pursue, and win more opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Opportunity Discovery Engine</h3>
              <p className="text-gray-600 mb-4">
                Never miss a relevant opportunity with our AI-powered discovery engine that matches your capabilities with upcoming and active procurement opportunities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Personalized opportunity matching</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Early-stage procurement visibility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Real-time alerts and notifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Multi-criteria filtering and search</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">AI-Powered Tender Analysis</h3>
              <p className="text-gray-600 mb-4">
                Quickly extract key insights from complex tender documents to accelerate bid/no-bid decisions and proposal development.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automated requirement extraction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Evaluation criteria identification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Risk and opportunity flagging</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Competitive positioning insights</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Integrated CRM Functionality</h3>
              <p className="text-gray-600 mb-4">
                Manage your entire opportunity pipeline with built-in CRM capabilities designed specifically for procurement-focused business development.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Opportunity-to-lead conversion</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Contact and organization management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Communication tracking and history</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Task and follow-up management</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart4 className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Win Strategy Analytics</h3>
              <p className="text-gray-600 mb-4">
                Leverage historical procurement data to develop winning strategies and improve bid success rates.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Historical award analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Competitor tracking and analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Win/loss pattern identification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Pricing and proposal optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Success Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how business development teams are transforming their opportunity pipeline with MyGETS.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 md:p-12">
            <div className="md:flex gap-8 items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="aspect-square bg-gray-200 rounded-lg"></div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">GlobalTech Industries</h3>
                <p className="text-gray-600 mb-6">
                  GlobalTech Industries, a multinational technology manufacturer, faced challenges with fragmented procurement processes, limited visibility into supplier performance, and difficulty standardizing procurement data for analysis.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">42% reduction in procurement cycle time</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">$37.5 million in cost savings</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">28% increase in team productivity</p>
                    </div>
                  </div>
                </div>
                <div className="italic text-gray-600 border-l-4 border-blue-500 pl-4 mb-6">
                  "While we initially looked at MyGETS for its efficiency benefits, the OCDS-native approach has delivered unexpected strategic advantages. The standardized data structure has transformed our analytics capabilities and made cross-regional comparison simple."
                </div>
                <div>
                  <Link href="/resources/case-studies/globaltech-industries" className="text-blue-600 font-semibold hover:underline flex items-center">
                    Read the full case study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions from business development professionals about MyGETS.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">How does MyGETS help us find opportunities earlier than traditional methods?</h3>
              <p className="text-gray-600">
                MyGETS leverages the planning phase data in OCDS to provide visibility into procurement activities before they reach the tender stage. Our platform monitors budget allocations, procurement plans, and pre-tender notices across multiple sources. Additionally, our AI analyzes historical procurement patterns to predict upcoming opportunities based on cyclical purchasing behaviors, budget cycles, and contract expiration dates. This combination of OCDS-structured data and predictive analytics typically gives our clients 30-90 days of additional lead time compared to traditional opportunity discovery methods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Can MyGETS integrate with our existing CRM system?</h3>
              <p className="text-gray-600">
                Yes, MyGETS offers bidirectional integration with popular CRM platforms including Salesforce, HubSpot, Microsoft Dynamics, and others. Our API allows for seamless data flow between systems, enabling you to push procurement opportunities directly into your existing CRM as leads or opportunities. Alternatively, you can use our built-in CRM functionality, which is specifically designed for procurement-focused business development. Many clients choose a hybrid approach, using MyGETS for opportunity discovery and initial qualification, then pushing selected opportunities to their enterprise CRM for broader team visibility.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">How does the AI-powered tender analysis work?</h3>
              <p className="text-gray-600">
                Our AI tender analysis uses natural language processing and machine learning to quickly extract key information from complex tender documents. The system identifies requirements, evaluation criteria, deadlines, and other critical elements, presenting them in a structured format. It also flags potential risks and opportunities based on your company's capabilities and past performance. The AI continuously improves through machine learning, becoming more accurate with each document it processes. This typically reduces the time needed to analyze tender documents by 70-80%, allowing your team to make faster bid/no-bid decisions and focus on developing winning proposals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">How can MyGETS help us improve our win rates?</h3>
              <p className="text-gray-600">
                MyGETS provides several capabilities that directly impact win rates. First, our competitive intelligence features analyze historical award data to identify patterns in successful bids, including pricing strategies, evaluation scores, and key differentiators. Second, our AI-powered tender analysis helps you identify the most important requirements and evaluation criteria, allowing you to focus your proposal on what matters most to the evaluators. Third, our opportunity qualification tools help you prioritize pursuits where you have the highest probability of success. Clients typically see a 15-25% improvement in win rates within the first six months of using MyGETS, representing significant ROI on their investment.
              </p>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600">
                Have more questions? <Link href="/resources/faq" className="text-blue-600 hover:underline">View all FAQs</Link> or <Link href="/contact" className="text-blue-600 hover:underline">contact our team</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business Development Process?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join forward-thinking business development teams who are leveraging MyGETS to discover, pursue, and win more opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" >
              Request Demo
            </Button>
            <Button size="lg" variant="outline" >
              Join Early Adopter Program
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
