'use client';

import React, { useState, useEffect } from 'react';
import { getWebVitalsReporter } from '../../lib/web-vitals-reporter';

interface WebVitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  navigationType: string;
}

interface WebVitalsDashboardProps {
  showRealTime?: boolean;
  showHistorical?: boolean;
  className?: string;
}

export const WebVitalsDashboard: React.FC<WebVitalsDashboardProps> = ({
  showRealTime = true,
  showHistorical = false,
  className = ''
}) => {
  const [metrics, setMetrics] = useState<WebVitalMetric[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showRealTime) {
      const interval = setInterval(() => {
        const reporter = getWebVitalsReporter();
        if (reporter) {
          setMetrics(reporter.getMetrics());
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [showRealTime]);

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'good':
        return 'text-green-600 bg-green-100';
      case 'needs-improvement':
        return 'text-yellow-600 bg-yellow-100';
      case 'poor':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getMetricDescription = (name: string) => {
    const descriptions = {
      LCP: 'Largest Contentful Paint - Time to render the largest content element',
      INP: 'Interaction to Next Paint - Responsiveness to user interactions',
      CLS: 'Cumulative Layout Shift - Visual stability of the page',
      FCP: 'First Contentful Paint - Time to render the first content element',
      TTFB: 'Time to First Byte - Time from navigation to first byte received'
    };
    return descriptions[name as keyof typeof descriptions] || 'Unknown metric';
  };

  if (!showRealTime && !showHistorical) {
    return null;
  }

  return (
    <div className={`web-vitals-dashboard ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Core Web Vitals
        </h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
        >
          {isVisible ? 'Hide' : 'Show'} Details
        </button>
      </div>

      {isVisible && (
        <div className="space-y-3">
          {metrics.length === 0 ? (
            <p className="text-gray-500 text-sm">
              No metrics collected yet. Interact with the page to see Web Vitals data.
            </p>
          ) : (
            metrics.map((metric, index) => (
              <div
                key={`${metric.name}-${index}`}
                className="p-3 border border-gray-200 rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900">
                      {metric.name}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${getRatingColor(metric.rating)}`}
                    >
                      {metric.rating}
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">
                    {metric.name === 'CLS' 
                      ? metric.value.toFixed(3)
                      : `${Math.round(metric.value)}ms`
                    }
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {getMetricDescription(metric.name)}
                </p>
                {metric.delta > 0 && (
                  <p className="text-xs text-gray-500 mt-1">
                    Delta: +{metric.name === 'CLS' 
                      ? metric.delta.toFixed(3)
                      : `${Math.round(metric.delta)}ms`
                    }
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      )}

      {process.env.NODE_ENV === 'development' && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-600">
            🔧 Development Mode: Web Vitals data is being collected and logged to console.
            In production, this data will be sent to analytics.
          </p>
        </div>
      )}
    </div>
  );
};

export default WebVitalsDashboard;