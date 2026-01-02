export default function RightSidebar() {
    return (
      <aside className="fixed right-8 bottom-30 z-20 hidden md:flex flex-col items-center gap-6 group">
        
        {/* Email with glass effect container */}
        <div className="relative">
          <a
            href="mailto:nishchalsundan04@gmail.com"
            className="relative block text-xs font-medium text-gray-400 hover:text-emerald-400 transition-all duration-300 tracking-[0.2em] uppercase backdrop-blur-sm px-3 py-2 rounded-lg hover:bg-white/5"
            style={{ writingMode: "vertical-rl" }}
          >
            nishchalsundan04@gmail.com
            
            {/* Hover glow effect */}
            <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 blur-xl -z-10" />
          </a>
        </div>
  
        {/* Animated gradient line */}
        <div className="relative h-32 w-px overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400 to-transparent animate-pulse" 
               style={{ animationDuration: '2s' }} />
          
          {/* Moving shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-20 animate-slide" />
        </div>
  
        <style jsx>{`
          @keyframes slide {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(100%);
            }
          }
          .animate-slide {
            animation: slide 3s ease-in-out infinite;
          }
        `}</style>
      </aside>
    );
  }