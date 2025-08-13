/**
 * CSRF Protection - Client-Safe Stubs Only
 *
 * This file only exports deprecated, client-safe stubs for legacy compatibility.
 * Do NOT import server-only CSRF utilities (using next/headers, crypto, etc.) in client code or shared utilities.
 *
 * For server-side CSRF logic, import directly from '@/lib/security/csrf' in API routes or server components only.
 */

/**
 * @deprecated Use the new CSRF system via API endpoints and React context/hooks.
 * Generate a CSRF token (mock, for legacy only)
 */
export function generateCSRFTokenLegacy(): string {
  console.warn('generateCSRFTokenLegacy() is deprecated. Use the new CSRF system.');
  return `mock-csrf-token-${Math.random().toString(36).substring(2, 15)}`;
}

/**
 * @deprecated Use the new CSRF system via API endpoints and React context/hooks.
 * Validate a CSRF token (mock, for legacy only)
 */
export function validateCSRFTokenLegacy(token: string): boolean {
  console.warn('validateCSRFTokenLegacy() is deprecated. Use the new CSRF system.');
  return true;
}

/**
 * @deprecated Use the new CSRF system via API endpoints and React context/hooks.
 * Add CSRF token to form data (mock, for legacy only)
 */
export function addCSRFTokenLegacy(formData: FormData): FormData {
  console.warn('addCSRFTokenLegacy() is deprecated. Use the new CSRF system.');
  formData.append('_csrf', generateCSRFTokenLegacy());
  return formData;
}

/**
 * @deprecated Use the new CSRF system via API endpoints and React context/hooks.
 * Get CSRF token for form (mock, for legacy only)
 */
export function getCSRFTokenForFormLegacy(): string {
  console.warn('getCSRFTokenForFormLegacy() is deprecated. Use the new CSRF system.');
  return generateCSRFTokenLegacy();
}
