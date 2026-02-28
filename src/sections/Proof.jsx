import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

const ITEMS = [
  {
    title: "Wellness Clinic Site",
    bullets: ["Responsive layout", "Clean sections + CTA", "Deployed live"],
    note: "Static site build with a conservative, professional tone.",
    links: {
      live: "https://responsive-wellness-clinic-site.vercel.app/",
      code: "https://github.com/justjones/responsive-wellness-clinic-site",
    },
  },
  {
    title: "Freelance Landing (this build)",
    bullets: ["React + Vite", "Formspree contact", "Smooth-scroll navigation"],
    note: "Conversion-focused single-page template.",
    links: {
      live: "https://client-landing-site.vercel.app/",
      code: "https://github.com/justjones/client-landing-site",
    },
  },
  {
    title: "Movie Hub (in progress)",
    bullets: ["API integration", "Search + favorites", "UI polish in progress"],
    note: "Next project on deck for portfolio depth.",
    // links: {
    //   code: "https://github.com/YOUR-USER/movie-hub",
    // },
  },
];

export default function Proof() {
  return (
    <Section
      id="proof"
      eyebrow="Work samples"
      title="Simple examples you can adapt"
      subtitle="Use as starter layouts while you build a stronger portfolio."
    >      
      <div className="grid-3">
        {ITEMS.map((item) => (
          <Card key={item.title} title={item.title}>
            <ul className="list">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="muted small">{item.note}</p>
            <div className="proof-links">
              {item.links?.live && (
                <a className="link" href={item.links.live} target="_blank" rel="noreferrer">
                  Live demo
                </a>
              )}
              {item.links?.code && (
                <a className="link" href={item.links.code} target="_blank" rel="noreferrer">
                  Code
                </a>
              )}
            </div>
          </Card>

        ))}
      </div>


      <div className="center-row">
        <Button href="#contact" variant="secondary">
          Ask for a similar layout
        </Button>
      </div>
    </Section>
  );
}
