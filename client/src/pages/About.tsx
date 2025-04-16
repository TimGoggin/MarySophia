
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Mary Sophia</title>
      </Helmet>
      <div className="bg-white py-16 pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl text-[#00AEEF] mb-4">About Mary Sophia</h1>
            <p className="text-gray-600 font-open-sans text-xl">
              Teacher of the Way of Mary, devoted to the Divine Feminine
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="md:w-2/3">
              <p className="text-gray-700 mb-6 font-open-sans leading-relaxed">
                Mary Sophia is a spiritual teacher who channels the wisdom of Mother Mary, Mary Magdalene, and the Angelic Realm. She serves as a guide for others to connect with their original divine essence and live with heart-centered clarity.
              </p>
              <p className="text-gray-700 mb-6 font-open-sans leading-relaxed">
                Through years of dedicated spiritual practice and divine connection, she has developed a unique ability to bridge ancient wisdom with modern spiritual understanding, helping others awaken to their true potential.
              </p>
            </div>
            <div className="md:w-1/3">
              <img 
                src="/src/images/test6.png"
                alt="Mary Sophia Portrait"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-playfair text-xl text-[#00AEEF] mb-3">Divine Feminine Wisdom</h3>
              <p className="text-gray-600">Embodying and teaching the sacred principles of the Divine Feminine.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-playfair text-xl text-[#00AEEF] mb-3">Spiritual Transformation</h3>
              <p className="text-gray-600">Guiding heart-led journeys of spiritual awakening and growth.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-playfair text-xl text-[#00AEEF] mb-3">Sacred Mentorship</h3>
              <p className="text-gray-600">Providing guidance and support through community and individual connection.</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-8 font-open-sans">
              Continue your spiritual journey with Mary Sophia
            </p>
            <div className="flex justify-center gap-4">
              <a href="#school" className="bg-[#00AEEF] text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
                Discover the School of Mary
              </a>
              <a href="#order" className="border border-[#00AEEF] text-[#00AEEF] px-6 py-3 rounded-full hover:bg-gray-50 transition duration-300">
                Join the Order of the Blue Rose
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
