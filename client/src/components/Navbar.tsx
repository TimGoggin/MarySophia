import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

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

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${shouldBeTransparent ? "bg-transparent" : "bg-white shadow-md"}`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/images/horizontal_logo.png"
            alt="Mary Sophia"
            className="h-20 w-auto"
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
              className={`transition pb-1 border-b-2 ${shouldBeTransparent ? "text-black hover:text-black" : location.pathname === "/" ? "text-[#D4AF37] hover:text-[#D4AF37]" : location.pathname === "/" ? "text-[#D4AF37] hover:text-[#D4AF37]" : "text-[#003864] hover:text-[#00AEEF]"} ${location.pathname === "/" ? "border-black" : "border-transparent"}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`transition pb-1 border-b-2 ${shouldBeTransparent ? "text-black hover:text-black" : location.pathname === "/services" ? "text-[#D4AF37] hover:text-[#D4AF37]" : "text-[#003864] hover:text-[#00AEEF]"} ${location.pathname === "/services" ? "border-black" : "border-transparent"}`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/readings"
              className={`transition pb-1 border-b-2 ${shouldBeTransparent ? "text-black hover:text-black" : location.pathname === "/readings" ? "text-[#D4AF37] hover:text-[#D4AF37]" : "text-[#003864] hover:text-[#00AEEF]"} ${location.pathname === "/readings" ? "border-black" : "border-transparent"}`}
            >
              Private Readings
            </Link>
          </li>
          <li>
            <Link
              to="/counseling"
              className={`transition pb-1 border-b-2 ${shouldBeTransparent ? "text-black hover:text-black" : location.pathname === "/counseling" ? "text-[#D4AF37] hover:text-[#D4AF37]" : "text-[#003864] hover:text-[#00AEEF]"} ${location.pathname === "/counseling" ? "border-black" : "border-transparent"}`}
            >
              Spiritual Counseling
            </Link>
          </li>
          <li>
            <Link
              to="/order"
              className={`transition pb-1 border-b-2 ${shouldBeTransparent ? "text-black hover:text-black" : location.pathname === "/order" ? "text-[#D4AF37] hover:text-[#D4AF37]" : "text-[#003864] hover:text-[#00AEEF]"} ${location.pathname === "/order" ? "border-black" : "border-transparent"}`}
            >
              Order of the Blue Rose
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`transition pb-1 border-b-2 ${shouldBeTransparent ? "text-black hover:text-black" : location.pathname === "/about" ? "text-[#D4AF37] hover:text-[#D4AF37]" : "text-[#003864] hover:text-[#00AEEF]"} ${location.pathname === "/about" ? "border-black" : "border-transparent"}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`transition pb-1 border-b-2 ${shouldBeTransparent ? "text-black hover:text-black" : location.pathname === "/contact" ? "text-[#D4AF37] hover:text-[#D4AF37]" : "text-[#003864] hover:text-[#00AEEF]"} ${location.pathname === "/contact" ? "border-black" : "border-transparent"}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className={`fixed top-[96px] left-0 right-0 bg-[#002147] md:hidden w-full ${mobileMenuOpen ? "block" : "hidden"}`}
      >
        <ul className="container mx-auto px-4 py-6 space-y-4 text-white">
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
