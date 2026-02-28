
import Section from "../components/Section.jsx";
import Button from "../components/Button.jsx";

const FORMSPREE_ID = "mjgelqga"; // <-- replace with your real Formspree form id

export default function Contact() {
  const action = `https://formspree.io/f/${FORMSPREE_ID}`;

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Request a quote"
      subtitle="Share a few details. I typically respond within 24 hours (business days)."
    >
      <div className="contact-grid">
        <div className="contact-card">
          <h3 className="h3">Project details</h3>
          <p className="muted">
            Include your business type, the goal of the page, and any examples you like.
          </p>

          <ul className="list">
            <li>Preferred timeline</li>
            <li>Any existing brand colors or logo</li>
            <li>Sections you want included</li>
          </ul>

          <div className="contact-note">
            <p className="muted small">
              No backend included. Form submissions are handled by Formspree.
            </p>
          </div>
        </div>

        <form className="form" method="POST" action={action}>
          <div className="form-row">
            <label className="label" htmlFor="name">Name</label>
            <input className="input" id="name" name="name" type="text" required />
          </div>

          <div className="form-row">
            <label className="label" htmlFor="email">Email</label>
            <input className="input" id="email" name="email" type="email" required />
          </div>

          <div className="form-row">
            <label className="label" htmlFor="budget">Budget range (optional)</label>
            <select className="input" id="budget" name="budget">
              <option value="">Select</option>
              <option value="$250-$500">$250–$500</option>
              <option value="$500-$1000">$500–$1,000</option>
              <option value="$1000-$2000">$1,000–$2,000</option>
              <option value="$2000+">$2,000+</option>
            </select>
          </div>

          <div className="form-row">
            <label className="label" htmlFor="message">Message</label>
            <textarea
              className="input textarea"
              id="message"
              name="message"
              rows="6"
              placeholder="What are you building? What should the page help you achieve?"
              required
            />
          </div>

          {/* Helps Formspree route replies */}
          <input type="hidden" name="_subject" value="New landing page inquiry" />

          <div className="form-actions">
            <Button as="button" type="submit" variant="primary">
              Send request
            </Button>
            <a className="link" href="mailto:youremail@example.com">
              Or email directly
            </a>
          </div>

          <p className="muted small">
            Tip: In Formspree settings, enable reCAPTCHA or spam filtering if needed.
          </p>
        </form>
      </div>
    </Section>
  );
}