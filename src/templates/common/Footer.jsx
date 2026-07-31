import React from "react";

export default function CommonEventFooter({ title, contactInfo }) {
  const info = contactInfo || {};

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 px-4 text-slate-400 font-sans text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-900">
        <div>
          <h3 className="text-sm font-extrabold text-white uppercase font-poppins">{title}</h3>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            Official Standalone Event Website powered by Turing Wings Event Template Generation Engine.
          </p>
        </div>

        <div className="text-xs space-y-1.5">
          <h4 className="font-bold text-amber-400 uppercase font-mono mb-2">Event Support & Contact</h4>
          <p>Coordinator: <span className="text-slate-200">{info.coordinatorName || "Ratnakar Karasala"}</span></p>
          <p>Email: <span className="text-slate-200">{info.email || "support@turingwings.org"}</span></p>
          <p>Phone: <span className="text-slate-200">{info.phone || "+91 98765 43210"}</span></p>
        </div>

        <div className="text-xs space-y-2">
          <h4 className="font-bold text-amber-400 uppercase font-mono mb-2">Community Channels</h4>
          <p>Discord: <a href={info.discordUrl || "#"} target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">Official Server</a></p>
          <p>WhatsApp: <a href={info.whatsAppUrl || "#"} target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">Participant Group</a></p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 text-center text-[11px] text-slate-500 font-mono">
        © {new Date().getFullYear()} {title}. Built for Creators & Innovators with Turing Wings.
      </div>
    </footer>
  );
}
