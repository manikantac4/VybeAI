import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Compass, Cpu, Zap, Globe, Shield } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import LayeredMetallicGoldButton from "./LayeredMetallicGoldButton";

export default function HeroSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";



  return (
    <section
      id="hero"
      className={`relative pt-32 pb-24 sm:pt-40 sm:pb-32 min-h-[90vh] flex flex-col justify-center scroll-mt-20 select-none overflow-hidden transition-colors duration-500 ${
        isLight ? "bg-transparent text-slate-900" : "bg-transparent text-slate-100"
      }`}
    >
      {/* Side Ambient Light Glow Orbs */}
      <div
        className={`absolute top-1/4 -left-32 w-[550px] h-[550px] rounded-full blur-[160px] pointer-events-none ${
          isLight ? "bg-amber-300/30" : "bg-amber-500/15"
        }`}
      />
      <div
        className={`absolute top-1/3 -right-32 w-[550px] h-[550px] rounded-full blur-[160px] pointer-events-none ${
          isLight ? "bg-yellow-300/30" : "bg-yellow-500/15"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* TOP HERO HEADER BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 sm:mb-20">
          {/* Left Side: Tagline, Headline & Subtitle */}
          <div className="lg:col-span-8 text-left space-y-5">
            
            {/* Innovation Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-md ${
                isLight
                  ? "bg-amber-500/10 border-amber-500/30 text-amber-900"
                  : "bg-amber-500/15 border-amber-500/40 text-amber-300 shadow-lg shadow-amber-500/10"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span>THE FUTURE OF CREATION & HUMAN-AI SYMBIOSIS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]"
            >
              <span
                className={`uppercase tracking-wider font-serif italic block ${
                  isLight
                    ? "text-slate-900 font-black"
                    : "bg-gradient-to-r from-[#fef08a] via-[#f7d774] to-[#d97706] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(245,203,92,0.35)]"
                }`}
              >
                ACCELERATING INNOVATION WITH AI.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-base sm:text-xl font-medium max-w-2xl leading-relaxed ${
                isLight ? "text-slate-700" : "text-slate-300"
              }`}
            >
              Welcome to the Turing Wings Creator Headquarters. A global innovation movement where visionary builders, AI researchers, and creative engineers transform ambitious ideas into digital reality.
            </motion.p>

            {/* Quick Action Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <a
                href="#manifesto"
                className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold underline-offset-4 hover:underline ${
                  isLight ? "text-amber-700 hover:text-amber-900" : "text-amber-400 hover:text-amber-200"
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>Explore The Creator Manifesto</span>
              </a>
            </motion.div>

          </div>

          {/* Right Side: Primary 3D Metallic Gold CTA */}
          <div className="lg:col-span-4 flex items-center justify-start lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <LayeredMetallicGoldButton
                text="Step Into Headquarters"
                to="/portal/auth/v1/account-access"
                size="lg"
              />
            </motion.div>
          </div>
        </div>

        {/* CORE PILLARS GRID: 3 GOLD-RIMMED CARDS (LEARN. / BUILD. / INNOVATE.) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: LEARN. */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className={`rounded-2xl p-7 sm:p-8 border shadow-xl flex flex-col justify-between text-left relative overflow-hidden transition-all ${
              isLight
                ? "bg-white/90 border-[#d8d0be] hover:border-[#e2b740] shadow-amber-500/5"
                : "bg-[#0e1118]/90 border-[#e2b740]/40 hover:border-[#e2b740] shadow-amber-500/10"
            }`}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif italic text-[#e2b740] mb-3">
                LEARN.
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                  isLight ? "text-slate-700" : "text-slate-300"
                }`}
              >
                Master frontier AI workflows, vibe coding paradigms, and modern full-stack architectures alongside expert mentors.
              </p>
            </div>

            <div className="pt-2 flex justify-center">
              <LayeredMetallicGoldButton
                text="View Guild Programs"
                href="#programs"
                size="md"
                className="w-full text-center"
              />
            </div>
          </motion.div>

          {/* Card 2: BUILD. */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className={`rounded-2xl p-7 sm:p-8 border shadow-xl flex flex-col justify-between text-left relative overflow-hidden transition-all ${
              isLight
                ? "bg-white/90 border-[#d8d0be] hover:border-[#e2b740] shadow-amber-500/5"
                : "bg-[#0e1118]/90 border-[#e2b740]/40 hover:border-[#e2b740] shadow-amber-500/10"
            }`}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif italic text-[#e2b740] mb-3">
                BUILD.
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                  isLight ? "text-slate-700" : "text-slate-300"
                }`}
              >
                Transform raw concepts into production-ready software systems using neural agent swarms and autonomous build loops.
              </p>
            </div>

            <div className="pt-2 flex justify-center">
              <LayeredMetallicGoldButton
                text="Launch Project"
                to="/portal/auth/v1/account-access"
                size="md"
                className="w-full text-center"
              />
            </div>
          </motion.div>

          {/* Card 3: INNOVATE. */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className={`rounded-2xl p-7 sm:p-8 border shadow-xl flex flex-col justify-between text-left relative overflow-hidden transition-all ${
              isLight
                ? "bg-white/90 border-[#d8d0be] hover:border-[#e2b740] shadow-amber-500/5"
                : "bg-[#0e1118]/90 border-[#e2b740]/40 hover:border-[#e2b740] shadow-amber-500/10"
            }`}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif italic text-[#e2b740] mb-3">
                INNOVATE.
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                  isLight ? "text-slate-700" : "text-slate-300"
                }`}
              >
                Pioneer open-source research, offensive cyber shields, and next-generation spatial computing interfaces.
              </p>
            </div>

            <div className="pt-2 flex justify-center">
              <LayeredMetallicGoldButton
                text="Explore Research"
                to="/portal/services/v2/program-catalog"
                size="md"
                className="w-full text-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
