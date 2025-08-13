# Content Security Policy (CSP) Implementation Guide

## Overview

This document describes the Content Security Policy (CSP) implementation for the MyGETS website. CSP is a security standard that helps prevent cross-site scripting (XSS), clickjacking, and other code injection attacks.

## Implementation Details

### 1. CSP Configuration

The CSP is configured in `next.config.mjs` and uses the utility functions from `src/lib/security/csp.ts`.

#### Key Directives

- **default-src**: Restricts all resources to same origin
- **script-src**: Controls JavaScript sources (Next.js, Google Analytics, inline scripts)
- **style-src**: Controls CSS sources (Tailwind CSS, Google Fonts, inline styles)
- **img-src**: Controls image sources (same origin, data URIs, Google Analytics)
- **font-src**: Controls font sources (Google Fonts)
- **connect-src**: Controls network connections (API calls, analytics)
- **frame-src**: Prevents clickjacking attacks
- **object-src**: Blocks all object/embed sources
- **base-uri**: Restricts base URI to same origin
- **form-action**: Restricts form submissions to same origin
- **frame-ancestors**: Prevents framing attacks
- **upgrade-insecure-requests**: Forces HTTPS in production

### 2. Environment-Specific Configuration

#### Development Environment
- Allows `unsafe-eval` for Next.js hot reloading
- Includes localhost connections
- More permissive for debugging

#### Production Environment
- Stricter policy without `unsafe-eval`
- Forces HTTPS upgrade
- More restrictive for security

### 3. Allowed External Resources

#### Google Analytics
- `https://www.googletagmanager.com`
- `https://www.google-analytics.com`
- `https://ssl.google-analytics.com`
- `https://analytics.google.com`
- `https://stats.g.doubleclick.net`

#### Google Fonts
- `https://fonts.googleapis.com`
- `https://fonts.gstatic.com`

#### Images
- `data:` URIs for inline images
- `https:` for external images
- Google Analytics tracking pixels

## Monitoring and Reporting

### 1. CSP Violation Reporting

The application includes a CSP violation reporting endpoint at `/api/csp-report` that:

- Receives violation reports from browsers
- Logs violations for security monitoring
- Provides structured data for analysis
- Supports both development and production environments

#### Violation Report Structure
```json
{
  "csp-report": {
    "document-uri": "https://mygets.net/",
    "violated-directive": "script-src",
    "original-policy": "script-src 'self'",
    "blocked-uri": "https://malicious-site.com/script.js",
    "source-file": "https://mygets.net/",
    "line-number": 1,
    "column-number": 1,
    "status-code": 200,
    "referrer": "https://mygets.net/",
    "user-agent": "Mozilla/5.0...",
    "disposition": "enforce"
  }
}
```

### 2. Logging and Alerting

In production, CSP violations should be:

1. **Logged** to a centralized logging service
2. **Monitored** for patterns and trends
3. **Alerted** on for critical violations
4. **Analyzed** for security insights

## Nonce Management

### 1. Nonce Generation

Nonces are generated for each request to allow specific inline scripts while maintaining security:

```typescript
import { generateNonce } from '@/lib/security/csp';

const nonce = generateNonce();
```

### 2. Using Nonces

#### For Inline Scripts
```typescript
import { createNonceInlineScript } from '@/lib/security/nonce';

const scriptProps = createNonceInlineScript(scriptContent, nonce);
```

#### For JSON-LD
```typescript
import { createNonceJsonLdScript } from '@/lib/security/nonce';

const jsonLdProps = createNonceJsonLdScript(jsonLdData, nonce);
```

## Troubleshooting

### 1. Common CSP Violations

#### Google Analytics Violations
**Problem**: Google Analytics scripts blocked
**Solution**: Ensure all Google Analytics domains are in `script-src` and `connect-src`

#### Inline Script Violations
**Problem**: Inline scripts blocked
**Solution**: Use nonces or move scripts to external files

#### Font Loading Violations
**Problem**: Google Fonts not loading
**Solution**: Ensure `fonts.googleapis.com` and `fonts.gstatic.com` are in `style-src` and `font-src`

### 2. Debugging CSP

#### Enable CSP Report-Only Mode
For testing, you can temporarily switch to report-only mode:

```typescript
// In next.config.mjs
{
  key: 'Content-Security-Policy-Report-Only',
  value: getCSPHeaderValue(process.env.NODE_ENV === 'development'),
}
```

#### Browser Developer Tools
- Check the Console tab for CSP violation messages
- Use the Network tab to see blocked requests
- Review the Security tab for CSP information

### 3. Testing CSP

#### Manual Testing
1. Open browser developer tools
2. Check for CSP violations in console
3. Verify all resources load correctly
4. Test with CSP report-only mode first

#### Automated Testing
```typescript
import { validateCSP } from '@/lib/security/csp';

const cspString = getCSPHeaderValue(false);
const validation = validateCSP(cspString);

if (!validation.valid) {
  console.error('CSP validation errors:', validation.errors);
}
```

## Security Best Practices

### 1. Regular Review
- Review CSP violations regularly
- Update allowed sources as needed
- Remove unnecessary permissions

### 2. Monitoring
- Set up alerts for CSP violations
- Monitor for attack patterns
- Track violation trends

### 3. Updates
- Keep CSP configuration updated
- Review new browser features
- Update external service configurations

## Integration with Other Security Measures

### 1. Security Headers
CSP works alongside other security headers:
- `Strict-Transport-Security` (HSTS)
- `X-Frame-Options`
- `X-Content-Type-Options`
- `X-XSS-Protection`

### 2. Authentication and Authorization
- CSP protects against XSS in authenticated sessions
- Works with session management
- Complements access controls

### 3. Input Validation
- CSP is the last line of defense
- Should be used with proper input validation
- Provides defense in depth

## Future Enhancements

### 1. Subresource Integrity (SRI)
Consider adding SRI hashes for external resources:
```html
<script src="https://example.com/script.js" 
        integrity="sha384-..." 
        crossorigin="anonymous"></script>
```

### 2. Trusted Types
For future browser support, consider implementing Trusted Types:
```typescript
// Future implementation
if (window.trustedTypes) {
  const policy = window.trustedTypes.createPolicy('default', {
    createHTML: (string) => string,
    createScript: (string) => string,
  });
}
```

### 3. Dynamic CSP
Consider implementing dynamic CSP based on user roles or page content:
```typescript
// Example: Different CSP for admin pages
const csp = isAdminPage ? getAdminCSP() : getDefaultCSP();
```

## Conclusion

The CSP implementation provides a robust security foundation for the MyGETS website. Regular monitoring, testing, and updates ensure continued protection against various web-based attacks.

For questions or issues with CSP implementation, refer to:
- [MDN CSP Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [CSP Validator](https://csp-evaluator.withgoogle.com/)
- [CSP Builder](https://report-uri.com/home/generate) 