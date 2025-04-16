import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const shouldBeTransparent = ["", "/", "/services", "/school", "/order"].includes(location.pathname) && isAtTop;

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const offset = 70; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-colors duration-300 ${shouldBeTransparent ? 'bg-transparent' : 'bg-[#031344]/50'}`}>
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
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <Link
              to="/"
              className={`hover:text-[#00AEEF] transition pb-1 border-b-2 ${location.pathname === "/" ? "border-[#00AEEF] text-[#00AEEF]" : "border-transparent"}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`hover:text-[#00AEEF] transition pb-1 border-b-2 ${location.pathname === "/services" ? "border-[#00AEEF] text-[#00AEEF]" : "border-transparent"}`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/school"
              className={`hover:text-[#00AEEF] transition pb-1 border-b-2 ${location.pathname === "/school" ? "border-[#00AEEF] text-[#00AEEF]" : "border-transparent"}`}
            >
              School of Mary
            </Link>
          </li>
          <li>
            <Link
              to="/order"
              className={`hover:text-[#00AEEF] transition pb-1 border-b-2 ${location.pathname === "/order" ? "border-[#00AEEF] text-[#00AEEF]" : "border-transparent"}`}
            >
              Order of the Blue Rose
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`hover:text-[#00AEEF] transition pb-1 border-b-2 ${location.pathname === "/about" ? "border-[#00AEEF] text-[#00AEEF]" : "border-transparent"}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`hover:text-[#00AEEF] transition pb-1 border-b-2 ${location.pathname === "/contact" ? "border-[#00AEEF] text-[#00AEEF]" : "border-transparent"}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`bg-[#002147] md:hidden w-full ${mobileMenuOpen ? "block" : "hidden"}`}
      >
        <ul className="container mx-auto px-4 py-4 space-y-3 text-white">
          <li>
            <Link
              to="/"
              className={`block py-2 hover:text-[#00AEEF] transition ${location.pathname === "/" ? "text-[#00AEEF] font-semibold" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`block py-2 hover:text-[#00AEEF] transition ${location.pathname === "/services" ? "text-[#00AEEF] font-semibold" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/school"
              className={`block py-2 hover:text-[#00AEEF] transition ${location.pathname === "/school" ? "text-[#00AEEF] font-semibold" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              School of Mary
            </Link>
          </li>
          <li>
            <Link
              to="/order"
              className={`block py-2 hover:text-[#00AEEF] transition ${location.pathname === "/order" ? "text-[#00AEEF] font-semibold" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Order of the Blue Rose
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`block py-2 hover:text-[#00AEEF] transition ${location.pathname === "/about" ? "text-[#00AEEF] font-semibold" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`block py-2 hover:text-[#00AEEF] transition ${location.pathname === "/contact" ? "text-[#00AEEF] font-semibold" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
