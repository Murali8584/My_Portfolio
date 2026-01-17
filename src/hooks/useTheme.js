import { useState, useEffect } from 'react';

export const useTheme = () => {
  const storageKey = "theme";
  const mql = window.matchMedia("(prefers-color-scheme:dark)");
  const storedTheme = localStorage.getItem(storageKey);
  const [darkMode, setDarkMode] = useState(
    storedTheme ? JSON.parse(storedTheme) : mql.matches
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem(storageKey, JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return { darkMode, toggleTheme };
};

