import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import TuringWingsLogo from "./TuringWingsLogo";
import LayeredMetallicGoldButton from "./LayeredMetallicGoldButton";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  const isLight = theme === "light";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Manifesto", href: "#manifesto" },
    { name: "Journey", href: "#journey" },
    { name: "Programs", href: "#programs" },
    { name: "Buildathons", href: "/buildathons" },
    { name: "Community", href: "#community" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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
        
        {/* Brand Logo Link */}
        <Link to="/" className="group flex items-center gap-2">
          <TuringWingsLogo size="md" />
        </Link>

        {/* Desktop Navigation Links: Manifesto, Journey, Programs, Buildathons, Community, Contact */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isRouterLink = link.href.startsWith("/");
            return isRouterLink ? (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-semibold transition-colors ${
                  location.pathname === link.href
                    ? "text-amber-500 font-extrabold"
                    : isLight
                    ? "text-slate-700 hover:text-amber-600"
                    : "text-slate-300 hover:text-amber-400"
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-semibold transition-colors ${
                  isLight
                    ? "text-slate-700 hover:text-amber-600"
                    : "text-slate-300 hover:text-amber-400"
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Right Action: Classic 3D Metallic Gold Button */}
        <div className="hidden md:flex items-center">
          <LayeredMetallicGoldButton
            text="Join Cohort"
            href="#programs"
            size="sm"
          />
        </div>

        {/* Mobile Right Controls: Hamburger Menu */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl transition-all ${
              isLight
                ? "text-slate-800 hover:bg-slate-100"
                : "text-slate-200 hover:bg-slate-900"
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Dropdown Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-4 pt-3 pb-6 border-b shadow-xl space-y-3 text-left ${
            isLight ? "bg-white border-slate-200" : "bg-slate-950 border-amber-500/20"
          }`}
        >
          {navLinks.map((link) => {
            const isRouterLink = link.href.startsWith("/");
            return isRouterLink ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm font-bold py-2 border-b border-slate-800/10 ${
                  isLight ? "text-slate-800" : "text-slate-200"
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`block w-full text-left text-sm font-bold py-2 border-b border-slate-800/10 ${
                  isLight ? "text-slate-800" : "text-slate-200"
                }`}
              >
                {link.name}
              </button>
            );
          })}
          <div className="pt-2">
            <LayeredMetallicGoldButton
              text="Join Cohort"
              href="#programs"
              size="sm"
              className="w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
}
