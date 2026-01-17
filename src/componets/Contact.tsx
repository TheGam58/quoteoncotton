import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-[#cfb8a9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-[#141b1f] mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-xl text-[#283034]">We'd love to hear from you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-[#141b1f] mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#fce08b] p-3 rounded-full">
                    <Phone className="text-[#141b1f]" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#141b1f]">Phone</p>
                    <a href="tel:+919315051275" className="text-[#283034] hover:text-[#141b1f] transition">
                      +91 9315051275
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#fce08b] p-3 rounded-full">
                    <Mail className="text-[#141b1f]" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#141b1f]">Email</p>
                    <a href="mailto:info@quoteoncotton.com" className="text-[#283034] hover:text-[#141b1f] transition">
                      info@quoteoncotton.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#fce08b] p-3 rounded-full">
                    <MapPin className="text-[#141b1f]" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#141b1f]">Location</p>
                    <p className="text-[#283034]">Serving customers nationwide</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-[#141b1f] mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <button className="bg-[#283034] p-3 rounded-full hover:bg-[#141b1f] transition">
                    <Instagram className="text-white" size={20} />
                  </button>
                  <button className="bg-[#283034] p-3 rounded-full hover:bg-[#141b1f] transition">
                    <Facebook className="text-white" size={20} />
                  </button>
                  <button className="bg-[#283034] p-3 rounded-full hover:bg-[#141b1f] transition">
                    <Twitter className="text-white" size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#141b1f] mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#141b1f] mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#fce08b] focus:outline-none transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#141b1f] mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#fce08b] focus:outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#141b1f] mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#fce08b] focus:outline-none transition"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#141b1f] mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#fce08b] focus:outline-none transition resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#141b1f] text-white py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-[#283034] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center text-[#283034]">
          <p className="text-sm">
            © 2024 Quote on Cotton. All rights reserved. | Sustainable Fashion | Ethical Production
          </p>
        </div>
      </div>
    </section>
  );
}
