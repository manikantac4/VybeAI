import React from "react";
import CyberpunkHero from "./components/Hero.jsx";

export default function Template2_Cyberpunk({ eventData, onRegisterClick }) {
  return (
    <div className="space-y-12 text-left text-pink-50 bg-black font-mono">
      <CyberpunkHero eventData={eventData} onRegisterClick={onRegisterClick} />

      <section className="space-y-6">
        <h2 className="text-xl font-bold uppercase text-cyan-400 border-b border-cyan-500/30 pb-2">
          :: CYBER MATRIX TRACKS ::
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(eventData.tracks || []).map((t, idx) => (
            <div key={idx} className="p-6 bg-zinc-950 border border-pink-500/40 space-y-3">
              <span className="px-2 py-0.5 text-[10px] bg-cyan-500 text-black font-bold">
                TRACK_0{idx + 1}
              </span>
              <h3 className="text-base font-bold text-pink-300">{t.name || t.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{t.description}</p>
              <div className="pt-2 border-t border-pink-500/20 text-xs text-cyan-300 font-bold flex justify-between">
                <span>BOUNTY:</span>
                <span>{t.prize}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
