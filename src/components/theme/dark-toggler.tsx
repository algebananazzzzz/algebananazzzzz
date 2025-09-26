import React from "react";
import { ThemeValues } from "./theme-context";
import SunIcon from "@/assets/svg/theme/sun.svg";
import MoonIcon from "@/assets/svg/theme/moon.svg";

interface ThemeTogglerProps {
  theme: boolean; // true = dark, false = light
  changeTheme: (theme: boolean) => void;
}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({ theme, changeTheme }) => {
  return (
    <>
      {theme ? (
        <button
          aria-label="darktoggler"
          onClick={() => changeTheme(ThemeValues.light)}
          className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2rem] w-[2rem] md:h-[2.375rem] md:w-[2.375rem] rounded-full align-middle bg-slate-800 hover:bg-slate-200 text-gray-400 hover:text-gray-800 transition-all"
        >
          <MoonIcon className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      ) : (
        <button
          aria-label="darktoggler"
          onClick={() => changeTheme(ThemeValues.dark)}
          className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2rem] w-[2rem] md:h-[2.375rem] md:w-[2.375rem] rounded-full bg-white align-middle bg-gray-200 hover:bg-gray-800 text-gray-700 hover:text-white transition-all"
        >
          <SunIcon className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      )}
    </>
  );
};

export default ThemeToggler;
