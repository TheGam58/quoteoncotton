import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navigation from '../componets/Navigation';
import { useCart } from '../Context/CartContext';
import { ShoppingBag, ArrowLeft, Star } from 'lucide-react';

interface HoodieStyle {
  id: string;
  name: string;
  image: string;
  description: string;
}

const HOODIE_STYLES: HoodieStyle[] = [
  {
    id: 'classic',
    name: 'Classic Black Hoodie',
    image: 'https://images.pexels.com/photos/3761681/pexels-photo-3761681.jpeg?auto=compress&cs=tinysrgb&w=1000',
    description: 'Timeless black hoodie with minimalist design and maximum comfort'
  },
  {
    id: 'minimalist',
    name: 'Minimalist Hoodie',
    image: 'https://images.pexels.com/photos/2769274/pexels-photo-2769274.jpeg?auto=compress&cs=tinysrgb&w=1000',
    description: 'Clean minimalist style with subtle branding'
  },
  {
    id: 'urban',
    name: 'Urban Style Hoodie',
    image: 'https://images.pexels.com/photos/4587993/pexels-photo-4587993.jpeg?auto=compress&cs=tinysrgb&w=1000',
    description: 'Street-inspired urban hoodie with bold graphics'
  },
  {
    id: 'premium',
    name: 'Premium Hoodie',
    image: 'https://images.pexels.com/photos/7974/pexels-photo-7974.jpeg?auto=compress&cs=tinysrgb&w=1000',
    description: 'Luxury premium hoodie with premium materials and finish'
  },
  {
    id: 'street',
    name: 'Street Hoodie',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1000',
    description: 'Modern street wear hoodie with contemporary flair'
  },
  {
    id: 'comfort',
    name: 'Comfort Hoodie',
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1000',
    description: 'Designed for maximum comfort and casual wear'
  }
];

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const COLORS = ['Black', 'White', 'Gray', 'Navy', 'Charcoal', 'Forest Green'];

const COLOR_MAP: { [key: string]: string } = {
  'Black': '#000000',
  'White': '#FFFFFF',
  'Gray': '#808080',
  'Navy': '#000080',
  'Charcoal': '#36454F',
  'Forest Green': '#228B22'
};

export default function Hoodies() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedStyle, setSelectedStyle] = useState<HoodieStyle | null>(null);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');

  const handleAddToCart = () => {
    if (!selectedStyle) return;

    addToCart({
      product_id: `hoodie-${selectedStyle.id}`,
      product_title: `${selectedStyle.name} - ${selectedSize}/${selectedColor}`,
      collection: 'hoodies',
      price: 1000,
      quantity: 1,
      image: selectedStyle.image,
    });
    alert('Added to cart!');
  };

  const handleBuyNow = () => {
    if (!selectedStyle) return;

    addToCart({
      product_id: `hoodie-${selectedStyle.id}`,
      product_title: `${selectedStyle.name} - ${selectedSize}/${selectedColor}`,
      collection: 'hoodies',
      price: 1000,
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
                <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-6 relative">
                  <img
                    src={selectedStyle.image}
                    alt={selectedStyle.name}
                    className="w-full h-96 object-cover"
                  />
                  {selectedColor !== 'Black' && (
                     <div 
                       className="absolute inset-0 pointer-events-none mix-blend-color opacity-40"
                       style={{ backgroundColor: COLOR_MAP[selectedColor]}}
                     />
                  )}
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="font-bold text-lg text-[#141b1f] mb-3">Style Gallery</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {HOODIE_STYLES.map(style => (
                      <button
                        key={style.id}
                        onClick={() => setSelectedStyle(style)}
                        className={`rounded-lg overflow-hidden border-2 transition ${
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
                    <span className="text-[#283034] font-semibold">(187 reviews)</span>
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
                      <span className="text-3xl font-bold text-[#fce08b]">₹1000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-[#141b1f]">Material</span>
                      <span className="text-[#283034]">100% Sustainable Cotton Blend</span>
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
                      Premium quality sustainable cotton blend
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#fce08b] mt-1">✓</span>
                      Unique artistic designs
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#fce08b] mt-1">✓</span>
                      Comfortable fit for all day wear
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
              HOODIES
            </h1>
            <p className="text-xl text-[#fce08b]">Choose your style and customize your perfect hoodie</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {HOODIE_STYLES.map(style => (
              <div key={style.id} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-white mb-4 shadow-lg hover:shadow-2xl transition">
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
                <p className="text-center text-[#fce08b] font-bold text-xl">₹1000</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
