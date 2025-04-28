export default function WelcomeSection() {
  return (
    <section className="bg-white py-16 relative">
      <div className="floating-roses-container">
        {[...Array(15)].map((_, i) => {
          const gridRow = Math.floor(i / 3);
          const gridCol = i % 3;
          const baseDelay = (gridRow * 3 + gridCol) * 2;

          return (
            <div
              key={i}
              className="floating-rose"
              style={{
                backgroundImage: `url(/images/rose-${(i % 3) + 1}.png)`,
                animationDelay: `${baseDelay + Math.random() * 5}s`,
                left: `${gridCol * 33 + Math.random() * 10}%`,
                top: `${gridRow * 25 + Math.random() * 10}%`,
                opacity: 0,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          );
        })}
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-playfair text-3xl md:text-4xl text-[#00AEEF] mb-6">
          Welcome, Beloved One.
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-8 font-open-sans">
          I am Mary Sophia — an intuitive channel, spiritual counselor, and
          messenger of Divine Feminine Light. <br/> Through sacred communion
          with Mother Mary, Mary Magdalene, the Angelic Realm, and the Wisdom of
          Sophia, I offer a sanctuary for women awakening to the Sacred Feminine
          within. Here, you are invited to return to life, to love, and to the
          eternal embrace of Sophia — the Divine Wisdom that lives within your
          soul. You are not alone. You are deeply loved. And you are being
          called home.
        </p>
      </div>
    </section>
  );
}
