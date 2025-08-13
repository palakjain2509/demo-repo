'use client';

import Link from 'next/link';
import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';
import { BlogPostMeta } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPostMeta;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className={`bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
      featured ? 'ring-2 ring-blue-500' : ''
    }`}>
      {featured && (
        <div className="bg-blue-500 text-white px-4 py-2 text-sm font-semibold">
          Featured Post
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h3 className={`font-semibold text-blue-700 mb-3 ${
          featured ? 'text-xl' : 'text-lg'
        }`}>
          <Link 
            href={`/resources/blog/${post.slug}`} 
            className="hover:text-blue-800 transition-colors"
          >
            {post.title}
          </Link>
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <TagIcon className="h-4 w-4" />
            <span>{post.category}</span>
          </div>
          <span className="text-sm text-gray-400">By {post.author}</span>
        </div>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        <Link 
          href={`/resources/blog/${post.slug}`}
          className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium text-sm"
        >
          Read More
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
} 