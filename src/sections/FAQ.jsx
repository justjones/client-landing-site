import Section from "../components/Section.jsx";

const FAQS = [
  {
    q: "What do you need from me to start?",
    a: "Preferred wording, any photos, your logo (optional), and examples of sites you like. If you do not have content ready, we can start with placeholder copy and refine it.",
  },
  {
    q: "Do you provide hosting or a domain?",
    a: "I can deploy to Vercel or Netlify. If you want a custom domain, you can purchase it and I’ll help connect it.",
  },
  {
    q: "How many revisions are included?",
    a: "One focused revision round is included in the 1-week build. Additional revisions can be added if needed.",
  },
  {
    q: "What is not included?",
    a: "No backend, dashboards, authentication, or multi-page builds in this package. Those can be scoped separately.",
  },
];

export default function FAQ() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Common questions"
      subtitle="Clear expectations help projects finish smoothly."
    >
      <div className="faq">
        {FAQS.map((item) => (
          <details key={item.q} className="faq-item">
            <summary className="faq-q">{item.q}</summary>
            <p className="faq-a muted">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
