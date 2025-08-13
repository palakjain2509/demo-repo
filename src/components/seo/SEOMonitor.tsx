"use client";

import React, { useEffect, useState, useRef } from 'react';

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const gtag = typeof window !== 'undefined' ? window.gtag : undefined;

interface SEOMetrics {
  pageSpeed: number;
  seoScore: number;
  accessibilityScore: number;
  bestPracticesScore: number;
  performanceScore: number;
  mobileScore: number;
  desktopScore: number;
}

interface KeywordData {
  keyword: string;
  position: number;
  volume: number;
  difficulty: number;
  cpc: number;
  trend: 'up' | 'down' | 'stable';
}

interface SearchPerformance {
  impressions: number;
  clicks: number;
  ctr: number;
  averagePosition: number;
  keywords: KeywordData[];
}

interface SEOMonitorProps {
  pageUrl: string;
  targetKeywords: string[];
  enableRealTimeMonitoring?: boolean;
  enableKeywordTracking?: boolean;
  enablePerformanceTracking?: boolean;
  showDebugPanel?: boolean;
}

export const SEOMonitor: React.FC<SEOMonitorProps> = ({
  pageUrl,
  targetKeywords,
  enableRealTimeMonitoring = true,
  enableKeywordTracking = true,
  enablePerformanceTracking = true,
  showDebugPanel = false
}) => {
  const [seoMetrics, setSeoMetrics] = useState<SEOMetrics>({
    pageSpeed: 0,
    seoScore: 0,
    accessibilityScore: 0,
    bestPracticesScore: 0,
    performanceScore: 0,
    mobileScore: 0,
    desktopScore: 0
  });

  const [searchPerformance, setSearchPerformance] = useState<SearchPerformance>({
    impressions: 0,
    clicks: 0,
    ctr: 0,
    averagePosition: 0,
    keywords: []
  });

  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const analysisInterval = useRef<NodeJS.Timeout | null>(null);

  // Analyze page SEO
  const analyzePageSEO = () => {
    setIsAnalyzing(true);
    
    // Simulate SEO analysis
    setTimeout(() => {
      const newMetrics: SEOMetrics = {
        pageSpeed: Math.floor(Math.random() * 30) + 70, // 70-100
        seoScore: Math.floor(Math.random() * 20) + 80, // 80-100
        accessibilityScore: Math.floor(Math.random() * 15) + 85, // 85-100
        bestPracticesScore: Math.floor(Math.random() * 10) + 90, // 90-100
        performanceScore: Math.floor(Math.random() * 25) + 75, // 75-100
        mobileScore: Math.floor(Math.random() * 20) + 80, // 80-100
        desktopScore: Math.floor(Math.random() * 15) + 85 // 85-100
      };

      setSeoMetrics(newMetrics);
      generateRecommendations(newMetrics);
      setIsAnalyzing(false);
    }, 2000);
  };

  // Generate SEO recommendations
  const generateRecommendations = (metrics: SEOMetrics) => {
    const newRecommendations: string[] = [];

    if (metrics.pageSpeed < 90) {
      newRecommendations.push('Optimize page loading speed - consider image compression and lazy loading');
    }

    if (metrics.seoScore < 90) {
      newRecommendations.push('Improve SEO score - add missing meta tags and structured data');
    }

    if (metrics.accessibilityScore < 90) {
      newRecommendations.push('Enhance accessibility - add alt text to images and improve keyboard navigation');
    }

    if (metrics.mobileScore < 90) {
      newRecommendations.push('Optimize for mobile - improve responsive design and touch interactions');
    }

    // Check for specific SEO issues
    const title = document.title;
    if (!title || title.length < 10 || title.length > 60) {
      newRecommendations.push('Optimize title tag length (10-60 characters recommended)');
    }

    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription || !metaDescription.getAttribute('content')) {
      newRecommendations.push('Add meta description for better search snippets');
    }

    const h1s = document.querySelectorAll('h1');
    if (h1s.length === 0) {
      newRecommendations.push('Add H1 heading for better SEO structure');
    } else if (h1s.length > 1) {
      newRecommendations.push('Use only one H1 heading per page');
    }

    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
    if (imagesWithoutAlt.length > 0) {
      newRecommendations.push(`Add alt text to ${imagesWithoutAlt.length} image(s)`);
    }

    setRecommendations(newRecommendations);
  };

  // Track keyword performance
  const trackKeywords = () => {
    if (!enableKeywordTracking) return;

    const keywordData: KeywordData[] = targetKeywords.map(keyword => ({
      keyword,
      position: Math.floor(Math.random() * 50) + 1, // 1-50
      volume: Math.floor(Math.random() * 10000) + 100, // 100-10100
      difficulty: Math.floor(Math.random() * 100) + 1, // 1-100
      cpc: Math.random() * 10, // 0-10
      trend: ['up', 'down', 'stable'][Math.floor(Math.random() * 3)] as 'up' | 'down' | 'stable'
    }));

    const avgPosition = keywordData.reduce((sum, k) => sum + k.position, 0) / keywordData.length;
    const totalImpressions = keywordData.reduce((sum, k) => sum + k.volume, 0);
    const totalClicks = Math.floor(totalImpressions * (Math.random() * 0.1 + 0.01)); // 1-11% CTR

    setSearchPerformance({
      impressions: totalImpressions,
      clicks: totalClicks,
      ctr: (totalClicks / totalImpressions) * 100,
      averagePosition: avgPosition,
      keywords: keywordData
    });
  };

  // Monitor Core Web Vitals
  const monitorWebVitals = () => {
    if (!enablePerformanceTracking) return;

    // Track LCP
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      if (gtag) {
        gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: pageUrl,
          value: Math.round(lastEntry.startTime),
          metric_id: 'LCP',
          metric_name: 'LCP'
        });
      }
    });

    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Track FID
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        const fid = entry.processingStart - entry.startTime;
        
        if (gtag) {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: pageUrl,
            value: Math.round(fid),
            metric_id: 'FID',
            metric_name: 'FID'
          });
        }
      });
    });

    fidObserver.observe({ entryTypes: ['first-input'] });

    // Track CLS
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          
          if (gtag) {
            gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: pageUrl,
              value: Math.round(clsValue * 1000),
              metric_id: 'CLS',
              metric_name: 'CLS'
            });
          }
        }
      });
    });

    clsObserver.observe({ entryTypes: ['layout-shift'] });

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  };

  // Start monitoring
  useEffect(() => {
    analyzePageSEO();
    trackKeywords();

    if (enableRealTimeMonitoring) {
      analysisInterval.current = setInterval(() => {
        analyzePageSEO();
        trackKeywords();
      }, 300000); // Every 5 minutes
    }

    const cleanup = monitorWebVitals();

    return () => {
      if (analysisInterval.current) {
        clearInterval(analysisInterval.current);
      }
      if (cleanup) cleanup();
    };
  }, [pageUrl, targetKeywords, enableRealTimeMonitoring, enableKeywordTracking, enablePerformanceTracking]);

  // Debug panel component
  const DebugPanel = () => {
    if (!showDebugPanel) return null;

    return (
      <div className="fixed top-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-md z-50">
        <h3 className="font-semibold text-gray-900 mb-3">SEO Monitor</h3>
        
        {isAnalyzing && (
          <div className="text-blue-600 mb-3">Analyzing page SEO...</div>
        )}

        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Performance Scores</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>Page Speed: <span className={seoMetrics.pageSpeed >= 90 ? 'text-green-600' : 'text-yellow-600'}>{seoMetrics.pageSpeed}/100</span></div>
              <div>SEO Score: <span className={seoMetrics.seoScore >= 90 ? 'text-green-600' : 'text-yellow-600'}>{seoMetrics.seoScore}/100</span></div>
              <div>Accessibility: <span className={seoMetrics.accessibilityScore >= 90 ? 'text-green-600' : 'text-yellow-600'}>{seoMetrics.accessibilityScore}/100</span></div>
              <div>Best Practices: <span className={seoMetrics.bestPracticesScore >= 90 ? 'text-green-600' : 'text-yellow-600'}>{seoMetrics.bestPracticesScore}/100</span></div>
              <div>Mobile: <span className={seoMetrics.mobileScore >= 90 ? 'text-green-600' : 'text-yellow-600'}>{seoMetrics.mobileScore}/100</span></div>
              <div>Desktop: <span className={seoMetrics.desktopScore >= 90 ? 'text-green-600' : 'text-yellow-600'}>{seoMetrics.desktopScore}/100</span></div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-700 mb-2">Search Performance</h4>
            <div className="text-sm space-y-1">
              <div>Impressions: {searchPerformance.impressions.toLocaleString()}</div>
              <div>Clicks: {searchPerformance.clicks.toLocaleString()}</div>
              <div>CTR: {searchPerformance.ctr.toFixed(2)}%</div>
              <div>Avg Position: {searchPerformance.averagePosition.toFixed(1)}</div>
            </div>
          </div>

          {recommendations.length > 0 && (
            <div>
              <h4 className="font-medium text-red-600 mb-2">Recommendations</h4>
              <ul className="text-xs text-red-600 space-y-1">
                {recommendations.slice(0, 3).map((rec, index) => (
                  <li key={index}>• {rec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  return <DebugPanel />;
};

// SEO Report Generator
export const SEOReportGenerator: React.FC<{ pageUrl: string }> = ({ pageUrl }) => {
  const [report, setReport] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateReport = async () => {
    setIsGenerating(true);
    
    // Simulate report generation
    setTimeout(() => {
      const newReport = {
        url: pageUrl,
        generated: new Date().toISOString(),
        summary: {
          overallScore: Math.floor(Math.random() * 20) + 80,
          criticalIssues: Math.floor(Math.random() * 3),
          warnings: Math.floor(Math.random() * 5) + 2,
          passedChecks: Math.floor(Math.random() * 10) + 15
        },
        technical: {
          pageSpeed: Math.floor(Math.random() * 30) + 70,
          mobileFriendly: Math.random() > 0.3,
          https: true,
          robotsTxt: true,
          sitemap: true
        },
        content: {
          titleLength: document.title.length,
          descriptionLength: document.querySelector('meta[name="description"]')?.getAttribute('content')?.length || 0,
          h1Count: document.querySelectorAll('h1').length,
          imageCount: document.querySelectorAll('img').length,
          imagesWithAlt: Array.from(document.querySelectorAll('img')).filter(img => img.alt).length
        },
        recommendations: [
          'Optimize page loading speed',
          'Add more descriptive alt text to images',
          'Improve heading structure',
          'Add structured data markup'
        ]
      };

      setReport(newReport);
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="p-4">
      <button
        onClick={generateReport}
        disabled={isGenerating}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {isGenerating ? 'Generating Report...' : 'Generate SEO Report'}
      </button>

      {report && (
        <div className="mt-4 p-4 bg-gray-50 rounded">
          <h3 className="font-semibold mb-2">SEO Report for {report.url}</h3>
          <pre className="text-sm overflow-auto">{JSON.stringify(report, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default {
  SEOMonitor,
  SEOReportGenerator
}; 