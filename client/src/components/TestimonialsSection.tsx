
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { useState } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Mary Sophia's guidance opened my heart to divine wisdom. Her readings are truly transformative and filled with profound spiritual insights. Through her channeled wisdom, I discovered aspects of my soul's purpose that had remained hidden. The depth of understanding and clarity she provides is remarkable, and her connection to the Divine Feminine energies is palpable in every session.",
      name: "Jessica S.",
      title: "Spiritual Teacher & Energy Healer",
      image: "/images/testimonial-1.jpg"
    },
    {
      id: 2,
      quote: "The School of Mary has been a sanctuary of deep spiritual learning. The courses have transformed and strengthened my connection to the divine feminine. The teachings have not only enriched my spiritual practice but have also provided practical tools for navigating life's challenges with grace and wisdom. The community support and sacred container created here is truly unique.",
      name: "Michael K.",
      title: "Meditation Instructor",
      image: "/images/testimonial-2.jpg"
    },
    {
      id: 3,
      quote: "Being part of the Order of the Blue Rose has guided my spiritual journey. The community and sacred teachings have deeply transformed me. Through the initiations and group work, I've experienced profound healing and awakening. The way Mary Sophia holds space for each individual's growth while maintaining the collective energy is truly masterful.",
      name: "Laura T.",
      title: "Holistic Counselor",
      image: "/images/testimonial-3.jpg"
    }
  ];

  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedIds(prev => 
      prev.includes(id) 
        ? prev.filter(existingId => existingId !== id)
        : [...prev, id]
    );
  };

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
                {expandedIds.includes(testimonial.id) 
                  ? testimonial.quote
                  : `${testimonial.quote.slice(0, 150)}...`}
                <button 
                  onClick={() => toggleExpand(testimonial.id)}
                  className="text-[#00AEEF] hover:text-blue-400 ml-2 text-sm font-normal not-italic"
                >
                  {expandedIds.includes(testimonial.id) ? 'Read Less' : 'Read More'}
                </button>
              </p>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-3">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <span className="text-white block">{testimonial.name}</span>
                  <span className="text-gray-300 text-sm block">{testimonial.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
