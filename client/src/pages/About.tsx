import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Mary Sophia</title>
      </Helmet>
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
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl text-[#00AEEF] mb-4">
              About Mary Sophia
            </h1>
            <p className="text-gray-600 font-open-sans text-xl">
              Teacher of the Way of Mary, devoted to the Divine Feminine
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="md:w-2/3">
              <p className="text-gray-800 mb-6 font-open-sans leading-relaxed text-base">
                As a teacher of the Way of Mary and a follower of Christ, I
                serve as a channel for the divine wisdom of Mother Mary, Mary
                Magdalene, and the Angelic Realm. My mission is to help others
                remember their Original Essence and embody the Wisdom of the
                Heart.
              </p>
              <p className="text-gray-800 mb-6 font-open-sans leading-relaxed text-base">
                Through the Order of the Blue Rose, we work to awaken and
                nurture the divine feminine wisdom that resides within each of
                us. This sacred work combines ancient spiritual teachings with
                direct guidance from the divine realms.
              </p>
              <p className="text-gray-800 mb-6 font-open-sans leading-relaxed text-base">
                I am dedicated to supporting individuals on their journey of
                spiritual awakening, helping them connect with their divine
                nature and live their Original Blessing on Earth.
              </p>
              <div className="mt-8">
                <h2 className="font-playfair text-2xl text-[#00AEEF] mb-6">
                  Our Sacred Mission
                </h2>
                <ul className="list-none space-y-3 text-gray-800 font-open-sans text-base">
                  <li className="flex items-center">
                    <span className="text-[#00AEEF] mr-2">•</span>
                    Awakening the Wisdom of the Heart
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#00AEEF] mr-2">•</span>
                    Embodying Divine Feminine Wisdom
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#00AEEF] mr-2">•</span>
                    Nurturing Spiritual Growth and Transformation
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#00AEEF] mr-2">•</span>
                    Creating Sacred Community
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#00AEEF] mr-2">•</span>
                    Sharing Ancient and Contemporary Spiritual Teachings
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/mary-sophia-2.jpg"
                alt="Mary Sophia Portrait"
                className="rounded-lg shadow-xl w-full object-cover h-[500px]"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-playfair text-2xl text-[#00AEEF] mb-6">
              About Me
            </h2>
            <p className="text-gray-800 mb-6 font-open-sans leading-relaxed text-base">
              Mary Sophia is a teacher of the Way of Mary and a follower of
              Christ. She is also a messenger and a channel for Mother Mary,
              Mary Magdalene, and the Angelic Realm.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="font-playfair text-2xl text-[#00AEEF] mb-6">
              Philosophy & Approach
            </h2>
            <p className="text-gray-800 mb-6 font-open-sans leading-relaxed text-base">
              My work is grounded in The Way of Mary and The Way of the Heart,
              ancient wisdom traditions that emphasize direct spiritual
              experience and heart-centered transformation. I believe that each
              person carries within them a unique divine spark waiting to be
              awakened.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="font-playfair text-2xl text-[#00AEEF] mb-6">
              Sacred Work
            </h2>
            <p className="text-gray-800 mb-6 font-open-sans leading-relaxed text-base">
              Through intuitive readings, spiritual counseling, and teaching, I
              help others connect with their own divine guidance and purpose.
              This work is supported by the presence of Mother Mary, Mary
              Magdalene, and the Angelic Realm, who offer their wisdom and love
              to all who seek it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}