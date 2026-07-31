import React from "react";
import AIFutureHero from "./components/Hero.jsx";

export default function Template1_AIFuture({ eventData, onRegisterClick }) {
  return (
    <div className="space-y-12 text-left text-white bg-slate-950 font-sans">
      <AIFutureHero eventData={eventData} onRegisterClick={onRegisterClick} />

      {/* TRACKS & TIMELINE SUMMARY */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold font-poppins text-white border-b border-slate-800 pb-3">
          AI Future Innovation Tracks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(eventData.tracks || []).map((t, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3 shadow-xl">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-amber-500/20 text-amber-400 border border-amber-500/30">
                Track {idx + 1}
              </span>
              <h3 className="text-lg font-bold font-poppins">{t.name || t.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{t.description}</p>
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-slate-500">Prize:</span>
                <span className="text-amber-400">{t.prize}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
