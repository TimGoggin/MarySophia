import { Helmet } from "react-helmet";
import { ChevronRight } from "lucide-react";
import CtaSection from "@/components/CtaSection";

export default function Counseling() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://lightofsophia.com/counseling" />
        <title>Spiritual Counseling | Sacred Healing with Mary Sophia</title>
        <meta
          name="description"
          content="Receive intuitive, heart-centered spiritual counseling from Mary Sophia. Support through loss, transitions, and sacred thresholds with divine feminine wisdom."
        />
        <meta
          name="keywords"
          content="spiritual counseling, healing support, divine feminine guidance, intuitive counseling, Mary Sophia, women's spiritual healing"
        />

        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="Spiritual Counseling | Sacred Healing with Mary Sophia"
        />
        <meta
          property="og:description"
          content="Heart-led spiritual support and intuitive healing from Mary Sophia. Sessions available via Zoom or in-person."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://lightofsophia.com/counseling"
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
            url: "https://lightofsophia.com/counseling",
            image: "https://lightofsophia.com/images/Mary_Sophia_v2.png",
            description:
              "Mary Sophia offers spiritual counseling and intuitive healing rooted in divine feminine wisdom. Sessions address grief, loss, transition, motherhood, and spiritual awakening. Held via Zoom or in-person.",
            openingHours: "Mo-Fr 09:00-17:00",
            areaServed: {
              "@type": "Place",
              name: ["Online", "Worldwide", "United States"],
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Spiritual Counseling Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Initial Session",
                    description:
                      "60-minute spiritual counseling session for new clients.",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      priceCurrency: "USD",
                      price: 175,
                    },
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Continuing Session",
                    description:
                      "60-minute follow-up spiritual counseling session.",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      priceCurrency: "USD",
                      price: 144,
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
            src="/images/dovebackground.jpeg"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="wavy-gradient"></div>
        </div>
        <div className="relative z-20 w-full">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-dancing-script text-5xl md:text-6xl text-white mb-4 drop-shadow-lg">
              Spiritual Counseling
            </h1>
            <p className="text-white font-open-sans text-lg max-w-2xl mx-auto drop-shadow-lg">
              Healing Through Life's Sacred Thresholds ~ A Return to Love and
              Life
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white pt-8 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
            <div className="md:w-1/3">
              <div className="relative">
                <img
                  src="/images/newMary3.jpg"
                  alt="Mary Sophia"
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="space-y-12">
                  <div className="space-y-6">
                    <p className="text-gray-700 font-open-sans leading-relaxed">
                      You are born whole. Your wholeness is your true nature. It
                      is as natural to you as it is to all creation.
                    </p>

                    <p className="text-gray-700 font-open-sans leading-relaxed">
                      As women, we are taught to struggle against our true
                      nature. We repress our emotions, shame our bodies, hide
                      our sexuality and live out old patterns in our
                      relationships. We attempt to live in a world that is
                      absent of the rhythms and cycles of nature, a world absent
                      of the feminine. We forget who we truly are because we are
                      too busy trying to be what everyone wants us to be.
                    </p>

                    <p className="text-gray-700 font-open-sans leading-relaxed">
                      This creates stress, illness, depression and anxiety as we
                      find ourselves living a life that is not truly ours.
                      Eventually life will assist us and what often feels like a
                      breakdown, a loss or a challenging transition is actually
                      a breakthrough that is guiding us to our liberation and to
                      live a more authentic life. We begin a process of
                      awakening to our True Nature.
                    </p>

                    <p className="text-gray-700 font-open-sans leading-relaxed">
                      Our prayer is to assist you in this awakening process, to
                      hold you in the darkness and uncertainty of transitional
                      times and to teach you how to utilize your innate gifts to
                      help you to navigate your life and relationships. When we
                      learn how to use our intuition, to listen to our feelings,
                      to honor the wisdom of our bodies and to align with our
                      innate rhythms and cycles, a new way of living is
                      possible. A way that is built on the foundation of our own
                      wisdom and knowing, rather than on old beliefs that were
                      never really ours.As we remember our wholeness, we
                      remember that we are love itself — and it is through this
                      loving nature that true healing begins.
                    </p>

                    <p className="text-gray-700 font-open-sans leading-relaxed">
                      Healing is possible. Peace is possible. A life of joy,
                      connection, and ease is possible.
                    </p>

                    <p className="text-gray-700 font-open-sans leading-relaxed">
                      It all lives within you. And when you claim it, your true
                      nature will rise to meet you — whole, radiant, and free.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width sections start here */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div>
              <h2 className="font-playfair text-2xl text-[#002147] mb-8 text-center">
                Areas of Support
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                      <div className="bg-white border border-[#B58233] overflow-hidden h-full">
                        <div className="p-6 flex flex-col h-full">
                          <div className="text-center">
                            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                              <img
                                src="/icons/rose.svg"
                                alt="Rose"
                                className="w-16 h-16"
                              />
                            </div>
                            <h3 className="font-playfair text-xl text-[#003864] mb-4">
                              Love
                            </h3>
                            <ul className="text-gray-600 mb-6 font-open-sans space-y-2">
                              <li>Relationships</li>
                              <li>Dating</li>
                              <li>Sexuality</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-[#B58233] overflow-hidden h-full">
                        <div className="p-6 flex flex-col h-full">
                          <div className="text-center">
                            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                              <img
                                src="/icons/angel.svg"
                                alt="Angel"
                                className="w-16 h-16"
                              />
                            </div>
                            <h3 className="font-playfair text-xl text-[#003864] mb-4">
                              Loss
                            </h3>
                            <ul className="text-gray-600 mb-6 font-open-sans space-y-2">
                              <li>Miscarriage</li>
                              <li>Abortion</li>
                              <li>Divorce</li>
                              <li>Loss of a Loved One</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-[#B58233] overflow-hidden h-full">
                        <div className="p-6 flex flex-col h-full">
                          <div className="text-center">
                            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                              <img
                                src="/icons/dove.svg"
                                alt="Dove"
                                className="w-16 h-16"
                              />
                            </div>
                            <h3 className="font-playfair text-xl text-[#003864] mb-4">
                              Life
                            </h3>
                            <ul className="text-gray-600 mb-6 font-open-sans space-y-2">
                              <li>Marriage</li>
                              <li>Motherhood</li>
                              <li>Menopause</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sessions section - full width */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-2xl text-[#002147] mb-6 text-center">
              Spiritual Counseling and Intuitive Healing Sessions
            </h2>
            <p className="text-gray-700 font-open-sans mb-8 text-center">
              Sessions are available in person and over Zoom.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-[#002147]/20">
                <h3 className="font-playfair text-xl text-[#002147] mb-4">
                  Initial Session
                </h3>
                <div className="text-3xl font-playfair text-[#002147] mb-4">
                  $175
                </div>
                <p className="text-gray-600 mb-6">90 minutes</p>
                <a
                  href="https://sacred-rose.teachable.com/purchase?product_id=6251586"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#002147] hover:bg-[#D4AF37] text-white text-center py-3 px-6 rounded-md transition duration-300"
                >
                  Book Initial Session
                </a>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border border-[#002147]/20">
                <h3 className="font-playfair text-xl text-[#002147] mb-4">
                  Continuing Sessions
                </h3>
                <div className="text-3xl font-playfair text-[#002147] mb-4">
                  $144
                </div>
                <p className="text-gray-600 mb-6">60 minutes</p>
                <a
                  href="https://sacred-rose.teachable.com/purchase?product_id=6203591"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#002147] hover:bg-[#D4AF37] text-white text-center py-3 px-6 rounded-md transition duration-300"
                >
                  Book Continuing Session
                </a>
              </div>
            </div>
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
