'use client';

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
} from '../../types/schema';

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
        location: {
          '@type': 'VirtualLocation' as const,
          url: data.url || 'https://mygets.net'
        },
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
        '@type': 'AggregateRating' as const,
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
        throw new Error(`Unknown schema type: ${type}`);
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
        id={id || `schema-${type}`}
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

export default SchemaMarkupGenerator;