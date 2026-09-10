export default function RightSidebar() {
  return (
    <aside 
      aria-label="Email contact sidebar"
      className="fixed right-6 bottom-20 z-30 hidden lg:flex flex-col items-center gap-6 group"
    >
      {/* Email with glass effect container */}
      <div className="relative">
        <a
          href="mailto:nishchalsundan04@gmail.com"
          className="relative block text-xs font-medium text-zinc-400 hover:text-[#00e786] transition-all duration-300 tracking-[0.2em] uppercase backdrop-blur-sm px-3 py-2 rounded-lg hover:bg-zinc-900/60 border border-transparent hover:border-zinc-800"
          style={{ writingMode: "vertical-rl" }}
        >
          nishchalsundan04@gmail.com
          
          {/* Hover glow effect */}
          <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#00e786]/20 to-cyan-400/20 blur-xl -z-10" />
        </a>
      </div>

      {/* Animated gradient line */}
      <div className="relative h-28 w-px overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00e786]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00e786] to-transparent animate-pulse" 
             style={{ animationDuration: '2s' }} />
      </div>
    </aside>
  );
}