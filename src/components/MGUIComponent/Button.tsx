/**
 * MyGETS Button Component
 */

"use client";

import React from 'react';
import { Button as FluentButton } from '@fluentui/react-components';
import { useSharedStyles } from './styles';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'subtle' | 'cta';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactElement;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  onClick,
  disabled = false,
  className,
  type = 'button',
  loading = false
}) => {
  const styles = useSharedStyles();
  
  const getVariantClass = () => {
    switch (variant) {
      case 'primary': return styles.primaryButton;
      case 'secondary': return styles.secondaryButton;
      case 'outline': return styles.outlineButton;
      case 'cta': return styles.ctaButton;
      default: return styles.primaryButton;
    }
  };

  const getFluentAppearance = () => {
    switch (variant) {
      case 'outline': return 'outline';
      case 'subtle': return 'subtle';
      case 'secondary': return 'secondary';
      case 'cta': return 'primary';
      default: return 'primary';
    }
  };
  
  return (
    <FluentButton
      appearance={getFluentAppearance()}
      size={size}
      icon={loading ? undefined : icon}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      className={`${getVariantClass()} ${className || ''}`}
    >
      {loading ? (
        <>
          <span style={{ marginRight: '8px' }}>⏳</span>
          {children}
        </>
      ) : (
        children
      )}
    </FluentButton>
  );
};