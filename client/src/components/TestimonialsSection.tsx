export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Mary Sophia's guidance opened my heart to divine wisdom. Her readings are truly transformative and filled with profound spiritual insights.",
      name: "Jessica S.",
      initials: "JS"
    },
    {
      id: 2,
      quote: "The School of Mary has been a sanctuary of deep spiritual learning. The courses have transformed and strengthened my connection to the divine feminine.",
      name: "Michael K.",
      initials: "MK"
    },
    {
      id: 3,
      quote: "Being part of the Order of the Blue Rose has guided my spiritual journey. The community and sacred teachings have deeply transformed me.",
      name: "Laura T.",
      initials: "LT"
    }
  ];

  return (
    <section className="relative py-16">
      <div className="absolute inset-0">
        <div className="wavy-gradient"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center font-dancing-script text-white text-3xl md:text-4xl mb-12">
          Mary Sophia Testimonials
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <p className="text-white italic mb-6 font-open-sans">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#00AEEF] text-white flex items-center justify-center font-bold mr-3">
                  {testimonial.initials}
                </div>
                <span className="text-white">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
