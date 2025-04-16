import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const offset = 70; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-blue-600/50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className={`font-playfair text-xl md:text-2xl text-white`}>
          Mary Sophia
        </Link>

        {/* Mobile menu button */}
        <button 
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li><Link to="/" className="border-b-2 border-[#00AEEF] pb-1 hover:text-[#00AEEF] transition">Home</Link></li>
          <li><Link to="/services" className="hover:text-[#00AEEF] transition">Services</Link></li>
          <li><a href="#school" className="hover:text-[#00AEEF] transition" onClick={(e) => handleNavLinkClick(e, 'services')}>School of Mary</a></li>
          <li><a href="#order" className="hover:text-[#00AEEF] transition" onClick={(e) => handleNavLinkClick(e, 'services')}>Order of the Blue Rose</a></li>
          <li><Link to="/about" className="hover:text-[#00AEEF] transition text-white">About</Link></li>
          <li><Link to="/contact" className="hover:text-[#00AEEF] transition text-white">Contact</Link></li>
        </ul>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`bg-[#002147] md:hidden w-full ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="container mx-auto px-4 py-4 space-y-3 text-white">
          <li><Link to="/" className="block py-2 hover:text-[#00AEEF] transition" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/services" className="block py-2 hover:text-[#00AEEF] transition" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
          <li><a href="#school" className="block py-2 hover:text-[#00AEEF] transition" onClick={(e) => handleNavLinkClick(e, 'services')}>School of Mary</a></li>
          <li><a href="#order" className="block py-2 hover:text-[#00AEEF] transition" onClick={(e) => handleNavLinkClick(e, 'services')}>Order of the Blue Rose</a></li>
          <li><Link to="/about" className="block py-2 hover:text-[#00AEEF] transition text-white" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" className="block py-2 hover:text-[#00AEEF] transition text-white">Contact</Link></li>
        </ul>
      </div>
    </header>
  );
}