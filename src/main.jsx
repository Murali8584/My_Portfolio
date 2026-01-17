import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Prevent color flashing
const storageKey = "theme";
const mql = window.matchMedia("(prefers-color-scheme:dark)");
const storedTheme = localStorage.getItem(storageKey);
const darkMode = storedTheme ? JSON.parse(storedTheme) : mql.matches;
document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

