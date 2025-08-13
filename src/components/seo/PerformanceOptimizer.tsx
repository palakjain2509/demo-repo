"use client";

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const gtag = typeof window !== 'undefined' ? window.gtag : undefined;

import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'empty',
  blurDataURL
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};

interface LazySectionProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '50px',
  className = ''
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div ref={sectionRef} className={className}>
      {isVisible ? children : (
        <div className="animate-pulse bg-gray-200 rounded-lg" style={{ minHeight: '200px' }} />
      )}
    </div>
  );
};

interface PreloadResourceProps {
  href: string;
  as?: string;
  type?: string;
  crossOrigin?: string;
}

export const PreloadResource: React.FC<PreloadResourceProps> = ({
  href,
  as = 'fetch',
  type,
  crossOrigin
}) => {
  return (
    <link
      rel="preload"
      href={href}
      as={as}
      type={type}
      crossOrigin={crossOrigin as any}
    />
  );
};

interface CriticalCSSProps {
  children: React.ReactNode;
}

export const CriticalCSS: React.FC<CriticalCSSProps> = ({ children }) => {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* Critical CSS for above-the-fold content */
          .hero-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #1e40af 100%);
            color: white;
          }
          
          .hero-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            display: flex;
            align-items: center;
            gap: 3rem;
          }
          
          .hero-text {
            flex: 1;
          }
          
          .hero-title {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
            line-height: 1.2;
          }
          
          .hero-description {
            font-size: 1.25rem;
            margin-bottom: 2rem;
            opacity: 0.9;
          }
          
          .hero-buttons {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
          }
          
          .btn-primary {
            background: white;
            color: #1e40af;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 600;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
          }
          
          .btn-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 600;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
          }
          
          .hero-image {
            flex: 1;
            max-width: 500px;
          }
          
          @media (max-width: 768px) {
            .hero-content {
              flex-direction: column;
              text-align: center;
            }
            
            .hero-title {
              font-size: 2rem;
            }
            
            .hero-buttons {
              justify-content: center;
            }
          }
        `
      }}
    />
  );
};

interface PerformanceMonitorProps {
  pageName: string;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ pageName }) => {
  React.useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        console.log(`LCP for ${pageName}:`, lastEntry.startTime);
        
        // Send to analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: pageName,
            value: Math.round(lastEntry.startTime),
            metric_value: lastEntry.startTime,
            metric_id: lastEntry.id || 'lcp',
            metric_name: 'LCP'
          });
        }
      });
      
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      
      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          console.log(`FID for ${pageName}:`, entry.processingStart - entry.startTime);
          
          if (typeof gtag !== 'undefined') {
            gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: pageName,
              value: Math.round(entry.processingStart - entry.startTime),
              metric_value: entry.processingStart - entry.startTime,
              metric_id: entry.id || 'fid',
              metric_name: 'FID'
            });
          }
        });
      });
      
      fidObserver.observe({ entryTypes: ['first-input'] });
      
      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        
        console.log(`CLS for ${pageName}:`, clsValue);
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: pageName,
            value: Math.round(clsValue * 1000) / 1000,
            metric_value: clsValue,
            metric_id: 'cls',
            metric_name: 'CLS'
          });
        }
      });
      
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      
      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, [pageName]);

  return null;
};

export default {
  OptimizedImage,
  LazySection,
  PreloadResource,
  CriticalCSS,
  PerformanceMonitor
};