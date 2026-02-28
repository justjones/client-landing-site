
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <Container className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">React + Vite • Single-page marketing site</p>
          <h1 className="h1">
            Frontend landing pages built to convert
          </h1>
          <p className="lead">
            I design and build fast, responsive landing pages with clear scope and
            a predictable 1-week turnaround. No backend. Clean code. QA-minded delivery.
            Built by a QA Engineer with 9+ years of experience in UI quality and testing.
          </p>

          <div className="hero-cta">
            <Button href="#contact" variant="primary">
              Request a quote
            </Button>
            <Button href="#proof" variant="secondary">
              View work
            </Button>
          </div>

          <ul className="hero-bullets" aria-label="Key benefits">
            <li>Mobile-first layout</li>
            <li>Performance and SEO basics</li>
            <li>Accessible, keyboard-friendly UI</li>
            <li>Tested across modern browsers</li>
            <li>Lighthouse-tested: 90+ Performance, 100 Accessibility, 100 Best Practices.</li>
          </ul>
        </div>

        <div className="hero-panel" aria-hidden="true">
          <div className="stat-grid">
            <div className="stat">
              <div className="stat-num">1</div>
              <div className="stat-label">Week build</div>
            </div>
            <div className="stat">
              <div className="stat-num">1</div>
              <div className="stat-label">Page</div>
            </div>
            <div className="stat">
              <div className="stat-num">0</div>
              <div className="stat-label">Backend</div>
            </div>
            <div className="stat">
              <div className="stat-num">A+</div>
              <div className="stat-label">Care & polish</div>
            </div>
          </div>

          <div className="panel-note">
            <p className="muted">
              Designed for Freelancer clients: concise messaging, clear CTAs, fast load.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}