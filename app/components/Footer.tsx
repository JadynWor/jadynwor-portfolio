import { profile } from "~/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        {profile.name}
        {" | "}
        {profile.links.slice(0, 2).map((l, i) => (
          <span key={l.label}>
            {i > 0 && " | "}
            <a href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          </span>
        ))}
      </div>
    </footer>
  );
}
