'use client';

import { blogPostJsonLd, breadcrumbJsonLd } from './jsonld';

interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  content: string;
}

interface JsonLdScriptProps {
  post: Post;
}

export default function JsonLdScript({ post }: JsonLdScriptProps) {
  const postJsonLd = {
    ...blogPostJsonLd,
    headline: post.title,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author
    },
    articleSection: post.category,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.mygets.net/resources/blog/${post.slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
} 