import { NextRequest, NextResponse } from 'next/server';
import { getCSRFTokenForForm, createCSRFToken, setCSRFTokenCookie } from '@/lib/security/csrf';

/**
 * CSRF Token Generation Endpoint
 * 
 * This endpoint generates and returns CSRF tokens for client-side use.
 * The token is also stored in an HTTP-only cookie for server-side validation.
 */

export async function GET(request: NextRequest) {
  try {
    // Check if user already has a valid CSRF token
    let token = await getCSRFTokenForForm();
    
    // If no token exists, create a new one
    if (!token) {
      const csrfToken = createCSRFToken();
      await setCSRFTokenCookie(csrfToken);
      token = csrfToken.token;
    }

    // Return the token to the client
    return NextResponse.json({
      success: true,
      token,
      message: 'CSRF token generated successfully'
    });

  } catch (error) {
    console.error('Error generating CSRF token:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to generate CSRF token' 
      },
      { status: 500 }
    );
  }
}

/**
 * POST endpoint to refresh CSRF token
 * This can be used to get a new token when needed
 */
export async function POST(request: NextRequest) {
  try {
    // Create a new CSRF token
    const csrfToken = createCSRFToken();
    await setCSRFTokenCookie(csrfToken);

    return NextResponse.json({
      success: true,
      token: csrfToken.token,
      message: 'CSRF token refreshed successfully'
    });

  } catch (error) {
    console.error('Error refreshing CSRF token:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to refresh CSRF token' 
      },
      { status: 500 }
    );
  }
} 