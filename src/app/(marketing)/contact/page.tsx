import { generatePageSEO } from '@/lib/seo/utils';
import ContactContent from './ContactContent';

const seoData = generatePageSEO({ pageKey: 'contact', path: '/contact' });

export const metadata = seoData.metadata;

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.jsonLd) }}
      />
      <ContactContent />
    </>
  );
}

