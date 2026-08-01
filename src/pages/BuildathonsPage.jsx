import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import BuildathonsSection from "../components/BuildathonsSection";
import MovementCTASection from "../components/MovementCTASection";
import Footer from "../components/Footer";
import Global3DBackground from "../components/Global3DBackground";

// Import Hackathon Template Sections from extracted template
import TemplateLayout from "../hackathon/TemplateLayout";

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
        
        {/* Turing Wings Hackathon Portal Hub */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="border border-slate-200 rounded-3xl shadow-xl overflow-hidden bg-white">
            <TemplateLayout />
          </div>
        </div>

        <MovementCTASection />
      </main>

      <Footer />
    </div>
  );
}
