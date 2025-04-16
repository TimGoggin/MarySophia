import { Helmet } from "react-helmet";

export default function Order() {
  return (
    <>
      <Helmet>
        <title>Order of the Blue Rose | Mary Sophia</title>
      </Helmet>

      <section className="relative min-h-[40vh] flex items-center pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/hero.jpeg"
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="wavy-gradient"></div>
        </div>
        <div className="relative z-20 w-full">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-4xl md:text-5xl text-white mb-4 drop-shadow-lg">
              Order of the Blue Rose
            </h1>
            <p className="text-white font-open-sans text-lg max-w-2xl mx-auto drop-shadow-lg">
              A Sacred Lineage of Divine Love and Wisdom
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white py-16 pt-16 relative">
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
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12"></div>

          <div className="space-y-12">
            <div>
              <h2 className="font-playfair text-2xl text-[#00AEEF] mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 font-open-sans leading-relaxed">
                The Order of the Blue Rose is a sacred lineage dedicated to
                embodying divine love and wisdom. We stand as guardians of
                ancient spiritual traditions, facilitating awakening and
                transformation through the divine feminine wisdom.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-[#00AEEF] mb-4">
                Historical Background
              </h2>
              <p className="text-gray-700 font-open-sans leading-relaxed">
                Rooted in ancient wisdom traditions, the Order carries forward
                the teachings of Mother Mary and Mary Magdalene. Through
                generations, we have preserved and transmitted sacred knowledge
                that bridges earthly existence with divine consciousness.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-[#00AEEF] mb-4">
                Core Teachings
              </h2>
              <ul className="list-none space-y-3 text-gray-700 font-open-sans">
                <li className="flex items-center">
                  <span className="text-[#00AEEF] mr-2">•</span>
                  Embodying the Wisdom of the Heart
                </li>
                <li className="flex items-center">
                  <span className="text-[#00AEEF] mr-2">•</span>
                  Alignment with Divine Nature
                </li>
                <li className="flex items-center">
                  <span className="text-[#00AEEF] mr-2">•</span>
                  Sacred Practices for Inner Transformation
                </li>
                <li className="flex items-center">
                  <span className="text-[#00AEEF] mr-2">•</span>
                  Connection with Divine Realms
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-[#00AEEF] mb-4">
                Membership & Community
              </h2>
              <p className="text-gray-700 font-open-sans leading-relaxed">
                Our community comprises seekers dedicated to the path of love,
                service, and spiritual growth. Through regular gatherings,
                mentorship programs, and sacred circles, we support each other's
                journey toward divine connection and inner peace.
              </p>
            </div>

            <div className="bg-[#002147] text-white rounded-lg p-12 text-center relative overflow-hidden">
              <div className="wavy-gradient opacity-40"></div>
              <div className="relative z-10">
                <h2 className="font-playfair text-3xl mb-4">
                  Join Our Sacred Journey
                </h2>
                <p className="mb-8 max-w-2xl mx-auto">
                  If you feel called to explore the ancient wisdom of the Blue
                  Rose, we welcome you to connect with our community.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center bg-[#00AEEF] text-white px-6 py-3 rounded-full hover:bg-[#0096CE] transition-colors"
                >
                  Connect With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
