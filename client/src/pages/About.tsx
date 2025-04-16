import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Mary Sophia</title>
      </Helmet>
      <div className="bg-white py-16 pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl text-[#00AEEF] mb-4">
              About Mary Sophia
            </h1>
          </div>

          {/* Introduction */}
          <div className="prose max-w-none mb-12">
            <p className="text-gray-700 mb-6 font-open-sans leading-relaxed">
              As a teacher of the Way of Mary and a follower of Christ, I serve as a channel for the divine wisdom of Mother Mary, Mary Magdalene, and the Angelic Realm. My mission is to help others remember their Original Essence and embody the Wisdom of the Heart.
            </p>
            <p className="text-gray-700 mb-6 font-open-sans leading-relaxed">
              Through the Order of the Blue Rose, we work to awaken and nurture the divine feminine wisdom that resides within each of us. This sacred work combines ancient spiritual teachings with direct guidance from the divine realms.
            </p>
            <p className="text-gray-700 mb-12 font-open-sans leading-relaxed">
              I am dedicated to supporting individuals on their journey of spiritual awakening, helping them connect with their divine nature and live their Original Blessing on Earth.
            </p>

            {/* Sacred Mission */}
            <h2 className="font-playfair text-2xl text-[#00AEEF] mb-6">Our Sacred Mission</h2>
            <ul className="list-none space-y-3 mb-12">
              <li className="flex items-center font-open-sans text-gray-700">
                <span className="w-2 h-2 bg-[#00AEEF] rounded-full mr-3"></span>
                Awakening the Wisdom of the Heart
              </li>
              <li className="flex items-center font-open-sans text-gray-700">
                <span className="w-2 h-2 bg-[#00AEEF] rounded-full mr-3"></span>
                Embodying Divine Feminine Wisdom
              </li>
              <li className="flex items-center font-open-sans text-gray-700">
                <span className="w-2 h-2 bg-[#00AEEF] rounded-full mr-3"></span>
                Nurturing Spiritual Growth and Transformation
              </li>
              <li className="flex items-center font-open-sans text-gray-700">
                <span className="w-2 h-2 bg-[#00AEEF] rounded-full mr-3"></span>
                Creating Sacred Community
              </li>
              <li className="flex items-center font-open-sans text-gray-700">
                <span className="w-2 h-2 bg-[#00AEEF] rounded-full mr-3"></span>
                Sharing Ancient and Contemporary Spiritual Teachings
              </li>
            </ul>

            {/* About Me */}
            <h2 className="font-playfair text-2xl text-[#00AEEF] mb-6">About Me</h2>
            <p className="text-gray-700 mb-12 font-open-sans leading-relaxed">
              Mary Sophia is a teacher of the Way of Mary and a follower of Christ. She is also a messenger and a channel for Mother Mary, Mary Magdalene, and the Angelic Realm.
            </p>

            {/* Philosophy & Approach */}
            <h2 className="font-playfair text-2xl text-[#00AEEF] mb-6">Philosophy & Approach</h2>
            <p className="text-gray-700 mb-12 font-open-sans leading-relaxed">
              My work is grounded in The Way of Mary and The Way of the Heart, ancient wisdom traditions that emphasize direct spiritual experience and heart-centered transformation. I believe that each person carries within them a unique divine spark waiting to be awakened.
            </p>

            {/* Sacred Work */}
            <h2 className="font-playfair text-2xl text-[#00AEEF] mb-6">Sacred Work</h2>
            <p className="text-gray-700 mb-12 font-open-sans leading-relaxed">
              Through intuitive readings, spiritual counseling, and teaching, I help others connect with their own divine guidance and purpose. This work is supported by the presence of Mother Mary, Mary Magdalene, and the Angelic Realm, who offer their wisdom and love to all who seek it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}