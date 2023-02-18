import React, { useState, createContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "../theme";

export const ThemeContext = createContext();



export default function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
