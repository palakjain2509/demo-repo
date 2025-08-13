"use client";

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const gtag = typeof window !== 'undefined' ? window.gtag : undefined;

import React, { useEffect, useRef } from 'react';

interface CacheConfig {
  name: string;
  version: string;
  urls: string[];
  maxAge?: number;
  strategy?: 'cache-first' | 'network-first' | 'stale-while-revalidate';
}

interface PerformanceConfig {
  enableServiceWorker?: boolean;
  enablePreloading?: boolean;
  enablePrefetching?: boolean;
  enableCompression?: boolean;
  cacheStrategies?: CacheConfig[];
}

export const CacheOptimizer: React.FC<PerformanceConfig> = ({
  enableServiceWorker = true,
  enablePreloading = false, // Disabled by default to prevent preload warnings
  enablePrefetching = false, // Disabled by default to prevent performance issues
  enableCompression = true,
  cacheStrategies = []
}) => {
  const serviceWorkerRef = useRef<ServiceWorker | null>(null);

  // Register service worker for caching
  useEffect(() => {
    if (!enableServiceWorker || typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return;
    }

    const registerServiceWorker = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        serviceWorkerRef.current = registration.active;
        
        console.log('Service Worker registered successfully:', registration);
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    };

    registerServiceWorker();
  }, [enableServiceWorker]);

  // Preload critical resources - only if explicitly enabled
  useEffect(() => {
    if (!enablePreloading) return;

    const criticalResources = [
      { href: '/logo.svg', as: 'image', type: 'image/svg+xml' }
    ];

    // Preload immediately for critical resources
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      link.type = resource.type;
      // Only add crossorigin for external resources
      if (resource.href.startsWith('http')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }, [enablePreloading]);

  // Prefetch non-critical resources - only if explicitly enabled
  useEffect(() => {
    if (!enablePrefetching) return;

    const prefetchResources = [
      '/platform',
      '/solutions',
      '/pricing',
      '/resources/faq'
    ];

    const prefetchResource = (url: string) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    };

    // Prefetch on idle with longer delay to prevent conflicts
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        setTimeout(() => {
          prefetchResources.forEach(prefetchResource);
        }, 2000); // 2 second delay
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        prefetchResources.forEach(prefetchResource);
      }, 3000); // 3 second delay
    }
  }, [enablePrefetching]);

  return null;
};

// Service Worker for advanced caching
export const createServiceWorker = (cacheStrategies: CacheConfig[]) => {
  const swCode = `
    const CACHE_NAME = 'mygets-cache-v1';
    const STATIC_CACHE = 'mygets-static-v1';

    const STATIC_ASSETS = [
      '/logo.svg',
      '/favicon.svg'
    ];

    // Install event - simplified
    self.addEventListener('install', (event) => {
      event.waitUntil(
        caches.open(STATIC_CACHE).then((cache) => {
          return cache.addAll(STATIC_ASSETS);
        })
      );
      self.skipWaiting();
    });

    // Activate event - simplified
    self.addEventListener('activate', (event) => {
      event.waitUntil(
        caches.keys().then((cacheNames) => {
          return Promise.all(
            cacheNames.map((cacheName) => {
              if (cacheName !== STATIC_CACHE) {
                return caches.delete(cacheName);
              }
            })
          );
        })
      );
      self.clients.claim();
    });

    // Fetch event - simplified strategy
    self.addEventListener('fetch', (event) => {
      const { request } = event;
      const url = new URL(request.url);

      // Skip non-GET requests
      if (request.method !== 'GET') {
        return;
      }

      // Only cache static assets
      if (STATIC_ASSETS.includes(url.pathname)) {
        event.respondWith(
          caches.match(request).then((response) => {
            return response || fetch(request);
          })
        );
        return;
      }

      // For all other requests, use network first
      event.respondWith(
        fetch(request).catch(() => {
          return caches.match(request);
        })
      );
    });
  `;

  return swCode;
};

// Performance monitoring hook
export const usePerformanceMonitoring = (pageName: string) => {
  const metricsRef = useRef({
    pageLoadTime: 0,
    domContentLoaded: 0,
    firstPaint: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0
  });

  useEffect(() => {
    const startTime = performance.now();

    // Track page load time
    const trackPageLoad = () => {
      const loadTime = performance.now() - startTime;
      metricsRef.current.pageLoadTime = loadTime;

      // Send to analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'page_load_time', {
          event_category: 'Performance',
          event_label: pageName,
          value: Math.round(loadTime)
        });
      }
    };

    // Track DOM content loaded
    const trackDOMContentLoaded = () => {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        metricsRef.current.domContentLoaded = navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart;
      }
    };

    // Track paint events
    const paintObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.name === 'first-paint') {
          metricsRef.current.firstPaint = entry.startTime;
        }
        if (entry.name === 'first-contentful-paint') {
          metricsRef.current.firstContentfulPaint = entry.startTime;
        }
      });
    });

    paintObserver.observe({ entryTypes: ['paint'] });

    // Track LCP
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      metricsRef.current.largestContentfulPaint = lastEntry.startTime;
    });

    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Track FID
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        metricsRef.current.firstInputDelay = entry.processingStart - entry.startTime;
      });
    });

    fidObserver.observe({ entryTypes: ['first-input'] });

    // Track CLS
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        metricsRef.current.cumulativeLayoutShift += entry.value;
      });
    });

    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Add event listeners
    window.addEventListener('load', trackPageLoad);
    document.addEventListener('DOMContentLoaded', trackDOMContentLoaded);

    // Cleanup
    return () => {
      window.removeEventListener('load', trackPageLoad);
      document.removeEventListener('DOMContentLoaded', trackDOMContentLoaded);
      paintObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, [pageName]);

  return metricsRef.current;
};

// Resource hints component - simplified to prevent conflicts
export const ResourceHints: React.FC = () => {
  useEffect(() => {
    // Only add DNS prefetch for external domains
    const externalDomains = [
      'https://www.google-analytics.com',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Preconnect to critical domains with proper crossorigin
    const criticalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    criticalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);

  return null;
};

export default {
  CacheOptimizer,
  createServiceWorker,
  usePerformanceMonitoring,
  ResourceHints
}; 