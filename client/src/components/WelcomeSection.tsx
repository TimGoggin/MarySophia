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
                backgroundImage: `url(/src/images/rose-${(i % 3) + 1}.png)`,
                animationDelay: `${baseDelay + Math.random() * 5}s`,
                left: `${(gridCol * 33) + Math.random() * 10}%`,
                top: `${(gridRow * 25) + Math.random() * 10}%`,
                opacity: 0,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          );
        })}
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-playfair text-3xl md:text-4xl text-[#00AEEF] mb-6">
          Welcome to Sacred Space
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-8 font-open-sans">
          As a teacher of the Way of Mary and follower of Christ, I serve as a
          channel for the divine wisdom of Mother Mary, Mary Magdalene, and the
          Angelic Realm. Through the Order of the Blue Rose, I help others
          awaken their divine essence, embody the Wisdom of the Heart, and
          reconnect with the sacred feminine. My work blends ancient teachings
          with divine guidance to support spiritual awakening and living one’s
          Original Blessing on Earth.
        </p>
      </div>
    </section>
  );
}
