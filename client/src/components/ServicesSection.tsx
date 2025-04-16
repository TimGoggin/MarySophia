export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: <img src="/icons/star.svg" alt="Star" className="w-[120%] h-[120%]" />,
      title: "Private Readings",
      description: "Connect with divine guidance through personal readings tailored to your spiritual journey.",
      cta: "Experience a Reading",
      link: "#"
    },
    {
      id: 2,
      icon: <img src="/icons/female.svg" alt="Female" className="w-full h-full" />,
      title: "School of Mary",
      description: "Deepen your spiritual growth through courses, workshops, and mentorship.",
      cta: "Thrive in our Environment",
      link: "#"
    },
    {
      id: 3,
      icon: <img src="/icons/rose.svg" alt="Rose" className="w-full h-full" />,
      title: "Order of the Blue Rose",
      description: "Join a sacred community and receive spiritual teachings through initiations.",
      cta: "Find Your Path",
      link: "#"
    }
  ];

  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
              <div className="p-6 flex flex-col h-full">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    <div className="w-16 h-16">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl text-[#00AEEF] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 font-open-sans">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <a 
                    href={service.link} 
                    className="block bg-[#00AEEF] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 text-center"
                  >
                    {service.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}