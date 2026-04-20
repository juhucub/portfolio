import type { Project } from "../types/project";

export const projects: Project[] = [
    {
    id: "barter-marketplace",
    title: "Barter Marketplace",
    summary: "A community trading platform for listing, matching, and negotiating item exchanges without cash.",
    description:
      "Built while working with LaunchPath Inc. and centers around trust, lightweight messaging, and frictionless browsing to make local swaps feel dependable, clean, and mobile friendly.",
    techStack: ["React", "Vite", "Node.js", "TypeScript", "Supabase PostgreSQL", "AWS"],
    tags: ["Marketplace", "Full Stack", "Product Design"],
    image: "/projects/barter-marketplace.svg",
    githubUrl: "https://github.com",
    liveUrl: "https://staging.barterapp.ca",
    featured: true,
  },
  {
    id: "paper-trader",
    title: "Paper Trader Control Room",
    summary: "A trading sandbox built to simulate execution, monitor strategies, and surface market context in real time.",
    description:
      "Designed as a full-stack environment for testing strategy ideas, paper trades, and portfolio behavior with a focus on observability, explainability, and fast iteration.",
    techStack: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
    tags: ["Quant Tools", "Data Visualization", "Monitoring"],
    image: "/projects/paper-trader.svg",
    githubUrl: "https://github.com/juhucub/jub-paper-trader",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "fluid-simulation",
    title: "Fluid Simulation Lab",
    summary: "An interactive browser experiment exploring motion, particles, and responsive visual systems.",
    description:
      "Created to merge technical precision with visual play, using performant rendering and parameter controls to turn a simulation into an experience.",
    techStack: ["TypeScript", "WebGL", "Shaders", "Canvas", "CMake"],
    tags: ["Creative Coding", "Performance", "Interaction"],
    image: "/projects/fluid-simulation.svg",
    githubUrl: "https://github.com/juhucub/FluidSimulation",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "media-automation",
    title: "Media Uploader Platform",
    summary: "An automation-focused pipeline for ingesting assets, organizing uploads, and orchestrating downstream processing.",
    description:
      "Built to streamline repetitive media workflows with queue-driven processing, clear operator feedback, and extensible integration points.",
    techStack: ["React", "TypeScript", "Node.js", "AWS S3", "Automation"],
    tags: ["Workflow Automation", "Infrastructure", "Developer Experience"],
    image: "/projects/media-automation.svg",
    githubUrl: "https://github.com/juhucub/omni-poster",
    liveUrl: "https://example.com",
    featured: true,
  },
];
