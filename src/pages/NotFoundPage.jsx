import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import TuringWingsLogo from "../components/TuringWingsLogo";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#07090f] text-slate-100 flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
      
      {/* Background Ambient Gold Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #eab308 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="max-w-lg mx-auto text-center relative z-10 space-y-6">
        
        {/* Brand Logo */}
        <div className="flex justify-center mb-4">
          <TuringWingsLogo size="lg" />
        </div>

        {/* Big 404 Numbers */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block"
        >
          <span className="text-8xl sm:text-9xl font-extrabold font-serif italic bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-md select-none">
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
          <h1 className="text-2xl sm:text-3xl font-extrabold font-serif italic text-white">
            Oops! Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
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
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4 text-slate-950" />
            <span>Return to Home Page</span>
          </Link>

          <Link
            to="/portal/services/v2/program-catalog"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-200 font-bold text-xs sm:text-sm hover:border-amber-400 hover:text-amber-400 transition-all text-center shadow-sm"
          >
            Explore Programs
          </Link>
        </motion.div>

        {/* Subtitle Footer */}
        <p className="text-[11px] text-amber-300/60 font-medium pt-8">
          Turing Wings Ecosystem • Learn. Build. Innovate.
        </p>

      </div>
    </div>
  );
}
