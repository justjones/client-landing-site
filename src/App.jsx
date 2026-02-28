import Navbar from "./components/Navbar.jsx";
import useRevealOnScroll from "./hooks/useRevealOnScroll.js";
import Hero from "./sections/Hero.jsx";
import TrustBar from "./sections/TrustBar.jsx";
import Services from "./sections/Services.jsx";
import Process from "./sections/Process.jsx";
import Proof from "./sections/Proof.jsx";
import Pricing from "./sections/Pricing.jsx";
import FAQ from "./sections/FAQ.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

export default function App() {
  useRevealOnScroll(".reveal");
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <Proof />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

