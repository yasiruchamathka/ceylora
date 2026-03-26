"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax effects - subtle on mobile to avoid jitter
  const y1 = useTransform(scrollY, [0, 500], [0, -30]);
  const y2 = useTransform(scrollY, [0, 500], [0, 30]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-24 pb-12 lg:pt-20 overflow-hidden">
      {/* --- Background Decorative Text --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] lg:opacity-[0.03]">
        <h1 className="text-[35vw] lg:text-[25vw] font-serif leading-none select-none italic">Ceylora</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* --- Content Column --- */}
        <div className="lg:col-span-6 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-4 lg:mb-6">
              <span className="w-6 lg:w-8 h-[1px] bg-stone-300"></span>
              <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.3em] lg:tracking-[0.5em] text-stone-500 font-medium">
                Est. 2026 Fine Jewelry
              </span>
              <span className="lg:hidden w-6 h-[1px] bg-stone-300"></span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.1] mb-6 lg:mb-8 text-stone-900">
              Timeless <br />
              <span className="italic font-serif text-stone-400 font-normal">Craftsmanship</span>
            </h1>

            <p className="text-stone-500 text-sm md:text-base max-w-md mx-auto lg:mx-0 leading-relaxed mb-8 lg:mb-10 tracking-wide font-light px-4 lg:px-0">
              Discover pieces that transcend trends. Hand-crafted in Sri Lanka using 
              the world's most ethically sourced gemstones.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-stone-900 text-white px-10 py-4 text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 group"
              >
                The Collection
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <button className="flex items-center gap-4 group py-2">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-stone-900 transition-colors">
                  <Play className="w-3 h-3 text-stone-900 fill-stone-900" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-600">The Film</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* --- Visuals Column --- */}
        <div className="lg:col-span-6 relative h-[400px] sm:h-[500px] lg:h-[600px] order-1 lg:order-2">
          {/* Main Large Image */}
          <motion.div 
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute right-0 top-0 w-[85%] lg:w-3/4 h-[350px] sm:h-[450px] lg:h-[500px] overflow-hidden shadow-2xl"
          >
            <img 
              src="pexels-thefullonmonet-18905179.jpg" 
              alt="Fine Gold Necklace"
              className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>

          {/* Secondary Floating Image - Better positioning for mobile */}
          <motion.div 
            style={{ y: y2 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-0 bottom-4 lg:bottom-10 w-[55%] lg:w-1/2 h-40 sm:h-56 lg:h-64 border-[6px] lg:border-8 border-white shadow-xl overflow-hidden z-20"
          >
            <img 
              src="pexels-janakukebal-30541184.jpg" 
              alt="Luxury Details"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Accent Badge - Responsive size */}
          
        </div>
      </div>

      {/* --- Scroll Indicator - Hidden on small mobile heights --- */}
      <div className="absolute bottom-10 left-6 hidden xl:flex items-center gap-4 origin-left -rotate-90 translate-y-full">
        <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 whitespace-nowrap">Scroll to explore</span>
        <div className="w-20 h-[1px] bg-stone-200"></div>
      </div>
    </section>
  );
}