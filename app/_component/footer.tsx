"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-zinc-900 bg-black/90 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <a
            href="#About"
            className="text-lg font-bold bg-gradient-to-r from-[#00e786] to-cyan-400 bg-clip-text text-transparent"
          >
            Nishchal Sundan
          </a>
          <p className="text-xs text-zinc-500 mt-1">
            Full Stack Developer &bull; Automation Engineer &bull; AI Integrator
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-zinc-400">
          <a href="#About" className="hover:text-[#00e786] transition-colors">About</a>
          <a href="#Skill" className="hover:text-[#00e786] transition-colors">Skills</a>
          <a href="#Experience" className="hover:text-[#00e786] transition-colors">Experience</a>
          <a href="#Project" className="hover:text-[#00e786] transition-colors">Projects</a>
          <a href="#Achievements" className="hover:text-[#00e786] transition-colors">Achievements</a>
          <a href="#Contact" className="hover:text-[#00e786] transition-colors">Contact</a>
        </div>

        {/* Scroll To Top & Copyright */}
        <div className="flex items-center gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#00e786] hover:border-[#00e786]/50 transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}