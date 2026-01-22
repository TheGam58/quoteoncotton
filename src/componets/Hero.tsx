export default function Hero() {

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="relative min-h-screen bg-[#141b1f] text-white pt-24">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
      </div>
      <div className="relative flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-5xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
            QUOTE ON COTTON
          </h1>
          <p className="text-2xl md:text-4xl font-light tracking-widest mb-12 text-[#fce08b]">
            FASHION THAT SPEAKS
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Sustainable cotton printed T-shirts and hoodies with trendy designs
          </p>
          <button
            onClick={() => scrollToSection('collections')}
            className="bg-[#fce08b] text-[#141b1f] px-12 py-4 rounded-full text-lg font-semibold uppercase tracking-wider hover:bg-white transition transform hover:scale-105"
          >
            View Collections
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#cfb8a9] to-transparent"></div>
    </div>
  );
}
