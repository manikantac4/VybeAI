import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import TuringWingsLogo from "./TuringWingsLogo";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Home",
      href: "/portal/core/v1/dashboard-overview",
    },
    {
      name: "Programs",
      href: "/portal/services/v2/program-catalog",
    },
    {
      name: "Reviews",
      href: "/portal/analytics/v1/feedback-center",
    },
    {
      name: "About",
      href: "/portal/system/v1/organization-profile",
    },
    {
      name: "Contact",
      href: "/portal/support/v1/contact-team",
    },
  ];

  const isLight = theme === "light";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isLight
            ? "bg-white/90 backdrop-blur-lg shadow-md py-3 border-b border-slate-200/80"
            : "bg-slate-950/90 backdrop-blur-lg shadow-xl py-3 border-b border-amber-500/25"
          : isLight
          ? "bg-white/70 backdrop-blur-md py-4 border-b border-slate-200/40"
          : "bg-slate-950/80 backdrop-blur-md py-4 border-b border-amber-500/15"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo Link */}
        <Link to="/" className="group flex items-center gap-2">
          <TuringWingsLogo size="md" />
        </Link>

        {/* Desktop Navigation Links — Spacious & Centered */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-12">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className="relative text-sm sm:text-base font-semibold py-1 transition-colors group"
              >
                <span className={
                  isActive
                    ? "text-amber-500 font-extrabold"
                    : isLight
                    ? "text-slate-700 hover:text-amber-600"
                    : "text-slate-300 hover:text-amber-400"
                }>
                  {link.name}
                </span>

                {/* Active Indicator Underline */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Theme Toggle Button */}
        <div className="hidden md:flex items-center">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`p-2.5 rounded-full transition-all flex items-center justify-center ${
              isLight
                ? "bg-slate-100 text-amber-600 hover:bg-amber-50 border border-slate-200 shadow-sm"
                : "bg-slate-900 text-amber-400 hover:bg-slate-800 border border-amber-500/30 shadow-md"
            }`}
            title={`Switch to ${isLight ? "Dark" : "Light"} Theme`}
            aria-label="Toggle Theme"
          >
            {isLight ? <Moon className="w-4.5 h-4.5 fill-amber-500/20" /> : <Sun className="w-4.5 h-4.5 text-amber-400" />}
          </motion.button>
        </div>

        {/* Mobile Right Controls: Toggle + Menu Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl text-xs font-bold transition-all ${
              isLight
                ? "bg-slate-100 text-amber-600 border border-slate-200"
                : "bg-slate-900 text-amber-400 border border-amber-500/30"
            }`}
            aria-label="Toggle Theme"
          >
            {isLight ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-amber-400" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl transition-colors ${
              isLight ? "text-slate-800 bg-slate-100" : "text-amber-400 bg-slate-900 border border-amber-500/30"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-6 py-6 space-y-4 shadow-xl border-b ${
          isLight ? "bg-white border-slate-200" : "bg-slate-950 border-amber-500/20"
        }`}>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold py-1 ${
                  isLight ? "text-slate-800 hover:text-amber-600" : "text-slate-200 hover:text-amber-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
