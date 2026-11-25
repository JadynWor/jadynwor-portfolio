import { Link } from "@remix-run/react";

const navItems = [
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Education", href: "/#education" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div>
        <Link to="/">Jadyn Worthington</Link>
        <nav>
          {navItems.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
