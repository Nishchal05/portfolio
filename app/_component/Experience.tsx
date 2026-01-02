import Image from "next/image";

export default function Experience() {
  const experiences = [
    {
      type: "Freelancing",
      responsibility: "Full Stack Developer",
      company: "AlertGroup-Canadian Security Startup",
      Live_Link: "https://alertgroup.vercel.app/",
      Tech_Stack:
        "Next.js, Node.js, Express.js, Tailwind CSS, MongoDB, Nodemailer, NextAuth.js, GitHub, Vercel",
      details: [
        "Developed two fully integrated platforms for AlertGroup: a centralized admin dashboard for internal operations and a user-facing website for customers, ensuring seamless coordination between management and end users.",
        "Built a secure, scalable multi-service admin system, managing application security, alerts, service configurations, and a built-in helpdesk—achieving an SEO score of 94 for performance and discoverability.",
        "Implemented robust authentication and authorization using Next.js with NextAuth.js (SSR-based security), enabling secure access control across both admin and user platforms.",
        "Designed modern, responsive UIs for both systems using Tailwind CSS and Shadcn UI, delivering a clean, intuitive experience for admins and users across all devices.",
        "Integrated automation and backend optimizations, including Nodemailer for real-time notifications, optimized MongoDB data handling, and end-to-end workflow automation using n8n—covering alerts, order updates, and service management.",
      ],
    },
    {
      type: "Freelancing",
      responsibility: "Software Developer",
      company: "E-commerce Platform",
      Tech_Stack: "React.js, TailwindCSS, N8N",
      details: [
        "Built an intelligent traffic analytics system to identify user acquisition sources (Facebook, Google, direct, referrals, etc.), enabling data-driven campaign optimization and smarter marketing decisions.",
        "Implemented automated bulk order price calculation, dynamically computing total order value based on quantity, pricing rules, and discounts, ensuring accuracy and scalability.",
        "Designed an automated receipt generation and notification flow, instantly sending detailed order receipts to shoppers for transparency and verification.",
        "Enabled seller-side order verification and delivery scheduling, allowing shopkeepers to confirm orders and assign precise delivery dates through an automated workflow.",
        "Developed an end-to-end order management pipeline using n8n, maintaining an updated order list with Order ID, items, pricing, and delivery timelines—ensuring seamless coordination from order placement to delivery.",
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
    <div
      id="Experience"
      className="relative flex flex-col min-h-screen w-full justify-center items-center gap-12 md:gap-20 py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00e786] rounded-full blur-3xl opacity-5 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-5 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-5 animate-blob animation-delay-4000" />
      </div>

      {/* Title */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00e786] via-cyan-400 to-[#00e786] animate-gradient-x">
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
            {!experience.Live_Link ? null : (
              <a
                href={experience.Live_Link}
                target="_blank"
                className="inline-block text-sm text-[#00e786] hover:underline"
              >
                🔗 Live Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
