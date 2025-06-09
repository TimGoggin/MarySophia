import { Mail, Phone, MapPin, Instagram, Youtube, Clock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    setEmail("");
    setName("");
  };

  return (
    <footer className="relative bg-[#002147]">
      <div className="bg-[#002147] opacity-40"></div>
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/4 mb-8 md:mb-0">
            <Link to="/">
              <img
                src="/images/stacked_logo.png"
                alt="Mary Sophia"
                className="h-40 w-auto mx-auto md:mx-0 mb-8 hover:opacity-80 transition duration-300"
              />
            </Link>
          </div>
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 md:pl-8">
              {/* Quick Links Column */}
              <div className="space-y-4">
                <h3 className="font-playfair text-2xl text-white mb-4 font-semibold">
                  Quick Links
                </h3>
                <nav className="flex flex-col space-y-3">
                  <Link
                    to="/"
                    className="text-white hover:text-white/80 transition duration-300 text-base font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/services"
                    className="text-white hover:text-white/80 transition duration-300 text-base font-medium"
                  >
                    Services
                  </Link>
                  <Link
                    to="/readings"
                    className="text-white hover:text-white/80 transition duration-300 text-base font-medium"
                  >
                    Private Readings
                  </Link>
                  <Link
                    to="/counseling"
                    className="text-white hover:text-white/80 transition duration-300 text-base font-medium"
                  >
                    Spiritual Counseling
                  </Link>
                  <Link
                    to="/order"
                    className="text-white hover:text-white/80 transition duration-300 text-base font-medium"
                  >
                    Order of the Blue Rose
                  </Link>
                  <Link
                    to="/about-us"
                    className="text-white hover:text-white/80 transition duration-300 text-base font-medium"
                  >
                    About
                  </Link>
                  <Link
                    to="/contact-us"
                    className="text-white hover:text-white/80 transition duration-300 text-base font-medium"
                  >
                    Contact
                  </Link>
                </nav>
              </div>

              {/* Policies Column - Temporarily commented out
              <div className="space-y-4">
                <h3 className="font-playfair text-2xl text-white mb-4 font-semibold">
                  Policies
                </h3>
                <nav className="space-y-2">
                  <a
                    href="#"
                    className="block text-white hover:text-white/80 transition duration-300 text-base font-medium"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="block text-white hover:text-white/80 transition duration-300 text-base font-medium"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="block text-white hover:text-white/80 transition duration-300 text-base font-medium"
                  >
                    Cookie Policy
                  </a>
                  <a
                    href="#"
                    className="block text-white hover:text-white/80 transition duration-300 text-base font-medium"
                  >
                    Disclaimer
                  </a>
                  <a
                    href="#"
                    className="block text-white hover:text-white/80 transition duration-300 text-base font-medium"
                  >
                    Refund Policy
                  </a>
                </nav>
              </div>
              */}

              {/* Contact Column */}
              <div className="space-y-4">
                <h3 className="font-playfair text-2xl text-white mb-4 font-semibold">
                  Contact Us
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-white" />
                    <a
                      href="mailto:info@marysophia.com"
                      className="hover:text-white/80 text-base font-medium text-white"
                    >
                      info@marysophia.com
                    </a>
                  </li>
                  
                  <li className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-white" />
                    <span className="text-white text-sm">
                      4920 York Road Suite 2200 Buckingham, PA 18912
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-white" />
                    <span className="text-white text-sm">
                      Mon-Fri: 9AM-5PM EST
                    </span>
                  </li>
                  <li className="flex items-center space-x-3 mt-4">
                    <div className="flex space-x-4">
                      <a
                        href="https://www.instagram.com/orderofthebluerose/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-white/80 transition duration-300"
                      >
                        <Instagram className="w-5 h-5 text-white" />
                      </a>
                      <a
                        href="https://www.youtube.com/@orderofthebluerose3878"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-white/80 transition duration-300"
                      >
                        <Youtube className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 text-center md:text-right text-sm text-white">
              <p className="mb-2 md:mb-0">
                &copy; {new Date().getFullYear()} Mary Sophia. All rights
                reserved.
              </p>
              <div className="space-x-4">
                <a
                  href="#"
                  className="text-white hover:text-white/80 transition duration-300"
                >
                  Terms of Use
                </a>
                <a
                  href="#"
                  className="text-white hover:text-white/80 transition duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="/sitemap.xml"
                  className="text-white hover:text-white/80 transition duration-300"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
