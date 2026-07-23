import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function HeroSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // Cloudinary Assets for Light & Dark Themes
  const whiteThemeImageUrl = "https://res.cloudinary.com/dihdjq2u4/image/upload/v1784774191/Gemini_Generated_Image_m6dfn0m6dfn0m6df-removebg-preview_a4npqj.png";
  const darkVideoUrl = "https://res.cloudinary.com/dihdjq2u4/video/upload/v1784773175/animate_the_formation_ojf_imag-ezremove_civmkk.mp4";

  return (
    <section
      id="hero"
      className={`relative pt-28 pb-20 sm:pt-36 sm:pb-28 min-h-[85vh] sm:min-h-[92vh] flex items-center scroll-mt-20 select-none overflow-hidden transition-colors duration-500 ${
        isLight ? "bg-[#f8f6f0] text-slate-900" : "bg-[#0b0c0f] text-slate-100"
      }`}
    >
      {/* Soft Ambient Mesh Glows */}
      <div className={`absolute top-12 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none ${
        isLight
          ? "bg-amber-200/30"
          : "bg-amber-500/10"
      }`} />
      
      <div className={`absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none ${
        isLight
          ? "bg-yellow-200/30"
          : "bg-yellow-500/10"
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] sm:leading-[1.12] ${
                isLight ? "text-slate-900" : "text-white"
              }`}
            >
              Build Beyond Limits <br />
              <span className={isLight ? "bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent font-serif italic" : "bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-serif italic"}>
                With AI & Innovation
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={`text-sm sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-semibold ${
                isLight ? "text-slate-700" : "text-slate-300"
              }`}
            >
              A modern creator ecosystem helping students, beginners, and future innovators learn, build, experiment, and grow using AI-powered workflows, Vibe Coding, and practical buildathons.
            </motion.p>

            {/* Feature Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 text-xs font-bold pt-1 ${
                isLight ? "text-slate-800" : "text-slate-200"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Zero Coding Experience Needed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Hands-On Practical Building</span>
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
            >
              <Link
                to="/portal/auth/v1/account-access"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/25 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Start Building Now</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#programs"
                className={`w-full sm:w-auto px-7 py-3.5 rounded-full border font-bold text-sm transition-all text-center shadow-sm ${
                  isLight
                    ? "bg-[#ede8db]/70 border-[#d8d0be] text-slate-800 hover:bg-[#e4ddcd]"
                    : "bg-slate-900 border-amber-500/30 text-amber-200 hover:border-amber-400 hover:text-amber-400"
                }`}
              >
                Explore Programs
              </a>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-4 sm:pt-6 flex items-center justify-center lg:justify-start gap-3"
            >
              <div className="w-8 h-[2px] bg-amber-600 rounded-full shrink-0" />
              <span className={`text-[11px] sm:text-xs font-semibold tracking-wide ${
                isLight ? "text-slate-600" : "text-amber-200/80"
              }`}>
                Empowering the next generation of creators & innovators
              </span>
            </motion.div>

          </div>

          {/* Right Column: Transparent Background Image (Light) vs Looping Video (Dark) */}
          <div className="lg:col-span-6 flex items-center justify-center mt-4 lg:mt-0 relative">
            <motion.div
              key={isLight ? "transparent-white-image" : "dark-video-perfect"}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full flex items-center justify-center relative"
            >
              {isLight ? (
                /* White Theme: Transparent Background PNG Image */
                <img
                  src={whiteThemeImageUrl}
                  alt="Launch Your Future in AI & Development"
                  className="h-64 sm:h-[460px] lg:h-[540px] w-auto object-contain drop-shadow-md"
                />
              ) : (
                /* Dark Theme: Looping Cloudinary Video */
                <video
                  src={darkVideoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-64 sm:h-[460px] lg:h-[540px] w-full object-contain"
                  style={{
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 70%, transparent 100%)",
                    maskImage: "radial-gradient(ellipse at center, black 70%, transparent 100%)"
                  }}
                />
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
