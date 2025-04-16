export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h2 className="font-playfair text-3xl text-[#00AEEF] mb-6">
              Meet Mary Sophia
            </h2>
            <p className="text-gray-700 mb-4 font-open-sans">
              Mary Sophia is a spiritual teacher of the Way of Mary and a follower of Christ. With extensive training in various spiritual traditions, she bridges ancient wisdom and modern spiritual practices.
            </p>
            <p className="text-gray-700 mb-4 font-open-sans">
              Through her Order of the Blue Rose, she supports spiritual seekers, team healers, lightworkers, and the establishment of Divine Feminine energy on Earth. With compassion and deep wisdom, she offers divine guidance to help others remember their Original Essence and live their soul's purpose.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1579975628450-35a76e40d677?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80" 
              alt="Mary Sophia Portrait" 
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
