import { Helmet } from "react-helmet";
import { ChevronRight } from "lucide-react";
import CtaSection from "@/components/CtaSection";

export default function Order() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.lightofsophia.com/order" />
        <title>Order of the Blue Rose | Mary Sophia</title>
        <meta
          name="description"
          content="The Order of the Blue Rose is a sacred lineage of Divine Love and Wisdom, guided by Mary Sophia. Discover mystical teachings, spiritual mentorship, and awaken the Christ frequencies within your heart."
        />
        <meta
          name="keywords"
          content="Order of the Blue Rose, Mary Sophia, Divine Feminine, Christ frequencies, mystical teachings, spiritual awakening, spiritual mentorship, Mother Mary, Mary Magdalene"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Order of the Blue Rose",
            url: "https://www.lightofsophia.com/order",
            image: "https://www.lightofsophia.com/images/newMary4.jpg",
            description:
              "The Order of the Blue Rose is a lineage of Divine Love and Wisdom led by Mary Sophia, offering spiritual mentorship, mystical teachings, and guidance on the Christ path.",
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
              "Order of the Blue Rose",
              "Spiritual Awakening",
              "Mary Magdalene",
              "Mother Mary",
              "Christ frequencies",
            ],
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
                    The Order of the Blue Rose is a Lineage of Light that holds
                    the Frequency of the Truly Awakened Heart. This Lineage is
                    of the Holy Bloodline and originated with Mother Mary and
                    Mary Magdalene as they carried forth the teachings of
                    Christ.
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
                    The Order of the Blue Rose holds the Holy Family's most
                    faithful followers who were devoted to bringing through the
                    purity of the Christ Message, not by reciting teachings
                    learned but through their embodiment as they have truly
                    anchored these frequencies within their beings and lived as
                    the Heart of God on Earth.
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
                    You know if you do. Your Heart will sing the Song of the
                    Blue Rose.
                  </p>

                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    This Song doesn't come in words as those of us who carry
                    this frequency can at times be challenged by finding words
                    to express its purity and simplicity.
                  </p>

                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    It comes through the Wholeness of our Soul, the Purity of
                    our Heart and the Knowing that we are the Heart of God and
                    are here to be Vessels of God's Love.
                  </p>

                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    I say this with humbleness and the deepest respect and
                    reverence as those of us who walk The Way of Mary know this
                    is not the easy path AND at the same time it is the only
                    path we Truly Know.
                  </p>

                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    I am here to help you on this Path. As a Priestess of
                    Avalon, an Ordained Priestess of Mary Magdalene and an
                    Initiated Member of the Order of the Blue Rose, I have
                    walked The Way for as long as my Soul can Remember.
                  </p>

                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    For it is a Remembering, as you hold the Wisdom and
                    Teachings of the Blue Rose within your Sacred Heart.
                  </p>

                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    I am here to guide you on this Mystical Path. Sharing the
                    Truth and the Wisdom that I have embodied as I continue to
                    walk the Way of the Mary with humility and grace.
                  </p>

                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    My devoted commitment is to guide you with Faith, as you
                    Remember and Awaken the Blue Rose within you, Fully Embody
                    your Original Essence and live as the Heart of God on Earth.
                  </p>

                  <div className="text-center italic font-playfair text-xl text-[#002147] my-12">
                    Welcome home Dear Sister! I have been awaiting you.
                  </div>

                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    In the fullness of the Blue Rose that is Blooming within
                    your Sacred Heart…IT IS TIME.
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
