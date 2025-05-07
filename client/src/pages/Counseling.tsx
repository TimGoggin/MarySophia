
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

      <div className="bg-white py-16 pt-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="md:w-1/3">
              <img
                src="/images/newMary3.jpg"
                alt="Mary Sophia"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="space-y-12">
                  <div>
                    <h2 className="font-playfair text-2xl text-[#002147] mb-4">
                      Sacred Support for Your Journey
                    </h2>
                    <p className="text-gray-700 font-open-sans leading-relaxed">
                      These sacred sessions offer soul-centered support for women
                      navigating life's most profound transitions. Whether you are
                      healing from loss, embracing new beginnings, or seeking deeper
                      spiritual connection, these sessions provide a sanctuary for
                      your heart's journey.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-playfair text-2xl text-[#002147] mb-4">
                      Our Approach
                    </h2>
                    <p className="text-gray-700 font-open-sans leading-relaxed">
                      Through intuitive guidance, somatic healing, and sacred wisdom
                      teachings, we create a safe space for deep transformation and
                      spiritual growth. Each session is tailored to your unique
                      journey and needs.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-playfair text-2xl text-[#002147] mb-4">
                      Areas of Support
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-playfair text-xl text-[#002147] mb-2">Love</h3>
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
                        <h3 className="font-playfair text-xl text-[#002147] mb-2">Loss</h3>
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
                        <h3 className="font-playfair text-xl text-[#002147] mb-2">Life Transitions</h3>
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
