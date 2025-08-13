// src/components/FluentUIButton.tsx
"use client";

import * as React from "react";

interface FluentUIButtonProps {
  label: string;
  onClick?: () => void;
  appearance?: "primary" | "secondary" | "outline" | "subtle" | "transparent";
}

const FluentUIButton: React.FC<FluentUIButtonProps> = ({ label, onClick, appearance = "primary" }) => {
  const getButtonClasses = () => {
    const baseClasses = "px-4 py-2 rounded font-medium transition-colors";
    switch (appearance) {
      case "primary":
        return `${baseClasses} bg-blue-600 text-white hover:bg-blue-700`;
      case "secondary":
        return `${baseClasses} bg-gray-600 text-white hover:bg-gray-700`;
      case "outline":
        return `${baseClasses} border border-blue-600 text-blue-600 hover:bg-blue-50`;
      case "subtle":
        return `${baseClasses} bg-gray-100 text-gray-700 hover:bg-gray-200`;
      case "transparent":
        return `${baseClasses} text-blue-600 hover:bg-blue-50`;
      default:
        return `${baseClasses} bg-blue-600 text-white hover:bg-blue-700`;
    }
  };

  return (
    <button className={getButtonClasses()} onClick={onClick}>
      {label}
    </button>
  );
};

export default FluentUIButton;

