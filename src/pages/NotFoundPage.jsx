import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Sparkles, Compass } from "lucide-react";
import TuringWingsLogo from "../components/TuringWingsLogo";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#f8fffe] text-slate-800 flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
      
      {/* Background Ambient Mesh Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-200/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#00f2fe 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="max-w-lg mx-auto text-center relative z-10 space-y-6">
        
        {/* Brand Logo */}
        <div className="flex justify-center mb-4">
          <TuringWingsLogo size="md" light={false} />
        </div>

        {/* Big 404 Numbers */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block"
        >
          <span className="text-8xl sm:text-9xl font-extrabold font-serif italic bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm select-none">
            404
          </span>
        </motion.div>

        {/* Heading & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-2"
        >
          <h1 className="text-2xl sm:text-3xl font-extrabold font-serif italic text-slate-900">
            Oops! Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
            The page or route you are looking for doesn't exist, has been removed, or is currently under construction.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4"
        >
          <Link
            to="/"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home Page</span>
          </Link>

          <Link
            to="/#programs"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-xs sm:text-sm hover:border-cyan-500 hover:text-cyan-600 transition-all text-center shadow-sm"
          >
            Explore Programs
          </Link>
        </motion.div>

        {/* Subtitle Footer */}
        <p className="text-[11px] text-slate-400 font-medium pt-8">
          Turing Wings Ecosystem • Learn. Build. Innovate.
        </p>

      </div>
    </div>
  );
}
