import { Helmet } from "react-helmet";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import CtaSection from "../components/CtaSection";

export default function Services() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.lightofsophia.com/services" />
        <title>Services | Mary Sophia</title>
        <meta
          name="description"
          content="Explore the sacred services of Mary Sophia, including private readings, spiritual counseling, and mentorship through the Order of the Blue Rose. Awaken your soul and embody divine feminine wisdom."
        />
        <meta
          name="keywords"
          content="Mary Sophia services, private readings, spiritual counseling, Order of the Blue Rose, divine feminine, sacred mentorship, soul guidance, spiritual healing, feminine wisdom, sacred offerings"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mary Sophia",
            url: "https://www.lightofsophia.com/services",
            image: "https://www.lightofsophia.com/images/newMary1.jpg",
            description:
              "Mary Sophia offers sacred services including private readings, spiritual counseling, and mentorship through the Order of the Blue Rose to support soul awakening and divine embodiment.",
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
              "Spiritual Counseling",
              "Order of the Blue Rose",
              "Divine Feminine Wisdom",
              "Sacred Mentorship",
              "Soul Guidance",
            ],
          })}
        </script>
      </Helmet>

      <section className="relative min-h-[40vh] flex items-center pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={import.meta.env.BASE_URL + "images/servicesbackground.jpg"}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="wavy-gradient"></div>
        </div>
        <div className="relative z-20 w-full">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-dancing-script text-5xl md:text-6xl text-white mb-4 drop-shadow-lg">
              Sacred Services
            </h1>
            <p className="text-white font-open-sans text-lg max-w-2xl mx-auto drop-shadow-lg">
              Discover pathways to divine connection and spiritual growth
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white py-16 pt-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="md:w-1/3">
              <img
                src="/images/newMary1.jpg"
                alt="Mary Sophia"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <div>
                <h2 className="font-playfair text-3xl text-[#002147] mb-4">
                  Welcome to Our Sacred Services
                </h2>
                <p className="text-gray-700 font-open-sans leading-relaxed mb-4">
                  We offer a range of spiritual services designed to support
                  your journey of awakening and transformation. Each service is
                  carefully crafted to provide deep, meaningful experiences of
                  divine connection.
                </p>
                <p className="text-gray-700 font-open-sans leading-relaxed mb-4">
                  Through our sacred offerings, you'll discover pathways to
                  healing, growth, and spiritual awakening. Whether you're
                  seeking personal guidance, spiritual counseling, or deep
                  transformation, our services are tailored to meet you where
                  you are on your journey.
                </p>
                <p className="text-gray-700 font-open-sans leading-relaxed">
                  Join us in this sacred space where ancient wisdom meets
                  contemporary understanding, where every soul is honored, and
                  where divine love guides the way forward.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Blue Rose Readings Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl text-[#002147] mb-2 text-center">
                Private Readings
              </h2>
              <h3 className="text-xl text-gray-600 mb-6 text-center font-open-sans">
                Channeled Soul Wisdom from the Heart of the Divine Mother
              </h3>
              <p className="text-gray-800 mb-8 font-open-sans leading-relaxed text-base">
                Receive sacred guidance and soul remembrance through a deep,
                loving transmission from Mother Mary, Mary Magdalene, and the
                Angelic Realm. These readings illuminate your soul gifts, past
                life connections, and offer wisdom for the path unfolding before
                you.
              </p>
              <div className="text-center">
                <a
                  href="https://sacred-rose.teachable.com/purchase?product_id=6140178"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#002147] hover:bg-[#D4AF37] text-white py-2 px-6 rounded-md transition duration-300"
                >
                  Book a Reading
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          {/* School of Sophia Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl text-[#002147] mb-2 text-center">
                School of Sophia
              </h2>
              <h3 className="text-xl text-gray-600 mb-6 text-center font-open-sans">
                Sacred Formation Through Divine Feminine Wisdom
              </h3>
              <p className="text-gray-800 mb-8 font-open-sans leading-relaxed text-base">
                The School of Sophia is a transformative path of spiritual formation deeply rooted in Divine Feminine wisdom traditions. Through weekly Magdalene Yoga, monthly Blue Rose Circles, Sacred Prayer Groups, and our Wisdom Book Club, you'll discover ancient mysteries bridged with contemporary understanding. Join our sacred community to awaken your inner wisdom and embrace the divine feminine through heart-centered practices and teachings.
              </p>
              <div className="text-center">
                <Link
                  to="/school"
                  className="inline-flex items-center bg-[#002147] hover:bg-[#D4AF37] text-white py-2 px-6 rounded-md transition duration-300"
                >
                  Join the School
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Spiritual Counseling Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl text-[#002147] mb-2 text-center">
                Spiritual Counseling
              </h2>
              <h3 className="text-xl text-gray-600 mb-6 text-center font-open-sans">
                Healing Through Life's Sacred Thresholds ~ A Return to Love and
                Life
              </h3>
              <p className="text-gray-800 mb-8 font-open-sans leading-relaxed text-base">
                These sacred sessions offer soul-centered support for women
                navigating life's most profound transitions — from loss and
                heartbreak to new beginnings and becoming. Whether you are
                healing from grief, miscarriage, abortion, divorce, or stepping
                into marriage, motherhood, or the wisdom years, these sessions
                are a sanctuary for your heart. Through intuitive guidance,
                somatic healing, and sacred wisdom, you are lovingly supported
                in reclaiming your wholeness, your light, and your new life.
              </p>
              <div className="text-center">
                <Link
                  to="/counseling"
                  className="inline-flex items-center bg-[#002147] hover:bg-[#D4AF37] text-white py-2 px-6 rounded-md transition duration-300"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Order of the Blue Rose Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl text-[#002147] mb-2 text-center">
                Order of the Blue Rose
              </h2>
              <h3 className="text-xl text-gray-600 mb-6 text-center font-open-sans">
                Mentorship and Sacred Feminine Wisdom Classes
              </h3>
              <p className="text-gray-800 mb-8 font-open-sans leading-relaxed text-base">
                Step into the ancient lineage of the Order of the Blue Rose — a
                sacred sisterhood born of the followers of Mary Magdalene and
                Mother Mary, carrying forth the living teachings of Christ
                through the embodiment of pure Divine Love and the Wisdom of
                Sophia. Through mentorship and classes, you are invited to
                awaken the Light of Sophia within and embody the radiance of
                your truly awakened heart.
              </p>
              <div className="text-center">
                <Link
                  to="/order"
                  className="inline-flex items-center bg-[#002147] hover:bg-[#D4AF37] text-white py-2 px-6 rounded-md transition duration-300"
                >
                  Join the Order
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <CtaSection buttonText="Get in Touch" linkTo="/contact" />
    </>
  );
}
