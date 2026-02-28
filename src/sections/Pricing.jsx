import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

const TIERS = [
  {
    name: "Starter",
    price: "Starts at $425",
    desc: "Best for simple service pages with one primary CTA.",
    items: [
      "Single-page layout (5–6 sections)",
      "Mobile-first responsive styling",
      "Basic SEO and social tags",
      "Contact CTA (email or simple form)",
      "1 revision round",
    ],
  },
  {
    name: "Standard",
    price: "Starts at $525",
    desc: "Best for most Freelancer client conversions.",
    highlight: true,
    items: [
      "Everything in Starter",
      "Pricing/FAQ sections",
      "Formspree lead form integration",
      "Light motion (subtle, optional)",
      "Performance pass (images, layout stability)",
    ],
  },
  {
    name: "Plus",
    price: "Starts at $700",
    desc: "Best when you need more content and more polish.",
    items: [
      "Everything in Standard",
      "Additional section (e.g., gallery/case study)",
      "Second revision round",
      "Analytics setup guidance (optional)",
      "Launch checklist + handoff notes",
    ],
  },
];

export default function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Packages"
      title="Clear scope, practical options"
      subtitle="Affordable packages to help you get started."
    >
      <div className="grid-3">
        {TIERS.map((tier) => (
          <div key={tier.name} className={tier.highlight ? "tier-wrap is-featured" : "tier-wrap"}>
            <Card title={tier.name} className="tier-card">
              <p className="tier-price">{tier.price}</p>
              <p className="muted">{tier.desc}</p>
              <ul className="list">
                {tier.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <div className="tier-cta">
                <Button href="#contact" variant={tier.highlight ? "primary" : "secondary"}>
                  Request a quote
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>

      <p className="muted small center">
        Note: hosting and domain costs are paid directly by the client when applicable.
      </p>
    </Section>
  );
}
