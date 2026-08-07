import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Evolution from "./components/Evolution";
import Stack from "./components/Stack";
import BuildWithAI from "./components/BuildWithAI";
import Cohorts from "./components/Cohorts";
import WhyTuringWings from "./components/WhyTuringWings";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import BuildathonsPage from "./pages/BuildathonsPage";
import EventPortalPage from "./pages/EventPortalPage";
import NotFoundPage from "./pages/NotFoundPage";

function HomePage() {
  return (
    <main className="bg-[#050505] text-white overflow-x-hidden selection:bg-[#22C55E] selection:text-black">
      <Navbar />
      <Hero />
      <Evolution />
      <Stack />
      <BuildWithAI />
      <Cohorts />
      <WhyTuringWings />
      <Footer />
    </main>
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
    <BrowserRouter>
      <Routes>
        {/* Main Website Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/programs" element={<HomePage />} />
        <Route path="/community" element={<HomePage />} />
        <Route path="/buildathons" element={<BuildathonsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Standalone Event Template Route */}
        <Route path="/events/:slug" element={<EventPortalPage />} />

        {/* Wildcard 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}