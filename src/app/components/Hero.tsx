import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { FaGithub as Github} from 'react-icons/fa';
import { downloads } from "@/lib/downloads";
import { ControlPanelPreview } from "./ControlPanelPreview";


const services = ["Apache", "MySQL", "ProFTPD"];

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-32 pt-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          XAMPP Control v1.0.0
        </div>

        <h1 className="mx-auto max-w-4xl text-balance text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
          Your XAMPP stack.
          <br />

          <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
            Under control.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/50">
          A clean, native-feeling macOS control panel for managing XAMPP
          services without getting in your way.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#download"
            className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.02]"
          >
            <ArrowDown size={17} />

            Download for Mac

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          <a
            href={downloads.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 font-medium transition hover:bg-white/[0.08]"
          >
            <Github size={17} />
            View on GitHub
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="mt-6 flex items-center justify-center gap-3"
      >
        <span className="text-sm text-white/30">Manages</span>

        <div className="h-3.5 w-px bg-white/10" />

        {services.map((service, i) => (
          <motion.div
            key={service}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 + i * 0.1, duration: 0.4 }}
            className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-sm text-white/50"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
            {service}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mx-auto mt-20 max-w-4xl"
      >
        <ControlPanelPreview />
      </motion.div>
    </section>
  );
}