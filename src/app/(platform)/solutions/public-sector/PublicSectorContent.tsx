import Link from 'next/link';
import { ArrowRightIcon, ChartBarIcon, DocumentTextIcon, UserGroupIcon, ShieldCheckIcon, CogIcon, LightBulbIcon } from '@heroicons/react/24/outline';

export default function PublicSectorContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
              MyGets: Public Sector Procurement Excellence
            </h1>
            <p className="text-xl mb-8 font-sans">
              Transform your public sector procurement with MyGets. Streamline processes, ensure compliance, and drive transparency with our comprehensive procurement platform.
            </p>
            <div className="flex justify-start">
              <Link
                href="/contact"
                className="bg-white text-blue-900 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg text-lg transition-colors inline-flex items-center"
              >
                Explore Public Sector Solutions
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-sans">
              Comprehensive Public Sector Solutions
            </h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed font-sans">
              Our platform is designed to meet the unique needs of public sector organizations, ensuring compliance, transparency, and efficiency in procurement processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ChartBarIcon className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-center text-blue-700 font-sans">Strategic Sourcing</h3>
              <p className="text-base text-gray-700 leading-relaxed font-sans">
                Optimize your procurement strategy with data-driven insights and automated processes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <UserGroupIcon className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-center text-blue-700 font-sans">Supplier Management</h3>
              <p className="text-base text-gray-700 leading-relaxed font-sans">
                Build and maintain strong relationships with suppliers while ensuring compliance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <DocumentTextIcon className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-center text-blue-700 font-sans">Contract Management</h3>
              <p className="text-base text-gray-700 leading-relaxed font-sans">
                Streamline contract lifecycle management with automated workflows and compliance checks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ChartBarIcon className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-center text-blue-700 font-sans">Spend Analytics</h3>
              <p className="text-base text-gray-700 leading-relaxed font-sans">
                Gain valuable insights into your procurement spend with advanced analytics.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ShieldCheckIcon className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-center text-blue-700 font-sans">Risk Management</h3>
              <p className="text-base text-gray-700 leading-relaxed font-sans">
                Identify and mitigate risks with comprehensive risk assessment tools.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CogIcon className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-center text-blue-700 font-sans">Integration Capabilities</h3>
              <p className="text-base text-gray-700 leading-relaxed font-sans">
                Seamlessly integrate with existing systems and workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-sans">
              Benefits for Public Sector Organizations
            </h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed font-sans">
              Discover how MyGets can transform your public sector procurement processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 font-sans">Enhanced Compliance</h3>
              <p className="text-base text-gray-700 leading-relaxed font-sans">
                Ensure adherence to public sector regulations and requirements with built-in compliance checks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 font-sans">Improved Transparency</h3>
              <p className="text-base text-gray-700 leading-relaxed font-sans">
                Maintain clear visibility into procurement processes and decision-making.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 font-sans">Cost Efficiency</h3>
              <p className="text-base text-gray-700 leading-relaxed font-sans">
                Reduce procurement costs through streamlined processes and better supplier management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 font-sans">Data-Driven Decisions</h3>
              <p className="text-base text-gray-700 leading-relaxed font-sans">
                Make informed decisions with comprehensive analytics and reporting tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width CTA Section */}
      <section className="w-screen bg-gradient-to-r from-blue-900 to-blue-700 text-white relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 font-sans">
            Ready to Transform Your Public Sector Procurement?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-sans">
            Join leading public sector organizations in revolutionizing their procurement processes with MyGets.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg text-lg transition-colors w-full sm:w-auto inline-flex items-center"
            >
              Request a Demo
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/platform"
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors w-full sm:w-auto inline-flex items-center"
            >
              Explore Platform Features
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 