"use client";

import portfolioface from "@/public/portfolioface.png";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Send } from "lucide-react";

export default function HomePage() {
  return (
    <main
      id="About"
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen w-full pt-28 pb-16 px-4 sm:px-6 md:px-10 lg:px-16 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden"
    >
      {/* Background Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#00e786] rounded-full blur-[140px] opacity-[0.08] animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500 rounded-full blur-[140px] opacity-[0.08] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Hero Image Container */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-md xl:max-w-lg mb-10 lg:mb-0 lg:mr-12 flex justify-center">
        <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]">
          {/* Subtle glowing halo */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#00e786] to-cyan-500 rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition-opacity" />

          <div className="relative rounded-2xl overflow-hidden border-2 border-[#00e786]/30 shadow-2xl bg-zinc-900/40">
            <Image
              src={portfolioface}
              alt="Nishchal Sundan - Full Stack Developer & AI Integrator"
              width={450}
              height={550}
              priority
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        </div>
      </div>

      {/* Hero Bio / Text Content */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <div className="space-y-5">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00e786]/10 border border-[#00e786]/30 text-[#00e786] text-xs font-semibold tracking-wide backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e786] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00e786]" />
            </span>
            Available for New Opportunities
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Hello, I&apos;m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00e786] via-teal-300 to-cyan-400">
              Nishchal
            </span>
          </h1>

          {/* Subtitle / Focus domains */}
          <p className="text-sm sm:text-base md:text-lg font-semibold text-[#00e786] leading-snug">
            Full Stack Developer &bull; Automation Engineer &bull; AI Integrator &bull; C++ Problem Solver
          </p>

          {/* Bio Description */}
          <p className="text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed max-w-xl">
            Specialized in building scalable, production-ready web applications using modern full-stack architectures, autonomous AI agents, and event-driven automation pipelines. Proven problem-solving ability backed by 460+ LeetCode problems solved in C++.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
            <a
              href="#Project"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#00e786] text-black font-bold text-sm shadow-lg shadow-[#00e786]/20 hover:bg-[#00d177] hover:shadow-[#00e786]/40 hover:scale-[1.02] transition-all duration-200"
            >
              <span>View My Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#Contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-zinc-900/80 border border-zinc-700/80 text-zinc-200 font-semibold text-sm hover:border-[#00e786] hover:text-[#00e786] hover:bg-zinc-800/60 hover:scale-[1.02] transition-all duration-200"
            >
              <span>Contact Me</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Social Links for Mobile & Tablet (<1024px) */}
          <div className="flex lg:hidden items-center justify-center lg:justify-start gap-5 pt-4 text-xs font-semibold text-zinc-400">
            <a
              href="https://github.com/Nishchal05"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00e786] transition-colors"
            >
              GitHub &rarr;
            </a>
            <span className="text-zinc-600">&bull;</span>
            <a
              href="https://www.linkedin.com/in/nishchal-sundan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00e786] transition-colors"
            >
              LinkedIn &rarr;
            </a>
            <span className="text-zinc-600">&bull;</span>
            <a
              href="https://leetcode.com/u/Nishchal05/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00e786] transition-colors"
            >
              LeetCode &rarr;
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}