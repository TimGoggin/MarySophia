import { Helmet } from "react-helmet";

export default function School() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.lightofsophia.com/school" />
        <title>School of Sophia | Mary Sophia</title>
        <meta
          name="description"
          content="Join the School of Sophia with Mary Sophia — a transformative spiritual path rooted in Divine Feminine wisdom. Explore sacred teachings, heart-centered practices, and a vibrant sisterhood."
        />
        <meta
          name="keywords"
          content="School of Sophia, Mary Sophia, Divine Feminine, spiritual formation, feminine mysticism, sacred teachings, spiritual practices, Magdalene yoga, Blue Rose Circle, sacred community"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "School of Sophia",
            url: "https://www.lightofsophia.com/school",
            image: "https://www.lightofsophia.com/images/lambbackground.jpeg",
            description:
              "The School of Sophia, guided by Mary Sophia, offers a sacred path of spiritual formation through Divine Feminine wisdom, sacred practices, and community offerings like Magdalene Yoga, Blue Rose Circle, and Wisdom Book Club.",
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
            founder: {
              "@type": "Person",
              name: "Mary Sophia",
            },
            keywords: [
              "Divine Feminine",
              "Spiritual Formation",
              "Sacred Practices",
              "Magdalene Yoga",
              "Blue Rose Circle",
              "Sacred Community",
            ],
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
