/**
 * MyGETS Branded Fluent UI Components
 * Custom components that implement MyGETS design system with Fluent UI v9
 */

"use client";

import React from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardPreview,
  CardFooter,
  Input,
  Label,
  Text,
  Title1,
  Title2,
  Title3,
  Subtitle1,
  Subtitle2,
  Body1,
  Body2,
  Caption1,
  Caption2,
  makeStyles,
  shorthands,
  tokens,
  Badge,
  Avatar,
  Divider,
  Link,
  Spinner,
  ProgressBar,
  MessageBar,
  MessageBarBody,
  MessageBarTitle,
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogContent,
  DialogBody,
  DialogActions,
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Tab,
  TabList,
  SelectTabData,
  SelectTabEvent,
  Tooltip,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuButton
} from '@fluentui/react-components';
import {
  ChevronRightRegular,
  InfoRegular,
  CheckmarkCircleRegular,
  WarningRegular,
  ErrorCircleRegular,
  ArrowRightRegular
} from '@fluentui/react-icons';
import { mygetsBrandColors, mygetsBrandTokens } from '@/lib/design-system/brand';

// Custom styles using MyGETS design tokens
const useMyGetsStyles = makeStyles({
  // Button styles
  primaryButton: {
    backgroundColor: mygetsBrandColors.primary[70],
    color: '#ffffff',
    ...shorthands.border('none'),
    borderRadius: '4px',
    fontWeight: '600',
    ':hover': {
      backgroundColor: mygetsBrandColors.primary[80]
    },
    ':active': {
      backgroundColor: mygetsBrandColors.primary[90]
    }
  },
  
  secondaryButton: {
    backgroundColor: mygetsBrandColors.secondary[70],
    color: '#ffffff',
    ...shorthands.border('none'),
    borderRadius: '4px',
    fontWeight: '600',
    ':hover': {
      backgroundColor: mygetsBrandColors.secondary[80]
    },
    ':active': {
      backgroundColor: mygetsBrandColors.secondary[90]
    }
  },
  
  outlineButton: {
    backgroundColor: 'transparent',
    color: mygetsBrandColors.primary[70],
    ...shorthands.border('1px', 'solid', mygetsBrandColors.primary[70]),
    borderRadius: '4px',
    fontWeight: '600',
    ':hover': {
      backgroundColor: mygetsBrandColors.primary[10]
    },
    ':active': {
      backgroundColor: mygetsBrandColors.primary[20]
    }
  },
  
  // Card styles
  myGetsCard: {
    backgroundColor: '#ffffff',
    ...shorthands.border('1px', 'solid', mygetsBrandColors.neutral[40]),
    borderRadius: '6px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.14), 0 0px 2px rgba(0, 0, 0, 0.12)',
    ...shorthands.padding('16px'),
    ':hover': {
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.14), 0 2px 4px rgba(0, 0, 0, 0.12)'
    }
  },
  
  // Input styles
  myGetsInput: {
    backgroundColor: '#ffffff',
    ...shorthands.border('1px', 'solid', mygetsBrandColors.neutral[60]),
    borderRadius: '4px',
    ':focus-within': {
      ...shorthands.border('2px', 'solid', mygetsBrandColors.primary[70])
    }
  },
  
  // Navigation styles
  navLink: {
    color: mygetsBrandColors.neutral[90],
    textDecoration: 'none',
    fontWeight: '500',
    ':hover': {
      color: mygetsBrandColors.primary[70]
    },
    ':active': {
      color: mygetsBrandColors.primary[80]
    }
  },
  
  // Status styles
  successBadge: {
    backgroundColor: mygetsBrandColors.secondary[10],
    color: mygetsBrandColors.secondary[70],
    ...shorthands.border('1px', 'solid', mygetsBrandColors.secondary[40])
  },
  
  warningBadge: {
    backgroundColor: mygetsBrandColors.accent[10],
    color: mygetsBrandColors.accent[70],
    ...shorthands.border('1px', 'solid', mygetsBrandColors.accent[40])
  },
  
  errorBadge: {
    backgroundColor: '#fdf2f2',
    color: mygetsBrandColors.status.error,
    ...shorthands.border('1px', 'solid', '#fca5a5')
  },
  
  // Hero section
  heroSection: {
    backgroundColor: `linear-gradient(135deg, ${mygetsBrandColors.primary[70]} 0%, ${mygetsBrandColors.primary[90]} 100%)`,
    color: '#ffffff',
    ...shorthands.padding('48px', '24px'),
    textAlign: 'center'
  },
  
  // Feature card
  featureCard: {
    backgroundColor: '#ffffff',
    ...shorthands.border('1px', 'solid', mygetsBrandColors.neutral[30]),
    borderRadius: '8px',
    ...shorthands.padding('24px'),
    textAlign: 'center',
    ':hover': {
      ...shorthands.border('1px', 'solid', mygetsBrandColors.primary[40]),
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.14), 0 2px 4px rgba(0, 0, 0, 0.12)'
    }
  }
});

// MyGETS Button Component
interface MyGetsButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'subtle';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactElement;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const MyGetsButton: React.FC<MyGetsButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  onClick,
  disabled = false,
  className
}) => {
  const styles = useMyGetsStyles();
  
  const getVariantClass = () => {
    switch (variant) {
      case 'primary': return styles.primaryButton;
      case 'secondary': return styles.secondaryButton;
      case 'outline': return styles.outlineButton;
      default: return styles.primaryButton;
    }
  };
  
  return (
    <Button
      appearance={variant === 'outline' ? 'outline' : 'primary'}
      size={size}
      icon={icon}
      onClick={onClick}
      disabled={disabled}
      className={`${getVariantClass()} ${className || ''}`}
    >
      {children}
    </Button>
  );
};

// MyGETS Card Component
interface MyGetsCardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  image?: string;
  actions?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const MyGetsCard: React.FC<MyGetsCardProps> = ({
  children,
  title,
  subtitle,
  image,
  actions,
  className,
  onClick
}) => {
  const styles = useMyGetsStyles();
  
  return (
    <Card className={`${styles.myGetsCard} ${className || ''}`} onClick={onClick}>
      {image && (
        <CardPreview>
          <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        </CardPreview>
      )}
      
      {(title || subtitle) && (
        <CardHeader
          header={title && <Title3>{title}</Title3>}
          description={subtitle && <Body1>{subtitle}</Body1>}
        />
      )}
      
      {children}
      
      {actions && (
        <CardFooter>
          {actions}
        </CardFooter>
      )}
    </Card>
  );
};

// MyGETS Input Component
interface MyGetsInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'number';
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
}

export const MyGetsInput: React.FC<MyGetsInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  required = false,
  disabled = false,
  error,
  className
}) => {
  const styles = useMyGetsStyles();
  
  return (
    <div className={className}>
      {label && (
        <Label required={required} style={{ marginBottom: '4px', display: 'block' }}>
          {label}
        </Label>
      )}
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(_, data) => onChange?.(data.value)}
        disabled={disabled}
        className={styles.myGetsInput}
      />
      {error && (
        <Text style={{ color: mygetsBrandColors.status.error, fontSize: '12px', marginTop: '4px' }}>
          {error}
        </Text>
      )}
    </div>
  );
};

// MyGETS Badge Component
interface MyGetsBadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  size?: 'small' | 'medium' | 'large';
}

export const MyGetsBadge: React.FC<MyGetsBadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'medium'
}) => {
  const styles = useMyGetsStyles();
  
  const getVariantClass = () => {
    switch (variant) {
      case 'success': return styles.successBadge;
      case 'warning': return styles.warningBadge;
      case 'error': return styles.errorBadge;
      default: return '';
    }
  };
  
  const getIcon = () => {
    switch (variant) {
      case 'success': return <CheckmarkCircleRegular />;
      case 'warning': return <WarningRegular />;
      case 'error': return <ErrorCircleRegular />;
      case 'info': return <InfoRegular />;
      default: return null;
    }
  };
  
  return (
    <Badge
      size={size}
      icon={getIcon()}
      className={getVariantClass()}
    >
      {children}
    </Badge>
  );
};

// MyGETS Message Bar Component
interface MyGetsMessageBarProps {
  title?: string;
  children: React.ReactNode;
  intent?: 'success' | 'warning' | 'error' | 'info';
}

export const MyGetsMessageBar: React.FC<MyGetsMessageBarProps> = ({
  title,
  children,
  intent = 'info'
}) => {
  return (
    <MessageBar intent={intent}>
      {title && <MessageBarTitle>{title}</MessageBarTitle>}
      <MessageBarBody>{children}</MessageBarBody>
    </MessageBar>
  );
};

// MyGETS Feature Card Component
interface MyGetsFeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactElement;
  link?: string;
  onClick?: () => void;
}

export const MyGetsFeatureCard: React.FC<MyGetsFeatureCardProps> = ({
  title,
  description,
  icon,
  link,
  onClick
}) => {
  const styles = useMyGetsStyles();
  
  return (
    <div className={styles.featureCard} onClick={onClick}>
      {icon && (
        <div style={{ 
          marginBottom: '16px', 
          color: mygetsBrandColors.primary[70],
          fontSize: '32px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          {icon}
        </div>
      )}
      <Title3 style={{ marginBottom: '8px', color: mygetsBrandColors.neutral[90] }}>
        {title}
      </Title3>
      <Body1 style={{ marginBottom: '16px', color: mygetsBrandColors.neutral[80] }}>
        {description}
      </Body1>
      {link && (
        <Link href={link} className={styles.navLink}>
          Learn more <ArrowRightRegular style={{ marginLeft: '4px' }} />
        </Link>
      )}
    </div>
  );
};

// MyGETS Hero Section Component
interface MyGetsHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryAction?: {
    text: string;
    onClick: () => void;
  };
  secondaryAction?: {
    text: string;
    onClick: () => void;
  };
}

export const MyGetsHero: React.FC<MyGetsHeroProps> = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction
}) => {
  const styles = useMyGetsStyles();
  
  return (
    <div className={styles.heroSection}>
      {subtitle && (
        <Subtitle1 style={{ marginBottom: '8px', opacity: 0.9 }}>
          {subtitle}
        </Subtitle1>
      )}
      <Title1 style={{ marginBottom: '16px', fontSize: '48px', fontWeight: '700' }}>
        {title}
      </Title1>
      {description && (
        <Body1 style={{ marginBottom: '32px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 32px' }}>
          {description}
        </Body1>
      )}
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {primaryAction && (
          <MyGetsButton variant="primary" size="large" onClick={primaryAction.onClick}>
            {primaryAction.text}
          </MyGetsButton>
        )}
        {secondaryAction && (
          <MyGetsButton variant="outline" size="large" onClick={secondaryAction.onClick}>
            {secondaryAction.text}
          </MyGetsButton>
        )}
      </div>
    </div>
  );
};

// Export all components
export {
  // Re-export Fluent UI components for convenience
  Button,
  Card,
  Input,
  Label,
  Text,
  Title1,
  Title2,
  Title3,
  Subtitle1,
  Subtitle2,
  Body1,
  Body2,
  Caption1,
  Caption2,
  Badge,
  Avatar,
  Divider,
  Link,
  Spinner,
  ProgressBar,
  MessageBar,
  Dialog,
  Accordion,
  Tab,
  TabList,
  Tooltip,
  Menu
};