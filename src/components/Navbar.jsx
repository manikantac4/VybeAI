import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Sparkles, Sun, Moon } from "lucide-react";
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
  ];

  const isLight = theme === "light";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isLight
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80"
            : "bg-slate-950/95 backdrop-blur-md shadow-lg py-3 border-b border-amber-500/20"
          : isLight
          ? "bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100"
          : "bg-slate-950/90 backdrop-blur-sm py-4 border-b border-amber-500/15"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo Image */}
        <Link to="/" className="group flex items-center gap-2">
          <TuringWingsLogo size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-amber-600 font-bold"
                    : isLight
                    ? "text-slate-700 hover:text-amber-600"
                    : "text-slate-300 hover:text-amber-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action CTAs & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3.5">
          
          {/* Sun/Moon Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-full transition-all flex items-center justify-center ${
              isLight
                ? "bg-slate-100 text-amber-600 hover:bg-slate-200 border border-slate-200"
                : "bg-slate-900 text-amber-400 hover:bg-slate-800 border border-amber-500/30"
            }`}
            title={`Switch to ${isLight ? "Dark" : "Light"} Theme`}
            aria-label="Toggle Theme"
          >
            {isLight ? <Moon className="w-4 h-4 fill-amber-500/20" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>

          <Link
            to="/portal/services/v2/program-catalog"
            className={`px-5 py-2 rounded-full border text-sm font-bold transition-all ${
              isLight
                ? "border-slate-200 text-slate-700 hover:border-amber-500 hover:text-amber-600"
                : "border-amber-500/40 text-amber-200 hover:border-amber-400 hover:text-amber-400 hover:bg-amber-500/10"
            }`}
          >
            Explore Programs
          </Link>

          <Link
            to="/portal/auth/v1/account-access"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-extrabold text-sm shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-[1.02] transition-all flex items-center gap-1.5 group"
          >
            <Sparkles className="w-4 h-4 text-slate-950 animate-pulse" />
            <span>Start Building</span>
            <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </Link>

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
            <div className="pt-4 border-t border-slate-200/50 flex flex-col gap-3">
              <Link
                to="/portal/services/v2/program-catalog"
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full text-center py-2.5 rounded-full border font-bold ${
                  isLight ? "border-slate-200 text-slate-700" : "border-amber-500/40 text-amber-200"
                }`}
              >
                Explore Programs
              </Link>
              <Link
                to="/portal/auth/v1/account-access"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold shadow-md"
              >
                Start Building →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
