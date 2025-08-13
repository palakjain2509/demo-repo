// Schema.org Type Definitions for MyGETS

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
};