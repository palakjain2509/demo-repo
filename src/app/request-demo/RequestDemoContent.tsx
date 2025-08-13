'use client';

import Link from "next/link";
import { useState, useRef } from "react";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface FormData {
  fullName: string;
  email: string;
  company: string;
  jobTitle: string;
  phone: string;
  specificInterests: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  messageId?: string;
}

export default function RequestDemoContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formData = new FormData(event.currentTarget);
    const data: FormData = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      jobTitle: formData.get('jobTitle') as string,
      phone: formData.get('phone') as string,
      specificInterests: formData.get('specificInterests') as string,
    };

    try {
      const response = await fetch('/api/request-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: ApiResponse = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your interest! We will be in touch shortly to schedule your personalized demo.',
        });
        formRef.current?.reset();
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error 
          ? error.message 
          : 'Failed to submit demo request. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
              Experience the Power of MyGETS
            </h1>
            <p className="text-xl mb-8 font-sans leading-relaxed">
              Schedule a personalized demo with our experts and see firsthand how MyGETS can revolutionize your procurement processes with OCDS-native technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Schedule Demo
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Schedule Your Personalized Demo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a firsthand look at how MyGETS can transform your procurement processes with our OCDS-native platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column: Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-blue-900 mb-6">What to Expect</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Tailored Demonstration</h3>
                      <p className="text-gray-600">Experience a personalized walkthrough of features specifically relevant to your organization's needs and challenges.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Interactive Experience</h3>
                      <p className="text-gray-600">Engage with our platform through hands-on demonstrations of key functionalities and real-world use cases.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Expert Consultation</h3>
                      <p className="text-gray-600">Get insights from our specialists who will address your specific questions and provide strategic recommendations.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
              </div>
              <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Implementation Roadmap</h3>
                      <p className="text-gray-600">Receive a detailed discussion of how MyGETS can be implemented in your organization, including timeline and resource requirements.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Demo Request Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-900">Request Your Demo</CardTitle>
                <CardDescription>
                  Fill out the form below and our team will contact you to schedule your personalized demo.
                </CardDescription>
              </CardHeader>
              <CardContent>
              {submitStatus.type && (
                <div className={`p-4 mb-6 rounded-lg ${
                  submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: 'fullName', label: 'Full Name*', type: 'text', required: true },
                  { id: 'email', label: 'Work Email*', type: 'email', required: true },
                  { id: 'company', label: 'Company Name*', type: 'text', required: true },
                  { id: 'jobTitle', label: 'Job Title', type: 'text', required: false },
                  { id: 'phone', label: 'Phone Number', type: 'tel', required: false }
                ].map((field) => (
                  <div key={field.id}>
                    <label 
                      htmlFor={field.id}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required={field.required}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                ))}

                <div>
                  <label 
                    htmlFor="specificInterests"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                      What are you hoping to achieve with MyGETS? (Optional)
                  </label>
                  <textarea
                    id="specificInterests"
                    name="specificInterests"
                    rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
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
                </form>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button 
                  size="lg" 
                  className="bg-blue-900 hover:bg-blue-800"
                  onClick={() => formRef.current?.requestSubmit()}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Request Demo'}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Procurement?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule your personalized demo today and discover how MyGETS can revolutionize your procurement processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 