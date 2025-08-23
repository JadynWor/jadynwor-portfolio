// app/routes/projects.http-backends.tsx
import { Link } from "@remix-run/react";
import { projects } from "~/components/projectsData";

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
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          ← Back to Portfolio
        </Link>
      </div>

      {/* Project Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
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
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            View Repository →
          </a>
        )}
      </div>

      {/* Project Details */}
      <div className="space-y-12">
        {/* Problem */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            The Goal
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Build the same HTTP API twice—once in Spring Boot (Java) and once in Express (Node)—to compare ergonomics, performance, testing strategies, and deployment. Both backends share Postgres and Redis and are exercised with identical curl, k6, and integration tests.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Solution Overview
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 space-y-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Common REST surface: <code className="px-1 rounded bg-gray-200/70 dark:bg-gray-700">/health</code>, <code className="px-1 rounded bg-gray-200/70 dark:bg-gray-700">/todos</code>, <code className="px-1 rounded bg-gray-200/70 dark:bg-gray-700">/bookmarks</code></li>
              <li>Full validation, pagination, filtering, and sorting parity</li>
              <li>JWT auth + refresh tokens; rate limiting via Redis</li>
              <li>OpenAPI spec, k6 load tests, and Dockerized local stack</li>
            </ul>
          </div>
        </section>

        {/* Architecture */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Architecture & Stack
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Node.js Service</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Express + Zod validation</li>
                  <li>pg client for Postgres</li>
                  <li>Redis cache + rate limiting</li>
                  <li>Jest integration tests</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Java Service</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Spring Boot (Web, Data JPA)</li>
                  <li>Hibernate → Postgres</li>
                  <li>JWT filter + Controller/Service/Repo</li>
                  <li>Maven + Spring Test</li>
                </ul>
              </div>
            </div>

            {/* Diagram placeholder */}
            <div className="mt-6 bg-gray-200 dark:bg-gray-700 rounded-lg p-8 text-center">
              <p className="text-gray-600 dark:text-gray-300">[Architecture Diagram Placeholder]</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Java & Node services → NGINX → Postgres + Redis</p>
            </div>
          </div>
        </section>

        {/* Key Endpoints */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Key Endpoints (Shared Contract)
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li><code className="px-1 rounded bg-gray-200/70 dark:bg-gray-700">GET /health</code> – service + DB + cache status</li>
              <li><code className="px-1 rounded bg-gray-200/70 dark:bg-gray-700">GET /todos?limit=&offset=</code> – pagination</li>
              <li><code className="px-1 rounded bg-gray-200/70 dark:bg-gray-700">POST /todos</code>, <code className="px-1 rounded bg-gray-200/70 dark:bg-gray-700">PATCH /todos/:id</code>, <code className="px-1 rounded bg-gray-200/70 dark:bg-gray-700">DELETE /todos/:id</code></li>
              <li><code className="px-1 rounded bg-gray-200/70 dark:bg-gray-700">/bookmarks</code> – filtering, sorting, search</li>
              <li><code className="px-1 rounded bg-gray-200/70 dark:bg-gray-700">/auth/login</code>, <code className="px-1 rounded bg-gray-200/70 dark:bg-gray-700">/auth/refresh</code></li>
            </ul>

            <div className="mt-4">
              <pre className="bg-black/80 text-green-200 p-4 rounded-lg overflow-x-auto text-sm">
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Tests, Perf & Observability
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 space-y-3">
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Integration tests for success & error paths; OpenAPI contract checks</li>
              <li>k6 load tests; compare p95 latency Java vs Node</li>
              <li>Request ID logging, basic metrics (<code className="px-1 rounded bg-gray-200/70 dark:bg-gray-700">/metrics</code>)</li>
            </ul>
          </div>
        </section>

        {/* Deployment */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Deployment
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 space-y-2">
            <p className="text-gray-700 dark:text-gray-300">
              Docker Compose for local dev (Postgres + Redis + both services). CI builds and runs tests; images can be pushed to a registry and deployed behind NGINX as an API gateway.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}