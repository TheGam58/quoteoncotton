const galleryImages = [
  'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/8532608/pexels-photo-8532608.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/5870363/pexels-photo-5870363.jpeg?auto=compress&cs=tinysrgb&w=600'
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6 bg-[#141b1f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            OUR DESIGNS
          </h2>
          <p className="text-xl text-[#fce08b]">Every piece tells a story</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-[#cfb8a9] rounded-lg p-8 max-w-2xl">
            <h3 className="text-3xl font-bold text-[#141b1f] mb-4">COMING SOON</h3>
            <p className="text-lg text-[#283034]">
              New collections launching soon. Stay tuned for fresh designs and exclusive drops!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
