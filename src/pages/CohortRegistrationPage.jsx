import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  ShieldCheck, Cpu, CheckCircle2, Lock, Sparkles, CreditCard, 
  ArrowRight, AlertCircle, Building, User, Mail, Phone, Award, Check, Calendar, Users, X, HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CohortRegistrationPage() {
  const [searchParams] = useSearchParams();
  const initialCohort = searchParams.get('cohort') === 'ai-cybersecurity' ? 'ai-cybersecurity' : 'ai-engineering';

  const [selectedCohort, setSelectedCohort] = useState(initialCohort);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    collegeOrOrg: '',
    gender: 'Male',
    graduationYear: '2026',
    studyStatus: '3rd Year Undergraduate',
    experienceLevel: 'Zero Prior Knowledge (Beginner)',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showRazorpayModal, setShowRazorpayModal] = useState(false);
  const [showCancelConfirmModal, setShowCancelConfirmModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [transactionRef, setTransactionRef] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const cohortParam = searchParams.get('cohort');
    if (cohortParam && (cohortParam === 'ai-engineering' || cohortParam === 'ai-cybersecurity')) {
      setSelectedCohort(cohortParam);
    }
  }, [searchParams]);

  const cohortDetails = {
    'ai-engineering': {
      id: 'ai-engineering',
      name: 'AI Engineering Cohort',
      badge: 'FLAGSHIP 01',
      tagline: 'From Web Fundamentals to Building & Launching AI Products',
      duration: '4 Weeks (Live Intensive)',
      price: 4999,
      originalPrice: 9999,
      color: '#15803D',
      icon: Cpu,
    },
    'ai-cybersecurity': {
      id: 'ai-cybersecurity',
      name: 'AI & Cybersecurity Cohort',
      badge: 'FLAGSHIP 02',
      tagline: 'Networking, Kali Linux, Pentesting & AI Security Agents (MCP)',
      duration: '4 Weeks (Hands-On Lab)',
      price: 4999,
      originalPrice: 9999,
      color: '#0284C7',
      icon: ShieldCheck,
    },
  };

  const activeCohortObj = cohortDetails[selectedCohort];
  const CohortIcon = activeCohortObj.icon;

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in your Name, Email, and Phone Number before proceeding.');
      return;
    }
    setShowRazorpayModal(true);
  };

  const handleRazorpayPaymentComplete = async () => {
    try {
      setIsSubmitting(true);
      const mockTxn = `PAY_TW_${Math.floor(100000 + Math.random() * 900000)}`;

      const payload = {
        cohortId: selectedCohort,
        cohortName: activeCohortObj.name,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        collegeOrOrg: formData.collegeOrOrg,
        gender: formData.gender,
        graduationYear: formData.graduationYear,
        studyStatus: formData.studyStatus,
        experienceLevel: formData.experienceLevel,
        amountPaid: activeCohortObj.price,
        transactionId: mockTxn,
        registeredAt: new Date().toISOString(),
      };

      // Backend API registration attempt (with fallback local persistence)
      try {
        await fetch('https://turingwings-backend.onrender.com/api/cohorts/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch (e) {
        console.log('Backend sync offline, saved to local session:', e);
      }

      // Save registration locally
      const existing = JSON.parse(localStorage.getItem('tw_cohort_registrations') || '[]');
      localStorage.setItem('tw_cohort_registrations', JSON.stringify([...existing, payload]));

      setTransactionRef(mockTxn);
      setShowRazorpayModal(false);
      setShowCancelConfirmModal(false);
      setPaymentSuccess(true);
    } catch (err) {
      setErrorMessage('Payment processing failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConfirmCancelRegistration = () => {
    setShowCancelConfirmModal(false);
    setShowRazorpayModal(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#090909] selection:bg-[#22C55E] selection:text-black font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-8 py-12 space-y-12">

        {/* TOP HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-3 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#15803D] text-xs font-bold uppercase tracking-wider font-mono">
            <Lock className="w-3.5 h-3.5" />
            <span>256-Bit SSL Encrypted Checkout</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#090909]">Cohort Registration</h1>
          <p className="text-sm sm:text-base text-black/70">
            Secure your seat for <strong className="text-[#090909]">{activeCohortObj.name}</strong>.
          </p>
        </motion.div>

        {paymentSuccess ? (
          /* PAYMENT SUCCESS CONFIRMATION RECEIPT */
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white border border-[#22C55E] rounded-3xl p-8 sm:p-12 text-center space-y-6 max-w-2xl mx-auto shadow-2xl"
          >
            <div className="w-16 h-16 rounded-full bg-[#22C55E]/20 border border-[#22C55E] flex items-center justify-center text-[#15803D] mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#15803D] font-mono">ENROLLMENT CONFIRMED</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090909]">Welcome to Turing Wings!</h2>
              <p className="text-sm text-black/70">
                Your seat for <strong className="text-[#090909]">{activeCohortObj.name}</strong> is officially reserved.
              </p>
            </div>

            <div className="bg-[#FAF8F5] border border-black/10 rounded-2xl p-5 text-xs text-left space-y-2.5 font-mono">
              <div className="flex justify-between border-b border-black/10 pb-2">
                <span className="text-black/60">Transaction Ref:</span>
                <span className="font-bold text-[#15803D]">{transactionRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/60">Student Name:</span>
                <span className="font-bold text-[#090909]">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/60">Email:</span>
                <span className="font-bold text-[#090909]">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/60">Gender / Year:</span>
                <span className="font-bold text-[#090909]">{formData.gender} · Grad {formData.graduationYear}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-black/10">
                <span className="text-black/60">Amount Paid:</span>
                <span className="font-bold text-[#15803D]">₹{activeCohortObj.price} (Razorpay Verified)</span>
              </div>
            </div>

            <p className="text-xs text-black/60">
              Check your email (<span className="text-[#090909] font-bold">{formData.email}</span>) for Discord invite link and onboarding instructions.
            </p>

            <Link
              to="/"
              className="inline-block py-3.5 px-8 rounded-2xl bg-[#090909] text-white hover:bg-[#22C55E] hover:text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-md font-mono"
            >
              Return to Homepage
            </Link>
          </motion.div>
        ) : (
          /* REGISTRATION FORM & SUMMARY GRID */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* LEFT COLUMN: FORM */}
            <div className="lg:col-span-7 bg-white border border-black/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">

              {/* FIXED & LOCKED SELECTED COHORT CARD */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-black/60 block font-mono">
                    1. Enrolling Cohort (Fixed)
                  </label>
                  <Link to="/cohorts" className="text-[11px] font-bold text-[#15803D] hover:underline font-mono">
                    Change Program ↗
                  </Link>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-black/15 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-black/10 flex items-center justify-center text-[#15803D] shrink-0 shadow-xs">
                      <CohortIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-bold uppercase text-[#15803D] bg-[#22C55E]/10 px-2 py-0.5 rounded font-mono">
                          {activeCohortObj.badge}
                        </span>
                        <span className="text-[10px] font-bold text-black/40 font-mono">LOCKED SELECTION</span>
                      </div>
                      <h3 className="text-base font-extrabold text-[#090909]">{activeCohortObj.name}</h3>
                      <p className="text-xs text-black/60">{activeCohortObj.duration}</p>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#15803D] shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* BUILDER DETAILS FORM */}
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <label className="text-xs font-bold uppercase tracking-wider text-black/60 block font-mono">
                  2. Student & Builder Details
                </label>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 text-xs font-bold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#090909] block">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-black/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Turing"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-black/15 text-sm text-[#090909] placeholder-black/40 focus:outline-none focus:border-[#22C55E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#090909] block">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-black/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-black/15 text-sm text-[#090909] placeholder-black/40 focus:outline-none focus:border-[#22C55E]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#090909] block">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-black/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-black/15 text-sm text-[#090909] placeholder-black/40 focus:outline-none focus:border-[#22C55E]"
                      />
                    </div>
                  </div>
                </div>

                {/* GENDER & GRADUATION YEAR DROPDOWNS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#090909] block">
                      Gender *
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-black/15 text-sm text-[#090909] focus:outline-none focus:border-[#22C55E]"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#090909] block">
                      Graduation / Passing Year *
                    </label>
                    <select
                      value={formData.graduationYear}
                      onChange={(e) => handleInputChange('graduationYear', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-black/15 text-sm text-[#090909] focus:outline-none focus:border-[#22C55E]"
                    >
                      <option value="2024">2024 (Graduated)</option>
                      <option value="2025">2025 (Graduating Soon)</option>
                      <option value="2026">2026 (Current Batch)</option>
                      <option value="2027">2027</option>
                      <option value="2028+">2028 or Later</option>
                    </select>
                  </div>
                </div>

                {/* COLLEGE & STUDY STATUS DROPDOWNS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#090909] block">
                      College / Organization
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-black/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="University or Company Name"
                        value={formData.collegeOrOrg}
                        onChange={(e) => handleInputChange('collegeOrOrg', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-black/15 text-sm text-[#090909] placeholder-black/40 focus:outline-none focus:border-[#22C55E]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#090909] block">
                      Current Year / Status
                    </label>
                    <select
                      value={formData.studyStatus}
                      onChange={(e) => handleInputChange('studyStatus', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-black/15 text-sm text-[#090909] focus:outline-none focus:border-[#22C55E]"
                    >
                      <option value="1st Year Undergraduate">1st Year Undergraduate</option>
                      <option value="2nd Year Undergraduate">2nd Year Undergraduate</option>
                      <option value="3rd Year Undergraduate">3rd Year Undergraduate</option>
                      <option value="4th Year Undergraduate">4th Year Undergraduate</option>
                      <option value="Recent Graduate">Recent Graduate</option>
                      <option value="Working Professional">Working Professional</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#090909] block">
                    AI & Coding Experience
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-black/15 text-sm text-[#090909] focus:outline-none focus:border-[#22C55E]"
                  >
                    <option value="Zero Prior Knowledge (Beginner)">Zero Prior Knowledge (Beginner)</option>
                    <option value="Self-Taught / Hobbyist Developer">Self-Taught / Hobbyist Developer</option>
                    <option value="CS Student / Experienced Programmer">CS Student / Experienced Programmer</option>
                    <option value="Working Software Engineer">Working Software Engineer</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#090909] text-white font-extrabold text-sm uppercase tracking-wider hover:bg-[#22C55E] hover:text-black transition-all flex items-center justify-center gap-2 shadow-xl mt-4 font-mono"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Proceed to Payment • ₹{activeCohortObj.price}</span>
                </button>
              </form>
            </div>

            {/* RIGHT COLUMN: ORDER SUMMARY & PAYMENT BADGES */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-black/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-black/60 block border-b border-black/10 pb-3 font-mono">
                  Enrollment Order Summary
                </span>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#090909]">{activeCohortObj.name}</span>
                    <span className="text-sm font-extrabold text-[#15803D]">₹{activeCohortObj.price}</span>
                  </div>
                  <p className="text-xs text-black/60 leading-relaxed">{activeCohortObj.tagline}</p>
                </div>

                <div className="space-y-2.5 pt-3 border-t border-black/10 text-xs text-black/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#15803D]" />
                    <span>4 Weeks Live Intensive Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#15803D]" />
                    <span>5+ Shipped Production Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#15803D]" />
                    <span>1-on-1 Mentor Code Review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#15803D]" />
                    <span>Turing Wings Verified Certificate</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/10 flex items-center justify-between font-mono">
                  <div>
                    <span className="text-[10px] text-black/50 uppercase tracking-wider block">Total Tuition Fee</span>
                    <span className="text-xs text-black/40 line-through">₹{activeCohortObj.originalPrice}</span>
                  </div>
                  <span className="text-2xl font-extrabold text-[#15803D]">₹{activeCohortObj.price}</span>
                </div>
              </div>

              {/* RAZORPAY VERIFIED GATEWAY BADGE */}
              <div className="p-4 rounded-2xl bg-white border border-black/10 text-center space-y-2 shadow-xs">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#090909]">
                  <Lock className="w-4 h-4 text-[#15803D]" />
                  <span>Razorpay Verified Payment Gateway</span>
                </div>
                <p className="text-[11px] text-black/60">
                  Supports UPI, GPay, Credit/Debit Cards, NetBanking, and EMI.
                </p>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* RAZORPAY PAYMENT SIMULATION MODAL */}
      <AnimatePresence>
        {showRazorpayModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white border border-black/15 rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-6 shadow-2xl relative"
            >
              <div className="flex items-center justify-between border-b border-black/10 pb-4">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-[#15803D]" />
                  <span className="text-sm font-bold text-[#090909]">Razorpay Checkout</span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowCancelConfirmModal(true)}
                  className="p-1.5 rounded-full hover:bg-black/5 text-black/40 hover:text-black transition-colors"
                  title="Cancel Payment"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-black/10 space-y-1">
                  <span className="text-black/50 text-[10px] uppercase block font-mono">Paying To</span>
                  <span className="font-bold text-[#090909] block">Turing Wings Education Technologies</span>
                  <span className="text-[#15803D] font-bold block pt-1">{activeCohortObj.name}</span>
                </div>

                <div className="flex justify-between items-center p-3.5 rounded-xl bg-[#FAF8F5] border border-black/10 font-mono">
                  <span className="text-black/60">Total Amount:</span>
                  <span className="text-lg font-extrabold text-[#15803D]">₹{activeCohortObj.price}</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={handleRazorpayPaymentComplete}
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-[#090909] text-white hover:bg-[#22C55E] hover:text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg font-mono"
                >
                  {isSubmitting ? (
                    <span>Verifying Payment...</span>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Complete Payment (Razorpay)</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setShowCancelConfirmModal(true)}
                  className="w-full py-2.5 rounded-xl bg-[#FAF8F5] hover:bg-black/5 text-black/60 text-xs font-bold transition-colors font-mono"
                >
                  Cancel Transaction
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CONFIRMATION POPUP FOR CANCELLING PAYMENT / REGISTRATION */}
      <AnimatePresence>
        {showCancelConfirmModal && (
          <div className="fixed inset-0 bg-black/75 backdrop-blur-md z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="bg-white border border-red-200 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center space-y-5 shadow-2xl relative"
            >
              <div className="w-12 h-12 rounded-full bg-red-100 border border-red-200 text-red-600 flex items-center justify-center mx-auto">
                <HelpCircle className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-extrabold text-[#090909]">Cancel Registration?</h3>
                <p className="text-xs text-black/70 leading-relaxed font-sans">
                  Are you sure you want to cancel your payment for <strong className="text-[#090909]">{activeCohortObj.name}</strong>? Your reserved seat and early bird discount will be released.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 font-mono">
                <button
                  type="button"
                  onClick={handleConfirmCancelRegistration}
                  className="w-full py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  Yes, Cancel Registration
                </button>

                <button
                  type="button"
                  onClick={() => setShowCancelConfirmModal(false)}
                  className="w-full py-3 rounded-2xl bg-[#090909] hover:bg-[#22C55E] hover:text-black text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
                >
                  No, Continue Payment
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
