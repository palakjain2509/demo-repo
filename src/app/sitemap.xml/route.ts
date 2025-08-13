import { NextRequest, NextResponse } from 'next/server';
import { getAllBlogPosts } from '@/lib/blog';

export async function GET(request: NextRequest) {
  const baseUrl = 'https://mygets.net';
  const currentDate = new Date().toISOString().split('T')[0];

  // Get all blog posts
  const blogPosts = getAllBlogPosts();

  // Define static pages with their priorities and change frequencies
  const staticPages = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/platform', priority: '0.8', changefreq: 'monthly' },
    { path: '/platform/contract-lifecycle', priority: '0.7', changefreq: 'monthly' },
    { path: '/platform/supplier-management', priority: '0.7', changefreq: 'monthly' },
    { path: '/platform/spend-analytics', priority: '0.7', changefreq: 'monthly' },
    { path: '/platform/ocds-reporting', priority: '0.7', changefreq: 'monthly' },
    { path: '/platform/our-engine', priority: '0.6', changefreq: 'monthly' },
    { path: '/platform/security', priority: '0.6', changefreq: 'monthly' },
    { path: '/platform/integrations', priority: '0.6', changefreq: 'monthly' },
    { path: '/solutions', priority: '0.8', changefreq: 'monthly' },
    { path: '/solutions/public-sector', priority: '0.7', changefreq: 'monthly' },
    { path: '/solutions/private-sector', priority: '0.7', changefreq: 'monthly' },
    { path: '/solutions/executives', priority: '0.6', changefreq: 'monthly' },
    { path: '/solutions/business-development', priority: '0.6', changefreq: 'monthly' },
    { path: '/solutions/procurement-leads', priority: '0.6', changefreq: 'monthly' },
    { path: '/solutions/public', priority: '0.6', changefreq: 'monthly' },
    { path: '/pricing', priority: '0.8', changefreq: 'monthly' },
    { path: '/early-adopter-program', priority: '0.9', changefreq: 'weekly' },
    { path: '/request-demo', priority: '0.8', changefreq: 'monthly' },
    { path: '/resources', priority: '0.7', changefreq: 'weekly' },
    { path: '/resources/blog', priority: '0.6', changefreq: 'weekly' },
    { path: '/resources/faq', priority: '0.7', changefreq: 'weekly' },
    { path: '/resources/case-studies', priority: '0.6', changefreq: 'monthly' },
    { path: '/resources/models', priority: '0.6', changefreq: 'monthly' },
    { path: '/resources/ocds-guide', priority: '0.6', changefreq: 'monthly' },
    { path: '/resources/webinars', priority: '0.6', changefreq: 'monthly' },
    { path: '/resources/whitepapers', priority: '0.6', changefreq: 'monthly' },
    { path: '/about-us', priority: '0.6', changefreq: 'monthly' },
    { path: '/careers', priority: '0.5', changefreq: 'weekly' },
    { path: '/phased-launch', priority: '0.5', changefreq: 'monthly' },
    { path: '/contact', priority: '0.7', changefreq: 'monthly' },
    { path: '/legal', priority: '0.3', changefreq: 'yearly' },
    { path: '/legal/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { path: '/legal/terms-of-service', priority: '0.3', changefreq: 'yearly' },
    { path: '/community', priority: '0.6', changefreq: 'weekly' },
  ];

  // Generate XML sitemap
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

  // Add static pages
  staticPages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // Add blog posts
  blogPosts.forEach(post => {
    const priority = post.featured ? '0.7' : '0.6';
    sitemap += `
  <url>
    <loc>${baseUrl}/resources/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  // Return XML response
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
    },
  });
} 