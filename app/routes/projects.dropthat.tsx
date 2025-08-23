// app/routes/projects.drop-that.tsx
import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ([
  { title: "Drop That — Project" },
  { name: "description", content: "AI-assisted toolkit for streetwear founders — high-level overview (private beta)." }
]);

export default function DropThatProject() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Back */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          ← Back to Portfolio
        </Link>
      </div>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          Drop That <span className="text-sm align-middle font-medium text-gray-500 dark:text-gray-400">· private beta</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          AI-assisted toolkit for streetwear founders — plan launches, generate content, and manage day-to-day ops from one place.
        </p>

        {/* Tech Snapshot (public) */}
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "TypeScript",
            "React",
            "Node.js",
            "REST + WebSockets",
            "Relational DB",
            "Auth",
            "Object Storage",
            "Job Queue",
          ].map((t) => (
            <span
              key={t}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-6 flex gap-3">
          <a
            href="mailto:hi@jadynwor.com?subject=Drop%20That%20Demo%20Request"
            className="inline-flex items-center px-5 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            Request a Demo →
          </a>
          <span className="inline-flex items-center px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
            Code private • details on request
          </span>
        </div>
      </header>

      <div className="space-y-12">
        {/* Problem */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">The Problem</h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Early-stage apparel founders juggle brand voice, pricing, launch calendars, outreach, assets, and ops across
              scattered tools. They need a focused workspace that helps plan, create, and ship faster.
            </p>
          </div>
        </section>

        {/* Approach (kept high-level) */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Approach</h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>AI-assisted flows for planning, captions, outreach, and brief generation.</li>
              <li>Single workspace for tasks, assets, calendars, and notes.</li>
              <li>Real-time UI for collaborative edits and status updates.</li>
              <li>Private, role-based access; sensitive operations gated behind auth.</li>
            </ul>
          </div>
        </section>

        {/* Selected Highlights (non-sensitive) */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Selected Highlights</h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">AI Workflows</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Structured prompts and guardrails produce on-brand content (captions, briefs, outreach) with quick
                iteration and versioning.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Ops Surface</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Tasks, launch calendar, and assets in one place; lightweight job processing for long-running tasks.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Real-time UX</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Live updates for chats and boards; optimistic UI with server reconciliation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Privacy & Safety</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Role-based access, input validation, rate limiting, and basic observability. No secrets or keys exposed in client.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture snapshot (generic) */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Architecture (Public Snapshot)</h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Client</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>SPA (TypeScript + React)</li>
                  <li>Protected routes</li>
                  <li>Real-time UI updates</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">API</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>REST + WebSockets</li>
                  <li>Validation & auth</li>
                  <li>Background jobs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Data & Infra</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Relational DB</li>
                  <li>Object storage</li>
                  <li>Observability basics</li>
                </ul>
              </div>
            </div>

            {/* Diagram placeholder */}
            <div className="mt-6 bg-gray-200 dark:bg-gray-700 rounded-lg p-8 text-center">
              <p className="text-gray-600 dark:text-gray-300">[Diagram Placeholder]</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                High-level only. Detailed design available for interviews.
              </p>
            </div>
          </div>
        </section>

        {/* Status & Next */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Status & Next</h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Current: private beta with core AI workflows enabled.</li>
              <li>Next: expand ops surface; tighten onboarding; broaden early access.</li>
              <li>Note: infrastructure and source are private; happy to walk through architecture live.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
