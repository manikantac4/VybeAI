import React from "react";
import AiFutureLayout from "./ai-future/TemplateLayout";

// Custom theme color & visual variant overrides for each template option
const TEMPLATE_VARIANTS = {
  "ai-future": { primary: "#22C55E", accent: "#EAB308", mode: "dark" },
  "cyberpunk": { primary: "#00FF9D", accent: "#FF0055", mode: "cyberpunk" },
  "space": { primary: "#6366F1", accent: "#8B5CF6", mode: "space" },
  "corporate": { primary: "#2563EB", accent: "#1E40AF", mode: "corporate" },
  "premium-3d": { primary: "#10B981", accent: "#F59E0B", mode: "3d" },
  "minimal": { primary: "#090909", accent: "#22C55E", mode: "minimal" },
};

export default function TemplateRegistry({ templateId = "ai-future", eventData, onRegister }) {
  const activeTemplateId = eventData?.templateId || templateId || "ai-future";
  const variantOverrides = TEMPLATE_VARIANTS[activeTemplateId] || TEMPLATE_VARIANTS["ai-future"];

  return (
    <AiFutureLayout
      eventData={eventData}
      themeOverrides={variantOverrides}
      onRegister={onRegister}
    />
  );
}
