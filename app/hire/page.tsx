import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

const briefItems = [
  "What you want to build or fix",
  "Your current website, app, or Lovable link",
  "The main problem users are experiencing",
  "Your ideal deadline",
];

export default function HirePage() {
  return (
    <main>
      <SiteHeader />

      <section className="hire-page shell">
        <div className="hire-copy">
          <p className="section-kicker">Hire Andre.Devs on Fiverr</p>
          <h1>
            Let&apos;s turn the project into a <em>clear next step.</em>
          </h1>
          <p>
            Send a short brief through Fiverr and I will review the goal,
            identify the useful scope, and recommend the best way to move
            forward.
          </p>

          <a
            className="button button--fiverr"
            href="https://www.fiverr.com/s/bkdwAXY"
            target="_blank"
            rel="noreferrer"
          >
            Open my Fiverr service <span aria-hidden="true">↗</span>
          </a>
          <p className="hire-note">
            This opens my Fiverr service in a new tab, where you can review the
            offer and send your project brief.
          </p>
        </div>

        <aside className="brief-card">
          <span className="brief-card__label">A useful first message</span>
          <h2>Include these four details.</h2>
          <ol>
            {briefItems.map((item, index) => (
              <li key={item}>
                <span>0{index + 1}</span>
                {item}
              </li>
            ))}
          </ol>
          <div className="brief-card__tip">
            <strong>Not sure what the issue is?</strong>
            <p>
              Send the link and describe what you expected to happen. I can
              help diagnose the rest.
            </p>
          </div>
        </aside>
      </section>

      <SiteFooter />
    </main>
  );
}
