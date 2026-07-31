import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ManifestoSection from "./components/ManifestoSection";
import CreatorJourneySection from "./components/CreatorJourneySection";
import NeuralSymbiosisSection from "./components/NeuralSymbiosisSection";
import ProgramsSection from "./components/ProgramsSection";
import CommunitySection from "./components/CommunitySection";
import BuildathonsSection from "./components/BuildathonsSection";
import FutureVisionSection from "./components/FutureVisionSection";
import MovementCTASection from "./components/MovementCTASection";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import WelcomeIntroScreen from "./components/WelcomeIntroScreen";
import Global3DBackground from "./components/Global3DBackground";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function HomePage({ scrollTo }) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [scrollTo]);

  return (
    <div className={`w-full min-h-screen relative selection:bg-amber-500 selection:text-slate-950 transition-colors duration-500 ${
      isLight ? "bg-transparent text-slate-800" : "bg-transparent text-slate-100"
    }`}>
      {/* Global 3D Animated Particle & Wave Canvas Background */}
      <Global3DBackground />

      <Navbar />
      <main>
        <HeroSection />
        <ManifestoSection />
        <CreatorJourneySection />
        <NeuralSymbiosisSection />
        <ProgramsSection />
        <BuildathonsSection />
        <FutureVisionSection />
        <MovementCTASection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  // Global Image Protection: Disable right-click & drag on images
  useEffect(() => {
    const handleContextMenu = (e) => {
      if (e.target.tagName === "IMG") {
        e.preventDefault();
      }
    };
    const handleDragStart = (e) => {
      if (e.target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Clean Startup Routes */}
          <Route path="/" element={<HomePage scrollTo="hero" />} />
          <Route path="/programs" element={<HomePage scrollTo="programs" />} />
          <Route path="/community" element={<HomePage scrollTo="community" />} />
          <Route path="/about" element={<HomePage scrollTo="manifesto" />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Legacy Aliases for seamless navigation */}
          <Route path="/portal/core/v1/dashboard-overview" element={<HomePage scrollTo="hero" />} />
          <Route path="/portal/services/v2/program-catalog" element={<HomePage scrollTo="programs" />} />
          <Route path="/portal/analytics/v1/feedback-center" element={<HomePage scrollTo="community" />} />
          <Route path="/portal/system/v1/organization-profile" element={<HomePage scrollTo="manifesto" />} />
          <Route path="/portal/support/v1/contact-team" element={<ContactPage />} />
          <Route path="/portal/auth/v1/account-access" element={<LoginPage />} />
          
          {/* Wildcard 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}