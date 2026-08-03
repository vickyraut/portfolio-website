"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechTag } from "@/components/shared/tech-tag";
import { BlogPostData } from "@/content/blogs";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BlogCardProps {
  post: BlogPostData;
  className?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, className }) => {
  const articleUrl = post.url && post.url.trim() !== "" ? post.url : (post.slug ? `/blog/${post.slug}` : undefined);
  const hasUrl = Boolean(articleUrl && articleUrl.trim() !== "");

  const cardContent = (
    <Card
      interactive={hasUrl}
      className={cn(
        "w-full h-full p-5 flex flex-col justify-between group transition-all duration-220 ease-out",
        hasUrl ? "cursor-pointer" : "cursor-default opacity-85",
        className
      )}
    >
      <div>
        {/* Cover Image Container with Grayscale to Color Transition */}
        <div className="relative w-full aspect-video rounded-md border border-border bg-background-secondary overflow-hidden mb-5">
          {/* Abstract Cover Background */}
          <div className="w-full h-full bg-gradient-to-br from-neutral-800 via-neutral-950 to-neutral-900 flex flex-col items-center justify-center p-6 text-center grayscale group-hover:grayscale-0 transition-[filter,transform] duration-400 ease-out group-hover:scale-[1.03]">
            <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground mb-2">
              <BookOpen className="size-5 stroke-[1.5]" />
            </div>
            <span className="font-mono text-overline text-neutral-300 uppercase tracking-[0.12em] line-clamp-1">
              ARTICLE // {post.slug}
            </span>
          </div>

          {/* Category Badge overlay */}
          <div className="absolute top-3 left-3">
            <Badge variant="rect" className="bg-background/90 text-foreground border-border shadow-xs backdrop-blur-xs font-mono text-[10px]">
              {post.category}
            </Badge>
          </div>
        </div>

        {/* Meta Row: Reading time & Date */}
        <div className="flex items-center gap-2 mb-2 text-meta font-mono text-muted-foreground">
          <span>{post.publishedAt}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>

        {/* Article Title */}
        <h3 className="text-h4 font-bold text-foreground tracking-tight line-clamp-2 mb-2 group-hover:underline">
          {post.title}
        </h3>

        {/* Article Excerpt */}
        <p className="text-body text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Article Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
      </div>

      {/* Read Article Action Row */}
      <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
        <span className="text-body-sm font-medium text-foreground group-hover:underline">
          {hasUrl ? "Read Article" : "Coming Soon"}
        </span>
        {hasUrl && (
          <ArrowUpRight className="size-4 text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </div>
    </Card>
  );

  if (hasUrl) {
    return (
      <a
        href={articleUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read article: ${post.title}`}
        className="block h-full rounded-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
};
