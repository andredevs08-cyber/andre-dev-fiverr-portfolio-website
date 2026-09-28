import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { featuredProjects, heroProjects, services } from "./portfolio-data";

const moreWorkLinks = [
  { label: "Fashion commerce", href: "/work/fashion-commerce" },
  { label: "AI product launches", href: "/work/ai-product-launch" },
  { label: "B2B technology", href: "/work/water-tech-website" },
  { label: "Digital marketplaces", href: "/work/property-marketplace" },
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader active="home" />

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span>Fiverr portfolio</span>
            <span className="eyebrow-line" aria-hidden="true" />
            <span>2026</span>
          </p>

          <h1 id="hero-title">
            <span className="hero-title-accent">I build and fix</span>
            <span>high-converting</span>
            <span>websites &amp;</span>
            <span className="hero-title-accent">web apps.</span>
          </h1>

          <p className="hero-description">
            Lovable, Supabase, automation and launch support for founders who
            need a product that looks sharp, works properly, and is ready for
            real users.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href="/work">
              View projects <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="/hire">
              Hire me on Fiverr
            </a>
          </div>

          <div className="hero-proof" aria-label="Portfolio highlights">
            <span>100+ Fiverr projects</span>
            <span>5.0 seller rating</span>
            <span>27 reviews</span>
          </div>

          <div className="skill-chips" aria-label="Core services">
            <span className="skill-chip skill-chip--blue">Lovable</span>
            <span className="skill-chip">Supabase</span>
            <span className="skill-chip skill-chip--lime">AI Automation</span>
          </div>
        </div>

        <div className="hero-gallery" aria-label="Selected portfolio projects">
          <div className="availability">
            <span aria-hidden="true" />
            Available for new projects
          </div>
          {heroProjects.map((project) => (
            <figure className={project.className} key={project.number}>
              <span className="project-number">{project.number}</span>
              <img src={project.src} alt={project.alt} />
            </figure>
          ))}
          <div className="growth-stamp" aria-hidden="true">
            <span>BUILT FOR</span>
            <strong>↗</strong>
            <span>GROWTH</span>
          </div>
        </div>
      </section>

      <div className="capability-strip" aria-label="Project capabilities">
        <div className="capability-strip__track">
          <span>LOVABLE BUILDS</span>
          <i>✦</i>
          <span>SUPABASE</span>
          <i>✦</i>
          <span>BUG FIXES</span>
          <i>✦</i>
          <span>AI AUTOMATION</span>
          <i>✦</i>
          <span>APP LAUNCH</span>
        </div>
      </div>

      <section className="work-section shell" id="work" aria-labelledby="work-title">
        <div className="section-intro">
          <p className="section-kicker">Selected work / 01 to 06</p>
          <h2 id="work-title">
            Different industries.
            <br />
            <em>One standard of craft.</em>
          </h2>
          <p>
            From service businesses and online stores to AI, fintech, and
            marketplaces. Each project is built to feel clear, credible, and
            ready to convert.
          </p>
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
                <img src={project.src} alt={project.alt} loading="lazy" />
                <span className="project-open" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="project-meta">
                <div>
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                </div>
                  <p className="project-description">{project.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="more-work" aria-label="More portfolio categories">
          <p>Also in the portfolio</p>
          <div>
            {moreWorkLinks.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        className="services-section"
        id="services"
        aria-labelledby="services-title"
      >
        <div className="shell">
          <div className="services-heading">
            <p className="section-kicker section-kicker--light">
              What I can do for you
            </p>
            <h2 id="services-title">
              One developer.
              <br />
              <em>From idea to launch.</em>
            </h2>
            <p>
              You do not need five different freelancers to get one product
              working. I can help shape, build, fix, connect, and prepare it for
              launch.
            </p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section shell" id="about" aria-labelledby="about-title">
        <div className="about-visual">
          <div className="about-poster">
            <span>ANDRE.DEV</span>
            <strong>BUILD</strong>
            <em>FIX</em>
            <strong>LAUNCH</strong>
            <span>WITH CLARITY ↗</span>
          </div>
          <div className="about-card">
            <span>Working style</span>
            <strong>Fast, clear &amp; collaborative.</strong>
          </div>
        </div>

        <div className="about-copy">
          <p className="section-kicker">A practical build partner</p>
          <h2 id="about-title">
            I care about the part after the site <em>looks good.</em>
          </h2>
          <p className="about-lead">
            A strong product should not only impress in a screenshot. The flows
            need to work, the database needs to behave, the mobile experience
            needs to hold up, and the next person should understand what was
            built.
          </p>

          <dl className="about-details">
            <div>
              <dt>Frontend</dt>
              <dd>Responsive UI, interactions, conversion-focused pages</dd>
            </div>
            <div>
              <dt>Backend</dt>
              <dd>Supabase, authentication, databases, APIs, edge functions</dd>
            </div>
            <div>
              <dt>Workflow</dt>
              <dd>Clear updates, practical decisions, clean handoff</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="process-section" aria-labelledby="process-title">
        <div className="shell">
          <div className="process-heading">
            <p className="section-kicker">Simple process</p>
            <h2 id="process-title">
              Less confusion.
              <br />
              <em>More progress.</em>
            </h2>
          </div>

          <ol className="process-steps">
            <li>
              <span>01</span>
              <h3>Share the goal</h3>
              <p>
                Tell me what you are building, what is currently blocked, and
                what success should look like.
              </p>
            </li>
            <li>
              <span>02</span>
              <h3>Get a clear plan</h3>
              <p>
                I review the project, define the useful scope, and explain the
                build or fix in plain language.
              </p>
            </li>
            <li>
              <span>03</span>
              <h3>Build, test, deliver</h3>
              <p>
                I complete the work, check the important flows, and hand over a
                product you can confidently use.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="contact-section shell" id="contact" aria-labelledby="contact-title">
        <div className="contact-copy">
          <p className="section-kicker">Ready when you are</p>
          <h2 id="contact-title">
            Have an idea, a half-built app, or a bug that will not leave?
          </h2>
          <p>
            Send me a message through the Fiverr profile where you found this
            portfolio. Include your goal, current link, and deadline. I will
            help you identify the clearest next step.
          </p>
        </div>

        <div className="contact-action">
          <span>LET&apos;S BUILD IT</span>
          <a href="/hire" aria-label="Hire Andre.Devs on Fiverr">
            ↗
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
