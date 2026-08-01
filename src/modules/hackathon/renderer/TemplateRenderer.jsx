import React from "react";
import AIFutureTemplate from "../templates/ai-future/index.jsx";
import CyberpunkTemplate from "../../../templates/Cyberpunk/index.jsx";
import MinimalPremiumTemplate from "../../../templates/MinimalPremium/index.jsx";
import Template3_SpaceOdyssey from "../../../templates/Template3_SpaceOdyssey/index.jsx";
import Template4_CorporatePro from "../../../templates/Template4_CorporatePro/index.jsx";
import Template5_UniversityCampus from "../../../templates/Template5_UniversityCampus/index.jsx";
import Template6_GamingArena from "../../../templates/Template6_GamingArena/index.jsx";
import Template7_ModernSaaS from "../../../templates/Template7_ModernSaaS/index.jsx";
import Template9_CreativeInnovation from "../../../templates/Template9_CreativeInnovation/index.jsx";
import Template10_Premium3D from "../../../templates/Template10_Premium3D/index.jsx";

// Dispatcher mapping all 10 templates to their respective presentation engines
const TEMPLATE_MAP = {
  "ai-future": AIFutureTemplate,
  "cyberpunk-neon": CyberpunkTemplate,
  "space-odyssey": Template3_SpaceOdyssey,
  "space-galaxy": Template3_SpaceOdyssey,
  "corporate-pro": Template4_CorporatePro,
  "corporate-blue": Template4_CorporatePro,
  "university-campus": Template5_UniversityCampus,
  "university-minimal": Template5_UniversityCampus,
  "gaming-arena": Template6_GamingArena,
  "gaming-rgb": Template6_GamingArena,
  "modern-saas": Template7_ModernSaaS,
  "saas-startup": Template7_ModernSaaS,
  "minimal-premium": MinimalPremiumTemplate,
  "minimal-white": MinimalPremiumTemplate,
  "creative-innovation": Template9_CreativeInnovation,
  "premium-3d": Template10_Premium3D,
};

export default function TemplateRenderer({ templateId, eventData, activeSubpage, setActiveSubpage, onRegisterClick }) {
  const SelectedTemplate = TEMPLATE_MAP[templateId] || AIFutureTemplate;

  return (
    <SelectedTemplate
      eventData={eventData}
      activeSubpage={activeSubpage}
      setActiveSubpage={setActiveSubpage}
      onRegisterClick={onRegisterClick}
    />
  );
}
