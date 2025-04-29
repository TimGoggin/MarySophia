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
import { Toaster } from "@/components/ui/toaster";
import SacredRebirthCta from "./components/SacredRebirthCta"; // Import the new component

function App() {
  return (
    <Router>
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
              <CtaSection />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/order" element={<Order />} />
        <Route path="/counseling" element={<Counseling />} />
        <Route path="/school" element={<School />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
