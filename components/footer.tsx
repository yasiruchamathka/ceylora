"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, ArrowUp, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-stone-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Top Section: Brand & Newsletter --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-light tracking-[0.3em] uppercase mb-6 text-stone-900">
              Ceylora
            </h2>
            <p className="text-stone-500 text-sm font-light leading-relaxed mb-8 max-w-sm">
              Crafting stories in gold and gemstones since 2026. Every piece is a testament to the beauty of ethical craftsmanship and timeless design.
            </p>
            <div className="flex gap-6">
              <Instagram className="w-4 h-4 text-stone-400 hover:text-stone-900 cursor-pointer transition-colors" />
              <Facebook className="w-4 h-4 text-stone-400 hover:text-stone-900 cursor-pointer transition-colors" />
              <Twitter className="w-4 h-4 text-stone-400 hover:text-stone-900 cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-900 mb-6">Collections</h4>
              <ul className="space-y-4 text-stone-500 text-[11px] uppercase tracking-widest font-medium">
                <li><a href="#" className="hover:text-stone-900 transition-colors">Rings</a></li>
                <li><a href="#" className="hover:text-stone-900 transition-colors">Necklaces</a></li>
                <li><a href="#" className="hover:text-stone-900 transition-colors">Bracelets</a></li>
                <li><a href="#" className="hover:text-stone-900 transition-colors">Bespoke</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-900 mb-6">Experience</h4>
              <ul className="space-y-4 text-stone-500 text-[11px] uppercase tracking-widest font-medium">
                <li><a href="#" className="hover:text-stone-900 transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-stone-900 transition-colors">Ethical Sourcing</a></li>
                <li><a href="#" className="hover:text-stone-900 transition-colors">Store Locator</a></li>
                <li><a href="#" className="hover:text-stone-900 transition-colors">Journal</a></li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-900 mb-6">Contact</h4>
              <ul className="space-y-4 text-stone-500 text-[11px] uppercase tracking-widest font-medium">
                <li className="flex items-center gap-3">
                  <Mail className="w-3 h-3" />
                  concierge@ceylora.com
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-3 h-3" />
                  +94 11 234 5678
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-3 h-3" />
                  Colombo, Sri Lanka
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- Middle Section: Newsletter Bar --- */}
        <div className="border-y border-stone-100 py-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-sm font-medium text-stone-900 uppercase tracking-widest">Join the Ceylora Circle</h3>
            <p className="text-stone-400 text-xs mt-1">Receive early access to new collections and events.</p>
          </div>
          <div className="w-full md:w-auto flex border-b border-stone-300 pb-2">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="bg-transparent border-none outline-none text-[10px] tracking-widest w-full md:w-64 placeholder:text-stone-300"
            />
            <button className="text-[10px] font-bold uppercase tracking-widest hover:text-stone-400 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* --- Bottom Section: Legal & Back to Top --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-[9px] text-stone-400 uppercase tracking-[0.2em] font-medium">
            <p>© 2026 Ceylora</p>
            <a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Terms of Service</a>
          </div>

          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.3em] text-stone-900 group"
          >
            Back to Top
            <div className="p-2 border border-stone-100 rounded-full group-hover:border-stone-900 transition-colors">
              <ArrowUp className="w-3 h-3" />
            </div>
          </motion.button>
        </div>

      </div>
    </footer>
  );
}