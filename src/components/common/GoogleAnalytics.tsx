'use client';

import Script from 'next/script';
import { useAnalytics } from '@/lib/analytics/analytics';

export default function GoogleAnalytics() {
  const { trackEvent, trackPageView, trackConversion } = useAnalytics();

  // Example of how to use the tracking functions
  // These would typically be called in response to user actions or component lifecycle events
  const handleSignupClick = () => {
    trackEvent('button_click', 'engagement', 'signup_button');
  };

  const handlePageView = () => {
    trackPageView('/about-us', 'About Us Page');
  };

  const handleConversion = () => {
    trackConversion('conversion_id', 'signup_completed', 100);
  };

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Google Analytics script loaded successfully');
          // You could track script load as an event
          trackEvent('script_load', 'analytics', 'google_analytics_loaded');
        }}
        onError={(e) => {
          console.error('Error loading Google Analytics script:', e);
          // You could track script load error as an event
          trackEvent('script_error', 'analytics', 'google_analytics_load_failed');
        }}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
            debug_mode: true,
            send_page_view: true
          });
          console.log('Google Analytics initialized with ID:', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  );
} 