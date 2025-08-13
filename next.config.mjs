/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    domains: ['mygets.net'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Security headers
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
        },
        {
          key: 'Content-Security-Policy',
          value: [
            // Default source - restrict to same origin
            "default-src 'self'",
            
            // Script sources - allow Next.js, Google Analytics, Google Maps API, and inline scripts for structured data
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://maps.googleapis.com",
            
            // Style sources - allow Next.js, Google Fonts, and inline styles
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            
            // Image sources - allow same origin, data URIs, Google Analytics, and Google Maps
            "img-src 'self' data: https: https://www.google-analytics.com https://ssl.google-analytics.com https://stats.g.doubleclick.net https://maps.googleapis.com https://maps.gstatic.com https://maps.google.com",
            
            // Font sources - allow Google Fonts
            "font-src 'self' https://fonts.gstatic.com",
            
            // Connect sources - allow API calls to same origin, Google Analytics, and Google Maps
            "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://maps.googleapis.com",
            
            // Frame sources - allow same origin only
            "frame-src 'self'",
            
            // Object sources - block all
            "object-src 'none'",
            
            // Base URI - restrict to same origin
            "base-uri 'self'",
            
            // Form action - allow same origin
            "form-action 'self'",
            
            // Frame ancestors - allow same origin only
            "frame-ancestors 'self'",
            
            // Worker sources - allow same origin
            "worker-src 'self' blob:",
            
            // Manifest sources - allow same origin
            "manifest-src 'self'",
            
            // Media sources - allow same origin
            "media-src 'self'",
            
            // Upgrade insecure requests in production
            ...(process.env.NODE_ENV === 'production' ? ["upgrade-insecure-requests"] : [])
          ].join('; '),
        },
      ],
    },
  ],

  // Experimental features
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'mygets.net'],
    },
    optimizePackageImports: ['@heroicons/react', '@radix-ui/react-icons'],
    mdxRs: true,
  },

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true, // Temporarily ignore ESLint errors during build
  },

  // Webpack configuration for performance
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }

    // Reduce HMR bundle size
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    return config;
  },

  // MDX configuration
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

export default nextConfig; 