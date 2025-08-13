#!/usr/bin/env node

/**
 * Schema Markup Validator
 * 
 * Validates schema markup against Schema.org standards
 */

const fs = require('fs');
const path = require('path');

class SchemaValidator {
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

  validateSchema(schema, type) {
    const errors = [];
    const warnings = [];

    // Check required @context
    if (!schema['@context']) {
      errors.push('Missing @context property');
    } else if (schema['@context'] !== 'https://schema.org') {
      warnings.push('Non-standard @context value');
    }

    // Check required @type
    if (!schema['@type']) {
      errors.push('Missing @type property');
    }

    // Type-specific validations
    switch (type) {
      case 'organization':
        this.validateOrganization(schema, errors, warnings);
        break;
      case 'product':
        this.validateProduct(schema, errors, warnings);
        break;
      case 'review':
        this.validateReview(schema, errors, warnings);
        break;
      case 'event':
        this.validateEvent(schema, errors, warnings);
        break;
      case 'website':
        this.validateWebSite(schema, errors, warnings);
        break;
      case 'webpage':
        this.validateWebPage(schema, errors, warnings);
        break;
      case 'article':
        this.validateArticle(schema, errors, warnings);
        break;
      case 'faq':
        this.validateFAQ(schema, errors, warnings);
        break;
    }

    return { errors, warnings };
  }

  validateOrganization(schema, errors, warnings) {
    if (!schema.name) errors.push('Organization missing required name');
    if (!schema.url) warnings.push('Organization missing recommended url');
    if (!schema.logo) warnings.push('Organization missing recommended logo');
  }

  validateProduct(schema, errors, warnings) {
    if (!schema.name) errors.push('Product missing required name');
    if (!schema.description) errors.push('Product missing required description');
    if (!schema.brand && !schema.manufacturer) {
      warnings.push('Product missing brand or manufacturer');
    }
    if (!schema.offers) warnings.push('Product missing offers');
    if (!schema.image) warnings.push('Product missing image');
  }

  validateReview(schema, errors, warnings) {
    if (!schema.reviewRating) errors.push('Review missing required reviewRating');
    if (!schema.author) errors.push('Review missing required author');
    if (!schema.reviewBody) errors.push('Review missing required reviewBody');
    if (!schema.datePublished) warnings.push('Review missing datePublished');
  }

  validateEvent(schema, errors, warnings) {
    if (!schema.name) errors.push('Event missing required name');
    if (!schema.startDate) errors.push('Event missing required startDate');
    if (!schema.location) errors.push('Event missing required location');
    if (!schema.description) warnings.push('Event missing description');
    if (!schema.organizer) warnings.push('Event missing organizer');
  }

  validateWebSite(schema, errors, warnings) {
    if (!schema.name) errors.push('WebSite missing required name');
    if (!schema.url) errors.push('WebSite missing required url');
    if (!schema.publisher) warnings.push('WebSite missing publisher');
  }

  validateWebPage(schema, errors, warnings) {
    if (!schema.name) errors.push('WebPage missing required name');
    if (!schema.url) errors.push('WebPage missing required url');
    if (!schema.isPartOf) warnings.push('WebPage missing isPartOf');
  }

  validateArticle(schema, errors, warnings) {
    if (!schema.headline) errors.push('Article missing required headline');
    if (!schema.author) errors.push('Article missing required author');
    if (!schema.publisher) errors.push('Article missing required publisher');
    if (!schema.datePublished) errors.push('Article missing required datePublished');
    if (!schema.image) warnings.push('Article missing image');
  }

  validateFAQ(schema, errors, warnings) {
    if (!schema.mainEntity) errors.push('FAQPage missing required mainEntity');
    if (Array.isArray(schema.mainEntity)) {
      schema.mainEntity.forEach((question, index) => {
        if (!question.name) errors.push(`Question ${index + 1} missing name`);
        if (!question.acceptedAnswer) errors.push(`Question ${index + 1} missing acceptedAnswer`);
        if (question.acceptedAnswer && !question.acceptedAnswer.text) {
          errors.push(`Question ${index + 1} answer missing text`);
        }
      });
    }
  }

  async validateFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract JSON-LD scripts
      const jsonLdRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
      let match;
      let schemaCount = 0;
      
      while ((match = jsonLdRegex.exec(content)) !== null) {
        schemaCount++;
        try {
          const schema = JSON.parse(match[1]);
          const type = this.detectSchemaType(schema);
          const validation = this.validateSchema(schema, type);
          
          if (validation.errors.length > 0) {
            this.results.errors.push(`${filePath} - Schema ${schemaCount}: ${validation.errors.join(', ')}`);
          }
          
          if (validation.warnings.length > 0) {
            this.results.warnings.push(`${filePath} - Schema ${schemaCount}: ${validation.warnings.join(', ')}`);
          }
          
          if (validation.errors.length === 0) {
            this.results.passed.push(`${filePath} - Schema ${schemaCount} (${type}): Valid`);
          }
          
        } catch (parseError) {
          this.results.errors.push(`${filePath} - Schema ${schemaCount}: Invalid JSON - ${parseError.message}`);
        }
      }
      
      if (schemaCount === 0) {
        this.results.warnings.push(`${filePath}: No schema markup found`);
      }
      
    } catch (error) {
      this.results.errors.push(`Error reading ${filePath}: ${error.message}`);
    }
  }

  detectSchemaType(schema) {
    const type = schema['@type'];
    if (!type) return 'unknown';
    
    if (typeof type === 'string') {
      return type.toLowerCase();
    }
    
    if (Array.isArray(type)) {
      return type[0].toLowerCase();
    }
    
    return 'unknown';
  }

  async validateDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const fullPath = path.join(dirPath, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        await this.validateDirectory(fullPath);
      } else if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.html')) {
        await this.validateFile(fullPath);
      }
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.results.errors.length + this.results.warnings.length + this.results.passed.length,
        errors: this.results.errors.length,
        warnings: this.results.warnings.length,
        passed: this.results.passed.length
      },
      results: this.results
    };
    
    // Save report
    const reportPath = 'schema-validation-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Print summary
    console.log('\n📋 Schema Validation Summary:');
    console.log(`Total Schemas: ${report.summary.total}`);
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

  async run() {
    this.log('Starting schema markup validation...');
    
    // Validate src directory
    if (fs.existsSync('src')) {
      await this.validateDirectory('src');
    }
    
    return this.generateReport();
  }
}

// Run validation
async function main() {
  const validator = new SchemaValidator();
  
  try {
    await validator.run();
    process.exit(0);
  } catch (error) {
    console.error('Schema validation failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = SchemaValidator;