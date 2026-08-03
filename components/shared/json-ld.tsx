import React from "react";
import { siteMetadata, socialLinks } from "@/lib/constants";
import { projects } from "@/data/projects";

export const JsonLd: React.FC = () => {
  const githubUrl = socialLinks.find((l) => l.label === "GitHub")?.href || "https://github.com/vickyraut";
  const linkedinUrl = socialLinks.find((l) => l.label === "LinkedIn")?.href || "https://linkedin.com/in/vickyraut";
  const twitterUrl = socialLinks.find((l) => l.label === "Twitter")?.href || "https://x.com/vickyraut";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": siteMetadata.name,
    "url": siteMetadata.url,
    "jobTitle": "AI Engineer & Android Developer",
    "description": siteMetadata.description,
    "sameAs": [githubUrl, linkedinUrl, twitterUrl],
    "knowsAbout": [
      "Artificial Intelligence",
      "Agentic AI",
      "Large Language Models",
      "Retrieval-Augmented Generation (RAG)",
      "Android Development",
      "Kotlin",
      "Jetpack Compose",
      "Python",
      "TypeScript",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteMetadata.title,
    "url": siteMetadata.url,
    "description": siteMetadata.description,
    "author": {
      "@type": "Person",
      "name": siteMetadata.name,
    },
  };

  const projectListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Featured Engineering Projects",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": project.title,
        "description": project.solution,
        "applicationCategory": project.techStack.includes("Kotlin") ? "MobileApplication" : "DeveloperApplication",
        "operatingSystem": project.techStack.includes("Kotlin") ? "Android" : "Cross-platform",
        "url": project.liveUrl || project.githubUrl || siteMetadata.url,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectListSchema) }}
      />
    </>
  );
};
