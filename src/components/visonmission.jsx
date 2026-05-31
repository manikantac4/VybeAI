import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, Target, Lightbulb, Users, Zap, ArrowRight, Rocket, Brain } from "lucide-react";
import Visionmission from "../assets/visionmission.png";

function FadeUp({ children, delay = 0, style = {}, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.66, delay, ease: [0.16, 1, 0.3, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

function SectionBadge({ icon: Icon, label, accent = "#0d9488" }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 7,
      background: accent + "12",
      border: `1px solid ${accent}30`,
      borderRadius: 50, padding: "6px 14px", marginBottom: 16,
    }}>
      <Icon size={11} color={accent} />
      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 11, fontWeight: 700,
        color: accent, letterSpacing: 0.5, textTransform: "uppercase",
      }}>{label}</span>
    </div>
  );
}

function StatPill({ number, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.82 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: "#fff",
        border: "1px solid rgba(13,148,136,0.13)",
        borderRadius: 14,
        padding: "13px 18px",
        textAlign: "center",
        boxShadow: "0 3px 14px rgba(0,0,0,0.06)",
        flex: "1 1 80px",
      }}
    >
      <p style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: 24, fontWeight: 800, fontStyle: "italic",
        color: "#0d9488", lineHeight: 1,
      }}>{number}</p>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 10, fontWeight: 500,
        color: "#999", marginTop: 4, letterSpacing: 0.2,
        whiteSpace: "nowrap",
      }}>{label}</p>
    </motion.div>
  );
}

function ValueCard({ icon: Icon, title, desc, delay, accent }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.58, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.10)" }}
      style={{
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.055)",
        borderRadius: 18,
        padding: "20px 20px 18px",
        boxShadow: "0 3px 16px rgba(0,0,0,0.055)",
        cursor: "default",
      }}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 11,
        background: accent + "18",
        border: `1px solid ${accent}28`,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 13,
      }}>
        <Icon size={17} color={accent} />
      </div>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: "#111", marginBottom: 6 }}>{title}</p>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11.5, color: "#777", lineHeight: 1.66 }}>{desc}</p>
    </motion.div>
  );
}

/* ── Image — no container, directly on background ── */
function ImageBlock() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.img
      ref={ref}
      src={Visionmission}
      alt="Vision and Mission"
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      style={{
        width: "100%",
        height: "auto",
        display: "block",
        objectFit: "contain",
        borderRadius: 0,
        background: "none",
        border: "none",
        boxShadow: "none",
      }}
    />
  );
}

export default function VisionMission() {
  const values = [
    { icon: Lightbulb, title: "Learn by Building",       desc: "Practical, project-based learning over heavy theory. Build real things from day one.",          accent: "#f97316" },
    { icon: Zap,       title: "AI-Powered Creation",     desc: "Leverage modern AI workflows to build faster, smarter, and more creatively than ever before.",   accent: "#0d9488" },
    { icon: Users,     title: "Collaborative Ecosystem", desc: "A community of creators, innovators and builders growing together through shared experiences.",   accent: "#8b5cf6" },
    { icon: Rocket,    title: "Future-Oriented Mindset", desc: "Innovation culture, confidence-building and creative problem-solving at the core of everything.", accent: "#ec4899" },
  ];

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700;1,800&family=DM+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .vm-section { background: #ffffff; width: 100%; }

        .teal-rule {
          width: 44px; height: 3px;
          background: linear-gradient(to right, #0d9488, #1cc9b7);
          border-radius: 4px; margin-bottom: 18px;
        }
        .vision-quote {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic; font-weight: 700;
          font-size: clamp(15px, 1.8vw, 20px);
          color: #0d9488; line-height: 1.55;
        }

        .vm-main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .vm-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 72px;
        }
        .vm-values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .vm-stats-row {
          display: flex; gap: 12px; flex-wrap: wrap;
        }
        .vm-cta-strip {
          display: flex; align-items: center;
          justify-content: space-between;
          gap: 20px; flex-wrap: wrap;
        }
        .vm-cta-btns {
          display: flex; gap: 10px; flex-wrap: wrap; flex-shrink: 0;
        }

        @media (max-width: 860px) {
          .vm-main-grid { grid-template-columns: 1fr; gap: 36px; }
          .vm-cards-grid { grid-template-columns: 1fr; gap: 14px; margin-top: 48px; }
          .vm-section-pad { padding: 64px 0 60px !important; }
          .vm-inner { padding: 0 28px !important; }
        }
        @media (max-width: 560px) {
          .vm-values-grid { grid-template-columns: 1fr; }
          .vm-section-pad { padding: 48px 0 44px !important; }
          .vm-inner { padding: 0 18px !important; }
          .vm-stats-row { gap: 8px; }
          .vm-cta-strip { flex-direction: column; align-items: flex-start; }
          .vm-cta-btns { width: 100%; }
          .vm-cta-btns button { flex: 1 1 0; justify-content: center; }
          .vm-top-label { margin-bottom: 36px !important; }
          .vm-main-gap { gap: 28px !important; }
        }
        @media (max-width: 380px) {
          .vm-inner { padding: 0 14px !important; }
          .vm-stats-row { flex-direction: column; }
          .vm-stats-row > * { flex: unset; width: 100%; }
        }
      `}</style>

      <section className="vm-section vm-section-pad" style={{ padding: "88px 0 76px" }}>
        <div className="vm-inner" style={{ maxWidth: 1140, margin: "0 auto", padding: "0 44px" }}>

          {/* SECTION LABEL */}
          <FadeUp delay={0}>
            <div className="vm-top-label" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 56 }}>
              <div style={{ width: 32, height: 1.5, background: "rgba(13,148,136,0.32)", borderRadius: 2 }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10.5, fontWeight: 700,
                color: "#0d9488", letterSpacing: 2.2, textTransform: "uppercase",
              }}> —</span>
            </div>
          </FadeUp>

          {/* MAIN TWO-COL */}
          <div className="vm-main-grid vm-main-gap">

            {/* LEFT — text */}
            <div>
              <FadeUp delay={0.06}>
                <h2 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(34px, 4vw, 56px)",
                  fontWeight: 800, fontStyle: "italic",
                  lineHeight: 1.08, letterSpacing: "-1px",
                  color: "#0f1a19", marginBottom: 24,
                }}>
                  Our<br />
                  <span style={{ color: "#0d9488" }}>Mission</span><br />
                  & Vision
                </h2>
              </FadeUp>

              <FadeUp delay={0.11}><div className="teal-rule" /></FadeUp>

              <FadeUp delay={0.15}>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13.5, color: "#555", lineHeight: 1.78,
                  maxWidth: 420, marginBottom: 24,
                }}>
                  Our core goal is to provide every student, creator, and innovator a
                  simple and empowering way to grow — using the most innovative
                  AI-powered tools and modern creator workflows available today.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="vision-quote" style={{ maxWidth: 400, marginBottom: 32 }}>
                  "Digital creation and modern technology<br />for everyone, at every level."
                </p>
              </FadeUp>

              <FadeUp delay={0.26}>
                <div className="vm-stats-row">
                  <StatPill number="4+"  label="Launch Programs"   />
                  <StatPill number="∞"   label="Creator Community" />
                  <StatPill number="AI"  label="Powered Workflows" />
                </div>
              </FadeUp>
            </div>

            {/* RIGHT — image directly on background, then about card */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

              <FadeUp delay={0.1}>
                <ImageBlock />
              </FadeUp>

              {/* About card */}
              <FadeUp delay={0.2}>
                <div style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.055)",
                  borderRadius: 18,
                  padding: "22px 24px",
                  boxShadow: "0 3px 16px rgba(0,0,0,0.06)",
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 14 }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14.5, fontWeight: 700, color: "#111", marginBottom: 9 }}>About Us</p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, color: "#666", lineHeight: 1.72 }}>
                        VybeAI was built by young, creative, and passionate individuals who believe
                        technology should be accessible to everyone. We combine AI tools, creator
                        mindsets, and practical learning to transform curious beginners into
                        confident builders.
                      </p>
                    </div>
                    <div style={{
                      flexShrink: 0,
                      background: "linear-gradient(148deg,#1cc9b7 0%,#0d9488 100%)",
                      borderRadius: 12, padding: "10px 14px",
                      textAlign: "center", minWidth: 58,
                    }}>
                      <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 800, fontStyle: "italic", color: "white", lineHeight: 1 }}>AI</p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.72)", letterSpacing: 0.6, marginTop: 3 }}>FIRST</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* VISION & MISSION CARDS */}
          <div className="vm-cards-grid">
            {[
              {
                icon: Eye, badge: "Our Vision", accent: "#0d9488",
                heading: "Build a Generation of Confident Creators",
                body: "To build a generation of confident creators, innovators, and future-ready individuals by making modern technology, AI, and digital creation accessible, practical, and inspiring for everyone willing to build and grow.",
                motto: "Build Beyond Limits.",
                delay: 0,
              },
              {
                icon: Target, badge: "Our Mission", accent: "#f97316",
                heading: "Simplify. Empower. Transform.",
                body: "To simplify modern technology and AI-assisted creation, introduce modern creator workflows, encourage practical project-based learning, and build innovation-focused ecosystems where learning, building, collaboration, and growth happen together.",
                motto: "From Learning to Creating.",
                delay: 0.1,
              },
            ].map(({ icon: Icon, badge, accent, heading, body, motto, delay }) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-50px" });
              return (
                <motion.div
                  key={badge}
                  ref={ref}
                  initial={{ opacity: 0, y: 28 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.66, delay, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.055)",
                    borderRadius: 20,
                    padding: "26px 26px 24px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                    position: "relative", overflow: "hidden",
                  }}
                >
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 3,
                    background: `linear-gradient(to right, ${accent}, ${accent}40)`,
                  }} />
                  <SectionBadge icon={Icon} label={badge} accent={accent} />
                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(16px, 1.7vw, 21px)",
                    fontWeight: 800, fontStyle: "italic",
                    color: "#0f1a19", lineHeight: 1.25, marginBottom: 12,
                  }}>{heading}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, color: "#666", lineHeight: 1.74 }}>{body}</p>
                  <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid rgba(0,0,0,0.055)", display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 18, height: 1.5, background: accent, borderRadius: 2 }} />
                    <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 11, fontStyle: "italic", color: accent, fontWeight: 700 }}>{motto}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA STRIP */}
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 26 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.66, ease: [0.16, 1, 0.3, 1] }}
            style={{
              marginTop: 56,
              background: "linear-gradient(148deg,#1cc9b7 0%,#13b0a0 38%,#0d9488 72%,#0a7a70 100%)",
              borderRadius: 20, padding: "36px 36px",
              position: "relative", overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }} />
            <div className="vm-cta-strip" style={{ position: "relative", zIndex: 1 }}>
              <div>
                <p style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(17px, 2vw, 23px)",
                  fontWeight: 800, fontStyle: "italic",
                  color: "white", lineHeight: 1.25, marginBottom: 6,
                }}>Ready to Build Beyond Limits?</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                  Join our growing ecosystem of creators, innovators, and future builders.
                </p>
              </div>
              <div className="vm-cta-btns">
                <button
                  style={{
                    background: "white", color: "#0a7a70",
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 13,
                    padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer",
                    display: "inline-flex", alignItems: "center", gap: 6,
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(0,0,0,0.2)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
                >
                  Start Building <ArrowRight size={13} />
                </button>
                <button
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1.5px solid rgba(255,255,255,0.34)",
                    color: "white", fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600, fontSize: 13, padding: "10px 22px",
                    borderRadius: 50, cursor: "pointer",
                    transition: "background 0.2s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.17)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = ""; }}
                >
                  Explore Programs
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}