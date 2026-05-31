// import { useState, useEffect } from "react";
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
// import {
//   BookOpen, Users, Mail, BarChart3, Play, Star,
//   ArrowRight, CheckCircle, Zap, Globe, Award, Menu, X
// } from "lucide-react";

// /* ── Google Fonts ── */
// const FontLoader = () => (
//   <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
    
//     :root {
//       --teal:      #1eb8a8;
//       --teal-deep: #0d9488;
//       --teal-dark: #0a7a70;
//       --teal-glow: rgba(30,184,168,0.35);
//       --orange:    #f97316;
//       --pink:      #ec4899;
//       --white:     #ffffff;
//       --text-muted: rgba(255,255,255,0.65);
//     }

//     *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//     html { scroll-behavior: smooth; }

//     body {
//       font-family: 'Plus Jakarta Sans', sans-serif;
//       background: #f8fffe;
//       overflow-x: hidden;
//     }

//     .display-font { font-family: 'Clash Display', 'Plus Jakarta Sans', sans-serif; }

//     /* Scrollbar */
//     ::-webkit-scrollbar { width: 6px; }
//     ::-webkit-scrollbar-track { background: #e0faf8; }
//     ::-webkit-scrollbar-thumb { background: var(--teal); border-radius: 3px; }

//     /* Glassmorphism card */
//     .glass-card {
//       background: rgba(255,255,255,0.92);
//       backdrop-filter: blur(20px);
//       -webkit-backdrop-filter: blur(20px);
//       border: 1px solid rgba(255,255,255,0.6);
//     }

//     /* Teal gradient bg */
//     .hero-bg {
//       background: linear-gradient(145deg, #1cc9b7 0%, #16b0a0 40%, #0d9488 75%, #0a7a70 100%);
//     }

//     /* Animated gradient border */
//     @keyframes borderSpin {
//       0%   { background-position: 0% 50%; }
//       50%  { background-position: 100% 50%; }
//       100% { background-position: 0% 50%; }
//     }

//     .glow-btn {
//       position: relative;
//       overflow: hidden;
//     }
//     .glow-btn::before {
//       content: '';
//       position: absolute;
//       inset: -2px;
//       background: linear-gradient(90deg, #f97316, #ec4899, #1eb8a8, #f97316);
//       background-size: 300% 300%;
//       animation: borderSpin 3s linear infinite;
//       border-radius: inherit;
//       z-index: -1;
//       opacity: 0;
//       transition: opacity 0.3s;
//     }
//     .glow-btn:hover::before { opacity: 1; }

//     /* Floating animation */
//     @keyframes floatA {
//       0%, 100% { transform: translateY(0px) rotate(0deg); }
//       50%       { transform: translateY(-14px) rotate(1deg); }
//     }
//     @keyframes floatB {
//       0%, 100% { transform: translateY(0px) rotate(0deg); }
//       50%       { transform: translateY(-10px) rotate(-1.5deg); }
//     }
//     @keyframes floatC {
//       0%, 100% { transform: translateY(0px); }
//       50%       { transform: translateY(-18px); }
//     }
//     @keyframes pulse-ring {
//       0%   { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(30,184,168,0.5); }
//       70%  { transform: scale(1);    box-shadow: 0 0 0 14px rgba(30,184,168,0); }
//       100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(30,184,168,0); }
//     }
//     .float-a { animation: floatA 4s ease-in-out infinite; }
//     .float-b { animation: floatB 5s ease-in-out infinite 0.8s; }
//     .float-c { animation: floatC 3.5s ease-in-out infinite 1.4s; }
//     .pulse-ring { animation: pulse-ring 2.5s ease-out infinite; }

//     /* Mesh background blobs */
//     .blob {
//       position: absolute;
//       border-radius: 50%;
//       filter: blur(70px);
//       pointer-events: none;
//     }

//     /* Stats section */
//     .stat-card:hover { transform: translateY(-4px); }
//     .stat-card { transition: transform 0.3s ease; }

//     /* Feature card hover */
//     .feature-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(13,148,136,0.15); }
//     .feature-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }

//     /* Navbar scroll effect handled inline */
//   `}</style>
// );

// /* ── NAVBAR ── */
// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 30);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//       style={{
//         position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
//         padding: scrolled ? "12px 40px" : "20px 40px",
//         background: scrolled ? "rgba(13,148,136,0.92)" : "transparent",
//         backdropFilter: scrolled ? "blur(20px)" : "none",
//         borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
//         transition: "all 0.4s ease",
//         display: "flex", alignItems: "center", justifyContent: "space-between",
//       }}
//     >
//       {/* Logo */}
//       <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//         <div style={{
//           width: 38, height: 38,
//           background: "rgba(255,255,255,0.15)",
//           border: "2px solid rgba(255,255,255,0.4)",
//           borderRadius: 10,
//           display: "flex", alignItems: "center", justifyContent: "center",
//         }}>
//           <div style={{
//             width: 18, height: 18,
//             border: "2.5px solid white",
//             borderRadius: 4,
//             transform: "rotate(12deg)",
//           }} />
//         </div>
//         <span className="display-font" style={{
//           color: "white", fontWeight: 700, fontSize: 22, letterSpacing: 1,
//         }}>TOTC</span>
//       </div>

//       {/* Nav links – desktop */}
//       <ul style={{
//         display: "flex", gap: 36, listStyle: "none",
//         "@media(maxWidth:768px)": { display: "none" },
//       }} className="nav-links">
//         {["Home", "Courses", "Careers", "Blog", "About Us"].map((item, i) => (
//           <motion.li key={item}
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 * i + 0.3 }}
//           >
//             <a href="#" style={{
//               color: "rgba(255,255,255,0.9)", fontWeight: 500,
//               fontSize: 15, textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif",
//               transition: "color 0.2s",
//             }}
//               onMouseEnter={e => e.target.style.color = "white"}
//               onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.9)"}
//             >{item}</a>
//           </motion.li>
//         ))}
//       </ul>

//       {/* Buttons */}
//       <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
//         <motion.button
//           whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
//           style={{
//             background: "white", color: "#0d9488",
//             fontWeight: 700, fontSize: 14, padding: "10px 26px",
//             borderRadius: 50, border: "none", cursor: "pointer",
//             fontFamily: "'Plus Jakarta Sans', sans-serif",
//             boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
//             transition: "box-shadow 0.2s",
//           }}
//           onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.2)"}
//           onMouseLeave={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.12)"}
//         >Login</motion.button>

//         <motion.button
//           whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
//           style={{
//             background: "rgba(255,255,255,0.15)",
//             border: "1.5px solid rgba(255,255,255,0.5)",
//             color: "white", fontWeight: 700, fontSize: 14,
//             padding: "10px 26px", borderRadius: 50,
//             cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif",
//             backdropFilter: "blur(8px)",
//             transition: "background 0.2s",
//           }}
//           onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
//           onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
//         >Sign Up</motion.button>
//       </div>
//     </motion.nav>
//   );
// }

// /* ── FLOATING CARD: 250k ── */
// function StudentsCard() {
//   return (
//     <div className="float-a" style={{
//       position: "absolute", top: "28%", right: "calc(46% + 20px)",
//       zIndex: 20,
//     }}>
//       <motion.div
//         initial={{ opacity: 0, x: -40, scale: 0.8 }}
//         animate={{ opacity: 1, x: 0, scale: 1 }}
//         transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//         className="glass-card"
//         style={{
//           borderRadius: 20, padding: "14px 20px",
//           display: "flex", alignItems: "center", gap: 14,
//           boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08)",
//           minWidth: 210,
//         }}
//       >
//         <div style={{
//           width: 46, height: 46, borderRadius: 14,
//           background: "linear-gradient(135deg, #fed7aa, #fdba74)",
//           display: "flex", alignItems: "center", justifyContent: "center",
//           flexShrink: 0,
//         }}>
//           <BookOpen size={22} color="#c2410c" />
//         </div>
//         <div>
//           <p className="display-font" style={{ fontSize: 22, fontWeight: 700, color: "#111", lineHeight: 1.1 }}>250k</p>
//           <p style={{ fontSize: 12, color: "#888", fontWeight: 500, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Assisted Students</p>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// /* ── FLOATING CARD: Congratulations ── */
// function CongratulationsCard() {
//   return (
//     <div className="float-b" style={{
//       position: "absolute", top: "48%", right: "2%",
//       zIndex: 20,
//     }}>
//       <motion.div
//         initial={{ opacity: 0, x: 40, scale: 0.8 }}
//         animate={{ opacity: 1, x: 0, scale: 1 }}
//         transition={{ delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//         className="glass-card"
//         style={{
//           borderRadius: 20, padding: "16px 22px",
//           display: "flex", alignItems: "center", gap: 14,
//           boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08)",
//           minWidth: 240,
//         }}
//       >
//         <div style={{
//           width: 48, height: 48, borderRadius: 14,
//           background: "linear-gradient(135deg, #fb923c, #f97316)",
//           display: "flex", alignItems: "center", justifyContent: "center",
//           flexShrink: 0,
//           boxShadow: "0 8px 20px rgba(249,115,22,0.4)",
//         }}>
//           <Mail size={22} color="white" />
//         </div>
//         <div>
//           <p style={{ fontSize: 15, fontWeight: 700, color: "#111", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Congratulations 🎉</p>
//           <p style={{ fontSize: 12, color: "#999", fontWeight: 400, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Your admission completed</p>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// /* ── FLOATING CARD: Class ── */
// function ClassCard() {
//   return (
//     <div className="float-a" style={{
//       position: "absolute", bottom: "14%", right: "calc(46% - 20px)",
//       zIndex: 20,
//     }}>
//       <motion.div
//         initial={{ opacity: 0, y: 40, scale: 0.8 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ delay: 1.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//         className="glass-card"
//         style={{
//           borderRadius: 22, padding: "18px 20px",
//           boxShadow: "0 24px 64px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)",
//           minWidth: 240,
//         }}
//       >
//         <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
//           <div style={{
//             width: 42, height: 42, borderRadius: 12,
//             background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
//             display: "flex", alignItems: "center", justifyContent: "center",
//             flexShrink: 0, boxShadow: "0 6px 16px rgba(251,191,36,0.4)",
//           }}>
//             <Users size={18} color="white" />
//           </div>
//           <div>
//             <p style={{ fontSize: 14, fontWeight: 700, color: "#111", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>User Experience Class</p>
//             <p style={{ fontSize: 11, color: "#aaa", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Today at 12:00 PM</p>
//           </div>
//         </div>
//         <motion.button
//           whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(236,72,153,0.5)" }}
//           whileTap={{ scale: 0.97 }}
//           style={{
//             width: "100%", background: "linear-gradient(135deg, #ec4899, #db2777)",
//             color: "white", fontWeight: 700, fontSize: 13,
//             padding: "11px", borderRadius: 12, border: "none",
//             cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif",
//             boxShadow: "0 4px 16px rgba(236,72,153,0.35)",
//             transition: "box-shadow 0.2s",
//             letterSpacing: 0.3,
//           }}
//         >Join Now →</motion.button>
//       </motion.div>
//     </div>
//   );
// }

// /* ── FLOATING BADGE: BarChart ── */
// function FloatingBadge() {
//   return (
//     <div className="float-c" style={{
//       position: "absolute", top: "14%", right: "14%", zIndex: 20,
//     }}>
//       <motion.div
//         initial={{ opacity: 0, scale: 0, rotate: -20 }}
//         animate={{ opacity: 1, scale: 1, rotate: 0 }}
//         transition={{ delay: 1.5, duration: 0.5, type: "spring", stiffness: 200 }}
//         style={{
//           width: 58, height: 58,
//           background: "linear-gradient(135deg, #ec4899, #be185d)",
//           borderRadius: 18,
//           display: "flex", alignItems: "center", justifyContent: "center",
//           boxShadow: "0 12px 30px rgba(236,72,153,0.5), 0 4px 12px rgba(0,0,0,0.1)",
//         }}
//       >
//         <BarChart3 size={28} color="white" />
//       </motion.div>
//     </div>
//   );
// }

// /* ── FLOATING BADGE: Star rating ── */
// function StarBadge() {
//   return (
//     <div className="float-b" style={{
//       position: "absolute", top: "62%", right: "3%", zIndex: 20,
//     }}>
//       <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 1.7, duration: 0.5, type: "spring" }}
//         className="glass-card"
//         style={{
//           borderRadius: 16, padding: "10px 16px",
//           display: "flex", alignItems: "center", gap: 8,
//           boxShadow: "0 12px 32px rgba(0,0,0,0.1)",
//         }}
//       >
//         <div style={{ display: "flex", gap: 2 }}>
//           {[1,2,3,4,5].map(s => (
//             <Star key={s} size={13} fill="#fbbf24" color="#fbbf24" />
//           ))}
//         </div>
//         <span style={{ fontSize: 12, fontWeight: 700, color: "#333", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>4.9/5</span>
//       </motion.div>
//     </div>
//   );
// }

// /* ── HERO SECTION ── */
// function HeroSection() {
//   return (
//     <section className="hero-bg" style={{
//       minHeight: "100vh",
//       position: "relative",
//       overflow: "hidden",
//       display: "flex",
//       flexDirection: "column",
//     }}>
//       {/* Background blobs */}
//       <div className="blob" style={{ width: 400, height: 400, background: "rgba(255,255,255,0.06)", top: -100, right: "30%", transform: "rotate(45deg)" }} />
//       <div className="blob" style={{ width: 300, height: 300, background: "rgba(249,115,22,0.08)", bottom: 100, left: -50 }} />
//       <div className="blob" style={{ width: 200, height: 200, background: "rgba(236,72,153,0.08)", top: "30%", right: "5%" }} />

//       {/* Subtle grid overlay */}
//       <div style={{
//         position: "absolute", inset: 0, zIndex: 0,
//         backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
//         backgroundSize: "60px 60px",
//       }} />

//       {/* Main content */}
//       <div style={{
//         flex: 1, display: "flex", alignItems: "center",
//         paddingTop: 100, paddingBottom: 120,
//         maxWidth: 1200, margin: "0 auto", width: "100%",
//         padding: "100px 48px 120px",
//         position: "relative", zIndex: 10,
//       }}>
//         {/* LEFT: Text content */}
//         <div style={{ flex: "0 0 50%", maxWidth: 540, paddingRight: 24 }}>

//           {/* Badge pill */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             style={{
//               display: "inline-flex", alignItems: "center", gap: 8,
//               background: "rgba(255,255,255,0.15)",
//               border: "1px solid rgba(255,255,255,0.3)",
//               borderRadius: 50, padding: "8px 18px",
//               marginBottom: 28,
//             }}
//           >
//             <Zap size={14} color="#fbbf24" fill="#fbbf24" />
//             <span style={{ color: "white", fontSize: 13, fontWeight: 600, fontFamily: "'Plus Jakarta Sans',sans-serif", letterSpacing: 0.3 }}>
//               #1 Online Learning Platform
//             </span>
//           </motion.div>

//           {/* Main heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//             className="display-font"
//             style={{
//               fontSize: "clamp(42px, 5.5vw, 68px)",
//               fontWeight: 700,
//               lineHeight: 1.08,
//               marginBottom: 24,
//               letterSpacing: -1,
//             }}
//           >
//             <span style={{ color: "#f97316" }}>Studying</span>
//             <br />
//             <span style={{ color: "white" }}>Online is now</span>
//             <br />
//             <span style={{ color: "white" }}>much easier</span>
//           </motion.h1>

//           {/* Subtext */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.6 }}
//             style={{
//               color: "rgba(255,255,255,0.72)",
//               fontSize: 16, lineHeight: 1.75,
//               marginBottom: 40,
//               fontFamily: "'Plus Jakarta Sans',sans-serif",
//               fontWeight: 400,
//               maxWidth: 400,
//             }}
//           >
//             TOTC is an interesting platform that will teach you in a more interactive and engaging way. Join 250k+ learners today.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.65, duration: 0.6 }}
//             style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}
//           >
//             <motion.button
//               whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(0,0,0,0.25)" }}
//               whileTap={{ scale: 0.97 }}
//               style={{
//                 background: "white",
//                 color: "#0d9488",
//                 fontWeight: 700, fontSize: 15,
//                 padding: "14px 34px",
//                 borderRadius: 50, border: "none",
//                 cursor: "pointer",
//                 fontFamily: "'Plus Jakarta Sans',sans-serif",
//                 boxShadow: "0 6px 24px rgba(0,0,0,0.15)",
//                 display: "flex", alignItems: "center", gap: 8,
//                 transition: "box-shadow 0.2s",
//                 letterSpacing: 0.2,
//               }}
//             >
//               Join for free
//               <ArrowRight size={16} />
//             </motion.button>

//             <motion.div
//               whileHover={{ scale: 1.03 }}
//               style={{ display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 className="pulse-ring"
//                 style={{
//                   width: 50, height: 50,
//                   background: "rgba(255,255,255,0.15)",
//                   border: "2px solid rgba(255,255,255,0.5)",
//                   borderRadius: "50%",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   flexShrink: 0,
//                   backdropFilter: "blur(8px)",
//                 }}
//               >
//                 <Play size={18} color="white" fill="white" style={{ marginLeft: 2 }} />
//               </motion.div>
//               <span style={{
//                 color: "rgba(255,255,255,0.9)", fontSize: 15, fontWeight: 600,
//                 fontFamily: "'Plus Jakarta Sans',sans-serif",
//               }}>Watch how it works</span>
//             </motion.div>
//           </motion.div>

//           {/* Trust indicators */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.9 }}
//             style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 40 }}
//           >
//             {/* Avatar stack */}
//             <div style={{ display: "flex" }}>
//               {["#f97316","#ec4899","#3b82f6","#10b981"].map((c, i) => (
//                 <div key={i} style={{
//                   width: 32, height: 32, borderRadius: "50%",
//                   background: c, border: "2.5px solid rgba(255,255,255,0.5)",
//                   marginLeft: i > 0 ? -10 : 0,
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                 }}>
//                   <Users size={13} color="white" />
//                 </div>
//               ))}
//             </div>
//             <div>
//               <div style={{ display: "flex", gap: 2, marginBottom: 2 }}>
//                 {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="#fbbf24" color="#fbbf24" />)}
//               </div>
//               <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
//                 Trusted by <strong style={{ color: "white" }}>250,000+</strong> students
//               </span>
//             </div>
//           </motion.div>
//         </div>

//         {/* RIGHT: Placeholder image + floating cards */}
//         <div style={{ flex: "0 0 50%", position: "relative", height: 560 }}>
//           {/* Image placeholder */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//             style={{
//               position: "absolute",
//               right: 0, bottom: 0,
//               width: "88%", height: "96%",
//               borderRadius: "40px 40px 0 0",
//               overflow: "hidden",
//               background: "rgba(255,255,255,0.08)",
//               border: "1px solid rgba(255,255,255,0.15)",
//             }}
//           >
//             {/* Decorative circle */}
//             <div style={{
//               position: "absolute", top: "8%", left: "50%",
//               transform: "translateX(-50%)",
//               width: "65%", paddingBottom: "65%",
//               background: "rgba(255,255,255,0.07)",
//               borderRadius: "50%",
//             }} />
//             {/* Person silhouette */}
//             <div style={{
//               position: "absolute", inset: 0,
//               display: "flex", flexDirection: "column",
//               alignItems: "center", justifyContent: "flex-end",
//             }}>
//               <svg viewBox="0 0 280 460" style={{ width: "70%", opacity: 0.18 }} fill="white">
//                 <ellipse cx="140" cy="65" rx="50" ry="55" />
//                 <path d="M50 185 Q70 135 140 135 Q210 135 230 185 L248 390 Q248 410 228 410 L178 410 L166 270 H114 L102 410 H52 Q32 410 32 390 Z" />
//                 <path d="M50 185 Q22 225 14 285 Q10 325 26 344 L54 332 Q46 292 62 252 Z" />
//                 <path d="M230 185 Q258 225 266 285 Q270 325 254 344 L226 332 Q234 292 218 252 Z" />
//               </svg>
//               <p style={{
//                 color: "rgba(255,255,255,0.35)", fontSize: 12,
//                 fontFamily: "'Plus Jakarta Sans',sans-serif",
//                 marginBottom: 20, letterSpacing: 0.5,
//               }}>Replace with student image</p>
//             </div>
//           </motion.div>

//           {/* Floating cards */}
//           <StudentsCard />
//           <FloatingBadge />
//           <CongratulationsCard />
//           <ClassCard />
//           <StarBadge />
//         </div>
//       </div>

//       {/* Wave SVG */}
//       <div style={{ position: "absolute", bottom: -2, left: 0, right: 0, zIndex: 5 }}>
//         <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
//           style={{ display: "block", width: "100%", height: 90 }}>
//           <path d="M0,40 C240,90 480,0 720,45 C960,90 1200,10 1440,50 L1440,90 L0,90 Z" fill="white" />
//         </svg>
//       </div>
//     </section>
//   );
// }

// /* ── STATS SECTION ── */
// function StatsSection() {
//   const stats = [
//     { icon: <Users size={28} color="#0d9488" />, value: "250k+", label: "Active Students", bg: "#e6faf8" },
//     { icon: <BookOpen size={28} color="#f97316" />, value: "1,200+", label: "Online Courses", bg: "#fff7ed" },
//     { icon: <Award size={28} color="#ec4899" />, value: "98%", label: "Success Rate", bg: "#fdf2f8" },
//     { icon: <Globe size={28} color="#3b82f6" />, value: "50+", label: "Countries Served", bg: "#eff6ff" },
//   ];
//   return (
//     <section style={{ background: "white", padding: "80px 48px", position: "relative", zIndex: 10 }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           style={{ textAlign: "center", marginBottom: 56 }}
//         >
//           <span style={{
//             background: "#e6faf8", color: "#0d9488",
//             fontSize: 13, fontWeight: 700, padding: "6px 16px",
//             borderRadius: 50, fontFamily: "'Plus Jakarta Sans',sans-serif",
//             letterSpacing: 0.5, textTransform: "uppercase",
//           }}>Our Numbers</span>
//           <h2 className="display-font" style={{
//             fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700,
//             color: "#0f1c1b", marginTop: 14, letterSpacing: -0.5,
//           }}>Trusted by learners worldwide</h2>
//         </motion.div>

//         <div style={{
//           display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//           gap: 24,
//         }}>
//           {stats.map((s, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1, duration: 0.5 }}
//               className="stat-card"
//               style={{
//                 background: s.bg, borderRadius: 24,
//                 padding: "32px 28px", textAlign: "center",
//                 border: "1px solid rgba(0,0,0,0.04)",
//               }}
//             >
//               <div style={{
//                 width: 56, height: 56, borderRadius: 16,
//                 background: "white", display: "flex",
//                 alignItems: "center", justifyContent: "center",
//                 margin: "0 auto 16px",
//                 boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
//               }}>{s.icon}</div>
//               <p className="display-font" style={{ fontSize: 32, fontWeight: 700, color: "#0f1c1b", lineHeight: 1 }}>{s.value}</p>
//               <p style={{ fontSize: 14, color: "#6b7280", marginTop: 6, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 500 }}>{s.label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ── FEATURES SECTION ── */
// function FeaturesSection() {
//   const features = [
//     {
//       icon: <Zap size={26} color="white" />,
//       bg: "linear-gradient(135deg, #0d9488, #14b8a6)",
//       title: "Live Interactive Classes",
//       desc: "Engage in real-time sessions with expert instructors. Ask questions, get instant feedback, and learn alongside peers.",
//     },
//     {
//       icon: <Globe size={26} color="white" />,
//       bg: "linear-gradient(135deg, #f97316, #fb923c)",
//       title: "Learn Anywhere, Anytime",
//       desc: "Access your courses on any device. Our mobile-first platform ensures seamless learning on the go.",
//     },
//     {
//       icon: <Award size={26} color="white" />,
//       bg: "linear-gradient(135deg, #ec4899, #f472b6)",
//       title: "Certified Programs",
//       desc: "Earn industry-recognized certificates that boost your career. Credentials trusted by top employers globally.",
//     },
//     {
//       icon: <Users size={26} color="white" />,
//       bg: "linear-gradient(135deg, #3b82f6, #60a5fa)",
//       title: "Community & Mentorship",
//       desc: "Join a thriving community of learners. Get mentored by industry experts and build lasting connections.",
//     },
//   ];

//   return (
//     <section style={{ background: "#f8fffe", padding: "100px 48px" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           style={{ textAlign: "center", marginBottom: 64 }}
//         >
//           <span style={{
//             background: "#e6faf8", color: "#0d9488",
//             fontSize: 13, fontWeight: 700, padding: "6px 16px",
//             borderRadius: 50, fontFamily: "'Plus Jakarta Sans',sans-serif",
//             textTransform: "uppercase", letterSpacing: 0.5,
//           }}>Why TOTC</span>
//           <h2 className="display-font" style={{
//             fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700,
//             color: "#0f1c1b", marginTop: 14, letterSpacing: -0.5,
//           }}>Everything you need to <span style={{ color: "#0d9488" }}>succeed</span></h2>
//           <p style={{
//             color: "#6b7280", fontSize: 16, maxWidth: 520,
//             margin: "16px auto 0", fontFamily: "'Plus Jakarta Sans',sans-serif", lineHeight: 1.7,
//           }}>Designed for modern learners, TOTC brings the classroom experience online — better.</p>
//         </motion.div>

//         <div style={{
//           display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//           gap: 28,
//         }}>
//           {features.map((f, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.12, duration: 0.55 }}
//               className="feature-card"
//               style={{
//                 background: "white", borderRadius: 24,
//                 padding: "36px 28px",
//                 boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
//                 border: "1px solid rgba(0,0,0,0.04)",
//               }}
//             >
//               <div style={{
//                 width: 56, height: 56, borderRadius: 16,
//                 background: f.bg, display: "flex",
//                 alignItems: "center", justifyContent: "center",
//                 marginBottom: 22,
//                 boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
//               }}>{f.icon}</div>
//               <h3 className="display-font" style={{
//                 fontSize: 18, fontWeight: 600, color: "#0f1c1b",
//                 marginBottom: 12, letterSpacing: -0.2,
//               }}>{f.title}</h3>
//               <p style={{
//                 fontSize: 14, color: "#6b7280", lineHeight: 1.7,
//                 fontFamily: "'Plus Jakarta Sans',sans-serif",
//               }}>{f.desc}</p>
//               <div style={{
//                 display: "flex", alignItems: "center", gap: 6,
//                 marginTop: 20, cursor: "pointer",
//               }}>
//                 <span style={{ color: "#0d9488", fontSize: 13, fontWeight: 700, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Learn more</span>
//                 <ArrowRight size={14} color="#0d9488" />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ── COURSES SECTION ── */
// function CoursesSection() {
//   const courses = [
//     { tag: "Design", color: "#ec4899", bg: "#fdf2f8", title: "UX/UI Design Fundamentals", rating: 4.9, students: "12.4k", duration: "8 weeks", instructor: "Sarah Chen" },
//     { tag: "Development", color: "#3b82f6", bg: "#eff6ff", title: "Full Stack Web Development", rating: 4.8, students: "18.2k", duration: "12 weeks", instructor: "Alex Kumar" },
//     { tag: "Business", color: "#f97316", bg: "#fff7ed", title: "Digital Marketing Mastery", rating: 4.7, students: "9.8k", duration: "6 weeks", instructor: "Maya Patel" },
//   ];

//   return (
//     <section style={{ background: "white", padding: "100px 48px" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 20 }}
//         >
//           <div>
//             <span style={{
//               background: "#e6faf8", color: "#0d9488",
//               fontSize: 13, fontWeight: 700, padding: "6px 16px",
//               borderRadius: 50, fontFamily: "'Plus Jakarta Sans',sans-serif",
//               textTransform: "uppercase", letterSpacing: 0.5,
//             }}>Top Courses</span>
//             <h2 className="display-font" style={{
//               fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700,
//               color: "#0f1c1b", marginTop: 14, letterSpacing: -0.5,
//             }}>Browse popular <span style={{ color: "#0d9488" }}>courses</span></h2>
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
//             style={{
//               background: "transparent", border: "2px solid #0d9488",
//               color: "#0d9488", fontWeight: 700, fontSize: 14,
//               padding: "12px 28px", borderRadius: 50,
//               cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif",
//               display: "flex", alignItems: "center", gap: 8,
//               transition: "all 0.2s",
//             }}
//           >View all courses <ArrowRight size={16} /></motion.button>
//         </motion.div>

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
//           {courses.map((c, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.12 }}
//               className="feature-card"
//               style={{
//                 borderRadius: 24, overflow: "hidden",
//                 border: "1px solid rgba(0,0,0,0.06)",
//                 background: "white",
//                 boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
//               }}
//             >
//               {/* Card top banner */}
//               <div style={{
//                 height: 160, background: c.bg,
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 position: "relative",
//               }}>
//                 <div style={{
//                   width: 70, height: 70, borderRadius: 20,
//                   background: c.color, opacity: 0.15,
//                   position: "absolute",
//                 }} />
//                 <BookOpen size={48} color={c.color} style={{ opacity: 0.6 }} />
//                 <div style={{
//                   position: "absolute", top: 16, left: 16,
//                   background: c.color, color: "white",
//                   fontSize: 11, fontWeight: 700, padding: "4px 12px",
//                   borderRadius: 50, fontFamily: "'Plus Jakarta Sans',sans-serif",
//                   letterSpacing: 0.5,
//                 }}>{c.tag}</div>
//               </div>

//               <div style={{ padding: "24px" }}>
//                 <h3 className="display-font" style={{
//                   fontSize: 17, fontWeight: 600, color: "#0f1c1b",
//                   marginBottom: 10, lineHeight: 1.3,
//                 }}>{c.title}</h3>
//                 <p style={{ fontSize: 13, color: "#888", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 18 }}>
//                   by {c.instructor}
//                 </p>
//                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                   <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
//                     <div style={{ display: "flex", gap: 2 }}>
//                       {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="#fbbf24" color="#fbbf24" />)}
//                     </div>
//                     <span style={{ fontSize: 12, fontWeight: 700, color: "#333", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{c.rating}</span>
//                     <span style={{ fontSize: 12, color: "#aaa", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>({c.students})</span>
//                   </div>
//                   <span style={{ fontSize: 12, color: "#888", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{c.duration}</span>
//                 </div>
//                 <motion.button
//                   whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
//                   style={{
//                     width: "100%", marginTop: 18,
//                     background: "linear-gradient(135deg, #0d9488, #14b8a6)",
//                     color: "white", fontWeight: 700, fontSize: 14,
//                     padding: "13px", borderRadius: 14, border: "none",
//                     cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif",
//                     boxShadow: "0 6px 20px rgba(13,148,136,0.3)",
//                     letterSpacing: 0.2,
//                   }}
//                 >Enroll Now</motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ── CTA BANNER ── */
// function CTASection() {
//   return (
//     <section style={{ padding: "80px 48px", background: "#f8fffe" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           style={{
//             background: "linear-gradient(135deg, #0d9488 0%, #0a7a70 50%, #065f58 100%)",
//             borderRadius: 32, padding: "72px 60px",
//             display: "flex", justifyContent: "space-between",
//             alignItems: "center", flexWrap: "wrap", gap: 32,
//             position: "relative", overflow: "hidden",
//           }}
//         >
//           {/* Blobs */}
//           <div style={{ position: "absolute", top: -80, right: -80, width: 280, height: 280, background: "rgba(255,255,255,0.05)", borderRadius: "50%" }} />
//           <div style={{ position: "absolute", bottom: -60, left: 100, width: 200, height: 200, background: "rgba(249,115,22,0.08)", borderRadius: "50%" }} />

//           <div style={{ position: "relative", zIndex: 2 }}>
//             <h2 className="display-font" style={{
//               fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700,
//               color: "white", marginBottom: 12, letterSpacing: -0.5,
//             }}>Start learning for free today</h2>
//             <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 16, fontFamily: "'Plus Jakarta Sans',sans-serif", maxWidth: 440, lineHeight: 1.7 }}>
//               Join over 250,000 students already learning on TOTC. No credit card required.
//             </p>
//             <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
//               {["No setup fees", "Cancel anytime", "Free forever plan"].map((t, i) => (
//                 <div key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
//                   <CheckCircle size={14} color="#34d399" />
//                   <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 500 }}>{t}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div style={{ display: "flex", gap: 14, position: "relative", zIndex: 2, flexWrap: "wrap" }}>
//             <motion.button
//               whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(0,0,0,0.3)" }}
//               whileTap={{ scale: 0.97 }}
//               style={{
//                 background: "white", color: "#0d9488",
//                 fontWeight: 800, fontSize: 15, padding: "15px 36px",
//                 borderRadius: 50, border: "none", cursor: "pointer",
//                 fontFamily: "'Plus Jakarta Sans',sans-serif",
//                 boxShadow: "0 6px 24px rgba(0,0,0,0.15)",
//                 display: "flex", alignItems: "center", gap: 8,
//               }}
//             >Get started free <ArrowRight size={16} /></motion.button>
//             <motion.button
//               whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
//               style={{
//                 background: "rgba(255,255,255,0.12)",
//                 border: "1.5px solid rgba(255,255,255,0.4)",
//                 color: "white", fontWeight: 700, fontSize: 15,
//                 padding: "15px 32px", borderRadius: 50,
//                 cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif",
//                 backdropFilter: "blur(8px)",
//               }}
//             >View pricing</motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// /* ── FOOTER ── */
// function Footer() {
//   return (
//     <footer style={{ background: "#0a1a19", padding: "64px 48px 32px", color: "white" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//         <div style={{
//           display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr",
//           gap: 48, marginBottom: 56,
//         }}>
//           <div>
//             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
//               <div style={{ width: 36, height: 36, background: "#0d9488", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <div style={{ width: 16, height: 16, border: "2.5px solid white", borderRadius: 4, transform: "rotate(12deg)" }} />
//               </div>
//               <span className="display-font" style={{ fontSize: 20, fontWeight: 700, color: "white" }}>TOTC</span>
//             </div>
//             <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.8, fontFamily: "'Plus Jakarta Sans',sans-serif", maxWidth: 280 }}>
//               The most interactive online learning platform. Learn at your pace, from anywhere in the world.
//             </p>
//           </div>
//           {[
//             { title: "Platform", links: ["Courses", "Live Classes", "Certifications", "Community"] },
//             { title: "Company", links: ["About Us", "Careers", "Blog", "Press"] },
//             { title: "Support", links: ["Help Center", "Contact", "Privacy", "Terms"] },
//           ].map((col, i) => (
//             <div key={i}>
//               <h4 style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 20, fontFamily: "'Plus Jakarta Sans',sans-serif", textTransform: "uppercase", letterSpacing: 0.8 }}>{col.title}</h4>
//               {col.links.map(l => (
//                 <a key={l} href="#" style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 14, marginBottom: 12, fontFamily: "'Plus Jakarta Sans',sans-serif", textDecoration: "none", transition: "color 0.2s" }}
//                   onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.85)"}
//                   onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.45)"}
//                 >{l}</a>
//               ))}
//             </div>
//           ))}
//         </div>
//         <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
//           <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>© 2025 TOTC. All rights reserved.</p>
//           <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Made with ❤️ for learners everywhere</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// /* ── ROOT ── */
// export default function TOTCLandingPage() {
//   return (
//     <>
//       <FontLoader />
//       <Navbar />
//       <HeroSection />
//       <StatsSection />
//       <FeaturesSection />
//       <CoursesSection />
//       <CTASection />
//       <Footer />
//     </>
//   );
// }import { useState, useEffect } from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, ArrowRight, Zap, Menu, X, Rocket, Brain } from "lucide-react";
import HeroImg from "../assets/heroimg-removebg-preview.png";
import VisionMission from "./visonmission";

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700;1,800&family=DM+Sans:wght@400;500;600;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html, body, #root { width: 100%; height: 100%; overflow-x: hidden; background: #fff; }

    .dFont { font-family: 'Playfair Display', Georgia, serif; }
    .bFont { font-family: 'DM Sans', sans-serif; }

    @keyframes fA { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-9px)} }
    @keyframes fB { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-6px)} }
    @keyframes fD { 0%,100%{transform:translateY(0px) rotate(0deg)} 50%{transform:translateY(-8px) rotate(3deg)} }
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

    .fa { animation: fA 4s ease-in-out infinite; }
    .fb { animation: fB 5s ease-in-out infinite 0.8s; }
    .fd { animation: fD 4.5s ease-in-out infinite 0.3s; }
    .cursor-blink { animation: blink 1s step-end infinite; }

    .fcard {
      transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.28s ease;
      cursor: default;
    }
    .fcard:hover {
      transform: translateY(-4px) scale(1.02) !important;
      box-shadow: 0 20px 48px rgba(0,0,0,0.16), 0 2px 8px rgba(0,0,0,0.07) !important;
    }

    .nav-link {
      color: rgba(255,255,255,0.78); font-weight: 500; font-size: 14px;
      text-decoration: none; padding: 5px 1px; position: relative;
      transition: color 0.2s ease; font-family: 'DM Sans', sans-serif; letter-spacing: 0.1px;
    }
    .nav-link::after {
      content: ''; position: absolute; bottom: -1px; left: 0;
      width: 0; height: 1.5px; background: white; border-radius: 2px; transition: width 0.24s ease;
    }
    .nav-link:hover { color: white; }
    .nav-link:hover::after { width: 100%; }
    .nav-link.active { color: white; font-weight: 600; }
    .nav-link.active::after { width: 100%; }

    .btn-primary {
      background: white; color: #0a7a70; font-weight: 700; font-size: 13.5px;
      padding: 10px 22px; border-radius: 50px; border: none; cursor: pointer;
      font-family: 'DM Sans', sans-serif; letter-spacing: 0.1px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      display: inline-flex; align-items: center; gap: 6px; white-space: nowrap;
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(0,0,0,0.18); }
    .btn-primary:active { transform: scale(0.97); }

    .btn-ghost {
      background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.36);
      color: white; font-weight: 600; font-size: 13.5px; padding: 10px 22px;
      border-radius: 50px; cursor: pointer; font-family: 'DM Sans', sans-serif; white-space: nowrap;
      transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
    }
    .btn-ghost:hover { background: rgba(255,255,255,0.18); border-color: rgba(255,255,255,0.65); transform: translateY(-2px); }
    .btn-ghost:active { transform: scale(0.97); }

    @media (max-width: 768px) {
      .hero-layout { flex-direction: column !important; padding-left: 24px !important; padding-right: 24px !important; padding-top: 76px !important; padding-bottom: 64px !important; justify-content: center !important; }
      .hero-right { display: none !important; }
      .hero-left { flex: unset !important; width: 100% !important; max-width: 100% !important; padding-right: 0 !important; }
      .hero-heading { font-size: 38px !important; letter-spacing: -0.8px !important; }
      .hero-sub { font-size: 14px !important; max-width: 100% !important; }
      .desktop-nav { display: none !important; }
      .nav-buttons-desktop { display: none !important; }
      .mobile-menu-btn { display: flex !important; }
    }
    @media (min-width: 769px) {
      .mobile-menu-btn { display: none !important; }
      .mobile-nav-drawer { display: none !important; }
    }
  `}</style>
);

/* ── Typewriter ── */
function useTypewriter(lines, speed = 48, pauseMs = 220) {
  const [displayed, setDisplayed] = useState([""]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (lineIdx >= lines.length) { setDone(true); return; }
    const cur = lines[lineIdx];
    if (charIdx < cur.length) {
      const t = setTimeout(() => {
        setDisplayed(prev => { const n = [...prev]; n[lineIdx] = cur.slice(0, charIdx + 1); return n; });
        setCharIdx(c => c + 1);
      }, speed);
      return () => clearTimeout(t);
    } else if (lineIdx < lines.length - 1) {
      const t = setTimeout(() => {
        setLineIdx(l => l + 1); setCharIdx(0);
        setDisplayed(prev => [...prev, ""]);
      }, pauseMs);
      return () => clearTimeout(t);
    } else { setDone(true); }
  }, [charIdx, lineIdx, done]);

  return { displayed, done };
}

/* ── Animated Wave ── */
function AnimatedWave() {
  const paths = [
    "M0,52 C160,92 320,12 480,52 C640,92 800,18 960,52 C1120,86 1300,22 1440,52 L1440,88 L0,88 Z",
    "M0,38 C180,78 360,8 540,44 C720,80 900,12 1080,46 C1260,80 1380,28 1440,38 L1440,88 L0,88 Z",
    "M0,60 C140,20 300,80 460,48 C620,16 800,76 980,44 C1160,12 1320,68 1440,60 L1440,88 L0,88 Z",
    "M0,44 C200,84 380,10 560,50 C740,88 940,14 1120,50 C1260,76 1370,34 1440,44 L1440,88 L0,88 Z",
    "M0,56 C120,16 280,72 460,40 C640,8 820,70 1000,42 C1180,14 1340,66 1440,56 L1440,88 L0,88 Z",
  ];
  const [idx, setIdx] = useState(0);
  const [cur, setCur] = useState(paths[0]);
  const [nxt, setNxt] = useState(paths[1]);
  const [prog, setProg] = useState(0);

  useEffect(() => {
    let raf, start = null;
    const dur = 2600;
    const ease = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    const tick = ts => {
      if (!start) start = ts;
      const raw = Math.min((ts - start) / dur, 1);
      setProg(ease(raw));
      if (raw < 1) { raf = requestAnimationFrame(tick); }
      else {
        const ni = (idx + 1) % paths.length;
        setIdx(ni); setCur(paths[ni]); setNxt(paths[(ni + 1) % paths.length]);
        setProg(0); start = null; raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [idx]);

  const interp = (p1, p2) => {
    const n1 = p1.match(/-?\d+\.?\d*/g).map(Number);
    const n2 = p2.match(/-?\d+\.?\d*/g).map(Number);
    let i = 0;
    return p1.replace(/-?\d+\.?\d*/g, () => {
      const v = n1[i] + (n2[i] - n1[i]) * prog; i++;
      return Math.round(v * 10) / 10;
    });
  };

  return (
    <div style={{ position: "absolute", bottom: -1, left: 0, right: 0, zIndex: 5, pointerEvents: "none" }}>
      <svg viewBox="0 0 1440 88" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: 88 }}>
        <path d={interp(cur, nxt)} fill="white" />
      </svg>
    </div>
  );
}

/* ── Navbar ── */
function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [heroH, setHeroH] = useState(window.innerHeight);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onResize = () => setHeroH(window.innerHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // over hero = teal section; past hero = white section
  const overHero = scrollY < heroH - 60;
  const atTop    = scrollY < 20;

  // derive per-state style tokens
  const navBg     = atTop    ? "transparent"
                  : overHero ? "rgba(10,122,112,0.93)"
                             : "rgba(255,255,255,0.97)";
  const navBorder = atTop    ? "none"
                  : overHero ? "1px solid rgba(255,255,255,0.07)"
                             : "1px solid rgba(0,0,0,0.07)";
  const logoColor  = overHero ? "white"        : "#0a7a70";
  const logoBox    = overHero ? "rgba(255,255,255,0.17)" : "rgba(13,148,136,0.1)";
  const logoBoxBdr = overHero ? "rgba(255,255,255,0.35)" : "rgba(13,148,136,0.25)";
  const logoInner  = overHero ? "white"        : "#0d9488";
  const linkColor  = overHero ? "rgba(255,255,255,0.88)" : "#444";
  const linkHover  = overHero ? "white"        : "#0d9488";
  const linkActive = overHero ? "white"        : "#0a7a70";
  const linkUnder  = overHero ? "white"        : "#0d9488";

  const links = ["Home", "Programs", "Community", "Buildathons", "About"];

  return (
    <>
      {/* inject dynamic nav-link colors */}
      <style>{`
        .nav-link-dyn { color: ${linkColor}; }
        .nav-link-dyn:hover { color: ${linkHover}; }
        .nav-link-dyn::after { background: ${linkUnder}; }
        .nav-link-dyn.active { color: ${linkActive}; }
        .nav-link-dyn.active::after { width: 100%; }
      `}</style>

      <motion.nav
        initial={{ y: -70, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: atTop ? "18px 52px" : "12px 52px",
          background: navBg,
          backdropFilter: atTop ? "none" : "blur(18px)",
          WebkitBackdropFilter: atTop ? "none" : "blur(18px)",
          borderBottom: navBorder,
          transition: "all 0.32s ease",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{
            width: 33, height: 33, borderRadius: 9,
            background: logoBox, border: `2px solid ${logoBoxBdr}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.32s ease",
          }}>
            <div style={{ width: 13, height: 13, border: `2.5px solid ${logoInner}`, borderRadius: 3, transform: "rotate(12deg)", transition: "all 0.32s ease" }} />
          </div>
          <span className="dFont" style={{ color: logoColor, fontWeight: 800, fontSize: 18, letterSpacing: 0.5, transition: "color 0.32s ease" }}>VybeAI</span>
        </div>

        {/* Desktop links */}
        <ul className="desktop-nav" style={{ display: "flex", gap: 32, listStyle: "none" }}>
          {links.map((item, i) => (
            <motion.li key={item} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 * i + 0.18 }}>
              <a href="#" className={`nav-link nav-link-dyn${item === "Home" ? " active" : ""}`}>{item}</a>
            </motion.li>
          ))}
        </ul>

        {/* Desktop buttons */}
        <div className="nav-buttons-desktop" style={{ display: "flex", gap: 9 }}>
          {overHero ? (
            <>
              <button className="btn-ghost" style={{ padding: "9px 20px", fontSize: 13 }}>Explore Programs</button>
              <button className="btn-primary" style={{ padding: "9px 20px", fontSize: 13 }}>Start Building <ArrowRight size={13} /></button>
            </>
          ) : (
            <>
              <button style={{
                background: "transparent", border: "1.5px solid rgba(13,148,136,0.35)",
                color: "#0d9488", fontWeight: 600, fontSize: 13, padding: "9px 20px",
                borderRadius: 50, cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.2s ease", whiteSpace: "nowrap",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(13,148,136,0.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
              >Explore Programs</button>
              <button style={{
                background: "linear-gradient(135deg,#0d9488,#0a7a70)",
                color: "white", fontWeight: 700, fontSize: 13, padding: "9px 20px",
                borderRadius: 50, border: "none", cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                display: "inline-flex", alignItems: "center", gap: 6,
                boxShadow: "0 4px 14px rgba(13,148,136,0.3)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 22px rgba(13,148,136,0.38)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 14px rgba(13,148,136,0.3)"; }}
              >Start Building <ArrowRight size={13} /></button>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button className="mobile-menu-btn" onClick={() => setOpen(o => !o)}
          style={{
            background: overHero ? "rgba(255,255,255,0.13)" : "rgba(13,148,136,0.08)",
            border: overHero ? "1.5px solid rgba(255,255,255,0.3)" : "1.5px solid rgba(13,148,136,0.2)",
            borderRadius: 9, width: 39, height: 39,
            alignItems: "center", justifyContent: "center",
            cursor: "pointer", transition: "background 0.2s",
          }}>
          {open
            ? <X size={19} color={overHero ? "white" : "#0d9488"} />
            : <Menu size={19} color={overHero ? "white" : "#0d9488"} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22 }}
            style={{
              position: "fixed", top: 58, left: 10, right: 10, zIndex: 99,
              background: "rgba(9,110,100,0.97)", backdropFilter: "blur(22px)",
              borderRadius: 16, border: "1px solid rgba(255,255,255,0.13)",
              padding: "14px 18px 18px", boxShadow: "0 18px 50px rgba(0,0,0,0.25)",
            }}
          >
            <ul style={{ listStyle: "none", marginBottom: 14 }}>
              {links.map((item, i) => (
                <motion.li key={item}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <a href="#" className="bFont"
                    style={{
                      display: "block", padding: "12px 4px",
                      color: item === "Home" ? "white" : "rgba(255,255,255,0.78)",
                      fontWeight: item === "Home" ? 700 : 500, fontSize: 15, textDecoration: "none",
                    }}
                    onClick={() => setOpen(false)}>{item}</a>
                </motion.li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: 9 }}>
              <button className="btn-ghost" style={{ flex: 1, fontSize: 13.5, padding: "10px 14px" }}>Explore Programs</button>
              <button className="btn-primary" style={{ flex: 1, justifyContent: "center", fontSize: 13.5, padding: "10px 14px" }}>Start Building</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Solid off-white card base — premium, high contrast ── */
const cardBase = {
  background: "#F4F3EF",
  border: "1px solid rgba(0,0,0,0.06)",
  boxShadow: "0 6px 24px rgba(0,0,0,0.13), 0 1px 4px rgba(0,0,0,0.06)",
};

/* ── Connector line ── */
function Connector({ side = "right", delay = 1.6, width = 44 }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay, duration: 0.42, ease: "easeOut" }}
      style={{
        position: "absolute",
        ...(side === "right"
          ? { right: -width, transformOrigin: "left" }
          : { left: -width, transformOrigin: "right" }),
        top: "50%",
        transform: "translateY(-50%)",
        width,
        height: 1.5,
        background: side === "right"
          ? "linear-gradient(to right, rgba(0,0,0,0.18), rgba(0,0,0,0))"
          : "linear-gradient(to left, rgba(0,0,0,0.18), rgba(0,0,0,0))",
        borderRadius: 2,
        pointerEvents: "none",
      }}
    />
  );
}

/* ── Left column cards ── */
function CardAI() {
  return (
    <motion.div className="fa fcard"
      initial={{ opacity: 0, x: -30, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: 1.05, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{
        ...cardBase, borderRadius: 16, padding: "12px 16px",
        display: "flex", alignItems: "center", gap: 10, minWidth: 190, position: "relative",
      }}
    >
      <Connector side="right" delay={1.5} width={44} />
      <div style={{
        width: 36, height: 36, borderRadius: 10, flexShrink: 0,
        background: "#ede9fe", border: "1px solid #c4b5fd",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Brain size={16} color="#5b21b6" />
      </div>
      <div>
        <p className="dFont" style={{ fontSize: 12.5, fontWeight: 700, color: "#111", fontStyle: "italic", lineHeight: 1.2 }}>AI-Powered</p>
        <p className="bFont" style={{ fontSize: 10.5, color: "#666", fontWeight: 500 }}>Learning Experience</p>
      </div>
    </motion.div>
  );
}

function CardLearn() {
  return (
    <motion.div className="fb fcard"
      initial={{ opacity: 0, x: -30, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: 1.25, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{
        ...cardBase, borderRadius: 16, padding: "14px 18px",
        minWidth: 140, position: "relative",
      }}
    >
      <Connector side="right" delay={1.68} width={44} />
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {["Learn.", "Build.", "Launch."].map((word, i) => (
          <p key={word} className="dFont" style={{
            fontSize: i === 0 ? 14 : i === 1 ? 16 : 13,
            fontWeight: 800, fontStyle: "italic",
            color: i === 0 ? "#0d9488" : i === 1 ? "#111" : "#f97316",
            lineHeight: 1.15,
          }}>{word}</p>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Right column cards ── */
function CardBuild() {
  return (
    <motion.div className="fb fcard"
      initial={{ opacity: 0, x: 30, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: 1.15, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{
        ...cardBase, borderRadius: 16, padding: "12px 16px",
        display: "flex", alignItems: "center", gap: 10, minWidth: 190, position: "relative",
      }}
    >
      <Connector side="left" delay={1.58} width={44} />
      <div style={{
        width: 38, height: 38, borderRadius: 10, flexShrink: 0,
        background: "#fff1e6", border: "1px solid #fcd9b0",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Rocket size={16} color="#ea6800" />
      </div>
      <div>
        <p className="bFont" style={{ fontSize: 12, fontWeight: 700, color: "#111" }}>Start Building</p>
        <p className="bFont" style={{ fontSize: 10.5, color: "#777" }}>Modern Projects 🚀</p>
      </div>
    </motion.div>
  );
}

function BadgeInnovation() {
  return (
    <motion.div className="fa fcard"
      initial={{ opacity: 0, x: 30, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: 1.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        ...cardBase, borderRadius: 50, padding: "8px 16px",
        display: "flex", alignItems: "center", gap: 7, position: "relative",
      }}
    >
      <Connector side="left" delay={1.78} width={44} />
      <Zap size={12} fill="#fbbf24" color="#fbbf24" />
      <span className="bFont" style={{ fontSize: 11.5, fontWeight: 700, color: "#111", whiteSpace: "nowrap" }}>Innovation First ⚡</span>
    </motion.div>
  );
}

function BadgeChart() {
  return (
    <motion.div className="fd"
      initial={{ opacity: 0, scale: 0, rotate: -20 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 1.45, duration: 0.44, type: "spring", stiffness: 200 }}
      style={{
        width: 42, height: 42,
        background: "#ec4899",
        border: "none",
        borderRadius: 12,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative",
        boxShadow: "0 4px 14px rgba(236,72,153,0.35)",
      }}
    >
      <BarChart3 size={19} color="white" />
    </motion.div>
  );
}

/* ── Typewriter Headline ── */
function TypewriterHeadline() {
  const lines = ["Build Beyond", "Limits with AI", "& Innovation"];
  const { displayed, done } = useTypewriter(lines, 50, 200);

  return (
    <div className="dFont hero-heading" style={{
      fontSize: "clamp(36px,3.8vw,54px)", fontWeight: 800, fontStyle: "italic",
      lineHeight: 1.12, letterSpacing: "-1px", marginBottom: 18, textAlign: "left", color: "white",
    }}>
      {lines.map((line, i) => (
        <div key={i} style={{ minHeight: "1.18em", display: "flex", alignItems: "center" }}>
          <span style={{ color: i === 0 ? "#f97316" : i === 1 ? "white" : "rgba(255,255,255,0.88)" }}>
            {displayed[i] || ""}
          </span>
          {i === displayed.length - 1 && !done && (
            <span className="cursor-blink" style={{
              display: "inline-block", width: 2.5, height: "0.75em",
              background: i === 0 ? "#f97316" : "rgba(255,255,255,0.8)",
              marginLeft: 4, borderRadius: 2, verticalAlign: "middle",
            }} />
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section style={{
      width: "100vw", height: "100vh", maxHeight: "100vh",
      background: "linear-gradient(148deg,#1cc9b7 0%,#13b0a0 38%,#0d9488 72%,#0a7a70 100%)",
      position: "relative", overflow: "hidden", display: "flex", flexDirection: "column",
    }}>
      {/* Blobs */}
      <div style={{ position: "absolute", top: -100, right: "26%", width: 300, height: 300, background: "rgba(255,255,255,0.05)", borderRadius: "50%", filter: "blur(50px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 80, left: -40, width: 220, height: 220, background: "rgba(249,115,22,0.07)", borderRadius: "50%", filter: "blur(55px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "35%", right: "7%", width: 150, height: 150, background: "rgba(236,72,153,0.07)", borderRadius: "50%", filter: "blur(45px)", pointerEvents: "none" }} />
      {/* Grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.028) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.028) 1px,transparent 1px)",
        backgroundSize: "58px 58px",
      }} />

      {/* ── Main layout ── */}
      <div className="hero-layout" style={{
        flex: 1, width: "100%", maxWidth: 1200, margin: "0 auto",
        padding: "0 52px", paddingTop: 70, paddingBottom: 60,
        display: "flex", alignItems: "center", gap: 0,
        position: "relative", zIndex: 10,
      }}>

        {/* LEFT text */}
        <div className="hero-left" style={{ flex: "0 0 46%", maxWidth: 520, paddingRight: 24 }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28, duration: 0.36 }}>
            <TypewriterHeadline />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.44, duration: 0.46 }}
            className="bFont hero-sub"
            style={{ color: "rgba(255,255,255,0.7)", fontSize: 13.5, lineHeight: 1.75, maxWidth: 400, marginBottom: 28, textAlign: "left" }}>
            A modern creator ecosystem helping students, beginners, and future innovators learn, build,
            experiment, and grow using AI-powered workflows, modern technology, and practical creation experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.54, duration: 0.44 }}
            style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28, flexWrap: "wrap" }}>
            <button className="btn-primary">Start Building <ArrowRight size={14} /></button>
            <button className="btn-ghost">Explore Programs</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.76 }}
            style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 28, height: 1.5, background: "rgba(255,255,255,0.35)", borderRadius: 2 }} />
            <span className="bFont" style={{ color: "rgba(255,255,255,0.55)", fontSize: 11.5, letterSpacing: 0.4 }}>
              Empowering the next generation of creators & innovators
            </span>
          </motion.div>
        </div>

        {/* RIGHT — image + flanking cards, hidden on mobile */}
        <div className="hero-right" style={{
          flex: "0 0 54%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
          position: "relative",
          height: 520,
        }}>

          {/* LEFT card column */}
          <div style={{
            display: "flex", flexDirection: "column", gap: 18,
            alignItems: "flex-end", zIndex: 20,
            flexShrink: 0,
          }}>
            <CardAI />
            <CardLearn />
          </div>

          {/* IMAGE — centre, no container */}
          <motion.img
            src={HeroImg}
            alt="Hero"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.34, duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
            style={{
              height: "105%",
              width: "auto",
              maxWidth: "none",
              objectFit: "contain",
              display: "block",
              flexShrink: 0,
              zIndex: 10,
              filter: "brightness(1.03) contrast(1.03)",
              position: "relative",
              bottom: 0,
              alignSelf: "flex-end",
            }}
          />

          {/* RIGHT card column */}
          <div style={{
            display: "flex", flexDirection: "column", gap: 18,
            alignItems: "flex-start", zIndex: 20,
            flexShrink: 0,
          }}>
            <BadgeChart />
            <CardBuild />
            <BadgeInnovation />
          </div>
        </div>
      </div>

      <AnimatedWave />
    </section>
  );
}

export default function VybeAILanding() {
  return (
    <div style={{ width: "100%", margin: 0, padding: 0, background: "#fff" }}>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <VisionMission />
    </div>
  );
}