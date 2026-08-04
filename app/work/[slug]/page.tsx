import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { fiverrProjects } from "../../fiverr-portfolio";
import { featuredProjects } from "../../portfolio-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [...featuredProjects, ...fiverrProjects].map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = [...featuredProjects, ...fiverrProjects].find(
    (item) => item.slug === slug,
  );

  if (!project) {
    return (
      <main>
        <SiteHeader active="work" />
        <section className="missing-project shell">
          <p className="section-kicker">Project not found</p>
          <h1>This project is no longer available.</h1>
          <a className="button button--primary" href="/work">
            Return to all work <span aria-hidden="true">→</span>
          </a>
        </section>
        <SiteFooter />
      </main>
    );
  }

  const projectCollection =
    project.source === "fiverr" ? fiverrProjects : featuredProjects;
  const currentIndex = projectCollection.findIndex((item) => item.slug === slug);
  const nextProject =
    projectCollection[(currentIndex + 1) % projectCollection.length];

  return (
    <main>
      <SiteHeader active="work" />

      <section className="case-hero shell">
        <div className="case-hero__heading">
          <p className="section-kicker">
            Project {project.number} / {project.type}
          </p>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
        <a className="text-link" href="/work">
          All projects ←
        </a>
      </section>

      <section className="case-image shell">
        <span>{project.number}</span>
        <img src={project.src} alt={project.alt} />
      </section>

      {project.source === "fiverr" ? (
        <section className="case-details case-details--fiverr shell">
          <article className="case-overview">
            <span>01 / Project overview</span>
            <h2>About this project</h2>
            <p>{project.description}</p>
          </article>
          <article>
            <span>02 / Industry</span>
            <h2>{project.industries?.[0] || "Digital product"}</h2>
            <p>
              {project.industries?.join(", ") ||
                "A modern digital experience designed around clarity and usability."}
            </p>
          </article>
          <article>
            <span>03 / Service</span>
            <h2>{project.services?.[0] || "Website design"}</h2>
            <p>
              {project.services?.join(", ") ||
                "Responsive website design and development."}
            </p>
          </article>
        </section>
      ) : (
        <section className="case-details shell">
          <article>
            <span>01 / Challenge</span>
            <h2>What needed to work</h2>
            <p>{project.challenge}</p>
          </article>
          <article>
            <span>02 / Approach</span>
            <h2>How I shaped it</h2>
            <p>{project.approach}</p>
          </article>
          <article>
            <span>03 / Outcome</span>
            <h2>What the build delivers</h2>
            <p>{project.outcome}</p>
          </article>
        </section>
      )}

      <section className="case-capabilities shell">
        <p className="section-kicker">Capabilities</p>
        <div>
          {project.capabilities.map((capability) => (
            <span key={capability}>{capability}</span>
          ))}
        </div>
        {project.sourceUrl ? (
          <a
            className="button button--primary"
            href={project.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            View original on Fiverr <span aria-hidden="true">↗</span>
          </a>
        ) : null}
      </section>

      <section className="next-project">
        <a className="shell" href={`/work/${nextProject.slug}`}>
          <span>Next project / {nextProject.number}</span>
          <strong>{nextProject.title}</strong>
          <em aria-hidden="true">→</em>
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
