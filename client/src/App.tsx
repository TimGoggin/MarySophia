import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import WhereToBeginSection from "./components/WhereToBeginSection";
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
        <link rel="canonical" href="https://lightofsophia.com" />
        <title>Mary Sophia | Divine Feminine Channel & Spiritual Guide</title>
        <meta
          name="description"
          content="Mary Sophia offers private readings, spiritual counseling, and sacred teachings rooted in the Divine Feminine. Explore the School of Sophia and Order of the Blue Rose."
        />
        <meta
          name="keywords"
          content="Mary Sophia, Divine Feminine, spiritual counseling, intuitive channeling, private readings, Order of the Blue Rose, School of Sophia"
        />

        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="Mary Sophia | Divine Feminine Channel & Spiritual Guide"
        />
        <meta
          property="og:description"
          content="Step into sacred remembrance with Mary Sophia — intuitive channel and messenger of the Divine Feminine Light."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lightofsophia.com/" />
        <meta
          property="og:image"
          content="https://lightofsophia.com/images/Mary_Sophia_v2.png"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Mary Sophia",
            url: "https://lightofsophia.com",
            image: "https://lightofsophia.com/images/Mary_Sophia_v2.png",
            description:
              "Mary Sophia is a spiritual teacher, intuitive channel, and sacred guide offering services rooted in the Divine Feminine, including private readings, spiritual counseling, and mentorship through the School of Sophia and Order of the Blue Rose.",
            openingHours: "Mo-Fr 09:00-17:00",
            areaServed: {
              "@type": "Place",
              name: [
                "Buckingham",
                "Doylestown",
                "New Hope",
                "Lambertville",
                "Online Worldwide",
              ],
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Mary Sophia Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Private Readings",
                    description:
                      "Intuitive guidance sessions tailored to your soul's journey.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Spiritual Counseling",
                    description:
                      "Sacred support sessions for healing, wisdom, and inner alignment.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "School of Sophia",
                    description:
                      "Courses and mentorship in spiritual awakening and Divine Feminine wisdom.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Order of the Blue Rose",
                    description:
                      "Sacred sisterhood path of devotion, remembrance, and divine embodiment.",
                  },
                },
              ],
            },
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
              <WhereToBeginSection />
              <SacredRebirthCta />
              <AboutSection />
              <TestimonialsSection />
              <CtaSection buttonText="Sign Up Here" />
            </>
          }
        />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
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