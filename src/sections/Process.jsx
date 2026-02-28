import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";

const STEPS = [
  {
    title: "1) Discovery (Day 1)",
    text: "Confirm sections, gather content, and align on tone and goals.",
  },
  {
    title: "2) Build (Days 2–4)",
    text: "Structure, styling, responsive layout, and smooth interactions.",
  },
  {
    title: "3) Review (Day 5–6)",
    text: "QA pass, fixes, and one focused revision round.",
  },
  {
    title: "4) Launch (Day 7)",
    text: "Deploy, final checks, and handoff documentation.",
  },
];

export default function Process() {
  return (
    <Section
      id="process"
      eyebrow="Process"
      title="A predictable 1-week timeline"
      subtitle="Straightforward workflow designed to ship quickly without cutting corners."
    >
      <div className="grid-2">
        {STEPS.map((s) => (
          <Card key={s.title} title={s.title}>
            <p className="muted">{s.text}</p>
          </Card>
        ))}
      </div>

      <div className="callout">
        <p className="callout-title">What I need from you</p>
        <p className="muted">
          Logo (optional), brand colors (optional), preferred wording, and any photos.
          If you do not have content ready, I can provide a simple placeholder structure.
        </p>
      </div>
    </Section>
  );
}
