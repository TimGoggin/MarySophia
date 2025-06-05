import { Helmet } from "react-helmet";
import CtaSection from "@/components/CtaSection";

export default function About() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://lightofsophia.com/about-us" />
        <title>About Mary Sophia | Divine Feminine Teacher & Messenger</title>
        <meta
          name="description"
          content="Learn about Mary Sophia — teacher of the Way of Mary, intuitive channel, and spiritual counselor offering sacred wisdom from the Divine Feminine lineage."
        />
        <meta
          name="keywords"
          content="Mary Sophia, about Mary Sophia, divine feminine teacher, spiritual counselor, Way of the Heart, channel for Mary Magdalene, sacred feminine wisdom"
        />

        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="About Mary Sophia | Divine Feminine Teacher & Messenger"
        />
        <meta
          property="og:description"
          content="Mary Sophia is a teacher, spiritual counselor, and messenger for Mother Mary and the Wisdom of Sophia. Discover her sacred mission and teachings."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lightofsophia.com/about-us" />
        <meta
          property="og:image"
          content="https://lightofsophia.com/.netlify/images?url=/images/Mary_Sophia_v2.png&w=1200&h=630&fit=cover"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mary Sophia",
            url: "https://lightofsophia.com/about-us",
            image: "https://lightofsophia.com/.netlify/images?url=/images/Mary_Sophia_v2.png&w=800&h=600&fit=cover",
            description:
              "Mary Sophia is a spiritual teacher, intuitive channel, and counselor devoted to the Divine Feminine. She offers guidance rooted in the Way of the Heart, channeling wisdom from Mother Mary, Mary Magdalene, and the angelic realm.",
            jobTitle: "Spiritual Teacher and Channel",
            knowsAbout: [
              "Divine Feminine Wisdom",
              "Way of the Heart",
              "Mary Magdalene Teachings",
              "Spiritual Counseling",
              "Intuitive Readings",
            ],
            worksFor: {
              "@type": "Organization",
              name: "Mary Sophia | Light of Sophia",
              url: "https://lightofsophia.com",
            },
          })}
        </script>
      </Helmet>

      <div className="bg-white py-16 pt-48 relative">
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
                  backgroundImage: `url(/.netlify/images?url=/images/rose-${(i % 3) + 1}.png&w=100&h=100)`,
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
            <h1 className="font-dancing-script text-5xl text-[#002147] mb-4">
              About Mary Sophia
            </h1>
            <p className="text-gray-600 font-open-sans text-xl">
              Mary Sophia is a teacher of the Way of Mary and a devoted follower
              of Christ. She serves as a messenger and channel for Mother Mary,
              Mary Magdalene, the Angelic Realm and the Wisdom of Sophia.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="md:w-2/3">
              <p className="text-gray-800 mb-6 font-open-sans leading-relaxed text-base">
                There is a sacred voice — quiet, ancient, and deeply feminine —
                that has long whispered through the hearts of women across time.
                It is known by many names, but to me, it is the Light of Sophia.
                This divine feminine wisdom — the indwelling light of love,
                intuition, and soul remembrance — lives within you.
              </p>
              <p className="text-gray-800 mb-6 font-open-sans leading-relaxed text-base">
                I walk with this light as a messenger and a guide, through the
                Lineage of Sophia, Mother Mary and Mary Magdalene. I am a keeper
                of the Order of the Blue Rose — a sacred stream of love and
                remembrance that carries the original teachings of the Christ
                Light through the heart of the Feminine.
              </p>
              <p className="text-gray-800 mb-6 font-open-sans leading-relaxed text-base">
                My work is here to support your return to that remembrance —
                through channeled guidance, intuitive healing, spiritual
                counseling and ancient wisdom traditions. Rooted in the Order of
                the Blue Rose, this work gently nurtures the awakening of the
                Sacred Feminine within, guiding you home to the wisdom that
                lives within you.
              </p>
              <div className="mt-8">
                <h2 className="font-playfair text-2xl text-[#002147] mb-6">
                  Our Sacred Mission
                </h2>
                <ul className="list-none space-y-3 text-gray-800 font-open-sans text-base">
                  <li className="flex items-center">
                    <span className="text-[#002147] mr-2">•</span>
                    Awakening the Wisdom of the Heart
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#002147] mr-2">•</span>
                    Embodying Divine Feminine Wisdom
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#002147] mr-2">•</span>
                    Nurturing Spiritual Growth and Transformation
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#002147] mr-2">•</span>
                    Creating Sacred Community
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#002147] mr-2">•</span>
                    Sharing Ancient and Contemporary Spiritual Teachings
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/.netlify/images?url=/images/mary-sophia-2.jpg&w=600&h=800&fit=cover"
                alt="Mary Sophia Portrait"
                className="rounded-lg shadow-xl w-full object-cover h-[500px]"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-playfair text-2xl text-[#002147] mb-6">
              About Me
            </h2>
            <p className="text-gray-800 mb-6 font-open-sans leading-relaxed text-base">
              Mary Sophia is a teacher of the Way of Mary and a devoted follower
              of Christ. She serves as a messenger and channel for Mother Mary,
              Mary Magdalene, and the Angelic Realm, offering spiritual guidance
              rooted in love, remembrance, and the Divine Feminine Wisdom.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="font-playfair text-2xl text-[#002147] mb-6">
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
            <h2 className="font-playfair text-2xl text-[#002147] mb-6">
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
      <CtaSection buttonText="Explore Our Services" linkTo="/services" />
    </>
  );
}
