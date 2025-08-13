import React from 'react';
import type { Metadata } from 'next';
import { generatePageSEO } from '@/lib/seo';
import HomeContent from './(marketing)/home/HomeContent';
import StartupLandingContent from './(marketing)/home/StartupLandingContent';

// Generate metadata for the Home page with additional structured data
const seoData = generatePageSEO({
  pageKey: 'home',
  path: '/',
  pageType: 'website',
  customStructuredData: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MyGETS",
      "url": "https://mygets.net",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mygets.net/logo.svg",
        "width": 200,
        "height": 60
      },
      "description": "OCDS-native procurement intelligence platform that enhances transparency, ensures compliance, and delivers strategic insights through structured data.",
      "foundingDate": "2024",
      "industry": "Procurement Software",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "contact@mygets.net",
        "url": "https://mygets.net/contact"
      },
      "sameAs": [
        "https://linkedin.com/company/mygets",
        "https://twitter.com/mygets"
      ],
      "knowsAbout": [
        "OCDS",
        "Procurement Intelligence",
        "Contract Management",
        "Risk Detection",
        "Compliance Management",
        "Open Contracting"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "MyGETS Procurement Intelligence Platform",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "Transform procurement data into actionable intelligence with automated risk detection, real-time analytics, and comprehensive compliance management.",
      "url": "https://mygets.net",
      "offers": {
        "@type": "Offer",
        "price": "1500",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "45"
      },
      "featureList": [
        "Real-time risk detection",
        "Predictive analytics",
        "OCDS compliance",
        "Automated reporting",
        "AI-powered insights",
        "Contract lifecycle management",
        "Supplier management",
        "Spend analytics"
      ],
      "screenshot": "https://mygets.net/images/platform-preview.jpg",
      "downloadUrl": "https://mygets.net/request-demo",
      "installUrl": "https://mygets.net/early-adopter-program"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is MyGETS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MyGETS is an OCDS-native procurement intelligence platform that streamlines the entire procurement lifecycle with built-in compliance, transparency, and analytics."
          }
        },
        {
          "@type": "Question",
          "name": "What is OCDS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Open Contracting Data Standard (OCDS) is an internationally recognized framework for publishing structured procurement data that enhances transparency and enables better analysis."
          }
        },
        {
          "@type": "Question",
          "name": "How does MyGETS differ from traditional systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MyGETS combines procurement lifecycle management with advanced risk intelligence, automatically structures data in OCDS format, and provides real-time risk assessment with predictive analytics."
          }
        },
        {
          "@type": "Question",
          "name": "What are the benefits of using MyGETS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MyGETS provides enhanced transparency, automated compliance, real-time risk detection, predictive analytics, and streamlined procurement processes that save time and reduce costs."
          }
        },
        {
          "@type": "Question",
          "name": "Is MyGETS suitable for both public and private sectors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, MyGETS is designed to serve both public sector organizations requiring OCDS compliance and private sector companies seeking procurement intelligence and risk management."
          }
        }
      ]
    }
  ]
});

export const metadata: Metadata = seoData.metadata;

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: seoData.jsonLd }}
      />
      {/* <HomeContent /> */}
      <StartupLandingContent />
    </>
  );
}