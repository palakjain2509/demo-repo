# MyGETS Website - Project Structure

## 🏗️ **Improved Folder Structure for Maintainability**

### Root Directory
```
mygets-website/
├── src/                    # Source code
├── public/                 # Static assets
├── content/                # Content files (markdown, etc.)
├── documentation/          # Project documentation
├── scripts/                # Build and utility scripts
├── migrations/             # Database migrations
├── .next/                  # Next.js build output (gitignored)
├── node_modules/           # Dependencies (gitignored)
└── Configuration files
```

### Source Code Structure (`src/`)
```
src/
├── app/                    # Next.js App Router
│   ├── (marketing)/        # Marketing pages route group
│   │   ├── home/           # Home page components
│   │   ├── about-us/       # About us pages
│   │   ├── pricing/        # Pricing pages
│   │   └── contact/        # Contact pages
│   ├── (platform)/         # Platform pages route group
│   │   ├── platform/       # Platform features
│   │   ├── solutions/      # Solution pages
│   │   └── resources/      # Resource pages
│   ├── (dashboard)/        # Dashboard route group
│   │   └── dashboard/      # Dashboard pages
│   ├── api/                # API routes
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── common/             # Shared components
│   ├── layout/             # Layout components
│   ├── seo/                # SEO components
│   ├── features/           # Feature components
│   ├── forms/              # Form components
│   ├── ui/                 # Base UI components
│   └── providers/          # Context providers
├── lib/                    # Utilities and configurations
│   ├── analytics/          # Analytics utilities
│   ├── seo/                # SEO utilities
│   ├── config/             # Configuration files
│   ├── utils/              # Utility functions
│   └── types/              # TypeScript types
└── hooks/                  # Custom React hooks
```

### Content Organization
```
content/
├── marketing/              # Marketing content
│   ├── home/               # Home page content
│   ├── about/              # About us content
│   └── pricing/            # Pricing content
├── platform/               # Platform content
│   ├── features/           # Feature descriptions
│   ├── solutions/          # Solution content
│   └── resources/          # Resource content
└── documentation/          # Technical documentation
```

### Documentation Structure
```
documentation/
├── technical/              # Technical documentation
│   ├── architecture.md     # System architecture
│   ├── api-docs.md         # API documentation
│   └── deployment.md       # Deployment guide
├── seo/                    # SEO documentation
│   ├── audit-reports/      # SEO audit reports
│   ├── optimization/       # Optimization guides
│   └── implementation/     # Implementation guides
└── business/               # Business documentation
    ├── strategy/           # Business strategy
    ├── marketing/          # Marketing plans
    └── analytics/          # Analytics reports
```

## 🎯 **Key Improvements**

### 1. **Route Groups**
- **Logical Grouping**: Related pages grouped together
- **Shared Layouts**: Each group can have its own layout
- **Better SEO**: Improved URL structure and metadata management

### 2. **Component Organization**
- **Feature-Based**: Components organized by functionality
- **Reusability**: Common components separated from feature-specific ones
- **Maintainability**: Easier to find and update components

### 3. **Utility Organization**
- **Domain-Specific**: Utilities organized by domain (analytics, SEO, etc.)
- **Clean Imports**: Index files for clean import statements
- **Type Safety**: Dedicated types directory

### 4. **Content Management**
- **Structured Content**: Content organized by purpose
- **SEO Optimization**: Content structured for better SEO
- **Scalability**: Easy to add new content types

## 📋 **Naming Conventions**

### Files and Directories
- **Components**: PascalCase (`HeroSection.tsx`)
- **Directories**: kebab-case (`hero-section/`)
- **Utilities**: camelCase (`dateUtils.ts`)
- **Constants**: UPPER_SNAKE_CASE (`API_ENDPOINTS`)

### Imports
- **Clean Imports**: Use index files for clean imports
- **Absolute Paths**: Use `@/` alias for src directory
- **Grouped Imports**: Group imports by type (React, third-party, local)

## 🔧 **Configuration Files**

### Root Level
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

### Environment
- `.env.local` - Local environment variables
- `.env.production` - Production environment variables
- `.env.development` - Development environment variables

## 🚀 **Benefits of This Structure**

1. **Scalability**: Easy to add new features and pages
2. **Maintainability**: Clear organization makes code easier to maintain
3. **Team Collaboration**: Consistent structure helps team members
4. **SEO Optimization**: Better organization for SEO improvements
5. **Performance**: Optimized imports and code splitting
6. **Type Safety**: Proper TypeScript organization
7. **Testing**: Easier to write and organize tests

## 📝 **Next Steps**

1. **Update Imports**: Update all import statements to use new structure
2. **Add Tests**: Create test files alongside components
3. **Documentation**: Add JSDoc comments to all components
4. **Performance**: Implement code splitting for route groups
5. **SEO**: Optimize metadata for each route group 