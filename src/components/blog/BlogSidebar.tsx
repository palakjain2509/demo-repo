'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { BlogPostMeta } from '@/lib/blog';

interface BlogSidebarProps {
  categories: string[];
  tags: string[];
  recentPosts: BlogPostMeta[];
  popularPosts: BlogPostMeta[];
  selectedCategory?: string;
  selectedTag?: string;
  onCategoryChange?: (category: string) => void;
  onTagChange?: (tag: string) => void;
  onSearch?: (query: string) => void;
}

export default function BlogSidebar({
  categories,
  tags,
  recentPosts,
  popularPosts,
  selectedCategory,
  selectedTag,
  onCategoryChange,
  onTagChange,
  onSearch,
}: BlogSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <aside className="w-full lg:w-80 space-y-8">
      {/* Search */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Search</h3>
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </form>
      </div>

      {/* Categories */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <FunnelIcon className="h-5 w-5 mr-2" />
          Categories
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange?.('')}
            className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
              !selectedCategory
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange?.(category)}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 10).map((tag) => (
            <button
              key={tag}
              onClick={() => onTagChange?.(tag)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                selectedTag === tag
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <article key={post.slug} className="border-b border-gray-100 pb-4 last:border-b-0">
              <Link
                href={`/resources/blog/${post.slug}`}
                className="block hover:text-blue-600 transition-colors"
              >
                <h4 className="font-medium text-gray-900 line-clamp-2 mb-1">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-AU', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <article key={post.slug} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <Link
                  href={`/resources/blog/${post.slug}`}
                  className="block hover:text-blue-600 transition-colors"
                >
                  <h4 className="font-medium text-gray-900 line-clamp-2 text-sm">
                    {post.title}
                  </h4>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-lg text-white">
        <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
        <p className="text-blue-100 mb-4 text-sm">
          Get the latest procurement insights delivered to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 text-gray-900 rounded-md focus:ring-2 focus:ring-white focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
} 