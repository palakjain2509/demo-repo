'use client';

import { useEffect, useRef, useState } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableLazyLoading?: boolean;
  enableIntersectionObserver?: boolean;
  enableResourceHints?: boolean;
}

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
}

/**
 * PerformanceOptimizer Component
 * 
 * Advanced performance optimization component that implements:
 * - Image lazy loading with Intersection Observer
 * - Resource preloading hints
 * - Performance monitoring
 * - Animation optimization
 * - Memory management
 */
export default function PerformanceOptimizer({
  children,
  enableLazyLoading = true,
  enableIntersectionObserver = true,
  enableResourceHints = true
}: PerformanceOptimizerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setPerformanceMetrics(prev => ({
            ...prev,
            fcp: fcp.startTime
          }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setPerformanceMetrics(prev => ({
            ...prev,
            lcp: lcp.startTime
          }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1] as PerformanceEventTiming;
        if (fid && 'processingStart' in fid) {
          setPerformanceMetrics(prev => ({
            ...prev,
            fid: fid.processingStart - fid.startTime
          }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShift = entry as any;
          if (!layoutShift.hadRecentInput) {
            clsValue += layoutShift.value;
          }
        }
        setPerformanceMetrics(prev => ({
          ...prev,
          cls: clsValue
        }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (enableIntersectionObserver && typeof window !== 'undefined') {
      const options = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
      };

      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Lazy load images
            if (enableLazyLoading) {
              const images = entry.target.querySelectorAll('img[data-src]');
              images.forEach((img) => {
                const imgElement = img as HTMLImageElement;
                if (imgElement.dataset.src) {
                  imgElement.src = imgElement.dataset.src;
                  imgElement.removeAttribute('data-src');
                  imgElement.classList.add('loaded');
                }
              });
            }

            // Add animation classes
            const animatedElements = entry.target.querySelectorAll('[data-animate]');
            animatedElements.forEach((element) => {
              element.classList.add('animate-in');
            });
          }
        });
      }, options);

      // Observe all sections with data-observe attribute
      const sections = document.querySelectorAll('[data-observe]');
      sections.forEach((section) => {
        observerRef.current?.observe(section);
      });

      return () => {
        observerRef.current?.disconnect();
      };
    }
  }, [enableIntersectionObserver, enableLazyLoading]);

  // Resource hints optimization
  useEffect(() => {
    if (enableResourceHints && typeof window !== 'undefined') {
      // Preload critical resources
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/images/hero-bg.jpg',
        '/logo.svg'
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.includes('.woff2') ? 'font' : 
                  resource.includes('.jpg') || resource.includes('.png') ? 'image' : 'image';
        if (resource.includes('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });

      // DNS prefetch for external domains
      const externalDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com'
      ];

      externalDomains.forEach((domain) => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      });
    }
  }, [enableResourceHints]);

  // Memory management
  useEffect(() => {
    const cleanup = () => {
      // Clear any cached data that's not needed
      if (typeof window !== 'undefined' && 'caches' in window) {
        caches.keys().then((cacheNames) => {
          cacheNames.forEach((cacheName) => {
            if (cacheName.includes('old-')) {
              caches.delete(cacheName);
            }
          });
        });
      }
    };

    // Cleanup on page unload
    window.addEventListener('beforeunload', cleanup);
    
    return () => {
      window.removeEventListener('beforeunload', cleanup);
    };
  }, []);

  // Debug mode - show performance metrics
  const showDebug = process.env.NODE_ENV === 'development';
  
  if (showDebug && performanceMetrics) {
    console.log('Performance Metrics:', performanceMetrics);
  }

  return (
    <>
      {children}
      
      {/* Performance monitoring overlay (development only) */}
      {showDebug && performanceMetrics && (
        <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-xs z-50">
          <div className="font-bold mb-2">Performance Metrics</div>
          <div>FCP: {performanceMetrics.fcp?.toFixed(2)}ms</div>
          <div>LCP: {performanceMetrics.lcp?.toFixed(2)}ms</div>
          <div>FID: {performanceMetrics.fid?.toFixed(2)}ms</div>
          <div>CLS: {performanceMetrics.cls?.toFixed(3)}</div>
        </div>
      )}
    </>
  );
}

/**
 * Custom hook for lazy loading images
 */
export function useLazyImage(src: string, fallback?: string) {
  const [imageSrc, setImageSrc] = useState(fallback || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NzM4NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (src) {
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.onerror = () => {
        if (fallback) {
          setImageSrc(fallback);
        }
      };
      img.src = src;
    }
  }, [src, fallback]);

  return { imageSrc, isLoaded };
}

/**
 * Custom hook for intersection observer
 */
export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      setEntry(entry);
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options]);

  return { elementRef, isIntersecting, entry };
} 