import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Global3DBackground from "../components/Global3DBackground";
import { Trophy, Calendar, Users, ArrowRight, Sparkles, ExternalLink, RefreshCw } from "lucide-react";

export default function BuildathonsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

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
      }
    } catch (err) {
      console.error("Error fetching published events:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen relative selection:bg-amber-500 selection:text-slate-950 bg-white text-slate-800 font-sans">
      <Global3DBackground />
      <Navbar />

      <main className="pt-24 sm:pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        {/* Page Hero Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-4 h-4 text-amber-600" /> Turing Wings Event Engine
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Buildathons & Hackathons Directory
          </h1>

          <p className="text-base text-slate-600 leading-relaxed">
            Explore live hackathons and buildathons created on Turing Wings. Click any event card to open its dedicated standalone event portal.
          </p>
        </div>

        {/* Events Cards Grid */}
        {loading ? (
          <div className="py-20 text-center text-slate-500 text-sm">
            <RefreshCw className="w-8 h-8 animate-spin text-amber-500 mx-auto mb-2" />
            Fetching live hackathons & buildathons...
          </div>
        ) : events.length === 0 ? (
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-12 text-center space-y-4">
            <Sparkles className="w-12 h-12 text-amber-500 mx-auto" />
            <h3 className="text-xl font-bold text-slate-900">No Live Events Available</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Check back soon! New AI Buildathons and Hackathons are launched regularly by Turing Wings leads.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((evt) => (
              <div
                key={evt._id}
                className="bg-white border border-slate-200 hover:border-amber-500/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Event Card Header / Image */}
                <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={
                      evt.thumbnail ||
                      evt.heroBanner ||
                      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
                    }
                    alt={evt.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-500 text-slate-950 shadow-md">
                      {evt.type || "Hackathon"}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                      {evt.status || "Published"}
                    </span>
                  </div>
                </div>

                {/* Event Body Details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1">
                      {evt.name}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {evt.tagline || evt.shortDescription || "Build next-generation applications in this innovation sprint."}
                    </p>
                  </div>

                  {/* Tracks Badges */}
                  {evt.tracks && evt.tracks.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {evt.tracks.slice(0, 3).map((trk, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[10px] font-bold">
                          {trk.name}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Card Meta Stats */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-1.5 font-bold text-slate-800">
                      <Users className="w-4 h-4 text-amber-500" />
                      <span>{evt.registrations?.length || 0} Registered</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span>{evt.schedule?.eventStart ? new Date(evt.schedule.eventStart).toLocaleDateString() : "TBD"}</span>
                    </div>
                  </div>

                  {/* Open Separate Event Portal Button */}
                  <Link
                    to={`/events/${evt.slug}`}
                    className="w-full py-3 px-4 rounded-2xl bg-slate-900 hover:bg-amber-600 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all group-hover:scale-[1.02]"
                  >
                    <span>Open Standalone Event Page</span>
                    <ExternalLink className="w-4 h-4 text-amber-400" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
