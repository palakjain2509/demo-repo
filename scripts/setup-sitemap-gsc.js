#!/usr/bin/env node

/**
 * Sitemap Generation and Google Search Console Submission Script
 * 
 * This script generates an updated sitemap and provides instructions for Google Search Console submission
 * Run with: node scripts/setup-sitemap-gsc.js
 */

const fs = require('fs');
const path = require('path');

class SitemapGSCSetup {
  constructor() {
    this.results = {
      passed: [],
      warnings: [],
      errors: []
    };
    this.baseUrl = 'https://mygets.net';
    this.pages = [];
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'warning' ? '⚠️' : '✅';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async discoverPages() {
    this.log('Discovering pages in the application...');
    
    try {
      const appDir = 'src/app';
      if (!fs.existsSync(appDir)) {
        this.results.errors.push('src/app directory not found');
        return;
      }

      this.scanAppDirectory(appDir, '');
      
      // Add static pages
      this.addStaticPages();
      
      this.log(`Discovered ${this.pages.length} pages`);
      this.results.passed.push(`Page discovery completed: ${this.pages.length} pages found`);
      
    } catch (error) {
      this.results.errors.push(`Error discovering pages: ${error.message}`);
    }
  }

  scanAppDirectory(dirPath, urlPath) {
    const items = fs.readdirSync(dirPath);
    
    items.forEach(item => {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Handle route groups (folders in parentheses)
        if (item.startsWith('(') && item.endsWith(')')) {
          // Route groups don't affect URL structure
          this.scanAppDirectory(fullPath, urlPath);
        } else {
          // Regular directory - part of URL path
          const newUrlPath = urlPath + '/' + item;
          this.scanAppDirectory(fullPath, newUrlPath);
        }
      } else if (item === 'page.tsx' || item === 'page.jsx') {
        // Found a page
        const url = urlPath || '/';
        this.addPage(url);
      }
    });
  }

  addPage(url, priority = 0.8, changefreq = 'weekly') {
    // Normalize URL
    const normalizedUrl = url === '/' ? '/' : url.replace(/\/$/, '');
    
    // Set priority based on page importance
    let pagePriority = priority;
    let pageChangefreq = changefreq;
    
    if (normalizedUrl === '/') {
      pagePriority = 1.0;
      pageChangefreq = 'daily';
    } else if (normalizedUrl.includes('/solutions') || normalizedUrl.includes('/platform')) {
      pagePriority = 0.9;
      pageChangefreq = 'weekly';
    } else if (normalizedUrl.includes('/resources') || normalizedUrl.includes('/blog')) {
      pagePriority = 0.7;
      pageChangefreq = 'weekly';
    } else if (normalizedUrl.includes('/about') || normalizedUrl.includes('/contact')) {
      pagePriority = 0.6;
      pageChangefreq = 'monthly';
    }

    this.pages.push({
      url: normalizedUrl,
      priority: pagePriority,
      changefreq: pageChangefreq,
      lastmod: new Date().toISOString().split('T')[0]
    });
  }

  addStaticPages() {
    // Add any additional static pages that might not be in the app directory
    const staticPages = [
      { url: '/privacy', priority: 0.3, changefreq: 'yearly' },
      { url: '/terms', priority: 0.3, changefreq: 'yearly' },
      { url: '/sitemap.xml', priority: 0.1, changefreq: 'weekly' },
      { url: '/robots.txt', priority: 0.1, changefreq: 'monthly' }
    ];

    staticPages.forEach(page => {
      // Only add if not already discovered
      if (!this.pages.find(p => p.url === page.url)) {
        this.pages.push({
          ...page,
          lastmod: new Date().toISOString().split('T')[0]
        });
      }
    });
  }

  async generateSitemap() {
    this.log('Generating XML sitemap...');
    
    try {
      const sitemapHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

      const sitemapFooter = `</urlset>`;

      const urls = this.pages.map(page => {
        return `  <url>
    <loc>${this.baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
      }).join('\n');

      const sitemap = `${sitemapHeader}\n${urls}\n${sitemapFooter}`;

      // Save sitemap to public directory
      const sitemapPath = 'public/sitemap.xml';
      fs.writeFileSync(sitemapPath, sitemap);
      
      this.results.passed.push('XML sitemap generated successfully');
      this.log(`Sitemap saved to: ${sitemapPath}`);
      
    } catch (error) {
      this.results.errors.push(`Error generating sitemap: ${error.message}`);
    }
  }

  async generateRobotsTxt() {
    this.log('Generating robots.txt...');
    
    try {
      const robotsContent = `# Robots.txt for MyGETS
# Generated on ${new Date().toISOString()}

User-agent: *
Allow: /

# Sitemap location
Sitemap: ${this.baseUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important SEO files
Allow: /robots.txt
Allow: /sitemap.xml
Allow: /favicon.ico

# Crawl delay (optional)
Crawl-delay: 1

# Specific bot instructions
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Block problematic bots (optional)
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /`;

      const robotsPath = 'public/robots.txt';
      fs.writeFileSync(robotsPath, robotsContent);
      
      this.results.passed.push('robots.txt generated successfully');
      this.log(`robots.txt saved to: ${robotsPath}`);
      
    } catch (error) {
      this.results.errors.push(`Error generating robots.txt: ${error.message}`);
    }
  }

  async createSitemapIndex() {
    this.log('Creating sitemap index...');
    
    try {
      // For now, we have one sitemap, but this allows for future expansion
      const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${this.baseUrl}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
</sitemapindex>`;

      const sitemapIndexPath = 'public/sitemap-index.xml';
      fs.writeFileSync(sitemapIndexPath, sitemapIndexContent);
      
      this.results.passed.push('Sitemap index created successfully');
      
    } catch (error) {
      this.results.errors.push(`Error creating sitemap index: ${error.message}`);
    }
  }

  async generateGSCInstructions() {
    this.log('Generating Google Search Console instructions...');
    
    const instructions = `# Google Search Console Setup Instructions

## 1. Property Verification

### Option A: HTML File Upload
1. Download the verification file from Google Search Console
2. Place it in the \`public/\` directory of your Next.js project
3. Deploy your site
4. Click "Verify" in Google Search Console

### Option B: HTML Meta Tag
Add this meta tag to your site's <head> section:
\`\`\`html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
\`\`\`

### Option C: Google Analytics (if already set up)
Use your existing Google Analytics tracking code for verification.

### Option D: Google Tag Manager (if already set up)
Use your existing Google Tag Manager container for verification.

## 2. Sitemap Submission

### Automatic Submission
Your sitemap is available at: ${this.baseUrl}/sitemap.xml

### Manual Submission Steps
1. Go to Google Search Console
2. Select your property
3. Navigate to "Sitemaps" in the left sidebar
4. Enter "sitemap.xml" in the "Add a new sitemap" field
5. Click "Submit"

### Additional Sitemaps (if needed)
- Main sitemap: ${this.baseUrl}/sitemap.xml
- Sitemap index: ${this.baseUrl}/sitemap-index.xml

## 3. URL Inspection and Indexing

### Request Indexing for Important Pages
1. Use the URL Inspection tool in GSC
2. Enter the URL you want to inspect
3. Click "Request Indexing" for new or updated pages

### Priority Pages to Request Indexing:
- Homepage: ${this.baseUrl}/
- Solutions: ${this.baseUrl}/solutions
- Platform: ${this.baseUrl}/platform
- Resources: ${this.baseUrl}/resources
- About: ${this.baseUrl}/about

## 4. Performance Monitoring

### Core Web Vitals
- Monitor your Core Web Vitals in the "Experience" section
- Address any issues identified in the report
- Use the Page Experience report to track improvements

### Search Performance
- Monitor clicks, impressions, CTR, and average position
- Identify top-performing queries and pages
- Track keyword rankings and opportunities

## 5. Technical SEO Monitoring

### Coverage Report
- Monitor for crawl errors
- Check for excluded pages
- Ensure important pages are indexed

### Mobile Usability
- Check for mobile usability issues
- Ensure responsive design works correctly
- Test mobile page loading speed

### Security Issues
- Monitor for security problems
- Check for malware or hacking attempts
- Ensure HTTPS is properly implemented

## 6. Structured Data Monitoring

### Rich Results
- Monitor structured data implementation
- Check for rich results eligibility
- Address any structured data errors

### Schema Markup
- Use the Rich Results Test tool
- Validate your schema markup
- Monitor for schema-related issues

## 7. Regular Maintenance Tasks

### Weekly
- Check for new crawl errors
- Monitor search performance trends
- Review Core Web Vitals data

### Monthly
- Update sitemap if new pages added
- Review and optimize underperforming pages
- Analyze search query data for content opportunities

### Quarterly
- Comprehensive technical SEO audit
- Review and update structured data
- Analyze competitor performance

## 8. API Integration (Advanced)

### Search Console API
For automated monitoring and reporting, consider integrating with the Google Search Console API:

\`\`\`javascript
// Example API call to get search analytics data
const response = await fetch(
  'https://www.googleapis.com/webmasters/v3/sites/YOUR_SITE/searchAnalytics/query',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      startDate: '2024-01-01',
      endDate: '2024-01-31',
      dimensions: ['query', 'page'],
      rowLimit: 1000
    })
  }
);
\`\`\`

## 9. Troubleshooting Common Issues

### Sitemap Not Found
- Ensure sitemap.xml is in the public directory
- Check that the file is accessible at ${this.baseUrl}/sitemap.xml
- Verify robots.txt includes sitemap location

### Pages Not Indexed
- Check robots.txt for blocking directives
- Ensure pages are linked from other pages
- Use "Request Indexing" in URL Inspection tool
- Check for noindex meta tags

### Core Web Vitals Issues
- Optimize images and implement lazy loading
- Minimize JavaScript and CSS
- Use a Content Delivery Network (CDN)
- Implement caching strategies

## 10. Next Steps After Setup

1. ✅ Verify property ownership
2. ✅ Submit sitemap
3. ✅ Request indexing for key pages
4. ✅ Set up email alerts for critical issues
5. ✅ Create regular monitoring schedule
6. ✅ Integrate with Google Analytics
7. ✅ Set up automated reporting (optional)

---

Generated on: ${new Date().toISOString()}
Sitemap URL: ${this.baseUrl}/sitemap.xml
Total Pages: ${this.pages.length}
`;

    try {
      const instructionsPath = 'GOOGLE_SEARCH_CONSOLE_SETUP.md';
      fs.writeFileSync(instructionsPath, instructions);
      
      this.results.passed.push('Google Search Console instructions generated');
      this.log(`Instructions saved to: ${instructionsPath}`);
      
    } catch (error) {
      this.results.errors.push(`Error generating GSC instructions: ${error.message}`);
    }
  }

  async createSitemapGenerator() {
    this.log('Creating dynamic sitemap generator...');
    
    const generatorContent = `import { NextResponse } from 'next/server';

// Dynamic sitemap generation for Next.js App Router
export async function GET() {
  const baseUrl = 'https://mygets.net';
  
  // Static pages with their priorities and change frequencies
  const staticPages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/solutions', priority: 0.9, changefreq: 'weekly' },
    { url: '/solutions/public', priority: 0.9, changefreq: 'weekly' },
    { url: '/platform', priority: 0.9, changefreq: 'weekly' },
    { url: '/resources', priority: 0.7, changefreq: 'weekly' },
    { url: '/about', priority: 0.6, changefreq: 'monthly' },
    { url: '/contact', priority: 0.6, changefreq: 'monthly' },
    { url: '/privacy', priority: 0.3, changefreq: 'yearly' },
    { url: '/terms', priority: 0.3, changefreq: 'yearly' }
  ];

  // Generate dynamic pages (e.g., blog posts, case studies)
  const dynamicPages = await getDynamicPages();
  
  const allPages = [...staticPages, ...dynamicPages];
  
  const sitemap = generateSitemapXML(baseUrl, allPages);
  
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600' // Cache for 1 hour
    }
  });
}

async function getDynamicPages() {
  // Add logic here to fetch dynamic pages from your CMS, database, etc.
  // For example, blog posts, case studies, product pages, etc.
  
  const dynamicPages = [];
  
  // Example: Fetch blog posts
  // const blogPosts = await fetchBlogPosts();
  // blogPosts.forEach(post => {
  //   dynamicPages.push({
  //     url: \`/blog/\${post.slug}\`,
  //     priority: 0.7,
  //     changefreq: 'weekly',
  //     lastmod: post.updatedAt
  //   });
  // });
  
  return dynamicPages;
}

function generateSitemapXML(baseUrl, pages) {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = pages.map(page => {
    const lastmod = page.lastmod || currentDate;
    
    return \`  <url>
    <loc>\${baseUrl}\${page.url}</loc>
    <lastmod>\${lastmod}</lastmod>
    <changefreq>\${page.changefreq}</changefreq>
    <priority>\${page.priority}</priority>
  </url>\`;
  }).join('\\n');

  return \`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
\${urls}
</urlset>\`;
}`;

    try {
      // Create the API directory structure
      const apiDir = 'src/app/api';
      if (!fs.existsSync(apiDir)) {
        fs.mkdirSync(apiDir, { recursive: true });
      }

      const sitemapApiPath = path.join(apiDir, 'sitemap.xml/route.ts');
      const sitemapApiDir = path.dirname(sitemapApiPath);
      if (!fs.existsSync(sitemapApiDir)) {
        fs.mkdirSync(sitemapApiDir, { recursive: true });
      }

      fs.writeFileSync(sitemapApiPath, generatorContent);
      
      this.results.passed.push('Dynamic sitemap generator created');
      
    } catch (error) {
      this.results.errors.push(`Error creating sitemap generator: ${error.message}`);
    }
  }

  generateReport() {
    this.log('Generating sitemap and GSC setup report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.results.errors.length + this.results.warnings.length + this.results.passed.length,
        errors: this.results.errors.length,
        warnings: this.results.warnings.length,
        passed: this.results.passed.length
      },
      results: this.results,
      sitemap: {
        url: `${this.baseUrl}/sitemap.xml`,
        pages: this.pages.length,
        lastGenerated: new Date().toISOString()
      },
      nextSteps: [
        'Verify your site in Google Search Console',
        'Submit sitemap.xml to Google Search Console',
        'Request indexing for important pages',
        'Set up monitoring for Core Web Vitals',
        'Configure email alerts for critical issues',
        'Create regular performance monitoring schedule'
      ],
      files: [
        'public/sitemap.xml - Main sitemap file',
        'public/robots.txt - Robots.txt file',
        'public/sitemap-index.xml - Sitemap index',
        'src/app/api/sitemap.xml/route.ts - Dynamic sitemap generator',
        'GOOGLE_SEARCH_CONSOLE_SETUP.md - Setup instructions'
      ],
      urls: {
        sitemap: `${this.baseUrl}/sitemap.xml`,
        robots: `${this.baseUrl}/robots.txt`,
        sitemapIndex: `${this.baseUrl}/sitemap-index.xml`,
        gsc: 'https://search.google.com/search-console'
      }
    };
    
    // Save report to file
    const reportPath = 'sitemap-gsc-setup-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Print summary
    console.log('\n🗺️ Sitemap & GSC Setup Summary:');
    console.log(`Total Tasks: ${report.summary.total}`);
    console.log(`Errors: ${report.summary.errors} ❌`);
    console.log(`Warnings: ${report.summary.warnings} ⚠️`);
    console.log(`Passed: ${report.summary.passed} ✅`);
    
    console.log(`\n📊 Sitemap Details:`);
    console.log(`  - Total pages: ${this.pages.length}`);
    console.log(`  - Sitemap URL: ${this.baseUrl}/sitemap.xml`);
    console.log(`  - Last generated: ${new Date().toISOString()}`);
    
    if (report.summary.errors > 0) {
      console.log('\n❌ Errors:');
      this.results.errors.forEach(error => console.log(`  - ${error}`));
    }
    
    if (report.summary.warnings > 0) {
      console.log('\n⚠️ Warnings:');
      this.results.warnings.forEach(warning => console.log(`  - ${warning}`));
    }

    if (report.summary.passed > 0) {
      console.log('\n✅ Completed:');
      this.results.passed.forEach(passed => console.log(`  - ${passed}`));
    }
    
    console.log(`\n📄 Full report saved to: ${reportPath}`);
    console.log(`\n📋 Next: Follow instructions in GOOGLE_SEARCH_CONSOLE_SETUP.md`);
    
    return report;
  }

  async runSetup() {
    this.log('Starting sitemap and Google Search Console setup...');
    
    await this.discoverPages();
    await this.generateSitemap();
    await this.generateRobotsTxt();
    await this.createSitemapIndex();
    await this.createSitemapGenerator();
    await this.generateGSCInstructions();
    
    return this.generateReport();
  }
}

// Run the setup
async function main() {
  const setup = new SitemapGSCSetup();
  
  try {
    await setup.runSetup();
    process.exit(0);
  } catch (error) {
    console.error('Sitemap and GSC setup failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = SitemapGSCSetup;