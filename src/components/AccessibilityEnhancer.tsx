'use client';

import { useEffect, useRef, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableFocusManagement?: boolean;
  enableSkipLinks?: boolean;
  enableHighContrast?: boolean;
}

/**
 * AccessibilityEnhancer Component
 * 
 * Advanced accessibility component that implements:
 * - Keyboard navigation support
 * - Focus management and trapping
 * - Skip links for screen readers
 * - High contrast mode
 * - ARIA live regions
 * - Screen reader announcements
 */
export default function AccessibilityEnhancer({
  children,
  enableKeyboardNavigation = true,
  enableFocusManagement = true,
  enableSkipLinks = true,
  enableHighContrast = true
}: AccessibilityEnhancerProps) {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [skipLinkTarget, setSkipLinkTarget] = useState<string | null>(null);
  const [announcement, setAnnouncement] = useState('');
  const focusTrapRef = useRef<HTMLDivElement>(null);
  const liveRegionRef = useRef<HTMLDivElement>(null);

  // High contrast mode toggle
  useEffect(() => {
    if (enableHighContrast) {
      const savedMode = localStorage.getItem('highContrastMode');
      if (savedMode === 'true') {
        setIsHighContrast(true);
        document.documentElement.classList.add('high-contrast');
      }
    }
  }, [enableHighContrast]);

  const toggleHighContrast = () => {
    const newMode = !isHighContrast;
    setIsHighContrast(newMode);
    localStorage.setItem('highContrastMode', newMode.toString());
    
    if (newMode) {
      document.documentElement.classList.add('high-contrast');
      announceToScreenReader('High contrast mode enabled');
    } else {
      document.documentElement.classList.remove('high-contrast');
      announceToScreenReader('High contrast mode disabled');
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.altKey) {
        event.preventDefault();
        const mainContent = document.querySelector('main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          announceToScreenReader('Skipped to main content');
        }
      }

      // Navigate between sections
      if (event.key === 'Tab' && event.shiftKey) {
        const focusableElements = document.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
          
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Focus management
  useEffect(() => {
    if (!enableFocusManagement) return;

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      
      // Add focus indicator
      target.classList.add('focus-visible');
      
      // Announce focus changes to screen readers
      if (target.getAttribute('aria-label')) {
        announceToScreenReader(target.getAttribute('aria-label') || '');
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      target.classList.remove('focus-visible');
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enableFocusManagement]);

  // Skip link functionality
  const handleSkipLink = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.focus();
      setSkipLinkTarget(targetId);
      announceToScreenReader(`Skipped to ${target.getAttribute('aria-label') || targetId}`);
      
      // Remove focus after a delay
      setTimeout(() => {
        setSkipLinkTarget(null);
      }, 3000);
    }
  };

  // Screen reader announcements
  const announceToScreenReader = (message: string) => {
    setAnnouncement(message);
    
    // Clear announcement after a delay
    setTimeout(() => {
      setAnnouncement('');
    }, 1000);
  };

  // Focus trap for modals and dropdowns
  const createFocusTrap = (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    
    // Focus first element
    firstElement.focus();
    
    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  };

  return (
    <>
      {/* Skip Links */}
      {enableSkipLinks && (
        <div className="skip-links" role="navigation" aria-label="Skip links">
          <a
            href="#main-content"
            className="skip-link"
            onClick={(e) => {
              e.preventDefault();
              handleSkipLink('main-content');
            }}
          >
            Skip to main content
          </a>
          <a
            href="#navigation"
            className="skip-link"
            onClick={(e) => {
              e.preventDefault();
              handleSkipLink('navigation');
            }}
          >
            Skip to navigation
          </a>
          <a
            href="#footer"
            className="skip-link"
            onClick={(e) => {
              e.preventDefault();
              handleSkipLink('footer');
            }}
          >
            Skip to footer
          </a>
        </div>
      )}

      {/* Accessibility Controls */}
      <div className="accessibility-controls" role="toolbar" aria-label="Accessibility controls">
        {enableHighContrast && (
          <button
            type="button"
            className="accessibility-button"
            onClick={toggleHighContrast}
            aria-pressed={isHighContrast}
            aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
          >
            {isHighContrast ? '☀️' : '🌙'} High Contrast
          </button>
        )}
        
        <button
          type="button"
          className="accessibility-button"
          onClick={() => announceToScreenReader('Accessibility controls available')}
          aria-label="Announce current page"
        >
          📢 Announce
        </button>
      </div>

      {/* Focus Trap Container */}
      <div ref={focusTrapRef} className="focus-trap-container">
        {children}
      </div>

      {/* Live Region for Screen Reader Announcements */}
      <div
        ref={liveRegionRef}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
        role="status"
      >
        {announcement}
      </div>

      {/* Focus Indicator for Skip Link Target */}
      {skipLinkTarget && (
        <div
          className="skip-link-indicator"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '3px',
            backgroundColor: '#007acc',
            zIndex: 9999,
            animation: 'pulse 2s infinite'
          }}
        />
      )}

      <style jsx>{`
        .skip-links {
          position: absolute;
          top: -40px;
          left: 0;
          z-index: 1000;
        }

        .skip-link {
          position: absolute;
          top: 0;
          left: 0;
          background: #007acc;
          color: white;
          padding: 8px 16px;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 600;
          transition: top 0.3s ease;
        }

        .skip-link:focus {
          top: 8px;
        }

        .accessibility-controls {
          position: fixed;
          top: 20px;
          right: 20px;
          display: flex;
          gap: 8px;
          z-index: 1000;
        }

        .accessibility-button {
          background: rgba(0, 0, 0, 0.8);
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
          transition: background-color 0.3s ease;
        }

        .accessibility-button:hover {
          background: rgba(0, 0, 0, 0.9);
        }

        .accessibility-button[aria-pressed="true"] {
          background: #007acc;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .focus-visible {
          outline: 3px solid #007acc;
          outline-offset: 2px;
        }

        .high-contrast {
          filter: contrast(1.5) brightness(1.2);
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </>
  );
}

/**
 * Custom hook for managing focus in modals
 */
export function useFocusTrap(containerRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const focusableElements = container.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    firstElement.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  }, [containerRef]);
}

/**
 * Custom hook for screen reader announcements
 */
export function useScreenReaderAnnouncement() {
  const [announcement, setAnnouncement] = useState('');

  const announce = (message: string) => {
    setAnnouncement(message);
    setTimeout(() => setAnnouncement(''), 1000);
  };

  return { announcement, announce };
} 