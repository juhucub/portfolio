import type { SkillGroup } from "../types/skill";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces that feel deliberate, fast, and polished across devices.",
    items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Accessibility"],
  },
  {
    title: "Backend",
    description: "Practical APIs and services designed for clarity, performance, and maintainability.",
    items: ["Node.js", "Express", "Python", "FastAPI", "REST APIs", "PostgreSQL"],
  },
  {
    title: "Systems / Tools",
    description: "Technical tooling for workflows, simulation, automation, and developer productivity.",
    items: ["Git", "CLI Tooling", "Testing", "Data Pipelines", "Automation", "Observability"],
  },
  {
    title: "Cloud / DevOps",
    description: "Deployments and infrastructure shaped for reliability, simplicity, and iteration speed.",
    items: ["AWS", "S3", "CloudFront", "CI/CD", "Docker", "Infrastructure Workflows"],
  },
];
