import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Clock } from "lucide-react";
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
    <footer className="relative bg-[#031344] text-white">
      <div className="wavy-gradient opacity-40"></div>
      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-12 pb-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 border-b border-blue-800/50 pb-8">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl text-[#00AEEF] mb-4">About Us</h3>
            <div className="space-y-4">
              <h4 className="font-playfair text-lg">Mary Sophia</h4>
              <p className="text-gray-300 font-open-sans text-sm leading-relaxed">
                Guiding you on your spiritual journey toward divine connection and inner peace through the wisdom of sacred teachings.
              </p>
              <Link 
                to="/about" 
                className="inline-block text-[#00AEEF] hover:text-white transition duration-300 text-sm font-semibold"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl text-[#00AEEF] mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-[#00AEEF] transition duration-300 text-sm">Home</Link>
              <Link to="/services" className="text-gray-300 hover:text-[#00AEEF] transition duration-300 text-sm">Services</Link>
              <Link to="/school" className="text-gray-300 hover:text-[#00AEEF] transition duration-300 text-sm">School of Mary</Link>
              <Link to="/order" className="text-gray-300 hover:text-[#00AEEF] transition duration-300 text-sm">Order of the Blue Rose</Link>
              <Link to="/about" className="text-gray-300 hover:text-[#00AEEF] transition duration-300 text-sm">About</Link>
              <Link to="/contact" className="text-gray-300 hover:text-[#00AEEF] transition duration-300 text-sm">Contact</Link>
            </nav>
          </div>

          {/* Policies Column */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl text-[#00AEEF] mb-4">Policies</h3>
            <nav className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-[#00AEEF] transition duration-300 text-sm">Privacy Policy</a>
              <a href="#" className="block text-gray-300 hover:text-[#00AEEF] transition duration-300 text-sm">Terms of Service</a>
              <a href="#" className="block text-gray-300 hover:text-[#00AEEF] transition duration-300 text-sm">Cookie Policy</a>
              <a href="#" className="block text-gray-300 hover:text-[#00AEEF] transition duration-300 text-sm">Disclaimer</a>
              <a href="#" className="block text-gray-300 hover:text-[#00AEEF] transition duration-300 text-sm">Refund Policy</a>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl text-[#00AEEF] mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#00AEEF]" />
                <a href="mailto:info@marysophia.com" className="text-gray-300 hover:text-[#00AEEF] transition duration-300 text-sm">
                  info@marysophia.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#00AEEF]" />
                <span className="text-gray-300 text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#00AEEF]" />
                <span className="text-gray-300 text-sm">Spiritual Center, 123 Divine Path</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-[#00AEEF]" />
                <span className="text-gray-300 text-sm">Mon-Fri: 9AM-5PM EST</span>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <form onSubmit={handleNewsletterSubmit} className="mt-6 space-y-3">
              <h4 className="font-playfair text-sm text-[#00AEEF]">Join Our Newsletter</h4>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-3 py-2 bg-blue-900/30 border border-blue-800/50 rounded-md text-sm focus:outline-none focus:border-[#00AEEF] transition"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full px-3 py-2 bg-blue-900/30 border border-blue-800/50 rounded-md text-sm focus:outline-none focus:border-[#00AEEF] transition"
              />
              <button
                type="submit"
                className="w-full bg-[#00AEEF] hover:bg-[#0098DC] text-white font-semibold py-2 px-4 rounded-md transition duration-300 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-[#00AEEF] transition duration-300">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/orderofthebluerose/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#00AEEF] transition duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@orderofthebluerose3878" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#00AEEF] transition duration-300">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <div className="text-center md:text-right text-sm text-gray-400">
            <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} Mary Sophia. All rights reserved.</p>
            <div className="space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#00AEEF] transition duration-300">Terms of Use</a>
              <a href="#" className="text-gray-400 hover:text-[#00AEEF] transition duration-300">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}