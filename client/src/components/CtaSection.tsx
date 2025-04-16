export default function CtaSection() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-playfair text-3xl md:text-4xl text-[#00AEEF] mb-6">
          Join Our Monthly Prayer Circle
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-8 font-open-sans">
          Connect with our community and receive sacred teachings through our live monthly prayer circle.
        </p>
        <a 
          href="#" 
          className="inline-block bg-[#00AEEF] hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
        >
          Register for Next Session
        </a>
      </div>
    </section>
  );
}
