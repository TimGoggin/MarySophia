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
          
          return (
            <div
              key={i}
              className="floating-rose"
              style={{
                backgroundImage: `url(/src/images/rose-${(i % 3) + 1}.png)`,
                animationDelay: `${baseDelay + Math.random() * 5}s`,
                left: `${(gridCol * 33) + Math.random() * 10}%`,
                top: `${(gridRow * 25) + Math.random() * 10}%`,
                opacity: 0,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          );
        })}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h2 className="font-playfair text-3xl text-[#00AEEF] mb-6">
              Meet Mary Sophia
            </h2>
            <p className="text-gray-700 mb-4 font-open-sans">
              Mary Sophia serves as both your spiritual compass and sacred guide
              on your transformative journey through the Blue Rose Temple
              Membership. As a Messenger for the Holy Mother and an Emissary for
              the Light Beings of the Order of the Blue Rose, she possesses a
              divine frequency that resonates with the deepest layers of your
              soul. A mystic, High Priestess of Avalon, and an Initiated Member
              of the Order of the Blue Rose, her embodied experience of the
              Divine Mother and Feminine Christ guides you beyond mere learning
              into the realm of soulful embodiment. Her profound teachings go
              beyond traditional spiritual frameworks, offering not just wisdom
              but transformative experiences.
            </p>
            <p className="text-gray-700 mb-4 font-open-sans">
              Through her Order of the Blue Rose, she supports spiritual
              seekers, team healers, lightworkers, and the establishment of
              Divine Feminine energy on Earth. With compassion and deep wisdom,
              she offers divine guidance to help others remember their Original
              Essence and live their soul's purpose.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center bg-transparent hover:bg-[#00AEEF] text-[#00AEEF] hover:text-white py-2 px-6 border border-[#00AEEF] hover:border-transparent rounded-full transition duration-300 mt-6"
            >
              Learn More
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/src/images/mary-sophia.jpg"
              alt="Mary Sophia Portrait"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
