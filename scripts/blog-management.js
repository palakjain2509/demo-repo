#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

// Ensure blog directory exists
if (!fs.existsSync(BLOG_DIR)) {
  fs.mkdirSync(BLOG_DIR, { recursive: true });
}

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
}

function generateFrontMatter(data) {
  return `---
title: "${data.title}"
date: "${data.date}"
author: "${data.author}"
excerpt: "${data.excerpt}"
category: "${data.category}"
tags: [${data.tags.map(tag => `"${tag}"`).join(', ')}]
readTime: "${data.readTime}"
featured: ${data.featured}
---

`;
}

async function createNewPost() {
  console.log('\n=== Create New Blog Post ===\n');

  const title = await question('Post title: ');
  const author = await question('Author (default: MyGETS Team): ') || 'MyGETS Team';
  const excerpt = await question('Excerpt: ');
  const category = await question('Category: ');
  const tagsInput = await question('Tags (comma-separated): ');
  const readTime = await question('Read time (e.g., "5 min read"): ');
  const featured = await question('Featured post? (y/n, default: n): ').toLowerCase() === 'y';

  const tags = tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag);
  const slug = generateSlug(title);
  const date = new Date().toISOString().split('T')[0];

  const frontMatter = generateFrontMatter({
    title,
    date,
    author,
    excerpt,
    category,
    tags,
    readTime,
    featured
  });

  const content = `# ${title}

${excerpt}

## Introduction

Start your blog post here...

## Main Content

Add your main content sections here...

## Conclusion

Wrap up your blog post here...

---

*For more information about how MyGETS can help your organization, [contact our team](/contact) or [request a demo](/request-demo).*
`;

  const fullContent = frontMatter + content;
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  fs.writeFileSync(filePath, fullContent);

  console.log(`\n✅ Blog post created: ${filePath}`);
  console.log(`📝 Edit the file to add your content`);
  console.log(`🔗 URL will be: /resources/blog/${slug}`);
}

async function listPosts() {
  console.log('\n=== Blog Posts ===\n');

  if (!fs.existsSync(BLOG_DIR)) {
    console.log('No blog posts found.');
    return;
  }

  const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.mdx'));
  
  if (files.length === 0) {
    console.log('No blog posts found.');
    return;
  }

  files.forEach((file, index) => {
    const slug = file.replace('.mdx', '');
    const filePath = path.join(BLOG_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract title from frontmatter
    const titleMatch = content.match(/title:\s*"([^"]+)"/);
    const title = titleMatch ? titleMatch[1] : slug;
    
    console.log(`${index + 1}. ${title}`);
    console.log(`   Slug: ${slug}`);
    console.log(`   File: ${file}`);
    console.log('');
  });
}

async function deletePost() {
  console.log('\n=== Delete Blog Post ===\n');

  const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.mdx'));
  
  if (files.length === 0) {
    console.log('No blog posts found.');
    return;
  }

  console.log('Available posts:');
  files.forEach((file, index) => {
    console.log(`${index + 1}. ${file}`);
  });

  const choice = await question('\nEnter the number of the post to delete: ');
  const index = parseInt(choice) - 1;

  if (index >= 0 && index < files.length) {
    const file = files[index];
    const filePath = path.join(BLOG_DIR, file);
    
    const confirm = await question(`Are you sure you want to delete "${file}"? (y/n): `);
    
    if (confirm.toLowerCase() === 'y') {
      fs.unlinkSync(filePath);
      console.log(`✅ Deleted: ${file}`);
    } else {
      console.log('❌ Deletion cancelled');
    }
  } else {
    console.log('❌ Invalid selection');
  }
}

async function showMenu() {
  console.log('\n=== MyGETS Blog Management ===\n');
  console.log('1. Create new blog post');
  console.log('2. List all blog posts');
  console.log('3. Delete blog post');
  console.log('4. Exit');
  console.log('');

  const choice = await question('Select an option (1-4): ');

  switch (choice) {
    case '1':
      await createNewPost();
      break;
    case '2':
      await listPosts();
      break;
    case '3':
      await deletePost();
      break;
    case '4':
      console.log('👋 Goodbye!');
      rl.close();
      return;
    default:
      console.log('❌ Invalid option');
  }

  // Show menu again
  await showMenu();
}

// Handle script arguments
const args = process.argv.slice(2);

if (args.length > 0) {
  switch (args[0]) {
    case 'create':
      createNewPost().then(() => rl.close());
      break;
    case 'list':
      listPosts().then(() => rl.close());
      break;
    case 'delete':
      deletePost().then(() => rl.close());
      break;
    default:
      console.log('Usage: node blog-management.js [create|list|delete]');
      rl.close();
  }
} else {
  showMenu();
} 