import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navigation from '../componets/Navigation';
import { useCart } from '../Context/CartContext';
import { ArrowLeft, Check } from 'lucide-react';

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, getTotalPrice } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#cfb8a9]">
        <Navigation />
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#141b1f] mb-6">CHECKOUT</h1>
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone ||
        !formData.address || !formData.city || !formData.state || !formData.pincode ||
        !formData.cardName || !formData.cardNumber || !formData.expiryDate || !formData.cvv) {
      alert('Please fill in all fields');
      return;
    }

    // Prepare data for Netlify Form submission
    const orderItems = cart.map(item => 
      `${item.product_title} (x${item.quantity}) - ₹${item.price * item.quantity}`
    ).join('\n');

    const formBody = new FormData();
    formBody.append('form-name', 'order');
    formBody.append('firstName', formData.firstName);
    formBody.append('lastName', formData.lastName);
    formBody.append('email', formData.email);
    formBody.append('phone', formData.phone);
    formBody.append('address', formData.address);
    formBody.append('city', formData.city);
    formBody.append('state', formData.state);
    formBody.append('pincode', formData.pincode);
    formBody.append('orderItems', orderItems);
    formBody.append('totalAmount', `₹${total}`);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formBody as any).toString(),
      });
      setOrderPlaced(true);
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('There was an error placing your order. Please try again.');
    }
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#cfb8a9]">
        <Navigation />
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-12 shadow-lg text-center">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-[#fce08b] rounded-full">
                <Check size={32} className="text-[#141b1f]" />
              </div>
              <h1 className="text-5xl font-bold text-[#141b1f] mb-4">Order Confirmed!</h1>
              <p className="text-xl text-[#283034] mb-8">
                Thank you for your purchase. Your order has been successfully placed.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
                <h2 className="text-2xl font-bold text-[#141b1f] mb-4">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between text-[#283034]">
                      <span>{item.product_title} (x{item.quantity})</span>
                      <span className="font-semibold">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t-2 border-gray-200 pt-4 flex justify-between text-xl font-bold text-[#141b1f]">
                  <span>Total</span>
                  <span className="text-[#fce08b]">₹{total}</span>
                </div>
              </div>
              <p className="text-[#283034] mb-8">
                A confirmation email has been sent to <span className="font-semibold">{formData.email}</span>
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => navigate('/')}
                  className="w-full bg-[#141b1f] text-white py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-[#283034] transition text-lg"
                >
                  Back to Home
                </button>
                <button
                  onClick={() => navigate('/explore')}
                  className="w-full bg-white text-[#141b1f] py-4 rounded-lg font-bold uppercase tracking-wider border-2 border-[#141b1f] hover:bg-gray-100 transition text-lg"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#cfb8a9]">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/cart" className="inline-flex items-center gap-2 text-[#283034] hover:text-[#141b1f] transition mb-8 font-semibold">
            <ArrowLeft size={20} />
            Back to Cart
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold text-[#141b1f] mb-12">CHECKOUT</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Shipping Information */}
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-[#141b1f] mb-6">Shipping Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#fce08b] text-[#141b1f]"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#fce08b] text-[#141b1f]"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#fce08b] text-[#141b1f]"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#fce08b] text-[#141b1f]"
                    />
                  </div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#fce08b] text-[#141b1f] mt-6"
                  />
                  <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#fce08b] text-[#141b1f]"
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#fce08b] text-[#141b1f]"
                    />
                    <input
                      type="text"
                      name="pincode"
                      placeholder="PIN Code"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#fce08b] text-[#141b1f]"
                    />
                  </div>
                </div>

                {/* Payment Information */}
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-[#141b1f] mb-6">Payment Information</h2>
                  <input
                    type="text"
                    name="cardName"
                    placeholder="Cardholder Name"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#fce08b] text-[#141b1f] mb-6"
                  />
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number (16 digits)"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    maxLength={16}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#fce08b] text-[#141b1f] mb-6"
                  />
                  <div className="grid grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      maxLength={5}
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#fce08b] text-[#141b1f]"
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      maxLength={3}
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#fce08b] text-[#141b1f]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#fce08b] text-[#141b1f] py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-white transition text-lg"
                >
                  Complete Order
                </button>
              </form>
            </div>

            {/* Order Summary Sidebar */}
            <div>
              <div className="bg-white rounded-lg p-8 shadow-lg sticky top-32">
                <h2 className="text-2xl font-bold text-[#141b1f] mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6 border-b-2 border-gray-200 pb-6">
                  {cart.map(item => (
                    <div key={item.id}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-[#141b1f]">{item.product_title}</span>
                        <span className="text-[#283034]">x{item.quantity}</span>
                      </div>
                      <div className="flex justify-between text-[#283034]">
                        <span className="text-sm">₹{item.price} each</span>
                        <span className="font-semibold">₹{item.price * item.quantity}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-[#283034]">
                    <span>Subtotal</span>
                    <span className="font-semibold">₹{total}</span>
                  </div>
                  <div className="flex justify-between text-[#283034]">
                    <span>Shipping</span>
                    <span className="font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between text-[#283034]">
                    <span>Tax</span>
                    <span className="font-semibold">₹0</span>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-4 flex justify-between text-xl font-bold text-[#141b1f]">
                    <span>Total</span>
                    <span className="text-[#fce08b]">₹{total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
