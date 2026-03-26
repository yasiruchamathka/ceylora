"use client";

import { motion } from "framer-motion";
import { Plus, Heart } from "lucide-react";

interface Ring {
  id: number;
  name: string;
  price: string;
  material: string;
  stone: string;
  image: string;
  tag?: string;
}

const ringCollection: Ring[] = [
  {
    id: 1,
    name: "Aethelgard Solitaire",
    price: "$3,200",
    material: "18k Yellow Gold",
    stone: "2ct Oval Diamond",
    image: "pexels-janakukebal-30541184.jpg",
    tag: "Signature"
  },
  {
    id: 2,
    name: "Ceylora Azure Band",
    price: "$1,850",
    material: "Platinum",
    stone: "Ceylon Sapphire",
    image: "pexels-janakukebal-30541184.jpg",
  },
  {
    id: 3,
    name: "Elysian Pavé",
    price: "$4,100",
    material: "Rose Gold",
    stone: "Brilliant Cut Diamonds",
    image: "pexels-janakukebal-30541184.jpg",
    tag: "Limited"
  },
  {
    id: 4,
    name: "Serpentine Wrap",
    price: "$1,200",
    material: "18k Yellow Gold",
    stone: "None",
    image: "pexels-janakukebal-30541184.jpg",
  },
  {
    id: 5,
    name: "Midnight Halo",
    price: "$2,900",
    material: "White Gold",
    stone: "Black Diamond",
    image: "pexels-janakukebal-30541184.jpg",
  },
  {
    id: 6,
    name: "Minimalist Stack",
    price: "$850",
    material: "14k Yellow Gold",
    stone: "Petite Emerald",
    image: "pexels-janakukebal-30541184.jpg",
  }
];

export default function ProductGrid() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-stone-400 mb-4 font-bold">The Archives</h3>
            <h2 className="text-4xl font-light tracking-tight text-stone-900 italic font-serif">
              Ring Collection
            </h2>
          </motion.div>
          
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">
            <button className="text-stone-900 border-b border-stone-900 pb-1">All Rings</button>
            <button className="hover:text-stone-900 transition-colors pb-1">Engagement</button>
            <button className="hover:text-stone-900 transition-colors pb-1">Bands</button>
          </div>
        </div>

        {/* --- Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {ringCollection.map((ring, idx) => (
            <motion.div
              key={ring.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] bg-stone-50 overflow-hidden mb-6">
                <img
                  src={ring.image}
                  alt={ring.name}
                  className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />
                
                {/* Tag Overlay */}
                {ring.tag && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[8px] uppercase tracking-widest font-bold text-stone-800 shadow-sm">
                    {ring.tag}
                  </div>
                )}

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 p-2 bg-white/0 hover:bg-white/90 transition-all duration-300 rounded-full group/fav opacity-0 group-hover:opacity-100">
                  <Heart className="w-4 h-4 text-stone-900 group-hover/fav:fill-stone-900" />
                </button>

                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-stone-900/90 backdrop-blur-sm py-4 flex items-center justify-center gap-3">
                  <Plus className="w-3 h-3 text-white" />
                  <span className="text-white text-[10px] uppercase tracking-[0.3em] font-medium">Add to Bag</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-900 group-hover:text-stone-500 transition-colors">
                    {ring.name}
                  </h4>
                  <p className="text-[10px] text-stone-400 tracking-wide font-medium">
                    {ring.material} • {ring.stone}
                  </p>
                </div>
                <p className="text-sm font-light text-stone-900 tracking-tighter italic font-serif">
                  {ring.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Footer Action --- */}
        <div className="mt-24 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-12 py-5 border border-black text-black text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-500"
          >
            Discover More Pieces
          </motion.button>
        </div>
      </div>
    </section>
  );
}