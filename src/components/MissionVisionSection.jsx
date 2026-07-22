import React from "react";
import { motion } from "framer-motion";

export default function MissionVisionSection() {
  const visionMissionImageUrl = "https://res.cloudinary.com/dihdjq2u4/image/upload/v1784740534/Gemini_Generated_Image_vp0ik0vp0ik0vp0i_cg1dcl.png";

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="mission-vision" className="py-20 md:py-28 bg-slate-50/50 text-slate-900 relative overflow-hidden scroll-mt-24 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid: Title & Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Heading & Core Quote */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif italic text-slate-900 leading-tight">
              Mission <br />
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">& Vision</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Our core goal is to provide every student, creator, and innovator a simple and empowering way to grow — using the most innovative AI-powered tools and modern creator workflows available today.
            </motion.p>

            <motion.blockquote variants={fadeInUp} className="text-xl sm:text-2xl font-serif italic text-slate-800 py-3.5 border-l-4 border-cyan-500 pl-4 bg-white shadow-sm rounded-r-2xl">
              “Digital creation and modern technology for everyone, at every level.”
            </blockquote>

            {/* Stats Row */}
            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
              <motion.div whileHover={{ y: -4 }} className="bg-white border border-slate-200/80 rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-all">
                <p className="text-2xl sm:text-3xl font-bold font-serif italic bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">4+</p>
                <p className="text-xs text-slate-500 font-semibold mt-1">Launch Programs</p>
              </motion.div>
              <motion.div whileHover={{ y: -4 }} className="bg-white border border-slate-200/80 rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-all">
                <p className="text-2xl sm:text-3xl font-bold font-serif italic bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">∞</p>
                <p className="text-xs text-slate-500 font-semibold mt-1">Creator Community</p>
              </motion.div>
              <motion.div whileHover={{ y: -4 }} className="bg-white border border-slate-200/80 rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-all">
                <p className="text-2xl sm:text-3xl font-bold font-serif italic bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">AI</p>
                <p className="text-xs text-slate-500 font-semibold mt-1">Powered Workflows</p>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right Column: Cloudinary Team Illustration & About Us Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-white border border-slate-200/80 p-3 sm:p-4 shadow-lg overflow-hidden"
            >
              <img
                src={visionMissionImageUrl}
                alt="Creation Workspace"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </motion.div>

            {/* About Us Card */}
            <motion.div whileHover={{ y: -3 }} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <div className="space-y-2 text-left w-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900">About Us</h3>
                  
                  {/* SVG Neural Badge */}
                  <span className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-[10px] font-bold tracking-wider uppercase border border-cyan-200 inline-flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                    <span>AI FIRST</span>
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Turing Wings / VybeAI was built by young, creative, and passionate individuals who believe technology should be accessible to everyone. We combine AI tools, creator mindsets, and practical learning to transform curious beginners into confident builders.
                </p>
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* Bottom Grid: Our Vision & Our Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="vision">
          
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-white border border-slate-200/80 rounded-3xl p-7 sm:p-8 text-left shadow-lg relative overflow-hidden group hover:border-cyan-500/50 hover:shadow-xl transition-all"
          >
            {/* SVG Vision Eye Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold uppercase tracking-wider mb-6 border border-cyan-200">
              <svg className="w-4 h-4 text-cyan-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>OUR VISION</span>
            </div>
            
            <h3 className="text-2xl font-bold font-serif italic text-slate-900 mb-4">
              Build a Generation of Confident Creators
            </h3>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              To build a generation of confident creators, innovators, and future-ready individuals by making modern technology, AI, and digital creation accessible, practical, and inspiring for everyone willing to build and grow.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-white border border-slate-200/80 rounded-3xl p-7 sm:p-8 text-left shadow-lg relative overflow-hidden group hover:border-purple-500/50 hover:shadow-xl transition-all"
          >
            {/* SVG Mission Target / Rocket Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider mb-6 border border-purple-200">
              <svg className="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              <span>OUR MISSION</span>
            </div>

            <h3 className="text-2xl font-bold font-serif italic text-slate-900 mb-4">
              Simplify. Empower. Transform.
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              To simplify modern technology and AI-assisted creation, introduce modern creator workflows, encourage practical project-based learning, and build innovation-focused ecosystems where learning, building, collaboration, and growth happen together.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
