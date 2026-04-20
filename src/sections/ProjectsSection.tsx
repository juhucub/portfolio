import { ProjectCard } from "../components/ProjectCard";
import { SectionHeader } from "../components/SectionHeader";
import { projects } from "../data/projects";

const featuredProjects = projects.filter((project) => project.featured);

export function ProjectsSection() {
  return (
    <section className="section-anchor section-shell" id="projects">
      <div className="site-shell space-y-12">
        <SectionHeader
          description="Selected work spanning product engineering, automation, simulation, and technical tooling. The structure is intentionally data-driven so adding future projects is a content update, not a redesign."
          eyebrow="Featured Projects"
          title="Projects that balance engineering depth with product polish."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} index={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
