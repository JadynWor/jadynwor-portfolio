import React, { useEffect, useState } from "react";
import { Link } from "@remix-run/react";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Achievements", to: "/achievements" },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('nav') && !target.closest('button')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="w-full bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between h-16 sm:h-20 md:h-24 px-4 sm:px-6 md:px-8">
        {/* Left: Avatar */}
        <div className="flex items-center justify-start">
          <Link to="/">
            <img
              src="/jadynwor_avatar.png"
              alt="Avatar"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-4 lg:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="text-base lg:text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 lg:px-4 py-2 rounded-2xl transition-colors duration-150"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-800 shadow-lg">
          <div className="max-w-5xl mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-neutral-800 px-4 py-3 rounded-xl transition-colors duration-150"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
} 