import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { services } from "../portfolio-data";

const outcomes = [
  "A responsive product that works across real devices",
  "Clearer user flows and stronger calls to action",
  "Reliable Supabase, authentication, API, and payment connections",
  "A tested launch with fewer loose ends",
];

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader active="services" />

      <section className="inner-hero inner-hero--blue">
        <div className="shell">
          <p className="section-kicker section-kicker--light">
            Services / Build · Fix · Launch
          </p>
          <h1>
            One developer.
            <br />
            <em>From idea to launch.</em>
          </h1>
          <p>
            Bring a rough concept, a half-built Lovable app, or a stubborn
            production issue. I help turn it into something clear, reliable,
            and ready for users.
          </p>
        </div>
      </section>

      <section className="service-page shell" aria-label="Andre.Dev services">
        <div className="service-page__list">
          {services.map((service) => (
            <article className="service-page__item" key={service.number}>
              <span>{service.number}</span>
              <div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <div className="service-page__tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="outcome-card">
          <p className="section-kicker">What you receive</p>
          <h2>A build that is useful after delivery.</h2>
          <ul>
            {outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
          <a className="button button--primary" href="/hire">
            Start on Fiverr <span aria-hidden="true">→</span>
          </a>
        </aside>
      </section>

      <section className="page-cta shell">
        <p className="section-kicker">Unsure which service fits?</p>
        <h2>
          Show me the project.
          <br />
          I will identify the next move.
        </h2>
        <a className="text-link" href="/hire">
          Share the project on Fiverr →
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
