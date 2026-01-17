import { useParams, Link, useNavigate } from 'react-router-dom';
import Navigation from '../componets/Navigation';
import { ShoppingBag, ArrowLeft, Star } from 'lucide-react';
import { useCart } from '../Context/CartContext';

interface CollectionData {
  [key: string]: {
    title: string;
    description: string;
    longDescription: string;
    price: number;
    images: string[];
  };
}

const collectionData: CollectionData = {
  skull: {
    title: 'Skull Collection',
    description: 'Bold and edgy designs featuring artistic skull prints',
    longDescription: 'Our Skull Collection is for those who dare to stand out. Each piece features intricate, artistic skull designs that combine bold aesthetics with premium cotton comfort. Perfect for making a statement and expressing your unique personality.',
    price: 700,
    images: [
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1000',
      'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=1000',
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1000',
      'https://images.pexels.com/photos/5870363/pexels-photo-5870363.jpeg?auto=compress&cs=tinysrgb&w=1000',
      'https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg?auto=compress&cs=tinysrgb&w=1000',
      'https://images.pexels.com/photos/2889438/pexels-photo-2889438.jpeg?auto=compress&cs=tinysrgb&w=1000',
    ]
  },
  hoodies: {
    title: 'Hoodies',
    description: 'Comfortable and stylish hoodies with unique prints',
    longDescription: 'Stay warm and stylish with our premium hoodie collection. Made from the finest sustainable cotton blends, our hoodies feature unique prints that let you express your personality while maintaining superior comfort and durability.',
    price: 1000,
    images: [
      'https://images.pexels.com/photos/3761681/pexels-photo-3761681.jpeg?auto=compress&cs=tinysrgb&w=1000',
      'https://images.pexels.com/photos/2769274/pexels-photo-2769274.jpeg?auto=compress&cs=tinysrgb&w=1000',
      'https://images.pexels.com/photos/4587993/pexels-photo-4587993.jpeg?auto=compress&cs=tinysrgb&w=1000',
      'https://images.pexels.com/photos/7974/pexels-photo-7974.jpeg?auto=compress&cs=tinysrgb&w=1000',
      'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1000',
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1000',
    ]
  },
  custom: {
    title: 'Custom Prints',
    description: 'Personalized designs tailored to your preferences',
    longDescription: 'Make it uniquely yours with our custom print service. Whether you have a specific design in mind or need help creating one, our team will work with you to bring your vision to life on premium cotton apparel tailored to your specifications.',
    price: 1000,
    images: [
      'https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=1000',
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1000',
      'https://images.pexels.com/photos/8532608/pexels-photo-8532608.jpeg?auto=compress&cs=tinysrgb&w=1000',
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1000',
      'https://images.pexels.com/photos/2889438/pexels-photo-2889438.jpeg?auto=compress&cs=tinysrgb&w=1000',
      'https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg?auto=compress&cs=tinysrgb&w=1000',
    ]
  }
};

export default function CollectionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const collection = id && collectionData[id] ? collectionData[id] : collectionData.skull;

  const handleAddToCart = () => {
    addToCart({
      product_id: id || 'skull',
      product_title: collection.title,
      collection: id || 'skull',
      price: collection.price,
      quantity: 1,
      image: collection.images[0],
    });
    alert('Added to cart!');
  };

  const handleBuyNow = () => {
    addToCart({
      product_id: id || 'skull',
      product_title: collection.title,
      collection: id || 'skull',
      price: collection.price,
      quantity: 1,
      image: collection.images[0],
    });
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-[#cfb8a9]">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-[#283034] hover:text-[#141b1f] transition mb-8 font-semibold">
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-6">
                <img
                  src={collection.images[0]}
                  alt={collection.title}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {collection.images.map((image, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition">
                    <img
                      src={image}
                      alt={`${collection.title} ${index + 1}`}
                      className="w-full h-24 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-[#141b1f] mb-4">{collection.title}</h1>

                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="fill-[#fce08b] text-[#fce08b]" />
                    ))}
                  </div>
                  <span className="text-[#283034] font-semibold">(156 reviews)</span>
                </div>

                <p className="text-xl text-[#283034] mb-6 leading-relaxed">
                  {collection.longDescription}
                </p>

                <div className="bg-white rounded-lg p-6 mb-8 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-[#141b1f]">Price</span>
                    <span className="text-3xl font-bold text-[#fce08b]">₹{collection.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-[#141b1f]">Material</span>
                    <span className="text-[#283034]">100% Sustainable Cotton</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-[#141b1f]">Available Sizes</span>
                    <span className="text-[#283034]">XS - XXL</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-[#fce08b] text-[#141b1f] py-4 rounded-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white transition text-lg"
                >
                  <ShoppingBag size={24} />
                  Buy Now
                </button>
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-[#141b1f] text-white py-4 rounded-lg font-bold uppercase tracking-wider border-2 border-[#141b1f] hover:bg-[#283034] transition text-lg"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#141b1f] mb-6">Product Details</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-[#141b1f] mb-3">Features</h3>
                <ul className="space-y-2 text-[#283034]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#fce08b] mt-1">✓</span>
                    Premium quality sustainable cotton
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fce08b] mt-1">✓</span>
                    Unique artistic designs
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fce08b] mt-1">✓</span>
                    Comfortable fit
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fce08b] mt-1">✓</span>
                    Ethically produced
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#141b1f] mb-3">Care Instructions</h3>
                <ul className="space-y-2 text-[#283034]">
                  <li>Wash in cold water</li>
                  <li>Turn inside out before washing</li>
                  <li>Air dry for best results</li>
                  <li>Avoid harsh chemicals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
