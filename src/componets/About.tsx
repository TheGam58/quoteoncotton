export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#141b1f] mb-6 leading-tight">
              ABOUT US
            </h2>
            <div className="space-y-4 text-[#283034] text-lg leading-relaxed">
              <p>
                At Quote on Cotton, we believe fashion should be a statement—not just of style, but of values.
                Our brand specializes in premium cotton printed T-shirts and hoodies that combine comfort with
                contemporary design.
              </p>
              <p>
                Committed to sustainability, we use eco-friendly materials and ethical practices.
                By choosing our products, you support a brand that values fashion and the environment.
                Explore our collection to find pieces that reflect your personality and values.
              </p>
              <p className="font-semibold">
                Wear your values. Make a statement. Choose Quote on Cotton.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-[#283034] rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cotton fabric texture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#fce08b] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
  