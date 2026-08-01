// API Service for fetching & interacting with Hackathon Event endpoints
const API_BASE_URL = "https://turingwings-backend.onrender.com/api/events";

export const eventService = {
  // Fetch public event by slug
  async getEventBySlug(slug) {
    const res = await fetch(`${API_BASE_URL}/${slug}`);
    if (!res.ok) throw new Error("Event not found");
    return await res.json();
  },

  // Submit participant / team registration
  async registerParticipant(slug, formData) {
    const res = await fetch(`${API_BASE_URL}/${slug}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Registration failed");
    return data;
  },

  // Submit project for live hackathon
  async submitProject(slug, submissionData) {
    const res = await fetch(`${API_BASE_URL}/${slug}/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submissionData),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Submission failed");
    return data;
  },
};
