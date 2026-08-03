import type { BlogPostFrontmatter } from "@/lib/types"

// TODO: Implement MDX loader — parse frontmatter from content/blog/*.mdx at build time
export function getAllBlogPosts(): BlogPostFrontmatter[] {
  return []
}

export function getBlogPostBySlug(_slug: string): BlogPostFrontmatter | null {
  return null
}
