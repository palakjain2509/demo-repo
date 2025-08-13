'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BlogPostMeta } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import BlogLayout from '@/components/blog/BlogLayout';
import BlogSidebar from '@/components/blog/BlogSidebar';

interface BlogContentProps {
  allPosts: BlogPostMeta[];
  featuredPosts: BlogPostMeta[];
  categories: string[];
  tags: string[];
  recentPosts: BlogPostMeta[];
  popularPosts: BlogPostMeta[];
}

export default function BlogContent({
  allPosts,
  featuredPosts,
  categories,
  tags,
  recentPosts,
  popularPosts,
}: BlogContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter posts based on selections
  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesTag && matchesSearch;
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
    setSelectedTag(''); // Clear tag selection when category changes
  };

  const handleTagChange = (tag: string) => {
    setSelectedTag(tag === selectedTag ? '' : tag);
    setSelectedCategory(''); // Clear category selection when tag changes
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory('');
    setSelectedTag('');
  };

  return (
    <BlogLayout>
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 mb-12">
        <div className="max-w-full mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
              The MyGETS Procurement Blog
            </h1>
            <p className="text-xl mb-8 font-sans">
              Your source for expert analysis, practical advice, and the latest developments in procurement, OCDS, and data-driven strategies for Australian organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 text-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
                />
              </div>
              <button
                onClick={() => handleSearch(searchQuery)}
                className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map((post) => (
              <BlogCard key={post.slug} post={post} featured={true} />
            ))}
          </div>
        </section>
      )}

      {/* Main Content and Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* Filters */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
              
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Category:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tag Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Tag:</span>
                <select
                  value={selectedTag}
                  onChange={(e) => handleTagChange(e.target.value)}
                  className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Tags</option>
                  {tags.slice(0, 10).map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              {(selectedCategory || selectedTag || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory('');
                    setSelectedTag('');
                    setSearchQuery('');
                  }}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredPosts.length} of {allPosts.length} articles
            </p>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or browse all articles.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('');
                  setSelectedTag('');
                  setSearchQuery('');
                }}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View all articles
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:w-80">
          <BlogSidebar
            categories={categories}
            tags={tags}
            recentPosts={recentPosts}
            popularPosts={popularPosts}
            selectedCategory={selectedCategory}
            selectedTag={selectedTag}
            onCategoryChange={handleCategoryChange}
            onTagChange={handleTagChange}
            onSearch={handleSearch}
          />
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50 mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-sans">
              Don't Miss an Update
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-sans">
              Subscribe to our newsletter for the latest blog posts, procurement news, and MyGETS updates delivered to your inbox.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-sans"
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors font-sans"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Full-width CTA Section */}
      <section className="w-screen bg-blue-900 text-white relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-sans">Ready to Transform Your Procurement?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-sans">
            Discover how MyGETS can help your organization implement OCDS and realize the benefits of structured, standardized procurement data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/early-adopter-program" 
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors text-center font-sans"
            >
              Join Our Early Adopter Program
            </Link>
            <Link 
              href="/request-demo" 
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center font-sans"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    // </BlogLayout>
  );
} 