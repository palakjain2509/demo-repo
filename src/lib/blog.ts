import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: string;
  featured: boolean;
  content: any; // Serialized MDX content
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: string;
  featured: boolean;
}

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getAllBlogPosts(): BlogPostMeta[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      return {
        slug,
        ...(matterResult.data as Omit<BlogPostMeta, 'slug'>),
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getFeaturedBlogPosts(): BlogPostMeta[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter((post) => post.featured);
}

export function getBlogPostsByCategory(category: string): BlogPostMeta[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter((post) => post.category === category);
}

export function getBlogPostsByTag(tag: string): BlogPostMeta[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter((post) => post.tags.includes(tag));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) return null;
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Dynamically import plugins
    const remarkGfm = (await import('remark-gfm')).default;
    const rehypeHighlight = (await import('rehype-highlight')).default;
    const rehypeSlug = (await import('rehype-slug')).default;

    const mdxSource = await serialize(matterResult.content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight, rehypeSlug],
      },
    });

    return {
      slug,
      content: mdxSource,
      ...(matterResult.data as Omit<BlogPostMeta, 'slug'>),
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export function getAllCategories(): string[] {
  const allPosts = getAllBlogPosts();
  const categories = allPosts.map((post) => post.category);
  return [...new Set(categories)].sort();
}

export function getAllTags(): string[] {
  const allPosts = getAllBlogPosts();
  const tags = allPosts.flatMap((post) => post.tags);
  return [...new Set(tags)].sort();
}

export async function getRelatedPosts(currentSlug: string, limit: number = 3): Promise<BlogPostMeta[]> {
  const currentPost = await getBlogPostBySlug(currentSlug);
  if (!currentPost) return [];

  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts
    .filter((post) => post.slug !== currentSlug)
    .filter((post) => 
      post.category === currentPost.category || 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, limit);

  return relatedPosts;
}

export function searchBlogPosts(query: string): BlogPostMeta[] {
  const allPosts = getAllBlogPosts();
  const searchTerm = query.toLowerCase();

  return allPosts.filter((post) => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    post.category.toLowerCase().includes(searchTerm)
  );
}

export function getBlogPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

export function getRecentPosts(limit: number = 5): BlogPostMeta[] {
  const allPosts = getAllBlogPosts();
  return allPosts.slice(0, limit);
}

export function getPopularPosts(limit: number = 5): BlogPostMeta[] {
  // For now, return featured posts as "popular"
  // In a real implementation, this would be based on analytics data
  const featuredPosts = getFeaturedBlogPosts();
  return featuredPosts.slice(0, limit);
} 