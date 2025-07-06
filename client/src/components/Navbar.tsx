import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const location = useLocation();
  const isContactPage = location.pathname === "/contact-us";

  // Define paths where navbar should be transparent at top
  const transparentPaths = [
    "",
    "/",
    "/services",
    "/counseling",
    "/school",
    "/order",
    "/readings",
  ];
  const shouldBeTransparent =
    transparentPaths.includes(location.pathname) && isAtTop;

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
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
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleInternalLinkClick = () => {
    setMobileMenuOpen(false);
    // Scroll to top of page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${shouldBeTransparent ? "bg-transparent" : "bg-white shadow-md"}`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center border-none max-w-[1500px]">
        <Link to="/" onClick={handleInternalLinkClick} className="flex items-center">
          <img
            src="/images/horizontal_logo.png"
            alt="Mary Sophia"
            className="h-20 w-auto hover:opacity-80 transition duration-300"
          />
        </Link>

        <button
          className="text-black md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/"
              onClick={handleInternalLinkClick}
              className={`transition pb-1 border-b-2 ${shouldBeTransparent ? "text-black hover:text-black" : location.pathname === "/" ? "text-[#D4AF37] hover:text-[#D4AF37]" : location.pathname === "/" ? "text-[#D4AF37] hover:text-[#D4AF37]" : "text-[#003864] hover:text-[#00AEEF]"} ${location.pathname === "/" ? "border-black" : "border-transparent"}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={handleInternalLinkClick}
              className={`transition pb-1 border-b-2 ${shouldBeTransparent ? "text-black hover:text-black" : location.pathname === "/services" ? "text-[#D4AF37] hover:text-[#D4AF37]" : "text-[#003864] hover:text-[#00AEEF]"} ${location.pathname === "/services" ? "border-black" : "border-transparent"}`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/readings"
              onClick={handleInternalLinkClick}
              className={`transition pb-1 border-b-2 ${shouldBeTransparent ? "text-black hover:text-black" : location.pathname === "/readings" ? "text-[#D4AF37] hover:text-[#D4AF37]" : "text-[#003864] hover:text-[#00AEEF]"} ${location.pathname === "/readings" ? "border-black" : "border-transparent"}`}
            >
              Private Readings
            </Link>
          </li>
          <li>
            <Link
              to="/counseling"
              onClick={handleInternalLinkClick}
              className={`transition pb-1 border-b-2 ${shouldBeTransparent ? "text-black hover:text-black" : location.pathname === "/counseling" ? "text-[#D4AF37] hover:text-[#D4AF37]" : "text-[#003864] hover:text-[#00AEEF]"} ${location.pathname === "/counseling" ? "border-black" : "border-transparent"}`}
            >
              Spiritual Counseling
            </Link>
          </li>
          <li>
            <Link
              to="/order"
              onClick={handleInternalLinkClick}
              className={`transition pb-1 border-b-2 ${shouldBeTransparent ? "text-black hover:text-black" : location.pathname === "/order" ? "text-[#D4AF37] hover:text-[#D4AF37]" : "text-[#003864] hover:text-[#00AEEF]"} ${location.pathname === "/order" ? "border-black" : "border-transparent"}`}
            >
              Order of the Blue Rose
            </Link>
          </li>
          <li>
            <Link
              to="/school"
              onClick={handleInternalLinkClick}
              className={`transition pb-1 border-b-2 ${shouldBeTransparent ? "text-black hover:text-black" : location.pathname === "/school" ? "text-[#D4AF37] hover:text-[#D4AF37]" : "text-[#003864] hover:text-[#00AEEF]"} ${location.pathname === "/school" ? "border-black" : "border-transparent"}`}
            >
              School of Sophia
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              onClick={handleInternalLinkClick}
              className={`transition pb-1 border-b-2 ${shouldBeTransparent ? "text-black hover:text-black" : location.pathname === "/about-us" ? "text-[#D4AF37] hover:text-[#D4AF37]" : "text-[#003864] hover:text-[#00AEEF]"} ${location.pathname === "/about-us" ? "border-black" : "border-transparent"}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              onClick={handleInternalLinkClick}
              className={`transition pb-1 border-b-2 ${shouldBeTransparent ? "text-black hover:text-black" : location.pathname === "/contact-us" ? "text-[#D4AF37] hover:text-[#D4AF37]" : "text-[#003864] hover:text-[#00AEEF]"} ${location.pathname === "/contact-us" ? "border-black" : "border-transparent"}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className={`fixed top-[96px] left-0 right-0 bg-[#002147] md:hidden w-full shadow-lg ${mobileMenuOpen ? "block" : "hidden"}`}
      >
        <ul className="container mx-auto px-4 py-6 space-y-4 text-white">
          <li>
            <Link
              to="/"
              className={`block py-2 hover:text-[#D4AF37] transition ${location.pathname === "/" ? "text-[#D4AF37] font-semibold" : ""}`}
              onClick={handleInternalLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`block py-2 hover:text-[#D4AF37] transition ${location.pathname === "/services" ? "text-[#D4AF37] font-semibold" : ""}`}
              onClick={handleInternalLinkClick}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/readings"
              className={`block py-2 hover:text-[#D4AF37] transition ${location.pathname === "/readings" ? "text-[#D4AF37] font-semibold" : ""}`}
              onClick={handleInternalLinkClick}
            >
              Private Readings
            </Link>
          </li>
          <li>
            <Link
              to="/counseling"
              className={`block py-2 hover:text-[#D4AF37] transition ${location.pathname === "/counseling" ? "text-[#D4AF37] font-semibold" : ""}`}
              onClick={handleInternalLinkClick}
            >
              Spiritual Counseling
            </Link>
          </li>
          <li>
            <Link
              to="/order"
              className={`block py-2 hover:text-[#D4AF37] transition ${location.pathname === "/order" ? "text-[#D4AF37] font-semibold" : ""}`}
              onClick={handleInternalLinkClick}
            >
              Order of the Blue Rose
            </Link>
          </li>
          <li>
            <Link
              to="/school"
              className={`block py-2 hover:text-[#D4AF37] transition ${location.pathname === "/school" ? "text-[#D4AF37] font-semibold" : ""}`}
              onClick={handleInternalLinkClick}
            >
              School of Sophia
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className={`block py-2 hover:text-[#D4AF37] transition ${location.pathname === "/about-us" ? "text-[#D4AF37] font-semibold" : ""}`}
              onClick={handleInternalLinkClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className={`block py-2 hover:text-[#D4AF37] transition ${location.pathname === "/contact-us" ? "text-[#D4AF37] font-semibold" : ""}`}
              onClick={handleInternalLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}