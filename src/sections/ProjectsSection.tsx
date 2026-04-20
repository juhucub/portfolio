import { ProjectCard } from "../components/ProjectCard";
import { SectionHeader } from "../components/SectionHeader";
import { projects } from "../data/projects";

const featuredProjects = projects.filter((project) => project.featured);

export function ProjectsSection() {
  return (
    <section className="section-anchor section-shell" id="projects">
      <div className="site-shell space-y-12">
        <SectionHeader
          eyebrow="Featured Projects"
          title="A few projects I’ve built."
          description="These are some of the projects I’ve spent the most time on, ranging from full-stack apps to technical tools and simulation work."
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