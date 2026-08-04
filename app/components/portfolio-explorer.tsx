"use client";

import { useMemo, useState } from "react";
import type { Project } from "../portfolio-data";

type PortfolioExplorerProps = {
  projects: Project[];
};

const PAGE_SIZE = 12;

export function PortfolioExplorer({ projects }: PortfolioExplorerProps) {
  const [query, setQuery] = useState("");
  const [activeIndustry, setActiveIndustry] = useState("All work");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const industries = useMemo(() => {
    const counts = new Map<string, number>();

    projects.forEach((project) => {
      project.industries?.forEach((industry) => {
        counts.set(industry, (counts.get(industry) || 0) + 1);
      });
    });

    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([industry]) => industry);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesIndustry =
        activeIndustry === "All work" ||
        project.industries?.includes(activeIndustry);
      const searchableText = [
        project.title,
        project.description,
        project.type,
        ...(project.industries || []),
        ...(project.services || []),
      ]
        .join(" ")
        .toLowerCase();

      return matchesIndustry && searchableText.includes(normalizedQuery);
    });
  }, [activeIndustry, projects, query]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  function chooseIndustry(industry: string) {
    setActiveIndustry(industry);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <section className="fiverr-collection" aria-labelledby="fiverr-work-title">
      <div className="collection-heading">
        <div>
          <p className="section-kicker">Full Fiverr collection / 106 projects</p>
          <h2 id="fiverr-work-title">
            Browse the work.
            <br />
            <em>Find your direction.</em>
          </h2>
        </div>
        <p>
          Search the complete public portfolio by project name, industry, or
          service. Every card opens a dedicated project page.
        </p>
      </div>

      <div className="collection-tools">
        <label className="portfolio-search">
          <span className="sr-only">Search portfolio projects</span>
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setVisibleCount(PAGE_SIZE);
            }}
            placeholder="Search by project, industry, or service"
          />
        </label>

        <div className="industry-filters" aria-label="Filter by industry">
          {["All work", ...industries].map((industry) => (
            <button
              className={industry === activeIndustry ? "active" : undefined}
              type="button"
              key={industry}
              onClick={() => chooseIndustry(industry)}
              aria-pressed={industry === activeIndustry}
            >
              {industry}
            </button>
          ))}
        </div>
      </div>

      <div className="collection-status" aria-live="polite">
        <strong>{filteredProjects.length}</strong>
        <span>{filteredProjects.length === 1 ? "project" : "projects"} found</span>
      </div>

      {visibleProjects.length ? (
        <div className="fiverr-project-grid">
          {visibleProjects.map((project) => (
            <a
              className="fiverr-project-card"
              href={`/work/${project.slug}`}
              key={project.slug}
              aria-label={`View ${project.title} project`}
            >
              <div className="fiverr-project-image">
                <img src={project.src} alt={project.alt} loading="lazy" />
                <span aria-hidden="true">↗</span>
              </div>
              <div className="fiverr-project-copy">
                <p>{project.type}</p>
                <h3>{project.title}</h3>
                <div className="fiverr-project-tags" aria-hidden="true">
                  {project.capabilities.slice(0, 2).map((capability) => (
                    <span key={capability}>{capability}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="empty-collection">
          <strong>No matching project yet.</strong>
          <p>Try a broader search or choose another industry.</p>
        </div>
      )}

      {visibleCount < filteredProjects.length ? (
        <button
          className="button collection-more"
          type="button"
          onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
        >
          Show 12 more <span aria-hidden="true">↓</span>
        </button>
      ) : null}
    </section>
  );
}
