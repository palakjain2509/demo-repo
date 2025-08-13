import { Metadata } from "next";
import { generatePageSEO } from '@/lib/seo/utils';
import OcdsReportingContent from './OcdsReportingContent';

const seoData = generatePageSEO({ 
  pageKey: 'ocds-reporting', 
  path: '/platform/ocds-reporting',
  article: {
    publishedTime: "2024-10-04T09:00:00+10:00",
    modifiedTime: "2025-05-11T13:00:00+10:00",
    author: "https://mygets.net/about-us",
    tags: ["OCDS", "Open Contracting", "Transparency", "Procurement Data", "Compliance", "Public Sector", "MyGets Platform"]
  }
});

export const metadata: Metadata = seoData.metadata;

export default function OcdsReportingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.jsonLd) }}
      />
      <OcdsReportingContent />
    </>
  );
}

