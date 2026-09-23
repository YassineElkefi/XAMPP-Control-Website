import { Check } from "lucide-react";

export function Requirements() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="glass rounded-3xl p-8 sm:p-12">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium text-orange-400">
              BEFORE YOU INSTALL
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              A few things to know.
            </h2>

            <p className="mt-4 leading-7 text-white/45">
              XAMPP Control is a control panel for an existing XAMPP
              installation. It does not install XAMPP itself.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "macOS 13 Ventura or newer",
              "XAMPP 8.x installed",
              "XAMPP located at /Applications/XAMPP",
              "Apple Silicon or Intel Mac",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-white/60"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                  <Check size={14} />
                </div>

                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}