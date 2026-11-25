import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";

const navItems = [
  { name: "updates", href: "/#updates" },
  { name: "projects", href: "/#projects" },
  { name: "experience", href: "/#experience" },
  { name: "skills", href: "/#skills" },
];

export default function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="font-mono text-sm font-semibold text-ink-900">
          jadyn<span className="text-ink-500">.</span>wor
        </Link>
        <nav className="flex items-center gap-4 font-mono text-xs sm:gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hidden text-ink-600 transition-colors hover:text-ink-900 sm:inline"
            >
              {item.name}
            </a>
          ))}
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="rounded-md border border-line px-2 py-1 text-ink-600 transition-colors hover:border-ink-900 hover:text-ink-900"
          >
            {dark ? "light" : "dark"}
          </button>
        </nav>
      </div>
    </header>
  );
}
