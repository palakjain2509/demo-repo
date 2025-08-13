import { Metadata } from 'next';
import { SEO_CONFIG, ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, getPageSEO, getCanonicalUrl, generateBreadcrumbs } from './constants';

interface GenerateMetadataOptions {
  title?: string;
  description?: string;
  keywords?: string;
  path: string;
  pageType?: 'website' | 'article';
  image?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  alternates?: {
    canonical?: string;
    languages?: Record<string, string>;
  };
}

export function generateMetadata(options: GenerateMetadataOptions): Metadata {
  const {
    title,
    description,
    keywords,
    path,
    pageType = 'website',
    image = SEO_CONFIG.defaultImage,
    noIndex = false,
    noFollow = false,
    article,
    alternates,
  } = options;

  const canonicalUrl = alternates?.canonical || getCanonicalUrl(path);
  const fullTitle = title || SEO_CONFIG.defaultTitle;
  const fullDescription = description || SEO_CONFIG.defaultDescription;
  const fullKeywords = keywords || SEO_CONFIG.defaultKeywords;

  const robots = noIndex || noFollow 
    ? `${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'}`
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

  const metadata: Metadata = {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords,
    authors: [{ name: SEO_CONFIG.author }],
    creator: SEO_CONFIG.author,
    publisher: SEO_CONFIG.siteName,
    robots,
    alternates: {
      canonical: canonicalUrl,
      ...alternates,
    },
    openGraph: {
      type: pageType,
      url: canonicalUrl,
      title: fullTitle,
      description: fullDescription,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: SEO_CONFIG.locale,
      ...(article && {
        publishedTime: article.publishedTime,
        modifiedTime: article.modifiedTime,
        authors: article.author ? [article.author] : [SEO_CONFIG.author],
        section: article.section,
        tags: article.tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      site: SEO_CONFIG.twitterHandle,
      creator: SEO_CONFIG.twitterHandle,
      title: fullTitle,
      description: fullDescription,
      images: [image],
    },
    viewport: 'width=device-width, initial-scale=1.0',
    themeColor: SEO_CONFIG.themeColor,
    manifest: '/manifest.json',
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    other: {
      'msapplication-TileColor': SEO_CONFIG.themeColor,
      'theme-color': SEO_CONFIG.themeColor,
    },
  };

  return metadata;
}

export function generateStructuredData(options: {
  pageType: 'website' | 'article' | 'faq' | 'organization' | 'breadcrumb' | 'product';
  title: string;
  description: string;
  url: string;
  image?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  faqData?: Array<{ question: string; answer: string }>;
  product?: {
    name: string;
    description: string;
    brand: string;
    offers?: {
      price?: string;
      currency?: string;
      availability?: string;
    };
  };
}) {
  const schemas: any[] = [];

  // Always include organization schema
  schemas.push(ORGANIZATION_SCHEMA);

  // Website schema for main pages
  if (options.pageType === 'website') {
    schemas.push(WEBSITE_SCHEMA);
  }

  // Breadcrumb schema
  if (options.breadcrumbs && options.breadcrumbs.length > 1) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": options.breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url.startsWith('http') ? item.url : `${SEO_CONFIG.siteUrl}${item.url}`,
      })),
    });
  }

  // Article schema
  if (options.pageType === 'article' && options.article) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": options.title,
      "description": options.description,
      "image": options.image || SEO_CONFIG.defaultImage,
      "author": {
        "@type": "Person",
        "name": options.article.author || SEO_CONFIG.author,
      },
      "publisher": {
        "@type": "Organization",
        "name": SEO_CONFIG.siteName,
        "logo": {
          "@type": "ImageObject",
          "url": `${SEO_CONFIG.siteUrl}/logo.svg`,
        },
      },
      "datePublished": options.article.publishedTime,
      "dateModified": options.article.modifiedTime || options.article.publishedTime,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": options.url,
      },
      "articleSection": options.article.section,
      "keywords": options.article.tags?.join(', '),
    });
  }

  // FAQ schema
  if (options.pageType === 'faq' && options.faqData) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": options.faqData.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
    });
  }

  // Product schema
  if (options.pageType === 'product' && options.product) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": options.product.name,
      "description": options.product.description,
      "brand": {
        "@type": "Brand",
        "name": options.product.brand,
      },
      "image": options.image || SEO_CONFIG.defaultImage,
      ...(options.product.offers && {
        "offers": {
          "@type": "Offer",
          "price": options.product.offers.price,
          "priceCurrency": options.product.offers.currency || "AUD",
          "availability": options.product.offers.availability || "https://schema.org/InStock",
        },
      }),
    });
  }

  return schemas;
}

export function generateJsonLd(schemas: any[]): string {
  return JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
}

// Utility function to get page-specific metadata
export function getPageMetadata(pageKey: string, path: string, customData?: any): Metadata {
  const seoConfig = getPageSEO(pageKey as any, customData);
  return generateMetadata({
    ...seoConfig,
    path,
    ...customData,
  });
}

// Utility function to generate complete SEO data for a page
export function generatePageSEO(options: {
  pageKey: string;
  path: string;
  customTitle?: string;
  customDescription?: string;
  customKeywords?: string;
  pageType?: 'website' | 'article';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  faqData?: Array<{ question: string; answer: string }>;
  product?: any;
  customStructuredData?: any[];
}) {
  const { pageKey, path, customTitle, customDescription, customKeywords, pageType = 'website', customStructuredData, ...rest } = options;
  
  const seoConfig = getPageSEO(pageKey as any);
  const title = customTitle || seoConfig.title;
  const description = customDescription || seoConfig.description;
  const keywords = customKeywords || seoConfig.keywords;
  const canonicalUrl = getCanonicalUrl(path);
  const breadcrumbs = generateBreadcrumbs(path);

  const metadata = generateMetadata({
    title,
    description,
    keywords,
    path,
    pageType,
    ...rest,
  });

  const structuredDataPageType = pageType === 'article' ? 'article' : 
                                 rest.faqData ? 'faq' : 
                                 rest.product ? 'product' : 'website';

  const structuredData = generateStructuredData({
    pageType: structuredDataPageType as any,
    title,
    description,
    url: canonicalUrl,
    breadcrumbs,
    ...rest,
  });

  // Combine with custom structured data if provided
  const allStructuredData = customStructuredData 
    ? [...structuredData, ...customStructuredData]
    : structuredData;

  return {
    metadata,
    structuredData: allStructuredData,
    jsonLd: generateJsonLd(allStructuredData),
    canonicalUrl,
    breadcrumbs,
  };
}