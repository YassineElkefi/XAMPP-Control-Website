"use client";


import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Architecture } from "./components/Architecture";
import { Footer } from "./components/Footer";
import { Requirements } from "./components/Requirements";



export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505]">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

        <div className="absolute right-[-200px] top-[30%] h-[500px] w-[500px] rounded-full bg-red-500/5 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      </div>

      <Navbar />

      <Hero />

      <Features />

      <Architecture />

      <Requirements />

      <Footer />
    </main>
  );
}

