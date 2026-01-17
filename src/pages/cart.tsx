import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../componets/Navigation';
import { useCart } from '../Context/CartContext';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';

export default function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#cfb8a9]">
        <Navigation />
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#141b1f] mb-6">SHOPPING CART</h1>
            <p className="text-xl text-[#283034] mb-12">Your cart is empty</p>
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 bg-[#141b1f] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-[#283034] transition"
            >
              <ArrowLeft size={20} />
              Continue Shopping
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const total = getTotalPrice();

  return (
    <div className="min-h-screen bg-[#cfb8a9]">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-[#283034] hover:text-[#141b1f] transition mb-8 font-semibold">
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold text-[#141b1f] mb-12">SHOPPING CART</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="bg-white rounded-lg p-6 shadow-lg flex gap-6">
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.product_title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-[#141b1f]">{item.product_title}</h3>
                      <p className="text-[#283034] mb-2">{item.collection}</p>
                      <p className="text-2xl font-bold text-[#fce08b]">₹{item.price}</p>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition"
                      >
                        <Trash2 size={24} />
                      </button>

                      <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded transition"
                        >
                          <Minus size={18} className="text-[#141b1f]" />
                        </button>
                        <span className="w-8 text-center font-bold text-[#141b1f]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded transition"
                        >
                          <Plus size={18} className="text-[#141b1f]" />
                        </button>
                      </div>

                      <p className="text-lg font-bold text-[#141b1f]">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg p-8 shadow-lg sticky top-32">
                <h2 className="text-2xl font-bold text-[#141b1f] mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-[#283034]">
                    <span>Subtotal</span>
                    <span className="font-semibold">₹{total}</span>
                  </div>
                  <div className="flex justify-between text-[#283034]">
                    <span>Shipping</span>
                    <span className="font-semibold">Free</span>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-4 flex justify-between text-xl font-bold text-[#141b1f]">
                    <span>Total</span>
                    <span className="text-[#fce08b]">₹{total}</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-[#141b1f] text-white py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-[#283034] transition mb-3 text-lg"
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={() => clearCart()}
                  className="w-full bg-white text-[#141b1f] py-3 rounded-lg font-bold uppercase tracking-wider border-2 border-[#141b1f] hover:bg-gray-100 transition"
                >
                  Clear Cart
                </button>

                <Link
                  to="/explore"
                  className="block text-center mt-4 text-[#283034] hover:text-[#141b1f] transition font-semibold"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
