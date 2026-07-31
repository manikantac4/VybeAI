import React from "react";
import Template1_AIFuture from "./Template1_AIFuture/index.jsx";
import Template2_Cyberpunk from "./Template2_Cyberpunk/index.jsx";
import Template3_SpaceOdyssey from "./Template3_SpaceOdyssey/index.jsx";
import Template4_CorporatePro from "./Template4_CorporatePro/index.jsx";
import Template5_UniversityCampus from "./Template5_UniversityCampus/index.jsx";
import Template6_GamingArena from "./Template6_GamingArena/index.jsx";
import Template7_ModernSaaS from "./Template7_ModernSaaS/index.jsx";
import Template8_MinimalPremium from "./MinimalPremium/index.jsx";
import Template9_CreativeInnovation from "./Template9_CreativeInnovation/index.jsx";
import Template10_Premium3D from "./Template10_Premium3D/index.jsx";

// Master Dispatcher for 10 Dedicated Template Folders
const templateMap = {
  "ai-future": Template1_AIFuture,
  "cyberpunk-neon": Template2_Cyberpunk,
  "space-galaxy": Template3_SpaceOdyssey,
  "space-odyssey": Template3_SpaceOdyssey,
  "corporate-blue": Template4_CorporatePro,
  "corporate-pro": Template4_CorporatePro,
  "university-minimal": Template5_UniversityCampus,
  "university-campus": Template5_UniversityCampus,
  "gaming-rgb": Template6_GamingArena,
  "gaming-arena": Template6_GamingArena,
  "modern-saas": Template7_ModernSaaS,
  "minimal-white": Template8_MinimalPremium,
  "minimal-premium": Template8_MinimalPremium,
  "saas-startup": Template7_ModernSaaS,
  "creative-innovation": Template9_CreativeInnovation,
  "premium-3d": Template10_Premium3D,
};

export default function renderTemplateEngine(templateId, props) {
  const SelectedTemplate = templateMap[templateId] || Template1_AIFuture;
  return <SelectedTemplate {...props} />;
}
