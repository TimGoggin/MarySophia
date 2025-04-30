import { Helmet } from "react-helmet";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Mary Sophia</title>
      </Helmet>
      <section className="relative min-h-[40vh] flex items-center pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={import.meta.env.BASE_URL + 'images/angelbackground.jpeg'}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="wavy-gradient"></div>
        </div>
        <div className="relative z-20 w-full">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-4xl md:text-5xl text-white mb-4 drop-shadow-lg">
              Sacred Services
            </h1>
            <p className="text-white font-open-sans text-lg max-w-2xl mx-auto drop-shadow-lg">
              Discover pathways to divine connection and spiritual growth
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white py-16 relative">
        <div className="floating-roses-container">
          {[...Array(15)].map((_, i) => {
            const gridRow = Math.floor(i / 3);
            const gridCol = i % 3;
            const baseDelay = (gridRow * 3 + gridCol) * 2;

            return (
              <div
                key={`services-rose-${i}`}
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
                  className="inline-flex items-center bg-[#002147] hover:bg-[#D4AF37] text-white py-2 px-6 rounded-full transition duration-300"
                >
                  Book a Reading
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          {/* School of Mary Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl text-[#002147] mb-2 text-center">
                Spiritual Counseling
              </h2>
              <h3 className="text-xl text-gray-600 mb-6 text-center font-open-sans">
                Healing Through Life’s Sacred Thresholds ~ A Return to Love and
                Life
              </h3>
              <p className="text-gray-800 mb-8 font-open-sans leading-relaxed text-base">
                These sacred sessions offer soul-centered support for women
                navigating life’s most profound transitions — from loss and
                heartbreak to new beginnings and becoming. Whether you are
                healing from grief, miscarriage, abortion, divorce, or stepping
                into marriage, motherhood, or the wisdom years, these sessions
                are a sanctuary for your heart. Through intuitive guidance,
                somatic healing, and sacred wisdom, you are lovingly supported
                in reclaiming your wholeness, your light, and your new life.
              </p>
              <div className="text-center">
                <Link
                  to="/readings"
                  className="inline-flex items-center bg-[#002147] hover:bg-[#D4AF37] text-white py-2 px-6 rounded-full transition duration-300"
                >
                  Explore the School
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
                  className="inline-flex items-center bg-[#002147] hover:bg-[#D4AF37] text-white py-2 px-6 rounded-full transition duration-300"
                >
                  Join the Order
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
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
            className="bg-[#002147] hover:bg-[#D4AF37] text-white py-3 px-8 rounded-full transition duration-300 inline-flex items-center"
          >
            Schedule Your Visit
            <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
