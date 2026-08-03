import type { BlogPostFrontmatter } from "@/lib/types";
import { blogs } from "@/data/blogs";

export function getAllBlogPosts(): BlogPostFrontmatter[] {
  return blogs;
}

export function getBlogPostBySlug(slug?: string): BlogPostFrontmatter | null {
  if (!slug) return null;
  return blogs.find((b) => b.slug === slug) || null;
}
