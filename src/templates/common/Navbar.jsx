import React from "react";
import { Sparkles, Code, Trophy, Calendar, Shield, HelpCircle, PhoneCall, FileText, CheckCircle2 } from "lucide-react";

export default function CommonEventNavbar({ title, activeSubpage, setActiveSubpage, accentClass = "bg-amber-500 text-slate-950" }) {
  const navItems = [
    { id: "home", label: "Overview" },
    { id: "tracks", label: "Tracks & Challenges" },
    { id: "timeline", label: "Schedule" },
    { id: "problems", label: "Problem Statements" },
    { id: "judges", label: "Judges & Mentors" },
    { id: "rules", label: "Rules" },
    { id: "prizes", label: "Prizes" },
    { id: "faqs", label: "FAQs & Support" },
    { id: "submission", label: "Submission Portal" },
    { id: "leaderboard", label: "Leaderboard & Results" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800 py-3.5 px-4 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveSubpage("home")}>
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-black flex items-center justify-center text-sm shadow-md">
            TW
          </div>
          <div>
            <h1 className="text-sm font-extrabold text-white tracking-tight font-poppins line-clamp-1">{title}</h1>
            <span className="text-[10px] text-amber-400 font-mono font-bold block">STANDALONE EVENT PORTAL</span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="hidden lg:flex items-center gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSubpage(item.id)}
              className={`text-xs font-bold transition-all py-1 px-2.5 rounded-lg ${
                activeSubpage === item.id
                  ? "bg-slate-800 text-amber-400 border border-slate-700 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setActiveSubpage("register")}
          className={`px-5 py-2.5 rounded-xl font-black text-xs shadow-lg hover:scale-105 transition-transform ${accentClass}`}
        >
          Apply & Register
        </button>
      </div>
    </header>
  );
}
