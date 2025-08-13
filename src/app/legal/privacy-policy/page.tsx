import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | MyGETS - OCDS-Native Procurement Platform",
  description: "MyGETS Privacy Policy - Learn how we collect, use, and protect your personal information when you use our OCDS-native procurement platform.",
  robots: "noindex"
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
              Privacy Policy
            </h1>
            <p className="text-lg mb-2 font-sans">
              Last Updated: May 19, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="w-full py-6 bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            <a href="#introduction" className="text-blue-600 hover:text-blue-800 font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">Introduction</a>
            <a href="#collection" className="text-blue-600 hover:text-blue-800 font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">Data Collection</a>
            <a href="#use" className="text-blue-600 hover:text-blue-800 font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">Data Use</a>
            <a href="#disclosure" className="text-blue-600 hover:text-blue-800 font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">Disclosure</a>
            <a href="#security" className="text-blue-600 hover:text-blue-800 font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">Security</a>
            <a href="#rights" className="text-blue-600 hover:text-blue-800 font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">Your Rights</a>
            <a href="#contact" className="text-blue-600 hover:text-blue-800 font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">Contact Us</a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction Section */}
            <div id="introduction" className="scroll-mt-24 bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Introduction</h2>
              <p className="mb-4">
                MyGETS ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website mygets.net, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site").
              </p>
              <p className="mb-4">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                <p className="font-medium text-blue-700">Key Point:</p>
                <p className="text-blue-600">This policy applies to all information collected through our website, mobile applications, and any related services.</p>
              </div>
            </div>

            {/* Collection Section */}
            <div id="collection" className="scroll-mt-24 bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Collection of Your Information</h2>
              <p className="mb-4">
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Personal Data</h3>
                  <p>
                    Personally identifiable information, such as your name, email address, telephone number, and organization that you voluntarily give to us when you register with the Site, sign up for our newsletter, or when you choose to participate in various activities related to the Site.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Derivative Data</h3>
                  <p>
                    Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Financial Data</h3>
                  <p>
                    Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Data From Social Networks</h3>
                  <p>
                    User information from social networking sites, such as LinkedIn, including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks.
                  </p>
                </div>
              </div>
            </div>

            {/* Use Section */}
            <div id="use" className="scroll-mt-24 bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Use of Your Information</h2>
              <p className="mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Create and manage your account</li>
                  <li>Process your transactions</li>
                  <li>Send you email newsletters (with opt-in)</li>
                  <li>Email you regarding your account or order</li>
                  <li>Fulfill and manage purchases and orders</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Send you technical notices and updates</li>
                  <li>Request feedback about your use of the Site</li>
                  <li>Resolve disputes and troubleshoot problems</li>
                </ul>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Prevent fraudulent transactions</li>
                  <li>Compile anonymous statistical data</li>
                  <li>Deliver targeted advertising and newsletters</li>
                  <li>Increase the efficiency of the Site</li>
                  <li>Monitor usage and trends</li>
                  <li>Notify you of updates to the Site</li>
                  <li>Offer new products and services</li>
                  <li>Perform other business activities as needed</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                <p className="font-medium text-yellow-700">Important:</p>
                <p className="text-yellow-600">We will only use your personal information for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason compatible with the original purpose.</p>
              </div>
            </div>

            {/* Disclosure Section */}
            <div id="disclosure" className="scroll-mt-24 bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Disclosure of Your Information</h2>
              <p className="mb-4">
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>

              <div className="space-y-6 my-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">By Law or to Protect Rights</h3>
                  <p>
                    If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Third-Party Service Providers</h3>
                  <p>
                    We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Business Transfers</h3>
                  <p>
                    We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                  </p>
                </div>
              </div>
            </div>

            {/* Security Section */}
            <div id="security" className="scroll-mt-24 bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Security of Your Information</h2>
              <p className="mb-4">
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                <p className="font-medium text-green-700">Our Commitment:</p>
                <p className="text-green-600">We implement appropriate security measures to protect your personal information and regularly review our security practices to ensure they remain effective.</p>
              </div>
              
              <h3 className="text-xl font-semibold text-blue-800 mb-2 mt-6">Policy for Children</h3>
              <p className="mb-4">
                We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
              </p>
              
              <h3 className="text-xl font-semibold text-blue-800 mb-2 mt-6">Controls for Do-Not-Track Features</h3>
              <p className="mb-4">
                Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
              </p>
            </div>

            {/* Rights Section */}
            <div id="rights" className="scroll-mt-24 bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Rights Regarding Your Information</h2>
              
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Options Regarding Your Information</h3>
              <p className="mb-4">
                You may at any time review or change the information in your account or terminate your account by:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Logging into your account settings and updating your account</li>
                <li>Contacting us using the contact information provided below</li>
              </ul>
              <p className="mb-4">
                Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.
              </p>

              <h3 className="text-xl font-semibold text-blue-800 mb-2 mt-6">Emails and Communications</h3>
              <p className="mb-4">
                If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out by:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Noting your preferences at the time you register your account with the Site</li>
                <li>Logging into your account settings and updating your preferences</li>
                <li>Contacting us using the contact information provided below</li>
                <li>Using the unsubscribe link in emails</li>
              </ul>

              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 my-6">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">Your Rights Under Australian and New Zealand Privacy Laws</h3>
                <p className="mb-4">
                  If you are an Australian or New Zealand resident, you have specific rights regarding your personal information under the Australian Privacy Act 1988 (Cth), Australian Privacy Principles (APPs), and the New Zealand Privacy Act 2020.
                </p>
                
                <h4 className="text-lg font-medium text-indigo-700 mb-2">Access and Correction</h4>
                <p className="mb-4">
                  You have the right to access and correct your personal information. You can request access to the personal information we hold about you and ask us to correct any inaccurate, out-of-date, incomplete, irrelevant, or misleading information.
                </p>
                
                <h4 className="text-lg font-medium text-indigo-700 mb-2">Complaints</h4>
                <p className="mb-4">
                  If you believe that we have breached the Australian Privacy Principles or the New Zealand Privacy Act 2020, you can lodge a complaint with us by contacting us using the contact information below. We will investigate your complaint and respond to you within a reasonable time.
                </p>
                <p>
                  If you are not satisfied with our response, you can contact the Office of the Australian Information Commissioner (for Australian residents) or the Office of the Privacy Commissioner (for New Zealand residents).
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="scroll-mt-24 bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 inline-block">
                <p className="mb-1">
                  <span className="font-semibold">MyGETS</span>
                </p>
                <p className="mb-1">
                  <span className="font-semibold">Email:</span> <a href="mailto:privacy@mygets.net" className="text-blue-600 hover:underline">privacy@mygets.net</a>
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> +61 2 1234 5678
                </p>
              </div>
            </div>

            {/* Back to Top Button */}
            <div className="text-center mt-12">
              <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Back to Top
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
