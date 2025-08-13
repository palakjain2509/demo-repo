#!/usr/bin/env node

/**
 * Production Sitemap Submission Script for MyGETS
 * 
 * This script submits the dynamic sitemap to major search engines
 * for the production deployment at mygets.net
 */

const https = require('https');
const http = require('http');

const SITEMAP_URL = 'https://mygets.net/sitemap.xml';
const SITE_URL = 'https://mygets.net';

// Search engine submission URLs
const SEARCH_ENGINES = {
  google: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
  bing: `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
  yandex: `https://blogs.yandex.com/pings/?status=success&url=${encodeURIComponent(SITEMAP_URL)}`
};

// Google Search Console API (requires API key)
const GOOGLE_SEARCH_CONSOLE_API = 'https://searchconsole.googleapis.com/v1/sites';

/**
 * Submit sitemap to a search engine
 */
function submitToSearchEngine(name, url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https:') ? https : http;
    
    const req = protocol.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log(`✅ Successfully submitted to ${name}`);
          resolve({ name, status: 'success', statusCode: res.statusCode });
        } else {
          console.log(`⚠️  ${name} returned status ${res.statusCode}`);
          resolve({ name, status: 'warning', statusCode: res.statusCode });
        }
      });
    });
    
    req.on('error', (error) => {
      console.log(`❌ Error submitting to ${name}:`, error.message);
      reject({ name, status: 'error', error: error.message });
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      console.log(`⏰ Timeout submitting to ${name}`);
      reject({ name, status: 'timeout' });
    });
  });
}

/**
 * Validate sitemap by fetching and checking its structure
 */
function validateSitemap() {
  return new Promise((resolve, reject) => {
    https.get(SITEMAP_URL, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          // Basic validation - check if it's valid XML with urlset
          if (data.includes('<?xml') && data.includes('<urlset') && data.includes('</urlset>')) {
            const urlCount = (data.match(/<url>/g) || []).length;
            console.log(`✅ Sitemap is valid and contains ${urlCount} URLs`);
            resolve({ valid: true, urlCount });
          } else {
            console.log('❌ Sitemap appears to be invalid XML');
            reject({ valid: false, error: 'Invalid XML structure' });
          }
        } else {
          console.log(`❌ Sitemap returned status ${res.statusCode}`);
          reject({ valid: false, error: `HTTP ${res.statusCode}` });
        }
      });
    }).on('error', (error) => {
      console.log('❌ Error fetching sitemap:', error.message);
      reject({ valid: false, error: error.message });
    });
  });
}

/**
 * Submit sitemap to Google Search Console via API (if credentials available)
 */
async function submitToGoogleSearchConsole() {
  const apiKey = process.env.GOOGLE_SEARCH_CONSOLE_API_KEY;
  const siteUrl = process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL || SITE_URL;
  
  if (!apiKey) {
    console.log('ℹ️  Google Search Console API key not found. Skipping API submission.');
    console.log('   Set GOOGLE_SEARCH_CONSOLE_API_KEY environment variable to enable.');
    return;
  }
  
  try {
    const url = `${GOOGLE_SEARCH_CONSOLE_API}/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(SITEMAP_URL)}`;
    
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      console.log('✅ Successfully submitted to Google Search Console API');
    } else {
      console.log(`⚠️  Google Search Console API returned ${response.status}`);
    }
  } catch (error) {
    console.log('❌ Error submitting to Google Search Console API:', error.message);
  }
}

/**
 * Main submission function
 */
async function submitSitemap() {
  console.log('🚀 Starting sitemap submission for MyGETS production...\n');
  
  try {
    // First validate the sitemap
    console.log('📋 Validating sitemap...');
    await validateSitemap();
    console.log('');
    
    // Submit to search engines
    console.log('📤 Submitting to search engines...');
    const results = [];
    
    for (const [name, url] of Object.entries(SEARCH_ENGINES)) {
      try {
        const result = await submitToSearchEngine(name, url);
        results.push(result);
        // Add delay between submissions
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        results.push(error);
      }
    }
    
    console.log('');
    
    // Submit to Google Search Console API if credentials available
    await submitToGoogleSearchConsole();
    
    console.log('\n📊 Submission Summary:');
    results.forEach(result => {
      const status = result.status === 'success' ? '✅' : 
                    result.status === 'warning' ? '⚠️' : '❌';
      console.log(`${status} ${result.name}: ${result.status}`);
    });
    
    console.log('\n🎉 Sitemap submission completed!');
    console.log('\n📝 Next Steps:');
    console.log('1. Monitor Google Search Console for indexing status');
    console.log('2. Check Bing Webmaster Tools for submission confirmation');
    console.log('3. Verify sitemap is accessible at: https://mygets.net/sitemap.xml');
    console.log('4. Set up automated sitemap submission (recommended weekly)');
    
  } catch (error) {
    console.error('❌ Sitemap submission failed:', error.message);
    process.exit(1);
  }
}

/**
 * Manual verification function
 */
function verifySitemap() {
  console.log('🔍 Verifying sitemap accessibility...\n');
  
  https.get(SITEMAP_URL, (res) => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Content-Type: ${res.headers['content-type']}`);
    console.log(`Content-Length: ${res.headers['content-length']} bytes`);
    
    if (res.statusCode === 200) {
      console.log('\n✅ Sitemap is accessible and ready for submission');
    } else {
      console.log('\n❌ Sitemap is not accessible');
    }
  }).on('error', (error) => {
    console.error('❌ Error accessing sitemap:', error.message);
  });
}

// Handle command line arguments
const args = process.argv.slice(2);

if (args.includes('--verify') || args.includes('-v')) {
  verifySitemap();
} else if (args.includes('--help') || args.includes('-h')) {
  console.log(`
MyGETS Sitemap Submission Script

Usage:
  node submit-sitemap-production.js          # Submit sitemap to search engines
  node submit-sitemap-production.js --verify # Verify sitemap accessibility
  node submit-sitemap-production.js --help   # Show this help

Environment Variables:
  GOOGLE_SEARCH_CONSOLE_API_KEY    # Google Search Console API key (optional)
  GOOGLE_SEARCH_CONSOLE_SITE_URL   # Site URL for Google Search Console (optional)

Sitemap URL: ${SITEMAP_URL}
Site URL: ${SITE_URL}
  `);
} else {
  submitSitemap();
} 