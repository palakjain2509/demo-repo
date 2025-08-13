// Pre-configured schema templates for MyGETS

import SchemaMarkupGenerator from '../components/seo/SchemaMarkup';

const generator = SchemaMarkupGenerator.getInstance();

// MyGETS Platform Product Schema
export const MYGETS_PLATFORM_SCHEMA = generator.generateSchema('product', {
  name: 'MyGETS Procurement Intelligence Platform',
  description: 'OCDS-Native procurement intelligence platform providing comprehensive analytics, real-time monitoring, and supplier insights for government and enterprise procurement.',
  features: [
    'OCDS-Native Data Processing',
    'Real-time Procurement Monitoring',
    'Advanced Analytics Dashboard',
    'Supplier Intelligence & Risk Assessment',
    'Compliance Tracking & Reporting',
    'Automated Tender Analysis',
    'Market Intelligence',
    'Performance Benchmarking'
  ],
  category: 'Procurement Management Software',
  url: 'https://mygets.net',
  image: [
    'https://mygets.net/images/og-image.svg',
    'https://mygets.net/images/platform-screenshot.jpg',
    'https://mygets.net/images/dashboard-preview.jpg'
  ]
});

// MyGETS Analytics Product Schema
export const MYGETS_ANALYTICS_SCHEMA = generator.generateSchema('product', {
  name: 'MyGETS Analytics Suite',
  description: 'Advanced procurement analytics and business intelligence tools for data-driven procurement decisions.',
  features: [
    'Interactive Dashboards',
    'Custom Report Builder',
    'Predictive Analytics',
    'Spend Analysis',
    'Supplier Performance Metrics',
    'Market Trend Analysis'
  ],
  category: 'Business Intelligence Software',
  url: 'https://mygets.net/solutions/analytics'
});

// Sample Event Schemas
export const PROCUREMENT_WEBINAR_SCHEMA = generator.generateSchema('event', {
  name: 'Future of Procurement: OCDS Implementation Best Practices',
  description: 'Join our expert panel discussion on implementing Open Contracting Data Standard (OCDS) for better procurement transparency and efficiency.',
  startDate: '2024-02-15T14:00:00Z',
  endDate: '2024-02-15T15:30:00Z',
  location: {
    name: 'MyGETS Virtual Conference Room',
    virtual: true,
    url: 'https://mygets.net/events/webinar'
  },
  isAccessibleForFree: true,
  category: 'Professional Development',
  url: 'https://mygets.net/events/procurement-webinar'
});

export const PROCUREMENT_CONFERENCE_SCHEMA = generator.generateSchema('event', {
  name: 'Global Procurement Innovation Summit 2024',
  description: 'Annual conference bringing together procurement professionals, technology leaders, and policy makers to discuss the future of public and private procurement.',
  startDate: '2024-06-10T09:00:00Z',
  endDate: '2024-06-12T17:00:00Z',
  location: {
    name: 'Convention Center',
    virtual: false,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Conference Blvd',
      addressLocality: 'Washington',
      addressRegion: 'DC',
      postalCode: '20001',
      addressCountry: 'US'
    }
  },
  isAccessibleForFree: false,
  category: 'Business Conference'
});

// Sample Review Schemas
export const SAMPLE_REVIEWS = [
  generator.generateSchema('review', {
    rating: 5,
    author: 'Sarah Johnson',
    authorUrl: 'https://linkedin.com/in/sarahjohnson',
    reviewBody: 'MyGETS has transformed our procurement process. The OCDS-native approach provides unprecedented transparency and the analytics are incredibly powerful.',
    datePublished: '2024-01-15',
    title: 'Game-changing procurement platform'
  }),
  generator.generateSchema('review', {
    rating: 4,
    author: 'Michael Chen',
    reviewBody: 'Excellent platform for procurement analytics. The real-time monitoring features have helped us identify cost savings opportunities we never knew existed.',
    datePublished: '2024-01-10',
    title: 'Powerful analytics and insights'
  }),
  generator.generateSchema('review', {
    rating: 5,
    author: 'Dr. Emily Rodriguez',
    reviewBody: 'As a procurement consultant, I recommend MyGETS to all my clients. The compliance tracking and supplier intelligence features are best-in-class.',
    datePublished: '2024-01-05',
    title: 'Best-in-class procurement solution'
  })
];

// FAQ Schema for common questions
export const PROCUREMENT_FAQ_SCHEMA = generator.generateSchema('faq', [
  {
    question: 'What is OCDS and why is it important for procurement?',
    answer: 'Open Contracting Data Standard (OCDS) is a global standard for publishing procurement data. It ensures transparency, enables better analysis, and helps prevent corruption in public procurement processes.'
  },
  {
    question: 'How does MyGETS help with procurement compliance?',
    answer: 'MyGETS provides automated compliance tracking, real-time monitoring of procurement processes, and comprehensive reporting tools that help organizations meet regulatory requirements and internal policies.'
  },
  {
    question: 'Can MyGETS integrate with existing procurement systems?',
    answer: 'Yes, MyGETS offers flexible integration options including APIs, data connectors, and custom integration services to work with your existing procurement and ERP systems.'
  },
  {
    question: 'What kind of analytics does MyGETS provide?',
    answer: 'MyGETS offers comprehensive procurement analytics including spend analysis, supplier performance metrics, market intelligence, risk assessment, and predictive analytics for better decision-making.'
  },
  {
    question: 'Is MyGETS suitable for both public and private sector procurement?',
    answer: 'Absolutely. MyGETS is designed to serve both government agencies and private enterprises, with features tailored to meet the specific needs of each sector while maintaining OCDS compliance.'
  }
]);

// Breadcrumb schemas for different pages
export const HOME_BREADCRUMB = generator.generateSchema('breadcrumb', [
  { name: 'Home', url: 'https://mygets.net' }
]);

export const SOLUTIONS_BREADCRUMB = generator.generateSchema('breadcrumb', [
  { name: 'Home', url: 'https://mygets.net' },
  { name: 'Solutions', url: 'https://mygets.net/solutions' }
]);

export const RESOURCES_BREADCRUMB = generator.generateSchema('breadcrumb', [
  { name: 'Home', url: 'https://mygets.net' },
  { name: 'Resources', url: 'https://mygets.net/resources' }
]);

export const ABOUT_BREADCRUMB = generator.generateSchema('breadcrumb', [
  { name: 'Home', url: 'https://mygets.net' },
  { name: 'About', url: 'https://mygets.net/about' }
]);

// Article schemas for blog posts
export const SAMPLE_ARTICLE_SCHEMA = generator.generateSchema('article', {
  headline: 'The Future of Procurement: How OCDS is Transforming Government Contracting',
  description: 'Explore how Open Contracting Data Standard (OCDS) is revolutionizing government procurement processes and creating new opportunities for transparency and efficiency.',
  author: 'MyGETS Editorial Team',
  datePublished: '2024-01-20T10:00:00Z',
  dateModified: '2024-01-21T14:30:00Z',
  url: 'https://mygets.net/blog/future-of-procurement-ocds',
  section: 'Procurement Technology'
});

export default {
  MYGETS_PLATFORM_SCHEMA,
  MYGETS_ANALYTICS_SCHEMA,
  PROCUREMENT_WEBINAR_SCHEMA,
  PROCUREMENT_CONFERENCE_SCHEMA,
  SAMPLE_REVIEWS,
  PROCUREMENT_FAQ_SCHEMA,
  HOME_BREADCRUMB,
  SOLUTIONS_BREADCRUMB,
  RESOURCES_BREADCRUMB,
  ABOUT_BREADCRUMB,
  SAMPLE_ARTICLE_SCHEMA
};