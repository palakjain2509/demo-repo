'use client';

import React, { useState, useEffect } from 'react';
import { WebVitalsDashboard } from '../../components/seo/WebVitalsDashboard';
import { getWebVitalsReporter } from '../../lib/web-vitals-reporter';

export default function WebVitalsPage() {
  const [isClient, setIsClient] = useState(false);
  const [metrics, setMetrics] = useState<any[]>([]);

  useEffect(() => {
    setIsClient(true);
    
    // Initialize Web Vitals reporting
    const reporter = getWebVitalsReporter();
    
    // Update metrics every second
    const interval = setInterval(() => {
      if (reporter) {
        setMetrics(reporter.getMetrics());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Web Vitals Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Web Vitals Monitoring Dashboard
          </h1>
          <p className="text-gray-600">
            Monitor your website's Core Web Vitals performance in real-time. 
            These metrics are crucial for SEO and user experience.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Total Metrics Collected</h3>
            <p className="text-2xl font-bold text-gray-900">{metrics.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Good Ratings</h3>
            <p className="text-2xl font-bold text-green-600">
              {metrics.filter(m => m.rating === 'good').length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Needs Improvement</h3>
            <p className="text-2xl font-bold text-yellow-600">
              {metrics.filter(m => m.rating === 'needs-improvement').length}
            </p>
          </div>
        </div>

        {/* Web Vitals Dashboard */}
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <WebVitalsDashboard 
            showRealTime={true}
            showHistorical={false}
            className="w-full"
          />
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            How to Use This Dashboard
          </h3>
          <div className="space-y-3 text-blue-800">
            <div className="flex items-start space-x-2">
              <span className="font-semibold">1.</span>
              <p>
                <strong>Real-time Monitoring:</strong> The dashboard automatically collects and displays 
                Core Web Vitals metrics as you interact with the website.
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="font-semibold">2.</span>
              <p>
                <strong>Metric Ratings:</strong> Each metric is color-coded:
                <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-700 rounded">Good</span>
                <span className="ml-1 px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded">Needs Improvement</span>
                <span className="ml-1 px-2 py-1 text-xs bg-red-100 text-red-700 rounded">Poor</span>
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="font-semibold">3.</span>
              <p>
                <strong>Core Metrics:</strong> Monitor LCP (loading), INP (interactivity), 
                CLS (visual stability), FCP (first paint), and TTFB (server response).
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="font-semibold">4.</span>
              <p>
                <strong>Testing:</strong> Navigate through different pages, click buttons, 
                and interact with the site to generate comprehensive metrics.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            ← Back to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}