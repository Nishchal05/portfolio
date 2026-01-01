import portfolioface from "@/public/portfolioface.png";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen w-full p-6 md:p-8 lg:p-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-10 w-72 h-72 bg-[#00e786] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>
      <div className="relative z-10 w-full top-15 md:top-10 max-w-md lg:max-w-lg xl:max-w-xl mb-12 lg:mb-0 lg:mr-16">
        <div className="relative">
          <div className="absolute top-20 -inset-4 bg-gradient-to-r from-[#00e786] to-cyan-500 rounded-2xl blur-2xl opacity-30"></div>
          
          <Image 
            src={portfolioface} 
            alt="Nishchal - Portfolio" 
            width={500}
            height={600}
            priority
            className="relative rounded-2xl shadow-2xl border-2 border-[#00e786]/30 hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
      </div>
      <div className="relative z-10 w-full max-w-2xl flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4">
        <div className="space-y-6">
          {/* Greeting Badge */}
          <div className="inline-block">
            <span className="px-4 py-4 bg-[#00e786]/10 border border-[#00e786]/30 rounded-full text-[#00e786] text-sm font-medium backdrop-blur-sm">
              Welcome
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="text-white">Hello, I'm </span>
            <span className="text-[#00e786] bg-clip-text bg-gradient-to-r from-[#00e786] to-cyan-400">
              Nishchal
            </span>
          </h1>

          {/* Description */}
          <p className="text-md font-bold sm:text-lg lg:text-xl text-[#00e786] leading-relaxed max-w-xl">
          Full Stack Developer | Automation Developer | AI Integrator | Freelancer
          </p>
          <p className="text-md sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
          Full-stack developer with a strong focus on building scalable, production-ready web applications using modern technologies, AI integration, and automation, complemented by solid problem-solving skills and competitive programming experience in C++.</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="px-8 cursor-pointer py-3 bg-[#00e786] text-black font-semibold rounded-lg hover:bg-[#00d177] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#00e786]/50">
              View My Work
            </button>
            <button className="px-8 cursor-pointer py-3 bg-transparent border-2 border-[#00e786] text-[#00e786] font-semibold rounded-lg hover:bg-[#00e786]/10 transform hover:scale-105 transition-all duration-300">
              Contact Me
            </button>
          </div>
          <div className="flex md:hidden gap-6 mt-8 text-gray-400">
            <span className="hover:text-[#00e786] transition-colors cursor-pointer">GitHub</span>
            <span className="hover:text-[#00e786] transition-colors cursor-pointer">LinkedIn</span>
            <span className="hover:text-[#00e786] transition-colors cursor-pointer">Twitter</span>
          </div>
        </div>
      </div>
    </main>
  );
}