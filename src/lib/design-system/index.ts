/**
 * MyGETS Design System
 * Main entry point for the design system
 */

// Import all modules
import {
  mygetsBrandColors,
  mygetsBrandTypography,
  mygetsBrandSpacing,
  mygetsBrandRadius,
  mygetsBrandShadows,
  mygetsBrandStrokeWidths,
  mygetsBrandTokens,
  mygetsBrandVoice,
  mygetsBrandAssets,
  mygetsBrandMotion,
  mygetsBrandAccessibility,
  mygetsBrandUtils
} from './brand';

import {
  myGetsLightTheme,
  myGetsDarkTheme,
  myGetsTheme,
  myGetsThemeConfig,
  myGetsLightThemeTokens,
  myGetsDarkThemeTokens,
  myGetsThemeUtils,
  generateCSSCustomProperties,
  generateCSSString
} from './theme';

import {
  designSystemUtils,
  colorUtils,
  typographyUtils,
  spacingUtils,
  componentUtils,
  layoutUtils,
  animationUtils,
  a11yUtils
} from './utils';

// Export brand tokens and colors
export {
  mygetsBrandColors,
  mygetsBrandTypography,
  mygetsBrandSpacing,
  mygetsBrandRadius,
  mygetsBrandShadows,
  mygetsBrandStrokeWidths,
  mygetsBrandTokens,
  mygetsBrandVoice,
  mygetsBrandAssets,
  mygetsBrandMotion,
  mygetsBrandAccessibility,
  mygetsBrandUtils
};

// Export theme configuration
export {
  myGetsLightTheme,
  myGetsDarkTheme,
  myGetsTheme,
  myGetsThemeConfig,
  myGetsLightThemeTokens,
  myGetsDarkThemeTokens,
  myGetsThemeUtils,
  generateCSSCustomProperties,
  generateCSSString
};

// Export utilities
export {
  designSystemUtils,
  colorUtils,
  typographyUtils,
  spacingUtils,
  componentUtils,
  layoutUtils,
  animationUtils,
  a11yUtils
};

// Export types
export type {
  DesignSystemColor,
  ComponentVariant,
  ResponsiveValue
} from './utils';

// Convenience exports for common use cases
export const myGetsDesignSystem = {
  // Brand
  colors: mygetsBrandColors,
  typography: mygetsBrandTypography,
  spacing: mygetsBrandSpacing,
  tokens: mygetsBrandTokens,
  
  // Theme
  theme: {
    light: myGetsLightTheme,
    dark: myGetsDarkTheme,
    config: myGetsThemeConfig
  },
  
  // Utils
  utils: designSystemUtils
};

// Default export
export default myGetsDesignSystem;