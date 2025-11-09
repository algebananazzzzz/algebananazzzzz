import React from "react";
import { Theme } from "./theme-context";
import SunIcon from "@/assets/svg/theme/sun.svg";
import MoonIcon from "@/assets/svg/theme/moon.svg";
import { iconSize } from "@/styles/tailwind-utils";

interface ThemeTogglerProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      aria-label="darktoggler"
      onClick={toggleTheme}
      className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2rem] w-[2rem] md:h-[2.375rem] md:w-[2.375rem] rounded-full align-middle
        bg-white hover:bg-gray-800 text-gray-700 hover:text-white dark:bg-slate-800 dark:hover:bg-slate-200 dark:text-gray-400 dark:hover:text-gray-800 transition-all"
    >
      {theme === 'dark' ?
        <MoonIcon className={iconSize.sm} /> :
        <SunIcon className={iconSize.sm} />}
    </button>
  );
};

export default ThemeToggler;
