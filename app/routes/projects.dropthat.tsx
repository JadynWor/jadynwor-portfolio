// app/routes/projects.drop-that.tsx
import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ([
  { title: "Drop That — Project" },
  { name: "description", content: "AI-assisted toolkit for streetwear founders — high-level overview (private beta)." }
]);

export default function DropThatProject() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 sm:py-16 lg:py-20">
      {/* Back */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm font-medium"
        >
          ← Back to Portfolio
        </Link>
      </div>

      {/* Header */}
      <header className="mb-16 border-b border-gray-200 dark:border-gray-800 pb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight tracking-tight">
          Drop That <span className="text-base align-middle font-medium text-gray-500 dark:text-gray-400">· private beta</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          AI-assisted toolkit for streetwear founders — plan launches, generate content, and manage day-to-day ops from one place.
        </p>

        {/* Tech Snapshot (public) */}
        <div className="flex flex-wrap gap-2 mb-8">
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
              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium border border-gray-200 dark:border-gray-700"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex gap-3">
          <a
            href="mailto:hi@jadynwor.com?subject=Drop%20That%20Demo%20Request"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
          >
            Request a Demo →
          </a>
          <span className="inline-flex items-center px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
            Code private • details on request
          </span>
        </div>
      </header>

      <div className="space-y-16">
        {/* Problem */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">The Problem</h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Early-stage apparel founders juggle brand voice, pricing, launch calendars, outreach, assets, and ops across scattered tools. They need a focused workspace that helps plan, create, and ship faster.
            </p>
          </div>
        </section>

        {/* Approach (kept high-level) */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Approach</h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <ul className="list-disc list-outside space-y-3 text-lg text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
              <li>AI-assisted flows for planning, captions, outreach, and brief generation.</li>
              <li>Single workspace for tasks, assets, calendars, and notes.</li>
              <li>Real-time UI for collaborative edits and status updates.</li>
              <li>Private, role-based access; sensitive operations gated behind auth.</li>
            </ul>
          </div>
        </section>

        {/* Selected Highlights (non-sensitive) */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Selected Highlights</h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 grid md:grid-cols-2 gap-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">AI Workflows</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Structured prompts and guardrails produce on-brand content (captions, briefs, outreach) with quick iteration and versioning.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Ops Surface</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Tasks, launch calendar, and assets in one place; lightweight job processing for long-running tasks.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Real-time UX</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Live updates for chats and boards; optimistic UI with server reconciliation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Privacy & Safety</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Role-based access, input validation, rate limiting, and basic observability. No secrets or keys exposed in client.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture snapshot (generic) */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Architecture (Public Snapshot)</h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 space-y-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Client</h3>
                <ul className="list-disc list-outside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
                  <li>SPA (TypeScript + React)</li>
                  <li>Protected routes</li>
                  <li>Real-time UI updates</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">API</h3>
                <ul className="list-disc list-outside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
                  <li>REST + WebSockets</li>
                  <li>Validation & auth</li>
                  <li>Background jobs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Data & Infra</h3>
                <ul className="list-disc list-outside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
                  <li>Relational DB</li>
                  <li>Object storage</li>
                  <li>Observability basics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Status & Next */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Status & Next</h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <ul className="list-disc list-outside space-y-3 text-lg text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
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
