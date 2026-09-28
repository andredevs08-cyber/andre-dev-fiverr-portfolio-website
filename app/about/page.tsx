import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

const principles = [
  {
    number: "01",
    title: "Clarity before code",
    copy: "I define what the product needs to achieve, where users are getting stuck, and what success should look like before adding complexity.",
  },
  {
    number: "02",
    title: "Function after the screenshot",
    copy: "The interface matters, but so do authentication, data, payments, responsive behavior, error states, and the final handoff.",
  },
  {
    number: "03",
    title: "Plain-language collaboration",
    copy: "You receive useful updates, practical recommendations, and a clear picture of what is finished, blocked, or next.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader active="about" />

      <section className="about-page-hero shell">
        <div className="about-visual">
          <div className="about-poster">
            <span>ANDRE.DEVS</span>
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

        <div className="about-page-copy">
          <p className="section-kicker">About Andre.Devs</p>
          <h1>
            I build the part users see and fix the parts they <em>feel.</em>
          </h1>
          <p>
            I work with founders and business owners who need more than a
            polished mockup. My focus is the complete experience: clear pages,
            working flows, connected systems, responsive behavior, and a
            product that is ready to move forward.
          </p>
          <div className="about-page-skills">
            <span>Lovable</span>
            <span>Supabase</span>
            <span>Stripe</span>
            <span>n8n</span>
            <span>Capacitor</span>
            <span>Launch QA</span>
          </div>
        </div>
      </section>

      <section className="principles-section">
        <div className="shell">
          <div className="principles-heading">
            <p className="section-kicker">How I work</p>
            <h2>
              Less confusion.
              <br />
              <em>More progress.</em>
            </h2>
          </div>
          <div className="principle-grid">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta shell">
        <p className="section-kicker">Let&apos;s work together</p>
        <h2>
          Tell me what is blocked.
          <br />
          I will help make it shippable.
        </h2>
        <a className="button button--primary" href="/hire">
          Hire me on Fiverr <span aria-hidden="true">→</span>
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
