import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Sparkles, Calendar, Trophy, Globe, ShieldCheck, Users, ArrowRight, CheckCircle2,
  Clock, MapPin, Code, Cpu, ChevronDown, Check, Send, AlertCircle, RefreshCw, FileText
} from "lucide-react";
import renderTemplateEngine from "../templates/index.jsx";

export default function PublicEventPortal() {
  const { slug } = useParams();

  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSubpage, setActiveSubpage] = useState("home");
  const [registering, setRegistering] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);
  const [error, setError] = useState("");

  const [regForm, setRegForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    year: "3rd Year",
    github: "",
    linkedin: "",
    portfolio: "",
    teamName: "",
    role: "Developer",
  });

  const fetchEventDetails = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://turingwings-backend.onrender.com/api/events/${slug}`);
      if (res.ok) {
        const data = await res.json();
        setEventData(data);
      } else {
        throw new Error("Event not found");
      }
    } catch {
      setEventData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventDetails();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    setRegistering(true);
    setError("");

    try {
      const res = await fetch(`https://turingwings-backend.onrender.com/api/events/${slug}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regForm),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      setRegSuccess(true);
      setEventData(data.event);
    } catch (err) {
      setError(err.message || "Registration error");
    } finally {
      setRegistering(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center font-sans">
        <div className="flex items-center gap-3 text-xs font-bold text-slate-800">
          <RefreshCw className="w-5 h-5 animate-spin text-amber-600" />
          <span>Loading Standalone Event Portal & Presentation Engine...</span>
        </div>
      </div>
    );
  }

  if (!eventData) {
    return (
      <div className="min-h-screen bg-white p-8 text-center flex flex-col items-center justify-center font-sans space-y-4">
        <h2 className="text-2xl font-extrabold text-slate-900">Event Not Found</h2>
        <p className="text-xs text-slate-500 max-w-sm">
          The requested Buildathon event URL is invalid or has expired.
        </p>
        <Link to="/buildathons" className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs">
          Return to Buildathons Directory
        </Link>
      </div>
    );
  }

  const SUBPAGES = [
    { id: "home", label: "Event Home" },
    { id: "tracks", label: "Tracks & Domain" },
    { id: "timeline", label: "Schedule Timeline" },
    { id: "judges", label: "Judges & Mentors" },
    { id: "rules", label: "Rules & Conduct" },
    { id: "faqs", label: "FAQs & Contact" },
    { id: "register", label: "Apply / Register" },
  ];

  return (
    <div className="w-full min-h-screen relative font-sans text-left bg-slate-950 text-white">
      
      {/* STANDALONE TEMPLATE HEADER NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-extrabold text-sm tracking-tight text-white font-poppins">
              {eventData.title}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-4">
            {SUBPAGES.map((sp) => (
              <button
                key={sp.id}
                onClick={() => setActiveSubpage(sp.id)}
                className={`text-xs font-bold transition-colors py-1 ${
                  activeSubpage === sp.id ? "text-amber-400 border-b-2 border-amber-400" : "text-slate-400 hover:text-white"
                }`}
              >
                {sp.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setActiveSubpage("register")}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black text-xs shadow-md hover:scale-105 transition-transform"
          >
            Apply Now
          </button>
        </div>
      </header>

      {/* MAIN DYNAMIC CONTENT PORTAL */}
      <main className="pt-28 sm:pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* RENDER HOME VIEW USING SELECTED DESIGN TEMPLATE THEME */}
        {activeSubpage === "home" && (
          renderTemplateEngine(eventData.templateId || "ai-future", {
            eventData,
            activeSubpage,
            setActiveSubpage,
            onRegisterClick: () => setActiveSubpage("register"),
          })
        )}

        {/* REGISTRATION SUBPAGE VIEW */}
        {activeSubpage === "register" && (
          <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-amber-500/20 text-amber-400 border border-amber-500/30">
                REGISTRATION PORTAL
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white">
                Application Form — {eventData.title}
              </h2>
            </div>

            {regSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-emerald-400">Application Confirmed!</h3>
                <p className="text-xs text-slate-300">
                  Your registration details have been received and recorded.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegistrationSubmit} className="space-y-4 text-xs">
                {error && (
                  <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-400 flex items-center gap-2 font-bold">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-400 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={regForm.name}
                      onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-bold"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-400 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={regForm.email}
                      onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-bold"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-400 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={regForm.phone}
                      onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-400 mb-1">College / Organization</label>
                    <input
                      type="text"
                      value={regForm.college}
                      onChange={(e) => setRegForm({ ...regForm, college: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-400 mb-1">GitHub Profile Link</label>
                    <input
                      type="url"
                      placeholder="https://github.com/handle"
                      value={regForm.github}
                      onChange={(e) => setRegForm({ ...regForm, github: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-400 mb-1">Team Name (If Team)</label>
                    <input
                      type="text"
                      placeholder="Solo Builder / Team Alpha"
                      value={regForm.teamName}
                      onChange={(e) => setRegForm({ ...regForm, teamName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={registering}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black text-xs shadow-lg hover:scale-105 transition-transform"
                >
                  {registering ? "Submitting Application..." : "Submit Registration Application"}
                </button>
              </form>
            )}
          </div>
        )}

      </main>

      {/* STANDALONE EVENT FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-900 py-8 px-4 text-center text-xs text-slate-400">
        <p>© {new Date().getFullYear()} {eventData.title}. Powered by Turing Wings Event Architecture Engine.</p>
      </footer>
    </div>
  );
}
