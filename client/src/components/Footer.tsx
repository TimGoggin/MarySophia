import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
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
    <footer className="bg-[#002147] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl mb-4">Mary Sophia</h3>
            <p className="text-gray-300 mb-4 font-open-sans">
              Guiding you on your spiritual journey toward divine connection and inner peace.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#00AEEF] transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#00AEEF] transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#00AEEF] transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-playfair text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 font-open-sans">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-300 hover:text-[#00AEEF] transition"
                  onClick={(e) => scrollToSection(e, 'home')}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-300 hover:text-[#00AEEF] transition"
                  onClick={(e) => scrollToSection(e, 'services')}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#school" 
                  className="text-gray-300 hover:text-[#00AEEF] transition"
                  onClick={(e) => scrollToSection(e, 'services')}
                >
                  School of Mary
                </a>
              </li>
              <li>
                <a 
                  href="#order" 
                  className="text-gray-300 hover:text-[#00AEEF] transition"
                  onClick={(e) => scrollToSection(e, 'services')}
                >
                  Order of the Blue Rose
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-playfair text-xl mb-4">Contact</h3>
            <ul className="space-y-2 font-open-sans">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-[#00AEEF]" />
                <a href="mailto:info@marysophia.com" className="text-gray-300 hover:text-[#00AEEF]">
                  info@marysophia.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-[#00AEEF]" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-[#00AEEF]" />
                <span className="text-gray-300">Spiritual Center, 123 Divine Path</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 font-open-sans">
          <p>&copy; {new Date().getFullYear()} Mary Sophia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
