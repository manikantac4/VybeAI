import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  const heroImageUrl = "https://res.cloudinary.com/dihdjq2u4/image/upload/v1784740319/Gemini_Generated_Image_gfh511gfh511gfh5_qo5hc8.png";

  return (
    <section id="hero" className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 bg-white text-slate-900 min-h-[85vh] sm:min-h-[92vh] flex items-center scroll-mt-20 select-none">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] sm:leading-[1.12] text-slate-900"
            >
              Build Beyond Limits <br />
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent font-serif italic">
                With AI & Innovation
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-sm sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              A modern creator ecosystem helping students, beginners, and future innovators learn, build, experiment, and grow using AI-powered workflows, Vibe Coding, and practical buildathons.
            </motion.p>

            {/* Feature Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 text-xs font-bold text-slate-700 pt-1"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>Zero Coding Experience Needed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
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
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Start Building Now</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#programs"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm hover:border-cyan-500 hover:text-cyan-600 transition-all text-center shadow-sm"
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
              <div className="w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shrink-0" />
              <span className="text-[11px] sm:text-xs text-slate-500 font-semibold tracking-wide">
                Empowering the next generation of creators & innovators
              </span>
            </motion.div>

          </div>

          {/* Right Column: Cloudinary Hero Image */}
          <div className="lg:col-span-6 flex items-center justify-center mt-4 lg:mt-0">
            <motion.img
              src={heroImageUrl}
              alt="Build Beyond Limits with AI"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-64 sm:h-[460px] lg:h-[540px] w-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
