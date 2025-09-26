import React, { createContext, useState, useEffect, ReactNode } from "react";

export const ThemeValues = {
  dark: true,
  light: false,
} as const;

export type ThemeValue = typeof ThemeValues[keyof typeof ThemeValues];

interface ThemeContextType {
  theme: ThemeValue;
  changeTheme: (theme: ThemeValue) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeValues.dark,
  changeTheme: () => { },
});

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeValue>(ThemeValues.dark);

  function changeTheme(theme: ThemeValue) {
    setTheme(theme);
  }

  useEffect(() => {
    if (theme === ThemeValues.light) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
