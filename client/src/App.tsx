import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import CtaSection from "./components/CtaSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
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
    <>
      <Navbar scrolled={scrolled} />
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <AboutSection />
      <CtaSection />
      <TestimonialsSection />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
