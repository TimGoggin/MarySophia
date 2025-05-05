import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white relative">
      <div className="floating-roses-container">
        {[...Array(15)].map((_, i) => {
          const gridRow = Math.floor(i / 3);
          const gridCol = i % 3;
          const baseDelay = (gridRow * 3 + gridCol) * 2;

          return <div key={i} className="bg-white" />;
        })}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12 bg-white/90 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="font-playfair text-3xl text-[#002147] mb-6">
              Meet Mary Sophia
            </h2>
            <p className="text-gray-700 mb-4 font-open-sans">
              Mary Sophia is an intuitive channel, spiritual counselor, and
              sacred teacher devoted to the awakening of the Sacred Feminine on
              Earth.
            </p>
            <p className="text-gray-700 mb-4 font-open-sans">
              She carries the lineage of the Christ Light, the Order of the Blue
              Rose, and the Light of Sophia, offering women a return to love,
              wholeness, and soul remembrance through channeled guidance,
              intuitive healing, sacred wisdom, and deep heart presence.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center bg-[#002147] hover:bg-[#D4AF37] text-white py-2 px-6 rounded-md transition duration-300 mt-6"
            >
              Learn More About Mary Sophia
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/images/mary-sophia.jpg"
              alt="Mary Sophia Portrait"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
