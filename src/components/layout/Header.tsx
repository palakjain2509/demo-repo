// components/HeaderStandalone.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const HeaderStandalone = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const platformItems = [
    { href: '/platform', label: 'Overview' },
    { href: '/platform/spend-analytics', label: 'Spend Analytics' },
    { href: '/platform/supplier-management', label: 'Supplier Management' },
    { href: '/platform/contract-lifecycle', label: 'Contract Lifecycle Management' },
    { href: '/platform/ocds-reporting', label: 'OCDS Reporting' },
    { href: '/platform/our-engine', label: 'Our Engine: Data & AI Models' },
    { href: '/platform/integrations', label: 'Integrations' },
    { href: '/platform/security', label: 'Security' },
  ];

  const solutionsItems = [
    { href: '/solutions/private-sector', label: 'Private Sector' },
    { href: '/solutions/public-sector', label: 'Public Sector' },
    { href: '/solutions/business-development', label: 'Business Development' },
    { href: '/solutions/executives', label: 'Executives' },
    { href: '/solutions/procurement-leads', label: 'Procurement Leads' },
    { href: '/dashboard', label: 'Try Our Demo Dashboard' },
  ];

  const resourcesItems = [
    // { href: '/resources', label: 'Overview' },
    { href: '/resources/blog', label: 'Blogs' },
    // { href: '/resources/case-studies', label: 'Case Studies' },
    { href: '/resources/ocds-guide', label: 'OCDS Guide' },
    // { href: '/resources/webinars', label: 'Webinars and Podcasts' },
    // { href: '/resources/whitepapers', label: 'Whitepapers' },
    // { href: '/resources/models', label: 'Data & AI Models' },
    { href: '/resources/faq', label: 'FAQs' },
  ];

  const aboutUsItems = [
    { href: '/about-us', label: 'About Us' },
  ];

  return (
    <>
      <header className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isSticky 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white border-b border-gray-100'
        }
      `}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image
                src="/logo.svg"
                alt="MyGETS - Procurement Intelligence as a Service"
                width={140}
                height={36}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link 
                href="/" 
                className="text-base text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              
              {/* Platform Dropdown */}
              <div className="relative">
                <button
                  className="text-base text-gray-700 hover:text-blue-600 flex items-center gap-1 transition-colors"
                  onClick={() => handleDropdownToggle('platform')}
                >
                  Platform
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${openDropdown === 'platform' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'platform' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg p-2 shadow-lg transform scale-100 origin-top-left z-50 animate-in fade-in duration-200">
                    {platformItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors first:rounded-t-md last:rounded-b-md rounded-md"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  className="text-base text-gray-700 hover:text-blue-600 flex items-center gap-1 transition-colors"
                  onClick={() => handleDropdownToggle('solutions')}
                >
                  Solutions
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${openDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'solutions' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg p-2 shadow-lg transform scale-100 origin-top-left z-50 animate-in fade-in duration-200">
                    {solutionsItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors first:rounded-t-md last:rounded-b-md rounded-md"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  className="text-base text-gray-700 hover:text-blue-600 flex items-center gap-1 transition-colors"
                  onClick={() => handleDropdownToggle('resources')}
                >
                  Resources
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${openDropdown === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'resources' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg p-2 shadow-lg transform scale-100 origin-top-left z-50 animate-in fade-in duration-200">
                    {resourcesItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors first:rounded-t-md last:rounded-b-md rounded-md"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                href="/about-us" 
                className="text-base text-gray-700 hover:text-blue-600 transition-colors"
              >
                About Us
              </Link>
              
              <Link 
                href="/phased-launch" 
                className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow-md"
              >
                Phased Launch
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden absolute top-full left-0 right-0 bg-white border border-gray-200 p-2 shadow-lg transition-all duration-200 animate-in slide-in-from-top-5 fade-in border-t border-gray-200 rounded-none">
              <div className="py-2">
                <Link 
                  href="/" 
                  className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors rounded-md"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
                
                <div className="border-t border-gray-200 my-2">
                  <button
                    className="w-full text-left px-4 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors flex items-center justify-between rounded-md"
                    onClick={() => handleDropdownToggle('mobile-platform')}
                  >
                    Platform
                    <ChevronDownIcon className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-platform' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'mobile-platform' && (
                    <div className="bg-gray-50 rounded-md mt-1">
                      {platformItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-6 py-2 text-base text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors rounded-md"
                          onClick={toggleMobileMenu}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 my-2">
                  <button
                    className="w-full text-left px-4 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors flex items-center justify-between rounded-md"
                    onClick={() => handleDropdownToggle('mobile-solutions')}
                  >
                    Solutions
                    <ChevronDownIcon className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-solutions' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'mobile-solutions' && (
                    <div className="bg-gray-50 rounded-md mt-1">
                      {solutionsItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-6 py-2 text-base text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors rounded-md"
                          onClick={toggleMobileMenu}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 my-2">
                  <button
                    className="w-full text-left px-4 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors flex items-center justify-between rounded-md"
                    onClick={() => handleDropdownToggle('mobile-resources')}
                  >
                    Resources
                    <ChevronDownIcon className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-resources' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'mobile-resources' && (
                    <div className="bg-gray-50 rounded-md mt-1">
                      {resourcesItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-6 py-2 text-base text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors rounded-md"
                          onClick={toggleMobileMenu}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link 
                  href="/about-us" 
                  className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors border-t border-gray-200 rounded-md"
                  onClick={toggleMobileMenu}
                >
                  About Us
                </Link>
                
                <div className="px-4 py-2 border-t border-gray-200">
                  <Link 
                    href="/phased-launch" 
                    className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow-md w-full justify-center"
                    onClick={toggleMobileMenu}
                  >
                    Phased Launch
                  </Link>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default HeaderStandalone;