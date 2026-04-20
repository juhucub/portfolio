import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "barter-marketplace",
    title: "Barter Marketplace",
    summary:
      "A full-stack marketplace for listing items, messaging users, and making trade offers without cash.",
    description:
      "Built with LaunchPath Inc. as a community trading platform focused on real user flows like listing creation, image uploads, favorites, messaging, and trade management. I worked across the frontend, backend integrations, and deployment setup to make the app feel polished and production-ready.",
    techStack: ["React", "Vite", "Node.js", "TypeScript", "Supabase", "AWS"],
    tags: ["Full Stack", "Marketplace", "Production App"],
    image: "/projects/barter-marketplace.svg",
    githubUrl: "https://github.com",
    liveUrl: "https://staging.barterapp.ca",
    featured: true,
  },
  {
    id: "paper-trader",
    title: "Paper Trader Control Room",
    summary:
      "A paper trading platform for testing strategies, tracking portfolio state, and reviewing execution decisions.",
    description:
      "Built as a trading sandbox to experiment with strategy logic, portfolio monitoring, and automated decision pipelines without risking real capital. The project includes backend services, market-data integrations, and tooling to inspect why trades were approved, blocked, or skipped.",
    techStack: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
    tags: ["Trading Systems", "Backend", "Tooling"],
    image: "/projects/paper-trader.svg",
    githubUrl: "https://github.com/juhucub/jub-paper-trader",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "fluid-simulation",
    title: "Fluid Simulation Lab",
    summary:
      "A real-time fluid simulation project focused on particle behavior, rendering, and interactive controls.",
    description:
      "Built as a performance-heavy graphics project to explore more realistic water motion, stronger rendering pipelines, and responsive interaction. I worked on simulation behavior, data layout, rendering flow, and overall structure to push the project closer to something both technical and visually interesting.",
    techStack: ["C++", "OpenGL", "CMake", "ImGui", "Shaders"],
    tags: ["Graphics", "Simulation", "Performance"],
    image: "/projects/fluid-simulation.svg",
    githubUrl: "https://github.com/juhucub/FluidSimulation",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "media-automation",
    title: "Media Uploader Platform",
    summary:
      "A media workflow tool for uploading assets, managing metadata, and automating publishing steps.",
    description:
      "Built to reduce repetitive content workflow tasks by giving users a cleaner way to upload media, organize project data, and prepare content for downstream automation. The project combines a React frontend with backend services for handling files, metadata, and process orchestration.",
    techStack: ["React", "TypeScript", "Python", "FastAPI", "SQLite"],
    tags: ["Automation", "Full Stack", "Workflow Tools"],
    image: "/projects/media-automation.svg",
    githubUrl: "https://github.com/juhucub/omni-poster",
    liveUrl: "https://example.com",
    featured: true,
  },
];