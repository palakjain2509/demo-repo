/**
 * MyGETS Input Component
 */

"use client";

import React from 'react';
import {
  Input as FluentInput,
  Label,
  Text
} from '@fluentui/react-components';
import { useSharedStyles } from './styles';
import { mygetsBrandColors } from '@/lib/design-system/brand';

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  required?: boolean;
  disabled?: boolean;
  error?: string;
  success?: string;
  className?: string;
  icon?: React.ReactElement;
  maxLength?: number;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  required = false,
  disabled = false,
  error,
  success,
  className,
  icon,
  maxLength
}) => {
  const styles = useSharedStyles();
  
  const hasError = Boolean(error);
  const hasSuccess = Boolean(success && !error);
  
  return (
    <div className={className}>
      {label && (
        <Label 
          required={required} 
          style={{ 
            marginBottom: '8px', 
            display: 'block',
            fontWeight: '500',
            color: hasError ? mygetsBrandColors.status.error : mygetsBrandColors.neutral[90]
          }}
        >
          {label}
        </Label>
      )}
      
      <div style={{ position: 'relative' }}>
        <FluentInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(_, data) => onChange?.(data.value)}
          disabled={disabled}
          maxLength={maxLength}
          className={styles.input}
          style={{
            borderColor: hasError 
              ? mygetsBrandColors.status.error 
              : hasSuccess 
                ? mygetsBrandColors.secondary[60]
                : undefined,
            paddingLeft: icon ? '40px' : undefined
          }}
        />
        
        {icon && (
          <div style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: hasError 
              ? mygetsBrandColors.status.error 
              : mygetsBrandColors.neutral[60],
            fontSize: '16px'
          }}>
            {icon}
          </div>
        )}
        
        {hasSuccess && (
          <div style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: mygetsBrandColors.secondary[60],
            fontSize: '16px'
          }}>
            ✓
          </div>
        )}
      </div>
      
      {error && (
        <Text 
          style={{ 
            color: mygetsBrandColors.status.error, 
            fontSize: '12px', 
            marginTop: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          <span>⚠️</span>
          {error}
        </Text>
      )}
      
      {success && !error && (
        <Text 
          style={{ 
            color: mygetsBrandColors.secondary[60], 
            fontSize: '12px', 
            marginTop: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          <span>✅</span>
          {success}
        </Text>
      )}
      
      {maxLength && value && (
        <Text 
          style={{ 
            color: mygetsBrandColors.neutral[60], 
            fontSize: '11px', 
            marginTop: '2px',
            textAlign: 'right'
          }}
        >
          {value.length}/{maxLength}
        </Text>
      )}
    </div>
  );
};