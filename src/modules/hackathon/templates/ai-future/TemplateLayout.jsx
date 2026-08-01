import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeContext } from './hooks/useTheme';
import { EventDataContext } from './hooks/useEventData';
import { mergeTheme } from './config/theme';
import { defaultEventData } from './config/defaults';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

import Home from './pages/Home';
import About from './pages/About';
import Timeline from './pages/Timeline';
import Tracks from './pages/Tracks';
import Judges from './pages/Judges';
import Mentors from './pages/Mentors';
import Sponsors from './pages/Sponsors';
import FAQ from './pages/FAQ';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import LiveEvent from './pages/LiveEvent';
import Results from './pages/Results';
import Winners from './pages/Winners';
import Gallery from './pages/Gallery';
import Certificates from './pages/Certificates';

export default function TemplateLayout({ eventData = defaultEventData, themeOverrides = {}, onRegister }) {
  const theme = mergeTheme(themeOverrides);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    if (eventData?.meta?.name) {
      document.title = `${eventData.meta.name} — Powered by Turing Wings`;
    }
  }, [eventData]);

  const renderActiveSection = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "timeline":
        return <Timeline />;
      case "tracks":
        return <Tracks />;
      case "judges":
        return <Judges />;
      case "mentors":
        return <Mentors />;
      case "sponsors":
        return <Sponsors />;
      case "faq":
        return <FAQ />;
      case "register":
        return <Registration onSubmit={onRegister} />;
      case "contact":
        return <Contact />;
      case "live":
        return <LiveEvent />;
      case "results":
        return <Results />;
      case "winners":
        return <Winners />;
      case "gallery":
        return <Gallery />;
      case "certificates":
        return <Certificates />;
      case "home":
      default:
        return <Home />;
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <EventDataContext.Provider value={eventData}>
        <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans selection:bg-amber-500 selection:text-slate-950">
          
          {/* Custom Dedicated Sub-Header Navigation for Hackathon Portal */}
          <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/90 border-b border-slate-800/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
              <button
                onClick={() => setActiveTab("home")}
                className="font-bold text-base tracking-tight text-white hover:text-amber-400 transition-colors truncate"
              >
                {eventData?.meta?.name || "Hackathon Portal"}
              </button>

              <div className="hidden lg:flex items-center gap-5 overflow-x-auto scrollbar-none">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "timeline", label: "Timeline" },
                  { id: "tracks", label: "Tracks" },
                  { id: "judges", label: "Judges" },
                  { id: "mentors", label: "Mentors" },
                  { id: "sponsors", label: "Sponsors" },
                  { id: "faq", label: "FAQ" },
                  { id: "contact", label: "Contact" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-xs font-bold transition-all ${
                      activeTab === tab.id
                        ? "text-amber-400 border-b-2 border-amber-400 pb-1"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  if (onRegister) onRegister();
                  else setActiveTab("register");
                }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-xs shadow-md shadow-amber-500/20 hover:scale-105 transition-all"
              >
                Register Team
              </button>
            </div>
          </header>

          <main className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                {renderActiveSection()}
              </motion.div>
            </AnimatePresence>
          </main>

          <Footer />
        </div>
      </EventDataContext.Provider>
    </ThemeContext.Provider>
  );
}
