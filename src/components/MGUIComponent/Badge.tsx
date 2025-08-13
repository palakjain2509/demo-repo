/**
 * MyGETS Badge Component
 */

"use client";

import React from 'react';
import { 
  Badge as FluentBadge,
  mergeClasses
} from '@fluentui/react-components';
import { useSharedStyles } from './styles';
import { mygetsBrandColors } from '@/lib/design-system';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  icon?: React.ReactElement;
  dot?: boolean;
  count?: number;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'medium',
  className,
  icon,
  dot = false,
  count
}) => {
  const styles = useSharedStyles();
  
  const getDefaultIcon = () => {
    switch (variant) {
      case 'success':
        return '✓';
      case 'warning':
        return '⚠';
      case 'error':
        return '✕';
      case 'info':
        return 'ℹ';
      case 'primary':
        return '★';
      case 'secondary':
        return '◆';
      default:
        return null;
    }
  };
  
  const getBadgeClassName = () => {
    switch (variant) {
      case 'success':
        return styles.successBadge;
      case 'warning':
        return styles.warningBadge;
      case 'error':
        return styles.errorBadge;
      default:
        return '';
    }
  };

  const getBadgeStyle = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: mygetsBrandColors.primary[60],
          color: mygetsBrandColors.neutral[10],
          border: `1px solid ${mygetsBrandColors.primary[70]}`
        };
      case 'secondary':
        return {
          backgroundColor: mygetsBrandColors.secondary[60],
          color: mygetsBrandColors.neutral[10],
          border: `1px solid ${mygetsBrandColors.secondary[70]}`
        };
      case 'info':
        return {
          backgroundColor: mygetsBrandColors.neutral[20],
          color: mygetsBrandColors.neutral[90],
          border: `1px solid ${mygetsBrandColors.neutral[30]}`
        };
      case 'neutral':
        return {
          backgroundColor: mygetsBrandColors.neutral[10],
          color: mygetsBrandColors.neutral[90],
          border: `1px solid ${mygetsBrandColors.neutral[20]}`
        };
      default:
        return {};
    }
  };
  
  // Handle count badge
  if (count !== undefined) {
    return (
      <FluentBadge
        size={size}
        className={mergeClasses(getBadgeClassName(), className)}
        style={{
          minWidth: '20px',
          height: '20px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '11px',
          fontWeight: '600',
          ...getBadgeStyle()
        }}
      >
        {count > 99 ? '99+' : count}
      </FluentBadge>
    );
  }
  
  // Handle dot badge
  if (dot) {
    return (
      <div
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: variant === 'success' 
            ? mygetsBrandColors.status.success
            : variant === 'error'
            ? mygetsBrandColors.status.error
            : variant === 'warning'
            ? mygetsBrandColors.status.warning
            : mygetsBrandColors.primary[60],
          display: 'inline-block'
        }}
        className={className}
      />
    );
  }
  
  const displayIcon = icon || getDefaultIcon();
  
  return (
    <FluentBadge
      size={size}
      className={mergeClasses(getBadgeClassName(), className)}
      style={getBadgeStyle()}
    >
      {displayIcon && (
        <span style={{ 
          marginRight: children ? '4px' : '0',
          fontSize: size === 'small' ? '10px' : size === 'large' ? '14px' : '12px'
        }}>
          {displayIcon}
        </span>
      )}
      {children}
    </FluentBadge>
  );
};