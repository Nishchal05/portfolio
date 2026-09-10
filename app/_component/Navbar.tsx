"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About Me", href: "#About" },
    { label: "Skills", href: "#Skill" },
    { label: "Experience", href: "#Experience" },
    { label: "Projects", href: "#Project" },
    { label: "Achievements", href: "#Achievements" },
    { label: "Contact", href: "#Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-[#00e786]/20 shadow-lg shadow-black/50"
          : "bg-transparent backdrop-blur-sm border-b border-[#00e786]/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a
              href="#About"
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#00e786] via-teal-300 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity flex items-center gap-1.5"
            >
              <span className="text-[#00e786] font-mono">&lt;</span>
              <span>N</span>
              <span className="text-cyan-400 font-mono">/&gt;</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-3.5 py-2 text-sm lg:text-base text-zinc-300 hover:text-[#00e786] font-medium transition-colors duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>

                {/* Hover underline effect */}
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-[#00e786] to-cyan-400 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left rounded-full" />

                {/* Hover background glow */}
                <span className="absolute inset-0 bg-[#00e786]/0 rounded-lg transition-all duration-300 group-hover:bg-[#00e786]/10 -z-0" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#00e786] hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-zinc-900/50"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-black/95 backdrop-blur-xl border-t border-[#00e786]/20 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-sm font-semibold text-zinc-300 hover:text-[#00e786] rounded-xl hover:bg-[#00e786]/10 transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}