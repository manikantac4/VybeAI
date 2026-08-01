import React, { useState } from "react";
import { Code, Bot, Cpu, CheckCircle2 } from "lucide-react";

export default function EvolutionSection() {
  const [activeWorkflow, setActiveWorkflow] = useState("ai-native");

  return (
    <section id="experience" className="py-24 bg-white text-slate-900 relative selection:bg-amber-500 selection:text-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-mono font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-amber-600" />
            <span>Section 2 — The Evolution of Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            How Software Engineering Has Evolved
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            AI is fundamentally changing how software is architected, built, and shipped. Turing Wings trains you for the modern AI-native paradigm.
          </p>
        </div>

        {/* Workflow Toggle Buttons */}
        <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveWorkflow("traditional")}
            className={`px-6 py-3 rounded-2xl text-xs font-bold transition-all ${
              activeWorkflow === "traditional"
                ? "bg-slate-100 text-slate-900 border border-slate-300"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Traditional Engineering Workflow
          </button>
          <button
            onClick={() => setActiveWorkflow("ai-native")}
            className={`px-6 py-3 rounded-2xl text-xs font-bold transition-all ${
              activeWorkflow === "ai-native"
                ? "bg-slate-900 text-white shadow-lg font-extrabold"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            ⚡ AI-Native Engineering Workflow
          </button>
        </div>

        {/* Side-by-Side Comparison Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Traditional Workflow Panel */}
          <div className={`p-8 rounded-3xl border transition-all ${
            activeWorkflow === "traditional"
              ? "bg-slate-50 border-slate-300 shadow-xl"
              : "bg-slate-50/50 border-slate-200 opacity-60"
          }`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-slate-200 flex items-center justify-center text-slate-800">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Traditional Workflow</h3>
                <span className="text-xs text-slate-500 font-mono">Manual Syntax & Slow Iteration</span>
              </div>
            </div>

            <ul className="space-y-4 text-xs text-slate-600">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                <span>Writing hundreds of lines of repetitive boilerplate code by hand</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                <span>Manual searching across forums for obscure syntax errors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                <span>Slow development cycles taking weeks for basic features</span>
              </li>
            </ul>
          </div>

          {/* AI-Native Workflow Panel */}
          <div className={`p-8 rounded-3xl border transition-all ${
            activeWorkflow === "ai-native"
              ? "bg-slate-50 border-amber-500/50 shadow-2xl shadow-amber-500/10"
              : "bg-slate-50/50 border-slate-200 opacity-60"
          }`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-amber-500 flex items-center justify-center text-slate-950">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">AI-Native Workflow</h3>
                <span className="text-xs text-amber-700 font-mono">Architectural Direction & 12x Speed</span>
              </div>
            </div>

            <ul className="space-y-4 text-xs text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Architectural prompting and high-level design specification</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Autonomous AI agents (Sonnet 3.7, Cursor, GPT-4) writing production code</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Instant automated test synthesis & real-time zero-trust security checks</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Impact Statement Outcome Footer */}
        <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center max-w-2xl mx-auto space-y-2">
          <p className="text-sm font-bold text-amber-800">
            Turing Wings is not another coding academy. It is a community that teaches students how to think, collaborate, and build using modern AI engineering workflows.
          </p>
        </div>

      </div>
    </section>
  );
}
