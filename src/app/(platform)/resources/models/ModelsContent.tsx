'use client';

import Link from "next/link";
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ModelsContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
              The Engine Room: MyGETS Data & AI Models
            </h1>
            <p className="text-xl mb-8 font-sans">
              Discover the sophisticated data architecture and forward-thinking AI models that form the backbone of the MyGETS platform, 
              driving unparalleled insight and efficiency in procurement.
            </p>
          </div>
        </div>
      </section>

      {/* Model Clarification Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4 text-center font-sans">
              Defining "Models" for MyGETS
            </h2>
            <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto font-sans">
              The term "Models" can encompass various aspects of our platform. To provide the most relevant information, 
              this page will be tailored once the specific focus is clarified. Potential areas include:
            </p>
            <ul className="list-disc pl-6 max-w-2xl mx-auto space-y-4 text-gray-600 font-sans">
              {[
                {
                  title: "Data Models:",
                  content: "How MyGETS structures procurement data, adherence to OCDS, and how this enables analytics and transparency."
                },
                {
                  title: "Business Process Models:",
                  content: "How MyGETS supports and optimizes various procurement workflows and business processes."
                },
                {
                  title: "Pricing Models:",
                  content: "A detailed explanation if this page is intended to be separate or more in-depth than the main Pricing page."
                },
                {
                  title: "AI/Machine Learning Models:",
                  content: "If MyGETS leverages AI/ML for features like spend analytics, risk assessment, or predictive insights."
                }
              ].map((item, index) => (
                <li key={index}>
                  <span className="font-semibold">{item.title}</span> {item.content}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mt-6 text-center max-w-3xl mx-auto font-sans">
              The content below provides a general overview of our data-centric approach. 
              It will be significantly expanded and focused once the specific model type is confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* Data-Centric Approach Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center font-sans">
            Our Data-Centric Philosophy
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto font-sans">
            At MyGETS, we believe that structured, accessible, and standardized data is the cornerstone of modern, 
            effective procurement. Our platform is built to transform raw procurement data into a strategic asset.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "OCDS-Native by Design",
                content: "MyGETS embraces the Open Contracting Data Standard (OCDS) at its core. This ensures that data is interoperable, transparent, and ready for analysis, aligning with global best practices for open procurement.",
                link: {
                  text: "Learn about OCDS Reporting",
                  href: "/platform/ocds-reporting"
                }
              },
              {
                title: "Structured for Insight",
                content: "Our data models are meticulously designed to capture the full lifecycle of procurement activities, enabling powerful analytics, comprehensive reporting, and identification of trends and opportunities."
              },
              {
                title: "Enabling Advanced Analytics & AI",
                content: "A robust and well-structured data foundation is essential for leveraging advanced analytics and Artificial Intelligence. MyGETS is built to support future innovations in predictive analytics, risk modeling, and intelligent automation in procurement."
              },
              {
                title: "Security and Integrity by Default",
                content: "Underpinning our data models are stringent security protocols and data integrity checks, ensuring that your procurement information is accurate, reliable, and protected.",
                link: {
                  text: "Our Security Commitment",
                  href: "/platform/security"
                }
              }
            ].map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-3 font-sans">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4 font-sans">
                  {card.content}
                </p>
                {card.link && (
                  <Link 
                    href={card.link.href}
                    className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium font-sans"
                  >
                    {card.link.text}
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width CTA Section */}
      <section className="w-screen bg-blue-900 text-white relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-sans">Ready to Transform Your Procurement?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-sans">
            Discover how MyGETS can help your organization implement OCDS and realize the benefits of structured, standardized procurement data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/early-adopter-program" 
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors text-center font-sans"
            >
              Join Our Early Adopter Program
            </Link>
            <Link 
              href="/request-demo" 
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center font-sans"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 