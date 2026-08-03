import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { AIEngineering } from "@/components/sections/ai-engineering";
import { Android } from "@/components/sections/android";
import { Research } from "@/components/sections/research";
import { Blog } from "@/components/sections/blog";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <AIEngineering />
      <Android />
      <Research />
      <Blog />
      <Certifications />
      <Contact />
    </>
  );
}
