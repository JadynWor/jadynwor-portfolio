// app/routes/_index.tsx
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";
import {
  experience,
  featuredProjects,
  moreProjects,
  profile,
  updates,
} from "~/content";

export const meta: MetaFunction = () => [
  { title: "Jadyn Worthington" },
  {
    name: "description",
    content: "Jadyn Worthington: software engineer building full-stack and backend systems.",
  },
];

const VISIBLE_UPDATES = 5;

function SectionLabel({ n, children }: { n: string; children: string }) {
  return (
    <h2 className="mb-5 flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
      <span className="text-accent">{n}</span>
      <span>{children}</span>
      <span className="h-px flex-1 translate-y-[-3px] bg-line" />
    </h2>
  );
}

function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (href.startsWith("/")) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function Index() {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? updates : updates.slice(0, VISIBLE_UPDATES);

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6">
      {/* Intro */}
      <section className="flex flex-col-reverse gap-8 pt-12 pb-14 sm:flex-row sm:items-start sm:justify-between sm:pt-16">
        <div className="max-w-xl">
          <p className="font-mono text-xs text-ink-500">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-accent align-middle" />
            currently {profile.now}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg text-ink-600">
            {profile.role} · {profile.location}
          </p>

          <div className="mt-6 space-y-4 leading-relaxed text-ink-700">
            <p>
              I build full-stack and backend systems: APIs, data pipelines, and the
              cloud plumbing behind them. Most recently I was at{" "}
              <strong className="font-semibold text-ink-900">New Light Technologies</strong>,
              shipping geospatial data tools on AWS for analysts. I studied computer
              science at the University of Delaware.
            </p>
            <p>
              I got hooked at 10 through NASA&apos;s SEMAA program and later designed a
              lunar rover concept as a NASA Aerospace Scholar. Outside of code I run a
              trademarked Amazon brand, have scaled two streetwear brands, edit video,
              and play too much Valorant.
            </p>
          </div>

          <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm">
            {profile.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group text-ink-900"
              >
                <span className="text-accent transition-transform group-hover:translate-x-0.5">↗</span>{" "}
                <span className="underline decoration-line underline-offset-4 group-hover:decoration-accent">
                  {l.label}
                </span>
              </a>
            ))}
          </nav>
        </div>

        <img
          src={profile.avatar}
          alt={profile.name}
          width={144}
          height={144}
          className="h-28 w-28 shrink-0 rounded-2xl bg-ink-100 object-cover ring-1 ring-line sm:h-36 sm:w-36"
        />
      </section>

      {/* Updates */}
      <section id="updates" className="scroll-mt-20 pb-14">
        <SectionLabel n="01">Updates</SectionLabel>
        <ul className="space-y-3">
          {shown.map((u, i) => (
            <li key={i} className="grid grid-cols-[5.5rem_1fr] gap-3 text-[15px] leading-relaxed">
              <span className="pt-[3px] font-mono text-xs text-ink-500">{u.date}</span>
              <span className="text-ink-700">
                {u.text}
                {u.href && (
                  <>
                    {" "}
                    <SmartLink
                      href={u.href}
                      className="whitespace-nowrap text-accent underline-offset-4 hover:underline"
                    >
                      {u.linkText ?? "More"} →
                    </SmartLink>
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
        {updates.length > VISIBLE_UPDATES && (
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="mt-4 rounded-md border border-line px-2.5 py-1 font-mono text-xs text-ink-600 transition-colors hover:border-accent hover:text-ink-900"
          >
            {showAll ? "less" : `+${updates.length - VISIBLE_UPDATES} more`}
          </button>
        )}
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-20 pb-14">
        <SectionLabel n="02">Projects</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-3">
          {featuredProjects.map((p) => (
            <Link
              key={p.title}
              to={p.href}
              className="group overflow-hidden rounded-xl border border-line bg-surface transition-all hover:-translate-y-0.5 hover:border-accent"
            >
              <div className="aspect-[16/10] overflow-hidden border-b border-line bg-ink-100">
                {p.image && (
                  <img
                    src={p.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-ink-900">
                  {p.title}{" "}
                  <span className="inline-block text-accent opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100">
                    →
                  </span>
                </h3>
                <p className="mt-1 text-sm leading-snug text-ink-600">{p.blurb}</p>
                <p className="mt-3 font-mono text-[11px] text-ink-500">{p.stack.join(" · ")}</p>
              </div>
            </Link>
          ))}
        </div>
        <ul className="mt-5 space-y-2 text-[15px]">
          {moreProjects.map((p) => (
            <li key={p.title}>
              <Link to={p.href} className="group">
                <span className="font-semibold text-ink-900 underline decoration-line underline-offset-4 group-hover:decoration-accent">
                  {p.title}
                </span>
                <span className="text-ink-600"> — {p.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-20 pb-16">
        <SectionLabel n="03">Experience</SectionLabel>
        <ul className="divide-y divide-line">
          {experience.map((r) => {
            const body = (
              <>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <p className="text-ink-900">
                    <span className="font-semibold">{r.org}</span>
                    <span className="text-ink-500"> · {r.title}</span>
                    {r.href && <span className="ml-1 text-accent">↗</span>}
                  </p>
                  <span className="font-mono text-xs text-ink-500">{r.dates}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{r.summary}</p>
              </>
            );
            return (
              <li key={r.org} className="py-3.5">
                {r.href ? (
                  <Link to={r.href} className="block hover:opacity-80">
                    {body}
                  </Link>
                ) : (
                  body
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
