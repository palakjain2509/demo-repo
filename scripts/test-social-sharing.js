#!/usr/bin/env node

/**
 * MyGETS Social Sharing Test Script
 * 
 * This script tests Open Graph and Twitter Card metadata for social sharing
 * Run with: node scripts/test-social-sharing.js
 */

const fs = require('fs');
const path = require('path');

class SocialSharingTester {
  constructor() {
    this.results = {
      passed: [],
      warnings: [],
      errors: []
    };
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'warning' ? '⚠️' : '✅';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async testOpenGraphTags() {
    this.log('Testing Open Graph metadata...');
    
    try {
      const pages = [
        'src/app/page.tsx',
        'src/app/not-found.tsx',
        'src/app/(platform)/resources/page.tsx',
        'src/app/(platform)/solutions/public/page.tsx'
      ];

      for (const page of pages) {
        if (fs.existsSync(page)) {
          const content = fs.readFileSync(page, 'utf8');
          
          // Check for metadata export
          if (!content.includes('export const metadata')) {
            this.results.errors.push(`${page} missing metadata export`);
            continue;
          }

          // Check for Open Graph configuration
          if (!content.includes('openGraph:')) {
            this.results.errors.push(`${page} missing openGraph configuration`);
            continue;
          }

          // Check required Open Graph properties
          const requiredOGProps = ['title', 'description', 'type', 'url'];
          const missingProps = [];

          requiredOGProps.forEach(prop => {
            if (!content.includes(`${prop}:`)) {
              missingProps.push(prop);
            }
          });

          if (missingProps.length > 0) {
            this.results.warnings.push(`${page} missing Open Graph properties: ${missingProps.join(', ')}`);
          } else {
            this.results.passed.push(`${page} has all required Open Graph properties`);
          }

          // Check for Open Graph images
          if (!content.includes('images:')) {
            this.results.warnings.push(`${page} missing Open Graph images`);
          } else {
            this.results.passed.push(`${page} has Open Graph images configured`);
          }
        }
      }
    } catch (error) {
      this.results.errors.push(`Error testing Open Graph tags: ${error.message}`);
    }
  }

  async testTwitterCards() {
    this.log('Testing Twitter Card metadata...');
    
    try {
      const pages = [
        'src/app/page.tsx',
        'src/app/not-found.tsx',
        'src/app/(platform)/resources/page.tsx',
        'src/app/(platform)/solutions/public/page.tsx'
      ];

      for (const page of pages) {
        if (fs.existsSync(page)) {
          const content = fs.readFileSync(page, 'utf8');
          
          // Check for Twitter configuration
          if (!content.includes('twitter:')) {
            this.results.warnings.push(`${page} missing Twitter card configuration`);
            continue;
          }

          // Check required Twitter properties
          const requiredTwitterProps = ['card', 'title', 'description'];
          const missingProps = [];

          requiredTwitterProps.forEach(prop => {
            if (!content.includes(`${prop}:`)) {
              missingProps.push(prop);
            }
          });

          if (missingProps.length > 0) {
            this.results.warnings.push(`${page} missing Twitter card properties: ${missingProps.join(', ')}`);
          } else {
            this.results.passed.push(`${page} has all required Twitter card properties`);
          }

          // Check for Twitter images
          if (!content.includes('images:')) {
            this.results.warnings.push(`${page} missing Twitter card images`);
          } else {
            this.results.passed.push(`${page} has Twitter card images configured`);
          }
        }
      }
    } catch (error) {
      this.results.errors.push(`Error testing Twitter cards: ${error.message}`);
    }
  }

  async testImageFiles() {
    this.log('Testing social media image files...');
    
    try {
      const requiredImages = [
        'public/images/og-image.svg',
        'public/images/twitter-image.svg'
      ];

      requiredImages.forEach(imagePath => {
        if (fs.existsSync(imagePath)) {
          const stats = fs.statSync(imagePath);
          this.results.passed.push(`${imagePath} exists (${(stats.size / 1024).toFixed(2)} KB)`);
          
          // Check file size (SVG should be reasonable size)
          if (stats.size > 100 * 1024) { // 100KB
            this.results.warnings.push(`${imagePath} is quite large (${(stats.size / 1024).toFixed(2)} KB)`);
          }
        } else {
          this.results.errors.push(`Missing required image: ${imagePath}`);
        }
      });
    } catch (error) {
      this.results.errors.push(`Error testing image files: ${error.message}`);
    }
  }

  generateSocialSharingUrls() {
    this.log('Generating social sharing test URLs...');
    
    const baseUrl = 'https://mygets.net'; // Update this to your actual domain
    const testUrls = {
      facebook: `https://developers.facebook.com/tools/debug/?q=${encodeURIComponent(baseUrl)}`,
      twitter: `https://cards-dev.twitter.com/validator?url=${encodeURIComponent(baseUrl)}`,
      linkedin: `https://www.linkedin.com/post-inspector/inspect/${encodeURIComponent(baseUrl)}`,
      opengraph: `https://www.opengraph.xyz/url/${encodeURIComponent(baseUrl)}`
    };

    console.log('\n🔗 Social Media Testing URLs:');
    console.log(`Facebook Debugger: ${testUrls.facebook}`);
    console.log(`Twitter Card Validator: ${testUrls.twitter}`);
    console.log(`LinkedIn Post Inspector: ${testUrls.linkedin}`);
    console.log(`OpenGraph.xyz: ${testUrls.opengraph}`);
    
    return testUrls;
  }

  generateReport() {
    this.log('Generating social sharing test report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.results.errors.length + this.results.warnings.length + this.results.passed.length,
        errors: this.results.errors.length,
        warnings: this.results.warnings.length,
        passed: this.results.passed.length
      },
      results: this.results,
      testUrls: this.generateSocialSharingUrls(),
      recommendations: [
        'Test all URLs in Facebook Debugger before going live',
        'Validate Twitter Cards using Twitter Card Validator',
        'Check LinkedIn sharing with LinkedIn Post Inspector',
        'Ensure images are optimized and load quickly',
        'Test sharing on mobile devices',
        'Monitor social media analytics for engagement'
      ]
    };
    
    // Save report to file
    const reportPath = 'social-sharing-test-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Print summary
    console.log('\n📊 Social Sharing Test Summary:');
    console.log(`Total Tests: ${report.summary.total}`);
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

    if (report.summary.passed > 0) {
      console.log('\n✅ Passed:');
      this.results.passed.forEach(passed => console.log(`  - ${passed}`));
    }
    
    console.log(`\n📄 Full report saved to: ${reportPath}`);
    
    return report;
  }

  async runFullTest() {
    this.log('Starting social sharing tests...');
    
    await this.testOpenGraphTags();
    await this.testTwitterCards();
    await this.testImageFiles();
    
    return this.generateReport();
  }
}

// Run the test
async function main() {
  const tester = new SocialSharingTester();
  
  try {
    await tester.runFullTest();
    process.exit(0);
  } catch (error) {
    console.error('Social sharing test failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = SocialSharingTester;