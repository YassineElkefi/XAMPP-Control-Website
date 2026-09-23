import {
  Monitor,
  Server,
  Terminal,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Server,
    title: "Control your services",
    description:
      "Start, stop and monitor your XAMPP services from one clean interface.",
  },
  {
    icon: Zap,
    title: "Fast and lightweight",
    description:
      "A focused control panel designed to stay out of your way while you work.",
  },
  {
    icon: Monitor,
    title: "Made for macOS",
    description:
      "A native-feeling experience designed specifically for Mac users.",
  },
  {
    icon: Terminal,
    title: "Developer focused",
    description:
      "Quick access to the tools you already use without unnecessary complexity.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-orange-400">
          SIMPLE BY DESIGN
        </p>

        <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Everything you need.
          <br />
          Nothing you don't.
        </h2>

        <p className="mt-5 text-white/45">
          XAMPP Control focuses on the everyday tasks that matter when
          developing locally.
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="glass rounded-2xl p-7 transition hover:bg-white/[0.07]"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Icon size={20} />
              </div>

              <h3 className="text-lg font-medium">
                {feature.title}
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-white/40">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}