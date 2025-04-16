
import { Helmet } from "react-helmet";
import { ChevronRight } from "lucide-react";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Mary Sophia</title>
      </Helmet>
      <div className="bg-white py-16 pt-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl text-[#00AEEF] mb-4">Our Services</h1>
            <p className="text-gray-600 font-open-sans text-lg max-w-2xl mx-auto">
              Offerings designed to deepen your connection to the Divine Feminine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Private Readings */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#00AEEF]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"/>
                </svg>
              </div>
              <h3 className="font-playfair text-2xl text-[#00AEEF] mb-4 text-center">Private Readings</h3>
              <p className="text-gray-600 mb-6 text-center">
                Personal guidance sessions connecting you with divine wisdom and spiritual insight.
              </p>
              <a 
                href="https://sacred-rose.teachable.com/purchase?product_id=6140178"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-transparent hover:bg-[#00AEEF] text-[#00AEEF] hover:text-white py-2 px-4 border border-[#00AEEF] hover:border-transparent rounded-full transition duration-300 flex items-center justify-center"
              >
                Book a Session
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* School of Mary */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#00AEEF]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 className="font-playfair text-2xl text-[#00AEEF] mb-4 text-center">School of Mary</h3>
              <p className="text-gray-600 mb-6 text-center">
                Learn ancient wisdom and spiritual practices in our sacred learning community.
              </p>
              <button className="w-full bg-transparent hover:bg-[#00AEEF] text-[#00AEEF] hover:text-white py-2 px-4 border border-[#00AEEF] hover:border-transparent rounded-full transition duration-300 flex items-center justify-center">
                Learn More
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Order of the Blue Rose */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#00AEEF]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"/>
                </svg>
              </div>
              <h3 className="font-playfair text-2xl text-[#00AEEF] mb-4 text-center">Order of the Blue Rose</h3>
              <p className="text-gray-600 mb-6 text-center">
                Join our sacred sisterhood dedicated to embodying divine feminine wisdom.
              </p>
              <button className="w-full bg-transparent hover:bg-[#00AEEF] text-[#00AEEF] hover:text-white py-2 px-4 border border-[#00AEEF] hover:border-transparent rounded-full transition duration-300 flex items-center justify-center">
                Join Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#002147] text-white rounded-lg p-12 text-center">
            <h2 className="font-playfair text-3xl mb-4">Join Our Monthly Prayer Circle</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Connect with like-minded souls in our sacred monthly gathering. Experience the power of collective prayer and divine feminine energy.
            </p>
            <button className="bg-[#00AEEF] hover:bg-[#0097FB] text-white py-3 px-8 rounded-full transition duration-300 inline-flex items-center">
              Schedule Your Visit
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
