# Components Directory Structure

## Overview
This directory contains all React components organized by functionality and scope.

## Directory Structure

```
src/components/
├── common/                 # Shared components used across multiple pages
│   ├── Button/
│   ├── Card/
│   ├── Modal/
│   └── Loading/
├── layout/                 # Layout components (Header, Footer, Sidebar)
│   ├── Header/
│   ├── Footer/
│   └── Navigation/
├── seo/                    # SEO-specific components
│   ├── SEOHead/
│   ├── SEOAnalytics/
│   ├── PerformanceMonitor/
│   └── CacheOptimizer/
├── features/               # Feature-specific components
│   ├── HeroSection/
│   ├── FeaturesSection/
│   ├── CTASection/
│   └── FAQSection/
├── forms/                  # Form components
│   ├── ContactForm/
│   ├── DemoRequestForm/
│   └── NewsletterSignup/
├── ui/                     # Base UI components (shadcn/ui)
│   ├── button.tsx
│   ├── card.tsx
│   └── ...
└── providers/              # Context providers
    ├── FluentProvider/
    ├── AnalyticsProvider/
    └── ThemeProvider/
```

## Component Organization Rules

1. **Common Components**: Reusable across multiple pages
2. **Layout Components**: Page structure and navigation
3. **SEO Components**: Analytics, monitoring, and optimization
4. **Feature Components**: Page-specific functionality
5. **Form Components**: All form-related components
6. **UI Components**: Base design system components
7. **Providers**: Context and state management

## Naming Conventions

- Use PascalCase for component files: `HeroSection.tsx`
- Use kebab-case for directories: `hero-section/`
- Include index.ts files for clean imports
- Group related components in feature directories 