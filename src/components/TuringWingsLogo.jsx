import React from "react";
import UpdatedLogo from "../assets/updatedlogo.png";

export default function TuringWingsLogo({ size = "md", className = "" }) {
  const dimensions = {
    sm: "h-9 w-auto",
    md: "h-11 w-auto",
    lg: "h-16 w-auto"
  }[size] || "h-11 w-auto";

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <img
        src={UpdatedLogo}
        alt="Turing Wings"
        className={`${dimensions} object-contain rounded-xl drop-shadow-md`}
      />
    </div>
  );
}
