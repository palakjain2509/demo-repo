'use client';

import Link from 'next/link';

export default function CareersContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
              Join Our Mission to Transform Procurement
            </h1>
            <p className="text-xl mb-8 font-sans">
              Be part of a team that's revolutionizing how organizations handle procurement through innovative technology and data-driven insights.
            </p>
            <div className="flex justify-start">
              <Link 
                href="#open-positions"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                View Open Positions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-sans">
            Why Join MyGets?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation at Core",
                description: "Work with cutting-edge technologies and help shape the future of procurement.",
                icon: "🚀"
              },
              {
                title: "Growth & Learning",
                description: "Continuous learning opportunities and career development paths.",
                icon: "📈"
              },
              {
                title: "Work-Life Balance",
                description: "Flexible working arrangements and a supportive work environment.",
                icon: "⚖️"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700">
            Open Positions
          </h2>
          <div className="space-y-6 text-blue-700">
            {[
              {
                title: "Senior Software Engineer",
                location: "Perth, WA (Hybrid)",
                type: "Full-time",
                description: "Join our engineering team to build and scale our procurement platform.",
                requirements: [
                  "5+ years of software development experience",
                  "Strong expertise in React and Node.js",
                  "Experience with cloud platforms (AWS/Azure)",
                  "Knowledge of data processing and analytics"
                ]
              },
              {
                title: "Product Manager",
                location: "Perth, WA (Hybrid)",
                type: "Full-time",
                description: "Lead product development and strategy for our procurement solutions.",
                requirements: [
                  "3+ years of product management experience",
                  "Background in SaaS or enterprise software",
                  "Strong analytical and problem-solving skills",
                  "Experience with agile methodologies"
                ]
              },
              {
                title: "Data Scientist",
                location: "Perth, WA (Hybrid)",
                type: "Full-time",
                description: "Develop AI/ML models for procurement analytics and insights.",
                requirements: [
                  "Masters/PhD in Computer Science, Statistics, or related field",
                  "Experience with machine learning and data analysis",
                  "Proficiency in Python and data science libraries",
                  "Knowledge of procurement domain is a plus"
                ]
              }
            ].map((position, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700">{position.title}</h3>
                    <p className="text-gray-600">{position.location} • {position.type}</p>
                  </div>
                  <Link 
                    href={`/careers/apply?position=${encodeURIComponent(position.title)}`}
                    className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
                <p className="text-gray-700 mb-4">{position.description}</p>
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {position.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-sans">
            Benefits & Perks
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Health & Wellness",
                description: "Comprehensive health coverage and wellness programs"
              },
              {
                title: "Learning & Development",
                description: "Professional development budget and learning resources"
              },
              {
                title: "Flexible Work",
                description: "Hybrid work model and flexible hours"
              },
              {
                title: "Team Events",
                description: "Regular team building and social events"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-screen bg-blue-900 text-white relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-sans">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-sans">
            Join us in revolutionizing procurement through technology and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#open-positions"
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors text-center"
            >
              View Open Positions
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}