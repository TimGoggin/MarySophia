import { Helmet } from "react-helmet";
import { ChevronRight } from "lucide-react";
import CtaSection from "@/components/CtaSection";
export default function BlueRoseReadings() {
  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href="https://lightofsophia.com/private-readings"
        />
        <title>
          Private Readings | Channeled Divine Guidance with Mary Sophia
        </title>
        <meta
          name="description"
          content="Receive sacred soul guidance with Mary Sophia. Her private readings offer divine messages from the Mother and the Angelic Realms to support your spiritual journey."
        />
        <meta
          name="keywords"
          content="private spiritual readings, intuitive guidance, divine feminine messages, Blue Rose Reading, Mary Sophia, soul path reading"
        />

        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="Private Readings | Channeled Divine Guidance with Mary Sophia"
        />
        <meta
          property="og:description"
          content="Receive sacred wisdom and soul remembrance through private channeled readings with Mary Sophia. Sessions available by Zoom."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://lightofsophia.com/private-readings"
        />
        <meta
          property="og:image"
          content="https://lightofsophia.com/images/Mary_Sophia_v2.png"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Mary Sophia",
            url: "https://lightofsophia.com/private-readings",
            image: "https://lightofsophia.com/images/Mary_Sophia_v2.png",
            description:
              "Mary Sophia offers private spiritual readings—channeled guidance from the Divine Mother and angelic realms to illuminate your soul purpose and path. Sessions are held via Zoom and include a recording.",
            openingHours: "Mo-Fr 09:00-17:00",
            areaServed: {
              "@type": "Place",
              name: ["Online", "Worldwide", "United States"],
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Private Reading Offerings",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Blue Rose Reading",
                    description:
                      "60-minute channeled reading via Zoom with soul guidance from Mary Sophia.",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      priceCurrency: "USD",
                      price: 175,
                    },
                  },
                },
              ],
            },
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
              Channeled wisdom from the heart of the Divine Mother ~ illuminating your path with love, remembrance and grace.
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
                      $175
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
