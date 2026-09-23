import Image from "next/image";

export function ControlPanelPreview() {
  return (
    <div className="relative mx-auto max-w-[1100px]">
      <div className="absolute -inset-4 rounded-[40px] transform-gpu bg-red-500/10 blur-[80px]" />

      <div className="relative overflow-hidden rounded-2xl shadow-black">
        <Image
          src="/screenshots/dashboard.png"
          alt="XAMPP Control dashboard"
          width={1200}
          height={750}
          priority
          sizes="(max-width: 1100px) 100vw, 1100px"
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}