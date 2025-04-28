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
          <div className="container mx-auto px-4 text-center mt-12"> {/* Added this div to contain the CTA */}
            <h1 className="font-playfair text-4xl md:text-5xl text-white mb-6 drop-shadow-lg">
              You are standing at the threshold of your own sacred rebirth.
            </h1>
            <p className="text-white font-open-sans text-lg max-w-3xl mx-auto mb-8 drop-shadow-lg">
              If you feel the call to return to your heart, awaken your soul's gifts, and anchor the Light of Sophia into your life, I invite you to step forward.
            </p>
            <p className="text-white font-open-sans text-xl max-w-2xl mx-auto mb-12 drop-shadow-lg italic">
              You are ready. You are held. You are loved.
            </p>
            <div className="flex justify-center gap-6">
              <button
                onClick={handleBookSession}
                className="bg-[#00AEEF] hover:bg-blue-600 text-white py-3 px-8 rounded-full transition duration-300"
              >
                Book a Session
              </button>
              <a
                href="#services"
                onClick={handleScrollToServices}
                className="bg-white hover:bg-gray-100 text-[#00AEEF] py-3 px-8 rounded-full transition duration-300"
              >
                Explore My Offerings
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}