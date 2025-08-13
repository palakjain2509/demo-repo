'use client';

import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';
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
    onCLS(this.handleMetric.bind(this));
    onFCP(this.handleMetric.bind(this));
    onINP(this.handleMetric.bind(this));
    onLCP(this.handleMetric.bind(this));
    onTTFB(this.handleMetric.bind(this));

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
      console.log(`📊 Web Vital: ${name} = ${value}ms (${rating})`);
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
      console.warn(`🚨 Performance Alert: ${metric.name} exceeded threshold (${metric.value}ms > ${alertThreshold}ms)`);
      
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

export default WebVitalsReporter;