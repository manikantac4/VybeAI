import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Sparkles, Calendar, Trophy, Globe, ShieldCheck, Users, ArrowRight,
  CheckCircle2, Clock, MapPin, Code, Cpu, ChevronDown, Check, Send, AlertCircle, RefreshCw
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Global3DBackground from "../components/Global3DBackground";

export default function PublicEventPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [registering, setRegistering] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);
  const [error, setError] = useState("");

  const [regForm, setRegForm] = useState({
    name: "",
    email: "",
    teamName: "",
    github: "",
    role: "Developer",
  });

  const fetchEvent = async () => {
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
    fetchEvent();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const handleRegisterSubmit = async (e) => {
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

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

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
          <span>Retrieving Buildathon Event Portal...</span>
        </div>
      </div>
    );
  }

  if (!eventData) {
    return (
      <div className="min-h-screen bg-white p-8 text-center flex flex-col items-center justify-center font-sans space-y-4">
        <h2 className="text-2xl font-extrabold text-slate-900">Event Not Found</h2>
        <p className="text-xs text-slate-500 max-w-sm">
          The requested Buildathon or Hackathon event link does not exist or may have been updated.
        </p>
        <Link to="/buildathons" className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs">
          Explore Active Buildathons
        </Link>
      </div>
    );
  }

  // Template Styles Mapping (Controls Presentation without altering business logic)
  const isDarkTemplate = ["ai-future", "cyberpunk-neon", "space-galaxy", "gaming-rgb"].includes(eventData.templateId);

  const templateThemeClasses = isDarkTemplate
    ? "bg-slate-950 text-white selection:bg-amber-500 selection:text-slate-950"
    : "bg-white text-slate-900 selection:bg-amber-500 selection:text-slate-950";

  const cardClasses = isDarkTemplate
    ? "bg-slate-900/90 border border-slate-800 shadow-2xl text-white"
    : "bg-white border border-slate-200 shadow-lg text-slate-900";

  return (
    <div className={`w-full min-h-screen relative font-sans text-left transition-colors duration-500 ${templateThemeClasses}`}>
      <Global3DBackground />
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-24">
        {/* DYNAMIC HERO SECTION ACCORDING TO SELECTED TEMPLATE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className={`p-8 sm:p-12 rounded-3xl relative overflow-hidden ${cardClasses}`}>
            {/* Background Glow Overlay */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-500 text-slate-950 shadow-sm">
                  {eventData.eventType}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase border ${
                  eventData.status === "Registration Open"
                    ? "bg-emerald-500/20 text-emerald-600 border-emerald-500/40"
                    : "bg-amber-500/20 text-amber-600 border-amber-500/40"
                }`}>
                  {eventData.status}
                </span>
                <span className="text-xs font-mono font-bold text-amber-500">
                  {eventData.mode} Mode
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-poppins tracking-tight leading-tight">
                {eventData.title}
              </h1>

              <p className={`text-base sm:text-xl font-medium leading-relaxed ${isDarkTemplate ? "text-slate-300" : "text-slate-600"}`}>
                {eventData.tagline}
              </p>

              {/* Event Stats Bar */}
              <div className="pt-4 border-t border-slate-200/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
                <div className="p-3 rounded-2xl bg-slate-500/10 border border-slate-500/20">
                  <span className="text-[10px] text-slate-400 block uppercase">PRIZE POOL</span>
                  <span className="text-lg font-black text-amber-500">{eventData.prizePool}</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-500/10 border border-slate-500/20">
                  <span className="text-[10px] text-slate-400 block uppercase">START DATE</span>
                  <span className="text-sm font-bold">{eventData.startDate}</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-500/10 border border-slate-500/20">
                  <span className="text-[10px] text-slate-400 block uppercase">END DATE</span>
                  <span className="text-sm font-bold">{eventData.endDate}</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-500/10 border border-slate-500/20">
                  <span className="text-[10px] text-slate-400 block uppercase">APPLICANTS</span>
                  <span className="text-sm font-bold text-emerald-500">{eventData.analytics?.registrationsCount || eventData.participants?.length || 0}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#register-section"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black text-xs shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Register for Buildathon</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TRACKS & CHALLENGES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200/20 pb-4">
            <h2 className="text-2xl font-bold font-poppins">Event Innovation Tracks</h2>
            <span className="text-xs font-mono text-amber-500 font-bold">Select your track</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(eventData.tracks || []).map((t, idx) => (
              <div key={idx} className={`p-6 rounded-3xl space-y-3 ${cardClasses}`}>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-amber-500/20 text-amber-600 border border-amber-500/30">
                  Track {idx + 1}
                </span>
                <h3 className="text-lg font-bold font-poppins">{t.title}</h3>
                <p className={`text-xs leading-relaxed ${isDarkTemplate ? "text-slate-300" : "text-slate-600"}`}>
                  {t.description}
                </p>
                <div className="pt-3 border-t border-slate-200/20 flex items-center justify-between text-xs font-mono font-bold">
                  <span className="text-slate-400">Track Prize:</span>
                  <span className="text-amber-500">{t.prize}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DYNAMIC TIMELINE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
          <div className="border-b border-slate-200/20 pb-4">
            <h2 className="text-2xl font-bold font-poppins">Event Schedule & Timeline</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {(eventData.timeline || []).map((stg, idx) => (
              <div key={idx} className={`p-5 rounded-2xl space-y-2 ${cardClasses}`}>
                <span className="text-[10px] font-mono font-bold text-amber-500 block">
                  STAGE 0{idx + 1}
                </span>
                <h4 className="font-bold text-sm">{stg.stage}</h4>
                <span className="text-xs text-emerald-500 font-mono block font-bold">{stg.date}</span>
                <p className={`text-[11px] leading-relaxed ${isDarkTemplate ? "text-slate-400" : "text-slate-600"}`}>
                  {stg.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* JUDGES & MENTORS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
          <div className="border-b border-slate-200/20 pb-4">
            <h2 className="text-2xl font-bold font-poppins">Judges & Lead Mentors</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {(eventData.judges || []).map((j, idx) => (
              <div key={idx} className={`p-5 rounded-2xl text-center space-y-2 ${cardClasses}`}>
                <div className="w-14 h-14 rounded-full bg-amber-500 text-slate-950 font-black text-xl flex items-center justify-center mx-auto shadow-md">
                  {j.name ? j.name.charAt(0) : "M"}
                </div>
                <h4 className="font-bold text-sm">{j.name}</h4>
                <p className="text-[11px] text-amber-500 font-bold">{j.role}</p>
                <p className="text-[10px] text-slate-400">{j.company}</p>
              </div>
            ))}
          </div>
        </section>

        {/* REGISTRATION PORTAL */}
        <section id="register-section" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className={`p-8 sm:p-10 rounded-3xl space-y-6 ${cardClasses}`}>
            <div className="text-center space-y-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-amber-500/20 text-amber-600 border border-amber-500/40">
                APPLICATION PORTAL
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins">
                Register for {eventData.title}
              </h2>
              <p className={`text-xs ${isDarkTemplate ? "text-slate-300" : "text-slate-600"}`}>
                Submit your details below to secure your spot. Individual & team registrations accepted.
              </p>
            </div>

            {regSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h3 className="text-lg font-bold text-emerald-600">Application Submitted Successfully!</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  You are registered for <strong>{eventData.title}</strong>. Check your email for orientation links.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-4 text-xs">
                {error && (
                  <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-400 flex items-center gap-2 font-bold">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div>
                  <label className="block font-bold uppercase text-slate-400 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Rivera"
                    value={regForm.name}
                    onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:border-amber-500 ${
                      isDarkTemplate ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-900"
                    }`}
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase text-slate-400 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="creator@turingwings.org"
                    value={regForm.email}
                    onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:border-amber-500 ${
                      isDarkTemplate ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-900"
                    }`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold uppercase text-slate-400 mb-1">
                      Team Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. CyberSwarms HQ"
                      value={regForm.teamName}
                      onChange={(e) => setRegForm({ ...regForm, teamName: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:border-amber-500 ${
                        isDarkTemplate ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-900"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block font-bold uppercase text-slate-400 mb-1">
                      Primary Role
                    </label>
                    <select
                      value={regForm.role}
                      onChange={(e) => setRegForm({ ...regForm, role: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:border-amber-500 ${
                        isDarkTemplate ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-900"
                      }`}
                    >
                      <option value="Developer">Full-Stack Developer</option>
                      <option value="AI Researcher">AI / LLM Engineer</option>
                      <option value="UI/UX Designer">Spatial UI/UX Designer</option>
                      <option value="Cybersecurity">Cybersecurity Specialist</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold uppercase text-slate-400 mb-1">
                    GitHub / Portfolio Link
                  </label>
                  <input
                    type="url"
                    placeholder="https://github.com/yourhandle"
                    value={regForm.github}
                    onChange={(e) => setRegForm({ ...regForm, github: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:border-amber-500 ${
                      isDarkTemplate ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-900"
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={registering}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black text-xs shadow-lg hover:scale-[1.02] transition-transform"
                >
                  {registering ? "Submitting Application..." : "Confirm & Submit Registration"}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
