import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function DownloadCard({
  icon,
  title,
  subtitle,
  description,
  href,
  recommended = false,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  recommended?: boolean;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -3 }}
      className="group relative flex flex-col items-center gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-8 py-10 text-center transition hover:border-white/[0.12] hover:bg-white/[0.05]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.07] text-white/70">
        {icon}
      </div>

      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-1 text-sm text-white/30">{subtitle}</p>
      </div>

      <p className="text-sm leading-6 text-white/40">{description}</p>

      <div className="mt-auto flex items-center gap-2 text-sm font-medium text-white/50 transition group-hover:text-white">
        <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
        Download DMG
      </div>

      {recommended && (
        <span className="absolute right-4 top-4 text-xs text-orange-400/70">
          Recommended for newer macs
        </span>
      )}
    </motion.a>
  );
}