'use client';

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
    
    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
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
        className={`flex items-center justify-center bg-gray-200 text-gray-500 ${className}`}
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
        className={`bg-gray-100 animate-pulse ${className}`}
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
    className: `transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`,
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
          <source srcSet={getWebPSource() || undefined} type="image/webp" />
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
  const generateSources = (): React.ReactElement[] => {
    const sources: React.ReactElement[] = [];
    
    formats.forEach(format => {
      if (format === 'webp') {
        const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        if (webpSrc !== src) {
          sources.push(
            <source key={format} srcSet={webpSrc} type="image/webp" />
          );
        }
      } else if (format === 'avif') {
        const avifSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.avif');
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
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${gap}px`
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

export default OptimizedImage;