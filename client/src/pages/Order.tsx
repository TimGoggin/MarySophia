
import { Helmet } from "react-helmet";
import { ChevronRight } from "lucide-react";
import CtaSection from "@/components/CtaSection";

export default function Order() {
  return (
    <>
      <Helmet>
        <title>Order of the Blue Rose | Mary Sophia</title>
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
                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    The Order of the Blue Rose is a sacred lineage dedicated to embodying divine love and wisdom. Through our teachings and practices, we facilitate awakening and transformation through divine feminine wisdom.
                  </p>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl text-[#002147] mb-4">
                    Introduction
                  </h2>
                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    The Order of the Blue Rose is a sacred lineage dedicated to
                    embodying divine love and wisdom. We stand as guardians of
                    ancient spiritual traditions, facilitating awakening and
                    transformation through the divine feminine wisdom.
                  </p>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl text-[#002147] mb-4">
                    Historical Background
                  </h2>
                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    Rooted in ancient wisdom traditions, the Order carries forward
                    the teachings of Mother Mary and Mary Magdalene. Through
                    generations, we have preserved and transmitted sacred knowledge
                    that bridges earthly existence with divine consciousness.
                  </p>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl text-[#002147] mb-4">
                    Core Teachings
                  </h2>
                  <ul className="list-none space-y-3 text-gray-700 font-open-sans">
                    <li className="flex items-center">
                      <span className="text-[#002147] mr-2">•</span>
                      Embodying the Wisdom of the Heart
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#002147] mr-2">•</span>
                      Alignment with Divine Nature
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#002147] mr-2">•</span>
                      Sacred Practices for Inner Transformation
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#002147] mr-2">•</span>
                      Connection with Divine Realms
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl text-[#002147] mb-4">
                    Membership & Community
                  </h2>
                  <p className="text-gray-700 font-open-sans leading-relaxed">
                    Our community comprises seekers dedicated to the path of love,
                    service, and spiritual growth. Through regular gatherings,
                    mentorship programs, and sacred circles, we support each other's
                    journey toward divine connection and inner peace.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
