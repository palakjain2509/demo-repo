# Lib Directory Structure

## Overview
This directory contains utility functions, configurations, and shared logic.

## Directory Structure

```
src/lib/
├── api/                    # API utilities and configurations
│   ├── client.ts           # API client configuration
│   ├── endpoints.ts        # API endpoint definitions
│   └── types.ts            # API type definitions
├── auth/                   # Authentication utilities
│   ├── auth.ts             # Auth functions
│   └── permissions.ts      # Permission checks
├── config/                 # Configuration files
│   ├── constants.ts        # App constants
│   ├── env.ts              # Environment variables
│   └── seo.ts              # SEO configurations
├── db/                     # Database utilities
│   ├── client.ts           # Database client
│   ├── migrations/         # Database migrations
│   └── schema.ts           # Database schema
├── utils/                  # Utility functions
│   ├── date.ts             # Date utilities
│   ├── format.ts           # Formatting utilities
│   ├── validation.ts       # Validation functions
│   └── helpers.ts          # General helpers
├── analytics/              # Analytics utilities
│   ├── gtag.ts             # Google Analytics
│   ├── events.ts           # Event tracking
│   └── conversions.ts      # Conversion tracking
├── seo/                    # SEO utilities
│   ├── metadata.ts         # Metadata generation
│   ├── structured-data.ts  # Structured data
│   └── sitemap.ts          # Sitemap generation
└── types/                  # TypeScript type definitions
    ├── global.ts           # Global types
    ├── api.ts              # API types
    └── components.ts       # Component types
```

## Organization Rules

1. **API**: All API-related utilities and configurations
2. **Auth**: Authentication and authorization logic
3. **Config**: Application configuration and constants
4. **DB**: Database connections and utilities
5. **Utils**: Reusable utility functions
6. **Analytics**: Analytics and tracking utilities
7. **SEO**: SEO-specific utilities and helpers
8. **Types**: TypeScript type definitions

## Naming Conventions

- Use camelCase for files: `apiClient.ts`
- Use descriptive names: `dateUtils.ts` not `date.ts`
- Group related functions in feature directories
- Export from index files for clean imports 