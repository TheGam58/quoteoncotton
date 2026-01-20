import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Home from './pages/home';
import CollectionDetail from './pages/collectiondetail';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import SkullCollections from './pages/skullcollections';
import Hoodies from './pages/hoodies';
import CustomPrints from './pages/customprints';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection/:id" element={<CollectionDetail />} />
          <Route path="/skull-collections" element={<SkullCollections />} />
          <Route path="/hoodies" element={<Hoodies />} />
          <Route path="/custom-prints" element={<CustomPrints />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
