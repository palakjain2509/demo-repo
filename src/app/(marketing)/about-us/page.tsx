import { generatePageSEO } from '@/lib/seo/utils';
import AboutUsContent from './AboutUsContent';

const seoData = generatePageSEO({ pageKey: 'about-us', path: '/about-us' });

export const metadata = seoData.metadata;

export default function AboutUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: seoData.jsonLd }}
      />
      <AboutUsContent />
    </>
  );
}

