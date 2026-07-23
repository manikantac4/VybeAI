import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import LayeredMetallicGoldButton from "./LayeredMetallicGoldButton";

export default function HeroSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section
      id="hero"
      className={`relative pt-28 pb-20 sm:pt-36 sm:pb-28 min-h-[85vh] flex flex-col justify-center scroll-mt-20 select-none overflow-hidden transition-colors duration-500 ${
        isLight ? "bg-[#f8f6f0] text-slate-900" : "bg-[#090b10] text-slate-100"
      }`}
    >
      {/* Static Side Ambient Glowing Light Orbs */}
      <div className={`absolute top-1/4 -left-32 w-[550px] h-[550px] rounded-full blur-[160px] pointer-events-none ${
        isLight ? "bg-amber-300/30" : "bg-amber-500/15"
      }`} />
      
      <div className={`absolute top-1/3 -right-32 w-[550px] h-[550px] rounded-full blur-[160px] pointer-events-none ${
        isLight ? "bg-yellow-300/30" : "bg-yellow-500/15"
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* TOP HERO HEADER BLOCK: ACCELERATING INNOVATION WITH AI & EXACT OVERLAPPING GOLD BUTTON */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 sm:mb-20">
          
          {/* Left Side: Headline & Subtitle */}
          <div className="lg:col-span-8 text-left space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
            >
              <span
                className={`uppercase tracking-wider font-serif italic block ${
                  isLight
                    ? "text-slate-900 font-black"
                    : "bg-gradient-to-r from-[#fef08a] via-[#f7d774] to-[#d97706] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(245,203,92,0.35)]"
                }`}
              >
                ACCELERATING INNOVATION WITH AI.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={`text-base sm:text-xl font-medium max-w-2xl leading-relaxed ${
                isLight ? "text-slate-700" : "text-slate-300"
              }`}
            >
              Discover the next era of technology. Learn with purpose, build with precision, innovate with impact.
            </motion.p>
          </div>

          {/* Right Side: Exact Overlapping Gold Frame Get Started Button */}
          <div className="lg:col-span-4 flex items-center justify-start lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <LayeredMetallicGoldButton
                text="Get Started"
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
              <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                isLight ? "text-slate-700" : "text-slate-300"
              }`}>
                Discover the next era of technology. Learn with purpose, build with precision, with impact.
              </p>
            </div>

            <div className="pt-2 flex justify-center">
              <LayeredMetallicGoldButton
                text="View Courses"
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
              <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                isLight ? "text-slate-700" : "text-slate-300"
              }`}>
                Compare the creation to build, design and projects your project's project program.
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
              <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                isLight ? "text-slate-700" : "text-slate-300"
              }`}>
                Innovates research innovation, with organization developments and project creation.
              </p>
            </div>

            <div className="pt-2 flex justify-center">
              <LayeredMetallicGoldButton
                text="Explore research"
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
