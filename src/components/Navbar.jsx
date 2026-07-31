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

  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("turing_wings_user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Manifesto", href: "/about" },
    { name: "Journey", href: "/#journey" },
    { name: "Symbiosis", href: "/#symbiosis" },
    { name: "Guilds", href: "/programs" },
    { name: "Buildathons", href: "/#events" },
    { name: "Contact", href: "/contact" },
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
        <nav className="hidden lg:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isAnchor = link.href.includes("#");
            return isAnchor ? (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs sm:text-sm font-semibold py-1 transition-colors ${
                  isLight
                    ? "text-slate-700 hover:text-amber-600"
                    : "text-slate-300 hover:text-amber-400"
                }`}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={`text-xs sm:text-sm font-semibold py-1 transition-colors ${
                  location.pathname === link.href
                    ? "text-amber-500 font-extrabold"
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

        {/* Right Theme Toggle Button */}
        <div className="hidden lg:flex items-center">

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`p-2.5 rounded-full border transition-all shadow-md ${
              isLight
                ? "bg-slate-100 border-slate-300 text-amber-600 hover:bg-slate-200"
                : "bg-slate-900 border-amber-500/30 text-amber-300 hover:bg-slate-800"
            }`}
          >
            {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </motion.button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className={`p-2 rounded-full border ${
              isLight ? "bg-slate-100 text-amber-600 border-slate-300" : "bg-slate-900 text-amber-300 border-amber-500/30"
            }`}
          >
            {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl border ${
              isLight ? "bg-slate-100 text-slate-800 border-slate-200" : "bg-slate-900 text-white border-amber-500/20"
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden px-4 pt-3 pb-6 border-b shadow-xl space-y-3 text-left ${
            isLight ? "bg-white border-slate-200" : "bg-slate-950 border-amber-500/20"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm font-bold py-2 border-b border-slate-800/10 ${
                isLight ? "text-slate-800" : "text-slate-200"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
