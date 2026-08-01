import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";
import LayeredMetallicGoldButton from "./LayeredMetallicGoldButton";

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30;
    const y = (clientY / innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-900 pt-28 pb-20 overflow-hidden flex flex-col justify-center items-center selection:bg-amber-500 selection:text-white"
    >
      {/* Abstract Background Grid & Ambient Soft Tones */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-slate-100/50 to-white pointer-events-none" />
      
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(217, 119, 6, 0.25) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
        
        {/* Left Column: Vision Headline & Classic Gold CTAs */}
        <div className="lg:col-span-7 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-mono font-bold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>AI-Native Engineering Ecosystem</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] font-sans"
          >
            Designed to build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-amber-600">
              AI-Native Software.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed"
          >
            Not another coding course. Turing Wings trains engineers to think, collaborate, and ship production-ready applications using modern AI workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 pt-4"
          >
            <LayeredMetallicGoldButton
              text="Explore Experience"
              href="#experience"
              size="md"
            />

            <LayeredMetallicGoldButton
              text="Join Cohort"
              href="#cohorts"
              size="md"
            />
          </motion.div>

        </div>

        {/* Right Column: Interactive 3D Brand Emblem Visual */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            style={{
              transform: `rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg)`,
              transition: "transform 0.15s ease-out"
            }}
            className="w-72 h-72 sm:w-96 sm:h-96 relative flex items-center justify-center cursor-pointer group"
          >
            {/* Outer Glowing Wireframe Rings */}
            <div className="absolute inset-0 rounded-full border border-amber-500/30 animate-spin-slow group-hover:border-amber-500/60 transition-colors" />
            <div className="absolute inset-4 rounded-full border border-dashed border-slate-300 group-hover:border-amber-500/40 transition-colors" />
            
            {/* Center 3D Isometric Logo Prism */}
            <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-3xl bg-white border border-slate-200 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center p-6 text-center space-y-3 group-hover:shadow-amber-500/20 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <Terminal className="w-9 h-9 text-slate-950" />
              </div>
              <span className="font-extrabold text-lg text-slate-900 font-mono tracking-wider">
                TW::AI_ENGINE
              </span>
              <span className="text-[10px] text-amber-700 font-mono uppercase tracking-widest">
                Interactive 3D Core
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
