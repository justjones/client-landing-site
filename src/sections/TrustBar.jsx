import Container from "../components/Container.jsx";

const ITEMS = [
  { title: "Clear scope", text: "Defined sections and deliverables to prevent surprises." },
  { title: "QA-minded", text: "UI checks, responsive review, and careful finishing." },
  { title: "Fast load", text: "Image optimization and sensible performance defaults." },
  { title: "Accessible", text: "Keyboard navigation, labels, and readable contrast." },
];

export default function TrustBar() {
  return (
    <section className="trustbar" aria-label="Key assurances">
      <Container>
        <div className="trustbar-grid">
          {ITEMS.map((item) => (
            <div key={item.title} className="trustbar-item">
              <p className="trustbar-title">{item.title}</p>
              <p className="muted small">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
