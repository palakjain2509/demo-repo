'use client';

import { useState, useEffect } from 'react';
import { 
  ShareIcon, 
  DocumentDuplicateIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);
  const [canCopy, setCanCopy] = useState(false);

  useEffect(() => {
    // Check if native sharing is supported
    setCanShare(typeof navigator.share !== 'undefined');
    
    // Check if clipboard API is supported
    setCanCopy(typeof navigator.clipboard !== 'undefined' && typeof navigator.clipboard.writeText === 'function');
  }, []);

  const handleCopyLink = async () => {
    try {
      if (!canCopy) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = url;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          document.execCommand('copy');
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error('Fallback copy failed:', err);
        } finally {
          document.body.removeChild(textArea);
        }
        return;
      }

      // Modern clipboard API
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      // Don't show error to user, just log it
    }
  };

  const shareData = {
    title: title,
    url: url,
  };

  const handleShare = async () => {
    try {
      if (canShare) {
        await navigator.share(shareData);
      }
    } catch (err) {
      // Only log actual errors, not user cancellations
      if (err instanceof Error && err.name !== 'AbortError') {
        console.error('Failed to share:', err);
      }
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Share Button - Only show if native sharing is supported */}
      {canShare && (
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          aria-label="Share this article"
        >
          <ShareIcon className="h-5 w-5" />
          <span>Share</span>
        </button>
      )}

      {/* Copy Link Button - Always show, with fallback */}
      <button
        onClick={handleCopyLink}
        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        aria-label="Copy link to clipboard"
      >
        {copied ? (
          <>
            <CheckIcon className="h-5 w-5 text-green-500" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <DocumentDuplicateIcon className="h-5 w-5" />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
} 