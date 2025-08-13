/**
 * MyGETS MessageBar Component
 */

"use client";

import React from 'react';
import {
  MessageBar as FluentMessageBar,
  MessageBarBody,
  MessageBarTitle
} from '@fluentui/react-components';

export interface MessageBarProps {
  title?: string;
  children: React.ReactNode;
  intent?: 'success' | 'warning' | 'error' | 'info';
  dismissible?: boolean;
  onDismiss?: () => void;
  actions?: React.ReactNode;
  multiline?: boolean;
  className?: string;
}

export const MessageBar: React.FC<MessageBarProps> = ({
  title,
  children,
  intent = 'info',
  dismissible = false,
  onDismiss,
  actions,
  multiline = false,
  className
}) => {
  const getIntentIcon = () => {
    switch (intent) {
      case 'success':
        return '✅';
      case 'warning':
        return '⚠️';
      case 'error':
        return '❌';
      case 'info':
      default:
        return 'ℹ️';
    }
  };
  
  return (
    <FluentMessageBar 
      intent={intent} 
      className={className}
      style={{
        position: 'relative',
        padding: multiline ? '16px' : '12px'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: multiline ? 'flex-start' : 'center',
        gap: '8px',
        width: '100%'
      }}>
        <span style={{ 
          fontSize: '16px',
          flexShrink: 0,
          marginTop: multiline ? '2px' : '0'
        }}>
          {getIntentIcon()}
        </span>
        
        <div style={{ 
          flex: 1,
          minWidth: 0
        }}>
          {title && (
            <MessageBarTitle style={{
              marginBottom: '4px',
              fontWeight: '600'
            }}>
              {title}
            </MessageBarTitle>
          )}
          <MessageBarBody style={{
            lineHeight: multiline ? '1.5' : '1.3'
          }}>
            {children}
          </MessageBarBody>
        </div>
        
        {actions && (
          <div style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            flexShrink: 0
          }}>
            {actions}
          </div>
        )}
        
        {dismissible && (
          <button
            onClick={onDismiss}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              opacity: 0.7,
              transition: 'opacity 0.2s ease',
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.7';
            }}
            aria-label="Dismiss message"
          >
            ✕
          </button>
        )}
      </div>
    </FluentMessageBar>
  );
};