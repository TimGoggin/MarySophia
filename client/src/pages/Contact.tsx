import { useState } from "react";
import { Helmet } from "react-helmet";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://lightofsophia.com/contact-us" />
        <title>Contact Mary Sophia | Send a Message or Connect Online</title>
        <meta
          name="description"
          content="Get in touch with Mary Sophia. Reach out via contact form or email for spiritual support, session inquiries, or guidance on your sacred journey."
        />
        <meta
          name="keywords"
          content="contact Mary Sophia, spiritual guide email, divine feminine teacher contact, Blue Rose connection, send message Mary Sophia"
        />

        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="Contact Mary Sophia | Send a Message or Connect Online"
        />
        <meta
          property="og:description"
          content="Reach out to Mary Sophia for spiritual guidance, session inquiries, or messages from the heart. Email and form contact available."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://lightofsophia.com/contact-us"
        />
        <meta
          property="og:image"
          content="https://lightofsophia.com/images/Mary_Sophia_v2.png"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Mary Sophia",
            url: "https://lightofsophia.com/contact-us",
            description:
              "Reach out to Mary Sophia through our contact form or email. We're here to support your path with compassion and spiritual guidance.",
            contactOption: [
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "info@marysophia.com",
                availableLanguage: ["English"],
              },
            ],
            publisher: {
              "@type": "Organization",
              name: "Mary Sophia | Light of Sophia",
              url: "https://lightofsophia.com",
            },
          })}
        </script>
      </Helmet>
      <div className="bg-white py-16 pt-48 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="font-dancing-script text-5xl text-[#002147] mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-600 font-open-sans">
              We'd love to hear from you. Fill out the form below or send us an
              email.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-[55%] md:pr-12">
              <iframe
                src={"https://bv6w3pwoi5y.typeform.com/to/br75lVwu"}
                style={{ width: "100%", height: "600px", border: "0" }}
                allow="camera; microphone; autoplay; encrypted-media;"
              />
            </div>

            <div className="w-full md:w-[35%] md:pl-16">
              <div className="relative h-full">
                <img
                  src="/.netlify/images?url=/images/mary.jpg&w=600&h=800&fit=cover"
                  alt="Mary Sophia"
                  className="w-full h-auto rounded-lg shadow-xl object-cover md:sticky md:top-32"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="font-playfair text-2xl text-[#002147] mb-4">
              Other Ways to Connect
            </h2>
            <p className="text-gray-600 mb-4">
              <a
                href="mailto:hello@bluerose.love"
                className="text-[#002147] hover:underline"
              >
                hello@bluerose.love
              </a>
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.instagram.com/orderofthebluerose/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:text-[#003864] transition-colors duration-300"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.772-1.153c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@orderofthebluerose3878"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:text-[#003864] transition-colors duration-300"
              >
                <span className="sr-only">Youtube</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
