"use client";
import  Javascript  from "@/public/javascript.png";
import Image from "next/image";
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
import typescript from "@/public/typescript-768x432-removebg-preview.png";
export default function Skills() {
  const skills = [
    {name: "C++", image: cpp},
    { name: "JavaScript", image: Javascript },
    {name: "TypeScript", image: typescript },
    { name: "Next.js", image: nextjs },
    { name: "React.js", image: reactjs },
    { name: "Node.js", image: nodejs },
    { name: "Express", image: ex },
    { name: "MongoDB", image: mongodb },
    { name: "PostgreSQL", image: postgresql },
    { name: "SQL", image: sql },
    { name: "n8n", image: n8n },
    { name: "ChatGPT", image: chatgpt },
    { name: "Gemini", image: gemini },
    { name: "Claude", image: claude },
  ];

  return (
    <div className="relative flex flex-col min-h-screen w-full justify-center items-center gap-12 md:gap-20 py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">

      {/* Background Blobs (unchanged) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00e786] rounded-full blur-3xl opacity-5 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-5 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-5 animate-blob animation-delay-4000" />
      </div>

      {/* Title */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00e786] via-cyan-400 to-[#00e786] animate-gradient-x">
          Skills
        </h1>
        <div className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#00e786] to-transparent" />
        <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 w-full max-w-6xl">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <li
              key={skill.name}
              className="relative"
              style={{
                animation: `fadeInUp 0.6s ease-out forwards ${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                  
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-3">
                  
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  
                </div>

                <p className="text-sm md:text-base font-semibold text-gray-400 text-center">
                  {skill.name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

     
    </div>
  );
}
