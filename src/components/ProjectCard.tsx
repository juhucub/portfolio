import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="surface-panel group relative flex h-full flex-col overflow-hidden rounded-[2rem]"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
      transition={{
        duration: 0.55,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.25 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
    >
      <div className="relative overflow-hidden border-b border-white/8 bg-[linear-gradient(180deg,rgba(106,141,255,0.08),rgba(13,15,22,0.1))]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(110,231,200,0.08),transparent_36%)]" />
        <div className="absolute right-6 top-6 h-14 w-14 rounded-[1rem] border border-white/10 bg-white/3 backdrop-blur-sm" />
        <div className="absolute bottom-6 left-6 h-10 w-10 rounded-[0.7rem] border border-[rgba(110,231,200,0.18)] bg-[rgba(110,231,200,0.08)]" />
        <img
          alt={`${project.title} preview`}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          src={project.image}
        />
      </div>

      <div className="flex flex-1 flex-col gap-6 p-6 md:p-7">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-chip">
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
              {project.summary}
            </p>
            <h3 className="text-2xl font-bold tracking-tight text-white">{project.title}</h3>
          </div>
          <p className="max-w-xl text-base leading-7 text-[var(--color-text-muted)]">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/8 bg-white/4 px-3 py-2 text-sm font-semibold text-[var(--color-text-muted)]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          <a
            className="project-card-link inline-flex items-center rounded-full border border-white/10 px-4 py-3 text-sm font-bold text-white"
            href={project.githubUrl}
            rel="noreferrer"
            target="_blank"
          >
            View Repo
          </a>
          <a
            className="project-card-link inline-flex items-center rounded-full border border-white/10 px-4 py-3 text-sm font-bold text-white"
            href={project.liveUrl}
            rel="noreferrer"
            target="_blank"
          >
            Live Preview
          </a>
        </div>
      </div>
    </motion.article>
  );
}
