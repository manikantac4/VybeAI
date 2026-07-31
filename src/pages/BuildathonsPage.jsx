import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import BuildathonsSection from "../components/BuildathonsSection";
import MovementCTASection from "../components/MovementCTASection";
import Footer from "../components/Footer";
import Global3DBackground from "../components/Global3DBackground";

export default function BuildathonsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full min-h-screen relative selection:bg-amber-500 selection:text-slate-950 bg-white text-slate-800 font-sans">
      <Global3DBackground />
      <Navbar />

      <main className="pt-24 sm:pt-32">
        <BuildathonsSection />
        <MovementCTASection />
      </main>

      <Footer />
    </div>
  );
}
