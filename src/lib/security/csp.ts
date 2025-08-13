/**
 * Content Security Policy (CSP) Configuration
 * 
 * This file provides a comprehensive CSP configuration for the MyGETS website.
 * The CSP is designed to allow necessary resources while maintaining security.
 */

export interface CSPConfig {
  development: boolean;
  nonce?: string;
}

/**
 * Generate a nonce for inline scripts
 * This should be called on each request to ensure uniqueness
 */
export function generateNonce(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

/**
 * Build CSP directives based on environment and configuration
 */
export function buildCSPDirectives(config: CSPConfig): string {
  const { development, nonce } = config;
  
  // Base directives that apply to all environments
  const baseDirectives: Record<string, string[]> = {
    // Default source - restrict to same origin
    'default-src': ["'self'"],
    
    // Script sources
    'script-src': [
      "'self'",
      // Google Analytics domains
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com',
      'https://ssl.google-analytics.com',
      // Allow inline scripts for structured data (JSON-LD)
      "'unsafe-inline'",
      // Allow eval for Next.js development
      ...(development ? ["'unsafe-eval'"] : []),
      // Add nonce if provided
      ...(nonce ? [`'nonce-${nonce}'`] : [])
    ],
    
    // Style sources
    'style-src': [
      "'self'",
      "'unsafe-inline'", // Required for Tailwind CSS and dynamic styles
      'https://fonts.googleapis.com'
    ],
    
    // Image sources
    'img-src': [
      "'self'",
      'data:', // Allow data URIs for images
      'https:', // Allow HTTPS images
      // Google Analytics tracking pixels
      'https://www.google-analytics.com',
      'https://ssl.google-analytics.com',
      'https://stats.g.doubleclick.net'
    ],
    
    // Font sources
    'font-src': [
      "'self'",
      'https://fonts.gstatic.com'
    ],
    
    // Connect sources (for API calls, analytics, etc.)
    'connect-src': [
      "'self'",
      // Google Analytics
      'https://www.google-analytics.com',
      'https://analytics.google.com',
      'https://stats.g.doubleclick.net',
      // Add development server for local development
      ...(development ? ['http://localhost:3000', 'ws://localhost:3000'] : [])
    ],
    
    // Frame sources
    'frame-src': ["'self'"],
    
    // Object sources - block all
    'object-src': ["'none'"],
    
    // Base URI - restrict to same origin
    'base-uri': ["'self'"],
    
    // Form action - allow same origin
    'form-action': ["'self'"],
    
    // Frame ancestors - allow same origin only
    'frame-ancestors': ["'self'"],
    
    // Worker sources
    'worker-src': ["'self'", 'blob:'],
    
    // Manifest sources
    'manifest-src': ["'self'"],
    
    // Media sources
    'media-src': ["'self'"],
    
    // Navigate to - allow same origin
    'navigate-to': ["'self'"]
  };

  // Add upgrade-insecure-requests in production
  if (!development) {
    baseDirectives['upgrade-insecure-requests'] = [];
  }

  // Convert directives object to CSP string
  return Object.entries(baseDirectives)
    .map(([directive, sources]) => `${directive} ${sources.join(' ')}`)
    .join('; ');
}

/**
 * Get CSP header value for Next.js configuration
 */
export function getCSPHeaderValue(development: boolean = false): string {
  return buildCSPDirectives({ development });
}

/**
 * Validate CSP configuration
 */
export function validateCSP(cspString: string): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Check for required directives
  const requiredDirectives = ['default-src', 'script-src', 'style-src'];
  const directives = cspString.split(';').map(d => d.trim().split(' ')[0]);
  
  requiredDirectives.forEach(directive => {
    if (!directives.includes(directive)) {
      errors.push(`Missing required directive: ${directive}`);
    }
  });
  
  // Check for dangerous patterns
  const dangerousPatterns = [
    /script-src.*'unsafe-eval'/,
    /script-src.*'unsafe-inline'/
  ];
  
  dangerousPatterns.forEach(pattern => {
    if (pattern.test(cspString)) {
      errors.push(`Potentially dangerous pattern detected: ${pattern.source}`);
    }
  });
  
  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * CSP reporting configuration (for monitoring violations)
 */
export function getCSPReportOnlyHeader(development: boolean = false): string {
  const baseCSP = getCSPHeaderValue(development);
  
  // Add report-uri directive for violation reporting
  // Replace with your actual reporting endpoint
  const reportUri = development 
    ? 'http://localhost:3000/api/csp-report'
    : 'https://mygets.net/api/csp-report';
  
  return `${baseCSP}; report-uri ${reportUri}`;
}

/**
 * CSP directives for specific pages or components
 */
export const pageSpecificCSP = {
  // More restrictive CSP for admin pages
  admin: {
    'script-src': ["'self'"],
    'style-src': ["'self'"],
    'img-src': ["'self'"],
    'connect-src': ["'self'"]
  },
  
  // CSP for payment pages
  payment: {
    'script-src': ["'self'", 'https://js.stripe.com'],
    'frame-src': ["'self'", 'https://js.stripe.com', 'https://hooks.stripe.com'],
    'connect-src': ["'self'", 'https://api.stripe.com']
  }
};

/**
 * Generate CSP meta tag for HTML head
 */
export function generateCSPMetaTag(development: boolean = false): string {
  const cspValue = getCSPHeaderValue(development);
  return `<meta http-equiv="Content-Security-Policy" content="${cspValue}">`;
} 