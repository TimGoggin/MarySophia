import { Helmet } from "react-helmet";
import { ChevronRight } from "lucide-react";
import CtaSection from "@/components/CtaSection";

export default function Order() {
  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href="https://lightofsophia.com/order-of-the-blue-rose"
        />
        <title>
          Order of the Blue Rose | Sacred Sisterhood & Divine Remembrance
        </title>
        <meta
          name="description"
          content="Join the Order of the Blue Rose — a sacred lineage and spiritual sisterhood rooted in Divine Love, remembrance, and the embodiment of the Divine Feminine."
        />
        <meta
          name="keywords"
          content="Order of the Blue Rose, divine sisterhood, sacred lineage, Mary Sophia, spiritual mentorship, blue rose priestess path"
        />

        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="Order of the Blue Rose | Sacred Sisterhood & Divine Remembrance"
        />
        <meta
          property="og:description"
          content="Walk the path of Divine Love and sacred embodiment with Mary Sophia and the Order of the Blue Rose. Enrollment open for mentorship programs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lightofsophia.com/order" />
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
            url: "https://lightofsophia.com/order",
            image: "https://lightofsophia.com/images/Mary_Sophia_v2.png",
            description:
              "The Order of the Blue Rose is a sacred spiritual lineage and community led by Mary Sophia, guiding women to embody Divine Love and wisdom. Through mentorship, remembrance, and sacred teachings, members walk the Way of Mary and the Divine Feminine.",
            openingHours: "Mo-Fr 09:00-17:00",
            areaServed: {
              "@type": "Place",
              name: ["Online", "Worldwide", "United States"],
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Order of the Blue Rose Offerings",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Blue Rose Mentorship Program",
                    description:
                      "A transformational spiritual mentorship program rooted in sacred sisterhood and Divine Feminine embodiment.",
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
            src="/images/bluerosebackground.jpeg"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="wavy-gradient"></div>
        </div>
        <div className="relative z-20 w-full">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-dancing-script text-5xl md:text-6xl text-white mb-4 drop-shadow-lg">
              Order of the Blue Rose
            </h1>
            <p className="text-white font-open-sans text-lg max-w-2xl mx-auto drop-shadow-lg">
              A Sacred Lineage of Divine Love and Wisdom
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white py-16 pt-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
            <div className="md:w-1/3 md:sticky md:top-32">
              <img
                src="/images/newMary4.jpg"
                alt="Mary Sophia"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-2/3">
              <div className="space-y-12">
                <div>
                  <h2 className="font-playfair text-3xl text-[#002147] mb-4">
                    Welcome to the Order of the Blue Rose
                  </h2>
                  <p className="text-gray-700 font-open-sans leading-relaxed mb-6">
                    The Order of the Blue Rose is a sacred Lineage of Light — a
                    living frequency that holds the wisdom of the truly awakened
                    heart. It originated through Mother Mary and Mary Magdalene,
                    who carried forth the pure teachings of Christ through the
                    embodied path of love.
                  </p>

                  <p className="text-gray-700 font-open-sans leading-relaxed mb-6">
                    This lineage is not bound by religion or doctrine. It is a
                    path of remembrance — of truth, of healing, of the Feminine
                    Face of God — and it continues to awaken through those who
                    are called to carry the Blue Rose within.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h4 className="text-[#002147] font-playfair text-lg mb-4">
                      The Order of the Blue Rose represents:
                    </h4>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700 font-open-sans">
                      <li>
                        An ancient lineage of Light Bearers who have carried the
                        Christ frequencies through the ages
                      </li>
                      <li>
                        A sacred path of embodied spiritual awakening and divine
                        service
                      </li>
                      <li>
                        The mystical teachings of Mother Mary and Mary Magdalene
                      </li>
                      <li>
                        A sisterhood devoted to anchoring Heaven on Earth
                        through the awakened heart
                      </li>
                    </ul>
                  </div>

                  <p className="text-gray-700 font-open-sans leading-relaxed mb-6">
                    The Order of the Blue Rose holds the devoted hearts of the
                    Holy Family’s most faithful followers — those who carried
                    the Christ Message not by words alone, but through pure
                    embodiment. They did not merely speak of love; they became
                    it. They anchored the frequencies of Divine Truth within
                    their beings and lived as the Heart of God on Earth.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h4 className="text-[#002147] font-playfair text-lg mb-4">
                      Members of the Order:
                    </h4>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700 font-open-sans">
                      <li>
                        Embody the Christ frequencies through daily spiritual
                        practice
                      </li>
                      <li>Serve as vessels of Divine Love and Wisdom</li>
                      <li>Walk the mystical path of the heart</li>
                      <li>
                        Carry forward the living teachings through direct
                        embodiment
                      </li>
                    </ul>
                  </div>

                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    This is a process of becoming Fully Human through the
                    Embodiment of One's True Nature. A spiritual alignment that
                    occurs within the Heart. As we become One Being, One Heart,
                    One Will we transmit these frequencies through our own
                    Immaculate Alignment and as Mary has said "are able to turn
                    hearts to Good".
                  </p>

                  <div className="text-center italic font-playfair text-xl text-[#002147] my-12">
                    It is time for those of us who hold the frequency of the
                    Blue Rose to step forward and to come together once again.
                  </div>

                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    You know if you do. Your heart will sing the song of the
                    Blue Rose.
                  </p>

                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    This song doesn't come through words as those of us who
                    carry this frequency can at times be challenged by finding
                    words to express its purity and simplicity.
                  </p>

                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    It comes through the wholeness of our soul, the purity of
                    our heart and the quiet knowing that you are the Heart of
                    God, here to be a vessel of Divine Love.
                  </p>

                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    I say this with the deepest humility, reverence, and
                    respect. For those who walk the Way of Mary know this is not
                    the easy path — and yet, it is the only path our soul truly
                    knows.
                  </p>

                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    I am here to walk beside you on this sacred journey. As a
                    Priestess of Avalon, an Ordained Priestess of Mary
                    Magdalene, and an Initiated Member of the Order of the Blue
                    Rose, I have walked this path for as long as my soul can
                    remember.
                  </p>

                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    For it is a remembering — one that lives within you. The
                    wisdom and teachings of the Blue Rose are already seeded
                    within your sacred heart. I am simply here to help you
                    awaken them.
                  </p>

                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    With grace, devotion, and deep faith, I offer what I have
                    embodied — and continue to embody — as I walk the Way of
                    Mary, the foundational path of the Order of the Blue Rose.
                  </p>

                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    It is my sacred commitment to walk with you as you remember
                    the Blue Rose within, fully embody your Original Essence,
                    and live as the Heart of God on Earth.
                  </p>

                  <div className="text-center italic font-playfair text-xl text-[#002147] my-12">
                    The blue rose is blooming within your Sacred Heart, as we anchor the Feminine Face of God on earth once again.
                  </div>

                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    Welcome home, dear sister! Our time is now.
                  </p>

                  <div className="mt-12 text-right">
                    <p className="text-gray-700 font-open-sans mb-4">
                      In Her Holy Grace,
                    </p>
                    <p className="font-dancing-script text-2xl text-[#002147]">
                      Mary Sophia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-[#002147] py-16 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-6">
            Sacred Mentorship Program
          </h2>
          <p className="max-w-2xl mx-auto text-white/90 mb-8 font-open-sans">
            Join our transformative mentorship program beginning September 2025.
            Walk the mystical path with guidance and support from the Order of
            the Blue Rose.
          </p>
          <a
            href="https://docs.google.com/forms/d/1s___vHqdD-g-ulsrDfHRuRnNf6YA2Qjg_hP-gA23zB0/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#D4AF37] hover:bg-[#B58233] text-white py-3 px-8 rounded-md transition duration-300 font-semibold"
          >
            Join the Waitlist
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
      <CtaSection
        buttonText="Book Now"
        linkTo="https://sacred-rose.teachable.com/purchase?product_id=6140178"
        isExternal={true}
      />
    </>
  );
}
