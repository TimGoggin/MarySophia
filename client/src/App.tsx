import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import CtaSection from "./components/CtaSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Order from "./pages/Order";
import School from "./pages/School";
import Counseling from "./pages/Counseling";
import NotFound from "./pages/not-found";
import BlueRoseReadings from "./pages/BlueRoseReadings";
import { Toaster } from "@/components/ui/toaster";
import SacredRebirthCta from "./components/SacredRebirthCta";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <Helmet>
        <link rel="canonical" href="https://www.lightofsophia.com/" />
        <title>
          Mary Sophia | Divine Feminine Guidance, Healing & Spiritual Wisdom
        </title>
        <meta
          name="description"
          content="Mary Sophia offers sacred guidance, spiritual counseling, private readings, and teachings rooted in Divine Feminine wisdom. Awaken your soul, embody love, and connect with a sacred community."
        />
        <meta
          name="keywords"
          content="Mary Sophia, Divine Feminine, spiritual guidance, private readings, spiritual counseling, Order of the Blue Rose, School of Sophia, feminine wisdom, soul awakening, sacred community"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mary Sophia",
            url: "https://www.lightofsophia.com/",
            image: "https://www.lightofsophia.com/images/newMary4.jpg",
            description:
              "Mary Sophia is an intuitive channel, spiritual counselor, and teacher offering Divine Feminine guidance, private readings, mentorship, and sacred community through the Order of the Blue Rose and School of Sophia.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1456 Ferry Road #10",
              addressLocality: "Doylestown",
              addressRegion: "PA",
              postalCode: "18901",
              addressCountry: "US",
            },
            sameAs: [
              "https://www.instagram.com/orderofthebluerose/",
              "https://www.youtube.com/@orderofthebluerose3878",
            ],
            knowsAbout: [
              "Divine Feminine Guidance",
              "Private Readings",
              "Spiritual Counseling",
              "Sacred Mentorship",
              "Order of the Blue Rose",
              "School of Sophia",
            ],
          })}
        </script>
      </Helmet>

      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <WelcomeSection />
              <ServicesSection />
              <SacredRebirthCta /> {/* Added SacredRebirthCta */}
              <AboutSection />
              <TestimonialsSection />
              <CtaSection buttonText="Sign Up Here" />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/order" element={<Order />} />
        <Route path="/counseling" element={<Counseling />} />
        <Route path="/school" element={<School />} />
        <Route path="/readings" element={<BlueRoseReadings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
