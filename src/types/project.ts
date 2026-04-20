export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  techStack: string[];
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}
