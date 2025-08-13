import React from 'react';
import type { Metadata } from 'next';
import { generatePageSEO } from '@/lib/seo';
import StartupLandingContent from '../(marketing)/home/StartupLandingContent';

// Generate metadata for the Startup Landing page
const seoData = generatePageSEO({
  pageKey: 'startup-landing',
  path: '/startup-landing',
  pageType: 'website',
  customTitle: "Stop Losing Money on Hidden Procurement Risks | MyGETS",
  customDescription: "MyGETS automatically detects procurement risks, ensures compliance, and can save you up to 25% on costs. Be among the first to transform your procurement in 30 days.",
  customStructuredData: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MyGETS",
      "url": "https://mygets.net",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mygets.net/logo.svg"
      },
      "description": "Leading procurement transformation platform with AI-powered risk detection and compliance automation.",
       "foundingDate": "2024",
       "industry": "Procurement Technology"
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "MyGETS Procurement Platform",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web-based",
      "offers": {
         "@type": "Offer",
         "price": "0",
         "priceCurrency": "USD",
         "description": "Free risk assessment and demo available"
       },
      "featureList": [
        "AI-powered risk detection",
        "Automated compliance reporting", 
        "Real-time procurement analytics",
        "OCDS standard compliance",
        "Unified procurement dashboard"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Transform Procurement in 30 Days | MyGETS",
      "description": "Stop losing money on hidden procurement risks. Automated detection, compliance, and 25% cost savings.",
      "url": "https://mygets.net/startup-landing"
    }
  ]
});

export const metadata: Metadata = seoData.metadata;

export default function StartupLandingPage() {
  return <StartupLandingContent />;
}