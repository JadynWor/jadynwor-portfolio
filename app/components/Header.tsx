import React, { useEffect, useState } from "react";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Gear", to: "/gear" },
  { name: "Contact", to: "/contact" },
];

function getInitialDarkMode() {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return false;
}

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Set initial dark mode state after component mounts
    const stored = localStorage.getItem("theme");
    if (stored) {
      setDarkMode(stored === "dark");
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="w-full bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto grid grid-cols-3 items-center h-24 px-8">
        {/* Left: Avatar */}
        <div className="flex items-center justify-start">
          <img
            src="/jadynwor_avatar.png"
            alt="Avatar"
            className="h-12 w-12 object-contain"
          />
        </div>
        {/* Center: Navigation */}
        <nav className="flex items-center justify-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.to}
              className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-2xl transition-colors duration-150"
            >
              {item.name}
            </a>
          ))}
        </nav>
        {/* Right: Dark Mode Toggle */}
        <div className="flex items-center justify-end">
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDarkMode((d) => !d)}
            className="text-2xl text-gray-600 dark:text-gray-300 cursor-pointer focus:outline-none"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
} 