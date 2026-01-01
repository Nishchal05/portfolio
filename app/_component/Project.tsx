import Image from "next/image";
import Intervuelogo from "@/public/IntervueLogo.png";
import video from "@/public/VideoGeneratorLogo.png";
import taxifinder from "@/public/logo.7aab44b9.jpg";

export default function Project() {
  const project = [
    {
      Name: "SynvueAI – AI Powered Mock Interview Platform",
      Tech_Stack:
        "Next.js, Node.js, Express.js, MongoDB, Nodemailer, NextAuth.js, Gemini Model API, WebSocket, Tailwind CSS, GitHub, Vercel",
      details: [
        "Developed a voice-enabled AI mock interview platform adopted by 70+ users",
        "Implemented real-time Speech-to-Text (STT) and Text-to-Speech (TTS)",
        "Integrated Gemini AI for context-aware interview questions",
        "Built an AI-powered ATS resume checker",
        "Integrated Razorpay for secure online payments",
      ],
      Live_Link: "https://www.synvueai.in",
      image: Intervuelogo,
    },
    {
      Name: "AI Video Generator",
      Tech_Stack:
        "Next.js, Node.js, Express.js, MongoDB, NextAuth.js, Gemini Model API, Remotion, Tailwind CSS, GitHub, Vercel",
      details: [
        "Built an AI-driven automated video generation platform",
        "Used Gemini AI for script generation and Remotion for rendering",
        "Enabled rapid short-video creation in seconds",
      ],
      Live_Link: "https://video-generator-alpha.vercel.app/",
      image: video,
    },
    {
      Name: "TaxiFinder – Ride Discovery Platform",
      Tech_Stack:
        "Next.js, Node.js, Express.js, Google Maps API, Razorpay, NextAuth.js, Tailwind CSS, GitHub, Vercel",
      details: [
        "Built an Uber-like ride discovery platform with scalable backend",
        "Integrated Google Maps API for live location and routing",
        "Implemented authentication and payments using NextAuth.js and Razorpay",
        "Designed responsive UI and deployed on Vercel",
      ],
      Live_Link: "https://taxifinder.vercel.app",
      image: taxifinder,
    },
  ];

  return (
    <div className="relative min-h-screen w-full py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00e786] via-cyan-400 to-[#00e786]">
          Projects
        </h1>
        <div className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#00e786] to-transparent" />
      </div>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {project.map((item, index) => (
          <div
            key={index}
            className="group p-6 rounded-2xl bg-gray-900/50 backdrop-blur border border-gray-800 hover:border-[#00e786]/40 transition-all hover:-translate-y-1"
          >
            {/* Logo */}
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={item.image}
                alt={item.Name}
                width={50}
                height={50}
                className="rounded-md"
              />
              <h3 className="text-xl md:text-2xl font-bold text-[#00e786]">
                {item.Name}
              </h3>
            </div>

            {/* Tech Stack */}
            <p className="text-sm text-cyan-400 mb-4">
              <span className="font-semibold">Tech Stack:</span> {item.Tech_Stack}
            </p>

            {/* Details */}
            <ul className="space-y-2 text-gray-300 list-disc list-inside mb-4">
              {item.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Live Link */}
            <a
              href={item.Live_Link}
              target="_blank"
              className="inline-block text-sm text-[#00e786] hover:underline"
            >
              🔗 Live Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
