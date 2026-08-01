import React, { createContext, useContext, useState, useEffect } from "react";
import { eventService } from "../services/eventService";

const EventContext = createContext();

export function EventProvider({ slug, children }) {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSubpage, setActiveSubpage] = useState("home");

  const loadEvent = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await eventService.getEventBySlug(slug);
      setEventData(data);
    } catch (err) {
      setError(err.message || "Failed to load event data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      loadEvent();
    }
  }, [slug]);

  const value = {
    eventData,
    loading,
    error,
    activeSubpage,
    setActiveSubpage,
    refreshEvent: loadEvent,
  };

  return <EventContext.Provider value={value}>{children}</EventContext.Provider>;
}

export function useEventContext() {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventContext must be used within an EventProvider");
  }
  return context;
}
