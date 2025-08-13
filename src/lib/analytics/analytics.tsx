'use client';

/**
 * Google Analytics integration
 * 
 * This file provides Google Analytics integration for the MyGETS website.
 * It includes a React component for embedding the GA script and a hook for tracking events.
 * 
 * TODO: Replace placeholder tracking ID with actual production ID when available.
 */

import React, { Suspense } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// Placeholder tracking ID - replace with actual ID in production
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-PLACEHOLDER123';

/**
 * GoogleAnalytics component
 * 
 * Embeds Google Analytics script in the application.
 * Should be included in the root layout.
 */
const GoogleAnalyticsInner: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Track page views
  useEffect(() => {
    if (pathname) {
      // Construct URL with search params if they exist
      let url = pathname;
      if (searchParams?.toString()) {
        url += `?${searchParams.toString()}`;
      }
      
      // Send pageview to Google Analytics
      window.gtag?.('config', GA_TRACKING_ID, {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);
  
  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export const GoogleAnalytics: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsInner />
    </Suspense>
  );
};

/**
 * useAnalytics hook
 * 
 * Provides functions for tracking events in Google Analytics.
 * 
 * @returns Object with tracking functions
 */
export const useAnalytics = () => {
  /**
   * Track an event in Google Analytics
   * 
   * @param action The action name
   * @param category The event category
   * @param label Optional label for the event
   * @param value Optional value for the event
   */
  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
      
      console.log(`Analytics event tracked: ${action} (${category})`, { label, value });
    } else {
      console.log('Analytics event tracking placeholder (gtag not loaded):', {
        action,
        category,
        label,
        value,
      });
    }
  };
  
  /**
   * Track a page view
   * 
   * @param url The URL to track
   * @param title The page title
   */
  const trackPageView = (url: string, title?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
        page_title: title,
      });
      
      console.log(`Analytics page view tracked: ${url}`, { title });
    } else {
      console.log('Analytics page view placeholder (gtag not loaded):', {
        url,
        title,
      });
    }
  };
  
  /**
   * Track a conversion
   * 
   * @param conversionId The conversion ID
   * @param label The conversion label
   * @param value The conversion value
   */
  const trackConversion = (
    conversionId: string,
    label?: string,
    value?: number
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: `${GA_TRACKING_ID}/${conversionId}`,
        event_label: label,
        value: value,
      });
      
      console.log(`Analytics conversion tracked: ${conversionId}`, { label, value });
    } else {
      console.log('Analytics conversion placeholder (gtag not loaded):', {
        conversionId,
        label,
        value,
      });
    }
  };
  
  return {
    trackEvent,
    trackPageView,
    trackConversion,
  };
};

// Add type definitions for window.gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
