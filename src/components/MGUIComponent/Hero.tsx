/**
 * MyGETS Hero Component
 */

"use client";

import React from 'react';
import {
  Title1,
  Subtitle1,
  Body1,
  mergeClasses
} from '@fluentui/react-components';
import { useSharedStyles } from './styles';
import { Button } from './Button';

export interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryAction?: {
    text: string;
    onClick: () => void;
    loading?: boolean;
  };
  secondaryAction?: {
    text: string;
    onClick: () => void;
  };
  backgroundImage?: string;
  backgroundVideo?: string;
  gradient?: boolean;
  centered?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  children?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  backgroundVideo,
  gradient = false,
  centered = true,
  size = 'large',
  className,
  children
}) => {
  const styles = useSharedStyles();
  
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          padding: '60px 20px',
          titleSize: '2.5rem',
          descriptionSize: '1.1rem'
        };
      case 'medium':
        return {
          padding: '80px 20px',
          titleSize: '3rem',
          descriptionSize: '1.2rem'
        };
      case 'large':
      default:
        return {
          padding: '120px 20px',
          titleSize: '3.5rem',
          descriptionSize: '1.25rem'
        };
    }
  };
  
  const sizeStyles = getSizeStyles();
  
  const backgroundStyles = {
    ...(backgroundImage && {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }),
    ...(gradient && {
      background: 'linear-gradient(135deg, #0078d4 0%, #106ebe 50%, #005a9e 100%)'
    })
  };
  
  return (
    <div 
      className={mergeClasses(styles.heroSection, className)}
      style={{
        ...backgroundStyles,
        padding: sizeStyles.padding,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {backgroundVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}
      
      {(backgroundImage || backgroundVideo || gradient) && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 0
        }} />
      )}
      
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        textAlign: centered ? 'center' : 'left',
        position: 'relative',
        zIndex: 1
      }}>
        {subtitle && (
          <Subtitle1 style={{ 
            marginBottom: '16px',
            opacity: 0.9,
            color: (backgroundImage || backgroundVideo || gradient) ? '#ffffff' : undefined
          }}>
            {subtitle}
          </Subtitle1>
        )}
        
        <Title1 style={{ 
          marginBottom: '24px',
          fontSize: sizeStyles.titleSize,
          fontWeight: '700',
          lineHeight: '1.1',
          color: (backgroundImage || backgroundVideo || gradient) ? '#ffffff' : undefined
        }}>
          {title}
        </Title1>
        
        {description && (
          <Body1 style={{ 
            marginBottom: '32px',
            fontSize: sizeStyles.descriptionSize,
            opacity: 0.9,
            maxWidth: '800px',
            margin: centered ? '0 auto 32px' : '0 0 32px',
            color: (backgroundImage || backgroundVideo || gradient) ? '#ffffff' : undefined
          }}>
            {description}
          </Body1>
        )}
        
        <div style={{ 
          display: 'flex', 
          gap: '16px', 
          justifyContent: centered ? 'center' : 'flex-start',
          flexWrap: 'wrap',
          marginBottom: children ? '32px' : '0'
        }}>
          {primaryAction && (
            <Button
              variant="cta"
              size="large"
              loading={primaryAction.loading}
              onClick={primaryAction.onClick}
            >
              {primaryAction.text}
            </Button>
          )}
          
          {secondaryAction && (
             <Button
               variant="outline"
               size="large"
               onClick={secondaryAction.onClick}
             >
               {secondaryAction.text}
             </Button>
           )}
        </div>
        
        {children && (
          <div style={{
            marginTop: '32px'
          }}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};