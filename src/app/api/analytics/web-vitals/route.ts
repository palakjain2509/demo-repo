import { NextRequest, NextResponse } from 'next/server';

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
      console.log(`  ${metric.name}: ${metric.value}ms (${metric.rating})`);
      
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
}