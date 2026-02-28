import { useEffect, useMemo, useRef, useState } from "react";
import Container from "./Container.jsx";
import Button from "./Button.jsx";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#proof" },
  { label: "Packages", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function smoothScrollToHash(hash) {
  const id = hash?.replace("#", "");
  if (!id) return;

  const el = document.getElementById(id);
  if (!el) return;

  // Use scroll-margin-top in CSS for header offset.
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuBtnRef = useRef(null);

  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    function onHashChange() {
      setOpen(false);
      smoothScrollToHash(window.location.hash);
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    // Smooth-scroll on initial load with hash
    if (window.location.hash) smoothScrollToHash(window.location.hash);
  }, []);

  function handleNavClick(e, href) {
    // Close mobile menu and smooth-scroll without jumping
    e.preventDefault();
    setOpen(false);

    history.replaceState(null, "", href);
    smoothScrollToHash(href);

    // Return focus to menu button for accessibility
    if (menuBtnRef.current) menuBtnRef.current.focus();
  }

  return (
    <header className="site-header">
      <Container className="nav">
        <a className="brand" href="#top" onClick={(e) => handleNavClick(e, "#top")}>
          <img
  src="/favicon.svg"
  alt=""
  className="brand-mark"
  aria-hidden="true"
/>
          <span className="brand-text">Lori Jones — Frontend Development</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <Button
            href="#contact"
            variant="primary"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Request a quote
          </Button>
        </div>

        <button
          ref={menuBtnRef}
          className="nav-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="nav-toggle-lines" />
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "is-open" : ""}`}
        role="dialog"
        aria-label="Mobile menu"
      >
        <Container className="mobile-menu-inner">
          <div className="mobile-menu-top">
            <p className="muted small">Navigation</p>
            <p className="muted small">© {year}</p>
          </div>

          <div className="mobile-menu-links">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-link"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mobile-menu-cta">
            <Button
              href="#contact"
              variant="primary"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Request a quote
            </Button>
            <Button
              as="button"
              variant="ghost"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              Close
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
