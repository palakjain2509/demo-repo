import type { Metadata } from 'next';
import { Suspense } from 'react';
import { generatePageSEO } from '@/lib/seo/utils';
import { getAllBlogPosts, getFeaturedBlogPosts, getAllCategories, getAllTags, getRecentPosts, getPopularPosts } from '@/lib/blog';
import BlogContent from './BlogContent';

const seoData = generatePageSEO({ 
  pageKey: 'blog',
  path: '/resources/blog'
});
export const metadata: Metadata = seoData.metadata;

export default async function BlogPage() {
  // Get blog data server-side
  const allPosts = getAllBlogPosts();
  const featuredPosts = getFeaturedBlogPosts();
  const categories = getAllCategories();
  const tags = getAllTags();
  const recentPosts = getRecentPosts(5);
  const popularPosts = getPopularPosts(5);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.jsonLd) }}
      />
      <Suspense fallback={
        <div className="min-h-screen">
          <div className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="h-12 bg-white/20 rounded-lg animate-pulse mb-6 mx-auto max-w-2xl"></div>
                <div className="h-6 bg-white/20 rounded-lg animate-pulse mb-4 mx-auto max-w-xl"></div>
                <div className="h-6 bg-white/20 rounded-lg animate-pulse mb-4 mx-auto max-w-lg"></div>
              </div>
            </div>
          </div>
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-8 bg-gray-200 rounded-lg animate-pulse w-48 mx-auto mb-12"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                      <div className="h-6 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded-lg animate-pulse mb-4 w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded-lg animate-pulse mb-4 w-1/2"></div>
                      <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-24"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }>
        <BlogContent 
          allPosts={allPosts}
          featuredPosts={featuredPosts}
          categories={categories}
          tags={tags}
          recentPosts={recentPosts}
          popularPosts={popularPosts}
        />
      </Suspense>
    </>
  );
}

