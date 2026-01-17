import Navigation from '../componets/Navigation';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Design {
  image: string;
  collection: 'skull' | 'hoodies' | 'custom';
  price: number;
}

const designs: Design[] = [
  { image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800', collection: 'skull', price: 700 },
  { image: 'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=800', collection: 'skull', price: 700 },
  { image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800', collection: 'skull', price: 700 },
  { image: 'https://images.pexels.com/photos/5870363/pexels-photo-5870363.jpeg?auto=compress&cs=tinysrgb&w=800', collection: 'skull', price: 700 },
  { image: 'https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg?auto=compress&cs=tinysrgb&w=800', collection: 'skull', price: 700 },
  { image: 'https://images.pexels.com/photos/2889438/pexels-photo-2889438.jpeg?auto=compress&cs=tinysrgb&w=800', collection: 'skull', price: 700 },
  { image: 'https://images.pexels.com/photos/8532608/pexels-photo-8532608.jpeg?auto=compress&cs=tinysrgb&w=800', collection: 'hoodies', price: 1000 },
  { image: 'https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg?auto=compress&cs=tinysrgb&w=800', collection: 'hoodies', price: 1000 },
  { image: 'https://images.pexels.com/photos/2889438/pexels-photo-2889438.jpeg?auto=compress&cs=tinysrgb&w=800', collection: 'hoodies', price: 1000 },
  { image: 'https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=800', collection: 'hoodies', price: 1000 },
  { image: 'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=800', collection: 'hoodies', price: 1000 },
  { image: 'https://images.pexels.com/photos/5870363/pexels-photo-5870363.jpeg?auto=compress&cs=tinysrgb&w=800', collection: 'hoodies', price: 1000 },
  { image: 'https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=800', collection: 'custom', price: 1000 },
  { image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800', collection: 'custom', price: 1000 },
  { image: 'https://images.pexels.com/photos/8532608/pexels-photo-8532608.jpeg?auto=compress&cs=tinysrgb&w=800', collection: 'custom', price: 1000 },
  { image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800', collection: 'custom', price: 1000 },
  { image: 'https://images.pexels.com/photos/2889438/pexels-photo-2889438.jpeg?auto=compress&cs=tinysrgb&w=800', collection: 'custom', price: 1000 },
  { image: 'https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg?auto=compress&cs=tinysrgb&w=800', collection: 'custom', price: 1000 },
];

export default function ExploreDesigns() {
  const getCollectionLink = (collection: string): string => {
    switch (collection) {
      case 'skull':
        return '/skull-collections';
      case 'hoodies':
        return '/hoodies';
      case 'custom':
        return '/custom-prints';
      default:
        return '/';
    }
  };

  const getButtonText = (collection: string): string => {
    switch (collection) {
      case 'skull':
        return 'SKULL COLLECTION';
      case 'hoodies':
        return 'HOODIES';
      case 'custom':
        return 'CUSTOM PRINTS';
      default:
        return 'VIEW';
    }
  };

  return (
    <div className="min-h-screen bg-[#141b1f]">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
              EXPLORE DESIGNS
            </h1>
            <p className="text-xl text-[#fce08b]">Discover all our amazing collections</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {designs.map((design, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-white"
              >
                <img
                  src={design.image}
                  alt={`Design ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                  <Link
                    to={getCollectionLink(design.collection)}
                    className="bg-[#fce08b] text-[#141b1f] px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white transition"
                  >
                    <ShoppingBag size={20} />
                    <span>{getButtonText(design.collection)}</span>
                  </Link>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#283034] text-white p-3 text-center">
                  <p className="font-bold">₹{design.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
