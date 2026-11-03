import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Container } from "@/components/layout/container";
import { FeaturedProject } from "@/components/sections/projects/featured-project";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Vicky Raut",
    };
  }

  return {
    title: `${project.title} — Case Study | Vicky Raut`,
    description: project.solution || project.problem,
    openGraph: {
      title: `${project.title} — Engineering Case Study | Vicky Raut`,
      description: project.solution || project.problem,
      type: "article",
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <SectionWrapper
      id="project-case-study"
      bg="primary"
      className="min-h-screen pt-24 md:pt-32 pb-16"
    >
      <Container>
        {/* Back to Projects Navigation Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Full-width Case Study Spotlight Component */}
        <FeaturedProject project={project} className="mb-0" />
      </Container>
    </SectionWrapper>
  );
}
