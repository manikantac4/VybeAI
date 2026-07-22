import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Programs", href: "#programs" },
    { name: "Reviews", href: "#reviews" },
    { name: "About", href: "#mission-vision" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Clean Text Brand Logo */}
        <Link to="/" className="flex flex-col text-left group select-none">
          <div className="font-extrabold tracking-wide text-xl sm:text-2xl leading-none text-slate-900">
            <span>TURING </span>
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              WINGS
            </span>
          </div>
          <span className="font-semibold uppercase tracking-widest text-[9px] sm:text-[10px] text-slate-500 mt-1">
            Learn. Build. Innovate.
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-cyan-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#programs"
            className="px-5 py-2 rounded-full border border-slate-200 text-slate-700 font-bold text-sm hover:border-cyan-500 hover:text-cyan-600 transition-all"
          >
            Explore Programs
          </a>

          <Link
            to="/portal/auth/v1/account-access"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold text-sm shadow-md shadow-cyan-500/20 hover:shadow-lg hover:scale-[1.02] transition-all flex items-center gap-1.5 group"
          >
            <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
            <span>Start Building</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-700 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-cyan-600 py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="#programs"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full border border-slate-200 text-slate-700 font-bold"
              >
                Explore Programs
              </a>
              <Link
                to="/portal/auth/v1/account-access"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold shadow-md"
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
