import { downloads } from "@/lib/downloads";
import { Terminal } from "lucide-react";
import { FaGithub as Github} from 'react-icons/fa';


export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 px-6 py-10 text-sm text-white/30 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <Terminal size={15} />
        <span>XAMPP Control</span>
      </div>

      <p>Built with ♥️ by Yassine ELKEFI • 1.0.0</p>

      <a
        href={downloads.github}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 transition hover:text-white"
      >
        <Github size={15} />
        GitHub
      </a>
    </footer>
  );
}