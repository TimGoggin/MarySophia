import { Helmet } from "react-helmet";
import { ChevronRight } from "lucide-react";
import CtaSection from "@/components/CtaSection";

export default function Counseling() {
  return (
    <>
      <Helmet>
        <title>Spiritual Counseling | Mary Sophia</title>
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
              <div className="sticky top-24">
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
                      My prayer is to assist you in this awakening process, to
                      hold you in the darkness and uncertainty of transitional
                      times and to teach you how to utilize your innate gifts to
                      help you to navigate your life and relationships. When we
                      learn how to use our intuition, to listen to our feelings,
                      to honor the wisdom of our bodies and to align with our
                      innate rhythms and cycles, a new way of living is
                      possible. A way that is built on the foundation of our own
                      wisdom and knowing, rather than on old beliefs that were
                      never really ours. As we remember our wholeness, we
                      remember that we are the love of creation and that it is
                      our loving nature that can truly heal ourselves, our
                      relationships and our world.
                    </p>

                    <p className="text-gray-700 font-open-sans leading-relaxed">
                      Healing is possible. A new life is possible. Loving
                      relationships are possible. Joy is possible. Peace is
                      possible. An easeful life is possible.
                    </p>

                    <p className="text-gray-700 font-open-sans leading-relaxed">
                      All of this lives within you, and when you claim it. your
                      True Nature in all of its Wholeness will be revealed to
                      you.
                    </p>

                    <p className="text-gray-700 font-open-sans leading-relaxed italic text-right">
                      Love, Mary Sophia
                    </p>
                  </div>

                  <div>
                    <h2 className="font-playfair text-2xl text-[#002147] mb-4">
                      Areas of Support
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-playfair text-xl text-[#002147] mb-2">
                          Love
                        </h3>
                        <ul className="list-none space-y-2 text-gray-700 font-open-sans">
                          <li className="flex items-center">
                            <span className="text-[#002147] mr-2">•</span>
                            Relationships
                          </li>
                          <li className="flex items-center">
                            <span className="text-[#002147] mr-2">•</span>
                            Dating
                          </li>
                          <li className="flex items-center">
                            <span className="text-[#002147] mr-2">•</span>
                            Sexuality
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-playfair text-xl text-[#002147] mb-2">
                          Loss
                        </h3>
                        <ul className="list-none space-y-2 text-gray-700 font-open-sans">
                          <li className="flex items-center">
                            <span className="text-[#002147] mr-2">•</span>
                            Miscarriage/Abortion
                          </li>
                          <li className="flex items-center">
                            <span className="text-[#002147] mr-2">•</span>
                            Divorce
                          </li>
                          <li className="flex items-center">
                            <span className="text-[#002147] mr-2">•</span>
                            Loss of a Loved One
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-playfair text-xl text-[#002147] mb-2">
                          Life Transitions
                        </h3>
                        <ul className="list-none space-y-2 text-gray-700 font-open-sans">
                          <li className="flex items-center">
                            <span className="text-[#002147] mr-2">•</span>
                            Marriage
                          </li>
                          <li className="flex items-center">
                            <span className="text-[#002147] mr-2">•</span>
                            Motherhood
                          </li>
                          <li className="flex items-center">
                            <span className="text-[#002147] mr-2">•</span>
                            Menopause
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h2 className="font-playfair text-2xl text-[#002147] mb-6">
                      Spiritual Counseling and Intuitive Healing Sessions
                    </h2>
                    <p className="text-gray-700 font-open-sans mb-8">
                      Sessions are available in person and over Zoom.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
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
              </div>
            </div>
          </div>
        </div>

        <div className="floating-roses-container">
          {[...Array(15)].map((_, i) => {
            const gridRow = Math.floor(i / 3);
            const gridCol = i % 3;
            const baseDelay = (gridRow * 3 + gridCol) * 2;

            return (
              <div
                key={`counseling-rose-${i}`}
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
      </div>

      <CtaSection
        buttonText="Book Now"
        linkTo="https://sacred-rose.teachable.com/purchase?product_id=6140178"
        isExternal={true}
      />
    </>
  );
}
