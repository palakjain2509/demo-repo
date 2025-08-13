import Link from 'next/link';

export default function PricingContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Transparent Pricing for Transparent Procurement</h1>
            <p className="text-xl mb-8">Choose the plan that best fits your organization's needs. All plans include our core OCDS-compliant procurement platform.</p>
            <Link 
              href="/request-demo" 
              className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Tier */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Standard</h3>
              <p className="text-gray-600 mb-6">Perfect for small to medium organizations</p>
              <div className="text-3xl font-bold mb-6">$1,500<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Up to 10 user accounts</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Core OCDS-compliant platform</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Standard reporting & analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>10GB document storage</span>
                </li>
              </ul>
              <Link 
                href="/request-demo" 
                className="block w-full bg-blue-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Professional Tier */}
            <div className="bg-white border-2 border-blue-700 rounded-lg shadow-lg p-6 relative">
              <div className="absolute top-0 right-0 bg-blue-700 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <p className="text-gray-600 mb-6">Ideal for medium to large organizations</p>
              <div className="text-3xl font-bold mb-6">$3,000<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Up to 25 user accounts</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced analytics & dashboards</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>50GB document storage</span>
                </li>
              </ul>
              <Link 
                href="/request-demo" 
                className="block w-full bg-blue-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-gray-600 mb-6">For large organizations with complex needs</p>
              <div className="text-3xl font-bold mb-6">Custom</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited user accounts</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Enterprise-grade security</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited storage</span>
                </li>
              </ul>
              <Link 
                href="/request-demo" 
                className="block w-full bg-blue-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Additional Information</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              All plans include our core OCDS-compliant procurement platform. Contact us to learn more about our Early Adopter Program and volume discounts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Early Adopter Program</h3>
              <p className="text-gray-600 mb-4">
                Join our Early Adopter Program to receive exclusive benefits including preferential pricing, priority feature development, and enhanced implementation support.
              </p>
              <Link 
                href="/early-adopter-program" 
                className="text-blue-700 hover:text-blue-800 font-semibold"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Volume Discounts</h3>
              <p className="text-gray-600 mb-4">
                We offer additional discounts for organizations with larger user counts and multi-year commitments. Contact us to discuss your specific needs.
              </p>
              <Link 
                href="/request-demo" 
                className="text-blue-700 hover:text-blue-800 font-semibold"
              >
                Contact Sales →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 