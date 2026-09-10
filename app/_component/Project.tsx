"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { FolderGit2, ExternalLink, Github, Sparkles, Clock } from "lucide-react";

import Intervuelogo from "@/public/IntervueLogo.png";
import video from "@/public/VideoGeneratorLogo.png";
import taxifinder from "@/public/logo.7aab44b9.jpg";
import recoveryAgentLogo from "@/public/recovery_agent_logo.jpg";
import crossLlmMemoryLogo from "@/public/cross_llm_memory_logo.jpg";

interface ProjectItem {
  Name: string;
  tagline?: string;
  Tech_Stack: string;
  details: string[];
  Live_Link?: string;
  Github_Link?: string;
  image: StaticImageData;
  status?: string;
  featured?: boolean;
}

export default function Project() {
  const project: ProjectItem[] = [
    {
      Name: "B2B AI Receivables Recovery Agent",
      tagline: "Autonomous omnichannel accounts receivable & payment reconciliation agent",
      Tech_Stack: "Next.js, LangGraph, Gemini, FastAPI, PostgreSQL, pgvector, Razorpay",
      status: "Featured AI Agent",
      featured: true,
      image: recoveryAgentLogo,
      Github_Link: "https://github.com/Nishchal05",
      details: [
        "Agentic AI system using LangGraph + Gemini with RAG over pgvector, giving the agent full prior context per client and invoice.",
        "Autonomously selects next recovery action per invoice, executes omnichannel outreach (WhatsApp, Gmail, ElevenLabs voice), and escalates to human after repeated no-response.",
        "Real-time payment reconciliation via Razorpay webhook signature verification — replaces manual invoice follow-up entirely.",
      ],
    },
    {
      Name: "Cross-LLM Memory Extension",
      tagline: "Universal cross-platform semantic memory layer for LLMs",
      Tech_Stack: "Chrome Extension, FastAPI, ChromaDB, RAG",
      status: "In Progress",
      featured: true,
      image: crossLlmMemoryLogo,
      Github_Link: "https://github.com/Nishchal05",
      details: [
        "Cross-LLM memory layer: Chrome Extension for local-first capture + FastAPI/ChromaDB backend for vector embeddings and similarity search.",
        "Captures conversations across ChatGPT, Gemini, and Claude; retrieves semantically relevant past context via RAG and injects it into new conversations.",
        "Currently tuning retrieval quality and context relevance for instant zero-latency prompting.",
      ],
    },
    {
      Name: "SynvueAI – AI Powered Mock Interview Platform",
      tagline: "Voice-enabled real-time technical & behavioral interview platform",
      Tech_Stack: "Next.js, Node.js, Express.js, MongoDB, Nodemailer, NextAuth.js, Gemini Model API, WebSocket, Tailwind CSS, GitHub, Vercel",
      status: "Production App",
      featured: true,
      image: Intervuelogo,
      Live_Link: "https://www.synvueai.in",
      Github_Link: "https://github.com/Nishchal05",
      details: [
        "Developed a voice-enabled AI mock interview platform adopted by 70+ users.",
        "Implemented real-time Speech-to-Text (STT) and Text-to-Speech (TTS) for conversational realism.",
        "Integrated Gemini AI for dynamic, context-aware interview questions and evaluation.",
        "Built an AI-powered ATS resume checker with actionable feedback.",
        "Integrated Razorpay for secure online subscription payments.",
      ],
    },
    {
      Name: "AI Video Generator",
      tagline: "Automated generative short-form video synthesis platform",
      Tech_Stack: "Next.js, Node.js, Express.js, MongoDB, NextAuth.js, Gemini Model API, Remotion, Tailwind CSS, GitHub, Vercel",
      status: "Web Application",
      image: video,
      Live_Link: "https://video-generator-alpha.vercel.app/",
      Github_Link: "https://github.com/Nishchal05",
      details: [
        "Built an AI-driven automated video generation platform.",
        "Used Gemini AI for script generation and Remotion for programmatic programmatic frame rendering.",
        "Enabled rapid short-video creation in seconds with automated captioning and styling.",
      ],
    },
    {
      Name: "TaxiFinder – Ride Discovery Platform",
      tagline: "Real-time ride discovery, routing, and booking platform",
      Tech_Stack: "Next.js, Node.js, Express.js, Google Maps API, Razorpay, NextAuth.js, Tailwind CSS, GitHub, Vercel",
      status: "Full Stack App",
      image: taxifinder,
      Live_Link: "https://taxifinder.vercel.app",
      Github_Link: "https://github.com/Nishchal05",
      details: [
        "Built an Uber-like ride discovery platform with a scalable backend architecture.",
        "Integrated Google Maps API for live geolocation tracking, distance calculation, and routing.",
        "Implemented authentication and payments using NextAuth.js and Razorpay.",
        "Designed responsive UI and deployed on Vercel with high uptime.",
      ],
    },
  ];

  return (
    <section
      id="Project"
      className="relative flex flex-col min-h-screen w-full justify-center items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-[#00e786] rounded-full blur-[140px] opacity-[0.06] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[140px] opacity-[0.06] animate-blob" style={{ animationDelay: "2s" }} />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00e786]/30 bg-[#00e786]/10 text-[#00e786] text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm">
          <FolderGit2 className="w-3.5 h-3.5" />
          Featured Work
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
          Engineered <span className="bg-gradient-to-r from-[#00e786] via-cyan-400 to-[#00e786] bg-clip-text text-transparent">Projects</span>
        </h2>
        <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#00e786] to-transparent rounded-full" />
        <p className="mt-5 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          AI agents, distributed systems, full-stack web platforms, and browser extensions built for production scale.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
        {project.map((item, index) => {
          const techList = item.Tech_Stack.split(",").map((s) => s.trim());
          const isInProgress = item.status === "In Progress";
          return (
            <div
              key={index}
              className={`group relative rounded-2xl p-6 sm:p-8 bg-zinc-900/60 backdrop-blur-md border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00e786]/5 flex flex-col justify-between ${
                item.featured
                  ? "border-zinc-800/90 hover:border-[#00e786]/40"
                  : "border-zinc-800/80 hover:border-[#00e786]/30"
              }`}
            >
              <div>
                {/* Header with Icon/Logo & Status */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-zinc-700/60 bg-zinc-800 shrink-0 shadow-md">
                      <Image
                        src={item.image}
                        alt={item.Name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00e786] transition-colors leading-snug">
                        {item.Name}
                      </h3>
                      {item.tagline && (
                        <p className="text-xs text-zinc-400 mt-0.5 line-clamp-1">
                          {item.tagline}
                        </p>
                      )}
                    </div>
                  </div>

                  {item.status && (
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold shrink-0 border ${
                        isInProgress
                          ? "bg-amber-500/10 text-amber-300 border-amber-500/30 animate-pulse"
                          : "bg-[#00e786]/10 text-[#00e786] border-[#00e786]/20"
                      }`}
                    >
                      {isInProgress ? <Clock className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
                      {item.status}
                    </span>
                  )}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {techList.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-800/70 text-cyan-300/90 border border-zinc-700/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Details Points */}
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-300/90 mb-6">
                  {item.details.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00e786] mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {item.Live_Link && (
                    <a
                      href={item.Live_Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#00e786] hover:text-cyan-300 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {item.Github_Link && (
                    <a
                      href={item.Github_Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code / Repo</span>
                    </a>
                  )}
                </div>

                {isInProgress && (
                  <span className="text-[11px] text-zinc-500 italic">
                    Active Development
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
