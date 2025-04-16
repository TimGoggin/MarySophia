import { Helmet } from "react-helmet";

export default function School() {
  return (
    <>
      <Helmet>
        <title>School of Mary | Mary Sophia</title>
      </Helmet>

      <section className="relative min-h-[40vh] flex items-center pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/src/images/hero.jpeg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="wavy-gradient"></div>
        </div>
        <div className="relative z-20 w-full">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-4xl md:text-5xl text-white mb-4 drop-shadow-lg">
              School of Mary
            </h1>
            <p className="text-white font-open-sans text-lg max-w-2xl mx-auto drop-shadow-lg">
              A Sacred Path of Spiritual Formation Through the Heart of Mary
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
                className="floating-rose"
                style={{
                  backgroundImage: `url(/src/images/rose-${(i % 3) + 1}.png)`,
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
                Introduction
              </h2>
              <p className="text-gray-700 font-open-sans leading-relaxed">
                The School of Mary is a transformative spiritual formation path
                deeply rooted in the teachings and example of the Blessed Virgin
                Mary. Here, seekers find guidance toward a profound union with
                Christ through Mary's immaculate heart, embracing a journey of
                divine love and wisdom.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-[#00AEEF] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 font-open-sans leading-relaxed">
                We are committed to nurturing spiritual growth, fostering
                holiness, and cultivating lives rich in prayer and service.
                While grounded in Catholic tradition, our doors are open to all
                souls seeking deeper spiritual enrichment and connection with
                the Divine through Mary's guidance.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-[#00AEEF] mb-4">
                Core Teachings
              </h2>
              <ul className="list-none space-y-3 text-gray-700 font-open-sans">
                <li className="flex items-center">
                  <span className="text-[#00AEEF] mr-2">•</span>
                  Embracing Marian Virtues: Humility, Obedience, and Charity
                </li>
                <li className="flex items-center">
                  <span className="text-[#00AEEF] mr-2">•</span>
                  Sacred Practices: Rosary, Lectio Divina, and Marian
                  Consecration
                </li>
                <li className="flex items-center">
                  <span className="text-[#00AEEF] mr-2">•</span>
                  Contemplative Prayer and Active Discipleship
                </li>
                <li className="flex items-center">
                  <span className="text-[#00AEEF] mr-2">•</span>
                  Living the Way of Divine Love
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-[#00AEEF] mb-4">
                Formation Programs
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-playfair text-xl text-[#00AEEF] mb-3">
                    Introductory Studies
                  </h3>
                  <p className="text-gray-700 font-open-sans">
                    Begin your journey with foundational courses in Marian
                    spirituality and contemplative practices.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-playfair text-xl text-[#00AEEF] mb-3">
                    Advanced Formation
                  </h3>
                  <p className="text-gray-700 font-open-sans">
                    Deepen your spiritual life through advanced studies of
                    mystical writings and sacred traditions.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-[#00AEEF] mb-4">
                Community Life
              </h2>
              <p className="text-gray-700 font-open-sans leading-relaxed">
                Join our vibrant community of seekers gathering regularly for
                prayer, study, and fellowship. Experience the transformative
                power of collective devotion and mutual support on your
                spiritual journey.
              </p>
            </div>

            <div className="bg-[#002147] text-white rounded-lg p-12 text-center relative overflow-hidden">
              <div className="wavy-gradient opacity-40"></div>
              <div className="relative z-10">
                <h2 className="font-playfair text-3xl mb-4">
                  Begin Your Journey
                </h2>
                <p className="mb-8 max-w-2xl mx-auto">
                  Take the first step on your transformative journey with the
                  School of Mary.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center bg-[#00AEEF] text-white px-6 py-3 rounded-full hover:bg-[#0096CE] transition-colors"
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
