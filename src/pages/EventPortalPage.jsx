import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import TemplateLayout from "../modules/hackathon/templates/ai-future/TemplateLayout";
import { defaultEventData } from "../modules/hackathon/templates/ai-future/config/defaults";
import { RefreshCw, ArrowLeft } from "lucide-react";

export default function EventPortalPage() {
  const { slug } = useParams();
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEventDetails();
  }, [slug]);

  const fetchEventDetails = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://turingwings-backend.onrender.com/api/events/${slug}`);
      if (res.ok) {
        const data = await res.json();
        
        // Transform MongoDB event document into Template Data Shape
        const transformedData = {
          meta: {
            name: data.name || "Turing Wings Event",
            shortName: data.shortName || data.name,
            tagline: data.tagline || "",
            status: data.status === "Published" ? "upcoming" : "upcoming",
            type: data.type || "hackathon",
          },
          hero: {
            headline: data.name,
            subheadline: data.tagline || data.shortDescription,
            ctaLabel: "Register Now",
            ctaPath: "/register",
            videoUrl: data.introVideo,
          },
          about: {
            title: "About the Event",
            description: data.fullDescription || data.shortDescription,
            objectives: data.objectives || [],
            outcomes: data.expectedOutcomes || [],
          },
          tracks: data.tracks || defaultEventData.tracks,
          prizes: data.prizes || defaultEventData.prizes,
          judges: data.judges || defaultEventData.judges,
          mentors: data.mentors || defaultEventData.mentors,
          sponsors: data.sponsors || defaultEventData.sponsors,
          faq: data.faqs || defaultEventData.faq,
          contact: data.contact || defaultEventData.contact,
        };

        setEventData(transformedData);
      } else {
        setEventData(defaultEventData);
      }
    } catch (err) {
      console.error("Error fetching event portal data:", err);
      setEventData(defaultEventData);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 space-y-4">
        <RefreshCw className="w-8 h-8 animate-spin text-amber-500" />
        <p className="text-sm font-mono text-slate-400">Loading dedicated Hackathon Portal...</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-950 text-white relative">
      {/* Top Main Site Exit Bar */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex items-center justify-between text-xs font-bold text-slate-400">
        <Link to="/buildathons" className="inline-flex items-center gap-1.5 hover:text-amber-400">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to All Turing Wings Events
        </Link>
        <span className="text-amber-400 font-mono">Dedicated Hackathon Template Portal</span>
      </div>

      {/* Render Hackathon Template with its OWN dedicated Navbar and Footer */}
      <TemplateLayout eventData={eventData || defaultEventData} />
    </div>
  );
}
