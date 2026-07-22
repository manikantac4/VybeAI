import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Aarav Sharma",
      role: "Engineering Student & Creator",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      comment: "Turing Wings transformed how I think about building software. Vibe Coding allowed me to build a functional AI SaaS prototype in just 3 days!",
      badge: "Vibe Coding Cohort",
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200"
    },
    {
      name: "Priya Patel",
      role: "UI/UX Freelancer",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      comment: "I had zero backend coding experience. The AI Web Creation bootcamp made modern development so simple, practical, and inspiring.",
      badge: "Web Creation Bootcamp",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
      name: "Rohan Verma",
      role: "Buildathon Winner",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      comment: "The buildathons are high-energy and hands-on. I met amazing collaborators and launched our first MVP live in front of mentors!",
      badge: "Buildathon Sprint",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      name: "Ananya Gupta",
      role: "Design Student & Builder",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      comment: "Learning by creating is 100% real here. No endless boring theory — just pure building with modern AI workflows and tools.",
      badge: "AI Tools & Workflows",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-200"
    }
  ];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#f8fffe] text-slate-800 relative overflow-hidden scroll-mt-24 select-none">
      {/* Background Soft Mesh Ambient Blobs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider border border-slate-200 inline-block mb-4 shadow-sm">
            CREATOR TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif italic text-slate-900 leading-tight">
            What <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">Creators & Students</span> Say
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Hear from beginners, students, and innovators who built their first digital products using Turing Wings AI workflows.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-white border border-slate-200/80 rounded-3xl p-7 sm:p-8 shadow-lg hover:shadow-xl hover:border-cyan-500/50 transition-all flex flex-col justify-between relative group text-left"
            >
              <div>
                {/* Top Rating & Badge */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${review.badgeColor}`}>
                    {review.badge}
                  </span>
                </div>

                {/* Comment Quote */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-cyan-400 shadow-sm"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-serif italic">
                    {review.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join CTA Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-xl"
        >
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif italic">
              Join 500+ Confident Creators Building Today
            </h3>
            <p className="text-white/90 text-sm sm:text-base">
              Start your journey from learning to creating. Master AI-powered workflows, vibe coding, and launch real digital projects.
            </p>
            <div className="pt-2 flex justify-center">
              <Link
                to="/login"
                className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold text-sm shadow-lg hover:bg-slate-100 hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>Start Building Now</span>
                <ArrowRight className="w-4 h-4 text-cyan-600" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
