import type { BlogPostFrontmatter } from "@/lib/types";

export interface BlogPostData extends BlogPostFrontmatter {
  excerpt: string;
  url?: string;
}

export const blogs: BlogPostData[] = [];
