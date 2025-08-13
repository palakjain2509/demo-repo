"use client";

import React from 'react';
import Image from 'next/image';

interface AdvancedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  quality?: number;
  format?: 'webp' | 'avif' | 'auto';
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  onLoad?: () => void;
  onError?: () => void;
}

export const AdvancedImage: React.FC<AdvancedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
  format = 'auto',
  loading = 'lazy',
  decoding = 'async',
  onLoad,
  onError
}) => {
  // Generate optimized src with format
  const getOptimizedSrc = () => {
    if (format === 'auto') {
      return src;
    }
    // For manual format optimization
    const baseName = src.replace(/\.[^/.]+$/, '');
    return `${baseName}.${format}`;
  };

  return (
    <Image
      src={getOptimizedSrc()}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      loading={priority ? 'eager' : loading}
      decoding={decoding}
      sizes={sizes}
      quality={quality}
      onLoad={onLoad}
      onError={onError}
      style={{
        objectFit: 'cover',
        objectPosition: 'center'
      }}
    />
  );
};

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: number;
  breakpoints?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  aspectRatio = 16 / 9,
  breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
  }
}) => {
  const baseWidth = breakpoints.xl || 1280;
  const baseHeight = Math.round(baseWidth / aspectRatio);

  const sizes = [
    `(max-width: ${breakpoints.sm}px) 100vw`,
    `(max-width: ${breakpoints.md}px) 100vw`,
    `(max-width: ${breakpoints.lg}px) 50vw`,
    `(max-width: ${breakpoints.xl}px) 33vw`,
    '25vw'
  ].join(', ');

  return (
    <AdvancedImage
      src={src}
      alt={alt}
      width={baseWidth}
      height={baseHeight}
      className={className}
      priority={priority}
      sizes={sizes}
      quality={85}
    />
  );
};

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
  threshold?: number;
  rootMargin?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  threshold = 0.1,
  rootMargin = '50px'
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isInView, setIsInView] = React.useState(false);
  const imgRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div ref={imgRef} className={className}>
      {isInView ? (
        <AdvancedImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        <div
          className="bg-gray-200 animate-pulse"
          style={{ width, height }}
          aria-label={`Loading ${alt}`}
        />
      )}
    </div>
  );
};

export default {
  AdvancedImage,
  ResponsiveImage,
  LazyImage
}; 