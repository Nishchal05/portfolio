import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { GitHub } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-20 flex-col gap-4">
      <a
        href="#"
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
        href="#"
        className="group border border-gray-600 rounded-xl p-4 transition-all hover:border-[#00e786]"
      >
        <EmailIcon
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
        href="#"
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
        href="#"
        className="group border border-gray-600 rounded-xl p-4 transition-all hover:border-[#00e786]"
      >
        <InstagramIcon
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
