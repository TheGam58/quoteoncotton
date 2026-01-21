import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navigation from '../componets/Navigation';
import { useCart } from '../Context/CartContext';
import { ShoppingBag, ArrowLeft, Star } from 'lucide-react';
import skull1 from '../assets/Skull_1.jpg';
import skull2 from '../assets/Skull_2.jpg';
import skull3 from '../assets/Skull_3.jpg';
import skull4 from '../assets/Skull_4.jpg';
import skull5 from '../assets/Skull_5.jpg';
import skull6 from '../assets/Skull_6.jpg';
import skull7 from '../assets/Skull_7.jpg';
import skull8 from '../assets/Skull_8.jpg';
import skull9 from '../assets/Skull_9.jpg';
import skull10 from '../assets/Skull_10.jpg';
import skull11 from '../assets/Skull_11.png';

interface SkullStyle {
  id: string;
  name: string;
  image: string;
  description: string;
}

const SKULL_STYLES: SkullStyle[] = [
  {
    id: 'classic',
    name: 'Classic Skull',
    image: skull1,
    description: 'Timeless skull design with bold lines and traditional aesthetics'
  },
  {
    id: 'artistic',
    name: 'Artistic Skull',
    image: skull2,
    description: 'Artistic interpretation with flowing patterns and detailed elements'
  },
  {
    id: 'modern',
    name: 'Modern Skull',
    image: skull3,
    description: 'Contemporary minimalist skull with clean, sharp lines'
  },
  {
    id: 'gothic',
    name: 'Gothic Skull',
    image: skull4,
    description: 'Dark, moody gothic style with intricate details and shadows'
  },
  {
    id: 'geometric',
    name: 'Geometric Skull',
    image: skull5,
    description: 'Abstract geometric skull with mathematical precision'
  },
  {
    id: 'vintage',
    name: 'Vintage Skull',
    image: skull6,
    description: 'Retro-inspired design with aged texture and classic appeal'
  },
  {  
    id: 'Bikers',
    name: 'Bikers Skull',
    image: skull7,
    description: 'Retro-inspired design with aged texture and classic appeal'
  },
  {
    id: 'Futuristic',
    name: 'Futuristic Skull',
    image: skull8,
    description: 'Retro-inspired design with aged texture and classic appeal'
  },
  {
    id: 'Space',
    name: 'Space Skull',
    image: skull9,
    description: 'Retro-inspired design with aged texture and classic appeal'
  },
  {
    id: 'Retro',
    name: 'Retro Skull',
    image: skull10,
    description: 'Retro-inspired design with aged texture and classic appeal'
  },
  {
    id: 'Minimalist',
    name: 'Minimalist Skull',
    image: skull11,
    description: 'Retro-inspired design with aged texture and classic appeal'
  },
];

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const COLORS = ['Black', 'White', 'Navy', 'Gray', 'Red', 'Dark Green'];

 
export default function SkullCollections() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedStyle, setSelectedStyle] = useState<SkullStyle | null>(null);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');

  const handleAddToCart = () => {
    if (!selectedStyle) return;

    addToCart({
      product_id: `skull-${selectedStyle.id}`,
      product_title: `${selectedStyle.name} - ${selectedSize}/${selectedColor}`,
      collection: 'skull',
      price: 700,
      quantity: 1,
      image: selectedStyle.image,
    });
    alert('Added to cart!');
  };

  const handleBuyNow = () => {
    if (!selectedStyle) return;

    addToCart({
      product_id: `skull-${selectedStyle.id}`,
      product_title: `${selectedStyle.name} - ${selectedSize}/${selectedColor}`,
      collection: 'skull',
      price: 700,
      quantity: 1,
      image: selectedStyle.image,
    });
    navigate('/cart');
  };

  if (selectedStyle) {
    return (
      <div className="min-h-screen bg-[#cfb8a9]">
        <Navigation />
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => setSelectedStyle(null)}
              className="inline-flex items-center gap-2 text-[#283034] hover:text-[#141b1f] transition mb-8 font-semibold"
            >
              <ArrowLeft size={20} />
              Back to Styles
            </button>

            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-6 group cursor-pointer">
                  <img
                    src={selectedStyle.image}
                    alt={selectedStyle.name}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="font-bold text-lg text-[#141b1f] mb-3">Style Gallery</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {SKULL_STYLES.map(style => (
                      <button
                        key={style.id}
                        onClick={() => setSelectedStyle(style)}
                        className={`block w-full rounded-lg overflow-hidden border-2 transition ${
                          selectedStyle.id === style.id
                            ? 'border-[#141b1f]'
                            : 'border-gray-300'
                        }`}
                      >
                        <img
                          src={style.image}
                          alt={style.name}
                          className="w-full h-20 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold text-[#141b1f] mb-2">{selectedStyle.name}</h1>
                  <p className="text-lg text-[#283034] mb-6">{selectedStyle.description}</p>

                  <div className="flex items-center gap-2 mb-8">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} className="fill-[#fce08b] text-[#fce08b]" />
                      ))}
                    </div>
                    <span className="text-[#283034] font-semibold">(156 reviews)</span>
                  </div>

                  <div className="bg-white rounded-lg p-6 mb-8 space-y-6">
                    <div>
                      <label className="block text-lg font-semibold text-[#141b1f] mb-3">Select Size</label>
                      <div className="grid grid-cols-3 gap-2">
                        {SIZES.map(size => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`py-3 rounded-lg font-semibold transition border-2 ${
                              selectedSize === size
                                ? 'bg-[#fce08b] text-[#141b1f] border-[#141b1f]'
                                : 'bg-white text-[#141b1f] border-gray-300 hover:border-[#141b1f]'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-[#141b1f] mb-3">Select Color</label>
                      <div className="grid grid-cols-3 gap-2">
                        {COLORS.map(color => (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`py-3 rounded-lg font-semibold transition border-2 ${
                              selectedColor === color
                                ? 'bg-[#fce08b] text-[#141b1f] border-[#141b1f]'
                                : 'bg-white text-[#141b1f] border-gray-300 hover:border-[#141b1f]'
                            }`}
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                      <span className="text-lg font-semibold text-[#141b1f]">Price</span>
                      <span className="text-3xl font-bold text-[#fce08b]">₹700</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-[#141b1f]">Material</span>
                      <span className="text-[#283034]">100% Sustainable Cotton</span>
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
                      Comfortable fit for all body types
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#fce08b] mt-1">✓</span>
                      Ethically produced and eco-friendly
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#141b1f] mb-3">Care Instructions</h3>
                  <ul className="space-y-2 text-[#283034]">
                    <li>Wash in cold water</li>
                    <li>Turn inside out before washing</li>
                    <li>Air dry for best results</li>
                    <li>Avoid harsh chemicals and bleach</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#141b1f]">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-[#fce08b] hover:text-white transition mb-8 font-semibold">
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
              SKULL COLLECTIONS
            </h1>
            <p className="text-xl text-[#fce08b]">Choose your style and customize your perfect skull design</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {SKULL_STYLES.map(style => (  
              <div key={style.id} className="group">
                <div className="relative w-full h-64 overflow-hidden rounded-lg cursor-pointer bg-white mb-4 shadow-lg hover:shadow-2xl transition">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => setSelectedStyle(style)}
                      className="bg-[#fce08b] text-[#141b1f] px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white transition"
                    >
                      <ShoppingBag size={20} />
                      <span>CUSTOMIZE</span>
                    </button>
                  </div>
                </div>
                <h3 className="font-bold text-white text-lg text-center mb-2">{style.name}</h3>
                <p className="text-center text-[#fce08b] font-bold text-xl">₹700</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
