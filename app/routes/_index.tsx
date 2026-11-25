// app/routes/_index.tsx
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState, type ReactNode } from "react";
import {
  education,
  experience,
  moreProjects,
  profile,
  projects,
  skills,
  updates,
  type Role,
} from "~/content";

export const meta: MetaFunction = () => [
  { title: "Jadyn Worthington" },
  {
    name: "description",
    content:
      "Jadyn Worthington: software engineer building ML, full-stack and hardware-adjacent systems. ARIA, TerraWatch, Bloom Energy, Georgia Tech.",
  },
];

const VISIBLE_UPDATES = 5;

function SectionLabel({ n, children }: { n: string; children: string }) {
  return (
    <h2 className="mb-5 flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
      <span className="text-ink-900">{n}</span>
      <span>{children}</span>
      <span className="h-px flex-1 -translate-y-[3px] bg-line" />
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
  children: ReactNode;
}) {
  if (href.startsWith("/")) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

const inlineLink =
  "font-mono text-xs text-ink-900 underline decoration-line underline-offset-4 transition-colors hover:decoration-ink-900";

function RoleList({ items }: { items: Role[] }) {
  return (
    <ul className="divide-y divide-line">
      {items.map((r) => {
        const body = (
          <>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <p className="text-ink-900">
                <span className="font-semibold">{r.org}</span>
                {r.href && <span className="ml-1 text-ink-500">↗</span>}
              </p>
              <span className="font-mono text-xs text-ink-500">{r.dates}</span>
            </div>
            <p className="text-sm text-ink-600">{r.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{r.summary}</p>
          </>
        );
        return (
          <li key={r.org} className="py-4">
            {r.href ? (
              <Link to={r.href} className="block transition-opacity hover:opacity-70">
                {body}
              </Link>
            ) : (
              body
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Index() {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? updates : updates.slice(0, VISIBLE_UPDATES);

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6">
      {/* Intro */}
      <section className="flex flex-col-reverse gap-8 pb-14 pt-12 sm:flex-row sm:items-start sm:justify-between sm:pt-16">
        <div className="max-w-xl">
          <p className="font-mono text-xs text-ink-500">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-ink-900 align-middle" />
            {profile.status}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg text-ink-600">{profile.role}</p>

          <div className="mt-6 space-y-4 leading-relaxed text-ink-700">
            <p>
              I ship real products for real people: data platforms for USAF and UNICEF,
              an AI advising tool for first-gen college students, and{" "}
              <a
                href="https://github.com/JadynWor/ARIA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-900 underline decoration-line underline-offset-4 hover:decoration-ink-900"
              >
                ARIA
              </a>
              , an open-source drone search and rescue system.
            </p>
            <p>
              I like where software meets hardware. I&apos;m a manufacturing engineer at{" "}
              <strong className="font-semibold text-ink-900">Bloom Energy</strong>{" "}
              automating fuel cell test checks, I ran edge ML on embedded devices at Lola
              Vision Systems, and I built federal data platforms at New Light Technologies.
              I&apos;m also the founder of{" "}
              <a
                href="https://terrawatch.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-900 underline decoration-line underline-offset-4 hover:decoration-ink-900"
              >
                TerraWatch
              </a>{" "}
              and start my MS at Georgia Tech in Spring 2027, focused on robotics and
              autonomous systems.
            </p>
          </div>

          <p className="mt-5 font-mono text-xs leading-relaxed text-ink-500">
            {profile.facts.join("  /  ")}
          </p>

          <nav className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm">
            {profile.links.map((l) => (
              <SmartLink key={l.label} href={l.href} className="group text-ink-900">
                <span className="underline decoration-line underline-offset-4 transition-colors group-hover:decoration-ink-900">
                  {l.label}
                </span>
                <span className="ml-0.5 inline-block text-ink-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </SmartLink>
            ))}
          </nav>
        </div>

        <img
          src={profile.avatar}
          alt={profile.name}
          width={144}
          height={144}
          className="h-28 w-28 shrink-0 rounded-2xl bg-ink-100 object-cover grayscale ring-1 ring-line transition duration-500 hover:grayscale-0 sm:h-36 sm:w-36"
        />
      </section>

      {/* Updates */}
      <section id="updates" className="scroll-mt-20 pb-14">
        <SectionLabel n="01">Updates</SectionLabel>
        <ul className="space-y-3">
          {shown.map((u, i) => (
            <li key={i} className="grid grid-cols-[5.75rem_1fr] gap-3 text-[15px] leading-relaxed">
              <span className="pt-[3px] font-mono text-xs text-ink-500">{u.date}</span>
              <span className="text-ink-700">
                {u.text}
                {u.link && (
                  <>
                    {" "}
                    <SmartLink href={u.link.href} className={`${inlineLink} whitespace-nowrap`}>
                      {u.link.label} ↗
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
            className="mt-4 rounded-md border border-line px-2.5 py-1 font-mono text-xs text-ink-600 transition-colors hover:border-ink-900 hover:text-ink-900"
          >
            {showAll ? "less" : `+${updates.length - VISIBLE_UPDATES} more`}
          </button>
        )}
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-20 pb-14">
        <SectionLabel n="02">Projects</SectionLabel>
        <ul className="space-y-4">
          {projects.map((p) => (
            <li
              key={p.name}
              className="rounded-xl border border-line bg-surface p-5 transition-colors hover:border-ink-900"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-ink-900">
                  {p.name}
                  {p.subtitle && (
                    <span className="ml-2 text-sm font-normal text-ink-500">{p.subtitle}</span>
                  )}
                </h3>
                <span className="font-mono text-xs text-ink-500">{p.date}</span>
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{p.blurb}</p>
              {p.metrics && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.metrics.map((m) => (
                    <span
                      key={m}
                      className="rounded-md bg-ink-900 px-2 py-0.5 font-mono text-[11px] text-paper"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                <p className="font-mono text-[11px] text-ink-500">{p.stack.join(" · ")}</p>
                {p.links && (
                  <span className="flex gap-4">
                    {p.links.map((l) => (
                      <SmartLink key={l.label} href={l.href} className={inlineLink}>
                        {l.label} ↗
                      </SmartLink>
                    ))}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
        <ul className="mt-5 space-y-2 text-[15px]">
          {moreProjects.map((p) => (
            <li key={p.name} className="text-ink-600">
              <span className="font-mono text-xs text-ink-500">also / </span>
              {p.href ? (
                <Link
                  to={p.href}
                  className="font-semibold text-ink-900 underline decoration-line underline-offset-4 hover:decoration-ink-900"
                >
                  {p.name}
                </Link>
              ) : (
                <span className="font-semibold text-ink-900">{p.name}</span>
              )}
              : {p.blurb}
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-20 pb-14">
        <SectionLabel n="03">Experience</SectionLabel>
        <RoleList items={experience} />
      </section>

      {/* Education */}
      <section id="education" className="scroll-mt-20 pb-14">
        <SectionLabel n="04">Education</SectionLabel>
        <RoleList items={education} />
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-20 pb-16">
        <SectionLabel n="05">Skills</SectionLabel>
        <dl className="space-y-3 text-sm">
          {skills.map((s) => (
            <div key={s.label} className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-4">
              <dt className="font-mono text-xs text-ink-500 sm:pt-0.5">{s.label}</dt>
              <dd className="leading-relaxed text-ink-700">{s.items}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
