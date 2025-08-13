import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function EarlyAdopterProgram() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
              MyGETS Early Adopter Program
            </h1>
            <p className="text-xl mb-8 font-sans leading-relaxed">
              Join a select group of forward-thinking organizations shaping the future of OCDS-native procurement. Get exclusive benefits, priority access, and influence our product roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Early Adopter Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Early Adopter Program offers exclusive advantages designed to maximize your return on investment while helping shape the future of procurement technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Financial Benefits */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-blue-900">Financial Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>50% discount on Phase 1 subscription fees</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Locked-in preferential pricing for 24 months</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Free implementation support package ($5,000 value)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>No-cost data migration assistance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Product Benefits */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-blue-900">Product Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Early access to new features before general release</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Direct input into product roadmap and prioritization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Custom feature development consideration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Dedicated product specialist for your organization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Strategic Benefits */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-blue-900">Strategic Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Recognition as an innovation leader in procurement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Opportunity to be featured in case studies and press</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Exclusive early adopter community membership</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Executive briefings with MyGETS leadership team</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Process Section */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures you can quickly begin realizing the benefits of MyGETS while providing valuable feedback to shape the platform's future.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Application</h3>
              <p className="text-gray-600">
                Submit your application through our simple form. We'll review your organization's needs and procurement challenges.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Consultation</h3>
              <p className="text-gray-600">
                Meet with our team to discuss your specific requirements, goals, and how MyGETS can address your procurement needs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Onboarding</h3>
              <p className="text-gray-600">
                Our dedicated implementation team will guide you through setup, data migration, and initial training.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Feedback Loop</h3>
              <p className="text-gray-600">
                Participate in regular feedback sessions to help shape the platform while receiving priority support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="md:flex items-start gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Eligibility Criteria</h2>
              <p className="text-lg text-gray-600 mb-6">
                The Early Adopter Program is designed for organizations that are committed to procurement innovation and can provide valuable feedback. Ideal participants include:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Public sector organizations</span>
                    <p className="text-gray-600 mt-1">Government agencies, municipalities, and public institutions with transparency requirements</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Private enterprises</span>
                    <p className="text-gray-600 mt-1">Companies seeking to enhance procurement efficiency and supplier management</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Organizations with OCDS interest</span>
                    <p className="text-gray-600 mt-1">Entities looking to implement or improve OCDS compliance in their procurement processes</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Participant Commitments</h2>
              <p className="text-lg text-gray-600 mb-6">
                As an Early Adopter, we ask for your partnership in helping us refine and improve MyGETS:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Regular feedback</span>
                    <p className="text-gray-600 mt-1">Participate in monthly feedback sessions and occasional surveys</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Active usage</span>
                    <p className="text-gray-600 mt-1">Commit to using the platform for actual procurement activities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Case study participation</span>
                    <p className="text-gray-600 mt-1">Willingness to share your success story (with appropriate approvals)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Apply to the Early Adopter Program</h2>
            <p className="text-xl text-gray-600">
              Ready to transform your procurement processes with MyGETS? Complete the application form below to begin your journey.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-900">Early Adopter Application</CardTitle>
                <CardDescription>
                  Please provide the following information to apply for the program. Our team will contact you within 2 business days.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  {/* Organization Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Organization Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="organization" className="text-sm font-medium text-gray-700">Organization Name*</label>
                        <input
                          id="organization"
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Your organization name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="industry" className="text-sm font-medium text-gray-700">Industry*</label>
                        <select
                          id="industry"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          required
                        >
                          <option value="">Select industry</option>
                          <option value="government">Government</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="education">Education</option>
                          <option value="construction">Construction</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="technology">Technology</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="employees" className="text-sm font-medium text-gray-700">Number of Employees</label>
                        <select
                          id="employees"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        >
                          <option value="">Select range</option>
                          <option value="1-50">1-50</option>
                          <option value="51-200">51-200</option>
                          <option value="201-500">201-500</option>
                          <option value="501-1000">501-1000</option>
                          <option value="1001+">1001+</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="country" className="text-sm font-medium text-gray-700">Country*</label>
                        <input
                          id="country"
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Your country"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name*</label>
                        <input
                          id="name"
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="title" className="text-sm font-medium text-gray-700">Job Title*</label>
                        <input
                          id="title"
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Your job title"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address*</label>
                        <input
                          id="email"
                          type="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                          id="phone"
                          type="tel"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Procurement Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Procurement Information</h3>
                    <div className="space-y-2">
                      <label htmlFor="current_system" className="text-sm font-medium text-gray-700">Current Procurement System(s)</label>
                      <input
                        id="current_system"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="What systems are you currently using?"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="annual_spend" className="text-sm font-medium text-gray-700">Annual Procurement Spend (Approximate)</label>
                      <select
                        id="annual_spend"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="">Select range</option>
                        <option value="<1M">Less than $1 million</option>
                        <option value="1M-10M">$1 million - $10 million</option>
                        <option value="10M-50M">$10 million - $50 million</option>
                        <option value="50M-100M">$50 million - $100 million</option>
                        <option value="100M+">More than $100 million</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="challenges" className="text-sm font-medium text-gray-700">Key Procurement Challenges*</label>
                      <textarea
                        id="challenges"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md h-24"
                        placeholder="What are your biggest procurement challenges?"
                        required
                      ></textarea>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="ocds_experience" className="text-sm font-medium text-gray-700">Experience with OCDS</label>
                      <select
                        id="ocds_experience"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="">Select option</option>
                        <option value="none">No experience</option>
                        <option value="aware">Aware but not implemented</option>
                        <option value="planning">Planning implementation</option>
                        <option value="partial">Partially implemented</option>
                        <option value="full">Fully implemented</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
                    <div className="space-y-2">
                      <label htmlFor="timeline" className="text-sm font-medium text-gray-700">Implementation Timeline*</label>
                      <select
                        id="timeline"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (within 1 month)</option>
                        <option value="near-term">Near-term (1-3 months)</option>
                        <option value="medium-term">Medium-term (3-6 months)</option>
                        <option value="long-term">Long-term (6+ months)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="goals" className="text-sm font-medium text-gray-700">Goals for Early Adoption*</label>
                      <textarea
                        id="goals"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md h-24"
                        placeholder="What do you hope to achieve by participating in the Early Adopter Program?"
                        required
                      ></textarea>
                    </div>
                    <div className="flex items-start">
                      <input
                        id="terms"
                        type="checkbox"
                        className="mt-1 mr-2"
                        required
                      />
                      <label htmlFor="terms" className="text-sm text-gray-700">
                        I agree to the <Link href="/legal/terms-of-service" className="text-blue-600 hover:underline">Terms of Service</Link> and <Link href="/legal/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>
                      </label>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                  Submit Application
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about the MyGETS Early Adopter Program.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">How many organizations will be accepted into the program?</h3>
              <p className="text-gray-600">
                We're limiting the Early Adopter Program to 10-15 organizations to ensure each participant receives dedicated support and attention. This allows us to provide a truly personalized experience and incorporate feedback effectively.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">What is the duration of the Early Adopter Program?</h3>
              <p className="text-gray-600">
                The formal Early Adopter Program runs for 6 months, during which you'll receive all the exclusive benefits. After this period, you'll transition to a regular customer with your locked-in preferential pricing, but will maintain alumni status in our early adopter community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Is there a cost to join the Early Adopter Program?</h3>
              <p className="text-gray-600">
                Yes, Early Adopters pay for their subscription, but at a significantly discounted rate (50% off standard pricing). This ensures participants are genuinely committed to using the platform while still providing substantial financial benefit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">How much time commitment is required?</h3>
              <p className="text-gray-600">
                We ask for participation in monthly feedback sessions (approximately 1 hour each) and occasional surveys (15-20 minutes each). The total time commitment beyond normal platform usage is approximately 2-3 hours per month.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">What happens after I submit my application?</h3>
              <p className="text-gray-600">
                Our team will review your application and contact you within 2 business days to schedule an initial consultation. During this call, we'll discuss your specific needs, answer any questions, and determine if there's a good mutual fit for the program.
              </p>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600">
                Have more questions? <Link href="/contact" className="text-blue-600 hover:underline">Contact our team</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Procurement?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join the MyGETS Early Adopter Program today and be at the forefront of OCDS-native procurement innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
