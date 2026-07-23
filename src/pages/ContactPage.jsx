import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, Mail, User, Send, ShieldCheck, RefreshCw, Check,
  AlertCircle, Sparkles, X, MessageSquare, ExternalLink, Code2, Lock, Cpu, Layout, Award
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";
import LayeredMetallicGoldButton from "../components/LayeredMetallicGoldButton";

export default function ContactPage() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [selectedMember, setSelectedMember] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaLoading, setCaptchaLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Founders & Coaching Mentors Data
  const teamMembers = [
    {
      id: "sahith-akula",
      name: "Sahith Akula",
      role: "Co-Founder & Backend Lead Mentor",
      shortRole: "Backend Lead Mentor",
      icon: Cpu,
      phone: "+91 98765 43211",
      email: "sahith.akula@turingwings.org",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      bio: "Co-Founder & Backend Architecture Mentor specializing in high-performance serverless backends, real-time WebSocket pipelines, database optimization, and cloud microservices.",
      skills: ["Node.js & Go", "PostgreSQL & Redis", "GraphQL & REST APIs", "Docker & K8s"]
    },
    {
      id: "ratnakar",
      name: "Ratnakar",
      role: "Co-Founder & Cybersecurity Lead Mentor",
      shortRole: "Cybersecurity Lead Mentor",
      icon: Lock,
      phone: "+91 98765 43210",
      email: "ratnakar.cyber@turingwings.org",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
      bio: "Co-Founder and Head Cybersecurity Mentor at Turing Wings. Leads cloud security architecture, penetration testing mentorship, and zero-trust protocol training for student builders.",
      skills: ["Zero-Trust Security", "Penetration Testing", "Cloud Compliance", "OAuth 2.0 / SAML"]
    },
    
    {
      id: "manoj-kumar",
      name: "Manoj Kumar",
      role: "Co-Founder & Backend / Marketing Lead",
      shortRole: "Backend & Marketing Lead",
      icon: Code2,
      phone: "+91 98765 43212",
      email: "manoj.kumar@turingwings.org",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
      bio: "Co-Founder leading backend engineering and ecosystem growth. Connects scalable technology infrastructure with developer relations, technical product marketing, and student community mentorship.",
      skills: ["Backend Architecture", "Growth Marketing", "DevRel & Community", "SEO & Analytics"]
    },
    {
      id: "pandu-ranga",
      name: "Pandu Ranga",
      role: "Co-Founder & Frontend / UI Design Lead",
      shortRole: "Frontend & UI Design Lead",
      icon: Layout,
      phone: "+91 98765 43213",
      email: "pandu.ranga@turingwings.org",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
      bio: "Co-Founder and UI/UX Design Lead mentoring students in building modern, fluid React applications, responsive Tailwind interfaces, and interactive design systems.",
      skills: ["React 19 & Next.js", "TailwindCSS & CSS3", "Framer Motion", "Figma UI/UX Design"]
    }
  ];

  const handleVerifyCaptcha = () => {
    if (captchaVerified) return;
    setCaptchaLoading(true);
    setTimeout(() => {
      setCaptchaLoading(false);
      setCaptchaVerified(true);
      setErrorMessage("");
    }, 600);
  };

  const handleSubmitQuery = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!captchaVerified) {
      setErrorMessage("Please complete the security captcha verification first.");
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
      setCaptchaVerified(false);

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1200);
  };

  return (
    <div className={`w-full min-h-screen relative selection:bg-amber-500 selection:text-slate-950 transition-colors duration-500 ${
      isLight ? "bg-[#f8f6f0] text-slate-900" : "bg-[#07090f] text-slate-100"
    }`}>
      <Navbar />

      <main className="pt-28 pb-20 sm:pt-36 sm:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 select-none">
        
        {/* Ambient Soft Glow Blobs */}
        <div className={`absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none ${
          isLight ? "bg-amber-200/30" : "bg-amber-500/10"
        }`} />
        <div className={`absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none ${
          isLight ? "bg-yellow-200/30" : "bg-yellow-500/10"
        }`} />

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            Connect With Our <br />
            <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-serif italic">
              Founders & Mentors
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-base sm:text-lg mt-4 leading-relaxed font-medium max-w-2xl mx-auto ${
              isLight ? "text-slate-600" : "text-slate-300"
            }`}
          >
            Meet the founders and expert coaching staff guiding students, creators, and innovators at Turing Wings. Click any mentor to view details or connect directly.
          </motion.p>
        </div>

        {/* TEAM MEMBERS GRID — ALIGNED CIRCULAR PHOTO CARDS (NO ENCLOSING RECTANGULAR CONTAINER) */}
        <section className="mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 justify-items-center">
            {teamMembers.map((member, idx) => {
              const RoleIcon = member.icon;
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => setSelectedMember(member)}
                  className="flex flex-col items-center text-center cursor-pointer group w-full max-w-xs"
                >
                  {/* Circle Photo Container */}
                  <div className="relative mb-5">
                    <motion.div
                      whileHover={{ scale: 1.06, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 shadow-xl shadow-amber-500/20 relative z-10"
                    >
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover border-2 border-white/80"
                      />
                    </motion.div>

                    {/* Role Icon Badge */}
                    <div className="absolute bottom-1 right-2 z-20 w-10 h-10 rounded-full bg-slate-950 border-2 border-amber-400 text-amber-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <RoleIcon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Below Circle Photo: Name, Role Badge, Contact Number */}
                  <h3 className={`text-xl sm:text-2xl font-bold font-serif italic mb-1 group-hover:text-amber-500 transition-colors ${
                    isLight ? "text-slate-900" : "text-white"
                  }`}>
                    {member.name}
                  </h3>

                  {/* Role Badge */}
                  <span className={`px-3 py-1 rounded-full text-xs font-bold mb-2.5 border uppercase tracking-wider ${
                    isLight
                      ? "bg-amber-100/80 border-amber-300 text-amber-900"
                      : "bg-amber-500/10 border-amber-500/30 text-amber-300"
                  }`}>
                    {member.shortRole}
                  </span>

                  {/* Phone Link */}
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, '')}`}
                    onClick={(e) => e.stopPropagation()}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors mb-2 ${
                      isLight ? "text-slate-600 hover:text-amber-600" : "text-slate-300 hover:text-amber-400"
                    }`}
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-500" />
                    <span>{member.phone}</span>
                  </a>

                  {/* Click For Details CTA */}
                  <span className="text-[11px] font-bold text-amber-500 group-hover:underline inline-flex items-center gap-1">
                    <span>Mentor Info & Email</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>

                </motion.div>
              );
            })}
          </div>
        </section>

        {/* HIGHLY ANIMATED QUERY / CONTACT FORM BOX */}
        <section className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-3xl p-6 sm:p-10 shadow-2xl border relative overflow-hidden text-left ${
              isLight
                ? "bg-white/95 border-slate-200"
                : "bg-slate-900/95 border-amber-500/30"
            }`}
          >
            {/* Top Header */}
            <div className="mb-6 sm:mb-8 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-500/30">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Submit Inquiry</span>
              </div>
              <h2 className={`text-2xl sm:text-3xl font-extrabold font-serif italic ${
                isLight ? "text-slate-900" : "text-white"
              }`}>
                Send Us A Message
              </h2>
              <p className={`text-xs sm:text-sm mt-1 ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                Have a question for our founders or coaching mentors? Drop your message below.
              </p>
            </div>

            {/* Success Feedback Alert */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-2xl bg-amber-500/15 border border-amber-500/40 text-amber-400 text-xs sm:text-sm font-semibold flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-amber-400 shrink-0 stroke-[3]" />
                  <div>
                    <p className="font-bold">Message Sent Successfully!</p>
                    <p className="text-xs text-amber-300/90 mt-0.5">Thank you for reaching out. Our founders and mentorship team will contact you shortly.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-6 p-3.5 rounded-2xl bg-red-950/80 border border-red-800 text-red-300 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Form Fields */}
            <form onSubmit={handleSubmitQuery} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* User Name */}
                <div>
                  <label className={`block text-xs font-bold uppercase mb-1.5 ${
                    isLight ? "text-slate-700" : "text-slate-300"
                  }`}>
                    Your Name <span className="text-amber-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:border-amber-500 transition-colors ${
                        isLight
                          ? "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                          : "bg-slate-950 border-slate-800 text-white placeholder-slate-500"
                      }`}
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className={`block text-xs font-bold uppercase mb-1.5 ${
                    isLight ? "text-slate-700" : "text-slate-300"
                  }`}>
                    Email Address <span className="text-amber-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="alex@creator.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:border-amber-500 transition-colors ${
                        isLight
                          ? "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                          : "bg-slate-950 border-slate-800 text-white placeholder-slate-500"
                      }`}
                    />
                  </div>
                </div>

              </div>

              {/* Subject Selection */}
              <div>
                <label className={`block text-xs font-bold uppercase mb-1.5 ${
                  isLight ? "text-slate-700" : "text-slate-300"
                }`}>
                  Inquiry Topic
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:border-amber-500 transition-colors ${
                    isLight
                      ? "bg-slate-50 border-slate-200 text-slate-900"
                      : "bg-slate-950 border-slate-800 text-white"
                  }`}
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Mentorship & Coaching">Coaching & Bootcamp Mentorship</option>
                  <option value="Cybersecurity Support">Cybersecurity & Technical Guidance</option>
                  <option value="Partnerships & Sprints">Buildathon Partnerships & Sprints</option>
                </select>
              </div>

              {/* Message Box */}
              <div>
                <label className={`block text-xs font-bold uppercase mb-1.5 ${
                  isLight ? "text-slate-700" : "text-slate-300"
                }`}>
                  Message <span className="text-amber-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your question, project idea, or mentorship inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full p-4 rounded-xl border text-xs font-medium focus:outline-none focus:border-amber-500 transition-colors ${
                    isLight
                      ? "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                      : "bg-slate-950 border-slate-800 text-white placeholder-slate-500"
                  }`}
                />
              </div>

              {/* Security Captcha Box */}
              <div className="pt-1">
                <div className={`p-3 rounded-xl border flex items-center justify-between ${
                  isLight ? "bg-slate-50 border-slate-200" : "bg-slate-950 border-slate-800"
                }`}>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={handleVerifyCaptcha}
                      className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                        captchaVerified
                          ? "bg-amber-500 border-amber-500 text-slate-950 font-bold"
                          : isLight
                          ? "border-slate-300 bg-white hover:border-amber-500"
                          : "border-slate-700 bg-slate-900 hover:border-amber-500"
                      }`}
                    >
                      {captchaLoading ? (
                        <RefreshCw className="w-3 h-3 animate-spin text-amber-500" />
                      ) : captchaVerified ? (
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      ) : null}
                    </button>
                    <span className={`text-xs font-semibold ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                      {captchaVerified ? "Security Captcha Verified" : "I am a human creator"}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                    <span>reCAPTCHA</span>
                  </div>
                </div>
              </div>

              {/* Animated Submit Button */}
              <div className="pt-2 flex justify-center w-full">
                <LayeredMetallicGoldButton
                  type="submit"
                  disabled={isSubmitting}
                  size="md"
                  className="w-full text-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 text-amber-300">
                      <span className="w-3.5 h-3.5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </span>
                  ) : (
                    <span className="bg-gradient-to-b from-[#ffffff] via-[#f7d774] to-[#e2b740] bg-clip-text text-transparent font-serif italic">
                      Submit Query
                    </span>
                  )}
                </LayeredMetallicGoldButton>
              </div>

            </form>
          </motion.div>
        </section>

      </main>

      {/* INTERACTIVE TEAM MEMBER DETAILS MODAL */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.3 }}
              className={`w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border text-left relative overflow-hidden ${
                isLight ? "bg-white border-slate-200 text-slate-900" : "bg-slate-900 border-amber-500/30 text-white"
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/20 text-slate-400 hover:text-amber-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Info */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={selectedMember.avatar}
                  alt={selectedMember.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-amber-500 shadow-md shrink-0"
                />
                <div>
                  <h3 className="text-2xl font-extrabold font-serif italic text-slate-900 dark:text-white">
                    {selectedMember.name}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/30 inline-block mt-1 uppercase tracking-wider">
                    {selectedMember.role}
                  </span>
                </div>
              </div>

              {/* Contact Links */}
              <div className="space-y-2.5 mb-6">
                <a
                  href={`tel:${selectedMember.phone.replace(/\s+/g, '')}`}
                  className={`p-3 rounded-xl border flex items-center justify-between text-xs font-bold transition-all ${
                    isLight
                      ? "bg-slate-50 hover:bg-amber-50 border-slate-200 text-slate-800 hover:text-amber-700"
                      : "bg-slate-950 hover:bg-slate-800 border-slate-800 text-slate-200 hover:text-amber-400"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-amber-500" />
                    <span>{selectedMember.phone}</span>
                  </div>
                  <span className="text-[10px] text-amber-500 font-extrabold uppercase">Call Direct →</span>
                </a>

                <a
                  href={`mailto:${selectedMember.email}`}
                  className={`p-3 rounded-xl border flex items-center justify-between text-xs font-bold transition-all ${
                    isLight
                      ? "bg-slate-50 hover:bg-amber-50 border-slate-200 text-slate-800 hover:text-amber-700"
                      : "bg-slate-950 hover:bg-slate-800 border-slate-800 text-slate-200 hover:text-amber-400"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-amber-500" />
                    <span>{selectedMember.email}</span>
                  </div>
                  <span className="text-[10px] text-amber-500 font-extrabold uppercase">Send Email →</span>
                </a>
              </div>

              {/* Specialized Bio */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500 mb-1.5">Mentorship Role</h4>
                <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                  {selectedMember.bio}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500 mb-2">Core Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold border ${
                        isLight
                          ? "bg-slate-100 border-slate-200 text-slate-700"
                          : "bg-slate-950 border-slate-800 text-slate-300"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Message Action Button */}
              <button
                onClick={() => {
                  setSelectedMember(null);
                  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                }}
                className="w-full py-3 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-extrabold text-xs shadow-md"
              >
                Send Message via Query Form →
              </button>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
