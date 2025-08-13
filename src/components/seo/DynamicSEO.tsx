"use client";

import React from 'react';
import { generateStructuredData } from '@/lib/seo/utils';
import { SEO_CONFIG } from '@/lib/seo/constants';

interface DynamicSEOProps {
  baseTitle: string;
  baseDescription: string;
  baseKeywords: string;
  canonical: string;
  pageType: 'product' | 'article' | 'category' | 'landing';
  dynamicData?: {
    productName?: string;
    category?: string;
    author?: string;
    publishDate?: string;
    tags?: string[];
    price?: number;
    currency?: string;
    availability?: 'in_stock' | 'out_of_stock' | 'preorder';
    rating?: number;
    reviewCount?: number;
  };
  aBTests?: {
    title?: string[];
    description?: string[];
    cta?: string[];
  };
  personalization?: {
    userType?: 'enterprise' | 'government' | 'startup';
    location?: string;
    industry?: string;
  };
  structuredData?: object[];
}

export const DynamicSEO: React.FC<DynamicSEOProps> = ({
  baseTitle,
  baseDescription,
  baseKeywords,
  canonical,
  pageType,
  dynamicData = {},
  aBTests = {},
  personalization = {},
  structuredData = []
}) => {
  // Generate dynamic title based on page type and data
  const generateDynamicTitle = (): string => {
    let title = baseTitle;

    // Add product-specific information
    if (pageType === 'product' && dynamicData.productName) {
      title = `${dynamicData.productName} | ${baseTitle}`;
    }

    // Add category information
    if (dynamicData.category) {
      title = `${dynamicData.category} - ${title}`;
    }

    // Add personalization
    if (personalization.userType) {
      const userTypeMap = {
        enterprise: 'Enterprise',
        government: 'Government',
        startup: 'Startup'
      };
      title = `${userTypeMap[personalization.userType]} ${title}`;
    }

    // A/B test title variations
    if (aBTests.title && aBTests.title.length > 0) {
      const randomIndex = Math.floor(Math.random() * aBTests.title.length);
      title = aBTests.title[randomIndex];
    }

    return title;
  };

  // Generate dynamic description
  const generateDynamicDescription = (): string => {
    let description = baseDescription;

    // Add product-specific information
    if (pageType === 'product' && dynamicData.productName) {
      description = `${dynamicData.productName}: ${description}`;
    }

    // Add pricing information
    if (dynamicData.price) {
      const currency = dynamicData.currency || 'USD';
      description += ` Starting at ${currency}${dynamicData.price}.`;
    }

    // Add availability information
    if (dynamicData.availability) {
      const availabilityMap = {
        in_stock: 'Available now',
        out_of_stock: 'Coming soon',
        preorder: 'Pre-order available'
      };
      description += ` ${availabilityMap[dynamicData.availability]}.`;
    }

    // A/B test description variations
    if (aBTests.description && aBTests.description.length > 0) {
      const randomIndex = Math.floor(Math.random() * aBTests.description.length);
      description = aBTests.description[randomIndex];
    }

    return description;
  };

  // Generate dynamic keywords
  const generateDynamicKeywords = (): string => {
    let keywords = baseKeywords;

    // Add product-specific keywords
    if (dynamicData.productName) {
      keywords += `, ${dynamicData.productName}`;
    }

    // Add category keywords
    if (dynamicData.category) {
      keywords += `, ${dynamicData.category}`;
    }

    // Add tag keywords
    if (dynamicData.tags) {
      keywords += `, ${dynamicData.tags.join(', ')}`;
    }

    // Add personalization keywords
    if (personalization.userType) {
      keywords += `, ${personalization.userType} procurement`;
    }

    if (personalization.industry) {
      keywords += `, ${personalization.industry} procurement`;
    }

    return keywords;
  };

  // Generate product structured data
  const generateProductSchema = () => {
    if (pageType !== 'product' || !dynamicData.productName) return null;

    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": dynamicData.productName,
      "description": generateDynamicDescription(),
      "url": canonical,
      "brand": {
        "@type": "Brand",
        "name": "MyGETS"
      },
      "offers": {
        "@type": "Offer",
        "price": dynamicData.price || 1500,
        "priceCurrency": dynamicData.currency || "USD",
        "availability": dynamicData.availability === 'in_stock' 
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
        "seller": {
          "@type": "Organization",
          "name": "MyGETS"
        }
      },
      ...(dynamicData.rating && {
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": dynamicData.rating,
          "ratingCount": dynamicData.reviewCount || 0
        }
      })
    };
  };

  // Generate article structured data
  const generateArticleSchema = () => {
    if (pageType !== 'article') return null;

    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": generateDynamicTitle(),
      "description": generateDynamicDescription(),
      "author": {
        "@type": "Person",
        "name": dynamicData.author || "MyGETS Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "MyGETS",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mygets.net/logo.svg"
        }
      },
      "datePublished": dynamicData.publishDate || new Date().toISOString(),
      "dateModified": new Date().toISOString(),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonical
      },
      "keywords": generateDynamicKeywords()
    };
  };

  // Generate breadcrumb schema
  const generateBreadcrumbSchema = () => {
    const breadcrumbs = [
      { name: "Home", url: "https://mygets.net" }
    ];

    if (dynamicData.category) {
      breadcrumbs.push({
        name: dynamicData.category,
        url: `https://mygets.net/${dynamicData.category.toLowerCase().replace(/\s+/g, '-')}`
      });
    }

    if (dynamicData.productName) {
      breadcrumbs.push({
        name: dynamicData.productName,
        url: canonical
      });
    }

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };
  };

  // Combine all structured data
  const allStructuredData = [
    ...structuredData,
    generateProductSchema(),
    generateArticleSchema(),
    generateBreadcrumbSchema()
  ].filter((item): item is object => item !== null);

  return (
    <>
      {/* Embed JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(allStructuredData) }}
      />
    </>
  );
};

// Hook for A/B testing
export const useABTest = (testName: string, variations: string[]) => {
  const [selectedVariation, setSelectedVariation] = React.useState<string>('');

  React.useEffect(() => {
    // Get stored variation or select random one
    const stored = localStorage.getItem(`ab_test_${testName}`);
    if (stored && variations.includes(stored)) {
      setSelectedVariation(stored);
    } else {
      const randomVariation = variations[Math.floor(Math.random() * variations.length)];
      localStorage.setItem(`ab_test_${testName}`, randomVariation);
      setSelectedVariation(randomVariation);
    }
  }, [testName, variations]);

  return selectedVariation;
};

// Hook for personalization
export const usePersonalization = () => {
  const [userData, setUserData] = React.useState({
    userType: null as string | null,
    location: null as string | null,
    industry: null as string | null
  });

  React.useEffect(() => {
    // Detect user type based on URL or other signals
    const detectUserType = () => {
      const path = window.location.pathname;
      if (path.includes('/enterprise')) return 'enterprise';
      if (path.includes('/government')) return 'government';
      if (path.includes('/startup')) return 'startup';
      return null;
    };

    // Get location from IP or user input
    const getLocation = () => {
      // This would typically use a geolocation service
      return null;
    };

    setUserData({
      userType: detectUserType(),
      location: getLocation(),
      industry: null
    });
  }, []);

  return userData;
};

// Generate metadata for Next.js App Router
export const generateDynamicMetadata = (props: DynamicSEOProps) => {
  const {
    baseTitle,
    baseDescription,
    baseKeywords,
    canonical,
    pageType,
    dynamicData = {},
    aBTests = {},
    personalization = {}
  } = props;

  // Generate dynamic title
  let title = baseTitle;
  if (pageType === 'product' && dynamicData.productName) {
    title = `${dynamicData.productName} | ${baseTitle}`;
  }
  if (dynamicData.category) {
    title = `${dynamicData.category} - ${title}`;
  }
  if (personalization.userType) {
    const userTypeMap = {
      enterprise: 'Enterprise',
      government: 'Government',
      startup: 'Startup'
    };
    title = `${userTypeMap[personalization.userType]} ${title}`;
  }

  // Generate dynamic description
  let description = baseDescription;
  if (pageType === 'product' && dynamicData.productName) {
    description = `${dynamicData.productName}: ${description}`;
  }
  if (dynamicData.price) {
    const currency = dynamicData.currency || 'USD';
    description += ` Starting at ${currency}${dynamicData.price}.`;
  }

  return {
    title,
    description,
    keywords: baseKeywords,
    openGraph: {
      title,
      description,
      url: canonical,
      type: pageType === 'article' ? 'article' : 'website',
      ...(pageType === 'article' && dynamicData.publishDate && {
        publishedTime: dynamicData.publishDate,
        authors: [dynamicData.author || 'MyGETS Team']
      })
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    },
    alternates: {
      canonical
    }
  };
};

export default {
  DynamicSEO,
  useABTest,
  usePersonalization,
  generateDynamicMetadata
};