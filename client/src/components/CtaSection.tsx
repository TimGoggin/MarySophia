import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CtaSectionProps {
  buttonText?: string;
  linkTo?: string;
  isExternal?: boolean;
}

export default function CtaSection({ 
  buttonText = "Get Started", 
  linkTo = "/contact",
  isExternal = false 
}: CtaSectionProps) {
  const ButtonContent = () => (
    <>
      {buttonText}
      <ChevronRight className="ml-2 h-4 w-4" />
    </>
  );

  return (
    <section id="contact" className="py-16 bg-gray-50 relative">
      <div className="floating-roses-container">
        {[...Array(15)].map((_, i) => {
          const gridRow = Math.floor(i / 3);
          const gridCol = i % 3;
          const baseDelay = (gridRow * 3 + gridCol) * 2;

          return (
            <div
              key={`cta-rose-${i}`}
              className="bg-white"
              style={{
                backgroundImage: `url(/images/rose-${(i % 3) + 1}.png)`,
                left: `${(i % 3) * 33 + Math.random() * 10}%`,
                top: `${Math.floor(i / 3) * 25 + Math.random() * 10}%`,
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
        <p className="max-w-2xl mx-auto text-gray-600 mb-8 font-open-sans">
          Sign up to receive channeled transmissions from the Divine Mother, sacred teachings from the Order of the Blue Rose, and soul nourishment for your journey.
        </p>
        {isExternal ? (
          <a
            href={linkTo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#00ACEE] hover:bg-[#D4AF37] text-white py-2 px-6 rounded-md transition duration-300"
          >
            <ButtonContent />
          </a>
        ) : (
          <Link
            to={linkTo}
            className="inline-flex items-center bg-[#00ACEE] hover:bg-[#D4AF37] text-white py-2 px-6 rounded-md transition duration-300"
          >
            <ButtonContent />
          </Link>
        )}
      </div>
    </section>
  );
}