import { ChevronRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section id="contact" className="py-16 bg-gray-50 relative">
      <div className="floating-roses-container">
        {[...Array(15)].map((_, i) => {
          const gridRow = Math.floor(i / 3);
          const gridCol = i % 3;
          const baseDelay = (gridRow * 3 + gridCol) * 2;

          return (
            <div
              key={i}
              className="bg-white"
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
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-playfair text-3xl md:text-4xl text-[#002147] mb-6">
          Receive Sacred Messages of Love and Wisdom
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-8 font-open-sans">
          Sign up to receive channeled transmissions from the Divine Mother,
          sacred teachings from the Order of the Blue Rose, and soul nourishment
          for your journey.
        </p>
        <a
          href="https://sacred-rose.teachable.com/purchase?product_id=6205554"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#002147] hover:bg-[#D4AF37] text-white py-3 px-8 rounded-full transition duration-300 inline-flex items-center"
        >
          Sign Up Here
          <ChevronRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
