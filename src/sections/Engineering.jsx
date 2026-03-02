import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";

const ITEMS = [
  {
    title: "Git workflow",
    bullets: [
      "Small, focused commits with clear messages",
      "Clean history with version tags for releases (e.g., v1.0.0)",
      "Pull-request style review mindset (even on solo projects)",
    ],
  },
  {
    title: "Branching strategy",
    bullets: [
      "main branch stays deployable",
      "Feature branches for scoped changes (feature/* or fix/*)",
      "Merge only when tests and checks pass",
    ],
  },
  {
    title: "CI pipelines",
    bullets: [
      "Automated checks on push/PR (lint/build/test where applicable)",
      "Deployment triggered by main branch updates",
      "Fast feedback loop to prevent regressions",
    ],
  },
  {
    title: "Testing approach",
    bullets: [
      "QA-minded UI verification across breakpoints",
      "Form validation and expected user flows tested end-to-end",
      "Regression checklist for navigation, layout, and content",
    ],
  },
  {
    title: "Performance checks",
    bullets: [
      "Chrome Lighthouse runs for key metrics",
      "Optimized images and reduced layout shift risk",
      "Avoid unnecessary libraries for fast load times",
    ],
  },
  {
    title: "Accessibility standards",
    bullets: [
      "Semantic structure and heading hierarchy",
      "Keyboard navigation + visible focus states",
      "Form labels, contrast checks, and reduced-motion support",
    ],
  },
];

export default function Engineering() {
  return (
    <Section
      id="engineering"
      eyebrow="Engineering"
      title="How I keep builds reliable"
      subtitle="A practical approach to shipping clean, testable, and maintainable frontend work."
      className="engineering"
    >
      <div className="grid-3">
        {ITEMS.map((item) => (
          <Card key={item.title} title={item.title}>
            <ul className="list">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}