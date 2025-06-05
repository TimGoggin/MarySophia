import { Helmet } from "react-helmet";

export default function School() {
  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href={`${window.location.origin}/school`}
        />
        <title>School of Sophia | Divine Feminine Spiritual Formation</title>
        <meta
          name="description"
          content="Explore sacred teachings through the School of Sophia — a path of spiritual growth rooted in Divine Feminine wisdom, sacred ritual, and embodiment practices."
        />
        <meta
          name="keywords"
          content="School of Sophia, spiritual formation, divine feminine school, sacred wisdom teachings, Mary Magdalene practices, blue rose lineage"
        />

        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="School of Sophia | Divine Feminine Spiritual Formation"
        />
        <meta
          property="og:description"
          content="Join the School of Sophia to deepen your spiritual path through ancient feminine mysteries and contemporary sacred practice."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${window.location.origin}/school`}
        />
        <meta
          property="og:image"
          content={`${window.location.origin}/images/Mary_Sophia_v2.png`}
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Mary Sophia",
            url: `${window.location.origin}/school`,
            image: `${window.location.origin}/images/Mary_Sophia_v2.png`,
            description:
              "The School of Sophia is a spiritual formation path guided by Mary Sophia. Rooted in Divine Feminine wisdom, it includes classes, circles, book clubs, and sacred practices to awaken, embody, and share the feminine light.",
            openingHours: "Mo-Fr 09:00-17:00",
            areaServed: {
              "@type": "Place",
              name: ["Online", "Worldwide", "United States"],
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "School of Sophia Programs",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Weekly Magdalene Voice Class",
                    description:
                      "Weekly embodiment classes rooted in the wisdom of Mary Magdalene.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Blue Rose Circle",
                    description:
                      "Monthly spiritual circles exploring the mysteries of the Blue Rose lineage.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Sacred Prayer Group",
                    description:
                      "Devotional prayer gatherings for spiritual grounding and divine connection.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Wisdom Book Club",
                    description:
                      "Monthly group reflection on sacred texts and divine feminine themes.",
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
            className="w-full h-full object-cover"
          />
          <div className="wavy-gradient"></div>
        </div>
        <div className="relative z-20 w-full">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-dancing-script text-5xl md:text-6xl text-white mb-4 drop-shadow-lg">
              School of Sophia
            </h1>
            <p className="text-white font-open-sans text-lg max-w-2xl mx-auto drop-shadow-lg">
              A Sacred Path of Spiritual Formation Through Divine Feminine
              Wisdom
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white py-16 pt-48 relative">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="space-y-12">
            <div>
              <h2 className="font-playfair text-2xl text-[#00AEEF] mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 font-open-sans leading-relaxed">
                The School of Sophia is a transformative path of spiritual
                formation deeply rooted in the Divine Feminine wisdom
                traditions. Here, seekers find guidance toward awakening their
                inner wisdom and embracing the sacred feminine through teachings
                that bridge ancient mysteries with contemporary understanding.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-[#00AEEF] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 font-open-sans leading-relaxed">
                We are dedicated to awakening the wisdom of Sophia in each
                heart, fostering spiritual growth through feminine mysticism,
                and cultivating a deep connection with divine love. Our
                teachings welcome all souls seeking to embrace the sacred
                feminine wisdom tradition.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-[#00AEEF] mb-4">
                Core Teachings
              </h2>
              <ul className="list-none space-y-3 text-gray-700 font-open-sans">
                <li className="flex items-center">
                  <span className="text-[#00AEEF] mr-2">•</span>
                  Sacred Feminine Mysteries and Wisdom Traditions
                </li>
                <li className="flex items-center">
                  <span className="text-[#00AEEF] mr-2">•</span>
                  Heart-Centered Spiritual Practices and Sacred Rituals
                </li>
                <li className="flex items-center">
                  <span className="text-[#00AEEF] mr-2">•</span>
                  Divine Feminine Embodiment and Soul Work
                </li>
                <li className="flex items-center">
                  <span className="text-[#00AEEF] mr-2">•</span>
                  Living the Way of Sacred Love
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-[#00AEEF] mb-4">
                Regular Offerings
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-playfair text-xl text-[#00AEEF] mb-3">
                    Weekly Magdalene Yoga
                  </h3>
                  <p className="text-gray-700 font-open-sans mb-4">
                    Join us every week for sacred movement and embodiment
                    practices that connect you with the divine feminine wisdom
                    of Mary Magdalene.
                  </p>
                  <a
                    href="https://sacred-rose.teachable.com/l/pdp/magdalene-yoga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#002147] hover:bg-[#D4AF37] text-white py-2 px-4 rounded-md transition duration-300"
                  >
                    Join Next Class
                  </a>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-playfair text-xl text-[#00AEEF] mb-3">
                    Monthly Blue Rose Circle
                  </h3>
                  <p className="text-gray-700 font-open-sans mb-4">
                    Gather in sacred sisterhood each month to deepen your
                    connection with the mysteries of the Blue Rose lineage.
                  </p>
                  <a
                    href="http://sacred-rose.teachable.com/l/pdp/blue-rose-circles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#002147] hover:bg-[#D4AF37] text-white py-2 px-4 rounded-md transition duration-300"
                  >
                    Join Circle
                  </a>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-playfair text-xl text-[#00AEEF] mb-3">
                    Sacred Prayer Group
                  </h3>
                  <p className="text-gray-700 font-open-sans mb-4">
                    Come together monthly in devotional prayer and meditation,
                    strengthening our connection to the divine through
                    collective practice.
                  </p>
                  <a
                    href="https://sacred-rose.teachable.com/l/pdp/sacred-prayer-group"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#002147] hover:bg-[#D4AF37] text-white py-2 px-4 rounded-md transition duration-300"
                  >
                    Join Prayer Group
                  </a>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-playfair text-xl text-[#00AEEF] mb-3">
                    Wisdom Book Club
                  </h3>
                  <p className="text-gray-700 font-open-sans mb-4">
                    Explore sacred texts and spiritual writings together in our
                    monthly gathering, deepening our understanding through
                    shared reflection.
                  </p>
                  <a
                    href="https://sacred-rose.teachable.com/l/pdp/wisdom-book-club"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#002147] hover:bg-[#D4AF37] text-white py-2 px-4 rounded-md transition duration-300"
                  >
                    Join Book Club
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-[#00AEEF] mb-4">
                Sacred Community
              </h2>
              <p className="text-gray-700 font-open-sans leading-relaxed">
                Join our circle of seekers gathering in sacred community for
                spiritual practice, study, and celebration. Experience the
                transformative power of feminine wisdom shared in devoted
                sisterhood.
              </p>
            </div>

            <div className="bg-[#002147] text-white rounded-lg p-12 text-center relative overflow-hidden">
              <div className="wavy-gradient opacity-40"></div>
              <div className="relative z-10">
                <h2 className="font-playfair text-3xl mb-4">
                  Begin Your Journey
                </h2>
                <p className="mb-8 max-w-2xl mx-auto">
                  Take the first step on your sacred journey with the School of
                  Sophia.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center bg-[#00AEEF] text-white px-6 py-3 rounded-md hover:bg-[#0096CE] transition-colors"
                >
                  Contact Us to Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
