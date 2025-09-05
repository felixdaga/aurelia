"use client";

import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [logoOpacity, setLogoOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Header background fades in over first 200px
      const opacity = Math.min(scrollY / 200, 1);
      setScrollOpacity(opacity);

      // Logo fades in earlier now
      const viewportH = window.innerHeight || 0;
      const start = Math.max(100, viewportH - 200); // starts fading in earlier
      const end = start + 150; // shorter fade band
      const t = (scrollY - start) / (end - start);
      const clamped = Math.max(0, Math.min(1, t));
      setLogoOpacity(clamped);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Follow current section order: About -> Resident Artists -> Contact
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Resident Artists", href: "#collections" },
    { name: "Contact", href: "#contact" },
  ];

  // logoOpacity is driven by scroll handler above

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${scrollOpacity})`,
        borderBottom: `1px solid rgba(245, 245, 245, ${scrollOpacity})`,
      }}
    >
      <div className="px-5 md:px-6">
        <div className="grid grid-cols-3 items-center h-14">
          {/* Left: section shortcuts on desktop, mobile menu on mobile */}
          <div className="flex items-center justify-start">
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-900 font-normal transition-colors duration-200 underline-minimal"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-neutral-700"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Center: logo fades in later */}
          <div className="flex justify-center">
            <Image
              src="/images/aurelia-black.png"
              alt="Aurelia Logo"
              width={100}
              height={100}
              className="w-30 h-30 object-contain"
              style={{ opacity: logoOpacity }}
              priority
            />
          </div>

          {/* Right: checkout/cart pinned to right edge */}
          <div className="flex items-center justify-end">
            <button className="relative p-2 text-neutral-700 hover:text-primary-900 transition-colors">
              <ShoppingBag size={22} />
              <span className="absolute -top-1 -right-1 bg-primary-900 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-neutral-100"
          >
            <div className="px-6 py-6 space-y-4">
              {/* Logo row on mobile */}
              <div className="flex items-center justify-between">
                <Image
                  src="/images/aurelia-logo-black.JPG"
                  alt="Aurelia Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-neutral-700 hover:text-primary-900 font-normal py-2"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-neutral-100">
                <button className="flex items-center space-x-2 text-neutral-700 hover:text-primary-900">
                  <ShoppingBag size={20} />
                  <span>Cart (0)</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
