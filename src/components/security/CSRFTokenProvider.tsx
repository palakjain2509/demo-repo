'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

/**
 * CSRF Token Context
 * Provides CSRF tokens to child components
 */
interface CSRFTokenContextType {
  csrfToken: string | null;
  refreshToken: () => Promise<void>;
  isLoading: boolean;
}

const CSRFTokenContext = createContext<CSRFTokenContextType | undefined>(undefined);

/**
 * CSRF Token Provider Component
 * Manages CSRF tokens for the application
 */
export function CSRFTokenProvider({ children }: { children: React.ReactNode }) {
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Fetch CSRF token from server
   */
  const fetchCSRFToken = async (): Promise<string> => {
    try {
      const response = await fetch('/api/csrf-token', {
        method: 'GET',
        credentials: 'include', // Include cookies
      });

      if (!response.ok) {
        throw new Error('Failed to fetch CSRF token');
      }

      const data = await response.json() as { token: string };
      return data.token;
    } catch (error) {
      console.error('Error fetching CSRF token:', error);
      throw error;
    }
  };

  /**
   * Refresh CSRF token
   */
  const refreshToken = async (): Promise<void> => {
    try {
      const token = await fetchCSRFToken();
      setCsrfToken(token);
    } catch (error) {
      console.error('Error refreshing CSRF token:', error);
    }
  };

  /**
   * Initialize CSRF token on component mount
   */
  useEffect(() => {
    const initializeToken = async () => {
      try {
        await refreshToken();
      } catch (error) {
        console.error('Failed to initialize CSRF token:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeToken();
  }, []);

  const value: CSRFTokenContextType = {
    csrfToken,
    refreshToken,
    isLoading
  };

  return (
    <CSRFTokenContext.Provider value={value}>
      {children}
    </CSRFTokenContext.Provider>
  );
}

/**
 * Hook to use CSRF token
 */
export function useCSRFToken(): CSRFTokenContextType {
  const context = useContext(CSRFTokenContext);
  if (context === undefined) {
    throw new Error('useCSRFToken must be used within a CSRFTokenProvider');
  }
  return context;
}

/**
 * CSRF Token Input Component
 * Renders a hidden input field with the CSRF token
 */
export function CSRFTokenInput(): React.JSX.Element | null {
  const { csrfToken, isLoading } = useCSRFToken();

  if (isLoading || !csrfToken) {
    return null;
  }

  return (
    <input 
      type="hidden" 
      name="_csrf" 
      value={csrfToken} 
    />
  );
}

/**
 * Hook to add CSRF token to form data
 */
export function useCSRFFormData(): (formData: FormData) => FormData {
  const { csrfToken } = useCSRFToken();

  return (formData: FormData): FormData => {
    if (csrfToken) {
      formData.append('_csrf', csrfToken);
    }
    return formData;
  };
}

/**
 * Hook to add CSRF token to JSON data
 */
export function useCSRFJSONData(): (data: Record<string, any>) => Record<string, any> {
  const { csrfToken } = useCSRFToken();

  return (data: Record<string, any>): Record<string, any> => {
    if (csrfToken) {
      return { ...data, _csrf: csrfToken };
    }
    return data;
  };
}

/**
 * CSRF Protected Form Component
 * Wraps a form with CSRF protection
 */
interface CSRFProtectedFormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  children: React.ReactNode;
  onSubmit?: (formData: FormData) => void | Promise<void>;
}

export function CSRFProtectedForm({ 
  children, 
  onSubmit, 
  ...formProps 
}: CSRFProtectedFormProps): React.JSX.Element {
  const { csrfToken, isLoading } = useCSRFToken();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!csrfToken) {
      console.error('CSRF token not available');
      return;
    }

    const formData = new FormData(event.currentTarget);
    formData.append('_csrf', csrfToken);

    if (onSubmit) {
      await onSubmit(formData);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <form {...formProps} onSubmit={handleSubmit}>
      <CSRFTokenInput />
      {children}
    </form>
  );
}