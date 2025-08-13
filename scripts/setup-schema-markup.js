#!/usr/bin/env node

/**
 * Schema Markup Expansion Script
 * 
 * This script creates comprehensive schema markup for Product, Review, and Event schemas
 * Run with: node scripts/setup-schema-markup.js
 */

const fs = require('fs');
const path = require('path');

class SchemaMarkupSetup {
  constructor() {
    this.results = {
      passed: [],
      warnings: [],
      errors: []
    };
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'warning' ? '⚠️' : '✅';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async createSchemaTypes() {
    this.log('Creating schema type definitions...');
    
    const schemaTypesContent = `// Schema.org Type Definitions for MyGETS

export interface Organization {
  '@type': 'Organization';
  name: string;
  url: string;
  logo: string;
  description?: string;
  address?: PostalAddress;
  contactPoint?: ContactPoint[];
  sameAs?: string[];
  foundingDate?: string;
  numberOfEmployees?: string;
}

export interface PostalAddress {
  '@type': 'PostalAddress';
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
}

export interface ContactPoint {
  '@type': 'ContactPoint';
  telephone?: string;
  contactType: string;
  email?: string;
  url?: string;
}

export interface Product {
  '@type': 'Product' | 'SoftwareApplication';
  name: string;
  description: string;
  brand?: Organization;
  manufacturer?: Organization;
  url?: string;
  image?: string[];
  offers?: Offer[];
  aggregateRating?: AggregateRating;
  review?: Review[];
  category?: string;
  sku?: string;
  gtin?: string;
  mpn?: string;
  applicationCategory?: string;
  operatingSystem?: string;
  softwareVersion?: string;
  downloadUrl?: string;
  installUrl?: string;
  screenshot?: string[];
  featureList?: string[];
  requirements?: string;
  releaseNotes?: string;
}

export interface Offer {
  '@type': 'Offer';
  price?: string;
  priceCurrency?: string;
  priceValidUntil?: string;
  availability?: string;
  url?: string;
  seller?: Organization;
  validFrom?: string;
  validThrough?: string;
  eligibleRegion?: string[];
  businessFunction?: string;
  itemCondition?: string;
}

export interface Review {
  '@type': 'Review';
  reviewRating: Rating;
  author: Person | Organization;
  datePublished: string;
  reviewBody: string;
  name?: string;
  url?: string;
  publisher?: Organization;
}

export interface AggregateRating {
  '@type': 'AggregateRating';
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
  ratingCount: number;
  reviewCount?: number;
}

export interface Rating {
  '@type': 'Rating';
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
}

export interface Person {
  '@type': 'Person';
  name: string;
  url?: string;
  image?: string;
  jobTitle?: string;
  worksFor?: Organization;
}

export interface Event {
  '@type': 'Event';
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: Place | VirtualLocation;
  organizer?: Organization | Person;
  performer?: Organization | Person;
  url?: string;
  image?: string[];
  offers?: Offer[];
  eventStatus?: 'EventScheduled' | 'EventCancelled' | 'EventMovedOnline' | 'EventPostponed' | 'EventRescheduled';
  eventAttendanceMode?: 'OfflineEventAttendanceMode' | 'OnlineEventAttendanceMode' | 'MixedEventAttendanceMode';
  audience?: Audience;
  category?: string;
  duration?: string;
  inLanguage?: string;
  isAccessibleForFree?: boolean;
  maximumAttendeeCapacity?: number;
  remainingAttendeeCapacity?: number;
  typicalAgeRange?: string;
}

export interface Place {
  '@type': 'Place';
  name: string;
  address: PostalAddress;
  geo?: GeoCoordinates;
  url?: string;
  telephone?: string;
}

export interface VirtualLocation {
  '@type': 'VirtualLocation';
  url: string;
  name?: string;
  description?: string;
}

export interface GeoCoordinates {
  '@type': 'GeoCoordinates';
  latitude: number;
  longitude: number;
}

export interface Audience {
  '@type': 'Audience';
  audienceType?: string;
  name?: string;
}

export interface WebSite {
  '@type': 'WebSite';
  name: string;
  url: string;
  description?: string;
  publisher?: Organization;
  potentialAction?: SearchAction;
  inLanguage?: string;
  copyrightYear?: number;
  copyrightHolder?: Organization;
}

export interface SearchAction {
  '@type': 'SearchAction';
  target: string;
  'query-input': string;
}

export interface WebPage {
  '@type': 'WebPage';
  name: string;
  url: string;
  description?: string;
  isPartOf?: WebSite;
  primaryImageOfPage?: string;
  datePublished?: string;
  dateModified?: string;
  author?: Person | Organization;
  publisher?: Organization;
  inLanguage?: string;
  breadcrumb?: BreadcrumbList;
}

export interface BreadcrumbList {
  '@type': 'BreadcrumbList';
  itemListElement: ListItem[];
}

export interface ListItem {
  '@type': 'ListItem';
  position: number;
  name: string;
  item?: string;
}

export interface Article {
  '@type': 'Article';
  headline: string;
  description: string;
  author: Person | Organization;
  publisher: Organization;
  datePublished: string;
  dateModified?: string;
  image?: string[];
  url?: string;
  mainEntityOfPage?: string;
  articleSection?: string;
  wordCount?: number;
  inLanguage?: string;
}

export interface FAQPage {
  '@type': 'FAQPage';
  mainEntity: Question[];
}

export interface Question {
  '@type': 'Question';
  name: string;
  acceptedAnswer: Answer;
}

export interface Answer {
  '@type': 'Answer';
  text: string;
  author?: Person | Organization;
  dateCreated?: string;
  upvoteCount?: number;
}

// Base schema context
export const SCHEMA_CONTEXT = 'https://schema.org';

// Common schema templates
export const MYGETS_ORGANIZATION: Organization = {
  '@type': 'Organization',
  name: 'MyGETS',
  url: 'https://mygets.net',
  logo: 'https://mygets.net/images/logo.png',
  description: 'OCDS-Native Procurement Intelligence Platform providing comprehensive procurement analytics and insights.',
  sameAs: [
    'https://linkedin.com/company/mygets',
    'https://twitter.com/mygets'
  ]
};

export const MYGETS_WEBSITE: WebSite = {
  '@type': 'WebSite',
  name: 'MyGETS - Procurement Intelligence Platform',
  url: 'https://mygets.net',
  description: 'OCDS-Native Procurement Intelligence Platform',
  publisher: MYGETS_ORGANIZATION,
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://mygets.net/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  },
  inLanguage: 'en-US'
};`;

    try {
      const typesPath = 'src/types/schema.ts';
      fs.writeFileSync(typesPath, schemaTypesContent);
      this.results.passed.push('Schema type definitions created');
    } catch (error) {
      this.results.errors.push(`Error creating schema types: ${error.message}`);
    }
  }

  async createSchemaGenerator() {
    this.log('Creating schema markup generator...');
    
    const generatorContent = `'use client';

import {
  Organization,
  Product,
  Review,
  Event,
  WebSite,
  WebPage,
  Article,
  FAQPage,
  BreadcrumbList,
  SCHEMA_CONTEXT,
  MYGETS_ORGANIZATION,
  MYGETS_WEBSITE
} from '../types/schema';

interface SchemaMarkupProps {
  type: 'organization' | 'product' | 'review' | 'event' | 'website' | 'webpage' | 'article' | 'faq' | 'breadcrumb';
  data: any;
  id?: string;
}

class SchemaMarkupGenerator {
  private static instance: SchemaMarkupGenerator;

  public static getInstance(): SchemaMarkupGenerator {
    if (!SchemaMarkupGenerator.instance) {
      SchemaMarkupGenerator.instance = new SchemaMarkupGenerator();
    }
    return SchemaMarkupGenerator.instance;
  }

  // Generate Organization schema
  generateOrganization(data: Partial<Organization> = {}): Organization {
    return {
      ...MYGETS_ORGANIZATION,
      ...data
    };
  }

  // Generate Product schema for MyGETS platform
  generateProduct(data: {
    name: string;
    description: string;
    features?: string[];
    category?: string;
    url?: string;
    image?: string[];
    offers?: any[];
    reviews?: any[];
  }): Product {
    const product: Product = {
      '@type': 'SoftwareApplication',
      name: data.name,
      description: data.description,
      brand: MYGETS_ORGANIZATION,
      manufacturer: MYGETS_ORGANIZATION,
      url: data.url || 'https://mygets.net',
      image: data.image || ['https://mygets.net/images/og-image.svg'],
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web Browser',
      category: data.category || 'Procurement Software',
      featureList: data.features || [
        'OCDS-Native Data Processing',
        'Procurement Analytics',
        'Real-time Monitoring',
        'Compliance Tracking',
        'Supplier Intelligence'
      ],
      offers: data.offers || [{
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        businessFunction: 'https://schema.org/LeaseOut',
        url: 'https://mygets.net/contact'
      }]
    };

    if (data.reviews && data.reviews.length > 0) {
      product.review = data.reviews;
      product.aggregateRating = this.calculateAggregateRating(data.reviews);
    }

    return product;
  }

  // Generate Review schema
  generateReview(data: {
    rating: number;
    author: string;
    authorUrl?: string;
    reviewBody: string;
    datePublished: string;
    title?: string;
  }): Review {
    return {
      '@type': 'Review',
      name: data.title,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: data.rating,
        bestRating: 5,
        worstRating: 1
      },
      author: {
        '@type': 'Person',
        name: data.author,
        url: data.authorUrl
      },
      datePublished: data.datePublished,
      reviewBody: data.reviewBody,
      publisher: MYGETS_ORGANIZATION
    };
  }

  // Generate Event schema
  generateEvent(data: {
    name: string;
    description: string;
    startDate: string;
    endDate?: string;
    location: {
      name: string;
      address?: any;
      virtual?: boolean;
      url?: string;
    };
    organizer?: string;
    url?: string;
    image?: string[];
    isAccessibleForFree?: boolean;
    category?: string;
  }): Event {
    const event: Event = {
      '@type': 'Event',
      name: data.name,
      description: data.description,
      startDate: data.startDate,
      endDate: data.endDate,
      organizer: MYGETS_ORGANIZATION,
      url: data.url,
      image: data.image || ['https://mygets.net/images/og-image.svg'],
      eventStatus: 'EventScheduled',
      isAccessibleForFree: data.isAccessibleForFree ?? true,
      category: data.category || 'Technology',
      inLanguage: 'en-US'
    };

    // Set location based on type
    if (data.location.virtual) {
      event.location = {
        '@type': 'VirtualLocation',
        url: data.location.url || 'https://mygets.net',
        name: data.location.name
      };
      event.eventAttendanceMode = 'OnlineEventAttendanceMode';
    } else {
      event.location = {
        '@type': 'Place',
        name: data.location.name,
        address: data.location.address || {
          '@type': 'PostalAddress',
          addressCountry: 'US'
        }
      };
      event.eventAttendanceMode = 'OfflineEventAttendanceMode';
    }

    return event;
  }

  // Generate WebSite schema
  generateWebSite(data: Partial<WebSite> = {}): WebSite {
    return {
      ...MYGETS_WEBSITE,
      ...data
    };
  }

  // Generate WebPage schema
  generateWebPage(data: {
    name: string;
    url: string;
    description?: string;
    datePublished?: string;
    dateModified?: string;
    breadcrumb?: any[];
  }): WebPage {
    const webPage: WebPage = {
      '@type': 'WebPage',
      name: data.name,
      url: data.url,
      description: data.description,
      isPartOf: MYGETS_WEBSITE,
      datePublished: data.datePublished,
      dateModified: data.dateModified,
      publisher: MYGETS_ORGANIZATION,
      inLanguage: 'en-US'
    };

    if (data.breadcrumb) {
      webPage.breadcrumb = this.generateBreadcrumb(data.breadcrumb);
    }

    return webPage;
  }

  // Generate Article schema
  generateArticle(data: {
    headline: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified?: string;
    url?: string;
    image?: string[];
    section?: string;
  }): Article {
    return {
      '@type': 'Article',
      headline: data.headline,
      description: data.description,
      author: {
        '@type': 'Person',
        name: data.author
      },
      publisher: MYGETS_ORGANIZATION,
      datePublished: data.datePublished,
      dateModified: data.dateModified || data.datePublished,
      image: data.image || ['https://mygets.net/images/og-image.svg'],
      url: data.url,
      articleSection: data.section,
      inLanguage: 'en-US'
    };
  }

  // Generate FAQ schema
  generateFAQ(questions: Array<{ question: string; answer: string }>): FAQPage {
    return {
      '@type': 'FAQPage',
      mainEntity: questions.map(qa => ({
        '@type': 'Question',
        name: qa.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: qa.answer
        }
      }))
    };
  }

  // Generate Breadcrumb schema
  generateBreadcrumb(items: Array<{ name: string; url?: string }>): BreadcrumbList {
    return {
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    };
  }

  // Calculate aggregate rating from reviews
  private calculateAggregateRating(reviews: any[]) {
    if (!reviews || reviews.length === 0) return undefined;

    const totalRating = reviews.reduce((sum, review) => {
      return sum + (review.reviewRating?.ratingValue || 0);
    }, 0);

    return {
      '@type': 'AggregateRating',
      ratingValue: Math.round((totalRating / reviews.length) * 10) / 10,
      bestRating: 5,
      worstRating: 1,
      ratingCount: reviews.length,
      reviewCount: reviews.length
    };
  }

  // Generate complete schema markup with context
  generateSchema(type: string, data: any): object {
    let schema: any;

    switch (type) {
      case 'organization':
        schema = this.generateOrganization(data);
        break;
      case 'product':
        schema = this.generateProduct(data);
        break;
      case 'review':
        schema = this.generateReview(data);
        break;
      case 'event':
        schema = this.generateEvent(data);
        break;
      case 'website':
        schema = this.generateWebSite(data);
        break;
      case 'webpage':
        schema = this.generateWebPage(data);
        break;
      case 'article':
        schema = this.generateArticle(data);
        break;
      case 'faq':
        schema = this.generateFAQ(data);
        break;
      case 'breadcrumb':
        schema = this.generateBreadcrumb(data);
        break;
      default:
        throw new Error(\`Unknown schema type: \${type}\`);
    }

    return {
      '@context': SCHEMA_CONTEXT,
      ...schema
    };
  }
}

// React component for schema markup
export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data, id }) => {
  const generator = SchemaMarkupGenerator.getInstance();
  
  try {
    const schema = generator.generateSchema(type, data);
    
    return (
      <script
        id={id || \`schema-\${type}\`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema, null, 2)
        }}
      />
    );
  } catch (error) {
    console.error('Error generating schema markup:', error);
    return null;
  }
};

// Hook for schema markup
export function useSchemaMarkup(type: string, data: any) {
  const generator = SchemaMarkupGenerator.getInstance();
  
  try {
    return generator.generateSchema(type, data);
  } catch (error) {
    console.error('Error generating schema markup:', error);
    return null;
  }
}

export default SchemaMarkupGenerator;`;

    try {
      const generatorPath = 'src/components/seo/SchemaMarkup.tsx';
      fs.writeFileSync(generatorPath, generatorContent);
      this.results.passed.push('Schema markup generator created');
    } catch (error) {
      this.results.errors.push(`Error creating schema generator: ${error.message}`);
    }
  }

  async createSchemaTemplates() {
    this.log('Creating schema markup templates...');
    
    const templatesContent = `// Pre-configured schema templates for MyGETS

import { SchemaMarkupGenerator } from '../components/seo/SchemaMarkup';

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
};`;

    try {
      const templatesPath = 'src/data/schema-templates.ts';
      fs.writeFileSync(templatesPath, templatesContent);
      this.results.passed.push('Schema markup templates created');
    } catch (error) {
      this.results.errors.push(`Error creating schema templates: ${error.message}`);
    }
  }

  async createSchemaValidator() {
    this.log('Creating schema markup validator...');
    
    const validatorContent = `#!/usr/bin/env node

/**
 * Schema Markup Validator
 * 
 * Validates schema markup against Schema.org standards
 */

const fs = require('fs');
const path = require('path');

class SchemaValidator {
  constructor() {
    this.results = {
      passed: [],
      warnings: [],
      errors: []
    };
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'warning' ? '⚠️' : '✅';
    console.log(\`\${prefix} [\${timestamp}] \${message}\`);
  }

  validateSchema(schema, type) {
    const errors = [];
    const warnings = [];

    // Check required @context
    if (!schema['@context']) {
      errors.push('Missing @context property');
    } else if (schema['@context'] !== 'https://schema.org') {
      warnings.push('Non-standard @context value');
    }

    // Check required @type
    if (!schema['@type']) {
      errors.push('Missing @type property');
    }

    // Type-specific validations
    switch (type) {
      case 'organization':
        this.validateOrganization(schema, errors, warnings);
        break;
      case 'product':
        this.validateProduct(schema, errors, warnings);
        break;
      case 'review':
        this.validateReview(schema, errors, warnings);
        break;
      case 'event':
        this.validateEvent(schema, errors, warnings);
        break;
      case 'website':
        this.validateWebSite(schema, errors, warnings);
        break;
      case 'webpage':
        this.validateWebPage(schema, errors, warnings);
        break;
      case 'article':
        this.validateArticle(schema, errors, warnings);
        break;
      case 'faq':
        this.validateFAQ(schema, errors, warnings);
        break;
    }

    return { errors, warnings };
  }

  validateOrganization(schema, errors, warnings) {
    if (!schema.name) errors.push('Organization missing required name');
    if (!schema.url) warnings.push('Organization missing recommended url');
    if (!schema.logo) warnings.push('Organization missing recommended logo');
  }

  validateProduct(schema, errors, warnings) {
    if (!schema.name) errors.push('Product missing required name');
    if (!schema.description) errors.push('Product missing required description');
    if (!schema.brand && !schema.manufacturer) {
      warnings.push('Product missing brand or manufacturer');
    }
    if (!schema.offers) warnings.push('Product missing offers');
    if (!schema.image) warnings.push('Product missing image');
  }

  validateReview(schema, errors, warnings) {
    if (!schema.reviewRating) errors.push('Review missing required reviewRating');
    if (!schema.author) errors.push('Review missing required author');
    if (!schema.reviewBody) errors.push('Review missing required reviewBody');
    if (!schema.datePublished) warnings.push('Review missing datePublished');
  }

  validateEvent(schema, errors, warnings) {
    if (!schema.name) errors.push('Event missing required name');
    if (!schema.startDate) errors.push('Event missing required startDate');
    if (!schema.location) errors.push('Event missing required location');
    if (!schema.description) warnings.push('Event missing description');
    if (!schema.organizer) warnings.push('Event missing organizer');
  }

  validateWebSite(schema, errors, warnings) {
    if (!schema.name) errors.push('WebSite missing required name');
    if (!schema.url) errors.push('WebSite missing required url');
    if (!schema.publisher) warnings.push('WebSite missing publisher');
  }

  validateWebPage(schema, errors, warnings) {
    if (!schema.name) errors.push('WebPage missing required name');
    if (!schema.url) errors.push('WebPage missing required url');
    if (!schema.isPartOf) warnings.push('WebPage missing isPartOf');
  }

  validateArticle(schema, errors, warnings) {
    if (!schema.headline) errors.push('Article missing required headline');
    if (!schema.author) errors.push('Article missing required author');
    if (!schema.publisher) errors.push('Article missing required publisher');
    if (!schema.datePublished) errors.push('Article missing required datePublished');
    if (!schema.image) warnings.push('Article missing image');
  }

  validateFAQ(schema, errors, warnings) {
    if (!schema.mainEntity) errors.push('FAQPage missing required mainEntity');
    if (Array.isArray(schema.mainEntity)) {
      schema.mainEntity.forEach((question, index) => {
        if (!question.name) errors.push(\`Question \${index + 1} missing name\`);
        if (!question.acceptedAnswer) errors.push(\`Question \${index + 1} missing acceptedAnswer\`);
        if (question.acceptedAnswer && !question.acceptedAnswer.text) {
          errors.push(\`Question \${index + 1} answer missing text\`);
        }
      });
    }
  }

  async validateFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract JSON-LD scripts
      const jsonLdRegex = /<script[^>]*type=["']application\\/ld\\+json["'][^>]*>([\\s\\S]*?)<\\/script>/gi;
      let match;
      let schemaCount = 0;
      
      while ((match = jsonLdRegex.exec(content)) !== null) {
        schemaCount++;
        try {
          const schema = JSON.parse(match[1]);
          const type = this.detectSchemaType(schema);
          const validation = this.validateSchema(schema, type);
          
          if (validation.errors.length > 0) {
            this.results.errors.push(\`\${filePath} - Schema \${schemaCount}: \${validation.errors.join(', ')}\`);
          }
          
          if (validation.warnings.length > 0) {
            this.results.warnings.push(\`\${filePath} - Schema \${schemaCount}: \${validation.warnings.join(', ')}\`);
          }
          
          if (validation.errors.length === 0) {
            this.results.passed.push(\`\${filePath} - Schema \${schemaCount} (\${type}): Valid\`);
          }
          
        } catch (parseError) {
          this.results.errors.push(\`\${filePath} - Schema \${schemaCount}: Invalid JSON - \${parseError.message}\`);
        }
      }
      
      if (schemaCount === 0) {
        this.results.warnings.push(\`\${filePath}: No schema markup found\`);
      }
      
    } catch (error) {
      this.results.errors.push(\`Error reading \${filePath}: \${error.message}\`);
    }
  }

  detectSchemaType(schema) {
    const type = schema['@type'];
    if (!type) return 'unknown';
    
    if (typeof type === 'string') {
      return type.toLowerCase();
    }
    
    if (Array.isArray(type)) {
      return type[0].toLowerCase();
    }
    
    return 'unknown';
  }

  async validateDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const fullPath = path.join(dirPath, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        await this.validateDirectory(fullPath);
      } else if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.html')) {
        await this.validateFile(fullPath);
      }
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.results.errors.length + this.results.warnings.length + this.results.passed.length,
        errors: this.results.errors.length,
        warnings: this.results.warnings.length,
        passed: this.results.passed.length
      },
      results: this.results
    };
    
    // Save report
    const reportPath = 'schema-validation-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Print summary
    console.log('\\n📋 Schema Validation Summary:');
    console.log(\`Total Schemas: \${report.summary.total}\`);
    console.log(\`Errors: \${report.summary.errors} ❌\`);
    console.log(\`Warnings: \${report.summary.warnings} ⚠️\`);
    console.log(\`Passed: \${report.summary.passed} ✅\`);
    
    if (report.summary.errors > 0) {
      console.log('\\n❌ Errors:');
      this.results.errors.forEach(error => console.log(\`  - \${error}\`));
    }
    
    if (report.summary.warnings > 0) {
      console.log('\\n⚠️ Warnings:');
      this.results.warnings.forEach(warning => console.log(\`  - \${warning}\`));
    }
    
    console.log(\`\\n📄 Full report saved to: \${reportPath}\`);
    
    return report;
  }

  async run() {
    this.log('Starting schema markup validation...');
    
    // Validate src directory
    if (fs.existsSync('src')) {
      await this.validateDirectory('src');
    }
    
    return this.generateReport();
  }
}

// Run validation
async function main() {
  const validator = new SchemaValidator();
  
  try {
    await validator.run();
    process.exit(0);
  } catch (error) {
    console.error('Schema validation failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = SchemaValidator;`;

    try {
      const validatorPath = 'scripts/validate-schema.js';
      fs.writeFileSync(validatorPath, validatorContent);
      this.results.passed.push('Schema markup validator created');
    } catch (error) {
      this.results.errors.push(`Error creating schema validator: ${error.message}`);
    }
  }

  generateReport() {
    this.log('Generating schema markup setup report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.results.errors.length + this.results.warnings.length + this.results.passed.length,
        errors: this.results.errors.length,
        warnings: this.results.warnings.length,
        passed: this.results.passed.length
      },
      results: this.results,
      nextSteps: [
        'Add SchemaMarkup components to your pages',
        'Use pre-configured templates from schema-templates.ts',
        'Run schema validation with: node scripts/validate-schema.js',
        'Test schema markup with Google Rich Results Test',
        'Monitor schema markup in Google Search Console',
        'Update schema data based on content changes'
      ],
      implementation: {
        component: 'Use <SchemaMarkup type="product" data={...} /> in your pages',
        templates: 'Import pre-configured schemas from schema-templates.ts',
        validation: 'Run validation script to check schema markup',
        types: 'TypeScript definitions available in types/schema.ts'
      },
      schemaTypes: [
        'Organization - Company information',
        'Product/SoftwareApplication - Platform details',
        'Review - Customer testimonials',
        'Event - Webinars and conferences',
        'WebSite/WebPage - Site structure',
        'Article - Blog posts and content',
        'FAQPage - Frequently asked questions',
        'BreadcrumbList - Navigation structure'
      ]
    };
    
    // Save report to file
    const reportPath = 'schema-markup-setup-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Print summary
    console.log('\n📋 Schema Markup Setup Summary:');
    console.log(`Total Tasks: ${report.summary.total}`);
    console.log(`Errors: ${report.summary.errors} ❌`);
    console.log(`Warnings: ${report.summary.warnings} ⚠️`);
    console.log(`Passed: ${report.summary.passed} ✅`);
    
    if (report.summary.errors > 0) {
      console.log('\n❌ Errors:');
      this.results.errors.forEach(error => console.log(`  - ${error}`));
    }
    
    if (report.summary.warnings > 0) {
      console.log('\n⚠️ Warnings:');
      this.results.warnings.forEach(warning => console.log(`  - ${warning}`));
    }

    if (report.summary.passed > 0) {
      console.log('\n✅ Completed:');
      this.results.passed.forEach(passed => console.log(`  - ${passed}`));
    }
    
    console.log(`\n📄 Full report saved to: ${reportPath}`);
    
    return report;
  }

  async runSetup() {
    this.log('Starting schema markup expansion setup...');
    
    await this.createSchemaTypes();
    await this.createSchemaGenerator();
    await this.createSchemaTemplates();
    await this.createSchemaValidator();
    
    return this.generateReport();
  }
}

// Run the setup
async function main() {
  const setup = new SchemaMarkupSetup();
  
  try {
    await setup.runSetup();
    process.exit(0);
  } catch (error) {
    console.error('Schema markup setup failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = SchemaMarkupSetup;