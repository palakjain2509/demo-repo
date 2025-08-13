'use client';

import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';
import { CalendarIcon, ClockIcon, TagIcon, UserIcon } from '@heroicons/react/24/outline';
import { BlogPost, BlogPostMeta } from '@/lib/blog';
import BlogLayout from '@/components/blog/BlogLayout';
import BlogCard from '@/components/blog/BlogCard';
import { useState, useEffect } from 'react';

interface BlogPostContentProps {
  post: BlogPost;
  relatedPosts: BlogPostMeta[];
}

const components = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8 first:mt-0" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4" {...props} />
  ),
  p: (props: any) => (
    <p className="text-gray-700 mb-4 leading-relaxed" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700" {...props} />
  ),
  li: (props: any) => (
    <li className="text-gray-700" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-4 bg-blue-50 italic text-gray-700" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
  ),
  a: (props: any) => (
    <a className="text-blue-600 hover:text-blue-800 underline" {...props} />
  ),
  strong: (props: any) => (
    <strong className="font-semibold text-gray-900" {...props} />
  ),
  em: (props: any) => (
    <em className="italic" {...props} />
  ),
  hr: (props: any) => (
    <hr className="border-gray-300 my-8" {...props} />
  ),
};

export default function BlogPostContent({ post, relatedPosts }: BlogPostContentProps) {
  const [isClient, setIsClient] = useState(false);
  const [mdxError, setMdxError] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (!isClient) {
    return (
      <BlogLayout showBackButton={true} backButtonText="Back to Blog" backButtonHref="/resources/blog">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-6"></div>
          </div>
        </div>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout showBackButton={true} backButtonText="Back to Blog" backButtonHref="/resources/blog">
      <article className="max-w-4xl mx-auto">
        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-b border-gray-200 pb-6">
            <div className="flex items-center gap-2">
              <UserIcon className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {mdxError ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <p className="text-red-800">Error loading content: {mdxError}</p>
              <p className="text-red-600 text-sm mt-2">
                Please try refreshing the page or contact support if the issue persists.
              </p>
            </div>
          ) : (
            <MDXRemote {...post.content} components={components} />
          )}
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <TagIcon className="h-5 w-5 mr-2" />
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">About the Author</h3>
          <p className="text-gray-700">
            {post.author} is part of the MyGETS team, dedicated to helping organizations 
            transform their procurement processes through innovative technology and 
            data-driven insights.
          </p>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Procurement?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Discover how MyGETS can help your organization implement OCDS and realize 
            the benefits of structured, standardized procurement data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/early-adopter-program"
              className="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Join Our Early Adopter Program
            </Link>
            <Link
              href="/request-demo"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Schedule a Demo
            </Link>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gray-50 p-8 rounded-lg mt-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Stay Updated with MyGETS
            </h3>
            <p className="text-gray-600 mb-4">
              Get the latest procurement insights and MyGETS updates delivered to your inbox.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </section>
      </article>
    </BlogLayout>
  );
} 