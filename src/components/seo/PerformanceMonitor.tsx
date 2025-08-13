"use client";

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const gtag = typeof window !== 'undefined' ? window.gtag : undefined;

import React, { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcp: number;
  lcpElement?: string;
  clsElements?: Array<{ element: string; value: number }>;
}

interface PerformanceMonitorProps {
  pageName: string;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealUserMonitoring?: boolean;
  enableWebVitals?: boolean;
  enableInteractionTracking?: boolean;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  pageName,
  onMetricsUpdate,
  enableRealUserMonitoring = true,
  enableWebVitals = true,
  enableInteractionTracking = true
}) => {
  const metricsRef = useRef<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcp: 0
  });

  const sendToAnalytics = (metricName: string, value: number, additionalData?: any) => {
    // Send to Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: pageName,
        value: Math.round(value),
        metric_value: value,
        metric_id: metricName,
        metric_name: metricName,
        ...additionalData
      });
    }

    // Send to custom analytics
    if (onMetricsUpdate) {
      onMetricsUpdate(metricsRef.current);
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 ${metricName}:`, value, additionalData);
    }
  };

  useEffect(() => {
    if (!enableWebVitals || typeof window === 'undefined') return;

    // Track Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      metricsRef.current.ttfb = ttfb;
      sendToAnalytics('TTFB', ttfb);
    }

    // Track First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries[entries.length - 1];
      metricsRef.current.fcp = fcpEntry.startTime;
      sendToAnalytics('FCP', fcpEntry.startTime);
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Track Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as any;
      metricsRef.current.lcp = lastEntry.startTime;
      metricsRef.current.lcpElement = lastEntry.element?.tagName || 'unknown';
      sendToAnalytics('LCP', lastEntry.startTime, {
        element: lastEntry.element?.tagName,
        url: lastEntry.url
      });
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Track First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        const fid = entry.processingStart - entry.startTime;
        metricsRef.current.fid = fid;
        sendToAnalytics('FID', fid, {
          interactionType: entry.name,
          element: entry.target?.tagName
        });
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Track Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          metricsRef.current.cls = clsValue;
          
          if (!metricsRef.current.clsElements) {
            metricsRef.current.clsElements = [];
          }
          metricsRef.current.clsElements.push({
            element: entry.sources?.[0]?.node?.tagName || 'unknown',
            value: entry.value
          });
        }
      });
      sendToAnalytics('CLS', clsValue);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, [enableWebVitals, pageName, onMetricsUpdate]);

  useEffect(() => {
    if (!enableInteractionTracking || typeof window === 'undefined') return;

    // Track user interactions
    const trackInteraction = (event: Event) => {
      const target = event.target as HTMLElement;
      const interactionData = {
        type: event.type,
        element: target.tagName,
        className: target.className,
        id: target.id,
        text: target.textContent?.slice(0, 50),
        timestamp: Date.now()
      };

      if (typeof gtag !== 'undefined') {
        gtag('event', 'user_interaction', {
          event_category: 'User Interaction',
          event_label: pageName,
          interaction_type: event.type,
          element_type: target.tagName,
          ...interactionData
        });
      }
    };

    // Track clicks, form submissions, and scroll events
    document.addEventListener('click', trackInteraction);
    document.addEventListener('submit', trackInteraction);
    document.addEventListener('scroll', trackInteraction, { passive: true });

    return () => {
      document.removeEventListener('click', trackInteraction);
      document.removeEventListener('submit', trackInteraction);
      document.removeEventListener('scroll', trackInteraction);
    };
  }, [enableInteractionTracking, pageName]);

  useEffect(() => {
    if (!enableRealUserMonitoring || typeof window === 'undefined') return;

    // Track page load performance
    const trackPageLoad = () => {
      const loadTime = performance.now();
      const domContentLoaded = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'page_load', {
          event_category: 'Performance',
          event_label: pageName,
          load_time: Math.round(loadTime),
          dom_content_loaded: Math.round(domContentLoaded.domContentLoadedEventEnd - domContentLoaded.domContentLoadedEventStart),
          page_size: (navigator as any).connection?.effectiveType || 'unknown'
        });
      }
    };

    if (document.readyState === 'complete') {
      trackPageLoad();
    } else {
      window.addEventListener('load', trackPageLoad);
      return () => window.removeEventListener('load', trackPageLoad);
    }
  }, [enableRealUserMonitoring, pageName]);

  return null; // This component doesn't render anything
};

interface PerformanceDebuggerProps {
  showMetrics?: boolean;
  showWarnings?: boolean;
}

export const PerformanceDebugger: React.FC<PerformanceDebuggerProps> = ({
  showMetrics = false,
  showWarnings = true
}) => {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics | null>(null);
  const [warnings, setWarnings] = React.useState<string[]>([]);

  const checkPerformance = (metrics: PerformanceMetrics) => {
    const newWarnings: string[] = [];

    if (metrics.lcp > 2500) {
      newWarnings.push(`LCP is ${Math.round(metrics.lcp)}ms (should be < 2500ms)`);
    }
    if (metrics.fid > 100) {
      newWarnings.push(`FID is ${Math.round(metrics.fid)}ms (should be < 100ms)`);
    }
    if (metrics.cls > 0.1) {
      newWarnings.push(`CLS is ${metrics.cls.toFixed(3)} (should be < 0.1)`);
    }
    if (metrics.ttfb > 600) {
      newWarnings.push(`TTFB is ${Math.round(metrics.ttfb)}ms (should be < 600ms)`);
    }

    setWarnings(newWarnings);
    setMetrics(metrics);
  };

  if (!showMetrics && !showWarnings) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <h3 className="font-semibold text-gray-900 mb-2">Performance Monitor</h3>
      
      {showMetrics && metrics && (
        <div className="mb-3">
          <div className="text-sm space-y-1">
            <div>LCP: {Math.round(metrics.lcp)}ms</div>
            <div>FID: {Math.round(metrics.fid)}ms</div>
            <div>CLS: {metrics.cls.toFixed(3)}</div>
            <div>TTFB: {Math.round(metrics.ttfb)}ms</div>
            <div>FCP: {Math.round(metrics.fcp)}ms</div>
          </div>
        </div>
      )}
      
      {showWarnings && warnings.length > 0 && (
        <div>
          <h4 className="font-medium text-red-600 mb-1">Warnings:</h4>
          <ul className="text-sm text-red-600 space-y-1">
            {warnings.map((warning, index) => (
              <li key={index}>• {warning}</li>
            ))}
          </ul>
        </div>
      )}
      
      <PerformanceMonitor
        pageName="current-page"
        onMetricsUpdate={checkPerformance}
        enableWebVitals={true}
        enableRealUserMonitoring={true}
        enableInteractionTracking={true}
      />
    </div>
  );
};

export default {
  PerformanceMonitor,
  PerformanceDebugger
}; 