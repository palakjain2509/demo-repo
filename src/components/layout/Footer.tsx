import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaXTwitter, FaYoutube, FaInstagram } from 'react-icons/fa6';

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Analytics", href: "/analytics" },
      { label: "Reports", href: "/reports" },
      { label: "Settings", href: "/settings" },
      { label: "Integrations", href: "/platform/integrations" },
      { label: "Security", href: "/platform/security" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Procurement Intelligence", href: "/solutions/procurement-intelligence" },
      { label: "Supplier Management", href: "/solutions/supplier-management" },
      { label: "Contract Management", href: "/solutions/contract-management" },
      { label: "Spend Analytics", href: "/solutions/spend-analytics" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/resources/documentation" },
      { label: "API Reference", href: "/resources/api" },
      { label: "Support", href: "/resources/support" },
      { label: "Community", href: "/resources/community" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Blog", href: "/resources/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Phased Launch", href: "/phased-launch" },
      { label: "Partners", href: "/partners" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Terms of Service", href: "/legal/terms-of-service" },
      { label: "Cookie Policy", href: "/legal/cookie-policy" },
      { label: "Security", href: "/legal/security" },
    ],
  },
];

const socialLinks = [
  { 
    icon: <FaLinkedin className="w-5 h-5" />, 
    href: "https://linkedin.com/company/mygets",
    label: "LinkedIn"
  },
  { 
    icon: <FaXTwitter className="w-5 h-5" />, 
    href: "https://twitter.com/mygets",
    label: "Twitter"
  },
  { 
    icon: <FaYoutube className="w-5 h-5" />, 
    href: "https://youtube.com/@mygets",
    label: "YouTube"
  },
  { 
    icon: <FaFacebook className="w-5 h-5" />, 
    href: "https://facebook.com/mygets",
    label: "Facebook"
  },
  { 
    icon: <FaInstagram className="w-5 h-5" />, 
    href: "https://instagram.com/mygets",
    label: "Instagram"
  },
];

const FooterStandalone = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-16">
          {/* Top Section: Brand and Social */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
            <div className="flex-1 max-w-md">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/logo.svg"
                  alt="MyGETS - Procurement Intelligence as a Service"
                  width={140}
                  height={36}
                  className="h-9 w-auto"
                />
              </Link>
              <p className="text-base text-gray-600 leading-relaxed">
                Procurement Intelligence as a Service - Transform your procurement data into 
                actionable insights with AI-powered analytics, real-time monitoring, and 
                comprehensive intelligence solutions.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 mr-2">
                Follow us:
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md text-gray-500 hover:text-blue-600 hover:bg-gray-100 transition-all duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Section: Link Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
            {footerLinks.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 block py-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section: Copyright and Legal */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-500">
                © {currentYear} MyGETS. All rights reserved. | Procurement Intelligence as a Service
              </div>
              
              <div className="flex items-center gap-8">
                <div className="text-sm text-gray-500">
                  Built with enterprise security & compliance
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600">
                    All systems operational
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterStandalone;

