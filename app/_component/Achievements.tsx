"use client";

import { Award, Trophy, Code2, Users2, Sparkles, ExternalLink, CheckCircle2 } from "lucide-react";

interface AchievementItem {
  title: string;
  category: string;
  badge: string;
  metric?: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  highlights: string[];
  link?: {
    url: string;
    label: string;
  };
}

export default function Achievements() {
  const achievements: AchievementItem[] = [
    {
      title: "James Dyson Award Gallery Submission",
      category: "Global Design & Engineering Recognition",
      badge: "Moderator Approved",
      metric: "Global Feature",
      icon: Award,
      description:
        "SynvueAI submission was officially moderator-approved and published in the prestigious James Dyson Award global gallery, recognizing engineering excellence and real-world impact in AI-driven interview intelligence.",
      highlights: [
        "Moderator-approved and featured in the official James Dyson Award gallery",
        "Recognized for innovation in voice intelligence and real-time AI mock interview simulation",
        "Engineered end-to-end with high responsiveness and low-latency speech feedback",
      ],
    },
    {
      title: "Full-Stack Production Client Deployments",
      category: "End-to-End Client Solutions",
      badge: "Production Impact",
      metric: "Production Apps",
      icon: Trophy,
      description:
        "Delivered full-stack production apps for multiple commercial clients, including a multilingual conversational AI platform (prompt engineering) and admin-integrated business systems — owning frontend, backend, APIs, and deployment end-to-end.",
      highlights: [
        "Architected multilingual conversational AI flows with context-aware prompt engineering",
        "Built centralized administrative control panels integrated with authentication and security",
        "Owned complete lifecycle: requirements, API design, database schemas, and Vercel/Cloud deployment",
      ],
    },
    {
      title: "460+ LeetCode Problems Solved in C++",
      category: "Algorithmic Problem Solving",
      badge: "C++ Competitive Programming",
      metric: "460+ Solved",
      icon: Code2,
      description:
        "Demonstrated disciplined algorithmic problem solving with over 460+ problems solved in C++, mastering fundamental to advanced data structures and high-complexity challenges.",
      highlights: [
        "Arrays, Graphs, Dynamic Programming, Trees, Binary Search, and Heaps",
        "Optimal algorithmic time and space complexity analysis",
        "Consistent daily problem solving and competitive coding practice",
      ],
      link: {
        url: "https://leetcode.com/u/Nishchal05/",
        label: "View LeetCode Profile",
      },
    },
    {
      title: "Internship & Technical Team Lead — IIC",
      category: "Leadership & Community Impact",
      badge: "Leadership",
      metric: "Team Lead",
      icon: Users2,
      description:
        "Served as Technical Team Lead at the Institution's Innovation Council (IIC), driving flagship hackathons, business competitions, and mentoring student developers in product-market fit.",
      highlights: [
        "Led organization and tech execution for Ideathon 3.0 & Ideathon 4.0",
        "Spearheaded Business Plan Competitions 2024 & 2025",
        "Conducted structured problem-solution-fit workshops and technical mentorship sessions",
      ],
    },
  ];

  return (
    <section
      id="Achievements"
      className="relative flex flex-col min-h-screen w-full justify-center items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00e786] rounded-full blur-[140px] opacity-[0.06] animate-blob" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[140px] opacity-[0.06] animate-blob" style={{ animationDelay: "3s" }} />
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00e786]/30 bg-[#00e786]/10 text-[#00e786] text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          Milestones & Recognition
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
          Honors & <span className="bg-gradient-to-r from-[#00e786] via-cyan-400 to-[#00e786] bg-clip-text text-transparent">Achievements</span>
        </h2>
        <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#00e786] to-transparent rounded-full" />
        <p className="mt-5 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Recognitions in global design awards, client production deliveries, algorithmic mastery, and technical community leadership.
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {achievements.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group relative rounded-2xl p-6 sm:p-8 bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 hover:border-[#00e786]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00e786]/5 flex flex-col justify-between"
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-zinc-800/90 border border-zinc-700/60 text-[#00e786] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      {item.category}
                    </span>
                  </div>

                  {item.metric && (
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-[#00e786]/10 text-[#00e786] border border-[#00e786]/20 shrink-0">
                      {item.metric}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#00e786] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-400 mb-5">
                  {item.highlights.map((point, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00e786] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Optional Link */}
              {item.link && (
                <div className="pt-3 border-t border-zinc-800/80">
                  <a
                    href={item.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#00e786] hover:text-cyan-300 transition-colors group-hover:translate-x-0.5"
                  >
                    <span>{item.link.label}</span>
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
