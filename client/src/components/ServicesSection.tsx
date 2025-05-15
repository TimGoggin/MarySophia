import { Link } from "react-router-dom";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: <img src="/icons/angel.svg" alt="Star" className="w-16 h-16" />,
      title: "Private Readings",
      description:
        "Connect with divine guidance through personal readings tailored to your spiritual journey.",
      cta: "Experience a Reading",
      link: "/readings",
    },
    {
      id: 2,
      icon: (
        <img src="/icons/dove.svg" alt="Female" className="w-full h-full" />
      ),
      title: "School of Sophia",
      description:
        "Deepen your spiritual growth through courses, workshops, and mentorship.",
      cta: "Begin Your Journey",
      link: "/school",
    },
    {
      id: 3,
      icon: <img src="/icons/rose.svg" alt="Rose" className="w-full h-full" />,
      title: "Order of the Blue Rose",
      description:
        "Join our sacred sisterhood and embody the radiance of your truly awakened heart.",
      cta: "Find Your Path",
      link: "/order",
    },
    {
      id: 4,
      icon: <img src="/icons/angel2.svg" alt="Star" className="w-16 h-16" />,
      title: "Spiritual Counseling",
      description:
        "Receive sacred support through life's transitions with heart-centered guidance and healing.",
      cta: "Learn More",
      link: "/counseling",
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-[#B58233] overflow-hidden h-full"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    <div className="w-16 h-16">{service.icon}</div>
                  </div>
                  <h3 className="font-playfair text-xl text-[#003864] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 font-open-sans">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <Link
                    to={
                      service.id === 2
                        ? "/school"
                        : service.id === 3
                          ? "/order"
                          : "/services"
                    }
                    className="block bg-[#003864] hover:bg-[#D4AF37] text-white font-semibold py-2 px-4 rounded-md transition duration-300 text-center"
                  >
                    {service.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
