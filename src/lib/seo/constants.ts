// SEO Constants and Configuration
export const SEO_CONFIG = {
  siteName: 'MyGETS',
  siteUrl: 'https://mygets.net',
  defaultTitle: 'MyGETS - OCDS-Native Procurement Intelligence Platform',
  defaultDescription: 'Transform your procurement with MyGETS, the world\'s first OCDS-native procurement intelligence platform. Streamline processes, ensure compliance, and drive transparency.',
  defaultKeywords: 'OCDS, procurement platform, procurement intelligence, contract transparency, procurement compliance, open contracting, procurement software, risk detection, procurement analytics, procurement automation',
  defaultImage: 'https://mygets.net/images/og-image.jpg',
  twitterHandle: '@mygets',
  author: 'MyGETS Team',
  language: 'en',
  locale: 'en_US',
  themeColor: '#1e40af',
  'procurement-leads': {
    title: 'Procurement Excellence Through OCDS-Native Design | MyGETS',
    description: 'MyGETS empowers procurement professionals with unparalleled compliance, efficiency, and audit capabilities through our purpose-built OCDS-native platform.',
    keywords: 'procurement professionals, OCDS native, procurement compliance, audit capabilities, procurement efficiency',
    pageType: 'website' as const,
  },
  'public-sector': {
    title: 'Public Sector Procurement Solutions | MyGETS',
    description: 'Transform your public sector procurement with MyGETS. Streamline processes, ensure compliance, and drive transparency with our comprehensive procurement platform.',
    keywords: 'public sector procurement, government procurement, procurement compliance, transparency, OCDS',
    pageType: 'website' as const,
  },
  'private-sector': {
    title: 'Private Sector Procurement Solutions | MyGETS',
    description: 'Transform your private sector procurement with MyGETS. Streamline processes, reduce costs, and drive strategic value with our comprehensive procurement platform.',
    keywords: 'private sector procurement, enterprise procurement, procurement cost reduction, strategic value',
    pageType: 'website' as const,
  },
  'integrations': {
    title: 'Seamless Platform Integrations | MyGETS Connectivity Hub',
    description: 'MyGETS offers robust integrations with your existing ERP, financial systems, CRM, and other business applications, creating a unified and efficient procurement ecosystem.',
    keywords: 'platform integration, ERP integration, CRM integration, financial systems, automation, API',
    pageType: 'website' as const,
  },
  'security': {
    title: 'Enterprise Security & Compliance | MyGETS Platform',
    description: 'MyGETS provides enterprise-grade security with ISO 27001, SOC 2 Type II compliance, and comprehensive data protection for your procurement operations.',
    keywords: 'enterprise security, ISO 27001, SOC 2, data protection, compliance, security certifications',
    pageType: 'website' as const,
  },
  'ocds-reporting': {
    title: 'OCDS Reporting & Analytics | MyGETS',
    description: 'Generate comprehensive OCDS-compliant reports and analytics with MyGETS. Real-time insights, automated reporting, and transparency dashboards.',
    keywords: 'OCDS reporting, procurement analytics, compliance reporting, transparency dashboards, automated reporting',
    pageType: 'website' as const,
  },
  'whitepapers': {
    title: 'Procurement Whitepapers & Research | MyGETS Resources',
    description: 'Access in-depth procurement research, whitepapers, and industry insights from MyGETS experts. Stay informed on procurement best practices and trends.',
    keywords: 'procurement whitepapers, procurement research, industry insights, best practices, procurement trends',
    pageType: 'website' as const,
  },
  'executives': {
    title: 'Executive Procurement Solutions | MyGETS',
    description: 'Strategic procurement solutions for executives. Drive organizational value, ensure compliance, and gain strategic insights with MyGETS executive dashboard.',
    keywords: 'executive procurement, strategic procurement, procurement leadership, executive dashboard, organizational value',
    pageType: 'website' as const,
  },
  'legal': {
    title: 'Legal Information | MyGETS',
    description: 'Legal information, terms of service, privacy policy, and compliance documentation for MyGETS procurement platform.',
    keywords: 'legal information, terms of service, privacy policy, compliance documentation',
    pageType: 'website' as const,
  },
};

// Common structured data schemas
export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MyGETS",
  "url": "https://mygets.net",
  "logo": "https://mygets.net/logo.svg",
  "description": "OCDS-native procurement intelligence platform",
  "foundingDate": "2024",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+61-xxx-xxx-xxx",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AU",
    "addressRegion": "Australia"
  },
  "sameAs": [
    "https://linkedin.com/company/mygets",
    "https://twitter.com/mygets"
  ]
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "MyGETS",
  "url": "https://mygets.net",
  "description": "OCDS-native procurement intelligence platform",
  "publisher": {
    "@type": "Organization",
    "name": "MyGETS"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://mygets.net/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Page-specific SEO configurations
export const PAGE_SEO_CONFIG = {
  home: {
    title: 'MyGETS - OCDS-Native Procurement Intelligence Platform',
    description: 'Transform your procurement with MyGETS, the world\'s first OCDS-native procurement intelligence platform. Streamline processes, ensure compliance, and drive transparency.',
    keywords: 'OCDS procurement platform, procurement intelligence, contract transparency, procurement compliance, open contracting data standard',
    pageType: 'website' as const,
  },
  platform: {
    title: 'Platform Overview | MyGETS OCDS-Native Procurement Intelligence',
    description: 'Discover MyGETS platform features: OCDS-native design, real-time risk detection, automated compliance, and comprehensive procurement analytics.',
    keywords: 'procurement platform features, OCDS native, procurement software, risk detection, compliance automation',
    pageType: 'website' as const,
  },
  solutions: {
    title: 'Procurement Solutions | MyGETS',
    description: 'Explore MyGETS procurement solutions for public and private sectors. Streamline processes, ensure compliance, and drive strategic value.',
    keywords: 'procurement solutions, public sector procurement, private sector procurement, procurement consulting',
    pageType: 'website' as const,
  },
  resources: {
    title: 'Resources | MyGETS Procurement Intelligence',
    description: 'Access comprehensive procurement resources including case studies, whitepapers, webinars, and OCDS guides from MyGETS experts.',
    keywords: 'procurement resources, OCDS guide, procurement case studies, procurement whitepapers, procurement webinars',
    pageType: 'website' as const,
  },
  pricing: {
    title: 'Pricing | MyGETS Procurement Platform',
    description: 'Transparent pricing for MyGETS OCDS-native procurement platform. Choose the plan that fits your organization\'s needs.',
    keywords: 'procurement platform pricing, OCDS platform cost, procurement software pricing',
    pageType: 'website' as const,
  },
  contact: {
    title: 'Contact Us | MyGETS',
    description: 'Get in touch with MyGETS team. Contact us for demos, support, or questions about our OCDS-native procurement platform.',
    keywords: 'contact MyGETS, procurement platform support, demo request, procurement consultation',
    pageType: 'website' as const,
  },
  faq: {
    title: 'Frequently Asked Questions | MyGETS Procurement Intelligence Platform',
    description: 'Find answers to common questions about MyGETS, the OCDS-native procurement intelligence platform. Learn about features, implementation, pricing, and more.',
    keywords: 'MyGETS FAQ, procurement platform questions, OCDS platform, procurement software FAQ, procurement intelligence questions',
    pageType: 'website' as const,
  },
  'case-studies': {
    title: 'MyGETS Procurement Case Studies | Real-World Success Stories',
    description: 'Explore case studies showcasing how MyGETS helps Australian private and public sector organizations achieve procurement excellence, compliance, and efficiency.',
    keywords: 'procurement case studies, OCDS implementation, procurement success stories, procurement compliance',
    pageType: 'website' as const,
  },
  'ocds-guide': {
    title: 'OCDS Guide | MyGETS - OCDS-Native Procurement Platform',
    description: 'Learn about the Open Contracting Data Standard (OCDS) and how it transforms procurement data into a standardized format that enhances transparency and improves decision-making.',
    keywords: 'OCDS, Open Contracting Data Standard, procurement transparency, data standard, procurement data',
    pageType: 'article' as const,
  },
  'request-demo': {
    title: 'Request Demo | MyGETS Procurement Platform',
    description: 'Request a personalized demo of MyGETS OCDS-native procurement platform. See how we can transform your procurement processes.',
    keywords: 'MyGETS demo, procurement platform demo, OCDS platform demonstration',
    pageType: 'website' as const,
  },
  'early-adopter-program': {
    title: 'Early Adopter Program | MyGETS',
    description: 'Join the MyGETS Early Adopter Program and get exclusive access to our OCDS-native procurement platform with special benefits and pricing.',
    keywords: 'early adopter program, MyGETS beta, procurement platform early access',
    pageType: 'website' as const,
  },
  'privacy-policy': {
    title: 'Privacy Policy | MyGETS',
    description: 'Read the MyGETS Privacy Policy to understand how we collect, use, and protect your personal information in compliance with Australian Privacy Principles.',
    keywords: 'privacy policy, data protection, Australian Privacy Principles, GDPR compliance',
    pageType: 'website' as const,
  },
  'terms-of-service': {
    title: 'Terms of Service | MyGETS',
    description: 'Read the MyGETS Terms of Service to understand the terms and conditions for using our OCDS-native procurement platform.',
    keywords: 'terms of service, terms and conditions, user agreement, service terms',
    pageType: 'website' as const,
  },
  careers: {
    title: 'Careers at MyGETS | Join Our Procurement Innovation Team',
    description: 'Join MyGETS and help transform procurement through transparency and innovation. Explore career opportunities with our growing team in Australia.',
    keywords: 'MyGETS careers, procurement jobs, technology careers, innovation team, Australian jobs',
    pageType: 'website' as const,
  },
  'about-us': {
    title: 'About MyGETS | Transforming Procurement Through Transparency',
    description: 'Learn about MyGETS mission to revolutionize procurement by bringing transparency, collaboration, and accountability to public spending through OCDS.',
    keywords: 'about MyGETS, procurement transparency, OCDS, procurement innovation, company mission',
    pageType: 'website' as const,
  },
  'phased-launch': {
    title: 'MyGETS Phased Release Strategy | Driving Innovation and Sustainable Procurement',
    description: 'Discover MyGETS strategic three-phase approach to revolutionizing procurement, from foundation building to market leadership, focusing on innovation and sustainability.',
    keywords: 'phased launch, procurement innovation, sustainable procurement, strategic roadmap, procurement transformation',
    pageType: 'website' as const,
  },
};

// Generate page-specific SEO data
export function getPageSEO(pageKey: keyof typeof PAGE_SEO_CONFIG, customData?: Partial<typeof PAGE_SEO_CONFIG[keyof typeof PAGE_SEO_CONFIG]>) {
  const defaultConfig = PAGE_SEO_CONFIG[pageKey] || PAGE_SEO_CONFIG.home;
  return {
    ...defaultConfig,
    ...customData,
  };
}

// Generate canonical URL
export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SEO_CONFIG.siteUrl}${cleanPath}`;
}

// Generate breadcrumb data
export function generateBreadcrumbs(path: string): Array<{ name: string; url: string }> {
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs = [{ name: 'Home', url: '/' }];
  
  let currentPath = '';
  segments.forEach((segment) => {
    currentPath += `/${segment}`;
    const name = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    breadcrumbs.push({ name, url: currentPath });
  });
  
  return breadcrumbs;
}