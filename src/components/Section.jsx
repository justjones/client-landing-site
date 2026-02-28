import Container from "./Container.jsx";

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}) {
  return (
    <section id={id} className={`section reveal ${className}`}>
      <Container>
        {(eyebrow || title || subtitle) && (
          <header className="section-header">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="h2">{title}</h2>}
            {subtitle && <p className="subhead">{subtitle}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}