// app/routes/projects.http-backends.tsx
import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { projects } from "~/components/projectsData";

export const meta: MetaFunction = () => ([
  { title: "HTTP Backends (Java & Node) — Project" },
  {
    name: "description",
    content: "Parallel backends in Spring Boot and Express that expose the same REST surface: CRUD, validation, JWT auth, pagination, rate limiting."
  }
]);

export default function HttpBackendsProject() {
  const project = projects.find(p => p.title === "HTTP Backends (Java & Node)");

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Project Not Found
          </h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 sm:py-16 lg:py-20">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm font-medium"
        >
          ← Back to Portfolio
        </Link>
      </div>

      {/* Project Header */}
      <header className="mb-16 border-b border-gray-200 dark:border-gray-800 pb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight tracking-tight">
          {project.title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium border border-gray-200 dark:border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* External Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
          >
            View Repository →
          </a>
        )}
      </header>

      {/* Project Details */}
      <div className="space-y-16">
        {/* Problem */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            The Goal
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Build the same HTTP API twice—once in Spring Boot (Java) and once in Express (Node)—to compare ergonomics, performance, testing strategies, and deployment. Both backends share Postgres and Redis and are exercised with identical curl, k6, and integration tests.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Solution Overview
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 space-y-6 border border-gray-200 dark:border-gray-700 shadow-sm">
            <ul className="list-disc list-outside space-y-3 text-lg text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
              <li>Common REST surface: <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">/health</code>, <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">/todos</code>, <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">/bookmarks</code></li>
              <li>Full validation, pagination, filtering, and sorting parity</li>
              <li>JWT auth + refresh tokens; rate limiting via Redis</li>
              <li>OpenAPI spec, k6 load tests, and Dockerized local stack</li>
            </ul>
          </div>
        </section>

        {/* Architecture */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Architecture & Stack
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 space-y-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Node.js Service</h3>
                <ul className="list-disc list-outside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
                  <li>Express + Zod validation</li>
                  <li>pg client for Postgres</li>
                  <li>Redis cache + rate limiting</li>
                  <li>Jest integration tests</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Java Service</h3>
                <ul className="list-disc list-outside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
                  <li>Spring Boot (Web, Data JPA)</li>
                  <li>Hibernate → Postgres</li>
                  <li>JWT filter + Controller/Service/Repo</li>
                  <li>Maven + Spring Test</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Endpoints */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Key Endpoints (Shared Contract)
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 space-y-6 border border-gray-200 dark:border-gray-700 shadow-sm">
            <ul className="list-disc list-outside space-y-3 text-lg text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
              <li><code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">GET /health</code> – service + DB + cache status</li>
              <li><code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">GET /todos?limit=&offset=</code> – pagination</li>
              <li><code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">POST /todos</code>, <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">PATCH /todos/:id</code>, <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">DELETE /todos/:id</code></li>
              <li><code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">/bookmarks</code> – filtering, sorting, search</li>
              <li><code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">/auth/login</code>, <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">/auth/refresh</code></li>
            </ul>

            <div className="mt-6">
              <pre className="bg-black/80 text-green-200 p-6 rounded-lg overflow-x-auto text-sm leading-relaxed">
                {`# Create
curl -X POST localhost:4000/todos \\
  -H 'content-type: application/json' \\
  -d '{"title":"learn http","done":false}'`}
              </pre>
            </div>
          </div>
        </section>

        {/* Testing & Observability */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Tests, Perf & Observability
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <ul className="list-disc list-outside space-y-3 text-lg text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
              <li>Integration tests for success & error paths; OpenAPI contract checks</li>
              <li>k6 load tests; compare p95 latency Java vs Node</li>
              <li>Request ID logging, basic metrics (<code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">/metrics</code>)</li>
            </ul>
          </div>
        </section>

        {/* Deployment */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Deployment
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Docker Compose for local dev (Postgres + Redis + both services). CI builds and runs tests; images can be pushed to a registry and deployed behind NGINX as an API gateway.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
