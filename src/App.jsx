import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MissionVisionSection from "./components/MissionVisionSection";
import ProgramsSection from "./components/ProgramsSection";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import WelcomeIntroScreen from "./components/WelcomeIntroScreen";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function HomePage({ scrollTo }) {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [showIntro, setShowIntro] = useState(() => {
    const hasSeenIntro = sessionStorage.getItem("turing_wings_intro");
    return !hasSeenIntro;
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem("turing_wings_intro", "true");
    setShowIntro(false);
  };

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
      isLight ? "bg-[#f8fffe] text-slate-800" : "bg-[#07090f] text-slate-100"
    }`}>
      {/* Welcome Logo Animation */}
      {showIntro && <WelcomeIntroScreen onComplete={handleIntroComplete} />}

      <Navbar />
      <main>
        <HeroSection />
        <MissionVisionSection />
        <ProgramsSection />
        <ReviewsSection />
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
          <Route path="/" element={<HomePage scrollTo="hero" />} />
          
          {/* Enterprise Route Mappings */}
          <Route path="/portal/core/v1/dashboard-overview" element={<HomePage scrollTo="hero" />} />
          <Route path="/portal/services/v2/program-catalog" element={<HomePage scrollTo="programs" />} />
          <Route path="/portal/analytics/v1/feedback-center" element={<HomePage scrollTo="reviews" />} />
          <Route path="/portal/system/v1/organization-profile" element={<HomePage scrollTo="mission-vision" />} />
          <Route path="/portal/auth/v1/account-access" element={<LoginPage />} />
          
          {/* Wildcard 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}