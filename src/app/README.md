# App Directory Structure

## Overview
This directory follows Next.js 13+ App Router conventions with improved organization.

## Directory Structure

```
src/app/
├── (auth)/                 # Route groups for authentication
│   ├── login/
│   └── register/
├── (dashboard)/            # Route groups for dashboard
│   ├── dashboard/
│   └── profile/
├── (marketing)/            # Route groups for marketing pages
│   ├── home/
│   ├── about-us/
│   ├── pricing/
│   └── contact/
├── (platform)/             # Route groups for platform pages
│   ├── platform/
│   ├── solutions/
│   └── resources/
├── api/                    # API routes
│   ├── contact/
│   ├── analytics/
│   └── webhooks/
├── globals.css             # Global styles
├── layout.tsx              # Root layout
├── page.tsx                # Home page
├── not-found.tsx           # 404 page
└── loading.tsx             # Loading component
```

## Route Groups Benefits

1. **Logical Grouping**: Related pages are grouped together
2. **Shared Layouts**: Each group can have its own layout
3. **Better Organization**: Easier to find and maintain related pages
4. **SEO Optimization**: Better URL structure and metadata management

## File Organization Rules

1. **Route Groups**: Use parentheses for logical grouping
2. **Page Files**: Each route has a `page.tsx` file
3. **Layout Files**: Shared layouts for route groups
4. **Loading States**: `loading.tsx` for Suspense boundaries
5. **Error Handling**: `error.tsx` for error boundaries
6. **API Routes**: Organized by functionality in `/api` 