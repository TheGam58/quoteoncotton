import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navigation from '../componets/Navigation';
import { useCart } from '../Context/CartContext';
import { ShoppingBag, ArrowLeft, Star, Upload, X } from 'lucide-react';

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const APPAREL_COLORS = ['Black', 'White', 'Navy', 'Gray', 'Red', 'Heather Gray'];
const PRINT_TYPES = ['Screen Print', 'Direct-to-Garment', 'Embroidery', 'Heat Transfer'];
const IMAGE_POSITIONS = ['Center', 'Left', 'Right', 'Full Front', 'Back Only'];

export default function CustomPrints() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedPrintType, setSelectedPrintType] = useState('Screen Print');
  const [selectedPosition, setSelectedPosition] = useState('Center');
  const [quantity, setQuantity] = useState(1);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const validateImage = (file: File): string | null => {
    // Check file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      return 'Please upload a valid image file (JPEG, PNG, GIF, or WebP)';
    }

    // Check file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
      return 'Image size should be less than 10MB';
    }

    return null;
  };

  const handleImageUpload = (file: File) => {
    setUploadError(null);
    
    const error = validateImage(file);
    if (error) {
      setUploadError(error);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setUploadedImage(event.target?.result as string);
      setUploadError(null);
    };
    reader.onerror = () => {
      setUploadError('Failed to read image file. Please try again.');
    };
    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleAddToCart = () => {
    if (!uploadedImage) {
      alert('Please upload an image for your custom print');
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addToCart({
        product_id: `custom-print-${Date.now()}-${i}`,
        product_title: `Custom Print - ${selectedSize}/${selectedColor} - ${selectedPrintType}`,
        collection: 'custom',
        price: 1000,
        quantity: 1,
        image: uploadedImage,
      });
    }
    alert(`Added ${quantity} item(s) to cart!`);
  };

  const handleBuyNow = () => {
    if (!uploadedImage) {
      alert('Please upload an image for your custom print');
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addToCart({
        product_id: `custom-print-${Date.now()}-${i}`,
        product_title: `Custom Print - ${selectedSize}/${selectedColor} - ${selectedPrintType}`,
        collection: 'custom',
        price: 1000,
        quantity: 1,
        image: uploadedImage,
      });
    }
    navigate('/cart');
  };

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
              CUSTOM PRINTS
            </h1>
            <p className="text-xl text-[#fce08b]">Create your unique design with unlimited customization options</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-6">
                {uploadedImage ? (
                  <div
                    className="w-full h-96 flex items-center justify-center relative rounded-lg overflow-hidden"
                    style={{ 
                      backgroundColor: 
                        selectedColor === 'Black' ? '#000000' : 
                        selectedColor === 'White' ? '#ffffff' :
                        selectedColor === 'Navy' ? '#001f3f' : 
                        selectedColor === 'Red' ? '#dc2626' : 
                        selectedColor === 'Gray' ? '#6b7280' : 
                        selectedColor === 'Heather Gray' ? '#9ca3af' : '#ffffff'
                    }}
                  >
                    <div className="relative z-10">
                      <img
                        src={uploadedImage}
                        alt="Custom design preview"
                        className="max-w-xs max-h-80 object-contain drop-shadow-lg"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <p className="text-white text-sm font-semibold bg-black/50 px-3 py-1 rounded-full inline-block">
                        {selectedColor} • {selectedSize} • {selectedPosition}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div 
                    className="w-full h-96 flex items-center justify-center rounded-lg"
                    style={{ 
                      backgroundColor: 
                        selectedColor === 'Black' ? '#000000' : 
                        selectedColor === 'White' ? '#ffffff' :
                        selectedColor === 'Navy' ? '#001f3f' : 
                        selectedColor === 'Red' ? '#dc2626' : 
                        selectedColor === 'Gray' ? '#6b7280' : 
                        selectedColor === 'Heather Gray' ? '#9ca3af' : '#f3f4f6'
                    }}
                  >
                    <span className="text-center" style={{ color: selectedColor === 'Black' || selectedColor === 'Navy' ? '#fff' : '#000' }}>
                      <p className="text-lg font-semibold">Preview Area</p>
                      <p className="text-sm">Upload your image to see preview</p>
                      <p className="text-xs mt-2 opacity-75">Selected: {selectedColor} • {selectedSize}</p>
                    </span>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
                <h3 className="font-bold text-lg text-[#141b1f] mb-4">Upload Your Design</h3>
                
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition ${
                    isDragging
                      ? 'border-[#fce08b] bg-[#fce08b]/10'
                      : 'border-gray-300 hover:border-[#fce08b]'
                  }`}
                >
                  {uploadedImage ? (
                    <div className="space-y-4">
                      <div className="relative inline-block">
                        <img
                          src={uploadedImage}
                          alt="Uploaded design preview"
                          className="max-w-full max-h-48 object-contain rounded-lg"
                        />
                      </div>
                      <button
                        onClick={() => {
                          setUploadedImage(null);
                          setUploadError(null);
                        }}
                        className="w-full flex items-center justify-center gap-2 text-red-600 hover:text-red-800 transition font-semibold py-2"
                      >
                        <X size={20} />
                        Remove Image
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload size={48} className="mx-auto mb-4 text-gray-400" />
                      <p className="text-[#141b1f] font-semibold mb-2">
                        Drag & drop your image here, or
                      </p>
                      <label className="inline-flex items-center justify-center gap-3 cursor-pointer bg-[#fce08b] hover:bg-yellow-300 transition text-[#141b1f] font-semibold py-3 px-6 rounded-lg border-2 border-[#141b1f]">
                        <Upload size={20} />
                        <span>Choose Image</span>
                        <input
                          type="file"
                          accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                          onChange={handleFileInputChange}
                          className="hidden"
                        />
                      </label>
                      <p className="text-sm text-gray-500 mt-3">
                        Supported formats: JPEG, PNG, GIF, WebP (Max 10MB)
                      </p>
                    </>
                  )}
                </div>
                
                {uploadError && (
                  <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm font-semibold">{uploadError}</p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-bold text-lg text-[#141b1f] mb-3">Design Tips</h3>
                <ul className="space-y-2 text-sm text-[#283034]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#fce08b] font-bold">•</span>
                    High-resolution images produce best results
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#fce08b] font-bold">•</span>
                    PNG format with transparent background recommended
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#fce08b] font-bold">•</span>
                    Minimum 300x300px for best quality
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#fce08b] font-bold">•</span>
                    Our team can help refine your design
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-5xl md:text-5xl font-bold text-white mb-3">Customize Your Apparel</h1>

                <div className="flex items-center gap-2 mb-8">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="fill-[#fce08b] text-[#fce08b]" />
                    ))}
                  </div>
                  <span className="text-gray-400 font-semibold">(234 reviews)</span>
                </div>

                <div className="bg-[#283034] rounded-lg p-6 space-y-6 mb-8">
                  <div>
                    <label className="block text-lg font-semibold text-white mb-3">Apparel Color</label>
                    <div className="grid grid-cols-3 gap-2">
                      {APPAREL_COLORS.map(color => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`py-2 px-3 rounded-lg font-semibold transition border-2 text-sm ${
                            selectedColor === color
                              ? 'bg-[#fce08b] text-[#141b1f] border-[#fce08b]'
                              : 'bg-[#141b1f] text-white border-[#141b1f] hover:border-[#fce08b]'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-white mb-3">Size</label>
                    <div className="grid grid-cols-3 gap-2">
                      {SIZES.map(size => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`py-2 px-3 rounded-lg font-semibold transition border-2 text-sm ${
                            selectedSize === size
                              ? 'bg-[#fce08b] text-[#141b1f] border-[#fce08b]'
                              : 'bg-[#141b1f] text-white border-[#141b1f] hover:border-[#fce08b]'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-white mb-3">Print Type</label>
                    <select
                      value={selectedPrintType}
                      onChange={(e) => setSelectedPrintType(e.target.value)}
                      className="w-full bg-[#141b1f] text-white border-2 border-[#fce08b] rounded-lg px-4 py-2 font-semibold focus:outline-none"
                    >
                      {PRINT_TYPES.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-white mb-3">Design Position</label>
                    <select
                      value={selectedPosition}
                      onChange={(e) => setSelectedPosition(e.target.value)}
                      className="w-full bg-[#141b1f] text-white border-2 border-[#fce08b] rounded-lg px-4 py-2 font-semibold focus:outline-none"
                    >
                      {IMAGE_POSITIONS.map(position => (
                        <option key={position} value={position}>{position}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-white mb-3">Quantity</label>
                    <div className="flex items-center gap-3 bg-[#141b1f] rounded-lg p-3 border-2 border-[#fce08b]">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="bg-[#fce08b] text-[#141b1f] w-10 h-10 rounded font-bold hover:bg-yellow-300 transition"
                      >
                        -
                      </button>
                      <span className="text-white font-bold text-lg flex-1 text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="bg-[#fce08b] text-[#141b1f] w-10 h-10 rounded font-bold hover:bg-yellow-300 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#fce08b]">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-semibold">Price per item</span>
                      <span className="text-[#fce08b] font-bold text-lg">₹1000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold">Total</span>
                      <span className="text-[#fce08b] font-bold text-2xl">₹{1000 * quantity}</span>
                    </div>
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
                  className="w-full bg-[#141b1f] text-white py-4 rounded-lg font-bold uppercase tracking-wider border-2 border-[#fce08b] hover:border-white transition text-lg"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="font-bold text-lg text-[#141b1f] mb-3">Premium Quality</h3>
              <p className="text-[#283034]">High-definition printing with vibrant, long-lasting colors that won't fade.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="font-bold text-lg text-[#141b1f] mb-3">Eco-Friendly</h3>
              <p className="text-[#283034]">100% sustainable cotton apparel with water-based, eco-conscious inks.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="font-bold text-lg text-[#141b1f] mb-3">Design Support</h3>
              <p className="text-[#283034]">Our design team can help refine your image or create something from scratch.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
