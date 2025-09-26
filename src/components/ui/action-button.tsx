import React from "react";
import DynamicLink from "./dynamic-link";

interface ActionButtonProps {
  text: string;
  link?: string;   // external URL
  asset?: string;  // static file in /static
  action?: () => void; // open video action
  color?: string; // Tailwind color prefix, default "indigo"
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, link, asset, action, color = "indigo" }) => {
  const spanClass = `inline-flex items-center py-1.5 px-3 rounded-sm text-sm font-medium 
    bg-${color}-500 hover:bg-${color}-700 
    dark:bg-${color}-600 dark:hover:bg-${color}-800 
    text-white`;

  if (asset || link) {
    return <DynamicLink text={text} link={link} asset={asset}>
      <span className={spanClass}>{text}</span>
    </DynamicLink>
  }

  if (action) {
    return (
      <button onClick={action}>
        <span className={spanClass}>{text}</span>
      </button>
    );
  }

  // fallback if nothing provided
  return <span className={spanClass}>{text}</span>;
};

export default ActionButton;
