import { Terminal } from "lucide-react";
import { FaGithub as Github} from 'react-icons/fa';
import { downloads } from "@/lib/downloads";


export function Navbar() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <a href="#" className="flex items-center gap-2 font-semibold">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black">
          <Terminal size={18} />
        </div>

        <span>XAMPP Control</span>
      </a>

      <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
        <a href="#features" className="transition hover:text-white">
          Features
        </a>

        <a href="#download" className="transition hover:text-white">
          Download
        </a>

        <a
          href={downloads.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 transition hover:text-white"
        >
          <Github size={16} />
          GitHub
        </a>
      </nav>

      <a
        href="#download"
        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10"
      >
        Download
      </a>
    </header>
  );
}