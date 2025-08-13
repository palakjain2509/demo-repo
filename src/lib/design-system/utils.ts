/**
 * MyGETS Design System Utilities
 * Helper functions and component factories for consistent design implementation
 */

import { mygetsBrandColors, mygetsBrandTokens, mygetsBrandTypography, mygetsBrandSpacing, mygetsBrandAccessibility } from './brand';
import { myGetsThemeConfig } from './theme';

// Type definitions for design system
export interface DesignSystemColor {
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;
  status: string;
}

export interface ComponentVariant {
  primary: string;
  secondary: string;
  outline: string;
  subtle: string;
  cta?: string;
}

export interface ResponsiveValue<T> {
  base: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  xxl?: T;
}

// Color utilities
export const colorUtils = {
  // Get color by path (e.g., 'primary.70', 'secondary.50')
  getColor: (path: string): string => {
    const [category, shade] = path.split('.');
    const colorCategory = mygetsBrandColors[category as keyof typeof mygetsBrandColors];
    
    if (typeof colorCategory === 'object' && shade) {
      return (colorCategory as any)[shade] || '#000000';
    }
    
    return typeof colorCategory === 'string' ? colorCategory : '#000000';
  },

  // Create color with opacity
  withOpacity: (color: string, opacity: number): string => {
    // Handle hex colors
    if (color.startsWith('#')) {
      const hex = color.slice(1);
      const alpha = Math.round(opacity * 255).toString(16).padStart(2, '0');
      return `#${hex}${alpha}`;
    }
    
    // Handle rgb/rgba colors
    if (color.startsWith('rgb')) {
      const values = color.match(/\d+/g);
      if (values && values.length >= 3) {
        return `rgba(${values[0]}, ${values[1]}, ${values[2]}, ${opacity})`;
      }
    }
    
    return color;
  },

  // Get status color
  getStatusColor: (status: 'success' | 'warning' | 'error' | 'info'): string => {
    return mygetsBrandColors.status[status];
  },

  // Create gradient
  createGradient: (colors: string[], direction = '135deg'): string => {
    return `linear-gradient(${direction}, ${colors.join(', ')})`;
  }
};

// Typography utilities
export const typographyUtils = {
  // Get typography style object
  getStyle: (variant: keyof typeof mygetsBrandTypography.fontSize) => ({
    fontSize: mygetsBrandTypography.fontSize[variant],
    fontWeight: mygetsBrandTypography.fontWeight.regular,
    lineHeight: mygetsBrandTypography.lineHeight[variant],
    fontFamily: mygetsBrandTypography.fontFamily.primary
  }),

  // Create custom typography style
  createStyle: (
    size: string,
    weight: keyof typeof mygetsBrandTypography.fontWeight = 'regular',
    lineHeight?: string
  ) => ({
    fontSize: size,
    fontWeight: mygetsBrandTypography.fontWeight[weight],
    lineHeight: lineHeight || 'normal',
    fontFamily: mygetsBrandTypography.fontFamily.primary
  }),

  // Get responsive font size
  getResponsiveSize: (sizes: ResponsiveValue<string>) => {
    return {
      fontSize: sizes.base,
      '@media (min-width: 640px)': sizes.sm ? { fontSize: sizes.sm } : {},
      '@media (min-width: 768px)': sizes.md ? { fontSize: sizes.md } : {},
      '@media (min-width: 1024px)': sizes.lg ? { fontSize: sizes.lg } : {},
      '@media (min-width: 1280px)': sizes.xl ? { fontSize: sizes.xl } : {},
      '@media (min-width: 1536px)': sizes.xxl ? { fontSize: sizes.xxl } : {}
    };
  }
};

// Spacing utilities
export const spacingUtils = {
  // Get spacing value
  get: (key: keyof typeof mygetsBrandSpacing): string => {
    return mygetsBrandSpacing[key];
  },

  // Create custom spacing (4px grid system)
  create: (multiplier: number): string => {
    return `${4 * multiplier}px`;
  },

  // Get responsive spacing
  getResponsive: (spaces: ResponsiveValue<string>) => {
    return {
      padding: spaces.base,
      '@media (min-width: 640px)': spaces.sm ? { padding: spaces.sm } : {},
      '@media (min-width: 768px)': spaces.md ? { padding: spaces.md } : {},
      '@media (min-width: 1024px)': spaces.lg ? { padding: spaces.lg } : {},
      '@media (min-width: 1280px)': spaces.xl ? { padding: spaces.xl } : {},
      '@media (min-width: 1536px)': spaces.xxl ? { padding: spaces.xxl } : {}
    };
  }
};

// Component utilities
export const componentUtils = {
  // Get button styles
  getButtonStyle: (variant: keyof typeof mygetsBrandTokens.button) => {
    return mygetsBrandTokens.button[variant];
  },

  // Create custom button style
  createButtonStyle: (
    background: string,
    color: string,
    options: Partial<{
      hover: string;
      pressed: string;
      border: string;
      borderRadius: string;
      padding: string;
      shadow: string;
    }> = {}
  ) => ({
    background,
    color,
    backgroundHover: options.hover || background,
    backgroundPressed: options.pressed || background,
    border: options.border || 'none',
    borderRadius: options.borderRadius || mygetsBrandTokens.button.primary.borderRadius,
    padding: options.padding || mygetsBrandTokens.button.primary.padding,
    shadow: options.shadow || 'none',
    fontSize: mygetsBrandTokens.button.primary.fontSize,
    fontWeight: mygetsBrandTokens.button.primary.fontWeight,
    fontFamily: mygetsBrandTypography.fontFamily.primary
  }),

  // Get card styles
  getCardStyle: () => mygetsBrandTokens.card,

  // Get input styles
  getInputStyle: () => mygetsBrandTokens.input,

  // Get hero section styles
  getHeroStyle: () => mygetsBrandTokens.hero
};

// Layout utilities
export const layoutUtils = {
  // Get container styles
  getContainer: (maxWidth?: string) => ({
    maxWidth: maxWidth || mygetsBrandTokens.layout.containerMaxWidth,
    margin: '0 auto',
    padding: `0 ${mygetsBrandTokens.layout.containerPadding}`
  }),

  // Get grid styles
  getGrid: (columns: number, gap?: string) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: gap || mygetsBrandTokens.layout.gridGap
  }),

  // Get flex styles
  getFlex: (
    direction: 'row' | 'column' = 'row',
    justify: 'start' | 'center' | 'end' | 'between' | 'around' = 'start',
    align: 'start' | 'center' | 'end' | 'stretch' = 'start',
    gap?: string
  ) => ({
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify === 'start' ? 'flex-start' : 
                   justify === 'end' ? 'flex-end' :
                   justify === 'between' ? 'space-between' :
                   justify === 'around' ? 'space-around' : 'center',
    alignItems: align === 'start' ? 'flex-start' :
                align === 'end' ? 'flex-end' : 
                align === 'stretch' ? 'stretch' : 'center',
    gap: gap || mygetsBrandSpacing.md
  }),

  // Get responsive breakpoint
  getBreakpoint: (breakpoint: keyof typeof mygetsBrandTokens.layout.breakpoints) => {
    return mygetsBrandTokens.layout.breakpoints[breakpoint];
  }
};

// Animation utilities
export const animationUtils = {
  // Get transition
  getTransition: (
    property = 'all',
    duration = 'normal',
    easing = 'standard'
  ) => {
    const durationMap = {
      ultraFast: '50ms',
      faster: '100ms',
      fast: '150ms',
      normal: '200ms',
      slow: '300ms',
      slower: '400ms',
      ultraSlow: '500ms'
    };

    const easingMap = {
      accelerate: 'cubic-bezier(0.9, 0.1, 1, 0.2)',
      decelerate: 'cubic-bezier(0.1, 0.9, 0.2, 1)',
      standard: 'cubic-bezier(0.8, 0, 0.2, 1)',
      express: 'cubic-bezier(0.9, 0.1, 0.1, 0.9)'
    };

    return `${property} ${durationMap[duration as keyof typeof durationMap]} ${easingMap[easing as keyof typeof easingMap]}`;
  },

  // Create hover effect
  createHoverEffect: (
    baseStyles: Record<string, any>,
    hoverStyles: Record<string, any>
  ) => ({
    ...baseStyles,
    transition: animationUtils.getTransition(),
    '&:hover': hoverStyles
  })
};

// Accessibility utilities
export const a11yUtils = {
  // Get focus ring styles
  getFocusRing: () => ({
    outline: `${mygetsBrandAccessibility.focusRing.width} ${mygetsBrandAccessibility.focusRing.style} ${mygetsBrandAccessibility.focusRing.color}`,
    outlineOffset: mygetsBrandAccessibility.focusRing.offset
  }),

  // Create accessible button
  createAccessibleButton: (label: string, onClick: () => void) => ({
    'aria-label': label,
    role: 'button',
    tabIndex: 0,
    onClick,
    onKeyDown: (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick();
      }
    }
  }),

  // Get screen reader only styles
  getScreenReaderOnly: () => ({
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0'
  })
};

// Export all utilities
export const designSystemUtils = {
  color: colorUtils,
  typography: typographyUtils,
  spacing: spacingUtils,
  component: componentUtils,
  layout: layoutUtils,
  animation: animationUtils,
  a11y: a11yUtils
};

export default designSystemUtils;