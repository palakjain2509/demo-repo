'use client';

import Link from "next/link";

export default function SecurityContent() {
  return (
    <div className="space-y-12">
        {/* Hero Section - Now Full Width */}
        <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
                Enterprise-Grade Security
              </h1>
              <p className="text-xl mb-8 font-sans leading-relaxed">
                Your data security is our top priority. Our platform is engineered with a multi-layered security architecture and a steadfast commitment to rigorous compliance standards, including Australian data sovereignty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/request-demo"
                  className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Request Security Overview
                </Link>
                <Link 
                  href="/platform"
                  className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center"
                >
                  Explore All Platform Features
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="security-overview" className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 font-sans">
            Comprehensive Security Framework
          </h2>
          <p className="text-base text-gray-700 mb-6 leading-relaxed font-sans">
            At MyGets, we understand that security is not just a feature but a fundamental requirement. Our platform is built with security at its core, implementing multiple layers of protection to safeguard your data and ensure business continuity.
          </p>
          <p className="text-base text-gray-700 leading-relaxed font-sans">
            From data encryption and access controls to regular security audits and compliance certifications, we maintain the highest standards of security to protect your procurement operations.
          </p>
        </section>

        {/* Security Features */}
        <section id="security-features" className="py-10 bg-slate-50 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 font-sans">
            Security Features
          </h2>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[
              {
                title: "Data Encryption",
                description: "End-to-end encryption for data at rest and in transit, ensuring your information remains secure at all times.",
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              },
              {
                title: "Access Control",
                description: "Granular access controls and role-based permissions to ensure users only access authorized information.",
                icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              },
              {
                title: "Compliance",
                description: "Adherence to global security standards and regulations, including ISO 27001, SOC 2, and GDPR.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              },
              {
                title: "Regular Audits",
                description: "Continuous security monitoring and regular third-party audits to maintain the highest security standards.",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              },
              {
                title: "Disaster Recovery",
                description: "Comprehensive backup and disaster recovery solutions to ensure business continuity.",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              },
              {
                title: "Security Training",
                description: "Regular security awareness training for our team to maintain the highest security standards.",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              }
            ].map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col">
                <div className="mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center text-gray-800 font-sans">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed flex-grow font-sans">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section id="security-benefits" className="py-10 mb-12">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 font-sans">
            Security Benefits
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-10 gap-y-8 px-4">
            {[
              {
                title: "Data Protection",
                description: "Comprehensive protection of sensitive procurement data and business information."
              },
              {
                title: "Compliance Assurance",
                description: "Meet regulatory requirements and industry standards with confidence."
              },
              {
                title: "Risk Mitigation",
                description: "Proactive security measures to minimize potential security risks."
              },
              {
                title: "Business Continuity",
                description: "Robust disaster recovery solutions to ensure uninterrupted operations."
              },
              {
                title: "Trust & Confidence",
                description: "Build trust with stakeholders through demonstrated security excellence."
              },
              {
                title: "Peace of Mind",
                description: "Focus on your core business while we handle security concerns."
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 font-sans">{benefit.title}</h4>
                  <p className="text-base text-gray-700 leading-relaxed font-sans">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 font-sans">
              Ready to Experience Enterprise-Grade Security?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed font-sans">
              Discover how MyGets can protect your procurement data with our comprehensive security framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/request-demo"
                className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Request Security Overview
              </Link>
              <Link 
                href="/platform"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center"
              >
                Explore All Platform Features
              </Link>
            </div>
          </div>
        </section>

        {/* Security Philosophy Section */}
        <section id="security-first-philosophy" className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-gray-800">
            A Security-First Philosophy
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            MyGets understands the profound responsibility that comes with handling sensitive government and enterprise procurement information. Our security-first philosophy is embedded in every aspect of our platform development, operations, and corporate culture. We proactively address evolving threats and adhere to global best practices to ensure your data remains confidential, integral, and available.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are dedicated to providing a secure environment that not only meets but exceeds your expectations, allowing you to focus on strategic procurement with complete peace of mind.
          </p>
        </section>

        {/* Security Pillars Section */}
        <section id="key-security-pillars" className="py-10 bg-slate-50 rounded-xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-gray-800">
            Our Key Security Pillars
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[
              {
                title: "Advanced Data Encryption",
                description: "All data is encrypted both in transit (using TLS 1.2+ with strong ciphers) and at rest (using AES-256 or higher). We implement robust key management practices to protect encryption keys.",
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              },
              {
                title: "Strict Access Controls & Authentication",
                description: "Granular Role-Based Access Controls (RBAC) and mandatory Multi-Factor Authentication (MFA) ensure that only authorized personnel can access specific data and functionalities based on the principle of least privilege.",
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              },
              {
                title: "Secure & Resilient Infrastructure",
                description: "Our platform is hosted on leading cloud infrastructure featuring state-of-the-art physical and network security, regular vulnerability assessments, intrusion detection/prevention systems (IDS/IPS), and comprehensive DDoS mitigation.",
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              },
              {
                title: "Australian Data Sovereignty Guarantee",
                description: "MyGets is unequivocally committed to Australian data sovereignty. All client data, including backups, is hosted and processed exclusively within Australian data centers, ensuring compliance with the Privacy Act and other local data protection mandates.",
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              },
              {
                title: "Continuous Security Audits & Testing",
                description: "We conduct regular internal security reviews and engage independent third-party auditors for penetration testing and vulnerability assessments. This proactive approach helps us identify and remediate potential weaknesses before they can be exploited.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                title: "Comprehensive Compliance & Certifications",
                description: "MyGets adheres to stringent industry best practices and is actively pursuing or has achieved key security certifications such as ISO 27001 and SOC 2. We provide robust support for clients needing to meet specific regulatory requirements, including IRAP for Australian government agencies.",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                <div className="text-gray-700 mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-center text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* User Responsibilities Section */}
        <section id="user-responsibilities" className="py-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-gray-800">
            Security: A Shared Responsibility
          </h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl border border-gray-200">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              While MyGets invests heavily in providing a secure platform, the overall security of your data also depends on your organization's practices. We champion a shared responsibility model and encourage all users to:
            </p>
            <ul className="list-disc space-y-3 pl-6 text-gray-700 leading-relaxed">
              <li><strong>Utilize Strong Credentials:</strong> Enforce the use of strong, unique passwords for all MyGets accounts and mandate Multi-Factor Authentication (MFA) wherever available.</li>
              <li><strong>Manage User Permissions Prudently:</strong> Implement the principle of least privilege when assigning roles and permissions within your MyGets instance. Regularly review and update user access.</li>
              <li><strong>Maintain Endpoint Security:</strong> Ensure that devices used to access MyGets are secure, with up-to-date operating systems, browsers, and anti-malware software.</li>
              <li><strong>Promote Security Awareness:</strong> Educate your users about phishing, social engineering, and other common cyber threats. Foster a culture of security vigilance.</li>
              <li><strong>Report Incidents Promptly:</strong> Immediately report any suspected security incidents, vulnerabilities, or suspicious activity related to your MyGets account to our security team.</li>
            </ul>
          </div>
        </section>

        {/* Reporting Incidents Section */}
        <section id="reporting-incidents" className="text-center py-10 md:py-12 bg-red-50 border-t border-b border-red-200">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-red-700">
            Reporting Security Concerns & Vulnerabilities
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
            If you believe you have discovered a security vulnerability in the MyGets platform, or if you have any security-related concerns regarding your account or our services, please contact us immediately and responsibly.
          </p>
          <p className="text-lg text-gray-800 font-semibold mb-2">
            Email: <a href="mailto:security@mygets.net" className="text-red-600 hover:underline">security@mygets.net</a>
          </p>
          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
            We are committed to investigating all reports promptly and thoroughly. We appreciate responsible disclosure and collaboration from the security community to help us maintain the highest level of security for all our users.
          </p>
        </section>
    </div>
  );
}