export const blogPostJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Blog Post Title",
  "datePublished": "2025-04-15",
  "author": {
    "@type": "Person",
    "name": "MyGETS Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "MyGETS",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.mygets.net/logo.png"
    }
  },
  "articleSection": "Category",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.mygets.net/resources/blog/post-slug"
  }
};

export const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.mygets.net"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Resources",
      "item": "https://www.mygets.net/resources"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Blog",
      "item": "https://www.mygets.net/resources/blog"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Blog Post Title"
    }
  ]
}; 