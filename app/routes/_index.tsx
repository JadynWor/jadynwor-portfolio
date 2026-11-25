// app/routes/_index.tsx
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState, type ReactNode } from "react";
import {
  education,
  experience,
  profile,
  projects,
  skills,
  updates,
  type Entry,
} from "~/content";

export const meta: MetaFunction = () => [
  { title: "Jadyn Worthington" },
  {
    name: "description",
    content:
      "Jadyn Worthington: software engineer at Bloom Energy and incoming M.S. Computer Science student at Georgia Tech.",
  },
];

const VISIBLE_UPDATES = 5;

function A({ href, children }: { href: string; children: ReactNode }) {
  if (href.startsWith("/")) return <Link to={href}>{children}</Link>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function EntryList({ items }: { items: Entry[] }) {
  return (
    <div>
      {items.map((e) => (
        <details key={e.title}>
          <summary>
            <b>{e.title}</b>
            {e.role && <>, {e.role}</>}
            {e.date && <span className="date"> ({e.date})</span>}
            <span className="muted">. {e.summary}</span>
          </summary>
          <div className="expand">
            <ul>
              {e.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            {(e.stack || e.links) && (
              <p className="small">
                {e.stack && <span className="muted">{e.stack}</span>}
                {e.stack && e.links && " | "}
                {e.links?.map((l, i) => (
                  <span key={l.label}>
                    {i > 0 && " | "}
                    <A href={l.href}>{l.label}</A>
                  </span>
                ))}
              </p>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}

export default function Index() {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? updates : updates.slice(0, VISIBLE_UPDATES);
  const { user, domain } = profile.email;

  return (
    <main className="classic">
      {/* Intro */}
      <table className="intro">
        <tbody>
          <tr>
            <td>
              <h1>{profile.name}</h1>
              {profile.lines.map((l) => (
                <div key={l}>{l}</div>
              ))}
              <div className="mt">
                <b>Email:</b>{" "}
                <a href={`mailto:${user}@${domain}`}>
                  {user} [at] {domain.replace(".", " [dot] ")}
                </a>
              </div>
              <div>
                {profile.links.map((l, i) => (
                  <span key={l.label}>
                    {i > 0 && " | "}
                    <A href={l.href}>{l.label}</A>
                  </span>
                ))}
              </div>
            </td>
            <td className="photo">
              <img src={profile.avatar} alt={profile.name} width={130} height={130} />
            </td>
          </tr>
        </tbody>
      </table>

      {/* News */}
      <div className="news">
        {shown.map((u, i) => (
          <div key={i}>
            <b>
              <i>{u.date}.</i>
            </b>{" "}
            {u.text}
            {u.link && (
              <>
                {" "}
                [<A href={u.link.href}>{u.link.label}</A>]
              </>
            )}
          </div>
        ))}
        {updates.length > VISIBLE_UPDATES && (
          <button type="button" onClick={() => setShowAll((v) => !v)}>
            {showAll ? "Less" : "More"}
          </button>
        )}
      </div>

      {/* Bio */}
      <p>
        I am a software engineer at Bloom Energy and an incoming M.S. Computer Science
        student at Georgia Tech, where I plan to focus on robotics and autonomous
        systems. My work sits where software meets hardware: test automation on a fuel
        cell manufacturing line, ML inference on embedded edge devices, and data
        platforms for federal and international clients including the USAF and UNICEF.
      </p>
      <p>
        I also build my own things. I founded{" "}
        <A href="https://terrawatch.app">TerraWatch</A>, which won Most Innovative Project
        at Code for Climate during NY Tech Week, and I open-sourced{" "}
        <A href="https://github.com/JadynWor/ARIA">ARIA</A>, a real-time drone search and
        rescue system. I received my B.S. in Computer Science (AI &amp; Robotics) from the
        University of Delaware in 2024.
      </p>
      <p className="small muted">{profile.location}</p>

      <p className="small muted hint">Click any entry below to expand it.</p>

      <h2 id="projects">Projects</h2>
      <EntryList items={projects} />

      <h2 id="experience">Experience</h2>
      <EntryList items={experience} />

      <h2 id="education">Education</h2>
      {education.map((e) => (
        <p key={e.school} className="edu">
          <b>{e.school}</b>, {e.degree} <span className="date">({e.date})</span>
          <br />
          <span className="muted small">{e.note}</span>
        </p>
      ))}

      <h2 id="skills">Skills</h2>
      <details>
        <summary>Technical skills</summary>
        <div className="expand">
          <table className="skills">
            <tbody>
              {skills.map((s) => (
                <tr key={s.label}>
                  <td>
                    <b>{s.label}</b>
                  </td>
                  <td>{s.items}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </main>
  );
}
