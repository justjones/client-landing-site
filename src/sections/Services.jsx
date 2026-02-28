import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Work that supports client conversion"
      subtitle="Focused deliverables for a professional, credible first impression."
    >
      <div className="grid-3">
        <Card title="Landing page build">
          <ul className="list">
            <li>Single-page layout with conversion sections</li>
            <li>Mobile-first responsive design</li>
            <li>CTA and lead-capture focus</li>
          </ul>
        </Card>

        <Card title="Redesign and polish">
          <ul className="list">
            <li>Improve layout, spacing, and readability</li>
            <li>Modernize typography and components</li>
            <li>Reduce friction and clarify messaging</li>
          </ul>
        </Card>

        <Card title="Performance & SEO basics">
          <ul className="list">
            <li>Meta tags and social preview setup</li>
            <li>Image optimization and layout stability</li>
            <li>Accessibility baseline improvements</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}
