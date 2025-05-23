import { Helmet } from "react-helmet";
import { ChevronRight } from "lucide-react";
import CtaSection from "@/components/CtaSection";
export default function BlueRoseReadings() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.lightofsophia.com/readings" />
        <title>Private Readings | Mary Sophia</title>
        <meta
          name="description"
          content="Receive sacred, channeled guidance from Mary Sophia through Private Readings. Explore your soul purpose, past lives, and spiritual awakening with loving support from the Divine Mother and Angelic Realm."
        />
        <meta
          name="keywords"
          content="Private readings, channeled guidance, soul purpose, past life readings, spiritual awakening, Mary Sophia, divine feminine, Blue Rose Readings, angelic guidance, intuitive readings"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mary Sophia",
            url: "https://www.lightofsophia.com/readings",
            image: "https://www.lightofsophia.com/images/newMary2.jpg",
            description:
              "Mary Sophia offers sacred, channeled Private Readings that bring through soul wisdom, past life connections, and spiritual guidance from Mother Mary, Mary Magdalene, and the Angelic Realm.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1456 Ferry Road #10",
              addressLocality: "Doylestown",
              addressRegion: "PA",
              postalCode: "18901",
              addressCountry: "US",
            },
            sameAs: [
              "https://www.instagram.com/orderofthebluerose/",
              "https://www.youtube.com/@orderofthebluerose3878",
            ],
            knowsAbout: [
              "Private Readings",
              "Channeled Guidance",
              "Soul Purpose",
              "Past Life Readings",
              "Spiritual Awakening",
              "Divine Feminine Wisdom",
            ],
          })}
        </script>
      </Helmet>

      <section className="relative min-h-[40vh] flex items-center pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/angelbackground.jpeg"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="wavy-gradient"></div>
        </div>
        <div className="relative z-20 w-full">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-dancing-script text-5xl md:text-6xl text-white mb-4 drop-shadow-lg">
              Private Readings
            </h1>
            <p className="text-white font-open-sans text-lg max-w-2xl mx-auto drop-shadow-lg">
              Channeled Soul Wisdom from the Heart of the Divine Mother
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white py-16 pt-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="md:w-1/3">
              <img
                src="/images/newMary2.jpg"
                alt="Mary Sophia"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <div className="space-y-12">
                <div>
                  <h2 className="font-playfair text-2xl text-[#002147] mb-4">
                    Sacred Guidance for Your Soul Journey
                  </h2>
                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    Receive divine guidance and soul remembrance through a deep,
                    loving transmission from Mother Mary, Mary Magdalene, and
                    the Angelic Realm. These readings illuminate your soul
                    gifts, past life connections, and offer wisdom for the path
                    unfolding before you.
                  </p>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl text-[#002147] mb-4">
                    What to Expect
                  </h2>
                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    Each reading is a sacred space where divine wisdom flows
                    through to address your deepest questions and soul longings.
                    Through channeled messages, you'll receive clarity,
                    guidance, and healing insights tailored to your unique
                    journey. Blue Rose Readings are 60 minutes over Zoom. You
                    will receive both a video recording and an audio recording
                    immediately after the reading.
                  </p>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl text-[#002147] mb-4">
                    Areas of Guidance
                  </h2>
                  <ul className="list-none space-y-3 text-gray-700 font-open-sans">
                    <li className="flex items-center">
                      <span className="text-[#002147] mr-2">•</span>
                      Soul Purpose & Life Path
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#002147] mr-2">•</span>
                      Past Life Connections
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#002147] mr-2">•</span>
                      Spiritual Growth & Awakening
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#002147] mr-2">•</span>
                      Divine Feminine Wisdom
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#002147] mr-2">•</span>
                      Life Transitions & Healing
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-gray-700 font-open-sans leading-relaxed italic mt-8 border-l-4 border-[#002147] pl-4">
                    Please note that the Angels and Ascended Masters cannot tell
                    the future. They can provide guidance and wisdom that will
                    assist you on your journey. Think of it like you are
                    receiving advice from your most trusted friends who can
                    shine a light onto your path.
                  </p>
                </div>

                <div className="mt-12">
                  <div className="bg-white p-8 rounded-lg shadow-lg border border-[#002147]/20 max-w-lg mx-auto">
                    <h3 className="font-playfair text-2xl text-[#002147] mb-4 text-center">
                      Blue Rose Reading
                    </h3>
                    <div className="text-3xl font-playfair text-[#002147] mb-4 text-center">
                      $155
                    </div>
                    <p className="text-gray-600 mb-6 text-center">
                      60 minutes via Zoom
                    </p>
                    <a
                      href="https://checkout.teachable.com/secure/1018167/checkout/order_qn7199k6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#002147] hover:bg-[#D4AF37] text-white text-center py-3 px-6 rounded-md transition duration-300"
                    >
                      Book Your Reading
                    </a>
                  </div>
                </div>

                <div className="mt-8"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="floating-roses-container">
          {[...Array(15)].map((_, i) => {
            const gridRow = Math.floor(i / 3);
            const gridCol = i % 3;
            const baseDelay = (gridRow * 3 + gridCol) * 2;

            return (
              <div
                key={`readings-rose-${i}`}
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
      </div>
      <CtaSection
        buttonText="Book Now"
        linkTo="https://sacred-rose.teachable.com/purchase?product_id=6140178"
        isExternal={true}
      />
    </>
  );
}
