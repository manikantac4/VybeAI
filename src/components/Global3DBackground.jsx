import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Global3DBackground() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div
      className={`fixed inset-0 w-full h-full pointer-events-none transition-colors duration-500 z-[-1] ${
        isLight ? "bg-[#FFFFFF]" : "bg-[#0B0F17]"
      }`}
      style={{ zIndex: -1 }}
    >
      {/* Static Subdued Ambient Accent (No 3D, No Stars, No Bubbles, No Particles) */}
      <div
        className={`absolute inset-0 opacity-40 ${
          isLight
            ? "bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(248,249,251,0.9),rgba(255,255,255,1))]"
            : "bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(15,23,42,0.8),rgba(11,15,23,1))]"
        }`}
      />
    </div>
  );
}
