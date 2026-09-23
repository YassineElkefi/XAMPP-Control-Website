import { downloads } from "@/lib/downloads";
import { Cpu, HardDrive } from "lucide-react";
import { DownloadCard } from "./DownloadCard";

export function Architecture() {
  return (
    <section id="download" className="mx-auto max-w-6xl px-6 py-28">
      <div className="text-center">
        <p className="text-sm font-medium text-orange-400">
          DOWNLOAD
        </p>

        <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Built for your Mac.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-white/45">
          Download the version that matches your Mac architecture.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
        <DownloadCard
          icon={<Cpu size={23} />}
          title="Apple Silicon"
          subtitle="M1 · M2 · M3 · M4 · M5"
          description="For Macs powered by Apple Silicon."
          href={downloads.appleSilicon}
          recommended
        />

        <DownloadCard
          icon={<HardDrive size={23} />}
          title="Intel"
          subtitle="x86_64"
          description="For Intel-based Mac computers."
          href={downloads.intel}
        />
      </div>
    </section>
  );
}