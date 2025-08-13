'use client';

import { useEffect, useState } from 'react';
import { IMAGE_OPTIMIZATION_CONFIG } from '../lib/image-optimization-config';

interface ImageMetrics {
  totalImages: number;
  loadedImages: number;
  failedImages: number;
  totalSize: number;
  averageLoadTime: number;
  largestImage: {
    src: string;
    size: number;
    loadTime: number;
  } | null;
}

interface ImageLoadEvent {
  src: string;
  loadTime: number;
  size: number;
  success: boolean;
}

class ImagePerformanceMonitor {
  private metrics: ImageMetrics = {
    totalImages: 0,
    loadedImages: 0,
    failedImages: 0,
    totalSize: 0,
    averageLoadTime: 0,
    largestImage: null
  };
  
  private loadEvents: ImageLoadEvent[] = [];
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeMonitoring();
  }

  private initializeMonitoring() {
    if (typeof window === 'undefined') return;

    // Monitor resource timing for images
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          // Type guard to check if entry is PerformanceResourceTiming
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            if (resourceEntry.initiatorType === 'img' || resourceEntry.initiatorType === 'image') {
              this.handleImageLoad(resourceEntry);
            }
          }
        });
      });

      observer.observe({ entryTypes: ['resource'] });
      this.observers.push(observer);
    }

    // Monitor existing images
    this.scanExistingImages();
  }

  private scanExistingImages() {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      this.metrics.totalImages++;
      
      if (img.complete) {
        this.metrics.loadedImages++;
      } else {
        img.addEventListener('load', () => {
          this.metrics.loadedImages++;
          this.updateMetrics();
        });
        
        img.addEventListener('error', () => {
          this.metrics.failedImages++;
          this.updateMetrics();
        });
      }
    });
  }

  private handleImageLoad(entry: PerformanceResourceTiming) {
    const loadTime = entry.responseEnd - entry.startTime;
    const size = entry.transferSize || 0;
    
    const loadEvent: ImageLoadEvent = {
      src: entry.name,
      loadTime,
      size,
      success: entry.responseEnd > 0
    };
    
    this.loadEvents.push(loadEvent);
    this.updateMetricsFromEvents();
    
    // Check performance budgets
    this.checkPerformanceBudgets(loadEvent);
  }

  private updateMetricsFromEvents() {
    const successfulLoads = this.loadEvents.filter(e => e.success);
    
    this.metrics.totalSize = successfulLoads.reduce((sum, e) => sum + e.size, 0);
    this.metrics.averageLoadTime = successfulLoads.length > 0 
      ? successfulLoads.reduce((sum, e) => sum + e.loadTime, 0) / successfulLoads.length
      : 0;
    
    // Find largest image
    const largest = successfulLoads.reduce<ImageLoadEvent | null>((max, current) => 
      !max || current.size > max.size ? current : max, null);
    
    if (largest) {
      this.metrics.largestImage = {
        src: largest.src,
        size: largest.size,
        loadTime: largest.loadTime
      };
    }
  }

  private updateMetrics() {
    // Trigger any listeners
    window.dispatchEvent(new CustomEvent('imageMetricsUpdate', {
      detail: this.metrics
    }));
  }

  private checkPerformanceBudgets(loadEvent: ImageLoadEvent) {
    const budgets = IMAGE_OPTIMIZATION_CONFIG.budgets;
    
    // Check individual image size
    if (loadEvent.size > budgets.maxImageSize * 1024) {
      console.warn(`🚨 Image exceeds size budget: ${loadEvent.src} (${Math.round(loadEvent.size / 1024)}KB > ${budgets.maxImageSize}KB)`);
    }
    
    // Check total page size
    if (this.metrics.totalSize > budgets.maxTotalSize * 1024) {
      console.warn(`🚨 Total image size exceeds budget: ${Math.round(this.metrics.totalSize / 1024)}KB > ${budgets.maxTotalSize}KB`);
    }
    
    // Check total image count
    if (this.metrics.totalImages > budgets.maxImages) {
      console.warn(`🚨 Too many images on page: ${this.metrics.totalImages} > ${budgets.maxImages}`);
    }
  }

  public getMetrics(): ImageMetrics {
    return { ...this.metrics };
  }

  public getLoadEvents(): ImageLoadEvent[] {
    return [...this.loadEvents];
  }

  public generateReport() {
    const report = {
      timestamp: Date.now(),
      metrics: this.getMetrics(),
      loadEvents: this.getLoadEvents(),
      recommendations: this.generateRecommendations()
    };
    
    return report;
  }

  private generateRecommendations(): string[] {
    const recommendations: string[] = [];
    const budgets = IMAGE_OPTIMIZATION_CONFIG.budgets;
    
    if (this.metrics.totalSize > budgets.maxTotalSize * 1024) {
      recommendations.push('Consider reducing image sizes or implementing more aggressive compression');
    }
    
    if (this.metrics.averageLoadTime > 1000) {
      recommendations.push('Image load times are slow - consider using a CDN or optimizing images');
    }
    
    if (this.metrics.failedImages > 0) {
      recommendations.push(`${this.metrics.failedImages} images failed to load - check image URLs and availability`);
    }
    
    if (this.metrics.totalImages > budgets.maxImages) {
      recommendations.push('Consider lazy loading or pagination to reduce initial image count');
    }
    
    return recommendations;
  }

  public destroy() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// React hook for image performance monitoring
export function useImagePerformance() {
  const [metrics, setMetrics] = useState<ImageMetrics | null>(null);
  const [monitor, setMonitor] = useState<ImagePerformanceMonitor | null>(null);

  useEffect(() => {
    const imageMonitor = new ImagePerformanceMonitor();
    setMonitor(imageMonitor);

    const handleMetricsUpdate = (event: CustomEvent) => {
      setMetrics(event.detail);
    };

    window.addEventListener('imageMetricsUpdate', handleMetricsUpdate as EventListener);

    // Initial metrics
    setMetrics(imageMonitor.getMetrics());

    return () => {
      window.removeEventListener('imageMetricsUpdate', handleMetricsUpdate as EventListener);
      imageMonitor.destroy();
    };
  }, []);

  return {
    metrics,
    monitor,
    generateReport: () => monitor?.generateReport()
  };
}

export default ImagePerformanceMonitor;