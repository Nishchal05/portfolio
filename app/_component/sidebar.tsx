"use client";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub } from "@mui/icons-material";
import CodeIcon from '@mui/icons-material/Code';

export default function Sidebar() {
  return (
    <aside 
      aria-label="Social links sidebar"
      className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3.5"
    >
      <a
        href="https://github.com/Nishchal05"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        className="group border border-zinc-800 bg-zinc-950/80 backdrop-blur-md rounded-xl p-3.5 transition-all duration-300 hover:border-[#00e786] hover:shadow-lg hover:shadow-[#00e786]/10 hover:-translate-y-0.5"
      >
        <GitHub
          sx={{
            fontSize: 22,
            color: "#a1a1aa",
            transition: "color 0.3s",
            ".group:hover &": {
              color: "#00e786",
            },
          }}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/nishchal-sundan"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        className="group border border-zinc-800 bg-zinc-950/80 backdrop-blur-md rounded-xl p-3.5 transition-all duration-300 hover:border-[#00e786] hover:shadow-lg hover:shadow-[#00e786]/10 hover:-translate-y-0.5"
      >
        <LinkedInIcon
          sx={{
            fontSize: 22,
            color: "#a1a1aa",
            transition: "color 0.3s",
            ".group:hover &": {
              color: "#00e786",
            },
          }}
        />
      </a>

      <a
        href="https://leetcode.com/u/Nishchal05/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LeetCode Profile"
        className="group border border-zinc-800 bg-zinc-950/80 backdrop-blur-md rounded-xl p-3.5 transition-all duration-300 hover:border-[#00e786] hover:shadow-lg hover:shadow-[#00e786]/10 hover:-translate-y-0.5"
      >
        <CodeIcon
          sx={{
            fontSize: 22,
            color: "#a1a1aa",
            transition: "color 0.3s",
            ".group:hover &": {
              color: "#00e786",
            },
          }}
        />
      </a>
    </aside>
  );
}
