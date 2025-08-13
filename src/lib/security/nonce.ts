/**
 * Nonce Management for Content Security Policy
 * 
 * This utility provides functions for generating and managing nonces
 * for inline scripts to comply with strict CSP policies.
 */

import { generateNonce } from './csp';

/**
 * Nonce context for React components
 * This allows components to access the current nonce
 */
export interface NonceContext {
  nonce: string;
  setNonce: (nonce: string) => void;
}

/**
 * Generate a new nonce for the current request
 * This should be called on each page load/request
 */
export function createNonce(): string {
  return generateNonce();
}

/**
 * Add nonce to inline script
 * 
 * @param scriptContent The script content
 * @param nonce The nonce to add
 * @returns Script tag with nonce attribute
 */
export function addNonceToScript(scriptContent: string, nonce: string): string {
  return `<script nonce="${nonce}">${scriptContent}</script>`;
}

/**
 * Add nonce to inline style
 * 
 * @param styleContent The style content
 * @param nonce The nonce to add
 * @returns Style tag with nonce attribute
 */
export function addNonceToStyle(styleContent: string, nonce: string): string {
  return `<style nonce="${nonce}">${styleContent}</style>`;
}

/**
 * Create a nonce-aware script component
 * 
 * @param content The script content
 * @param nonce The nonce
 * @returns React component with nonce
 */
export function createNonceScript(content: string, nonce: string) {
  return {
    __html: content,
    nonce
  };
}

/**
 * Validate nonce format
 * 
 * @param nonce The nonce to validate
 * @returns Whether the nonce is valid
 */
export function validateNonce(nonce: string): boolean {
  // Nonce should be alphanumeric and at least 16 characters
  const nonceRegex = /^[a-zA-Z0-9]{16,}$/;
  return nonceRegex.test(nonce);
}

/**
 * Create nonce script HTML string
 * This returns the HTML string for a nonce script instead of JSX
 * 
 * @param nonce The nonce to use
 * @returns HTML string for nonce script
 */
export function createNonceScriptHTML(nonce: string): string {
  return `<script nonce="${nonce}">window.__NONCE__ = "${nonce}";</script>`;
}

/**
 * Hook to get current nonce from window object
 * This should be used in client components that need nonce
 */
export function useNonce(): string | null {
  if (typeof window !== 'undefined') {
    return (window as any).__NONCE__ || null;
  }
  return null;
}

/**
 * Utility to create nonce-aware JSON-LD script
 * 
 * @param jsonLd The JSON-LD data
 * @param nonce The nonce
 * @returns Script tag with nonce for JSON-LD
 */
export function createNonceJsonLdScript(jsonLd: any, nonce: string) {
  return {
    type: 'application/ld+json',
    nonce,
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(jsonLd)
    }
  };
}

/**
 * Utility to create nonce-aware inline script
 * 
 * @param script The script content
 * @param nonce The nonce
 * @returns Script tag with nonce
 */
export function createNonceInlineScript(script: string, nonce: string) {
  return {
    nonce,
    dangerouslySetInnerHTML: {
      __html: script
    }
  };
} 