import { togglePicker } from './picker.js';
import { startCalculation, resetApp } from './logic.js';

window.startCalculation = startCalculation;
window.resetApp = resetApp;
window.togglePicker = togglePicker;

window.toggleTheme = () => {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const newTheme = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
};

// Register Service Worker for PWA support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log("Service Worker registered"))
      .catch(err => console.error("Service Worker registration failed:", err));
  });
}
