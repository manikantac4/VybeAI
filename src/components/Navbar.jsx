import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import TuringWingsLogo from "./TuringWingsLogo";
import LayeredMetallicGoldButton from "./LayeredMetallicGoldButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Cohorts", href: "/programs" },
    { name: "Buildathons", href: "/buildathons" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md py-3 border-b border-slate-200"
          : "bg-white/85 backdrop-blur-md py-4 border-b border-slate-200/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo Link */}
        <Link to="/" className="group flex items-center gap-2">
          <TuringWingsLogo size="md" />
        </Link>

        {/* Desktop Navigation Links: Home, About, Cohorts, Buildathons, Contact */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className="relative text-sm sm:text-base font-semibold py-1 transition-colors group"
              >
                <span
                  className={
                    isActive
                      ? "text-amber-600 font-extrabold"
                      : "text-slate-700 hover:text-amber-600"
                  }
                >
                  {link.name}
                </span>

                {/* Active Indicator Underline */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-amber-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Classic 3D Metallic Gold Button */}
        <div className="hidden md:flex items-center">
          <LayeredMetallicGoldButton
            text="Join Cohort"
            href="#cohorts"
            size="sm"
          />
        </div>

        {/* Mobile Right Controls: Hamburger Menu */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-800 hover:bg-slate-100 border border-slate-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 border-b border-slate-200 bg-white shadow-xl space-y-3 text-left">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold py-2 border-b border-slate-100 text-slate-800 hover:text-amber-600"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <LayeredMetallicGoldButton
              text="Join Cohort"
              href="#cohorts"
              size="sm"
              className="w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
}
