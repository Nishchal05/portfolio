import Image from "next/image";

export default function Experience() {
  const experiences = [
    {
      type: "Freelancing",
      responsibility: "Full Stack Developer",
      company: "AlertGroup-Canadian Security Startup",
      Tech_Stack:
        "Next.js, Node.js, Express.js, Tailwind CSS, MongoDB, Nodemailer, NextAuth.js, GitHub, Vercel",
      details: [
        "Achieved an SEO score of 94 while developing a scalable multi-service security platform",
        "Implemented secure authentication using Next.js and NextAuth.js with SSR",
        "Designed a sleek, responsive UI using Tailwind CSS and Shadcn UI",
        "Integrated Nodemailer for real-time email notifications",
        "Optimized MongoDB data handling for scalability and low latency",
      ],
    },{
      type: "Freelancing",
      responsibility: "Software Developer",
      company: "E-commerce Platform",
      Tech_Stack: "React.js, TailwindCSS, N8N",
      details: [
        "Built traffic source analytics for ad campaigns",
        "Developed a bulk-order platform with automated pricing",
        "Implemented end-to-end workflow automation using n8n",
      ],
    },
    {
      type: "Freelancing",
      responsibility: "Software Developer",
      company: "Health Tech Project",
      Tech_Stack: "N8N, Google Sheets, Webhooks",
      details: [
        "Built a personalized protein intake recommendation system",
        "Captured and stored user data via webhooks and Google Sheets",
        "Calculated diet-specific protein intake automatically",
        "Delivered instant nutrition feedback to users",
        "Eliminated manual calculations through automation",
      ],
    },
    
    {
      type: "Freelancing",
      responsibility: "Automation Developer",
      company: "Tech Company",
      Tech_Stack: "N8N, Google Drive, Google Sheets, Gmail, Webhooks",
      details: [
        "Built automated Excel consolidation using Google Drive",
        "Implemented file validation and structured data extraction",
        "Generated reports with screenshots and email delivery",
        "Reduced manual effort by 90% and eliminated errors",
      ],
    },
    {
      type: "Internship",
      responsibility: "Full Stack Developer",
      company: "Zidio Development",
      Tech_Stack: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
      details: [
        "Built a job portal with integrated resume builder",
        "Designed scalable REST APIs and backend architecture",
        "Generated dynamic resumes from user inputs",
        "Designed responsive UI using Bootstrap",
        "Ensured scalability and smooth UX",
      ],
    },
  ];

  return (
    <div className="relative flex flex-col min-h-screen w-full justify-center items-center gap-12 md:gap-20 py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">

      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00e786] rounded-full blur-3xl opacity-5 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-5 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-5 animate-blob animation-delay-4000" />
      </div>

      {/* Title */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00e786] via-cyan-400 to-[#00e786] animate-gradient-x">
          Experience
        </h1>
        <div className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#00e786] to-transparent" />
      </div>

      {/* Experience Cards Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="group p-6 md:p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-[#00e786]/40"
          >
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#00e786]">
                {experience.responsibility}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {experience.company} · {experience.type}
              </p>
            </div>

            {/* Tech Stack */}
            {experience.Tech_Stack && (
              <p className="mb-4 text-sm text-cyan-400">
                <span className="font-semibold">Tech Stack:</span>{" "}
                {experience.Tech_Stack}
              </p>
            )}

            {/* Details */}
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              {experience.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
