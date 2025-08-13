#!/usr/bin/env node

/**
 * Image Optimization Setup Script
 * 
 * This script enhances the existing image optimization system for better performance
 * Run with: node scripts/setup-image-optimization.js
 */

const fs = require('fs');
const path = require('path');

class ImageOptimizationSetup {
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

  async analyzeCurrentImages() {
    this.log('Analyzing current image usage...');
    
    try {
      const publicDir = 'public';
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif'];
      const images = [];

      const scanDirectory = (dir) => {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            scanDirectory(fullPath);
          } else if (imageExtensions.some(ext => item.toLowerCase().endsWith(ext))) {
            const size = stat.size;
            images.push({
              path: fullPath,
              name: item,
              size: size,
              sizeKB: Math.round(size / 1024),
              extension: path.extname(item).toLowerCase()
            });
          }
        });
      };

      if (fs.existsSync(publicDir)) {
        scanDirectory(publicDir);
      }

      // Analyze image sizes
      const largeImages = images.filter(img => img.sizeKB > 500);
      const totalSize = images.reduce((sum, img) => sum + img.size, 0);

      this.log(`Found ${images.length} images (${Math.round(totalSize / 1024 / 1024 * 100) / 100}MB total)`);
      
      if (largeImages.length > 0) {
        this.results.warnings.push(`${largeImages.length} images are larger than 500KB`);
        largeImages.forEach(img => {
          this.log(`Large image: ${img.path} (${img.sizeKB}KB)`, 'warning');
        });
      }

      this.results.passed.push(`Image analysis completed: ${images.length} images found`);
      return images;
    } catch (error) {
      this.results.errors.push(`Error analyzing images: ${error.message}`);
      return [];
    }
  }

  async createEnhancedImageComponent() {
    this.log('Creating enhanced image optimization component...');
    
    const componentContent = `'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
  lazy?: boolean;
  webpFallback?: boolean;
  responsive?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
}

interface ResponsiveBreakpoint {
  breakpoint: number;
  width: number;
  height?: number;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  sizes,
  className = '',
  style = {},
  onLoad,
  onError,
  lazy = true,
  webpFallback = true,
  responsive = false,
  objectFit = 'cover',
  objectPosition = 'center',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const imgRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || priority || isInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, priority, isInView]);

  // Generate responsive sizes if not provided
  const generateSizes = () => {
    if (sizes) return sizes;
    if (responsive) {
      return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
    }
    return undefined;
  };

  // Generate WebP source if supported
  const getWebPSource = () => {
    if (!webpFallback) return null;
    
    const webpSrc = src.replace(/\\.(jpg|jpeg|png)$/i, '.webp');
    return webpSrc !== src ? webpSrc : null;
  };

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate blur placeholder
  const generateBlurDataURL = () => {
    if (blurDataURL) return blurDataURL;
    if (placeholder === 'blur') {
      // Generate a simple blur placeholder
      return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmM2Y0ZjYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlNWU3ZWIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNnKSIvPjwvc3ZnPg==';
    }
    return undefined;
  };

  if (hasError) {
    return (
      <div 
        ref={imgRef}
        className={\`flex items-center justify-center bg-gray-200 text-gray-500 \${className}\`}
        style={{ width, height, ...style }}
      >
        <span className="text-sm">Image failed to load</span>
      </div>
    );
  }

  if (!isInView) {
    return (
      <div 
        ref={imgRef}
        className={\`bg-gray-100 animate-pulse \${className}\`}
        style={{ width, height, ...style }}
      />
    );
  }

  const imageProps = {
    src,
    alt,
    width,
    height,
    priority,
    quality,
    placeholder,
    blurDataURL: generateBlurDataURL(),
    sizes: generateSizes(),
    className: \`transition-opacity duration-300 \${isLoaded ? 'opacity-100' : 'opacity-0'} \${className}\`,
    style: {
      objectFit,
      objectPosition,
      ...style
    },
    onLoad: handleLoad,
    onError: handleError,
    ...props
  };

  return (
    <div ref={imgRef} className="relative">
      {webpFallback && getWebPSource() ? (
        <picture>
          <source srcSet={getWebPSource()} type="image/webp" />
          <Image {...imageProps} />
        </picture>
      ) : (
        <Image {...imageProps} />
      )}
      
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
    </div>
  );
};

// Progressive Image Component with multiple formats
export const ProgressiveImage: React.FC<OptimizedImageProps & {
  srcSet?: string;
  formats?: ('webp' | 'avif' | 'jpg' | 'png')[];
}> = ({
  src,
  srcSet,
  formats = ['webp', 'jpg'],
  ...props
}) => {
  const generateSources = () => {
    const sources = [];
    
    formats.forEach(format => {
      if (format === 'webp') {
        const webpSrc = src.replace(/\\.(jpg|jpeg|png)$/i, '.webp');
        if (webpSrc !== src) {
          sources.push(
            <source key={format} srcSet={webpSrc} type="image/webp" />
          );
        }
      } else if (format === 'avif') {
        const avifSrc = src.replace(/\\.(jpg|jpeg|png)$/i, '.avif');
        if (avifSrc !== src) {
          sources.push(
            <source key={format} srcSet={avifSrc} type="image/avif" />
          );
        }
      }
    });
    
    return sources;
  };

  const sources = generateSources();
  
  if (sources.length > 0) {
    return (
      <picture>
        {sources}
        <OptimizedImage {...props} src={src} webpFallback={false} />
      </picture>
    );
  }

  return <OptimizedImage {...props} src={src} />;
};

// Responsive Image Grid Component
export const ResponsiveImageGrid: React.FC<{
  images: Array<{
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }>;
  columns?: number;
  gap?: number;
  className?: string;
}> = ({
  images,
  columns = 3,
  gap = 16,
  className = ''
}) => {
  return (
    <div 
      className={\`grid \${className}\`}
      style={{
        gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
        gap: \`\${gap}px\`
      }}
    >
      {images.map((image, index) => (
        <OptimizedImage
          key={index}
          {...image}
          responsive
          lazy
          className="w-full h-auto"
        />
      ))}
    </div>
  );
};

export default OptimizedImage;`;

    try {
      const componentPath = 'src/components/ui/OptimizedImage.tsx';
      fs.writeFileSync(componentPath, componentContent);
      this.results.passed.push('Enhanced image optimization component created');
    } catch (error) {
      this.results.errors.push(`Error creating image component: ${error.message}`);
    }
  }

  async createImageOptimizationConfig() {
    this.log('Creating image optimization configuration...');
    
    const configContent = `// Image Optimization Configuration
export const IMAGE_OPTIMIZATION_CONFIG = {
  // Quality settings
  quality: {
    default: 85,
    thumbnail: 70,
    hero: 90,
    background: 75
  },
  
  // Format preferences
  formats: {
    preferred: ['avif', 'webp', 'jpg'],
    fallback: 'jpg',
    svg: {
      optimize: true,
      removeViewBox: false
    }
  },
  
  // Responsive breakpoints
  breakpoints: {
    mobile: 640,
    tablet: 768,
    desktop: 1024,
    wide: 1280
  },
  
  // Lazy loading settings
  lazyLoading: {
    enabled: true,
    rootMargin: '50px',
    threshold: 0.1,
    placeholder: 'blur'
  },
  
  // Performance budgets
  budgets: {
    maxImageSize: 500, // KB
    maxTotalSize: 2000, // KB per page
    maxImages: 20 // per page
  },
  
  // Optimization rules
  optimization: {
    enableWebP: true,
    enableAVIF: true,
    enableProgressiveJPEG: true,
    enableSVGOptimization: true,
    enableImageSizeHints: true
  },
  
  // CDN settings
  cdn: {
    enabled: false,
    baseUrl: '',
    transformations: {
      resize: true,
      format: true,
      quality: true
    }
  }
};

export default IMAGE_OPTIMIZATION_CONFIG;`;

    try {
      const configPath = 'src/lib/image-optimization-config.ts';
      fs.writeFileSync(configPath, configContent);
      this.results.passed.push('Image optimization configuration created');
    } catch (error) {
      this.results.errors.push(`Error creating image config: ${error.message}`);
    }
  }

  async createImagePerformanceMonitor() {
    this.log('Creating image performance monitoring...');
    
    const monitorContent = `'use client';

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
          if (entry.initiatorType === 'img' || entry.initiatorType === 'image') {
            this.handleImageLoad(entry as PerformanceResourceTiming);
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
    const largest = successfulLoads.reduce((max, current) => 
      current.size > (max?.size || 0) ? current : max, null);
    
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
      console.warn(\`🚨 Image exceeds size budget: \${loadEvent.src} (\${Math.round(loadEvent.size / 1024)}KB > \${budgets.maxImageSize}KB)\`);
    }
    
    // Check total page size
    if (this.metrics.totalSize > budgets.maxTotalSize * 1024) {
      console.warn(\`🚨 Total image size exceeds budget: \${Math.round(this.metrics.totalSize / 1024)}KB > \${budgets.maxTotalSize}KB\`);
    }
    
    // Check total image count
    if (this.metrics.totalImages > budgets.maxImages) {
      console.warn(\`🚨 Too many images on page: \${this.metrics.totalImages} > \${budgets.maxImages}\`);
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
      recommendations.push(\`\${this.metrics.failedImages} images failed to load - check image URLs and availability\`);
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

export default ImagePerformanceMonitor;`;

    try {
      const monitorPath = 'src/hooks/useImagePerformance.ts';
      fs.writeFileSync(monitorPath, monitorContent);
      this.results.passed.push('Image performance monitoring created');
    } catch (error) {
      this.results.errors.push(`Error creating image monitor: ${error.message}`);
    }
  }

  generateReport() {
    this.log('Generating image optimization setup report...');
    
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
        'Replace existing Image components with OptimizedImage',
        'Configure Next.js image optimization in next.config.js',
        'Set up image CDN if needed',
        'Implement image compression pipeline',
        'Add image performance monitoring to key pages',
        'Set up automated image optimization in CI/CD'
      ],
      implementation: {
        component: 'Use OptimizedImage component for all images',
        monitoring: 'Add useImagePerformance hook to track performance',
        config: 'Customize IMAGE_OPTIMIZATION_CONFIG for your needs',
        formats: 'Enable WebP and AVIF for modern browsers'
      }
    };
    
    // Save report to file
    const reportPath = 'image-optimization-setup-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Print summary
    console.log('\n🖼️ Image Optimization Setup Summary:');
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
    this.log('Starting image optimization setup...');
    
    await this.analyzeCurrentImages();
    await this.createEnhancedImageComponent();
    await this.createImageOptimizationConfig();
    await this.createImagePerformanceMonitor();
    
    return this.generateReport();
  }
}

// Run the setup
async function main() {
  const setup = new ImageOptimizationSetup();
  
  try {
    await setup.runSetup();
    process.exit(0);
  } catch (error) {
    console.error('Image optimization setup failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = ImageOptimizationSetup;