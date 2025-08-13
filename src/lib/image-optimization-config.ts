// Image Optimization Configuration
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

export default IMAGE_OPTIMIZATION_CONFIG;