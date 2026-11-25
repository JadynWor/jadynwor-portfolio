import { profile } from "~/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-4 py-6 font-mono text-xs text-ink-500 sm:px-6">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="flex gap-4">
          {profile.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="transition-colors hover:text-ink-900"
            >
              {l.label.toLowerCase()}
            </a>
          ))}
        </span>
      </div>
    </footer>
  );
}
