import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { PortfolioExplorer } from "../components/portfolio-explorer";
import { fiverrProjects } from "../fiverr-portfolio";
import { featuredProjects } from "../portfolio-data";

export default function WorkPage() {
  return (
    <main>
      <SiteHeader active="work" />

      <section className="inner-hero shell">
        <p className="section-kicker">Fiverr portfolio / 106 projects</p>
        <h1>
          Real work.
          <br />
          <em>One searchable collection.</em>
        </h1>
        <p>
          Explore the complete public Fiverr portfolio, including websites, web
          apps, e-commerce stores, marketplaces, SaaS products, and more.
        </p>
      </section>

      <section className="inner-work shell" aria-label="Portfolio projects">
        <div className="selected-work-heading">
          <p className="section-kicker">Editor&apos;s selection / 01 to 06</p>
          <h2>
            Start with six.
            <br />
            <em>Then explore everything.</em>
          </h2>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <a
              className={project.className}
              href={`/work/${project.slug}`}
              key={project.number}
              aria-label={`View ${project.title} project`}
            >
              <div className="project-image-wrap">
                <span className="project-index">{project.number}</span>
                <img src={project.src} alt={project.alt} />
                <span className="project-open" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="project-meta">
                <div>
                  <p>{project.type}</p>
                  <h2>{project.title}</h2>
                </div>
                <p className="project-description">{project.description}</p>
              </div>
            </a>
          ))}
        </div>

        <PortfolioExplorer projects={fiverrProjects} />
      </section>

      <section className="page-cta shell">
        <p className="section-kicker">Your project can be next</p>
        <h2>
          Have something to build,
          <br />
          fix, or launch?
        </h2>
        <a className="button button--primary" href="/hire">
          Hire me on Fiverr <span aria-hidden="true">→</span>
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
