import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ManifestoSection from "./components/ManifestoSection";
import CreatorJourneySection from "./components/CreatorJourneySection";
import NeuralSymbiosisSection from "./components/NeuralSymbiosisSection";
import ProgramsSection from "./components/ProgramsSection";
import CommunitySection from "./components/CommunitySection";
import FutureVisionSection from "./components/FutureVisionSection";
import MovementCTASection from "./components/MovementCTASection";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import BuildathonsPage from "./pages/BuildathonsPage";
import EventPortalPage from "./pages/EventPortalPage";
import NotFoundPage from "./pages/NotFoundPage";
import Global3DBackground from "./components/Global3DBackground";
import { ThemeProvider } from "./context/ThemeContext";

function HomePage({ scrollTo }) {
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
    <div className="w-full min-h-screen relative selection:bg-amber-500 selection:text-white bg-slate-50 text-slate-900 font-sans">
      <Global3DBackground />
      <Navbar />
      <main>
        <HeroSection />
        <ManifestoSection />
        <CreatorJourneySection />
        <NeuralSymbiosisSection />
        <ProgramsSection />
        <CommunitySection />
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
          {/* Main Website Routes */}
          <Route path="/" element={<HomePage scrollTo="hero" />} />
          <Route path="/about" element={<HomePage scrollTo="experience" />} />
          <Route path="/programs" element={<HomePage scrollTo="cohorts" />} />
          <Route path="/community" element={<HomePage scrollTo="cohorts" />} />
          <Route path="/buildathons" element={<BuildathonsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Standalone Event Template Route */}
          <Route path="/events/:slug" element={<EventPortalPage />} />

          {/* Legacy Aliases */}
          <Route path="/portal/core/v1/dashboard-overview" element={<HomePage scrollTo="hero" />} />
          <Route path="/portal/services/v2/program-catalog" element={<HomePage scrollTo="cohorts" />} />
          <Route path="/portal/analytics/v1/feedback-center" element={<HomePage scrollTo="cohorts" />} />
          <Route path="/portal/system/v1/organization-profile" element={<HomePage scrollTo="experience" />} />
          <Route path="/portal/support/v1/contact-team" element={<ContactPage />} />

          {/* Wildcard 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}