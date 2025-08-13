/**
 * MyGETS Card Component
 */

"use client";

import React from 'react';
import {
  Card as FluentCard,
  CardHeader,
  CardPreview,
  CardFooter,
  Title3,
  Body1
} from '@fluentui/react-components';
import { useSharedStyles } from './styles';

export interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  image?: string;
  actions?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'enhanced';
  loading?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  image,
  actions,
  className,
  onClick,
  variant = 'default',
  loading = false
}) => {
  const styles = useSharedStyles();
  
  const getCardClass = () => {
    switch (variant) {
      case 'enhanced': return styles.enhancedCard;
      default: return styles.card;
    }
  };
  
  if (loading) {
    return (
      <FluentCard className={`${getCardClass()} ${className || ''}`}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '200px',
          opacity: 0.6 
        }}>
          <span style={{ fontSize: '24px' }}>⏳</span>
          <span style={{ marginLeft: '8px' }}>Loading...</span>
        </div>
      </FluentCard>
    );
  }
  
  return (
    <FluentCard 
      className={`${getCardClass()} ${className || ''}`} 
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {image && (
        <CardPreview>
          <img 
            src={image} 
            alt={title} 
            style={{ 
              width: '100%', 
              height: '200px', 
              objectFit: 'cover',
              borderRadius: '8px 8px 0 0'
            }} 
          />
        </CardPreview>
      )}
      
      {(title || subtitle) && (
        <CardHeader
          header={title && (
            <Title3 style={{ 
              color: variant === 'enhanced' ? '#1a1a1a' : undefined,
              fontWeight: variant === 'enhanced' ? '700' : undefined
            }}>
              {title}
            </Title3>
          )}
          description={subtitle && (
            <Body1 style={{ 
              color: variant === 'enhanced' ? '#666666' : undefined 
            }}>
              {subtitle}
            </Body1>
          )}
        />
      )}
      
      <div style={{ 
        flex: 1,
        color: variant === 'enhanced' ? '#333333' : undefined
      }}>
        {children}
      </div>
      
      {actions && (
        <CardFooter style={{ 
          borderTop: variant === 'enhanced' ? '1px solid #f0f0f0' : undefined,
          paddingTop: variant === 'enhanced' ? '16px' : undefined,
          marginTop: variant === 'enhanced' ? '16px' : undefined
        }}>
          {actions}
        </CardFooter>
      )}
    </FluentCard>
  );
};