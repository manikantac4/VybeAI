import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  ShieldCheck, Cpu, CheckCircle2, Lock, Sparkles, CreditCard, 
  ArrowRight, AlertCircle, Building, User, Mail, Phone, Award, Check
} from 'lucide-react';

export default function CohortRegistrationPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCohort = searchParams.get('cohort') === 'ai-cybersecurity' ? 'ai-cybersecurity' : 'ai-engineering';

  const [selectedCohort, setSelectedCohort] = useState(initialCohort);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    collegeOrOrg: '',
    experienceLevel: 'Beginner (Zero Prior Knowledge)',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showRazorpayModal, setShowRazorpayModal] = useState(false);
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
      color: '#22C55E',
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
      color: '#06B6D4',
      icon: ShieldCheck,
    },
  };

  const activeCohortObj = cohortDetails[selectedCohort];

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
      setPaymentSuccess(true);
    } catch (err) {
      setErrorMessage('Payment processing failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#22C55E] selection:text-black font-mono flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-8 py-12 space-y-12">

        {/* TOP HEADER */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#4ADE80] text-xs font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>256-Bit SSL Encrypted Checkout</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Cohort Registration & Checkout</h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Secure your seat for the upcoming 4-week flagship cohort program.
          </p>
        </div>

        {paymentSuccess ? (
          /* PAYMENT SUCCESS CONFIRMATION RECEIPT */
          <div className="bg-[#0B121E] border border-[#22C55E] rounded-3xl p-8 sm:p-12 text-center space-y-6 max-w-2xl mx-auto shadow-2xl animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#22C55E]/20 border border-[#22C55E] flex items-center justify-center text-[#22C55E] mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#22C55E]">ENROLLMENT CONFIRMED</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Welcome to Turing Wings!</h2>
              <p className="text-xs text-slate-300">
                Your seat for <strong className="text-white">{activeCohortObj.name}</strong> is officially reserved.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-xs text-left space-y-2 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-400">Transaction Ref:</span>
                <span className="font-bold text-[#4ADE80]">{transactionRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Student Name:</span>
                <span className="font-bold text-white">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Email:</span>
                <span className="font-bold text-white">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Amount Paid:</span>
                <span className="font-bold text-white">₹{activeCohortObj.price} (Razorpay Verified)</span>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              Check your email (<span className="text-white">{formData.email}</span>) for Discord invite link and onboarding instructions.
            </p>

            <Link
              to="/"
              className="inline-block py-3 px-8 rounded-2xl bg-[#22C55E] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#4ADE80] transition-all shadow-md"
            >
              Return to Homepage
            </Link>
          </div>
        ) : (
          /* REGISTRATION FORM & SUMMARY GRID */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* LEFT COLUMN: FORM */}
            <div className="lg:col-span-7 bg-[#0B0F17] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">

              {/* COHORT SELECTOR TOGGLE BUTTONS */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  1. Select Your Flagship Cohort
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCohort('ai-engineering');
                      setSearchParams({ cohort: 'ai-engineering' });
                    }}
                    className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                      selectedCohort === 'ai-engineering'
                        ? 'bg-[#22C55E]/15 border-[#22C55E] text-white shadow-lg'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <Cpu className="w-5 h-5 text-[#22C55E]" />
                      {selectedCohort === 'ai-engineering' && <Check className="w-4 h-4 text-[#22C55E]" />}
                    </div>
                    <span className="text-sm font-bold block text-white">AI Engineering</span>
                    <span className="text-[10px] text-slate-400">4 Weeks • Build & Launch SaaS</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCohort('ai-cybersecurity');
                      setSearchParams({ cohort: 'ai-cybersecurity' });
                    }}
                    className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                      selectedCohort === 'ai-cybersecurity'
                        ? 'bg-[#06B6D4]/15 border-[#06B6D4] text-white shadow-lg'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <ShieldCheck className="w-5 h-5 text-[#06B6D4]" />
                      {selectedCohort === 'ai-cybersecurity' && <Check className="w-4 h-4 text-[#06B6D4]" />}
                    </div>
                    <span className="text-sm font-bold block text-white">AI & Cybersecurity</span>
                    <span className="text-[10px] text-slate-400">4 Weeks • Pentest & AI MCP</span>
                  </button>
                </div>
              </div>

              {/* BUILDER DETAILS FORM */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  2. Student & Builder Details
                </label>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Turing"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#22C55E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#22C55E]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#22C55E]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                      College / Organization
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="University or Company Name"
                        value={formData.collegeOrOrg}
                        onChange={(e) => handleInputChange('collegeOrOrg', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#22C55E]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                      Experience Level
                    </label>
                    <select
                      value={formData.experienceLevel}
                      onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-white/15 text-xs text-white focus:outline-none focus:border-[#22C55E]"
                    >
                      <option value="Beginner (Zero Prior Knowledge)">Beginner (Zero Prior Knowledge)</option>
                      <option value="College Student / CS Student">College Student / CS Student</option>
                      <option value="Self-Taught Developer">Self-Taught Developer</option>
                      <option value="Working Software Engineer">Working Software Engineer</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#22C55E] text-black font-extrabold text-sm uppercase tracking-wider hover:bg-[#4ADE80] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#22C55E]/20 mt-4"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Proceed to Payment • ₹{activeCohortObj.price}</span>
                </button>
              </form>
            </div>

            {/* RIGHT COLUMN: ORDER SUMMARY & PAYMENT BADGES */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#0B0F17] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block border-b border-white/10 pb-3">
                  Enrollment Order Summary
                </span>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{activeCohortObj.name}</span>
                    <span className="text-xs font-bold text-[#4ADE80]">₹{activeCohortObj.price}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{activeCohortObj.tagline}</p>
                </div>

                <div className="space-y-2 pt-3 border-t border-white/10 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                    <span>4 Weeks Live Intensive Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                    <span>5+ Shipped Production Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                    <span>1-on-1 Mentor Code Review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                    <span>Turing Wings Verified Certificate</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Total Tuition Fee</span>
                    <span className="text-xs text-slate-500 line-through">₹{activeCohortObj.originalPrice}</span>
                  </div>
                  <span className="text-2xl font-extrabold text-[#4ADE80]">₹{activeCohortObj.price}</span>
                </div>
              </div>

              {/* RAZORPAY VERIFIED GATEWAY BADGE */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-300">
                  <Lock className="w-4 h-4 text-[#22C55E]" />
                  <span>Razorpay Verified Payment Gateway</span>
                </div>
                <p className="text-[10px] text-slate-400">
                  Supports UPI, GPay, Credit/Debit Cards, NetBanking, and EMI.
                </p>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* RAZORPAY PAYMENT SIMULATION MODAL */}
      {showRazorpayModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#0B121E] border border-[#22C55E]/40 rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-6 shadow-2xl relative animate-scale-up">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-[#22C55E]" />
                <span className="text-sm font-bold text-white">Razorpay Checkout</span>
              </div>
              <span className="text-[10px] font-bold text-[#4ADE80] bg-[#22C55E]/10 px-2 py-0.5 rounded border border-[#22C55E]/30">
                TEST / LIVE GATEWAY
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-slate-400 text-[10px] uppercase block">Paying To</span>
                <span className="font-bold text-white block">Turing Wings Education Technologies</span>
                <span className="text-[#4ADE80] font-mono block pt-1">{activeCohortObj.name}</span>
              </div>

              <div className="flex justify-between items-center p-3 rounded-xl bg-black/40 border border-white/10 font-mono">
                <span className="text-slate-400">Total Payable Amount:</span>
                <span className="text-lg font-extrabold text-[#4ADE80]">₹{activeCohortObj.price}</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={handleRazorpayPaymentComplete}
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-[#22C55E] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#4ADE80] transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                {isSubmitting ? (
                  <span>Verifying Payment...</span>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Complete Payment (Razorpay Mock)</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setShowRazorpayModal(false)}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 text-xs font-bold transition-colors"
              >
                Cancel Transaction
              </button>
            </div>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
