/**
 * MyGETS FeatureCard Component
 */

"use client";

import React from 'react';
import { Title3, Body1, Link, mergeClasses } from '@fluentui/react-components';
import { useSharedStyles } from './styles';
import { mygetsBrandColors } from '@/lib/design-system';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactElement;
  link?: {
    text: string;
    href: string;
  };
  image?: string;
  badge?: string;
  variant?: 'default' | 'highlighted' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  link,
  image,
  badge,
  variant = 'default',
  size = 'medium',
  onClick,
  className
}) => {
  const styles = useSharedStyles();
  
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          padding: '16px',
          titleSize: '18px',
          descriptionSize: '14px',
          iconSize: '20px'
        };
      case 'large':
        return {
          padding: '32px',
          titleSize: '24px',
          descriptionSize: '18px',
          iconSize: '32px'
        };
      case 'medium':
      default:
        return {
          padding: '24px',
          titleSize: '20px',
          descriptionSize: '16px',
          iconSize: '24px'
        };
    }
  };
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'highlighted':
        return {
          background: `linear-gradient(135deg, ${mygetsBrandColors.primary[10]} 0%, ${mygetsBrandColors.secondary[10]} 100%)`,
          border: `2px solid ${mygetsBrandColors.primary[40]}`,
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 32px rgba(0, 120, 212, 0.15)'
        };
      case 'minimal':
        return {
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none'
        };
      case 'default':
      default:
        return {};
    }
  };
  
  const sizeStyles = getSizeStyles();
  const variantStyles = getVariantStyles();
  
  return (
    <div 
      className={mergeClasses(styles.featureCard, className)}
      onClick={onClick}
      style={{ 
        cursor: onClick ? 'pointer' : 'default',
        padding: sizeStyles.padding,
        ...variantStyles,
        transition: 'all 0.3s ease',
        position: 'relative'
      }}
    >
      {badge && (
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          backgroundColor: mygetsBrandColors.secondary[60],
          color: mygetsBrandColors.neutral[10],
          padding: '4px 8px',
          borderRadius: '12px',
          fontSize: '11px',
          fontWeight: '600'
        }}>
          {badge}
        </div>
      )}
      
      {image && (
        <div style={{
          marginBottom: '16px',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <img 
            src={image} 
            alt={title}
            style={{
              width: '100%',
              height: '160px',
              objectFit: 'cover'
            }}
          />
        </div>
      )}
      
      {icon && (
        <div style={{ 
          marginBottom: '16px',
          color: variant === 'highlighted' 
            ? mygetsBrandColors.primary[70] 
            : mygetsBrandColors.primary[60],
          fontSize: sizeStyles.iconSize
        }}>
          {icon}
        </div>
      )}
      
      <Title3 style={{ 
        marginBottom: '12px',
        color: mygetsBrandColors.neutral[90],
        fontSize: sizeStyles.titleSize,
        fontWeight: '600'
      }}>
        {title}
      </Title3>
      
      <Body1 style={{ 
        marginBottom: link ? '16px' : '0',
        color: mygetsBrandColors.neutral[70],
        lineHeight: '1.5',
        fontSize: sizeStyles.descriptionSize
      }}>
        {description}
      </Body1>
      
      {link && (
        <Link 
          href={link.href}
          style={{ 
            color: variant === 'highlighted' 
              ? mygetsBrandColors.primary[70] 
              : mygetsBrandColors.primary[60],
            textDecoration: 'none',
            fontWeight: '500',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          {link.text} →
        </Link>
      )}
    </div>
  );
};