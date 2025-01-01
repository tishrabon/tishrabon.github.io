import React, { useState, createContext } from "react";

export const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // const [theme, setTheme] = useState("dark");
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem("theme");
    return localTheme ? localTheme : "dark";
  });

  const toggleTheme = () => {
    // setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};
