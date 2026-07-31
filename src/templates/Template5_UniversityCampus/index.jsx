import React from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Template5_UniversityCampus({ eventData, onRegisterClick }) {
  const p = eventData.prizes || {};

  return (
    <div className="space-y-12 text-left text-slate-900 bg-amber-50/40 font-sans">
      <section className="p-8 sm:p-14 rounded-3xl bg-white border border-amber-200 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-600 text-white">
              TEMPLATE 5 — UNIVERSITY CAMPUS
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-100 text-amber-900 border border-amber-300">
              {eventData.eventType}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-poppins">
            {eventData.title}
          </h1>

          <p className="text-base sm:text-xl font-medium text-amber-900">
            {eventData.tagline}
          </p>

          <div className="pt-4 border-t border-amber-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
            <div className="p-3.5 rounded-2xl bg-amber-100/50 border border-amber-200">
              <span className="text-[10px] text-amber-800 block uppercase font-bold">SCHOLARSHIP / PRIZE</span>
              <span className="text-lg font-black text-amber-700">{p.prizePool || eventData.prizePool}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-amber-100/50 border border-amber-200">
              <span className="text-[10px] text-amber-800 block uppercase font-bold">START DATE</span>
              <span className="text-xs font-bold text-slate-800">{eventData.schedule?.eventStartDate || "August 2026"}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-amber-100/50 border border-amber-200">
              <span className="text-[10px] text-amber-800 block uppercase font-bold">MODE</span>
              <span className="text-xs font-bold text-slate-800">{eventData.mode}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-amber-100/50 border border-amber-200">
              <span className="text-[10px] text-amber-800 block uppercase font-bold">STUDENTS</span>
              <span className="text-sm font-bold text-emerald-600">{eventData.analytics?.registrationsCount || 0}</span>
            </div>
          </div>

          <button
            onClick={onRegisterClick}
            className="px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-lg transition-all"
          >
            Register Student Application
          </button>
        </div>
      </section>
    </div>
  );
}
