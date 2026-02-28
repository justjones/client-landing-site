import Container from "../components/Container.jsx";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container className="footer-inner">
        <div className="footer-left">
          <p className="footer-brand">Lori Jones Frontend Development</p>
          <p className="muted small">© {year} All rights reserved.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <a className="link" href="#services">Services</a>
          <a className="link" href="#process">Process</a>
          <a className="link" href="#pricing">Packages</a>
          <a className="link" href="#contact">Contact</a>
        </nav>

        <div className="footer-right">
          <p className="muted small">Built with React + Vite</p>
        </div>
      </Container>
    </footer>
  );
}
