#!/usr/bin/env node

/**
 * Sitemap Submission Script for MyGETS Website
 * 
 * This script submits the sitemap to various search engines including:
 * - Google Search Console
 * - Bing Webmaster Tools
 * - Yandex Webmaster
 * 
 * Usage: node scripts/submit-sitemap.js
 */

const https = require('https');
const http = require('http');
const { URL } = require('url');

// Configuration
const SITEMAP_URL = 'https://mygets.net/sitemap.xml';
const SEARCH_ENGINES = {
  google: {
    name: 'Google Search Console',
    url: 'https://www.google.com/ping?sitemap=',
    method: 'GET'
  },
  bing: {
    name: 'Bing Webmaster Tools',
    url: 'https://www.bing.com/ping?sitemap=',
    method: 'GET'
  },
  yandex: {
    name: 'Yandex Webmaster',
    url: 'https://blogs.yandex.com/pings/?status=success&url=',
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
    console.log(`\n🔄 Submitting to ${engineConfig.name}...`);
    
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
  console.log('🚀 MyGETS Sitemap Submission Tool');
  console.log('=====================================');
  console.log(`Sitemap URL: ${SITEMAP_URL}`);
  console.log(`Timestamp: ${new Date().toISOString()}`);
  
  // Validate sitemap first
  const isValid = await validateSitemap();
  
  if (!isValid) {
    console.log('\n❌ Sitemap validation failed. Please fix issues before submitting.');
    process.exit(1);
  }
  
  console.log('\n📤 Starting sitemap submissions...');
  
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
  console.log('\n📊 Submission Summary');
  console.log('=====================');
  
  const successful = results.filter(r => r.success).length;
  const total = results.length;
  
  results.forEach(result => {
    const status = result.success ? '✅' : '❌';
    console.log(`${status} ${result.engine}: ${result.success ? 'Success' : 'Failed'}`);
  });
  
  console.log(`\n📈 Results: ${successful}/${total} successful submissions`);
  
  if (successful === total) {
    console.log('🎉 All submissions successful!');
  } else {
    console.log('⚠️  Some submissions failed. Check the logs above.');
  }
  
  // Additional instructions
  console.log('\n📋 Next Steps:');
  console.log('1. Verify submissions in Google Search Console');
  console.log('2. Monitor indexing progress');
  console.log('3. Check for any crawl errors');
  console.log('4. Consider submitting to additional search engines if needed');
  
  console.log('\n🔗 Manual Submission Links:');
  console.log(`   Google: https://search.google.com/search-console/sitemaps`);
  console.log(`   Bing: https://www.bing.com/webmasters/sitemaps`);
  console.log(`   Yandex: https://webmaster.yandex.com/sitemaps/`);
}

// Run the script
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Script failed:', error.message);
    process.exit(1);
  });
}

module.exports = { submitToSearchEngine, validateSitemap }; 