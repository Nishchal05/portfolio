"use client";

import { Briefcase, Calendar, MapPin, ExternalLink, Sparkles } from "lucide-react";

interface ExperienceItem {
  responsibility: string;
  company: string;
  type: string;
  period?: string;
  location?: string;
  Live_Link?: string;
  Tech_Stack: string;
  details: string[];
  featured?: boolean;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      responsibility: "Software Development Engineer (Freelance)",
      company: "ExpenseHub",
      type: "Freelance",
      period: "Feb 2026 – Mar 2026",
      location: "India (Remote)",
      featured: true,
      Tech_Stack: "n8n, OCR, PostgreSQL, LLMs, REST APIs, WhatsApp Integration",
      details: [
        "Built an event-driven automation pipeline (n8n + OCR) ingesting WhatsApp payment slips, extracting structured expense data, persisting to PostgreSQL — eliminated manual data entry.",
        "Implemented AI-driven multi-turn conversation flow using an LLM to capture contextual expense metadata and auto-route approval requests.",
        "Collaborated with another engineer on frontend/backend, defining REST APIs for expense records and workflow state.",
      ],
    },
    {
      responsibility: "Full Stack Developer",
      company: "AlertGroup-Canadian Security Startup",
      type: "Freelancing",
      Live_Link: "https://alertgroup.vercel.app/",
      Tech_Stack: "Next.js, Node.js, Express.js, Tailwind CSS, MongoDB, Nodemailer, NextAuth.js, GitHub, Vercel",
      details: [
        "Developed two fully integrated platforms for AlertGroup: a centralized admin dashboard for internal operations and a user-facing website for customers, ensuring seamless coordination between management and end users.",
        "Built a secure, scalable multi-service admin system, managing application security, alerts, service configurations, and a built-in helpdesk—achieving an SEO score of 94 for performance and discoverability.",
        "Implemented robust authentication and authorization using Next.js with NextAuth.js (SSR-based security), enabling secure access control across both admin and user platforms.",
        "Designed modern, responsive UIs for both systems using Tailwind CSS and Shadcn UI, delivering a clean, intuitive experience for admins and users across all devices.",
        "Integrated automation and backend optimizations, including Nodemailer for real-time notifications, optimized MongoDB data handling, and end-to-end workflow automation using n8n—covering alerts, order updates, and service management.",
      ],
    },
    {
      responsibility: "Software Developer",
      company: "E-commerce Platform",
      type: "Freelancing",
      Tech_Stack: "React.js, TailwindCSS, n8n",
      details: [
        "Built an intelligent traffic analytics system to identify user acquisition sources (Facebook, Google, direct, referrals, etc.), enabling data-driven campaign optimization and smarter marketing decisions.",
        "Implemented automated bulk order price calculation, dynamically computing total order value based on quantity, pricing rules, and discounts, ensuring accuracy and scalability.",
        "Designed an automated receipt generation and notification flow, instantly sending detailed order receipts to shoppers for transparency and verification.",
        "Enabled seller-side order verification and delivery scheduling, allowing shopkeepers to confirm orders and assign precise delivery dates through an automated workflow.",
        "Developed an end-to-end order management pipeline using n8n, maintaining an updated order list with Order ID, items, pricing, and delivery timelines—ensuring seamless coordination from order placement to delivery.",
      ],
    },
    {
      responsibility: "Software Developer",
      company: "Health Tech Project",
      type: "Freelancing",
      Tech_Stack: "n8n, Google Sheets, Webhooks",
      details: [
        "Built a personalized protein intake recommendation system.",
        "Captured and stored user data via webhooks and Google Sheets.",
        "Calculated diet-specific protein intake automatically.",
        "Delivered instant nutrition feedback to users.",
        "Eliminated manual calculations through automation.",
      ],
    },
    {
      responsibility: "Automation Developer",
      company: "Tech Company",
      type: "Freelancing",
      Tech_Stack: "n8n, Google Drive, Google Sheets, Gmail, Webhooks",
      details: [
        "Built automated Excel consolidation using Google Drive.",
        "Implemented file validation and structured data extraction.",
        "Generated reports with screenshots and email delivery.",
        "Reduced manual effort by 90% and eliminated errors.",
      ],
    },
    {
      responsibility: "Full Stack Developer",
      company: "Zidio Development",
      type: "Internship",
      Tech_Stack: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Bootstrap",
      details: [
        "Built a job portal with integrated resume builder.",
        "Designed scalable REST APIs and backend architecture.",
        "Generated dynamic resumes from user inputs.",
        "Designed responsive UI using Bootstrap and Tailwind CSS.",
        "Ensured scalability and smooth UX across user workflows.",
      ],
    },
  ];

  return (
    <section
      id="Experience"
      className="relative flex flex-col min-h-screen w-full justify-center items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00e786] rounded-full blur-[140px] opacity-[0.06] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[140px] opacity-[0.06] animate-blob" style={{ animationDelay: "2s" }} />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00e786]/30 bg-[#00e786]/10 text-[#00e786] text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm">
          <Briefcase className="w-3.5 h-3.5" />
          Work Experience
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
          Professional <span className="bg-gradient-to-r from-[#00e786] via-cyan-400 to-[#00e786] bg-clip-text text-transparent">Journey</span>
        </h2>
        <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#00e786] to-transparent rounded-full" />
        <p className="mt-5 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Track record of shipping production full-stack platforms, event-driven automation pipelines, and intelligent AI workflows.
        </p>
      </div>

      {/* Experience Cards Grid */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {experiences.map((experience, index) => {
          const techList = experience.Tech_Stack.split(",").map((s) => s.trim());
          return (
            <div
              key={index}
              className={`group relative rounded-2xl p-6 sm:p-8 bg-zinc-900/60 backdrop-blur-md border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00e786]/5 flex flex-col justify-between ${
                experience.featured
                  ? "border-[#00e786]/40 bg-gradient-to-b from-zinc-900/90 to-zinc-950/80 md:col-span-2"
                  : "border-zinc-800/80 hover:border-[#00e786]/30"
              }`}
            >
              <div>
                {/* Badges & Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-[#00e786]/10 text-[#00e786] border border-[#00e786]/20">
                      {experience.type}
                    </span>
                    {experience.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        <Sparkles className="w-3 h-3" /> Latest Role
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-zinc-400">
                    {experience.period && (
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        {experience.period}
                      </span>
                    )}
                    {experience.location && (
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        {experience.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Role and Company */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00e786] transition-colors">
                  {experience.responsibility}
                </h3>
                <p className="text-zinc-400 text-sm font-medium mt-1 mb-4">
                  {experience.company}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {techList.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs font-medium bg-zinc-800/70 text-cyan-300/90 border border-zinc-700/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Details List */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300/90 mb-5">
                  {experience.details.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00e786] mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Links */}
              {experience.Live_Link && (
                <div className="pt-3 border-t border-zinc-800/80">
                  <a
                    href={experience.Live_Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#00e786] hover:text-cyan-300 transition-colors group-hover:translate-x-0.5"
                  >
                    <span>View Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
