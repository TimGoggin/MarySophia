import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      const offset = 70; // Navbar height
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/src/images/hero.jpeg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="wavy-gradient"></div>
      </div>
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
          <div className="max-w-2xl mb-12">
            <h1 className="font-dancing-script text-4xl md:text-6xl text-white mb-4">
              Mary Sophia Welcomes You
            </h1>
            <a
              href="#services"
              className="inline-flex items-center bg-transparent hover:bg-[#00AEEF] text-white font-semibold hover:text-white py-2 px-6 border border-white hover:border-transparent rounded-full transition duration-300"
              onClick={handleScrollToServices}
            >
              Find Your Sacred Space
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/src/images/test6.png"
              alt="Mary Sophia Portrait"
              className="w-3/4 h-3/4 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
