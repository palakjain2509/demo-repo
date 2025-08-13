/**
 * MyGETS Brand Design System
 * Inspired by Microsoft's design principles with custom MyGETS identity
 * Built for Fluent UI v9 compatibility and modern web standards
 */

// Brand Colors - MyGETS Primary Palette
export const mygetsBrandColors = {
  // Primary Brand Colors - MyGETS Blue
  primary: {
    10: '#f6f9ff',
    20: '#e8f2ff',
    30: '#d1e5ff',
    40: '#b3d6ff',
    50: '#8cc4ff',
    60: '#5ba7ff',
    70: '#0078d4', // Primary MyGETS Blue
    80: '#106ebe',
    90: '#005a9e',
    100: '#004578',
    110: '#003966',
    120: '#002d4f',
    130: '#001f3f',
    140: '#001426',
    150: '#000a13',
    160: '#000000'
  },
  
  // Secondary - Procurement Green
  secondary: {
    10: '#f3faf6',
    20: '#e1f5e8',
    30: '#c8ecd5',
    40: '#a8e0bd',
    50: '#7fd19f',
    60: '#4cbe7c',
    70: '#107c41', // Procurement Green
    80: '#0e6d38',
    90: '#0c5e30',
    100: '#0a4f28',
    110: '#084020',
    120: '#063118',
    130: '#042210',
    140: '#021308',
    150: '#000400',
    160: '#000000'
  },

  // Accent - Innovation Orange
  accent: {
    10: '#fff9f5',
    20: '#fff0e6',
    30: '#ffe4cc',
    40: '#ffd6b3',
    50: '#ffc299',
    60: '#ffad80',
    70: '#ff8c00', // Innovation Orange
    80: '#e67d00',
    90: '#cc6f00',
    100: '#b36200',
    110: '#995400',
    120: '#804700',
    130: '#663900',
    140: '#4d2c00',
    150: '#331e00',
    160: '#1a0f00'
  },

  // Neutral Grays (Fluent UI v9 compatible)
  neutral: {
    10: '#fafafa',
    20: '#f5f5f5',
    30: '#ededed',
    40: '#e1e1e1',
    50: '#d1d1d1',
    60: '#bebebe',
    70: '#8a8886',
    80: '#605e5c',
    90: '#3b3a39',
    100: '#323130',
    110: '#292827',
    120: '#201f1e',
    130: '#161514',
    140: '#0b0a09',
    150: '#000000',
    160: '#000000'
  },

  // Status Colors
  status: {
    success: '#107c41',
    warning: '#ff8c00',
    error: '#d13438',
    info: '#0078d4'
  },

  // Gradient Colors for Hero Sections and Backgrounds
  gradients: {
    hero: {
      light: 'linear-gradient(135deg, #f6f9ff 0%, #e8f2ff 25%, #d1e5ff 50%, #e1f5e8 75%, #f3faf6 100%)',
      primary: 'linear-gradient(135deg, #0078d4 0%, #106ebe 50%, #005a9e 100%)',
      secondary: 'linear-gradient(135deg, #107c41 0%, #0e6d38 50%, #0c5e30 100%)',
      accent: 'linear-gradient(135deg, #ff8c00 0%, #e67d00 50%, #cc6f00 100%)',
      subtle: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 25%, #ededed 50%, #e1e1e1 100%)',
      microsoft: 'linear-gradient(135deg, #f6f9ff 0%, #e8f2ff 30%, #d1e5ff 70%, #c8ecd5 100%)'
    },
    card: {
      light: 'linear-gradient(145deg, #ffffff 0%, #fafafa 100%)',
      elevated: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
      subtle: 'linear-gradient(145deg, #f5f5f5 0%, #ededed 100%)'
    }
  },

  // Extended Color Palette for UI Elements
  extended: {
    // Blue variations
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a'
    },
    // Purple variations for accents
    purple: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7c3aed',
      800: '#6b21a8',
      900: '#581c87'
    },
    // Indigo for professional elements
    indigo: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81'
    }
  }
};

// Typography Scale (Fluent UI v9 compatible)
export const mygetsBrandTypography = {
  fontFamily: {
    primary: '"Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    monospace: '"Cascadia Code", "Consolas", "Courier New", monospace'
  },
  
  fontSize: {
    caption1: '12px',
    caption2: '11px',
    body1: '14px',
    body2: '12px',
    subtitle1: '16px',
    subtitle2: '14px',
    title3: '20px',
    title2: '24px',
    title1: '28px',
    largeTitle: '32px',
    display: '40px',
    hero: '56px'
  },
  
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  
  lineHeight: {
    caption1: '16px',
    caption2: '14px',
    body1: '20px',
    body2: '16px',
    subtitle1: '22px',
    subtitle2: '20px',
    title3: '26px',
    title2: '30px',
    title1: '34px',
    largeTitle: '38px',
    display: '48px',
    hero: '64px'
  }
};

// Spacing Scale (4px grid system)
export const mygetsBrandSpacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  xxl: '24px',
  xxxl: '32px',
  huge: '40px',
  massive: '48px'
};

// Border Radius (Fluent UI v9 compatible)
export const mygetsBrandRadius = {
  none: '0px',
  small: '2px',
  medium: '4px',
  large: '6px',
  xLarge: '8px',
  circular: '50%'
};

// Shadows (Fluent UI v9 compatible)
export const mygetsBrandShadows = {
  shadow2: '0 1px 2px rgba(0, 0, 0, 0.14), 0 0px 2px rgba(0, 0, 0, 0.12)',
  shadow4: '0 2px 4px rgba(0, 0, 0, 0.14), 0 0px 2px rgba(0, 0, 0, 0.12)',
  shadow8: '0 4px 8px rgba(0, 0, 0, 0.14), 0 2px 4px rgba(0, 0, 0, 0.12)',
  shadow16: '0 8px 16px rgba(0, 0, 0, 0.14), 0 2px 4px rgba(0, 0, 0, 0.12)',
  shadow28: '0 14px 28px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.12)',
  shadow64: '0 32px 64px rgba(0, 0, 0, 0.14), 0 8px 16px rgba(0, 0, 0, 0.12)'
};

// Stroke Widths
export const mygetsBrandStrokeWidths = {
  thin: '1px',
  thick: '2px',
  thicker: '3px',
  thickest: '4px'
};

// Component Tokens
export const mygetsBrandTokens = {
  // Button tokens
  button: {
    primary: {
      background: mygetsBrandColors.primary[70],
      backgroundHover: mygetsBrandColors.primary[80],
      backgroundPressed: mygetsBrandColors.primary[90],
      color: '#ffffff',
      borderRadius: mygetsBrandRadius.medium,
      border: 'none',
      fontSize: mygetsBrandTypography.fontSize.body1,
      fontWeight: mygetsBrandTypography.fontWeight.semibold,
      padding: `${mygetsBrandSpacing.md} ${mygetsBrandSpacing.xl}`,
      shadow: mygetsBrandShadows.shadow2,
      shadowHover: mygetsBrandShadows.shadow4
    },
    secondary: {
      background: mygetsBrandColors.secondary[70],
      backgroundHover: mygetsBrandColors.secondary[80],
      backgroundPressed: mygetsBrandColors.secondary[90],
      color: '#ffffff',
      borderRadius: mygetsBrandRadius.medium,
      border: 'none',
      fontSize: mygetsBrandTypography.fontSize.body1,
      fontWeight: mygetsBrandTypography.fontWeight.semibold,
      padding: `${mygetsBrandSpacing.md} ${mygetsBrandSpacing.xl}`,
      shadow: mygetsBrandShadows.shadow2,
      shadowHover: mygetsBrandShadows.shadow4
    },
    outline: {
      background: 'transparent',
      backgroundHover: mygetsBrandColors.primary[10],
      backgroundPressed: mygetsBrandColors.primary[20],
      color: mygetsBrandColors.primary[70],
      border: `${mygetsBrandStrokeWidths.thin} solid ${mygetsBrandColors.primary[70]}`,
      borderRadius: mygetsBrandRadius.medium,
      fontSize: mygetsBrandTypography.fontSize.body1,
      fontWeight: mygetsBrandTypography.fontWeight.semibold,
      padding: `${mygetsBrandSpacing.md} ${mygetsBrandSpacing.xl}`
    },
    subtle: {
      background: mygetsBrandColors.neutral[10],
      backgroundHover: mygetsBrandColors.neutral[20],
      backgroundPressed: mygetsBrandColors.neutral[30],
      color: mygetsBrandColors.neutral[90],
      borderRadius: mygetsBrandRadius.medium,
      border: 'none',
      fontSize: mygetsBrandTypography.fontSize.body1,
      fontWeight: mygetsBrandTypography.fontWeight.medium,
      padding: `${mygetsBrandSpacing.md} ${mygetsBrandSpacing.xl}`
    },
    cta: {
      background: '#ffffff',
      backgroundHover: mygetsBrandColors.neutral[10],
      backgroundPressed: mygetsBrandColors.neutral[20],
      color: mygetsBrandColors.primary[70],
      borderRadius: mygetsBrandRadius.large,
      border: `${mygetsBrandStrokeWidths.thin} solid ${mygetsBrandColors.neutral[30]}`,
      fontSize: mygetsBrandTypography.fontSize.subtitle1,
      fontWeight: mygetsBrandTypography.fontWeight.semibold,
      padding: `${mygetsBrandSpacing.lg} ${mygetsBrandSpacing.xxl}`,
      shadow: mygetsBrandShadows.shadow8,
      shadowHover: mygetsBrandShadows.shadow16
    }
  },
  
  // Card tokens
  card: {
    background: '#ffffff',
    border: `${mygetsBrandStrokeWidths.thin} solid ${mygetsBrandColors.neutral[40]}`,
    borderRadius: mygetsBrandRadius.large,
    shadow: mygetsBrandShadows.shadow4,
    padding: mygetsBrandSpacing.lg
  },
  
  // Input tokens
  input: {
    background: '#ffffff',
    border: `${mygetsBrandStrokeWidths.thin} solid ${mygetsBrandColors.neutral[60]}`,
    borderFocus: `${mygetsBrandStrokeWidths.thick} solid ${mygetsBrandColors.primary[70]}`,
    borderRadius: mygetsBrandRadius.medium,
    padding: `${mygetsBrandSpacing.sm} ${mygetsBrandSpacing.md}`,
    fontSize: mygetsBrandTypography.fontSize.body1
  },

  // Navigation tokens
  navigation: {
    background: '#ffffff',
    border: `${mygetsBrandStrokeWidths.thin} solid ${mygetsBrandColors.neutral[30]}`,
    shadow: mygetsBrandShadows.shadow2,
    linkColor: mygetsBrandColors.neutral[90],
    linkColorHover: mygetsBrandColors.primary[70],
    linkColorActive: mygetsBrandColors.primary[80]
  },

  // Surface tokens
  surface: {
    background: mygetsBrandColors.neutral[10],
    backgroundElevated: '#ffffff',
    backgroundSubtle: mygetsBrandColors.neutral[20],
    backgroundGradient: mygetsBrandColors.gradients.hero.light,
    backgroundMicrosoft: mygetsBrandColors.gradients.hero.microsoft
  },

  // Hero Section tokens
  hero: {
    background: mygetsBrandColors.gradients.hero.microsoft,
    tagBackground: mygetsBrandColors.neutral[20],
    tagColor: mygetsBrandColors.neutral[90],
    tagBorder: `${mygetsBrandStrokeWidths.thin} solid ${mygetsBrandColors.neutral[40]}`,
    tagBorderRadius: mygetsBrandRadius.large,
    tagPadding: `${mygetsBrandSpacing.xs} ${mygetsBrandSpacing.md}`,
    tagFontSize: mygetsBrandTypography.fontSize.caption1,
    tagFontWeight: mygetsBrandTypography.fontWeight.medium,
    
    titleColor: mygetsBrandColors.neutral[130],
    titleFontSize: mygetsBrandTypography.fontSize.hero,
    titleFontWeight: mygetsBrandTypography.fontWeight.bold,
    titleLineHeight: mygetsBrandTypography.lineHeight.hero,
    
    descriptionColor: mygetsBrandColors.neutral[90],
    descriptionFontSize: mygetsBrandTypography.fontSize.subtitle1,
    descriptionFontWeight: mygetsBrandTypography.fontWeight.regular,
    descriptionLineHeight: mygetsBrandTypography.lineHeight.subtitle1,
    
    ctaCardBackground: '#ffffff',
    ctaCardBorder: `${mygetsBrandStrokeWidths.thin} solid ${mygetsBrandColors.neutral[30]}`,
    ctaCardBorderRadius: mygetsBrandRadius.xLarge,
    ctaCardShadow: mygetsBrandShadows.shadow16,
    ctaCardPadding: mygetsBrandSpacing.xxl,
    
    trustIndicatorColor: mygetsBrandColors.secondary[70],
    trustIndicatorFontSize: mygetsBrandTypography.fontSize.body2,
    trustIndicatorFontWeight: mygetsBrandTypography.fontWeight.medium,
    
    decorativeLineColor: mygetsBrandColors.primary[30],
    decorativeLineOpacity: '0.3'
  },

  // Layout tokens
  layout: {
    containerMaxWidth: '1200px',
    containerPadding: mygetsBrandSpacing.lg,
    sectionPadding: mygetsBrandSpacing.massive,
    gridGap: mygetsBrandSpacing.xl,
    
    // Responsive breakpoints
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px'
    }
  }
};

// Brand Voice and Messaging
export const mygetsBrandVoice = {
  tone: 'Professional, Trustworthy, Innovative',
  personality: 'Expert, Reliable, Forward-thinking',
  messaging: {
    tagline: 'Transforming Procurement Through Intelligence',
    mission: 'Empowering organizations with transparent, efficient, and compliant procurement solutions',
    vision: 'A world where every procurement decision is informed, transparent, and optimized'
  }
};

// Logo and Asset Guidelines
export const mygetsBrandAssets = {
  logo: {
    primary: '/images/mygets-logo-primary.svg',
    white: '/images/mygets-logo-white.svg',
    mark: '/images/mygets-mark.svg',
    minWidth: '120px',
    clearSpace: '24px'
  },
  
  iconography: {
    style: 'Fluent UI System Icons',
    weight: 'Regular (400)',
    sizes: ['16px', '20px', '24px', '32px', '48px']
  }
};

// Motion and Animation
export const mygetsBrandMotion = {
  duration: {
    ultraFast: '50ms',
    faster: '100ms',
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '400ms',
    ultraSlow: '500ms'
  },
  
  easing: {
    accelerate: 'cubic-bezier(0.9, 0.1, 1, 0.2)',
    decelerate: 'cubic-bezier(0.1, 0.9, 0.2, 1)',
    standard: 'cubic-bezier(0.8, 0, 0.2, 1)',
    express: 'cubic-bezier(0.9, 0.1, 0.1, 0.9)'
  }
};

// Accessibility tokens
export const mygetsBrandAccessibility = {
  focusRing: {
    color: mygetsBrandColors.primary[70],
    width: '2px',
    style: 'solid',
    offset: '2px'
  },
  
  contrast: {
    minimum: 4.5, // WCAG AA
    enhanced: 7.0  // WCAG AAA
  }
};

// Utility functions for design system
export const mygetsBrandUtils = {
  // Color utilities
  getColorWithOpacity: (color: string, opacity: number) => `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`,
  
  // Responsive utilities
  getResponsiveValue: (values: Record<string, string>, breakpoint: string) => values[breakpoint] || values.base,
  
  // Theme utilities
  createCustomGradient: (colors: string[], direction = '135deg') => 
    `linear-gradient(${direction}, ${colors.join(', ')})`,
  
  // Spacing utilities
  getSpacingScale: (multiplier: number) => `${4 * multiplier}px`,
  
  // Typography utilities
  createTypographyStyle: (size: string, weight: number, lineHeight: string) => ({
    fontSize: size,
    fontWeight: weight,
    lineHeight: lineHeight,
    fontFamily: mygetsBrandTypography.fontFamily.primary
  })
};

// Export complete brand system
export default {
  colors: mygetsBrandColors,
  typography: mygetsBrandTypography,
  spacing: mygetsBrandSpacing,
  radius: mygetsBrandRadius,
  shadows: mygetsBrandShadows,
  strokeWidths: mygetsBrandStrokeWidths,
  tokens: mygetsBrandTokens,
  voice: mygetsBrandVoice,
  assets: mygetsBrandAssets,
  motion: mygetsBrandMotion,
  accessibility: mygetsBrandAccessibility,
  utils: mygetsBrandUtils
};