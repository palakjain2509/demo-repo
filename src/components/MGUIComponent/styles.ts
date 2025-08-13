/**
 * Shared styles for MyGETS UI Components
 * Enhanced with the new design system tokens
 */

import { makeStyles, shorthands } from '@fluentui/react-components';
import { 
  mygetsBrandColors,
  mygetsBrandSpacing,
  mygetsBrandTypography,
  mygetsBrandShadows,
  mygetsBrandRadius
} from '@/lib/design-system';

export const useSharedStyles = makeStyles({
  // Button styles - Enhanced with new design tokens
  primaryButton: {
    backgroundColor: mygetsBrandColors.primary[70],
    color: '#ffffff',
    ...shorthands.border('none'),
    borderRadius: mygetsBrandRadius.medium,
    fontSize: mygetsBrandTypography.fontSize.body1,
    fontWeight: mygetsBrandTypography.fontWeight.semibold,
    ...shorthands.padding(mygetsBrandSpacing.sm, mygetsBrandSpacing.lg),
    boxShadow: mygetsBrandShadows.shadow4,
    transition: 'all 0.2s ease-in-out',
    ':hover': {
      backgroundColor: mygetsBrandColors.primary[80],
      transform: 'translateY(-1px)',
      boxShadow: mygetsBrandShadows.shadow8
    },
    ':active': {
      backgroundColor: mygetsBrandColors.primary[90],
      transform: 'translateY(0px)'
    }
  },
  
  secondaryButton: {
    backgroundColor: mygetsBrandColors.secondary[70],
    color: '#ffffff',
    ...shorthands.border('none'),
    borderRadius: mygetsBrandRadius.medium,
    fontSize: mygetsBrandTypography.fontSize.body1,
    fontWeight: mygetsBrandTypography.fontWeight.semibold,
    ...shorthands.padding(mygetsBrandSpacing.sm, mygetsBrandSpacing.lg),
    boxShadow: mygetsBrandShadows.shadow4,
    transition: 'all 0.2s ease-in-out',
    ':hover': {
      backgroundColor: mygetsBrandColors.secondary[80],
      transform: 'translateY(-1px)',
      boxShadow: mygetsBrandShadows.shadow8
    },
    ':active': {
      backgroundColor: mygetsBrandColors.secondary[90],
      transform: 'translateY(0px)'
    }
  },
  
  outlineButton: {
    backgroundColor: 'transparent',
    color: mygetsBrandColors.primary[70],
    ...shorthands.border('1px', 'solid', mygetsBrandColors.primary[70]),
    borderRadius: mygetsBrandRadius.medium,
    fontSize: mygetsBrandTypography.fontSize.body1,
    fontWeight: mygetsBrandTypography.fontWeight.semibold,
    ...shorthands.padding(mygetsBrandSpacing.sm, mygetsBrandSpacing.lg),
    transition: 'all 0.2s ease-in-out',
    ':hover': {
      backgroundColor: mygetsBrandColors.primary[10],
      ...shorthands.border('1px', 'solid', mygetsBrandColors.primary[80]),
      transform: 'translateY(-1px)'
    },
    ':active': {
      backgroundColor: mygetsBrandColors.primary[20],
      transform: 'translateY(0px)'
    }
  },

  // CTA Button - New variant
  ctaButton: {
    backgroundColor: mygetsBrandColors.primary[70],
    color: '#ffffff',
    ...shorthands.border('none'),
    borderRadius: mygetsBrandRadius.large,
    fontSize: mygetsBrandTypography.fontSize.body1,
    fontWeight: mygetsBrandTypography.fontWeight.bold,
    ...shorthands.padding(mygetsBrandSpacing.md, mygetsBrandSpacing.xl),
    boxShadow: mygetsBrandShadows.shadow8,
    background: `linear-gradient(135deg, ${mygetsBrandColors.primary[70]} 0%, ${mygetsBrandColors.primary[80]} 100%)`,
    transition: 'all 0.3s ease-in-out',
    ':hover': {
      background: `linear-gradient(135deg, ${mygetsBrandColors.primary[80]} 0%, ${mygetsBrandColors.primary[90]} 100%)`,
      transform: 'translateY(-2px)',
      boxShadow: mygetsBrandShadows.shadow16
    },
    ':active': {
      transform: 'translateY(0px)'
    }
  },
  
  // Card styles - Enhanced
  card: {
    backgroundColor: '#ffffff',
    ...shorthands.border('1px', 'solid', mygetsBrandColors.neutral[40]),
    borderRadius: mygetsBrandRadius.large,
    boxShadow: mygetsBrandShadows.shadow4,
    ...shorthands.padding(mygetsBrandSpacing.lg),
    transition: 'all 0.2s ease-in-out',
    ':hover': {
      boxShadow: mygetsBrandShadows.shadow8,
      transform: 'translateY(-2px)'
    }
  },

  // Enhanced Card - New variant
  enhancedCard: {
    backgroundColor: '#ffffff',
    ...shorthands.border('1px', 'solid', mygetsBrandColors.neutral[30]),
    borderRadius: mygetsBrandRadius.large,
    boxShadow: mygetsBrandShadows.shadow8,
    ...shorthands.padding(mygetsBrandSpacing.xl),
    background: `linear-gradient(135deg, #ffffff 0%, ${mygetsBrandColors.neutral[10]} 100%)`,
    transition: 'all 0.3s ease-in-out',
    ':hover': {
      boxShadow: mygetsBrandShadows.shadow16,
      transform: 'translateY(-4px)',
      ...shorthands.border('1px', 'solid', mygetsBrandColors.primary[40])
    }
  },
  
  // Input styles - Enhanced
  input: {
    backgroundColor: '#ffffff',
    ...shorthands.border('1px', 'solid', mygetsBrandColors.neutral[60]),
    borderRadius: mygetsBrandRadius.medium,
    fontSize: mygetsBrandTypography.fontSize.body2,
    ...shorthands.padding(mygetsBrandSpacing.sm, mygetsBrandSpacing.md),
    transition: 'all 0.2s ease-in-out',
    ':focus-within': {
      ...shorthands.border('2px', 'solid', mygetsBrandColors.primary[70]),
      boxShadow: `0 0 0 2px ${mygetsBrandColors.primary[20]}`
    }
  },
  
  // Navigation styles - Enhanced
  navLink: {
    color: mygetsBrandColors.neutral[90],
    textDecoration: 'none',
    fontWeight: mygetsBrandTypography.fontWeight.medium,
    fontSize: mygetsBrandTypography.fontSize.body2,
    ...shorthands.padding(mygetsBrandSpacing.xs, mygetsBrandSpacing.sm),
    borderRadius: mygetsBrandRadius.small,
    transition: 'all 0.2s ease-in-out',
    ':hover': {
      color: mygetsBrandColors.primary[70],
      backgroundColor: mygetsBrandColors.primary[10]
    },
    ':active': {
      color: mygetsBrandColors.primary[80]
    }
  },
  
  // Status styles - Enhanced
  successBadge: {
    backgroundColor: mygetsBrandColors.secondary[10],
    color: mygetsBrandColors.secondary[70],
    ...shorthands.border('1px', 'solid', mygetsBrandColors.secondary[40]),
    borderRadius: mygetsBrandRadius.medium,
    fontSize: mygetsBrandTypography.fontSize.caption1,
    fontWeight: mygetsBrandTypography.fontWeight.medium,
    ...shorthands.padding(mygetsBrandSpacing.xs, mygetsBrandSpacing.sm)
  },
  
  warningBadge: {
    backgroundColor: mygetsBrandColors.accent[10],
    color: mygetsBrandColors.accent[70],
    ...shorthands.border('1px', 'solid', mygetsBrandColors.accent[40]),
    borderRadius: mygetsBrandRadius.medium,
    fontSize: mygetsBrandTypography.fontSize.caption1,
    fontWeight: mygetsBrandTypography.fontWeight.medium,
    ...shorthands.padding(mygetsBrandSpacing.xs, mygetsBrandSpacing.sm)
  },
  
  errorBadge: {
    backgroundColor: '#fdf2f2',
    color: mygetsBrandColors.status.error,
    ...shorthands.border('1px', 'solid', '#fca5a5'),
    borderRadius: mygetsBrandRadius.medium,
    fontSize: mygetsBrandTypography.fontSize.caption1,
    fontWeight: mygetsBrandTypography.fontWeight.medium,
    ...shorthands.padding(mygetsBrandSpacing.xs, mygetsBrandSpacing.sm)
  },
  
  // Hero section - Enhanced
  heroSection: {
    background: `linear-gradient(135deg, ${mygetsBrandColors.primary[70]} 0%, ${mygetsBrandColors.primary[90]} 100%)`,
    color: '#ffffff',
    ...shorthands.padding(mygetsBrandSpacing.massive, mygetsBrandSpacing.lg),
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
      pointerEvents: 'none'
    }
  },
  
  // Feature card - Enhanced
  featureCard: {
    backgroundColor: '#ffffff',
    ...shorthands.border('1px', 'solid', mygetsBrandColors.neutral[30]),
    borderRadius: mygetsBrandRadius.large,
    ...shorthands.padding(mygetsBrandSpacing.xl),
    textAlign: 'center',
    boxShadow: mygetsBrandShadows.shadow4,
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    ':hover': {
      ...shorthands.border('1px', 'solid', mygetsBrandColors.primary[40]),
      boxShadow: mygetsBrandShadows.shadow16,
      transform: 'translateY(-4px)',
      '& .feature-icon': {
        transform: 'scale(1.1)',
        color: mygetsBrandColors.primary[80]
      }
    }
  },

  // Message Bar - Enhanced
  messageBar: {
    borderRadius: mygetsBrandRadius.medium,
    ...shorthands.padding(mygetsBrandSpacing.md),
    ...shorthands.margin(mygetsBrandSpacing.sm, 0),
    fontSize: mygetsBrandTypography.fontSize.body2
  }
});