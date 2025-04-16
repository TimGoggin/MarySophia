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
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-playfair text-3xl md:text-4xl text-[#00AEEF] mb-6">
          Join Our Monthly Prayer Circle
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-8 font-open-sans">
          Connect with our community and receive sacred teachings through our
          live monthly prayer circle.
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
    </section>
  );
}
