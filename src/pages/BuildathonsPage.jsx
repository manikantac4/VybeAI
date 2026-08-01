import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Global3DBackground from "../components/Global3DBackground";
import TemplateRenderer from "../modules/hackathon/renderer/TemplateRenderer";
import { Sparkles, Trophy, Calendar, Users, ArrowRight, CheckCircle2, X } from "lucide-react";

export default function BuildathonsPage() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showRegModal, setShowRegModal] = useState(false);

  // Form Registration State
  const [regForm, setRegForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    year: "2026",
    teamName: "",
  });
  const [regStatus, setRegStatus] = useState("");

  const API_URL = "https://turingwings-backend.onrender.com/api/events";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchPublishedEvents();
  }, []);

  const fetchPublishedEvents = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      if (res.ok) {
        const data = await res.json();
        setEvents(data);
        if (data.length > 0) {
          setSelectedEvent(data[0]);
        }
      }
    } catch (err) {
      console.error("Error fetching published events:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!selectedEvent) return;

    try {
      setRegStatus("Submitting registration...");
      const res = await fetch(`${API_URL}/${selectedEvent._id}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regForm),
      });

      if (res.ok) {
        setRegStatus("✅ Registration Successful! Check your email for confirmation.");
        setTimeout(() => {
          setShowRegModal(false);
          setRegStatus("");
          setRegForm({ fullName: "", email: "", phone: "", college: "", department: "", year: "2026", teamName: "" });
        }, 2000);
      } else {
        const err = await res.json();
        setRegStatus(`❌ ${err.message || "Registration failed."}`);
      }
    } catch (err) {
      console.error("Register submit error:", err);
      setRegStatus("❌ Connection error. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen relative selection:bg-amber-500 selection:text-slate-950 bg-white text-slate-800 font-sans">
      <Global3DBackground />
      <Navbar />

      <main className="pt-24 sm:pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Header & Event Picker */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-4 h-4 text-amber-600" /> Turing Wings Event Engine
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Buildathons & Hackathons
          </h1>

          <p className="text-base text-slate-600 leading-relaxed">
            Join premier innovation challenges, AI buildathons, and coding sprints. Compete for cash prizes, global recognition, and direct mentorship.
          </p>

          {/* Event Selector Tabs */}
          {events.length > 1 && (
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {events.map((evt) => (
                <button
                  key={evt._id}
                  onClick={() => setSelectedEvent(evt)}
                  className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                    selectedEvent?._id === evt._id
                      ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {evt.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dynamic Hackathon Template Container */}
        {loading ? (
          <div className="py-20 text-center text-slate-500 text-sm">
            Loading live hackathon event details...
          </div>
        ) : selectedEvent ? (
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800 space-y-10">
            {/* Render Selected Hackathon Template */}
            <TemplateRenderer
              event={selectedEvent}
              onRegister={() => setShowRegModal(true)}
            />
          </div>
        ) : (
          <div className="py-16 text-center text-slate-500">
            No live events published at the moment.
          </div>
        )}
      </main>

      {/* Registration Form Modal */}
      {showRegModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 text-left space-y-5 relative animate-in fade-in zoom-in">
            <button
              onClick={() => setShowRegModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Register for {selectedEvent?.name}
              </h3>
              <p className="text-xs text-slate-500">
                Fill in your registration details below to lock your spot.
              </p>
            </div>

            {regStatus && (
              <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800">
                {regStatus}
              </div>
            )}

            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={regForm.fullName}
                  onChange={(e) => setRegForm({ ...regForm, fullName: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:border-amber-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={regForm.email}
                  onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:border-amber-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={regForm.phone}
                    onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                    placeholder="+91 9876543210"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:border-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">College / Univ</label>
                  <input
                    type="text"
                    value={regForm.college}
                    onChange={(e) => setRegForm({ ...regForm, college: e.target.value })}
                    placeholder="IIT / NIT / Tech Inst"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:border-amber-500 outline-none"
                  />
                </div>
              </div>

              {selectedEvent?.registrationConfig?.registrationType === "Team" && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Team Name (Optional)</label>
                  <input
                    type="text"
                    value={regForm.teamName}
                    onChange={(e) => setRegForm({ ...regForm, teamName: e.target.value })}
                    placeholder="e.g. Cyber Innovators Squad"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:border-amber-500 outline-none"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-slate-900 text-white hover:bg-amber-600 font-extrabold text-xs transition-all shadow-md mt-2"
              >
                Confirm Registration
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
