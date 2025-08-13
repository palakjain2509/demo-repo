import { NextResponse } from 'next/server';

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
  
  const dynamicPages: Array<{
    url: string;
    priority: number;
    changefreq: string;
    lastmod?: string;
  }> = [];
  
  // Example: Fetch blog posts
  // const blogPosts = await fetchBlogPosts();
  // blogPosts.forEach(post => {
  //   dynamicPages.push({
  //     url: `/blog/${post.slug}`,
  //     priority: 0.7,
  //     changefreq: 'weekly',
  //     lastmod: post.updatedAt
  //   });
  // });
  
  return dynamicPages;
}

function generateSitemapXML(baseUrl: string, pages: Array<{
  url: string;
  priority: number;
  changefreq: string;
  lastmod?: string;
}>) {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = pages.map((page: {
    url: string;
    priority: number;
    changefreq: string;
    lastmod?: string;
  }) => {
    const lastmod = page.lastmod || currentDate;
    
    return `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>`;
}