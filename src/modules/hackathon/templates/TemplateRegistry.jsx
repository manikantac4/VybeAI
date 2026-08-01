import React from "react";
import AiFutureLayout from "./ai-future/TemplateLayout";

/**
 * Multi-Template Registry System
 * Maps `templateId` chosen in Admin Wing to the corresponding Template Layout component.
 */
const TEMPLATE_MAP = {
  "ai-future": AiFutureLayout,
  "cyberpunk": AiFutureLayout, // Fallback or distinct variant
  "space": AiFutureLayout,     // Fallback or distinct variant
  "corporate": AiFutureLayout, // Fallback or distinct variant
  "minimal": AiFutureLayout,   // Fallback or distinct variant
};

export default function TemplateRegistry({ templateId = "ai-future", eventData, onRegister }) {
  // Select requested template layout component or default to `ai-future`
  const SelectedTemplate = TEMPLATE_MAP[templateId] || TEMPLATE_MAP["ai-future"];

  return <SelectedTemplate eventData={eventData} onRegister={onRegister} />;
}
