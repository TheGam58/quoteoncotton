import { Menu, X, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { cart } = useCart();

  const scrollToSection = (sectionId: string) => {
    if (isHome) {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 p-6 bg-gradient-to-b from-black/50 to-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-wider text-white hover:text-[#fce08b] transition">
          QUOTE ON COTTON
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative text-white hover:text-[#fce08b] transition">
            <ShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#fce08b] text-[#141b1f] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex gap-8 uppercase text-sm tracking-wider text-white">
          {isHome ? (
            <>
              <button onClick={() => scrollToSection('about')} className="hover:text-[#fce08b] transition">About</button>
              <button onClick={() => scrollToSection('collections')} className="hover:text-[#fce08b] transition">Collections</button>
            </>
          ) : null}
          {isHome ? (
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#fce08b] transition">Contact</button>
          ) : (
            <Link to="/#contact" className="hover:text-[#fce08b] transition">Contact</Link>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-6 bg-[#283034] rounded-lg p-6 space-y-4">
          {isHome ? (
            <>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left uppercase text-sm tracking-wider text-white hover:text-[#fce08b] transition">About</button>
              <button onClick={() => scrollToSection('collections')} className="block w-full text-left uppercase text-sm tracking-wider text-white hover:text-[#fce08b] transition">Collections</button>
            </>
          ) : null}
          {isHome ? (
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left uppercase text-sm tracking-wider text-white hover:text-[#fce08b] transition">Contact</button>
          ) : (
            <Link to="/#contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-left uppercase text-sm tracking-wider text-white hover:text-[#fce08b] transition">Contact</Link>
          )}
        </div>
      )}
    </nav>
  );
}
