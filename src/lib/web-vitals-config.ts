// Web Vitals Configuration
export const WEB_VITALS_CONFIG = {
  // Core Web Vitals thresholds
  thresholds: {
    LCP: {
      good: 2500,
      needsImprovement: 4000
    },
    INP: {
      good: 200,
      needsImprovement: 500
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
      INP: 300,
      CLS: 0.25
    }
  }
};

export default WEB_VITALS_CONFIG;