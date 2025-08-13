"use client";

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const gtag = typeof window !== 'undefined' ? window.gtag : undefined;

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

interface SEOEvent {
  type: string;
  timestamp: number;
  data: any;
  sessionId: string;
  pageUrl: string;
}

interface ConversionEvent {
  type: 'demo_request' | 'early_adopter_signup' | 'contact_form' | 'pricing_view' | 'resource_download';
  value?: number;
  currency?: string;
  metadata?: Record<string, any>;
}

interface UserBehavior {
  pageViews: number;
  timeOnPage: number;
  scrollDepth: number;
  interactions: number;
  exitIntent: boolean;
}

export const SEOAnalytics: React.FC = () => {
  const [events, setEvents] = useState<SEOEvent[]>([]);
  const [userBehavior, setUserBehavior] = useState<UserBehavior>({
    pageViews: 0,
    timeOnPage: 0,
    scrollDepth: 0,
    interactions: 0,
    exitIntent: false
  });
  const sessionId = useRef<string>(generateSessionId());
  const pageStartTime = useRef<number>(Date.now());
  const lastActivity = useRef<number>(Date.now());

  function generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  const trackEvent = (type: string, data: any = {}) => {
    const event: SEOEvent = {
      type,
      timestamp: Date.now(),
      data,
      sessionId: sessionId.current,
      pageUrl: window.location.href
    };

    setEvents(prev => [...prev, event]);

    // Send to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', type, {
        event_category: 'SEO',
        event_label: window.location.pathname,
        session_id: sessionId.current,
        ...data
      });
    }

    // Store in localStorage for offline tracking
    const storedEvents = JSON.parse(localStorage.getItem('seo_events') || '[]');
    storedEvents.push(event);
    localStorage.setItem('seo_events', JSON.stringify(storedEvents.slice(-100))); // Keep last 100 events
  };

  const trackConversion = (conversion: ConversionEvent) => {
    trackEvent('conversion', conversion);

    // Enhanced ecommerce tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'purchase', {
        transaction_id: `${sessionId.current}-${Date.now()}`,
        value: conversion.value || 0,
        currency: conversion.currency || 'USD',
        items: [{
          item_id: conversion.type,
          item_name: conversion.type.replace(/_/g, ' '),
          price: conversion.value || 0,
          quantity: 1
        }]
      });
    }
  };

  // Track page views
  useEffect(() => {
    trackEvent('page_view', {
      page_title: document.title,
      page_path: window.location.pathname,
      referrer: document.referrer
    });

    setUserBehavior(prev => ({ ...prev, pageViews: prev.pageViews + 1 }));
  }, []);

  // Track time on page
  useEffect(() => {
    const interval = setInterval(() => {
      const timeOnPage = Date.now() - pageStartTime.current;
      setUserBehavior(prev => ({ ...prev, timeOnPage }));
      
      // Track every 30 seconds
      if (timeOnPage % 30000 < 1000) {
        trackEvent('time_on_page', { seconds: Math.round(timeOnPage / 1000) });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Track scroll depth
  useEffect(() => {
    const trackScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      if (scrollPercent > userBehavior.scrollDepth) {
        setUserBehavior(prev => ({ ...prev, scrollDepth: scrollPercent }));
        
        // Track at 25%, 50%, 75%, 100%
        if ([25, 50, 75, 100].includes(scrollPercent)) {
          trackEvent('scroll_depth', { percentage: scrollPercent });
        }
      }
    };

    window.addEventListener('scroll', trackScroll, { passive: true });
    return () => window.removeEventListener('scroll', trackScroll);
  }, [userBehavior.scrollDepth]);

  // Track user interactions
  useEffect(() => {
    const trackInteraction = (event: Event) => {
      const target = event.target as HTMLElement;
      const interactionData = {
        element: target.tagName,
        className: target.className,
        id: target.id,
        text: target.textContent?.slice(0, 50),
        event_type: event.type
      };

      setUserBehavior(prev => ({ ...prev, interactions: prev.interactions + 1 }));
      trackEvent('user_interaction', interactionData);
    };

    document.addEventListener('click', trackInteraction);
    document.addEventListener('submit', trackInteraction);
    document.addEventListener('focus', trackInteraction);

    return () => {
      document.removeEventListener('click', trackInteraction);
      document.removeEventListener('submit', trackInteraction);
      document.removeEventListener('focus', trackInteraction);
    };
  }, []);

  // Track exit intent
  useEffect(() => {
    const trackExitIntent = (event: MouseEvent) => {
      if (event.clientY <= 0 && !userBehavior.exitIntent) {
        setUserBehavior(prev => ({ ...prev, exitIntent: true }));
        trackEvent('exit_intent', {
          time_on_page: Math.round((Date.now() - pageStartTime.current) / 1000)
        });
      }
    };

    document.addEventListener('mouseleave', trackExitIntent);
    return () => document.removeEventListener('mouseleave', trackExitIntent);
  }, [userBehavior.exitIntent]);

  // Track form submissions
  useEffect(() => {
    const trackFormSubmission = (event: Event) => {
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const formType = form.getAttribute('data-form-type') || 'contact';

      trackConversion({
        type: formType as ConversionEvent['type'],
        metadata: {
          form_id: form.id,
          form_action: form.action
        }
      });
    };

    document.addEventListener('submit', trackFormSubmission);
    return () => document.removeEventListener('submit', trackFormSubmission);
  }, []);

  // Track CTA clicks
  useEffect(() => {
    const trackCTAClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const ctaType = target.getAttribute('data-cta-type');
      
      if (ctaType) {
        trackConversion({
          type: ctaType as ConversionEvent['type'],
          metadata: {
            button_text: target.textContent,
            button_location: target.closest('section')?.className || 'unknown'
          }
        });
      }
    };

    document.addEventListener('click', trackCTAClick);
    return () => document.removeEventListener('click', trackCTAClick);
  }, []);

  return null;
};

// SEO Insights Component
export const SEOInsights: React.FC<{ showDebug?: boolean }> = ({ showDebug = false }) => {
  const pathname = usePathname();
  const [insights, setInsights] = useState({
    pageSpeed: 0,
    seoScore: 0,
    accessibilityScore: 0,
    bestPracticesScore: 0,
    performanceScore: 0,
    recommendations: [] as Array<{type: 'error' | 'warning' | 'info', message: string, priority: 'high' | 'medium' | 'low'}>,
    pageMetrics: {
      title: '',
      description: '',
      headings: { h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 },
      images: { total: 0, withAlt: 0, withoutAlt: 0 },
      links: { total: 0, internal: 0, external: 0 },
      structuredData: 0,
      socialTags: { og: 0, twitter: 0 },
      loadTime: 0,
      wordCount: 0
    },
    realTimeMetrics: {
      timeOnPage: 0,
      scrollDepth: 0,
      interactions: 0,
      ctaClicks: 0
    }
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'details' | 'performance' | 'recommendations'>('overview');
  const [isClient, setIsClient] = useState(false);
  const pageStartTime = useRef<number>(Date.now());

  // Only show in development or when explicitly enabled
  const isProduction = process.env.NODE_ENV === 'production';
  const shouldShow = showDebug || (!isProduction && process.env.NODE_ENV !== 'production');

  // Ensure client-side rendering for dynamic content
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Reset page start time and real-time metrics when pathname changes
  useEffect(() => {
    pageStartTime.current = Date.now();
    setInsights(prev => ({
      ...prev,
      realTimeMetrics: {
        timeOnPage: 0,
        scrollDepth: 0,
        interactions: 0,
        ctaClicks: 0
      }
    }));
  }, [pathname]);

  // Real-time metrics tracking
  useEffect(() => {
    const interval = setInterval(() => {
      setInsights(prev => ({
        ...prev,
        realTimeMetrics: {
          ...prev.realTimeMetrics,
          timeOnPage: Math.round((Date.now() - pageStartTime.current) / 1000)
        }
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Scroll depth tracking
  useEffect(() => {
    const trackScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      setInsights(prev => ({
        ...prev,
        realTimeMetrics: {
          ...prev.realTimeMetrics,
          scrollDepth: Math.max(prev.realTimeMetrics.scrollDepth, scrollPercent)
        }
      }));
    };

    window.addEventListener('scroll', trackScroll, { passive: true });
    return () => window.removeEventListener('scroll', trackScroll);
  }, []);

  // Interaction tracking
  useEffect(() => {
    const trackInteraction = () => {
      setInsights(prev => ({
        ...prev,
        realTimeMetrics: {
          ...prev.realTimeMetrics,
          interactions: prev.realTimeMetrics.interactions + 1
        }
      }));
    };

    document.addEventListener('click', trackInteraction);
    document.addEventListener('submit', trackInteraction);
    return () => {
      document.removeEventListener('click', trackInteraction);
      document.removeEventListener('submit', trackInteraction);
    };
  }, []);

  useEffect(() => {
    const analyzePage = () => {
      const recommendations: Array<{type: 'error' | 'warning' | 'info', message: string, priority: 'high' | 'medium' | 'low'}> = [];
      let seoScore = 100;
      let accessibilityScore = 100;
      let bestPracticesScore = 100;
      let performanceScore = 100;

      // Page load time
      const loadTime = performance.now();
      const pageMetrics = {
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
        headings: {
          h1: document.querySelectorAll('h1').length,
          h2: document.querySelectorAll('h2').length,
          h3: document.querySelectorAll('h3').length,
          h4: document.querySelectorAll('h4').length,
          h5: document.querySelectorAll('h5').length,
          h6: document.querySelectorAll('h6').length
        },
        images: {
          total: document.querySelectorAll('img').length,
          withAlt: document.querySelectorAll('img[alt]').length,
          withoutAlt: document.querySelectorAll('img:not([alt])').length
        },
        links: {
          total: document.querySelectorAll('a').length,
          internal: document.querySelectorAll('a[href^="/"], a[href^="' + window.location.origin + '"]').length,
          external: document.querySelectorAll('a[href^="http"]:not([href^="' + window.location.origin + '"])').length
        },
        structuredData: document.querySelectorAll('script[type="application/ld+json"]').length,
        socialTags: {
          og: document.querySelectorAll('meta[property^="og:"]').length,
          twitter: document.querySelectorAll('meta[name^="twitter:"]').length
        },
        loadTime: Math.round(loadTime),
        wordCount: document.body.textContent?.split(/\s+/).length || 0
      };

      // Title analysis
      if (!document.title) {
        recommendations.push({ type: 'error', message: 'Missing page title', priority: 'high' });
        seoScore -= 25;
      } else if (document.title.length < 10) {
        recommendations.push({ type: 'warning', message: 'Title too short (should be 10-60 characters)', priority: 'medium' });
        seoScore -= 10;
      } else if (document.title.length > 60) {
        recommendations.push({ type: 'warning', message: 'Title too long (should be 10-60 characters)', priority: 'medium' });
        seoScore -= 5;
      }

      // Meta description analysis
      const metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription || !metaDescription.getAttribute('content')) {
        recommendations.push({ type: 'error', message: 'Missing meta description', priority: 'high' });
        seoScore -= 20;
      } else {
        const descLength = metaDescription.getAttribute('content')?.length || 0;
        if (descLength < 50) {
          recommendations.push({ type: 'warning', message: 'Meta description too short (should be 50-160 characters)', priority: 'medium' });
          seoScore -= 5;
        } else if (descLength > 160) {
          recommendations.push({ type: 'warning', message: 'Meta description too long (should be 50-160 characters)', priority: 'medium' });
          seoScore -= 5;
        }
      }

      // Heading hierarchy analysis
      if (pageMetrics.headings.h1 === 0) {
        recommendations.push({ type: 'error', message: 'Missing H1 heading', priority: 'high' });
        seoScore -= 15;
      } else if (pageMetrics.headings.h1 > 1) {
        recommendations.push({ type: 'warning', message: 'Multiple H1 headings found (use only one)', priority: 'medium' });
        seoScore -= 10;
      }

      if (pageMetrics.headings.h3 > 0 && pageMetrics.headings.h2 === 0) {
        recommendations.push({ type: 'warning', message: 'H3 headings without H2 headings', priority: 'medium' });
        seoScore -= 5;
      }

      // Image accessibility
      if (pageMetrics.images.withoutAlt > 0) {
        recommendations.push({ 
          type: 'error', 
          message: `${pageMetrics.images.withoutAlt} image(s) missing alt text`, 
          priority: 'high' 
        });
        accessibilityScore -= pageMetrics.images.withoutAlt * 5;
      }

      // Link analysis
      const linksWithoutText = document.querySelectorAll('a').length - 
        document.querySelectorAll('a:not(:empty)').length;
      if (linksWithoutText > 0) {
        recommendations.push({ 
          type: 'warning', 
          message: `${linksWithoutText} link(s) without descriptive text`, 
          priority: 'medium' 
        });
        accessibilityScore -= linksWithoutText * 3;
      }

      // Structured data
      if (pageMetrics.structuredData === 0) {
        recommendations.push({ type: 'warning', message: 'No structured data (JSON-LD) found', priority: 'medium' });
        seoScore -= 10;
      }

      // Social media tags
      if (pageMetrics.socialTags.og < 3) {
        recommendations.push({ type: 'info', message: 'Add more Open Graph tags for better social sharing', priority: 'low' });
        seoScore -= 5;
      }

      if (pageMetrics.socialTags.twitter < 2) {
        recommendations.push({ type: 'info', message: 'Add Twitter Card tags for better Twitter sharing', priority: 'low' });
        seoScore -= 3;
      }

      // Canonical URL
      const canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        recommendations.push({ type: 'warning', message: 'Missing canonical URL', priority: 'medium' });
        seoScore -= 5;
      }

      // Performance analysis
      if (pageMetrics.loadTime > 3000) {
        recommendations.push({ type: 'warning', message: 'Page load time is slow (>3s)', priority: 'medium' });
        performanceScore -= 20;
      } else if (pageMetrics.loadTime > 2000) {
        recommendations.push({ type: 'info', message: 'Page load time could be improved', priority: 'low' });
        performanceScore -= 10;
      }

      // Content analysis
      if (pageMetrics.wordCount < 300) {
        recommendations.push({ type: 'warning', message: 'Page content is thin (<300 words)', priority: 'medium' });
        seoScore -= 10;
      }

      // Best practices
      const viewport = document.querySelector('meta[name="viewport"]');
      if (!viewport) {
        recommendations.push({ type: 'error', message: 'Missing viewport meta tag', priority: 'high' });
        bestPracticesScore -= 15;
      }

      const charset = document.querySelector('meta[charset]');
      if (!charset) {
        recommendations.push({ type: 'warning', message: 'Missing charset declaration', priority: 'medium' });
        bestPracticesScore -= 5;
      }

      setInsights({
        pageSpeed: Math.max(0, performanceScore),
        seoScore: Math.max(0, seoScore),
        accessibilityScore: Math.max(0, accessibilityScore),
        bestPracticesScore: Math.max(0, bestPracticesScore),
        performanceScore: Math.max(0, performanceScore),
        recommendations: recommendations.sort((a, b) => {
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          const typeOrder = { error: 3, warning: 2, info: 1 };
          return (priorityOrder[b.priority] - priorityOrder[a.priority]) || 
                 (typeOrder[b.type] - typeOrder[a.type]);
        }),
        pageMetrics,
        realTimeMetrics: insights.realTimeMetrics
      });
    };

    // Analyze after page load
    if (document.readyState === 'complete') {
      analyzePage();
    } else {
      window.addEventListener('load', analyzePage);
      return () => window.removeEventListener('load', analyzePage);
    }
  }, [pathname]); // Now depends on pathname to re-analyze on navigation

  if (!shouldShow) {
    return null;
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'error': return '❌';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      default: return '•';
    }
  };

  return (
    <div className={`fixed bottom-4 left-4 bg-white border border-gray-300 rounded-lg shadow-xl z-50 transition-all duration-300 ${
      isExpanded ? 'w-96 h-96' : 'w-80 h-auto'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <div>
            <h3 className="font-semibold text-gray-900">SEO Insights</h3>
            <p className="text-xs text-gray-500 truncate max-w-48">
              {isClient ? pathname : 'Loading...'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-gray-200 rounded transition-colors"
            title={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? '−' : '+'}
          </button>
          <button
            onClick={() => window.location.reload()}
            className="p-1 hover:bg-gray-200 rounded transition-colors"
            title="Refresh Analysis"
          >
            🔄
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        {(['overview', 'details', 'performance', 'recommendations'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4 max-h-80 overflow-y-auto">
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {/* Score Overview */}
            <div className="grid grid-cols-2 gap-3">
              <div className={`p-3 rounded-lg ${getScoreBgColor(insights.seoScore)}`}>
                <div className="text-sm font-medium text-gray-700">SEO Score</div>
                <div className={`text-2xl font-bold ${getScoreColor(insights.seoScore)}`}>
                  {insights.seoScore}
                </div>
              </div>
              <div className={`p-3 rounded-lg ${getScoreBgColor(insights.accessibilityScore)}`}>
                <div className="text-sm font-medium text-gray-700">Accessibility</div>
                <div className={`text-2xl font-bold ${getScoreColor(insights.accessibilityScore)}`}>
                  {insights.accessibilityScore}
                </div>
              </div>
              <div className={`p-3 rounded-lg ${getScoreBgColor(insights.performanceScore)}`}>
                <div className="text-sm font-medium text-gray-700">Performance</div>
                <div className={`text-2xl font-bold ${getScoreColor(insights.performanceScore)}`}>
                  {insights.performanceScore}
                </div>
              </div>
              <div className={`p-3 rounded-lg ${getScoreBgColor(insights.bestPracticesScore)}`}>
                <div className="text-sm font-medium text-gray-700">Best Practices</div>
                <div className={`text-2xl font-bold ${getScoreColor(insights.bestPracticesScore)}`}>
                  {insights.bestPracticesScore}
                </div>
              </div>
            </div>

            {/* Real-time Metrics */}
            <div className="bg-gray-50 p-3 rounded-lg">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Real-time Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>Time on page: {isClient ? `${insights.realTimeMetrics.timeOnPage}s` : '0s'}</div>
                <div>Scroll depth: {isClient ? `${insights.realTimeMetrics.scrollDepth}%` : '0%'}</div>
                <div>Interactions: {isClient ? insights.realTimeMetrics.interactions : 0}</div>
                <div>CTA clicks: {isClient ? insights.realTimeMetrics.ctaClicks : 0}</div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Page Stats</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>Words: {insights.pageMetrics.wordCount}</div>
                <div>Images: {insights.pageMetrics.images.total}</div>
                <div>Links: {insights.pageMetrics.links.total}</div>
                <div>Load time: {insights.pageMetrics.loadTime}ms</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'details' && (
          <div className="space-y-4">
            {/* Page Information */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Page Information</h4>
              <div className="space-y-2 text-xs">
                <div><strong>Title:</strong> {insights.pageMetrics.title}</div>
                <div><strong>Description:</strong> {insights.pageMetrics.description}</div>
                <div><strong>URL:</strong> {isClient ? window.location.href : 'Loading...'}</div>
              </div>
            </div>

            {/* Headings */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Heading Structure</h4>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {Object.entries(insights.pageMetrics.headings).map(([tag, count]) => (
                  <div key={tag} className="flex justify-between">
                    <span className="font-mono">{tag.toUpperCase()}:</span>
                    <span className="font-bold">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Images */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Images</h4>
              <div className="space-y-1 text-xs">
                <div>Total: {insights.pageMetrics.images.total}</div>
                <div>With alt text: {insights.pageMetrics.images.withAlt}</div>
                <div>Without alt text: {insights.pageMetrics.images.withoutAlt}</div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Links</h4>
              <div className="space-y-1 text-xs">
                <div>Total: {insights.pageMetrics.links.total}</div>
                <div>Internal: {insights.pageMetrics.links.internal}</div>
                <div>External: {insights.pageMetrics.links.external}</div>
              </div>
            </div>

            {/* Technical SEO */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Technical SEO</h4>
              <div className="space-y-1 text-xs">
                <div>Structured data: {insights.pageMetrics.structuredData}</div>
                <div>Open Graph tags: {insights.pageMetrics.socialTags.og}</div>
                <div>Twitter tags: {insights.pageMetrics.socialTags.twitter}</div>
                <div>Canonical: {isClient ? (document.querySelector('link[rel="canonical"]') ? '✅' : '❌') : 'Loading...'}</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div className="space-y-4">
            {/* Performance Metrics */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Performance Metrics</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>Page Load Time:</span>
                  <span className={insights.pageMetrics.loadTime < 2000 ? 'text-green-600' : 'text-red-600'}>
                    {insights.pageMetrics.loadTime}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Time on Page:</span>
                  <span>{isClient ? `${insights.realTimeMetrics.timeOnPage}s` : '0s'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Scroll Depth:</span>
                  <span>{isClient ? `${insights.realTimeMetrics.scrollDepth}%` : '0%'}</span>
                </div>
                <div className="flex justify-between">
                  <span>User Interactions:</span>
                  <span>{isClient ? insights.realTimeMetrics.interactions : 0}</span>
                </div>
              </div>
            </div>

            {/* Performance Recommendations */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Performance Tips</h4>
              <div className="space-y-2 text-xs text-gray-600">
                <div>• Optimize images for web</div>
                <div>• Minimize HTTP requests</div>
                <div>• Enable compression</div>
                <div>• Use CDN for assets</div>
                <div>• Implement lazy loading</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'recommendations' && (
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Recommendations ({insights.recommendations.length})
            </h4>
            {insights.recommendations.length === 0 ? (
              <div className="text-green-600 text-sm">✅ All SEO checks passed!</div>
            ) : (
              <div className="space-y-2">
                {insights.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start gap-2 p-2 bg-gray-50 rounded">
                    <span className="text-sm">{getTypeIcon(rec.type)}</span>
                    <div className="flex-1">
                      <div className={`text-xs font-medium ${getPriorityColor(rec.priority)}`}>
                        {rec.message}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Priority: {rec.priority.charAt(0).toUpperCase() + rec.priority.slice(1)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-gray-200 bg-gray-50 rounded-b-lg">
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>SEO Analysis Active</span>
          <span>v2.0</span>
        </div>
      </div>
    </div>
  );
};

// Conversion tracking hook
export const useConversionTracking = () => {
  const trackDemoRequest = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'demo_request', {
        event_category: 'Conversion',
        event_label: window.location.pathname
      });
    }
  };

  const trackEarlyAdopterSignup = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'early_adopter_signup', {
        event_category: 'Conversion',
        event_label: window.location.pathname
      });
    }
  };

  const trackContactForm = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'contact_form', {
        event_category: 'Conversion',
        event_label: window.location.pathname
      });
    }
  };

  return {
    trackDemoRequest,
    trackEarlyAdopterSignup,
    trackContactForm
  };
};

export default {
  SEOAnalytics,
  SEOInsights,
  useConversionTracking
}; 