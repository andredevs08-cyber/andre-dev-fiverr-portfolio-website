import rawProjects from "./fiverr-portfolio-data.json";
import type { Project } from "./portfolio-data";

type FiverrProjectRecord = {
  id: string;
  slug: string;
  number: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  industries: string[];
  services: string[];
  type: string;
  sourceUrl: string;
  createdAt: string;
};

const fiverrRecords = rawProjects as FiverrProjectRecord[];

export const fiverrProjects: Project[] = fiverrRecords.map((project) => ({
  number: project.number.padStart(3, "0"),
  slug: project.slug,
  title: project.title,
  type: project.type || "Website design",
  description: project.description,
  src: project.src,
  alt: project.alt,
  className: "fiverr-project-card",
  challenge: "",
  approach: "",
  outcome: "",
  capabilities: [...project.industries, ...project.services].filter(
    (item, index, items) => items.indexOf(item) === index,
  ),
  industries: project.industries,
  services: project.services,
  source: "fiverr",
  sourceUrl: project.sourceUrl,
}));

export const allProjects = [...fiverrProjects];
