import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

interface CollectionLink extends Collection {
  path: string;
}

const collections: CollectionLink[] = [
  {
    id: 'skull',
    title: 'Skull Collection',
    description: 'Bold and edgy designs featuring artistic skull prints for those who dare to stand out.',
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'TRENDING',
    path: '/skull-collections'
  },
  {
    id: 'hoodies',
    title: 'Hoodies',
    description: 'Comfortable and stylish hoodies with unique prints. Perfect for any season.',
    image: 'https://images.pexels.com/photos/8532608/pexels-photo-8532608.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'POPULAR',
    path: '/hoodies'
  },
  {
    id: 'custom',
    title: 'Custom Prints',
    description: 'Personalized designs tailored to your preferences. Make it uniquely yours.',
    image: 'https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'EXCLUSIVE',
    path: '/custom-prints'
  }
];

export default function Collections() {
  return (
    <section id="collections" className="py-20 px-6 bg-[#cfb8a9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-[#141b1f] mb-4">
            FEATURED COLLECTIONS
          </h2>
          <p className="text-xl text-[#283034]">Discover our latest trendy designs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={collection.path}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-[#fce08b] text-[#141b1f] px-4 py-1 rounded-full text-sm font-bold">
                  {collection.tag}
                </span>
              </div>

              <div className="aspect-video overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 bg-[#283034] text-white">
                <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                <p className="text-gray-300 mb-4">{collection.description}</p>
                <div className="flex items-center gap-2 bg-[#fce08b] text-[#141b1f] px-6 py-2 rounded-full font-semibold hover:bg-white transition w-fit">
                  <ShoppingBag size={18} />
                  <span>SHOP NOW</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
