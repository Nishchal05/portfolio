"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  CreditCard, 
  Cloud, 
  Bot, 
  Sparkles 
} from "lucide-react";

import Javascript from "@/public/javascript.png";
import chatgpt from "@/public/chatgpt.png";
import claude from "@/public/claude.png";
import ex from "@/public/ex.png";
import gemini from "@/public/gemini.png";
import mongodb from "@/public/mongodb.png";
import n8n from "@/public/n8n.png";
import nextjs from "@/public/nextjs.png";
import nodejs from "@/public/nodejs.png";
import postgresql from "@/public/postgresql.png";
import reactjs from "@/public/reactjs.png";
import sql from "@/public/sql.png";
import cpp from "@/public/cpp.png";
import vercel from "@/public/vercel.png";
import git from "@/public/Git.png";
import github from "@/public/github.png";
import typescript from "@/public/typescript-768x432-removebg-preview.png";

interface SkillItem {
  name: string;
  image?: StaticImageData;
  highlight?: boolean;
}

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItem[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      description: "Core programming languages for algorithms, systems, and web",
      icon: Code2,
      skills: [
        { name: "C++", image: cpp, highlight: true },
        { name: "JavaScript", image: Javascript },
        { name: "TypeScript", image: typescript, highlight: true },
        { name: "Python", highlight: true },
      ],
    },
    {
      title: "Frontend Development",
      description: "Modern, responsive, and performant user interfaces",
      icon: Layout,
      skills: [
        { name: "React.js", image: reactjs },
        { name: "Next.js", image: nextjs, highlight: true },
        { name: "Tailwind CSS", highlight: true },
        { name: "Responsive UI Design" },
      ],
    },
    {
      title: "Backend & Systems",
      description: "Scalable server architectures, APIs, and real-time protocols",
      icon: Server,
      skills: [
        { name: "Node.js", image: nodejs },
        { name: "Express.js", image: ex },
        { name: "REST APIs", highlight: true },
        { name: "WebSockets" },
        { name: "Event-driven Architecture", highlight: true },
      ],
    },
    {
      title: "Databases & ORM",
      description: "Relational, document, vector search, and object-relational mapping",
      icon: Database,
      skills: [
        { name: "PostgreSQL", image: postgresql, highlight: true },
        { name: "MongoDB", image: mongodb },
        { name: "pgvector", highlight: true },
        { name: "Prisma" },
        { name: "SQL", image: sql },
      ],
    },
    {
      title: "AI & Automation",
      description: "Agentic workflows, RAG pipelines, LLM integration, and automation",
      icon: Bot,
      skills: [
        { name: "LangChain", highlight: true },
        { name: "LangGraph", highlight: true },
        { name: "RAG", highlight: true },
        { name: "LLM Integration", highlight: true },
        { name: "AI Agents", highlight: true },
        { name: "OCR" },
        { name: "n8n", image: n8n },
        { name: "Gemini", image: gemini },
        { name: "ChatGPT", image: chatgpt },
        { name: "Claude", image: claude },
      ],
    },
    {
      title: "Payments & Fintech",
      description: "Secure payment gateway integration, reconciliation, and webhooks",
      icon: CreditCard,
      skills: [
        { name: "Razorpay Integration", highlight: true },
        { name: "Webhook Signature Verification", highlight: true },
        { name: "Payment Reconciliation" },
      ],
    },
    {
      title: "Cloud & DevOps",
      description: "Hosting, object storage, caching, and version control workflows",
      icon: Cloud,
      skills: [
        { name: "AWS S3" },
        { name: "Vercel", image: vercel },
        { name: "Git", image: git },
        { name: "GitHub", image: github },
        { name: "Redis", highlight: true },
      ],
    },
  ];

  return (
    <section
      id="Skill"
      className="relative flex flex-col min-h-screen w-full justify-center items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00e786] rounded-full blur-[140px] opacity-[0.07] animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[140px] opacity-[0.07] animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-emerald-500 rounded-full blur-[140px] opacity-[0.05] animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00e786]/30 bg-[#00e786]/10 text-[#00e786] text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          Technical Expertise
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
          Skills & <span className="bg-gradient-to-r from-[#00e786] via-cyan-400 to-[#00e786] bg-clip-text text-transparent">Capabilities</span>
        </h2>
        <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#00e786] to-transparent rounded-full" />
        <p className="mt-5 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Structured across specialized engineering domains — spanning high-performance backend systems, modern interfaces, AI agent architectures, and fintech integrations.
        </p>
      </div>

      {/* Categorized Skills Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          const isSpanTwo = idx === 4; // AI & Automation gets 2-col span on medium+ screens for breadth
          return (
            <div
              key={category.title}
              className={`group relative rounded-2xl p-6 sm:p-7 bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 hover:border-[#00e786]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00e786]/5 flex flex-col justify-between ${
                isSpanTwo ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Subtle card glow overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00e786]/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/60 text-[#00e786] group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00e786] transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Chips / Badges */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium border transition-all duration-200 ${
                        skill.highlight
                          ? "bg-zinc-800/80 border-emerald-500/40 text-emerald-300 hover:border-[#00e786] hover:bg-emerald-950/30"
                          : "bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800/50"
                      }`}
                    >
                      {skill.image && (
                        <div className="relative w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0">
                          <Image
                            src={skill.image}
                            alt={skill.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
