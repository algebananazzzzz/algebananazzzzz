// gatsby-browser.tsx
import React from "react";
import type { GatsbyBrowser } from "gatsby";
import ThemeProvider from "./src/components/theme/theme-context";
import "./src/styles/global.css";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => (
  <ThemeProvider>
    {element}
  </ThemeProvider>
);
