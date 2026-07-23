import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TuringWingsLogo from "../components/TuringWingsLogo";
import LoginBackgroundImg from "../assets/loginbackground.png";
import { useTheme } from "../context/ThemeContext";
import {
  ArrowLeft, Mail, Lock, User, Eye, EyeOff, CheckCircle2,
  ShieldCheck, RefreshCw, Check, AlertCircle, Sun, Moon
} from "lucide-react";

export default function LoginPage() {
  const [mode, setMode] = useState("login"); // "login" | "signup" | "reset"
  const [showPassword, setShowPassword] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaLoading, setCaptchaLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleVerifyCaptcha = () => {
    if (captchaVerified) return;
    setCaptchaLoading(true);
    setTimeout(() => {
      setCaptchaLoading(false);
      setCaptchaVerified(true);
      setErrorMessage("");
    }, 700);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!captchaVerified) {
      setErrorMessage("Please complete the security captcha verification first.");
      return;
    }

    if (mode === "signup" && formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match. Please re-check.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);

      if (mode === "login") {
        setSuccessMessage("Sign in successful! Welcome back!");
        setTimeout(() => navigate("/"), 1300);
      } else if (mode === "signup") {
        setSuccessMessage("Account created successfully! Welcome to Turing Wings!");
        setTimeout(() => navigate("/"), 1300);
      } else if (mode === "reset") {
        setSuccessMessage("Password reset instructions sent to your email!");
        setTimeout(() => {
          setIsSuccess(false);
          setMode("login");
        }, 1800);
      }
    }, 1100);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-3.5 sm:p-6 relative overflow-hidden select-none transition-colors duration-500 ${
      isLight ? "bg-[#f8fffe] text-slate-800" : "bg-[#07090f] text-slate-100"
    }`}>
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15 overflow-hidden">
        <img
          src={LoginBackgroundImg}
          alt="Turing Wings Background"
          className="w-[600px] sm:w-[900px] max-w-none h-auto object-contain"
        />
      </div>

      {/* Ambient Gold Mesh Glow */}
      <div className={`absolute top-0 right-1/4 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full blur-[140px] pointer-events-none ${
        isLight ? "bg-amber-200/40" : "bg-amber-500/10"
      }`} />
      <div className={`absolute bottom-0 left-1/4 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full blur-[140px] pointer-events-none ${
        isLight ? "bg-yellow-200/40" : "bg-yellow-500/10"
      }`} />

      {/* Main Centered Auth Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full max-w-lg rounded-3xl p-5 sm:p-10 shadow-2xl relative z-10 text-left border ${
          isLight
            ? "bg-white/95 backdrop-blur-md border-slate-200"
            : "bg-slate-900/95 backdrop-blur-md border-amber-500/30"
        }`}
      >
        {/* Top Header: Back Link, Theme Toggle & Logo */}
        <div className="flex items-center justify-between mb-5 sm:mb-6">
          <Link
            to="/"
            className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors group ${
              isLight ? "text-amber-700 hover:text-amber-800" : "text-amber-400 hover:text-amber-300"
            }`}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Home</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all ${
                isLight ? "bg-slate-100 text-amber-600 border border-slate-200" : "bg-slate-950 text-amber-400 border border-amber-500/30"
              }`}
              title="Toggle Theme"
            >
              {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <TuringWingsLogo size="sm" />
          </div>
        </div>

        {/* Mode Switcher Tabs */}
        <div className={`p-1 rounded-2xl border flex mb-5 ${
          isLight ? "bg-slate-100 border-slate-200" : "bg-slate-950 border-amber-500/20"
        }`}>
          <button
            type="button"
            onClick={() => { setMode("login"); setIsSuccess(false); setErrorMessage(""); }}
            className={`flex-1 py-2 text-[10px] sm:text-xs font-bold rounded-xl transition-all ${
              mode === "login"
                ? "bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 shadow-md font-extrabold"
                : isLight ? "text-slate-600 hover:text-slate-900" : "text-slate-400 hover:text-white"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => { setMode("signup"); setIsSuccess(false); setErrorMessage(""); }}
            className={`flex-1 py-2 text-[10px] sm:text-xs font-bold rounded-xl transition-all ${
              mode === "signup"
                ? "bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 shadow-md font-extrabold"
                : isLight ? "text-slate-600 hover:text-slate-900" : "text-slate-400 hover:text-white"
            }`}
          >
            Create Account
          </button>
          <button
            type="button"
            onClick={() => { setMode("reset"); setIsSuccess(false); setErrorMessage(""); }}
            className={`flex-1 py-2 text-[10px] sm:text-xs font-bold rounded-xl transition-all ${
              mode === "reset"
                ? "bg-amber-600 text-white shadow-md font-bold"
                : isLight ? "text-slate-600 hover:text-slate-900" : "text-slate-400 hover:text-white"
            }`}
          >
            Reset Password
          </button>
        </div>

        {/* Dynamic Titles */}
        <div className="mb-5">
          <h2 className={`text-xl sm:text-2xl font-bold font-serif italic ${isLight ? "text-slate-900" : "text-white"}`}>
            {mode === "login" && "Welcome Back Creator"}
            {mode === "signup" && "Join Turing Wings Ecosystem"}
            {mode === "reset" && "Reset Password"}
          </h2>
          <p className={`text-[11px] sm:text-xs mt-1 leading-relaxed ${isLight ? "text-slate-500" : "text-slate-400"}`}>
            {mode === "login" && "Sign in to access your bootcamps, workflows & community."}
            {mode === "signup" && "Start building digital products with AI tools & natural language logic."}
            {mode === "reset" && "Enter your registered email address to receive password reset link."}
          </p>
        </div>

        {/* Social Logins */}
        {mode !== "reset" && (
          <div className="grid grid-cols-2 gap-2.5 mb-4 sm:mb-5">
            <button
              type="button"
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                isLight
                  ? "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  : "bg-slate-950 border-slate-800 text-slate-300 hover:border-amber-500/40 hover:text-white"
              }`}
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Google</span>
            </button>

            <button
              type="button"
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                isLight
                  ? "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  : "bg-slate-950 border-slate-800 text-slate-300 hover:border-amber-500/40 hover:text-white"
              }`}
            >
              <svg className={`w-4 h-4 fill-current shrink-0 ${isLight ? "text-slate-800" : "text-white"}`} viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </button>
          </div>
        )}

        {mode !== "reset" && (
          <div className="relative flex items-center justify-center mb-4 sm:mb-5">
            <div className={`border-t w-full ${isLight ? "border-slate-200" : "border-slate-800"}`} />
            <span className={`px-3 text-[10px] uppercase font-semibold absolute ${
              isLight ? "bg-white text-slate-400" : "bg-slate-900 text-slate-500"
            }`}>
              or with email
            </span>
          </div>
        )}

        {errorMessage && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs flex items-center gap-2 font-medium">
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {isSuccess && (
          <div className={`mb-4 p-3 rounded-xl border text-xs flex items-center gap-2 font-medium ${
            isLight ? "bg-amber-50 border-amber-200 text-amber-800" : "bg-amber-950/80 border-amber-500/40 text-amber-300"
          }`}>
            <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          
          {mode === "signup" && (
            <div>
              <label className={`block text-[11px] font-bold mb-1 uppercase ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="Alex Rivera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-amber-500 ${
                    isLight
                      ? "bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400"
                      : "bg-slate-950 border-slate-800 text-white placeholder-slate-500"
                  }`}
                />
              </div>
            </div>
          )}

          <div>
            <label className={`block text-[11px] font-bold mb-1 uppercase ${isLight ? "text-slate-600" : "text-slate-400"}`}>
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="creator@turingwings.org"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-amber-500 ${
                  isLight
                    ? "bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400"
                    : "bg-slate-950 border-slate-800 text-white placeholder-slate-500"
                }`}
              />
            </div>
          </div>

          {mode !== "reset" && (
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className={`block text-[11px] font-bold uppercase ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                  Password
                </label>
                {mode === "login" && (
                  <button
                    type="button"
                    onClick={() => setMode("reset")}
                    className="text-[11px] text-amber-600 font-bold hover:underline"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className={`w-full pl-10 pr-10 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-amber-500 ${
                    isLight
                      ? "bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400"
                      : "bg-slate-950 border-slate-800 text-white placeholder-slate-500"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}

          {mode === "signup" && (
            <div>
              <label className={`block text-[11px] font-bold mb-1 uppercase ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-amber-500 ${
                    isLight
                      ? "bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400"
                      : "bg-slate-950 border-slate-800 text-white placeholder-slate-500"
                  }`}
                />
              </div>
            </div>
          )}

          {/* Security Captcha Box */}
          <div className="pt-1.5">
            <div className={`p-2.5 sm:p-3 rounded-xl border flex items-center justify-between ${
              isLight ? "bg-slate-50 border-slate-200" : "bg-slate-950 border-slate-800"
            }`}>
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleVerifyCaptcha}
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-md border flex items-center justify-center transition-all ${
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
                <span className={`text-[11px] sm:text-xs font-semibold ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                  {captchaVerified ? "Security Captcha Verified" : "I am a human creator"}
                </span>
              </div>

              <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-slate-400 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                <span>reCAPTCHA</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-extrabold text-xs shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2 mt-2"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                <span>Processing...</span>
              </span>
            ) : (
              <span>
                {mode === "login" && "Sign In To Hub"}
                {mode === "signup" && "Create Account"}
                {mode === "reset" && "Send Reset Link"}
              </span>
            )}
          </button>

        </form>

        <div className="pt-5 text-center text-[10px] sm:text-[11px] text-slate-400 font-medium">
          Protected by Turing Wings Encryption & Security Protocol.
        </div>

      </motion.div>
    </div>
  );
}
