import React, { useState, useEffect } from 'react';

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
}

/**
 * Cookie Consent Banner Component
 * 
 * Displays a cookie consent banner with options to accept or decline.
 * Uses localStorage to remember user's choice.
 * 
 * TODO: Replace with backend integration when available.
 */
export const CookieConsent: React.FC<CookieConsentProps> = ({ 
  onAccept = () => {}, 
  onDecline = () => {} 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Check if user has already made a choice
    const consentStatus = localStorage.getItem('cookieConsent');
    
    // Only show banner if no choice has been made
    if (!consentStatus) {
      setIsVisible(true);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    onAccept();
  };
  
  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
    onDecline();
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 md:mr-8">
          <p className="text-sm md:text-base">
            We use cookies to enhance your experience on our website. By continuing to browse, you agree to our use of cookies.
            Please read our <a href="/legal/privacy-policy" className="underline hover:text-blue-300">Privacy Policy</a> for more information.
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleDecline}
            className="px-4 py-2 bg-transparent border border-white text-white text-sm font-medium rounded hover:bg-white hover:text-gray-900 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Hook to manage cookie consent state
 * 
 * Returns the current consent status and functions to update it.
 * 
 * TODO: Replace with backend integration when available.
 */
export function useCookieConsent() {
  const [consentStatus, setConsentStatus] = useState<string | null>(null);
  
  useEffect(() => {
    // Load consent status from localStorage
    const savedStatus = localStorage.getItem('cookieConsent');
    setConsentStatus(savedStatus);
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setConsentStatus('accepted');
    // TODO: Add analytics or tracking initialization here
    console.log('Cookies accepted - placeholder for analytics initialization');
  };
  
  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setConsentStatus('declined');
    // TODO: Add code to disable non-essential cookies
    console.log('Cookies declined - placeholder for disabling non-essential cookies');
  };
  
  return {
    consentStatus,
    acceptCookies,
    declineCookies,
    hasConsented: consentStatus === 'accepted'
  };
}
