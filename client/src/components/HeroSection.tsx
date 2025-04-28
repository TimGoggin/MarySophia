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

  const handleBookSession = () => {
    // Add your booking session logic here
    console.log("Booking session initiated");
  };


  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/hero.jpeg"
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="wavy-gradient"></div>
      </div>
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-left mb-12 md:mb-0">
            <h1 className="font-dancing-script text-4xl md:text-6xl text-white mb-3">
              Mary Sophia Welcomes You
            </h1>
            <p className="text-white text-lg md:text-xl mb-6 max-w-2xl font-open-sans">
              Step into a space of divine remembrance, where wisdom, love, and
              sacred connection guide your path.
            </p>
            <a
              href="#services"
              className="inline-flex items-center bg-transparent hover:bg-[#00AEEF] text-white font-semibold hover:text-white py-2 px-6 border border-white hover:border-transparent rounded-full transition duration-300"
              onClick={handleScrollToServices}
            >
              Find Your Sacred Space
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/test6.png"
              alt="Mary Sophia Portrait"
              className="w-2/3 h-2/3 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}