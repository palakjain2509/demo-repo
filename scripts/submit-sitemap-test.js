#!/usr/bin/env node

/**
 * Test Sitemap Submission Script for MyGETS Website
 * 
 * This script tests sitemap submission with localhost for development testing.
 * 
 * Usage: node scripts/submit-sitemap-test.js
 */

const https = require('https');
const http = require('http');
const { URL } = require('url');

// Test Configuration (for local development)
const SITEMAP_URL = 'http://localhost:3000/sitemap.xml';
const SEARCH_ENGINES = {
  google: {
    name: 'Google Search Console (Test)',
    url: 'https://www.google.com/ping?sitemap=',
    method: 'GET'
  },
  bing: {
    name: 'Bing Webmaster Tools (Test)',
    url: 'https://www.bing.com/ping?sitemap=',
    method: 'GET'
  }
};

/**
 * Make HTTP request
 */
function makeRequest(url, method = 'GET') {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
      path: urlObj.pathname + urlObj.search,
      method: method,
      headers: {
        'User-Agent': 'MyGETS-Sitemap-Submitter/1.0'
      }
    };

    const client = urlObj.protocol === 'https:' ? https : http;
    
    const req = client.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data: data
        });
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}

/**
 * Submit sitemap to a search engine
 */
async function submitToSearchEngine(engineName, engineConfig) {
  try {
    console.log(`\n🔄 Testing submission to ${engineConfig.name}...`);
    
    const submissionUrl = engineConfig.url + encodeURIComponent(SITEMAP_URL);
    console.log(`   URL: ${submissionUrl}`);
    
    const response = await makeRequest(submissionUrl, engineConfig.method);
    
    if (response.statusCode >= 200 && response.statusCode < 300) {
      console.log(`   ✅ Success! Status: ${response.statusCode}`);
      return { success: true, statusCode: response.statusCode };
    } else {
      console.log(`   ⚠️  Warning: Status ${response.statusCode}`);
      return { success: false, statusCode: response.statusCode };
    }
    
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
    return { success: false, error: error.message };
  }
}

/**
 * Validate sitemap
 */
async function validateSitemap() {
  try {
    console.log('🔍 Validating sitemap...');
    
    const response = await makeRequest(SITEMAP_URL);
    
    if (response.statusCode === 200) {
      console.log('   ✅ Sitemap is accessible');
      
      // Basic XML validation
      if (response.data.includes('<?xml') && response.data.includes('<urlset')) {
        console.log('   ✅ Sitemap XML structure appears valid');
        return true;
      } else {
        console.log('   ❌ Sitemap XML structure appears invalid');
        return false;
      }
    } else {
      console.log(`   ❌ Sitemap not accessible: ${response.statusCode}`);
      return false;
    }
    
  } catch (error) {
    console.log(`   ❌ Error validating sitemap: ${error.message}`);
    return false;
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🚀 MyGETS Sitemap Submission Test Tool');
  console.log('=======================================');
  console.log(`Sitemap URL: ${SITEMAP_URL}`);
  console.log(`Timestamp: ${new Date().toISOString()}`);
  console.log('\n⚠️  This is a TEST version for localhost development');
  
  // Check if localhost is running
  console.log('\n🔍 Checking if localhost:3000 is running...');
  try {
    const response = await makeRequest('http://localhost:3000');
    console.log('   ✅ Localhost:3000 is accessible');
  } catch (error) {
    console.log('   ❌ Localhost:3000 is not accessible');
    console.log('   💡 Start your development server with: npm run dev');
    process.exit(1);
  }
  
  // Validate sitemap first
  const isValid = await validateSitemap();
  
  if (!isValid) {
    console.log('\n❌ Sitemap validation failed. Please fix issues before submitting.');
    process.exit(1);
  }
  
  console.log('\n📤 Testing sitemap submissions...');
  
  const results = [];
  
  // Submit to all search engines
  for (const [engineKey, engineConfig] of Object.entries(SEARCH_ENGINES)) {
    const result = await submitToSearchEngine(engineKey, engineConfig);
    results.push({
      engine: engineConfig.name,
      ...result
    });
  }
  
  // Summary
  console.log('\n📊 Test Results Summary');
  console.log('========================');
  
  const successful = results.filter(r => r.success).length;
  const total = results.length;
  
  results.forEach(result => {
    const status = result.success ? '✅' : '❌';
    console.log(`${status} ${result.engine}: ${result.success ? 'Success' : 'Failed'}`);
  });
  
  console.log(`\n📈 Results: ${successful}/${total} successful submissions`);
  
  // Instructions for production
  console.log('\n📋 Production Instructions:');
  console.log('1. Deploy your site to https://mygets.net');
  console.log('2. Update SITEMAP_URL in scripts/submit-sitemap.js to: https://mygets.net/sitemap.xml');
  console.log('3. Run: node scripts/submit-sitemap.js');
  console.log('4. Verify submissions in Google Search Console');
  
  console.log('\n🔗 Manual Submission Links (for production):');
  console.log(`   Google: https://search.google.com/search-console/sitemaps`);
  console.log(`   Bing: https://www.bing.com/webmasters/sitemaps`);
}

// Run the script
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Script failed:', error.message);
    process.exit(1);
  });
}

module.exports = { submitToSearchEngine, validateSitemap }; 