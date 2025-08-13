import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';
import crypto from 'crypto';

/**
 * CSRF Protection System
 * 
 * This module provides comprehensive CSRF protection for the MyGETS website.
 * It includes token generation, validation, and session management.
 */

export interface CSRFToken {
  token: string;
  expiresAt: number;
  sessionId: string;
}

export interface CSRFValidationResult {
  valid: boolean;
  reason?: string;
  sessionId?: string;
}

/**
 * Generate a cryptographically secure CSRF token
 * @returns {string} A secure CSRF token
 */
export function generateSecureCSRFToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

/**
 * Generate a session ID for CSRF token association
 * @returns {string} A unique session ID
 */
export function generateSessionId(): string {
  return crypto.randomBytes(16).toString('hex');
}

/**
 * Create a CSRF token with expiration
 * @param sessionId Optional session ID, will generate one if not provided
 * @param expiresInMinutes Token expiration time in minutes (default: 60)
 * @returns {CSRFToken} CSRF token object
 */
export function createCSRFToken(sessionId?: string, expiresInMinutes: number = 60): CSRFToken {
  const token = generateSecureCSRFToken();
  const session = sessionId || generateSessionId();
  const expiresAt = Date.now() + (expiresInMinutes * 60 * 1000);

  return {
    token,
    expiresAt,
    sessionId: session
  };
}

/**
 * Store CSRF token in HTTP-only cookie
 * @param token CSRF token object
 */
export async function setCSRFTokenCookie(token: CSRFToken): Promise<void> {
  const cookieStore = await cookies();
  
  // Set CSRF token cookie (HttpOnly, Secure, SameSite)
  cookieStore.set('csrf_token', token.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60, // 1 hour
    path: '/'
  });

  // Set session ID cookie
  cookieStore.set('csrf_session', token.sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60, // 1 hour
    path: '/'
  });
}

/**
 * Get CSRF token from cookies
 * @returns {CSRFToken | null} CSRF token object or null if not found
 */
export async function getCSRFTokenFromCookie(): Promise<CSRFToken | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('csrf_token')?.value;
  const sessionId = cookieStore.get('csrf_session')?.value;

  if (!token || !sessionId) {
    return null;
  }

  return {
    token,
    sessionId,
    expiresAt: Date.now() + (60 * 60 * 1000) // Assume 1 hour from now
  };
}

/**
 * Validate CSRF token from request
 * @param request NextRequest object
 * @param tokenFromBody CSRF token from request body
 * @returns {CSRFValidationResult} Validation result
 */
export async function validateCSRFToken(
  request: NextRequest, 
  tokenFromBody: string
): Promise<CSRFValidationResult> {
  try {
    // Get token from cookie
    const cookieToken = request.cookies.get('csrf_token')?.value;
    const sessionId = request.cookies.get('csrf_session')?.value;

    if (!cookieToken || !sessionId) {
      return {
        valid: false,
        reason: 'CSRF token not found in cookies'
      };
    }

    // Compare tokens
    if (cookieToken !== tokenFromBody) {
      return {
        valid: false,
        reason: 'CSRF token mismatch'
      };
    }

    // Check if token is expired (optional, since cookies have maxAge)
    // You can add additional expiration logic here if needed

    return {
      valid: true,
      sessionId
    };

  } catch (error) {
    console.error('CSRF validation error:', error);
    return {
      valid: false,
      reason: 'CSRF validation failed'
    };
  }
}

/**
 * Validate CSRF token from form data
 * @param request NextRequest object
 * @param formData FormData object
 * @returns {CSRFValidationResult} Validation result
 */
export async function validateCSRFTokenFromForm(
  request: NextRequest,
  formData: FormData
): Promise<CSRFValidationResult> {
  const tokenFromForm = formData.get('_csrf') as string;
  
  if (!tokenFromForm) {
    return {
      valid: false,
      reason: 'CSRF token not found in form data'
    };
  }

  return validateCSRFToken(request, tokenFromForm);
}

/**
 * Validate CSRF token from JSON body
 * @param request NextRequest object
 * @param body Request body object
 * @returns {CSRFValidationResult} Validation result
 */
export async function validateCSRFTokenFromJSON(
  request: NextRequest,
  body: Record<string, any>
): Promise<CSRFValidationResult> {
  const tokenFromBody = body._csrf;
  
  if (!tokenFromBody) {
    return {
      valid: false,
      reason: 'CSRF token not found in request body'
    };
  }

  return validateCSRFToken(request, tokenFromBody);
}

/**
 * Refresh CSRF token
 * @returns {CSRFToken} New CSRF token
 */
export async function refreshCSRFToken(): Promise<CSRFToken> {
  const newToken = createCSRFToken();
  await setCSRFTokenCookie(newToken);
  return newToken;
}

/**
 * Clear CSRF token cookies
 */
export async function clearCSRFTokenCookies(): Promise<void> {
  const cookieStore = await cookies();
  
  cookieStore.delete('csrf_token');
  cookieStore.delete('csrf_session');
}

/**
 * CSRF middleware for API routes
 * This function can be used to protect API routes
 */
export async function csrfMiddleware(request: NextRequest): Promise<CSRFValidationResult> {
  // Skip CSRF validation for GET requests
  if (request.method === 'GET') {
    return { valid: true };
  }

  try {
    let token: string | null = null;

    // Try to get token from different sources
    if (request.headers.get('content-type')?.includes('application/json')) {
      const body = await request.json() as Record<string, any>;
      token = body._csrf;
    } else if (request.headers.get('content-type')?.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData();
      token = formData.get('_csrf') as string;
    }

    if (!token) {
      return {
        valid: false,
        reason: 'CSRF token not found in request'
      };
    }

    return await validateCSRFToken(request, token);

  } catch (error) {
    console.error('CSRF middleware error:', error);
    return {
      valid: false,
      reason: 'CSRF validation failed'
    };
  }
}

/**
 * Generate CSRF token for forms
 * @returns {string} CSRF token for inclusion in forms
 */
export async function getCSRFTokenForForm(): Promise<string> {
  const existingToken = await getCSRFTokenFromCookie();
  
  if (existingToken) {
    return existingToken.token;
  }

  // Create new token if none exists
  const newToken = createCSRFToken();
  await setCSRFTokenCookie(newToken);
  return newToken.token;
}

/**
 * Add CSRF token to form data
 * @param formData FormData object
 * @returns FormData with CSRF token added
 */
export async function addCSRFTokenToFormData(formData: FormData): Promise<FormData> {
  const token = await getCSRFTokenForForm();
  formData.append('_csrf', token);
  return formData;
}

/**
 * Create CSRF token input field for HTML forms
 * @returns HTML input field with CSRF token
 */
export async function createCSRFTokenInput(): Promise<string> {
  const token = await getCSRFTokenForForm();
  return `<input type="hidden" name="_csrf" value="${token}" />`;
}

/**
 * Validate CSRF token and throw error if invalid
 * @param request NextRequest object
 * @param token CSRF token to validate
 * @throws Error if CSRF token is invalid
 */
export async function validateCSRFTokenOrThrow(
  request: NextRequest,
  token: string
): Promise<void> {
  const result = await validateCSRFToken(request, token);
  
  if (!result.valid) {
    throw new Error(`CSRF validation failed: ${result.reason}`);
  }
} 