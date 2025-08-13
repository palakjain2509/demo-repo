# Dynamic Sitemap Implementation Guide

## Overview

MyGETS now uses a **dynamic sitemap** that automatically generates and updates the sitemap.xml file based on your current content, including all blog posts. This ensures that search engines always have the most up-to-date information about your website.

## 🚀 How It Works

### Dynamic Sitemap Route
- **URL**: `https://mygets.net/sitemap.xml`
- **Type**: API Route (`/src/app/sitemap.xml/route.ts`)
- **Generation**: Real-time generation on each request
- **Caching**: 1-hour cache for performance

### Features
- ✅ **Automatic Blog Post Inclusion**: All blog posts are automatically added
- ✅ **Priority Assignment**: Strategic priority based on content type
- ✅ **Change Frequency**: Appropriate update frequencies for different content
- ✅ **Real-time Updates**: No manual sitemap maintenance required
- ✅ **Production Ready**: Optimized for mygets.net deployment

## 📋 Sitemap Structure

### Static Pages
- **Homepage**: Priority 1.0, Weekly updates
- **Platform Pages**: Priority 0.6-0.8, Monthly updates
- **Solutions Pages**: Priority 0.6-0.8, Monthly updates
- **Resources**: Priority 0.6-0.7, Weekly/Monthly updates
- **Legal Pages**: Priority 0.3, Yearly updates

### Blog Posts
- **Featured Posts**: Priority 0.7, Monthly updates
- **Regular Posts**: Priority 0.6, Monthly updates
- **Automatic Detection**: All `.mdx` files in `/content/blog/`

## 🔧 Implementation Details

### API Route Location
```
src/app/sitemap.xml/route.ts
```

### Key Functions
- `getAllBlogPosts()`: Fetches all blog posts from content directory
- Dynamic URL generation based on current date
- Automatic priority assignment based on content type
- XML generation with proper headers and caching

### Caching Strategy
```javascript
'Cache-Control': 'public, max-age=3600, s-maxage=3600' // 1 hour cache
```

## 📤 Submitting to Search Engines

### Automated Submission Script
Use the provided script to submit your sitemap to search engines:

```bash
# Submit to all search engines
node scripts/submit-sitemap-production.js

# Verify sitemap accessibility
node scripts/submit-sitemap-production.js --verify

# Show help
node scripts/submit-sitemap-production.js --help
```

### Manual Submission URLs
- **Google**: https://www.google.com/ping?sitemap=https://mygets.net/sitemap.xml
- **Bing**: https://www.bing.com/ping?sitemap=https://mygets.net/sitemap.xml
- **Yandex**: https://blogs.yandex.com/pings/?status=success&url=https://mygets.net/sitemap.xml

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `https://mygets.net`
3. Navigate to "Sitemaps" section
4. Submit: `https://mygets.net/sitemap.xml`

## 🔍 Verification

### Check Sitemap Accessibility
```bash
curl -I https://mygets.net/sitemap.xml
```

Expected response:
```
HTTP/2 200
content-type: application/xml
cache-control: public, max-age=3600, s-maxage=3600
```

### Validate Sitemap Content
```bash
curl https://mygets.net/sitemap.xml | head -20
```

Should show valid XML with `<urlset>` structure.

## 📊 Monitoring

### Google Search Console
- Monitor indexing status
- Check for crawl errors
- Track sitemap submission status
- View indexing statistics

### Bing Webmaster Tools
- Submit sitemap for Bing indexing
- Monitor crawl statistics
- Check for indexing issues

### Automated Monitoring
Set up weekly sitemap submission:
```bash
# Add to crontab for weekly submission
0 9 * * 1 cd /path/to/mygets-website && node scripts/submit-sitemap-production.js
```

## 🛠️ Customization

### Adding New Page Types
Edit `/src/app/sitemap.xml/route.ts`:

```javascript
const staticPages = [
  // Add new pages here
  { path: '/new-page', priority: '0.7', changefreq: 'monthly' },
];
```

### Modifying Priorities
Adjust priority values based on your SEO strategy:
- **1.0**: Homepage
- **0.8-0.9**: High-value pages (Early Adopter Program)
- **0.6-0.7**: Regular content pages
- **0.3-0.5**: Legal/utility pages

### Change Frequencies
- **weekly**: Frequently updated content
- **monthly**: Regular content updates
- **yearly**: Static content

## 🔄 Blog Post Integration

### Automatic Detection
The sitemap automatically includes all blog posts from:
```
content/blog/*.mdx
```

### Blog Post Metadata
Each blog post should include:
```yaml
---
title: "Post Title"
date: "2024-12-19"
featured: true  # Higher priority for featured posts
---
```

### Adding New Blog Posts
1. Create new `.mdx` file in `/content/blog/`
2. Include proper frontmatter
3. Sitemap automatically updates on next request

## 🚨 Troubleshooting

### Common Issues

#### Sitemap Not Accessible
- Check if the API route is properly deployed
- Verify the route file exists: `/src/app/sitemap.xml/route.ts`
- Check server logs for errors

#### Blog Posts Not Appearing
- Ensure blog posts are `.mdx` files (not `.md`)
- Check frontmatter format
- Verify file permissions

#### Search Engines Not Indexing
- Submit sitemap manually to search engines
- Check robots.txt configuration
- Monitor Google Search Console for errors

### Debug Commands
```bash
# Check sitemap locally
curl http://localhost:3000/sitemap.xml

# Validate XML structure
curl https://mygets.net/sitemap.xml | xmllint --format -

# Check blog posts
ls -la content/blog/
```

## 📈 Performance Optimization

### Caching Benefits
- 1-hour cache reduces server load
- CDN-friendly headers
- Efficient XML generation

### SEO Benefits
- Always up-to-date content discovery
- Proper priority assignment
- Search engine friendly structure

## 🔮 Future Enhancements

### Planned Features
- [ ] Image sitemap for blog post images
- [ ] News sitemap for blog posts
- [ ] Video sitemap for multimedia content
- [ ] Automated submission scheduling
- [ ] Analytics integration for sitemap performance

### Advanced Features
- [ ] Dynamic priority based on analytics
- [ ] A/B testing for sitemap optimization
- [ ] Multi-language sitemap support
- [ ] Custom sitemap for different user agents

## 📞 Support

### Getting Help
1. Check this documentation
2. Review server logs for errors
3. Test sitemap accessibility
4. Contact development team

### Useful Resources
- [Google Sitemap Guidelines](https://developers.google.com/search/docs/advanced/sitemaps/overview)
- [Bing Sitemap Guidelines](https://www.bing.com/webmasters/help/sitemaps-3b5b6aec)
- [Sitemap Protocol](https://www.sitemaps.org/protocol.html)

---

*This guide is maintained as part of the MyGETS website development process. For questions or updates, please contact the development team.* 