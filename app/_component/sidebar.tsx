
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub } from "@mui/icons-material";
import CodeIcon from '@mui/icons-material/Code';
export default function Sidebar() {
  return (
    <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-20 flex-col gap-4">
      <a
        href="https://github.com/Nishchal05"
        className="group border border-gray-600 rounded-xl p-4 transition-all hover:border-[#00e786]"
      >
        <GitHub
          sx={{
            fontSize: 36,
            color: "#ffffff",
            transition: "color 0.3s",
            ".group:hover &": {
              color: "#00e786",
            },
          }}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/nishchal-sundan"
        className="group border border-gray-600 rounded-xl p-4 transition-all hover:border-[#00e786]"
      >
        <LinkedInIcon
          sx={{
            fontSize: 36,
            color: "#ffffff",
            transition: "color 0.3s",
            ".group:hover &": {
              color: "#00e786",
            },
          }}
        />
      </a>

      <a
        href="https://leetcode.com/u/Nishchal05/"
        className="group border border-gray-600 rounded-xl p-4 transition-all hover:border-[#00e786]"
      >
        <CodeIcon
          sx={{
            fontSize: 36,
            color: "#ffffff",
            transition: "color 0.3s",
            ".group:hover &": {
              color: "#00e786",
            },
          }}
        />
      </a>

    </div>
  );
}
