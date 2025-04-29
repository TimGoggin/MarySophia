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
    <footer className="relative bg-white">
      <div className="wavy-gradient opacity-40"></div>
      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-12 pb-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 border-b border-gray-200 pb-8">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl text-[#00AEEF] mb-4 font-semibold">About Us</h3>
            <div className="space-y-4">
              <h4 className="font-playfair text-xl text-black font-semibold">Mary Sophia</h4>
              <p className="text-gray-800 font-open-sans text-base leading-relaxed">
                Guiding you on your spiritual journey toward divine connection and inner peace through the wisdom of sacred teachings.
              </p>
              <Link 
                to="/about" 
                className="inline-block text-[#00AEEF] hover:text-black transition duration-300 text-base font-bold"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl text-[#00AEEF] mb-4 font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-800 hover:text-[#00AEEF] transition duration-300 text-base font-medium">Home</Link>
              <Link to="/services" className="text-black hover:text-[#00AEEF] transition duration-300 text-sm">Services</Link>
              <Link to="/school" className="text-black hover:text-[#00AEEF] transition duration-300 text-sm">School of Mary</Link>
              <Link to="/order" className="text-black hover:text-[#00AEEF] transition duration-300 text-sm">Order of the Blue Rose</Link>
              <Link to="/about" className="text-black hover:text-[#00AEEF] transition duration-300 text-sm">About</Link>
              <Link to="/contact" className="text-black hover:text-[#00AEEF] transition duration-300 text-sm">Contact</Link>
            </nav>
          </div>

          {/* Policies Column */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl text-[#00AEEF] mb-4">Policies</h3>
            <nav className="space-y-2">
              <a href="#" className="block text-black hover:text-[#00AEEF] transition duration-300 text-sm">Privacy Policy</a>
              <a href="#" className="block text-black hover:text-[#00AEEF] transition duration-300 text-sm">Terms of Service</a>
              <a href="#" className="block text-black hover:text-[#00AEEF] transition duration-300 text-sm">Cookie Policy</a>
              <a href="#" className="block text-black hover:text-[#00AEEF] transition duration-300 text-sm">Disclaimer</a>
              <a href="#" className="block text-black hover:text-[#00AEEF] transition duration-300 text-sm">Refund Policy</a>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl text-[#00AEEF] mb-4 font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#00AEEF]" />
                <a href="mailto:info@marysophia.com" className="text-gray-800 hover:text-[#00AEEF] transition duration-300 text-base font-medium">
                  info@marysophia.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#00AEEF]" />
                <span className="text-black text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#00AEEF]" />
                <span className="text-black text-sm">Spiritual Center, 123 Divine Path</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-[#00AEEF]" />
                <span className="text-black text-sm">Mon-Fri: 9AM-5PM EST</span>
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
            <a href="https://www.instagram.com/orderofthebluerose/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#00AEEF] transition duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@orderofthebluerose3878" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#00AEEF] transition duration-300">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <div className="text-center md:text-right text-sm text-black">
            <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} Mary Sophia. All rights reserved.</p>
            <div className="space-x-4">
              <a href="#" className="text-black hover:text-[#00AEEF] transition duration-300">Terms of Use</a>
              <a href="#" className="text-black hover:text-[#00AEEF] transition duration-300">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}