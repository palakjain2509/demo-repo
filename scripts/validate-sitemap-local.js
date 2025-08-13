#!/usr/bin/env node

/**
 * Local Sitemap Validation Script for MyGETS Website
 * 
 * This script validates the sitemap file locally and provides
 * submission instructions for when the site is deployed.
 * 
 * Usage: node scripts/validate-sitemap-local.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');
const SITEMAP_URL = 'https://mygets.net/sitemap.xml';

/**
 * Validate sitemap file locally
 */
function validateSitemapFile() {
  console.log('🔍 Validating sitemap file locally...');
  
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.log('   ❌ Sitemap file not found!');
    return false;
  }

  const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
  
  // Basic XML validation
  if (!sitemapContent.includes('<?xml version="1.0"')) {
    console.log('   ❌ Invalid XML format');
    return false;
  }

  if (!sitemapContent.includes('<urlset')) {
    console.log('   ❌ Missing urlset element');
    return false;
  }

  // Count URLs
  const urlMatches = sitemapContent.match(/<url>/g);
  const urlCount = urlMatches ? urlMatches.length : 0;
  
  console.log('   ✅ Sitemap XML structure is valid');
  console.log(`   📊 Contains ${urlCount} URLs`);
  
  return true;
}

/**
 * Analyze sitemap content
 */
function analyzeSitemap() {
  console.log('\n📊 Sitemap Analysis');
  console.log('==================');
  
  const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
  
  // Extract URLs
  const urlMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g);
  const urls = urlMatches ? urlMatches.map(match => match.replace(/<\/?loc>/g, '')) : [];
  
  // Extract priorities
  const priorityMatches = sitemapContent.match(/<priority>(.*?)<\/priority>/g);
  const priorities = priorityMatches ? priorityMatches.map(match => parseFloat(match.replace(/<\/?priority>/g, ''))) : [];
  
  // Extract change frequencies
  const changefreqMatches = sitemapContent.match(/<changefreq>(.*?)<\/changefreq>/g);
  const changefreqs = changefreqMatches ? changefreqMatches.map(match => match.replace(/<\/?changefreq>/g, '')) : [];
  
  console.log(`Total URLs: ${urls.length}`);
  
  // Priority distribution
  const priorityCounts = {};
  priorities.forEach(priority => {
    priorityCounts[priority] = (priorityCounts[priority] || 0) + 1;
  });
  
  console.log('\nPriority Distribution:');
  Object.entries(priorityCounts).sort((a, b) => b[0] - a[0]).forEach(([priority, count]) => {
    console.log(`   Priority ${priority}: ${count} URLs`);
  });
  
  // Change frequency distribution
  const changefreqCounts = {};
  changefreqs.forEach(freq => {
    changefreqCounts[freq] = (changefreqCounts[freq] || 0) + 1;
  });
  
  console.log('\nChange Frequency Distribution:');
  Object.entries(changefreqCounts).forEach(([freq, count]) => {
    console.log(`   ${freq}: ${count} URLs`);
  });
  
  // High priority URLs
  const highPriorityUrls = urls.filter((url, index) => priorities[index] >= 0.8);
  console.log('\nHigh Priority URLs (Priority ≥ 0.8):');
  highPriorityUrls.forEach(url => {
    const index = urls.indexOf(url);
    const priority = priorities[index];
    console.log(`   ${url} (Priority: ${priority})`);
  });
  
  return { urls, priorities, changefreqs };
}

/**
 * Generate submission instructions
 */
function generateSubmissionInstructions() {
  console.log('\n📤 Sitemap Submission Instructions');
  console.log('==================================');
  console.log('Once your site is deployed to production, follow these steps:');
  
  console.log('\n1. 🟢 Google Search Console');
  console.log('   URL: https://search.google.com/search-console');
  console.log('   Steps:');
  console.log('   - Add property: https://mygets.net');
  console.log('   - Verify ownership');
  console.log('   - Go to Sitemaps section');
  console.log('   - Submit: sitemap.xml');
  
  console.log('\n2. 🔵 Bing Webmaster Tools');
  console.log('   URL: https://www.bing.com/webmasters');
  console.log('   Steps:');
  console.log('   - Add site: https://mygets.net');
  console.log('   - Verify ownership');
  console.log('   - Go to Sitemaps section');
  console.log('   - Submit: https://mygets.net/sitemap.xml');
  
  console.log('\n3. 🟡 Yandex Webmaster');
  console.log('   URL: https://webmaster.yandex.com');
  console.log('   Steps:');
  console.log('   - Add site: https://mygets.net');
  console.log('   - Verify ownership');
  console.log('   - Go to Sitemaps section');
  console.log('   - Submit: https://mygets.net/sitemap.xml');
  
  console.log('\n4. 🔧 Automated Submission');
  console.log('   Run: node scripts/submit-sitemap.js');
  console.log('   (Only works when site is deployed)');
}

/**
 * Generate SEO recommendations
 */
function generateSEORecommendations() {
  console.log('\n🎯 SEO Recommendations');
  console.log('=====================');
  
  console.log('\n1. 📝 Content Optimization');
  console.log('   - Ensure each page has unique, valuable content');
  console.log('   - Use descriptive page titles and meta descriptions');
  console.log('   - Optimize for target keywords naturally');
  console.log('   - Include internal links between related pages');
  
  console.log('\n2. 🔗 Technical SEO');
  console.log('   - Ensure fast page load speeds (< 3 seconds)');
  console.log('   - Implement mobile-friendly design');
  console.log('   - Use proper heading structure (H1, H2, H3)');
  console.log('   - Add structured data (JSON-LD) where appropriate');
  
  console.log('\n3. 📊 Monitoring');
  console.log('   - Set up Google Search Console alerts');
  console.log('   - Monitor indexing status regularly');
  console.log('   - Track organic search performance');
  console.log('   - Analyze user behavior on indexed pages');
  
  console.log('\n4. 🔄 Regular Updates');
  console.log('   - Update sitemap when adding new pages');
  console.log('   - Refresh lastmod dates for updated content');
  console.log('   - Submit updated sitemap to search engines');
  console.log('   - Monitor and fix any crawl errors');
}

/**
 * Main function
 */
function main() {
  console.log('🚀 MyGETS Local Sitemap Validator');
  console.log('==================================');
  console.log(`Sitemap Path: ${SITEMAP_PATH}`);
  console.log(`Sitemap URL: ${SITEMAP_URL}`);
  console.log(`Timestamp: ${new Date().toISOString()}`);
  
  // Validate sitemap
  const isValid = validateSitemapFile();
  
  if (!isValid) {
    console.log('\n❌ Sitemap validation failed. Please fix issues before proceeding.');
    process.exit(1);
  }
  
  // Analyze sitemap
  const analysis = analyzeSitemap();
  
  // Generate instructions
  generateSubmissionInstructions();
  
  // Generate recommendations
  generateSEORecommendations();
  
  console.log('\n✅ Local sitemap validation completed!');
  console.log('\n📋 Next Steps:');
  console.log('1. Deploy your site to production');
  console.log('2. Verify sitemap is accessible at https://mygets.net/sitemap.xml');
  console.log('3. Submit sitemap to search engines using the instructions above');
  console.log('4. Monitor indexing progress in search console');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { validateSitemapFile, analyzeSitemap }; 