import { NextRequest, NextResponse } from 'next/server';

/**
 * CSP Violation Reporting Endpoint
 * 
 * This endpoint receives Content Security Policy violation reports
 * and logs them for security monitoring and debugging.
 * 
 * The endpoint accepts POST requests with CSP violation data in JSON format.
 */

export async function POST(request: NextRequest) {
  try {
    // Parse the CSP violation report
    const violationData = await request.json() as Record<string, any>;
    
    // Extract key information from the violation report
    const {
      'csp-report': {
        'document-uri': documentUri,
        'violated-directive': violatedDirective,
        'original-policy': originalPolicy,
        'blocked-uri': blockedUri,
        'source-file': sourceFile,
        'line-number': lineNumber,
        'column-number': columnNumber,
        'status-code': statusCode,
        'referrer': referrer,
        'user-agent': userAgent,
        'disposition': disposition = 'enforce'
      } = {}
    } = violationData;

    // Create a structured log entry
    const logEntry = {
      timestamp: new Date().toISOString(),
      type: 'csp_violation',
      severity: disposition === 'enforce' ? 'warning' : 'info',
      documentUri,
      violatedDirective,
      blockedUri,
      sourceFile,
      lineNumber,
      columnNumber,
      statusCode,
      referrer,
      userAgent,
      disposition,
      // Include the full violation data for debugging
      fullReport: violationData
    };

    // Log the violation (in production, this would go to a proper logging service)
    console.error('CSP Violation:', JSON.stringify(logEntry, null, 2));

    // In production, you might want to:
    // 1. Send to a logging service (e.g., LogRocket, Sentry, etc.)
    // 2. Store in a database for analysis
    // 3. Send alerts for critical violations
    // 4. Aggregate violations for trend analysis

    // Example: Send to external logging service
    if (process.env.NODE_ENV === 'production') {
      try {
        // You can integrate with your preferred logging service here
        // await sendToLoggingService(logEntry);
        
        // For now, we'll just log to console in production
        console.error('Production CSP Violation:', {
          documentUri,
          violatedDirective,
          blockedUri,
          timestamp: logEntry.timestamp
        });
      } catch (loggingError) {
        console.error('Failed to send CSP violation to logging service:', loggingError);
      }
    }

    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'CSP violation logged successfully' 
    });

  } catch (error) {
    console.error('Error processing CSP violation report:', error);
    
    // Return error response
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process CSP violation report' 
      },
      { status: 400 }
    );
  }
}

/**
 * GET endpoint for testing CSP reporting
 * This should be disabled in production
 */
export async function GET(request: NextRequest) {
  // Only allow in development
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json(
      { error: 'Method not allowed' },
      { status: 405 }
    );
  }

  // Return CSP reporting endpoint information
  return NextResponse.json({
    endpoint: '/api/csp-report',
    method: 'POST',
    description: 'CSP violation reporting endpoint',
    example: {
      'csp-report': {
        'document-uri': 'https://mygets.net/',
        'violated-directive': 'script-src',
        'original-policy': 'script-src \'self\'',
        'blocked-uri': 'https://malicious-site.com/script.js',
        'source-file': 'https://mygets.net/',
        'line-number': 1,
        'column-number': 1,
        'status-code': 200,
        'referrer': 'https://mygets.net/',
        'user-agent': 'Mozilla/5.0...',
        'disposition': 'enforce'
      }
    }
  });
} 