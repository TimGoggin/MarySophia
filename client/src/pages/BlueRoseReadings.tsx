import { Helmet } from "react-helmet";
import { ChevronRight } from "lucide-react";
export default function BlueRoseReadings() {
  return (
    <>
      <Helmet>
        <title>Private Readings | Mary Sophia</title>
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
              Private Readings
            </h1>
            <p className="text-white font-open-sans text-lg max-w-2xl mx-auto drop-shadow-lg">
              Channeled Soul Wisdom from the Heart of the Divine Mother
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white py-16 pt-32 relative">
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
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="space-y-12">
            <div>
              <h2 className="font-playfair text-2xl text-[#00AEEF] mb-4">
                Sacred Guidance for Your Soul Journey
              </h2>
              <p className="text-gray-700 font-open-sans leading-relaxed">
                Receive divine guidance and soul remembrance through a deep,
                loving transmission from Mother Mary, Mary Magdalene, and the
                Angelic Realm. These readings illuminate your soul gifts, past
                life connections, and offer wisdom for the path unfolding before
                you.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-[#00AEEF] mb-4">
                What to Expect
              </h2>
              <p className="text-gray-700 font-open-sans leading-relaxed">
                Each reading is a sacred space where divine wisdom flows through
                to address your deepest questions and soul longings. Through
                channeled messages, you'll receive clarity, guidance, and
                healing insights tailored to your unique journey.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-[#00AEEF] mb-4">
                Areas of Guidance
              </h2>
              <ul className="list-none space-y-3 text-gray-700 font-open-sans">
                <li className="flex items-center">
                  <span className="text-[#00AEEF] mr-2">•</span>
                  Soul Purpose & Life Path
                </li>
                <li className="flex items-center">
                  <span className="text-[#00AEEF] mr-2">•</span>
                  Past Life Connections
                </li>
                <li className="flex items-center">
                  <span className="text-[#00AEEF] mr-2">•</span>
                  Spiritual Growth & Awakening
                </li>
                <li className="flex items-center">
                  <span className="text-[#00AEEF] mr-2">•</span>
                  Divine Feminine Wisdom
                </li>
                <li className="flex items-center">
                  <span className="text-[#00AEEF] mr-2">•</span>
                  Life Transitions & Healing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
          <h2 className="font-playfair text-3xl md:text-4xl text-[#739EBF] mb-6">
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
            className="bg-[#00AEEF] hover:bg-[#D4AF37] text-white py-3 px-8 rounded-full transition duration-300 inline-flex items-center"
          >
            Schedule Your Visit
            <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
