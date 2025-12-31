"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-[#00e786]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo/Brand */}
          <div className="md:hidden flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#00e786] to-cyan-400 bg-clip-text text-transparent">
              N
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex w-full text-xl items-center justify-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-[#00e786] font-semibold transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Hover underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00e786] to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                
                {/* Hover background glow */}
                <span className="absolute inset-0 bg-[#00e786]/0 rounded-lg transition-all duration-300 group-hover:bg-[#00e786]/10"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#00e786] hover:text-cyan-400 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-black/95 backdrop-blur-lg border-t border-[#00e786]/20">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-[#00e786] font-semibold rounded-lg hover:bg-[#00e786]/10 transition-all duration-300 transform hover:translate-x-2"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}