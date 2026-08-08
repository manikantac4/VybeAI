import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Sparkles, Layers, Cpu, Code2, ShieldCheck, Zap } from 'lucide-react'

const topics = [
  ['01', 'AI-native software development', 'Build full products with AI integrated into every step.', Cpu],
  ['02', 'AI-assisted product design', 'Turn early thinking into interfaces worth using.', Sparkles],
  ['03', 'AI coding workflows', 'Learn to direct agents, review outputs and own the code.', Code2],
  ['04', 'Authentication & payments', 'Make production-ready experiences people can trust.', Zap],
  ['05', 'AI integrations', 'Connect models, data and tools into useful product features.', Layers],
  ['06', 'Deployment & DevOps', 'Ship confidently using modern cloud workflows.', Sparkles],
  ['07', 'AI agents & automations', 'Design systems that can reason and take action.', Cpu],
  ['08', 'AI-powered cyber security', 'Build with security as a creative engineering discipline.', ShieldCheck],
]

const outcomes = [
  { value: 40, suffix: '+', label: 'Shipped products' },
  { value: 92, suffix: '%', label: 'Deployed to real users' },
  { value: 8, suffix: '', label: 'Weeks, prompt to launch' },
]

function Counter({ value, suffix, active }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1200
    const start = performance.now()

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
    }
    const raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, value])

  return (
    <span>
      {display}
      {suffix}
    </span>
  )
}

export default function BuildWithAI() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeOutcomes, setActiveOutcomes] = useState(false)
  const outcomesRef = useRef(null)
  const mobileSliderRef = useRef(null)

  useEffect(() => {
    const node = outcomesRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveOutcomes(true)
        }
      },
      { threshold: 0.2 }
    )
    if (node) observer.observe(node)
    return () => {
      if (node) observer.unobserve(node)
      observer.disconnect()
    }
  }, [])

  // Auto scroll mobile horizontal slider when activeIndex changes via arrows
  const scrollToCard = (index) => {
    setActiveIndex(index)
    if (mobileSliderRef.current) {
      const cardEl = mobileSliderRef.current.children[index]
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      }
    }
  }

  const handlePrev = () => {
    const nextIdx = activeIndex > 0 ? activeIndex - 1 : topics.length - 1
    scrollToCard(nextIdx)
  }

  const handleNext = () => {
    const nextIdx = activeIndex < topics.length - 1 ? activeIndex + 1 : 0
    scrollToCard(nextIdx)
  }

  return (
    <section className="bg-[#fafafa] text-[#111] py-10 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 font-sans selection:bg-black selection:text-white overflow-hidden">
      <style>{`
        .diagram-container {
          perspective: 1000px;
        }
        .isometric-layer {
          transform: rotateX(45deg) rotateZ(-25deg);
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }
        @media (max-width: 640px) {
          .isometric-layer {
            transform: rotateX(30deg) rotateZ(-10deg) scale(0.8);
          }
        }
        .isometric-card {
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, border-color 0.4s ease, opacity 0.4s ease;
          background: #ffffff;
          will-change: transform, box-shadow;
        }
        .isometric-card.active {
          transform: translateZ(36px) scale(1.02);
          box-shadow: -20px 25px 40px -10px rgba(0,0,0,0.15);
          border-color: rgba(0,0,0,0.9);
        }
        .dashed-connector {
          stroke-dasharray: 4 4;
          animation: dash 20s linear infinite;
        }
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 md:mb-16 border-b border-black/10 pb-5 sm:pb-8">
          <p className="text-xs font-mono tracking-widest text-black/50 uppercase mb-2 sm:mb-3">
            03 / ARCHITECTURE & WORKFLOW
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-tight text-[#111] max-w-2xl leading-tight">
              Learn by making <span className="text-black/40 font-serif italic">the future tangible.</span>
            </h2>
            <p className="text-xs sm:text-sm text-black/60 max-w-sm leading-relaxed">
              8 Hands-on AI-first engineering workflows structured like modern production stacks.
            </p>
          </div>
        </div>

        {/* MOBILE SLIDER CONTROLS (Visible on Mobile & Tablet) */}
        <div className="flex lg:hidden items-center justify-between gap-4 mb-4 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#090909]">Layer 0{activeIndex + 1} of 08</span>
            <span className="text-black/40">• Swipe or tap arrows</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-black/15 bg-white text-[#090909] active:scale-95 transition-all shadow-xs"
              aria-label="Previous Layer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-black/15 bg-white text-[#090909] active:scale-95 transition-all shadow-xs"
              aria-label="Next Layer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* MOBILE SLIDER ROW (Horizontal Swipeable Cards) */}
        <div
          ref={mobileSliderRef}
          className="flex lg:hidden overflow-x-auto snap-x snap-mandatory gap-3 pb-4 no-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6"
        >
          {topics.map(([num, title, desc, IconComponent], idx) => {
            const isActive = activeIndex === idx
            return (
              <div
                key={num}
                onClick={() => scrollToCard(idx)}
                className={`snap-center shrink-0 w-[270px] sm:w-[320px] p-4 sm:p-5 border rounded-2xl transition-all duration-300 relative cursor-pointer ${
                  isActive
                    ? 'bg-[#090909] text-white border-[#090909] shadow-xl scale-[0.99]'
                    : 'bg-white text-[#111] border-black/10 hover:border-black/30'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      isActive ? 'bg-white/20 text-white' : 'bg-black/5 text-black/60'
                    }`}
                  >
                    {num}
                  </span>
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${isActive ? 'text-white/60' : 'text-black/40'}`}>
                    LAYER 0{idx + 1}
                  </span>
                </div>
                
                <h3 className="text-sm sm:text-base font-bold tracking-tight mb-1.5">{title}</h3>
                <p className={`text-xs leading-relaxed ${isActive ? 'text-white/80' : 'text-black/60'}`}>
                  {desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* DESKTOP & INTERACTIVE STACK ARCHITECTURE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-4 sm:my-8 md:my-12">
          
          {/* Left Column: Vertical Interactive List for Desktop (Hidden on Mobile) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-3 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
            {topics.map(([num, title, desc], idx) => {
              const isActive = activeIndex === idx
              return (
                <div
                  key={num}
                  onClick={() => setActiveIndex(idx)}
                  className={`p-4 sm:p-5 md:p-6 border rounded-xl cursor-pointer transition-all duration-300 relative transform-gpu ${
                    isActive
                      ? 'bg-[#111] text-white border-[#111] shadow-lg translate-x-1'
                      : 'bg-white text-[#111] border-black/10 hover:border-black/30 hover:bg-black/[0.02]'
                  }`}
                >
                  <div
                    className={`absolute top-3 right-3 w-2 h-2 border-t border-r transition-colors ${
                      isActive ? 'border-white' : 'border-black/30'
                    }`}
                  />
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`font-mono text-xs font-semibold px-2 py-0.5 rounded transition-colors ${
                        isActive ? 'bg-white/20 text-white' : 'bg-black/5 text-black/60'
                      }`}
                    >
                      {num}
                    </span>
                    <span className={`text-[10px] sm:text-xs font-mono uppercase tracking-wider ${isActive ? 'text-white/60' : 'text-black/40'}`}>
                      LAYER {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-medium tracking-tight mb-1.5">{title}</h3>
                  <p className={`text-xs leading-relaxed ${isActive ? 'text-white/80' : 'text-black/60'}`}>
                    {desc}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Right Column: Isometric Interactive Stack Diagram */}
          <div className="lg:col-span-7 relative h-[320px] sm:h-[440px] lg:h-[580px] flex items-center justify-center diagram-container overflow-hidden rounded-2xl border border-black/10 bg-[#fafafa]">
            
            {/* Guide Grid Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-black" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Isometric Layers */}
            <div className="isometric-layer relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px]">
              
              {/* Vertical Guide Pillars */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ transform: 'translateZ(-40px)' }}>
                <line x1="0" y1="0" x2="0" y2="280" stroke="black" strokeWidth="1" className="dashed-connector stroke-black/20" />
                <line x1="100%" y1="0" x2="100%" y2="280" stroke="black" strokeWidth="1" className="dashed-connector stroke-black/20" />
                <line x1="0" y1="100%" x2="0" y2="380" stroke="black" strokeWidth="1" className="dashed-connector stroke-black/20" />
                <line x1="100%" y1="100%" x2="100%" y2="380" stroke="black" strokeWidth="1" className="dashed-connector stroke-black/20" />
              </svg>

              {/* Stack Cards */}
              {topics.slice(0, 4).map(([num, title], idx) => {
                const isActive = activeIndex === idx
                return (
                  <div
                    key={num}
                    onClick={() => scrollToCard(idx)}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      transform: `translateZ(${idx * 65}px)`,
                    }}
                    className={`isometric-card border rounded-xl p-4 sm:p-6 flex flex-col justify-between cursor-pointer select-none ${
                      isActive ? 'active border-black' : 'border-black/20 hover:border-black/40 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-xs font-bold tracking-widest text-black/40">{num}</span>
                      <span className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive ? 'bg-black scale-125' : 'bg-black/20'}`} />
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-black/40 block mb-0.5 sm:mb-1">
                        STACK COMPONENT 0{idx + 1}
                      </span>
                      <h4 className="text-xs sm:text-base font-bold text-[#111] tracking-tight leading-snug">{title}</h4>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Scale & Controls Indicator */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-2 bg-white/95 backdrop-blur border border-black/10 px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-mono text-black/60 shadow-xs z-10">
              <span>Interactive Architecture</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
            </div>
          </div>
        </div>

        {/* Outcomes & Social Proof Section */}
        <div ref={outcomesRef} className="mt-12 sm:mt-16 md:mt-24 bg-[#fafafa]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Quote Card */}
            <div className="lg:col-span-6 bg-white border border-black/10 rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col justify-between shadow-xs">
              <p className="text-xs font-mono text-black/40 uppercase tracking-widest">
                FROM THE COMMUNITY
              </p>
              <blockquote className="my-6 sm:my-8 text-lg sm:text-2xl md:text-3xl font-light text-[#111] leading-snug tracking-tight">
                "I stopped waiting for the perfect tutorial and started building products I was proud to share."
              </blockquote>
              <cite className="text-xs font-mono text-black/50 not-italic">
                — Turing Wings Builder
              </cite>
            </div>

            {/* Right Metrics Card */}
            <div className="lg:col-span-6 border border-black/10 rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col justify-between bg-white shadow-xs">
              <div>
                <p className="text-xs font-mono text-black/40 uppercase tracking-widest">
                  PROJECT OUTCOMES
                </p>
                <h3 className="text-lg sm:text-2xl md:text-3xl font-light text-[#111] mt-3 sm:mt-4 tracking-tight">
                  From first prompt to public portfolio.
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-6 border-t border-black/10 pt-6 sm:pt-8 mt-6 sm:mt-8">
                {outcomes.map((o) => (
                  <div key={o.label}>
                    <p className="text-xl sm:text-3xl md:text-4xl font-light tracking-tight text-[#111] font-mono">
                      <Counter value={o.value} suffix={o.suffix} active={activeOutcomes} />
                    </p>
                    <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-black/50 leading-tight sm:leading-relaxed">{o.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* CTA Footer Link */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/10 pt-6 sm:pt-8">
            <p className="text-xs sm:text-sm text-black/60">
              Curriculum, projects, tools, and outcomes — designed around modern engineering.
            </p>
            <a
              href="#cohorts"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#090909] border-b border-black pb-0.5 hover:text-[#15803D] hover:border-[#15803D] transition-colors self-start sm:self-auto font-mono"
            >
              Explore our cohorts <span>↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}