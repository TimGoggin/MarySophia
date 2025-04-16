
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
import { Toaster } from "@/components/ui/toaster";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <Navbar scrolled={scrolled} />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <WelcomeSection />
            <ServicesSection />
            <AboutSection />
            <CtaSection />
            <TestimonialsSection />
          </>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
