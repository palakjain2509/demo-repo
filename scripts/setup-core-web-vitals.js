#!/usr/bin/env node

/**
 * Core Web Vitals Monitoring Setup Script
 * 
 * This script sets up comprehensive Core Web Vitals monitoring for the MyGETS website
 * Run with: node scripts/setup-core-web-vitals.js
 */

const fs = require('fs');
const path = require('path');

class CoreWebVitalsSetup {
  constructor() {
    this.results = {
      passed: [],
      warnings: [],
      errors: []
    };
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'warning' ? '⚠️' : '✅';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async setupWebVitalsLibrary() {
    this.log('Setting up web-vitals library...');
    
    try {
      // Check if web-vitals is already installed
      const packageJsonPath = 'package.json';
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        if (!packageJson.dependencies || !packageJson.dependencies['web-vitals']) {
          this.results.warnings.push('web-vitals library not found in dependencies');
          this.log('Please install web-vitals: npm install web-vitals', 'warning');
        } else {
          this.results.passed.push('web-vitals library is installed');
        }
      }
    } catch (error) {
      this.results.errors.push(`Error checking web-vitals library: ${error.message}`);
    }
  }

  async createWebVitalsConfig() {
    this.log('Creating Web Vitals configuration...');
    
    const configContent = `// Web Vitals Configuration
export const WEB_VITALS_CONFIG = {
  // Core Web Vitals thresholds
  thresholds: {
    LCP: {
      good: 2500,
      needsImprovement: 4000
    },
    FID: {
      good: 100,
      needsImprovement: 300
    },
    CLS: {
      good: 0.1,
      needsImprovement: 0.25
    },
    FCP: {
      good: 1800,
      needsImprovement: 3000
    },
    TTFB: {
      good: 800,
      needsImprovement: 1800
    }
  },
  
  // Analytics configuration
  analytics: {
    enabled: true,
    endpoint: '/api/analytics/web-vitals',
    batchSize: 10,
    flushInterval: 30000 // 30 seconds
  },
  
  // Monitoring configuration
  monitoring: {
    enableRealUserMonitoring: true,
    enableLabDataCollection: true,
    enablePerformanceObserver: true,
    enableNavigationTiming: true
  },
  
  // Reporting configuration
  reporting: {
    enableConsoleLogging: process.env.NODE_ENV === 'development',
    enableRemoteLogging: process.env.NODE_ENV === 'production',
    enableAlerts: true,
    alertThresholds: {
      LCP: 4000,
      FID: 300,
      CLS: 0.25
    }
  }
};

export default WEB_VITALS_CONFIG;`;

    try {
      const configPath = 'src/lib/web-vitals-config.ts';
      fs.writeFileSync(configPath, configContent);
      this.results.passed.push('Web Vitals configuration created');
    } catch (error) {
      this.results.errors.push(`Error creating Web Vitals config: ${error.message}`);
    }
  }

  async createWebVitalsReporter() {
    this.log('Creating Web Vitals reporter...');
    
    const reporterContent = `'use client';

import { getCLS, getFCP, getFID, getLCP, getTTFB } from 'web-vitals';
import { WEB_VITALS_CONFIG } from './web-vitals-config';

interface WebVitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  navigationType: string;
}

interface WebVitalsData {
  url: string;
  timestamp: number;
  userAgent: string;
  connectionType?: string;
  metrics: WebVitalMetric[];
}

class WebVitalsReporter {
  private metrics: WebVitalMetric[] = [];
  private batchTimer: NodeJS.Timeout | null = null;

  constructor() {
    this.initializeReporting();
  }

  private initializeReporting() {
    if (typeof window === 'undefined') return;

    // Initialize Core Web Vitals collection
    getCLS(this.handleMetric.bind(this));
    getFCP(this.handleMetric.bind(this));
    getFID(this.handleMetric.bind(this));
    getLCP(this.handleMetric.bind(this));
    getTTFB(this.handleMetric.bind(this));

    // Set up batch reporting
    this.setupBatchReporting();
  }

  private handleMetric(metric: any) {
    const { name, value, delta, id } = metric;
    const rating = this.getRating(name, value);
    
    const webVitalMetric: WebVitalMetric = {
      name,
      value,
      rating,
      delta,
      id,
      navigationType: this.getNavigationType()
    };

    this.metrics.push(webVitalMetric);

    // Log to console in development
    if (WEB_VITALS_CONFIG.reporting.enableConsoleLogging) {
      console.log(\`📊 Web Vital: \${name} = \${value}ms (\${rating})\`);
    }

    // Check for alerts
    this.checkAlerts(webVitalMetric);

    // Send to analytics immediately for critical metrics
    if (rating === 'poor') {
      this.sendToAnalytics([webVitalMetric]);
    }
  }

  private getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    const thresholds = WEB_VITALS_CONFIG.thresholds[name as keyof typeof WEB_VITALS_CONFIG.thresholds];
    if (!thresholds) return 'good';

    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.needsImprovement) return 'needs-improvement';
    return 'poor';
  }

  private getNavigationType(): string {
    if (typeof window === 'undefined') return 'unknown';
    
    const navigation = (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming);
    return navigation?.type || 'unknown';
  }

  private checkAlerts(metric: WebVitalMetric) {
    if (!WEB_VITALS_CONFIG.reporting.enableAlerts) return;

    const alertThreshold = WEB_VITALS_CONFIG.reporting.alertThresholds[
      metric.name as keyof typeof WEB_VITALS_CONFIG.reporting.alertThresholds
    ];

    if (alertThreshold && metric.value > alertThreshold) {
      console.warn(\`🚨 Performance Alert: \${metric.name} exceeded threshold (\${metric.value}ms > \${alertThreshold}ms)\`);
      
      // Send alert to monitoring service
      this.sendAlert(metric);
    }
  }

  private sendAlert(metric: WebVitalMetric) {
    // Implementation for sending alerts to monitoring service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_alert', {
        event_category: 'Performance',
        event_label: metric.name,
        value: Math.round(metric.value),
        custom_parameter_1: metric.rating
      });
    }
  }

  private setupBatchReporting() {
    if (!WEB_VITALS_CONFIG.analytics.enabled) return;

    this.batchTimer = setInterval(() => {
      if (this.metrics.length > 0) {
        this.sendToAnalytics([...this.metrics]);
        this.metrics = [];
      }
    }, WEB_VITALS_CONFIG.analytics.flushInterval);
  }

  private async sendToAnalytics(metrics: WebVitalMetric[]) {
    if (!WEB_VITALS_CONFIG.reporting.enableRemoteLogging) return;

    const data: WebVitalsData = {
      url: window.location.href,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      connectionType: (navigator as any).connection?.effectiveType,
      metrics
    };

    try {
      await fetch(WEB_VITALS_CONFIG.analytics.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Failed to send Web Vitals data:', error);
    }
  }

  public getMetrics(): WebVitalMetric[] {
    return [...this.metrics];
  }

  public destroy() {
    if (this.batchTimer) {
      clearInterval(this.batchTimer);
      this.batchTimer = null;
    }
  }
}

// Global instance
let webVitalsReporter: WebVitalsReporter | null = null;

export function initializeWebVitals() {
  if (typeof window !== 'undefined' && !webVitalsReporter) {
    webVitalsReporter = new WebVitalsReporter();
  }
  return webVitalsReporter;
}

export function getWebVitalsReporter() {
  return webVitalsReporter;
}

export default WebVitalsReporter;`;

    try {
      const reporterPath = 'src/lib/web-vitals-reporter.ts';
      fs.writeFileSync(reporterPath, reporterContent);
      this.results.passed.push('Web Vitals reporter created');
    } catch (error) {
      this.results.errors.push(`Error creating Web Vitals reporter: ${error.message}`);
    }
  }

  async createWebVitalsAPI() {
    this.log('Creating Web Vitals API endpoint...');
    
    const apiContent = `import { NextRequest, NextResponse } from 'next/server';

interface WebVitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  navigationType: string;
}

interface WebVitalsData {
  url: string;
  timestamp: number;
  userAgent: string;
  connectionType?: string;
  metrics: WebVitalMetric[];
}

export async function POST(request: NextRequest) {
  try {
    const data: WebVitalsData = await request.json();
    
    // Validate the data
    if (!data.url || !data.metrics || !Array.isArray(data.metrics)) {
      return NextResponse.json(
        { error: 'Invalid Web Vitals data' },
        { status: 400 }
      );
    }

    // Log the metrics (in production, you'd save to database)
    console.log('📊 Web Vitals Data Received:', {
      url: data.url,
      timestamp: new Date(data.timestamp).toISOString(),
      userAgent: data.userAgent,
      connectionType: data.connectionType,
      metricsCount: data.metrics.length
    });

    // Process each metric
    data.metrics.forEach(metric => {
      console.log(\`  \${metric.name}: \${metric.value}ms (\${metric.rating})\`);
      
      // Here you would typically:
      // 1. Save to database
      // 2. Send to analytics service
      // 3. Trigger alerts if needed
      // 4. Update performance dashboards
    });

    // Calculate performance score
    const performanceScore = calculatePerformanceScore(data.metrics);
    
    // Send to Google Analytics if available
    if (process.env.GA_TRACKING_ID) {
      // Implementation for server-side GA tracking
    }

    return NextResponse.json({
      success: true,
      performanceScore,
      timestamp: Date.now()
    });

  } catch (error) {
    console.error('Error processing Web Vitals data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function calculatePerformanceScore(metrics: WebVitalMetric[]): number {
  if (metrics.length === 0) return 0;

  const weights = {
    LCP: 0.25,
    FID: 0.25,
    CLS: 0.25,
    FCP: 0.15,
    TTFB: 0.10
  };

  let totalScore = 0;
  let totalWeight = 0;

  metrics.forEach(metric => {
    const weight = weights[metric.name as keyof typeof weights] || 0;
    if (weight > 0) {
      let score = 0;
      switch (metric.rating) {
        case 'good':
          score = 100;
          break;
        case 'needs-improvement':
          score = 75;
          break;
        case 'poor':
          score = 50;
          break;
      }
      totalScore += score * weight;
      totalWeight += weight;
    }
  });

  return totalWeight > 0 ? Math.round(totalScore / totalWeight) : 0;
}`;

    try {
      // Create the API directory if it doesn't exist
      const apiDir = 'src/app/api/analytics';
      if (!fs.existsSync(apiDir)) {
        fs.mkdirSync(apiDir, { recursive: true });
      }

      const apiPath = path.join(apiDir, 'web-vitals/route.ts');
      const webVitalsDir = path.dirname(apiPath);
      if (!fs.existsSync(webVitalsDir)) {
        fs.mkdirSync(webVitalsDir, { recursive: true });
      }

      fs.writeFileSync(apiPath, apiContent);
      this.results.passed.push('Web Vitals API endpoint created');
    } catch (error) {
      this.results.errors.push(`Error creating Web Vitals API: ${error.message}`);
    }
  }

  async createWebVitalsDashboard() {
    this.log('Creating Web Vitals dashboard component...');
    
    const dashboardContent = `'use client';

import React, { useState, useEffect } from 'react';
import { getWebVitalsReporter } from '../lib/web-vitals-reporter';

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
      FID: 'First Input Delay - Time from first user interaction to browser response',
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
    <div className={\`web-vitals-dashboard \${className}\`}>
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
                key={\`\${metric.name}-\${index}\`}
                className="p-3 border border-gray-200 rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900">
                      {metric.name}
                    </span>
                    <span
                      className={\`px-2 py-1 text-xs rounded-full \${getRatingColor(metric.rating)}\`}
                    >
                      {metric.rating}
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">
                    {metric.name === 'CLS' 
                      ? metric.value.toFixed(3)
                      : \`\${Math.round(metric.value)}ms\`
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
                      : \`\${Math.round(metric.delta)}ms\`
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

export default WebVitalsDashboard;`;

    try {
      const dashboardPath = 'src/components/seo/WebVitalsDashboard.tsx';
      fs.writeFileSync(dashboardPath, dashboardContent);
      this.results.passed.push('Web Vitals dashboard component created');
    } catch (error) {
      this.results.errors.push(`Error creating Web Vitals dashboard: ${error.message}`);
    }
  }

  generateReport() {
    this.log('Generating Core Web Vitals setup report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.results.errors.length + this.results.warnings.length + this.results.passed.length,
        errors: this.results.errors.length,
        warnings: this.results.warnings.length,
        passed: this.results.passed.length
      },
      results: this.results,
      nextSteps: [
        'Install web-vitals library: npm install web-vitals',
        'Add WebVitalsReporter to your root layout component',
        'Configure Google Analytics to receive Web Vitals data',
        'Set up monitoring alerts for poor performance',
        'Create performance budgets and CI/CD integration',
        'Implement automated performance testing'
      ],
      implementation: {
        rootLayout: 'Add initializeWebVitals() to your root layout',
        dashboard: 'Include WebVitalsDashboard component for debugging',
        api: 'Web Vitals API endpoint ready at /api/analytics/web-vitals',
        monitoring: 'Configure alerts and thresholds in web-vitals-config.ts'
      }
    };
    
    // Save report to file
    const reportPath = 'core-web-vitals-setup-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Print summary
    console.log('\n📊 Core Web Vitals Setup Summary:');
    console.log(`Total Tasks: ${report.summary.total}`);
    console.log(`Errors: ${report.summary.errors} ❌`);
    console.log(`Warnings: ${report.summary.warnings} ⚠️`);
    console.log(`Passed: ${report.summary.passed} ✅`);
    
    if (report.summary.errors > 0) {
      console.log('\n❌ Errors:');
      this.results.errors.forEach(error => console.log(`  - ${error}`));
    }
    
    if (report.summary.warnings > 0) {
      console.log('\n⚠️ Warnings:');
      this.results.warnings.forEach(warning => console.log(`  - ${warning}`));
    }

    if (report.summary.passed > 0) {
      console.log('\n✅ Completed:');
      this.results.passed.forEach(passed => console.log(`  - ${passed}`));
    }
    
    console.log(`\n📄 Full report saved to: ${reportPath}`);
    
    return report;
  }

  async runSetup() {
    this.log('Starting Core Web Vitals monitoring setup...');
    
    await this.setupWebVitalsLibrary();
    await this.createWebVitalsConfig();
    await this.createWebVitalsReporter();
    await this.createWebVitalsAPI();
    await this.createWebVitalsDashboard();
    
    return this.generateReport();
  }
}

// Run the setup
async function main() {
  const setup = new CoreWebVitalsSetup();
  
  try {
    await setup.runSetup();
    process.exit(0);
  } catch (error) {
    console.error('Core Web Vitals setup failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = CoreWebVitalsSetup;