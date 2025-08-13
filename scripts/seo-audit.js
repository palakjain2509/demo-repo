#!/usr/bin/env node

/**
 * MyGETS SEO Audit Script
 * 
 * This script performs automated SEO audits of the website
 * Run with: node scripts/seo-audit.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SEOAuditor {
  constructor() {
    this.results = {
      passed: [],
      warnings: [],
      errors: [],
      recommendations: []
    };
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'warning' ? '⚠️' : '✅';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async auditMetaTags() {
    this.log('Auditing meta tags...');
    
    try {
      const pages = [
        'src/app/page.tsx',
        'src/app/not-found.tsx',
        'src/app/(platform)/resources/page.tsx',
        'src/app/(platform)/solutions/public/page.tsx',
        'src/app/resources/faq/page.tsx'
      ];

      for (const page of pages) {
        if (fs.existsSync(page)) {
          const content = fs.readFileSync(page, 'utf8');
          
          // Check for Next.js 13+ metadata export
          const hasMetadataExport = content.includes('export const metadata');
          const hasLegacyHead = content.includes('<Head>') || content.includes('import Head from');
          
          if (hasLegacyHead && !hasMetadataExport) {
            this.results.warnings.push(`${page} still uses legacy Head component - should migrate to metadata export`);
          }
          
          if (hasMetadataExport) {
            this.results.passed.push(`${page} uses modern Next.js metadata export`);
            
            // Check for title in metadata
            if (!content.includes('title:')) {
              this.results.errors.push(`Missing title in metadata export in ${page}`);
            }
            
            // Check for description in metadata
            if (!content.includes('description:')) {
              this.results.warnings.push(`Missing description in metadata export in ${page}`);
            }
            
            // Check for Open Graph in metadata
            if (!content.includes('openGraph:')) {
              this.results.warnings.push(`Missing Open Graph configuration in metadata export in ${page}`);
            } else {
              this.results.passed.push(`${page} has Open Graph metadata configured`);
            }
            
            // Check for Twitter cards in metadata
            if (!content.includes('twitter:')) {
              this.results.warnings.push(`Missing Twitter card configuration in metadata export in ${page}`);
            } else {
              this.results.passed.push(`${page} has Twitter card metadata configured`);
            }
          } else if (!hasLegacyHead) {
            this.results.errors.push(`${page} missing both metadata export and Head component`);
          }
          
          // Check for structured data (JSON-LD)
          if (!content.includes('application/ld+json')) {
            this.results.warnings.push(`Missing structured data in ${page}`);
          } else {
            this.results.passed.push(`${page} includes structured data`);
          }
        }
      }
    } catch (error) {
      this.results.errors.push(`Error auditing meta tags: ${error.message}`);
    }
  }

  async auditImages() {
    this.log('Auditing images...');
    
    try {
      const publicDir = 'public';
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg'];
      
      if (fs.existsSync(publicDir)) {
        const walkDir = (dir) => {
          const files = fs.readdirSync(dir);
          files.forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            
            if (stat.isDirectory()) {
              walkDir(filePath);
            } else if (imageExtensions.some(ext => file.toLowerCase().endsWith(ext))) {
              // Check file size
              const sizeInMB = stat.size / (1024 * 1024);
              if (sizeInMB > 1) {
                this.results.warnings.push(`Large image file: ${filePath} (${sizeInMB.toFixed(2)}MB)`);
              }
              
              // Check filename
              if (file.includes(' ')) {
                this.results.warnings.push(`Image filename contains spaces: ${filePath}`);
              }
            }
          });
        };
        
        walkDir(publicDir);
      }
    } catch (error) {
      this.results.errors.push(`Error auditing images: ${error.message}`);
    }
  }

  async auditSitemap() {
    this.log('Auditing sitemap...');
    
    try {
      const sitemapPath = 'public/sitemap.xml';
      
      if (fs.existsSync(sitemapPath)) {
        const content = fs.readFileSync(sitemapPath, 'utf8');
        
        // Check if sitemap is valid XML
        if (!content.includes('<?xml version="1.0"')) {
          this.results.errors.push('Sitemap is not valid XML');
        }
        
        // Check for required elements
        if (!content.includes('<urlset')) {
          this.results.errors.push('Sitemap missing urlset element');
        }
        
        // Count URLs
        const urlCount = (content.match(/<url>/g) || []).length;
        this.log(`Found ${urlCount} URLs in sitemap`);
        
        if (urlCount < 10) {
          this.results.warnings.push('Sitemap has very few URLs');
        }
      } else {
        this.results.errors.push('Sitemap not found');
      }
    } catch (error) {
      this.results.errors.push(`Error auditing sitemap: ${error.message}`);
    }
  }

  async auditRobotsTxt() {
    this.log('Auditing robots.txt...');
    
    try {
      const robotsPath = 'public/robots.txt';
      
      if (fs.existsSync(robotsPath)) {
        const content = fs.readFileSync(robotsPath, 'utf8');
        
        // Check for sitemap reference
        if (!content.includes('Sitemap:')) {
          this.results.warnings.push('Robots.txt missing sitemap reference');
        }
        
        // Check for user-agent
        if (!content.includes('User-agent:')) {
          this.results.warnings.push('Robots.txt missing user-agent directive');
        }
      } else {
        this.results.errors.push('Robots.txt not found');
      }
    } catch (error) {
      this.results.errors.push(`Error auditing robots.txt: ${error.message}`);
    }
  }

  async auditPerformance() {
    this.log('Auditing performance...');
    
    try {
      // Check for Next.js Image component usage
      const components = [
        'src/app/home/components/HeroSection.tsx',
        'src/app/home/components/SEOOptimizedContent.tsx'
      ];
      
      for (const component of components) {
        if (fs.existsSync(component)) {
          const content = fs.readFileSync(component, 'utf8');
          
          // Check for regular img tags
          if (content.includes('<img ') && !content.includes('next/image')) {
            this.results.warnings.push(`Component ${component} uses regular img tag instead of Next.js Image component`);
          }
          
          // Check for lazy loading
          if (content.includes('<img ') && !content.includes('loading=')) {
            this.results.warnings.push(`Component ${component} missing lazy loading on images`);
          }
        }
      }
    } catch (error) {
      this.results.errors.push(`Error auditing performance: ${error.message}`);
    }
  }

  async auditAccessibility() {
    this.log('Auditing accessibility...');
    
    try {
      const components = [
        'src/app/home/components/HeroSection.tsx',
        'src/app/home/components/FAQSection.tsx'
      ];
      
      for (const component of components) {
        if (fs.existsSync(component)) {
          const content = fs.readFileSync(component, 'utf8');
          
          // Check for alt attributes
          if (content.includes('<img ') && !content.includes('alt=')) {
            this.results.errors.push(`Component ${component} has images without alt attributes`);
          }
          
          // Check for ARIA labels
          if (content.includes('<button ') && !content.includes('aria-label=') && !content.includes('aria-labelledby=')) {
            this.results.warnings.push(`Component ${component} has buttons without ARIA labels`);
          }
          
          // Check for semantic HTML
          if (content.includes('<div ') && content.includes('onClick=')) {
            this.results.warnings.push(`Component ${component} uses div with onClick instead of button`);
          }
        }
      }
    } catch (error) {
      this.results.errors.push(`Error auditing accessibility: ${error.message}`);
    }
  }

  async auditContent() {
    this.log('Auditing content...');
    
    try {
      const contentFiles = [
        'src/app/home/components/SEOOptimizedContent.tsx',
        'src/app/home/components/FAQSection.tsx'
      ];
      
      for (const file of contentFiles) {
        if (fs.existsSync(file)) {
          const content = fs.readFileSync(file, 'utf8');
          
          // Check for heading hierarchy
          const h1Count = (content.match(/<h1/g) || []).length;
          const h2Count = (content.match(/<h2/g) || []).length;
          const h3Count = (content.match(/<h3/g) || []).length;
          
          if (h1Count > 1) {
            this.results.errors.push(`File ${file} has multiple H1 tags`);
          }
          
          if (h2Count === 0 && h3Count > 0) {
            this.results.warnings.push(`File ${file} has H3 tags without H2 tags`);
          }
          
          // Check for keyword density
          const keywords = ['OCDS', 'procurement', 'intelligence', 'platform'];
          keywords.forEach(keyword => {
            const count = (content.match(new RegExp(keyword, 'gi')) || []).length;
            if (count === 0) {
              this.results.warnings.push(`File ${file} missing keyword: ${keyword}`);
            }
          });
        }
      }
    } catch (error) {
      this.results.errors.push(`Error auditing content: ${error.message}`);
    }
  }

  generateReport() {
    this.log('Generating SEO audit report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.results.errors.length + this.results.warnings.length + this.results.passed.length,
        errors: this.results.errors.length,
        warnings: this.results.warnings.length,
        passed: this.results.passed.length
      },
      results: this.results,
      recommendations: [
        'Implement all error fixes immediately',
        'Address warnings within 1-2 weeks',
        'Monitor Core Web Vitals regularly',
        'Set up Google Search Console',
        'Create content calendar for regular updates',
        'Implement automated SEO monitoring'
      ]
    };
    
    // Save report to file
    const reportPath = 'seo-audit-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Print summary
    console.log('\n📊 SEO Audit Summary:');
    console.log(`Total Issues: ${report.summary.total}`);
    console.log(`Errors: ${report.summary.errors} ❌`);
    console.log(`Warnings: ${report.summary.warnings} ⚠️`);
    console.log(`Passed: ${report.summary.passed} ✅`);
    
    if (report.summary.errors > 0) {
      console.log('\n❌ Errors:');
      this.results.errors.forEach(error => console.log(`  - ${error}`));
    }
    
    if (report.summary.warnings > 0) {
      console.log('\n⚠️ Warnings:');
      this.results.warnings.forEach(warning => console.log(`  - ${warning}`));
    }
    
    console.log(`\n📄 Full report saved to: ${reportPath}`);
    
    return report;
  }

  async runFullAudit() {
    this.log('Starting comprehensive SEO audit...');
    
    await this.auditMetaTags();
    await this.auditImages();
    await this.auditSitemap();
    await this.auditRobotsTxt();
    await this.auditPerformance();
    await this.auditAccessibility();
    await this.auditContent();
    
    return this.generateReport();
  }
}

// Run the audit
async function main() {
  const auditor = new SEOAuditor();
  
  try {
    await auditor.runFullAudit();
    process.exit(0);
  } catch (error) {
    console.error('Audit failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = SEOAuditor;