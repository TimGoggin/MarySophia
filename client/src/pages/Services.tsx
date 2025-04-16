import { Helmet } from "react-helmet";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Mary Sophia</title>
      </Helmet>
      <section className="relative min-h-[40vh] flex items-center pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/hero.jpeg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="wavy-gradient"></div>
        </div>
        <div className="relative z-20 w-full">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-4xl md:text-5xl text-white mb-4 drop-shadow-lg">
              Our Services
            </h1>
            <p className="text-white font-open-sans text-lg max-w-2xl mx-auto drop-shadow-lg">
              Offerings designed to deepen your connection to the Divine
              Feminine
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white py-16 relative">
        <div className="floating-roses-container">
          {[...Array(15)].map((_, i) => {
            const gridRow = Math.floor(i / 3);
            const gridCol = i % 3;
            const baseDelay = (gridRow * 3 + gridCol) * 2;

            return (
              <div
                key={i}
                className="floating-rose"
                style={{
                  backgroundImage: `url(/images/rose-${(i % 3) + 1}.png)`,
                  animationDelay: `${baseDelay + Math.random() * 5}s`,
                  left: `${gridCol * 33 + Math.random() * 10}%`,
                  top: `${gridRow * 25 + Math.random() * 10}%`,
                  opacity: 0,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            );
          })}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Private Readings */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#00AEEF]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img src="/icons/rose-2.svg" alt="Rose Icon" className="w-8 h-8" />
              </div>
              <h3 className="font-playfair text-2xl text-[#00AEEF] mb-4 text-center">
                Private Readings
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Personal guidance sessions connecting you with divine wisdom and
                spiritual insight.
              </p>
              <a
                href="https://sacred-rose.teachable.com/purchase?product_id=6140178"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-transparent hover:bg-[#00AEEF] text-[#00AEEF] hover:text-white py-2 px-4 border border-[#00AEEF] hover:border-transparent rounded-full transition duration-300 flex items-center justify-center"
              >
                Book a Session
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* School of Mary */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#00AEEF]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img src="/icons/female.svg" alt="Female Icon" className="w-8 h-8" />
              </div>
              <h3 className="font-playfair text-2xl text-[#00AEEF] mb-4 text-center">
                School of Mary
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Learn ancient wisdom and spiritual practices in our sacred
                learning community.
              </p>
              <Link 
                to="/school"
                className="w-full bg-transparent hover:bg-[#00AEEF] text-[#00AEEF] hover:text-white py-2 px-4 border border-[#00AEEF] hover:border-transparent rounded-full transition duration-300 flex items-center justify-center"
              >
                Learn More
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Order of the Blue Rose */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#00AEEF]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-[#00AEEF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl text-[#00AEEF] mb-4 text-center">
                Order of the Blue Rose
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Join our sacred sisterhood dedicated to embodying divine
                feminine wisdom.
              </p>
              <Link 
                to="/order"
                className="w-full bg-transparent hover:bg-[#00AEEF] text-[#00AEEF] hover:text-white py-2 px-4 border border-[#00AEEF] hover:border-transparent rounded-full transition duration-300 flex items-center justify-center"
              >
                Join Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative bg-[#002147] text-white rounded-lg p-12 text-center overflow-hidden">
            <div className="wavy-gradient opacity-40"></div>
            <div className="relative z-10">
              <h2 className="font-playfair text-3xl mb-4">
                Join Our Monthly Prayer Circle
              </h2>
              <p className="mb-8 max-w-2xl mx-auto">
                Connect with like-minded souls in our sacred monthly gathering.
                Experience the power of collective prayer and divine feminine
                energy.
              </p>
              <a
                href="https://sacred-rose.teachable.com/purchase?product_id=6205554"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00AEEF] hover:bg-[#0097FB] text-white py-3 px-8 rounded-full transition duration-300 inline-flex items-center"
              >
                Schedule Your Visit
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
