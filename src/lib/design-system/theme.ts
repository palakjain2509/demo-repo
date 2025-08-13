/**
 * MyGETS Fluent UI v9 Theme Configuration
 * Custom theme that extends Fluent UI with MyGETS branding
 * Includes CSS custom properties generation and theme utilities
 */

import {
  createLightTheme,
  createDarkTheme,
  BrandVariants,
  Theme,
  themeToTokensObject,
  tokens
} from '@fluentui/react-components';
import { mygetsBrandColors, mygetsBrandTokens, mygetsBrandTypography, mygetsBrandSpacing } from './brand';

// Create MyGETS brand variants for Fluent UI
const mygetsBrandVariants: BrandVariants = {
  10: mygetsBrandColors.primary[10],
  20: mygetsBrandColors.primary[20],
  30: mygetsBrandColors.primary[30],
  40: mygetsBrandColors.primary[40],
  50: mygetsBrandColors.primary[50],
  60: mygetsBrandColors.primary[60],
  70: mygetsBrandColors.primary[70],
  80: mygetsBrandColors.primary[80],
  90: mygetsBrandColors.primary[90],
  100: mygetsBrandColors.primary[100],
  110: mygetsBrandColors.primary[110],
  120: mygetsBrandColors.primary[120],
  130: mygetsBrandColors.primary[130],
  140: mygetsBrandColors.primary[140],
  150: mygetsBrandColors.primary[150],
  160: mygetsBrandColors.primary[160]
};

// Create light theme with MyGETS branding
export const myGetsLightTheme: Theme = {
  ...createLightTheme(mygetsBrandVariants),
  
  // Override specific tokens for MyGETS branding
  colorBrandBackground: mygetsBrandColors.primary[70],
  colorBrandBackgroundHover: mygetsBrandColors.primary[80],
  colorBrandBackgroundPressed: mygetsBrandColors.primary[90],
  colorBrandBackgroundSelected: mygetsBrandColors.primary[80],
  
  colorBrandForeground1: mygetsBrandColors.primary[70],
  colorBrandForeground2: mygetsBrandColors.primary[80],
  colorBrandForegroundLink: mygetsBrandColors.primary[70],
  colorBrandForegroundLinkHover: mygetsBrandColors.primary[80],
  colorBrandForegroundLinkPressed: mygetsBrandColors.primary[90],
  colorBrandForegroundLinkSelected: mygetsBrandColors.primary[80],
  
  // Success colors (using MyGETS green)
  colorPaletteGreenBackground1: mygetsBrandColors.secondary[10],
  colorPaletteGreenBackground2: mygetsBrandColors.secondary[20],
  colorPaletteGreenBackground3: mygetsBrandColors.secondary[70],
  colorPaletteGreenForeground1: mygetsBrandColors.secondary[70],
  colorPaletteGreenForeground2: mygetsBrandColors.secondary[80],
  colorPaletteGreenForeground3: mygetsBrandColors.secondary[90],
  
  // Warning colors (using MyGETS orange)
  colorPaletteMarigoldBackground1: mygetsBrandColors.accent[10],
  colorPaletteMarigoldBackground2: mygetsBrandColors.accent[20],
  colorPaletteMarigoldBackground3: mygetsBrandColors.accent[70],
  colorPaletteMarigoldForeground1: mygetsBrandColors.accent[70],
  colorPaletteMarigoldForeground2: mygetsBrandColors.accent[80],
  colorPaletteMarigoldForeground3: mygetsBrandColors.accent[90],
  
  // Typography
  fontFamilyBase: '"Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  fontFamilyMonospace: '"Cascadia Code", "Consolas", "Courier New", monospace',
  
  // Border radius
  borderRadiusNone: '0px',
  borderRadiusSmall: '2px',
  borderRadiusMedium: '4px',
  borderRadiusLarge: '6px',
  borderRadiusXLarge: '8px',
  borderRadiusCircular: '50%',
  
  // Shadows
  shadow2: '0 1px 2px rgba(0, 0, 0, 0.14), 0 0px 2px rgba(0, 0, 0, 0.12)',
  shadow4: '0 2px 4px rgba(0, 0, 0, 0.14), 0 0px 2px rgba(0, 0, 0, 0.12)',
  shadow8: '0 4px 8px rgba(0, 0, 0, 0.14), 0 2px 4px rgba(0, 0, 0, 0.12)',
  shadow16: '0 8px 16px rgba(0, 0, 0, 0.14), 0 2px 4px rgba(0, 0, 0, 0.12)',
  shadow28: '0 14px 28px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.12)',
  shadow64: '0 32px 64px rgba(0, 0, 0, 0.14), 0 8px 16px rgba(0, 0, 0, 0.12)',
  
  // Motion
  durationUltraFast: '50ms',
  durationFaster: '100ms',
  durationFast: '150ms',
  durationNormal: '200ms',
  durationGentle: '250ms',
  durationSlow: '300ms',
  durationSlower: '400ms',
  durationUltraSlow: '500ms',
  
  curveAccelerateMax: 'cubic-bezier(0.9, 0.1, 1, 0.2)',
  curveAccelerateMid: 'cubic-bezier(0.7, 0, 1, 0.5)',
  curveAccelerateMin: 'cubic-bezier(0.8, 0, 0.78, 0.15)',
  curveDecelerateMax: 'cubic-bezier(0.1, 0.9, 0.2, 1)',
  curveDecelerateMid: 'cubic-bezier(0, 0.5, 0.3, 1)',
  curveDecelerateMin: 'cubic-bezier(0.33, 0, 0.1, 1)',
  curveEasyEaseMax: 'cubic-bezier(0.8, 0, 0.2, 1)',
  curveEasyEase: 'cubic-bezier(0.33, 0, 0.67, 1)',
  curveLinear: 'linear'
};

// Create dark theme with MyGETS branding
export const myGetsDarkTheme: Theme = {
  ...createDarkTheme(mygetsBrandVariants),
  
  // Override specific tokens for dark theme
  colorBrandBackground: mygetsBrandColors.primary[60],
  colorBrandBackgroundHover: mygetsBrandColors.primary[70],
  colorBrandBackgroundPressed: mygetsBrandColors.primary[80],
  colorBrandBackgroundSelected: mygetsBrandColors.primary[70],
  
  colorBrandForeground1: mygetsBrandColors.primary[60],
  colorBrandForeground2: mygetsBrandColors.primary[70],
  colorBrandForegroundLink: mygetsBrandColors.primary[60],
  colorBrandForegroundLinkHover: mygetsBrandColors.primary[70],
  colorBrandForegroundLinkPressed: mygetsBrandColors.primary[80],
  colorBrandForegroundLinkSelected: mygetsBrandColors.primary[70],
  
  // Success colors for dark theme
  colorPaletteGreenBackground1: mygetsBrandColors.secondary[140],
  colorPaletteGreenBackground2: mygetsBrandColors.secondary[130],
  colorPaletteGreenBackground3: mygetsBrandColors.secondary[60],
  colorPaletteGreenForeground1: mygetsBrandColors.secondary[60],
  colorPaletteGreenForeground2: mygetsBrandColors.secondary[50],
  colorPaletteGreenForeground3: mygetsBrandColors.secondary[40],
  
  // Warning colors for dark theme
  colorPaletteMarigoldBackground1: mygetsBrandColors.accent[140],
  colorPaletteMarigoldBackground2: mygetsBrandColors.accent[130],
  colorPaletteMarigoldBackground3: mygetsBrandColors.accent[60],
  colorPaletteMarigoldForeground1: mygetsBrandColors.accent[60],
  colorPaletteMarigoldForeground2: mygetsBrandColors.accent[50],
  colorPaletteMarigoldForeground3: mygetsBrandColors.accent[40],
  
  // Typography (same as light theme)
  fontFamilyBase: '"Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  fontFamilyMonospace: '"Cascadia Code", "Consolas", "Courier New", monospace',
  
  // Border radius (same as light theme)
  borderRadiusNone: '0px',
  borderRadiusSmall: '2px',
  borderRadiusMedium: '4px',
  borderRadiusLarge: '6px',
  borderRadiusXLarge: '8px',
  borderRadiusCircular: '50%',
  
  // Shadows (adjusted for dark theme)
  shadow2: '0 1px 2px rgba(0, 0, 0, 0.28), 0 0px 2px rgba(0, 0, 0, 0.24)',
  shadow4: '0 2px 4px rgba(0, 0, 0, 0.28), 0 0px 2px rgba(0, 0, 0, 0.24)',
  shadow8: '0 4px 8px rgba(0, 0, 0, 0.28), 0 2px 4px rgba(0, 0, 0, 0.24)',
  shadow16: '0 8px 16px rgba(0, 0, 0, 0.28), 0 2px 4px rgba(0, 0, 0, 0.24)',
  shadow28: '0 14px 28px rgba(0, 0, 0, 0.28), 0 4px 8px rgba(0, 0, 0, 0.24)',
  shadow64: '0 32px 64px rgba(0, 0, 0, 0.28), 0 8px 16px rgba(0, 0, 0, 0.24)'
};

// Export theme tokens as CSS custom properties
export const myGetsLightThemeTokens = themeToTokensObject(myGetsLightTheme);
export const myGetsDarkThemeTokens = themeToTokensObject(myGetsDarkTheme);

// Generate CSS custom properties for MyGETS brand tokens
export const generateCSSCustomProperties = (theme: 'light' | 'dark' = 'light') => {
  const properties: Record<string, string> = {};
  
  // Add color properties
  Object.entries(mygetsBrandColors).forEach(([category, colors]) => {
    if (typeof colors === 'object' && !Array.isArray(colors)) {
      Object.entries(colors).forEach(([key, value]) => {
        if (typeof value === 'string') {
          properties[`--mygets-color-${category}-${key}`] = value;
        } else if (typeof value === 'object') {
          Object.entries(value).forEach(([subKey, subValue]) => {
            properties[`--mygets-color-${category}-${key}-${subKey}`] = subValue as string;
          });
        }
      });
    }
  });
  
  // Add typography properties
  Object.entries(mygetsBrandTypography.fontSize).forEach(([key, value]) => {
    properties[`--mygets-font-size-${key}`] = value;
  });
  
  Object.entries(mygetsBrandTypography.fontWeight).forEach(([key, value]) => {
    properties[`--mygets-font-weight-${key}`] = value.toString();
  });
  
  Object.entries(mygetsBrandTypography.lineHeight).forEach(([key, value]) => {
    properties[`--mygets-line-height-${key}`] = value;
  });
  
  // Add spacing properties
  Object.entries(mygetsBrandSpacing).forEach(([key, value]) => {
    properties[`--mygets-spacing-${key}`] = value;
  });
  
  // Add component token properties
  Object.entries(mygetsBrandTokens).forEach(([component, tokens]) => {
    if (typeof tokens === 'object') {
      Object.entries(tokens).forEach(([variant, props]) => {
        if (typeof props === 'object') {
          Object.entries(props).forEach(([prop, value]) => {
            properties[`--mygets-${component}-${variant}-${prop.replace(/([A-Z])/g, '-$1').toLowerCase()}`] = value as string;
          });
        }
      });
    }
  });
  
  return properties;
};

// Generate CSS string from custom properties
export const generateCSSString = (theme: 'light' | 'dark' = 'light') => {
  const properties = generateCSSCustomProperties(theme);
  const cssString = Object.entries(properties)
    .map(([property, value]) => `  ${property}: ${value};`)
    .join('\n');
  
  return `:root {\n${cssString}\n}`;
};

// Theme utilities
export const myGetsThemeUtils = {
  // Get theme-aware color
  getThemeColor: (colorPath: string, theme: 'light' | 'dark' = 'light') => {
    const tokens = theme === 'light' ? myGetsLightThemeTokens : myGetsDarkThemeTokens;
    return tokens[colorPath as keyof typeof tokens] || colorPath;
  },
  
  // Apply theme to component
  applyTheme: (component: HTMLElement, theme: 'light' | 'dark' = 'light') => {
    const themeClass = theme === 'light' ? 'mygets-theme-light' : 'mygets-theme-dark';
    component.classList.remove('mygets-theme-light', 'mygets-theme-dark');
    component.classList.add(themeClass);
  },
  
  // Get responsive breakpoint
  getBreakpoint: (width: number) => {
    if (width >= 1536) return 'xxl';
    if (width >= 1280) return 'xl';
    if (width >= 1024) return 'lg';
    if (width >= 768) return 'md';
    if (width >= 640) return 'sm';
    return 'xs';
  },
  
  // Create theme-aware gradient
  createThemeGradient: (colors: string[], direction = '135deg', theme: 'light' | 'dark' = 'light') => {
    const themeColors = colors.map(color => myGetsThemeUtils.getThemeColor(color, theme));
    return `linear-gradient(${direction}, ${themeColors.join(', ')})`;
  }
};

// Theme configuration object
export const myGetsThemeConfig = {
  light: myGetsLightTheme,
  dark: myGetsDarkTheme,
  brandVariants: mygetsBrandVariants,
  tokens: {
    light: myGetsLightThemeTokens,
    dark: myGetsDarkThemeTokens
  },
  utils: myGetsThemeUtils,
  css: {
    customProperties: generateCSSCustomProperties,
    cssString: generateCSSString
  }
};

// Default theme (light)
export const myGetsTheme = myGetsLightTheme;

export default myGetsThemeConfig;