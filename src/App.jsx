import React, { useState } from "react";
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

function HomePage() {
  const [showIntro, setShowIntro] = useState(() => {
    const hasSeenIntro = sessionStorage.getItem("turing_wings_intro");
    return !hasSeenIntro;
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem("turing_wings_intro", "true");
    setShowIntro(false);
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fffe] text-slate-800 relative selection:bg-[#0d9488] selection:text-white">
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Professional Secure Enterprise Auth Route */}
        <Route path="/portal/auth/v1/account-access" element={<LoginPage />} />
        {/* Wildcard 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}