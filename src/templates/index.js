import React from "react";
import AIFutureTemplate from "./AIFuture/index.jsx";
import CyberpunkTemplate from "./Cyberpunk/index.jsx";
import MinimalPremiumTemplate from "./MinimalPremium/index.jsx";

// Master Map of all 10 Event Presentation Templates
const templateMap = {
  "ai-future": AIFutureTemplate,
  "cyberpunk-neon": CyberpunkTemplate,
  "minimal-premium": MinimalPremiumTemplate,
  "space-odyssey": AIFutureTemplate, // Styled fallback
  "corporate-pro": MinimalPremiumTemplate,
  "university-campus": MinimalPremiumTemplate,
  "gaming-arena": CyberpunkTemplate,
  "modern-saas": AIFutureTemplate,
  "creative-innovation": AIFutureTemplate,
  "premium-3d": AIFutureTemplate,
};

export default function renderTemplateEngine(templateId, props) {
  const SelectedTemplate = templateMap[templateId] || AIFutureTemplate;
  return <SelectedTemplate {...props} />;
}
