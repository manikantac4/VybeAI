import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { EventProvider, useEventContext } from "../core/context/EventContext";
import TemplateRenderer from "../renderer/TemplateRenderer";
import { RefreshCw, CheckCircle2, AlertCircle } from "lucide-react";

function HackathonModuleContent() {
  const { eventData, loading, error, activeSubpage, setActiveSubpage } = useEventContext();
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
  const [registering, setRegistering] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);
  const [regError, setRegError] = useState("");

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center font-sans">
        <div className="flex items-center gap-3 text-xs font-bold">
          <RefreshCw className="w-5 h-5 animate-spin text-amber-400" />
          <span>Loading Hackathon Event Module...</span>
        </div>
      </div>
    );
  }

  if (error || !eventData) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-8 text-center flex flex-col items-center justify-center font-sans space-y-4">
        <h2 className="text-2xl font-extrabold text-white font-poppins">Event Module Error</h2>
        <p className="text-xs text-slate-400 max-w-sm">{error || "Event not found"}</p>
        <Link to="/buildathons" className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs">
          Return to Buildathons Directory
        </Link>
      </div>
    );
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    setRegistering(true);
    setRegError("");

    try {
      const res = await fetch(`https://turingwings-backend.onrender.com/api/events/${eventData.slug}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regForm),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      setRegSuccess(true);
    } catch (err) {
      setRegError(err.message || "Registration submission error");
    } finally {
      setRegistering(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 text-white font-sans text-left">
      <TemplateRenderer
        templateId={eventData.templateId || "ai-future"}
        eventData={eventData}
        activeSubpage={activeSubpage}
        setActiveSubpage={setActiveSubpage}
        onRegisterClick={() => setActiveSubpage("register")}
      />

      {/* REGISTRATION SUBPAGE VIEW */}
      {activeSubpage === "register" && (
        <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl my-12">
          <div className="text-center space-y-2">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-amber-500/20 text-amber-400 border border-amber-500/30">
              REGISTRATION MODULE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white">
              Application Portal — {eventData.title}
            </h2>
          </div>

          {regSuccess ? (
            <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h3 className="text-lg font-bold text-emerald-400">Application Confirmed!</h3>
              <p className="text-xs text-slate-300">
                Your registration application has been submitted to Turing Wings HQ.
              </p>
            </div>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4 text-xs">
              {regError && (
                <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-400 flex items-center gap-2 font-bold">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{regError}</span>
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-400 mb-1">GitHub Link</label>
                  <input
                    type="url"
                    value={regForm.github}
                    onChange={(e) => setRegForm({ ...regForm, github: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-400 mb-1">Team Name (If Team)</label>
                  <input
                    type="text"
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
    </div>
  );
}

export default function HackathonModuleRoutes() {
  const { slug } = useParams();

  return (
    <EventProvider slug={slug}>
      <HackathonModuleContent />
    </EventProvider>
  );
}
