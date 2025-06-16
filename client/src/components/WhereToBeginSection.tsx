
import { Link } from "react-router-dom";

export default function WhereToBeginSection() {
  return (
    <section className="bg-gray-50 py-16 relative">
      <div className="floating-roses-container">
        {[...Array(12)].map((_, i) => {
          const gridRow = Math.floor(i / 3);
          const gridCol = i % 3;
          const baseDelay = (gridRow * 3 + gridCol) * 2.5;

          return (
            <div 
              key={`begin-rose-${i}`} 
              className="bg-white"
              style={{
                animationDelay: `${baseDelay}s`,
                backgroundImage: `url(/images/rose-${(i % 3) + 1}.png)`,
                left: `${(i % 3) * 33 + Math.random() * 15}%`,
                top: `${Math.floor(i / 4) * 30 + Math.random() * 15}%`,
                opacity: 0,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          );
        })}
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-playfair text-3xl md:text-4xl text-[#003864] mb-6">
          Where to Begin
        </h2>
        <p className="max-w-3xl mx-auto text-[#003864] mb-12 font-open-sans text-lg">
          Beloved, if you've found your way here, you are answering the quiet call of your soul.
          <br />
          <br />
          Whether you're seeking clarity, healing, or simply a return to your true self, you are held here.
        </p>
        
        <div className="max-w-4xl mx-auto space-y-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6 text-left">
            <div className="flex-1">
              <p className="text-[#003864] font-open-sans text-lg">
                🌹 If you feel ready to receive soul guidance and remembrance →
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/readings"
                className="bg-[#003864] hover:bg-[#D4AF37] text-white font-semibold py-3 px-6 rounded-md transition duration-300 inline-block"
              >
                Explore a Blue Rose Reading
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 text-left">
            <div className="flex-1">
              <p className="text-[#003864] font-open-sans text-lg">
                🌹 If you're navigating loss, transition, or rebirth →
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/counseling"
                className="bg-[#003864] hover:bg-[#D4AF37] text-white font-semibold py-3 px-6 rounded-md transition duration-300 inline-block"
              >
                Discover Spiritual Counseling
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 text-left">
            <div className="flex-1">
              <p className="text-[#003864] font-open-sans text-lg">
                🌹 If you're called to walk the Path of the Blue Rose →
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/order"
                className="bg-[#003864] hover:bg-[#D4AF37] text-white font-semibold py-3 px-6 rounded-md transition duration-300 inline-block"
              >
                Enter the Order of the Blue Rose
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 text-left">
            <div className="flex-1">
              <p className="text-[#003864] font-open-sans text-lg">
                🌹 If you're longing to study the sacred feminine and deepen in wisdom →
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/school"
                className="bg-[#003864] hover:bg-[#D4AF37] text-white font-semibold py-3 px-6 rounded-md transition duration-300 inline-block"
              >
                Visit the School of Sophia
              </Link>
            </div>
          </div>
        </div>

        <p className="max-w-3xl mx-auto text-[#003864] font-open-sans text-lg italic">
          Follow the whispers of your heart and allow your soul to guide you. Each step is sacred. Each path leads you home.
        </p>
      </div>
    </section>
  );
}
