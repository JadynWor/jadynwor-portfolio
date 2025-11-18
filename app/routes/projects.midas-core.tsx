import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { projects } from "~/components/projectsData";

export const meta: MetaFunction = () => ([
  { title: "Midas Core: Balances API — Project" },
  {
    name: "description",
    content:
      "Spring Boot microservice that ingests Kafka transactions and serves real-time balances over a minimal REST layer on port 33400."
  }
]);

export default function MidasCoreProject() {
  const project = projects.find(p => p.title === "Midas Core: Balances API");

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
          Midas Core: Balances API
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          Spring Boot microservice that ingests transaction events from Kafka and serves real-time balances on a lightweight REST endpoint. One deployable handles streaming updates and read requests on a fixed port for operational simplicity.
        </p>

        {project && (
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Diagram */}
      <figure className="mb-16">
        <img
          src="/project/midas_core_arch.png"
          alt="Midas Core architecture diagram showing Kafka ingestion, Spring components, and the balances API."
          className="w-full rounded-xl shadow-xl border-2 border-gray-200 dark:border-gray-700"
        />
        <figcaption className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center font-medium">
          Kafka events feed the balances table; the REST controller reads from the same Spring context.
        </figcaption>
      </figure>

      <div className="space-y-16">
        {/* Problem */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            The Problem
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 space-y-4 border border-gray-200 dark:border-gray-700 shadow-sm">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Users needed a trustworthy way to check balances inside Midas, but the core service only ingested transactions. Spinning up a dedicated read surface would add another deployable and operational overhead for what amounts to a single endpoint.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            The Solution
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 space-y-6 border border-gray-200 dark:border-gray-700 shadow-sm">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Extend Midas Core to answer read requests alongside its Kafka consumer. A new Spring MVC controller exposes <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">GET /balance</code> and reuses the same transactional model used by the consumer.
            </p>
            <ul className="list-disc list-outside space-y-3 text-lg text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
              <li>No new service to provision; one build, one deployment.</li>
              <li>Fast response path: single SQL lookup via Spring Data JPA.</li>
              <li>Graceful defaults: unknown users return a zeroed balance DTO.</li>
              <li>Future-proof: if reads grow, the controller layer can be extracted.</li>
            </ul>
          </div>
        </section>

        {/* Architecture & Technical Details */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Architecture & Technical Details
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 space-y-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                System Flow
              </h3>
              <ul className="list-disc list-outside space-y-3 text-lg text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
                <li>Incentive service emits transaction events to Kafka.</li>
                <li>Midas Core consumes each event, applying mutations to a balances table in PostgreSQL.</li>
                <li>Clients issue <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">GET /balance?userId=...</code> on port 33400.</li>
                <li>The controller returns a serialized <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">Balance</code> DTO with the latest amount.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Runtime View
              </h3>
              <ul className="list-disc list-outside space-y-3 text-lg text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
                <li>Kafka listener runs continuously, applying each transaction to the aggregate balance.</li>
                <li>REST controller lives inside the same Spring context, reading via a JPA repository.</li>
                <li>All traffic is served on a fixed port for simple routing and security rules.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Endpoint Contract
              </h3>
              <div className="bg-white/70 dark:bg-gray-900/40 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <ul className="list-none space-y-2 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <li><strong>Path:</strong> /balance</li>
                  <li><strong>Method:</strong> GET</li>
                  <li><strong>Query:</strong> userId</li>
                  <li><strong>Response:</strong> JSON <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">Balance</code> object</li>
                  <li><strong>Fallback:</strong> Unknown user → amount 0</li>
                  <li><strong>Port:</strong> 33400</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Persistence Model
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                The <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">balances</code> table is keyed by user ID with a decimal amount column. Kafka-driven writes are the source of truth, while reads stay pure by issuing a single repository call per request.
              </p>
            </div>
          </div>
        </section>

        {/* Why it works */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Why This Cut Works
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 grid md:grid-cols-2 gap-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Architecture Tradeoff
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                A separate read service would be clean but slower to ship and support. Folding the endpoint into Core keeps the surface area minimal while retaining a clear path to extract later.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Event-Driven Correctness
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                The database remains the canonical source—Kafka listeners derive balances deterministically, so the REST layer stays stateless and safe.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Operational Simplicity
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                One build, one deployment target, one health check. Less to monitor for an intentionally small feature.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Key Features
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <ul className="list-disc list-outside space-y-3 text-lg text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
              <li>Single call to fetch a user balance with millisecond latency.</li>
              <li>Zero default for unknown users to avoid leaking errors to clients.</li>
              <li>JSON contract that mirrors the shared <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">Balance</code> DTO.</li>
              <li>Kafka-driven transaction ingestion and reconciliation.</li>
              <li>Runs alongside the Kafka listener inside one Spring Boot application.</li>
              <li>Fixed port 33400 for predictable routing and firewall rules.</li>
            </ul>
          </div>
        </section>

        {/* Challenges & Learnings */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Challenges & Learnings
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 space-y-6 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Architecture Tradeoff
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Balancing separation of concerns with delivery speed led to layering a read controller inside Core. The code stays modular so the controller can be extracted once traffic justifies it.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Event-Driven Correctness
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Keeping the database as the source of truth avoids drift between streaming ingest and reads. The controller never mutates data, it only projects the latest balance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Operational Simplicity
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Fewer deployables mean less monitoring, fewer secrets, and simpler on-call playbooks—ideal for a feature that started as a small experiment.
              </p>
            </div>
          </div>
        </section>

        {/* What I Built */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            What I Built
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <ul className="list-disc list-outside space-y-3 text-lg text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
              <li>Spring Boot application with a Kafka listener that applies transactions to the balances table.</li>
              <li>REST controller that returns the <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">Balance</code> DTO on <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">/balance</code>.</li>
              <li>Configuration for serving on port 33400 and graceful zero defaults for unknown users.</li>
              <li>JUnit coverage around the controller and repository interactions.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
