"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white border-b border-[#EDEDED] py-4"
            : "bg-white py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* MENU ICON */}
          <button onClick={() => setMenuOpen(true)}>
            <Menu className="w-6 h-6 text-[#555555] hover:text-[#111111] transition-colors" />
          </button>

          {/* BRAND */}
          <h1 className="text-xl md:text-2xl tracking-[0.45em] font-light uppercase text-[#2A2A2A]">
            Ceylora
          </h1>

          {/* CART ICON */}
          <button onClick={() => setCartOpen(!cartOpen)}>
            <ShoppingBag className="w-5 h-5 text-[#555555] hover:text-[#111111] transition-colors" />
          </button>

        </div>
      </nav>

      {/* ================= MENU POPUP ================= */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center"
            >
              <div className="bg-white border border-[#EDEDED] shadow-2xl rounded-2xl w-[90%] max-w-md p-10 text-center relative">

                <button
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-6 right-6 text-[#555555] hover:text-[#111111]"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col gap-8 uppercase tracking-[0.3em] text-sm text-[#7A7A7A]">
                  <a className="hover:text-[#111111] transition-colors cursor-pointer">Shop</a>
                  <a className="hover:text-[#111111] transition-colors cursor-pointer">Rings</a>
                  <a className="hover:text-[#111111] transition-colors cursor-pointer">Necklaces</a>
                  <a className="hover:text-[#111111] transition-colors cursor-pointer">Bracelets</a>
                  <a className="hover:text-[#111111] transition-colors cursor-pointer">About</a>
                  <a className="hover:text-[#111111] transition-colors cursor-pointer">Contact</a>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ================= CART POP ================= */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed top-20 right-6 bg-white border border-[#EDEDED] shadow-xl rounded-xl p-6 w-72 z-50"
          >
            <p className="uppercase tracking-[0.3em] text-xs text-[#7A7A7A]">
              Your Cart is Empty
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
