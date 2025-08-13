import { generatePageSEO } from '@/lib/seo/utils';
import PhasedLaunchContent from './PhasedLaunchContent';

const seoData = generatePageSEO({ pageKey: 'phased-launch', path: '/phased-launch' });

export const metadata = seoData.metadata;

export default function PhasedLaunchPage() {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: seoData.jsonLd }}
      />
      <PhasedLaunchContent />
    </>
  );
}

