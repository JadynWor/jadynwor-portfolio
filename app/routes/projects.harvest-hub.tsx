import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { projects } from "~/components/projectsData";
import { useState, useEffect } from "react";

export const meta: MetaFunction = () => ([
  { title: "Harvest Hub — Verified Community Food Sharing" },
  {
    name: "description",
    content:
      "Harvest Hub is a hackathon project where people post surplus meals, neighbors claim them, and a small image check confirms the pickup using Supabase and OpenAI."
  }
]);

export default function HarvestHubProject() {
  const project = projects.find(p => p.title === "Harvest Hub");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

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
          Harvest Hub: Verified Community Food Sharing
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          Harvest Hub is a small web app my team and I built during a 24 hour hackathon. People can list extra food, people nearby can quietly claim it, and after pickup we run a simple image check that compares the “before” and “after” photos using Supabase Storage and an OpenAI.
        </p>

        {/* Team */}
        <div className="mb-8">
          <p className="text-base text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-gray-100">Team:</span>{" "}
            <span className="text-gray-700 dark:text-gray-300">
              Jadyn Worthington · Joseph Caballero · Dean Walston · Mercedes Mathews
            </span>
          </p>
        </div>

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

        {/* Deployment Link */}
        <a
          href="https://harvest-hub-orpin.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
        >
          View Live Deployment →
        </a>
      </header>

      <div className="space-y-16">
        {/* What the product does */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            What the Product Does
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 space-y-6 border border-gray-200 dark:border-gray-700 shadow-sm">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              The goal was simple: move real food to real people and keep the system honest without a lot of manual oversight.
            </p>
            <ul className="list-disc list-outside space-y-3 text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
              <li>
                <strong>People(the public) post listings</strong> with a photo of surplus cooked food and a pickup window.
              </li>
              <li>
                <strong>Community members claim portions</strong> from a feed of open listings.
              </li>
              <li>
                <strong>After pickup, users upload a proof photo</strong>. The backend compares it to the original image and marks the claim as verified if the similarity score is high enough.
              </li>
            </ul>

            {/* Product Screenshots */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <figure className="group">
                <button
                  onClick={() => setSelectedImage("/project/hh-overview1 (1).png")}
                  className="w-full cursor-pointer hover:scale-[1.02] transition-transform duration-200"
                >
                  <img
                    src="/project/hh-overview1 (1).png"
                    alt="Harvest Hub listing page screenshot"
                    className="w-full rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700 group-hover:border-blue-400 dark:group-hover:border-blue-600 transition-colors"
                  />
                </button>
                <figcaption className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
                  Listing page
                </figcaption>
              </figure>
              <figure className="group">
                <button
                  onClick={() => setSelectedImage("/project/hh-overview1 (2).png")}
                  className="w-full cursor-pointer hover:scale-[1.02] transition-transform duration-200"
                >
                  <img
                    src="/project/hh-overview1 (2).png"
                    alt="Harvest Hub claim flow screenshot"
                    className="w-full rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700 group-hover:border-blue-400 dark:group-hover:border-blue-600 transition-colors"
                  />
                </button>
                <figcaption className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
                  Claim flow
                </figcaption>
              </figure>
              <figure className="group">
                <button
                  onClick={() => setSelectedImage("/project/hh-overview1 (3).png")}
                  className="w-full cursor-pointer hover:scale-[1.02] transition-transform duration-200"
                >
                  <img
                    src="/project/hh-overview1 (3).png"
                    alt="Harvest Hub verification state screenshot"
                    className="w-full rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700 group-hover:border-blue-400 dark:group-hover:border-blue-600 transition-colors"
                  />
                </button>
                <figcaption className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
                  Verification state
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Tech Stack
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 space-y-6 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Core
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The app is built with Next.js, React, and TypeScript so the UI and APIs live in the same codebase. Supabase handles auth, Postgres, and private file storage. A single Next.js API route calls an OpenAI vision model to score how similar two images are.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Frontend
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Tailwind CSS keeps layout and spacing fast to work with. shadcn ui gives us solid, accessible components, and lucide-react provides the icons. It is a small stack, but it let us get to “usable” quickly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Platform
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Everything is deployed on Vercel, which runs both the Next.js pages and the API routes in one deployment.
              </p>
            </div>
          </div>
        </section>

        {/* Background */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Background
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 space-y-6 border border-gray-200 dark:border-gray-700 shadow-sm">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              The hackathon opened with three prompts: health advocacy, financial literacy, and food scarcity. We picked food scarcity and decided that if we were going to stay up all night, we wanted something that actually moved data end to end, not just a slide deck.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              After the kickoff, we worked from about 11 PM to 8 AM building the core loop:
            </p>
            <ol className="list-decimal list-outside space-y-3 text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
              <li>People create listings with photos of surplus food.</li>
              <li>Community members claim the listings they want.</li>
              <li>Users upload a proof photo after pickup.</li>
              <li>The backend decides whether to verify the claim based on image similarity.</li>
            </ol>
          </div>
        </section>

        {/* Why this tech stack */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Why This Tech Stack
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 space-y-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Next.js (web + API)
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                One stack for pages and backend code meant less setup and more time shipping features. File based routing gave us quick pages for listings and claims, and API routes let us keep all our logic close to the UI.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Supabase (backend + storage)
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Supabase gave us auth, Postgres, and file storage with a single client. We created basic tables for{" "}
                <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">publishers</code>,{" "}
                <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">listings</code>,{" "}
                <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">claims</code>, and{" "}
                <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">image_verifications</code>.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Images live in a private bucket. The server generates short lived signed URLs whenever the verification route needs to read them, so we never expose bucket keys to the browser.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                OpenAI (image verification)
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                For verification, we send the original listing image and the proof image to an OpenAI endpoint and use the similarity score it returns. If the score is high enough, the claim is marked verified; otherwise it is flagged. It is not perfect, but it was enough to show the idea working.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                shadcn ui + lucide + Framer Motion
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                We used shadcn ui for forms, cards, and modals, and lucide for icons. Those libraries let us keep the interface clean without sinking hours into custom styling also using Framer gave good animations for ladning page.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture overview */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Architecture Overview
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 space-y-6 border border-gray-200 dark:border-gray-700 shadow-sm">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              At a high level:
            </p>
            <ul className="list-disc list-outside space-y-3 text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
              <li>
                <strong>Next.js on Vercel</strong> renders the UI and exposes API routes like{" "}
                <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">/api/listings</code>,{" "}
                <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">/api/claims</code>, and{" "}
                <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">/api/verify</code>.
              </li>
              <li>
                <strong>Supabase</strong> manages auth, Postgres tables, and private storage buckets.
              </li>
              <li>
                <strong>OpenAI</strong> provides the image similarity score when we need to verify a claim.
              </li>
            </ul>
            <figure className="mt-8">
              <img
                src="/project/harvesthub.png.png"
                alt="High level architecture diagram: Client → Next.js → Supabase Auth / DB / Storage → OpenAI"
                className="w-full rounded-xl shadow-xl border-2 border-gray-200 dark:border-gray-700"
              />
              <figcaption className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center font-medium">
                High level architecture — Client → Next.js → Supabase → OpenAI
              </figcaption>
            </figure>
          </div>
        </section>

        {/* API design and data flow */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            API Design and Data Flow
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 space-y-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                1. Create listing – POST /api/listings
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                The route receives the listing form and image, uploads the image to a private bucket, and creates a row in{" "}
                <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">listings</code> with the image path and pickup window.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                2. Create claim – POST /api/claims
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When a user claims a listing, we insert a row in{" "}
                <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">claims</code> with status set to{" "}
                <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">pending</code>. This records intent but does not count as a finished pickup yet.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                3. Upload proof and verify – POST /api/verify
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                After pickup, the user uploads a proof photo. The route stores that image, fetches both image paths, generates signed URLs, and calls the OpenAI model.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                We store the score in{" "}
                <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">image_verifications</code> and update the claim to{" "}
                <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">verified</code> or flagged depending on the threshold.
              </p>
            </div>
          </div>
        </section>

        {/* Runtime view */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Runtime View
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 space-y-4 border border-gray-200 dark:border-gray-700 shadow-sm">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              The Next.js app runs on Vercel and talks to Supabase and OpenAI only through server side API routes. Writes for listings, claims, and verifications all go through those routes, which keeps the database and storage in sync. Photos are only accessible via signed URLs, and the OpenAI API key never leaves the server.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-semibold">
              In short: <span className="text-blue-600 dark:text-blue-400">Client → API routes → Supabase + OpenAI</span>.
            </p>
          </div>
        </section>

        {/* Key technical decisions */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Key Technical Decisions
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 space-y-4 border border-gray-200 dark:border-gray-700 shadow-sm">
            <ul className="list-disc list-outside space-y-3 text-lg text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
              <li>Use Next.js API routes for all writes so logic, storage, and DB access stay in one place.</li>
              <li>Lean on Supabase for auth, Postgres, and file storage instead of wiring separate services.</li>
              <li>Keep image verification and OpenAI calls strictly server side for security and easier iteration.</li>
              <li>Use shadcn and lucide to get a clean UI without over-investing in custom design for a hackathon app.</li>
            </ul>
          </div>
        </section>

        {/* Challenges & learnings */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Challenges & Learnings
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 space-y-6 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Trust vs Simplicity
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                We did not have time for a full fraud system. A single similarity score and threshold felt like the right balance between something the judges could understand and something we could actually build that night.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                File Uploads and Signed URLs
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Most of the debugging time was spent on getting uploads into the right bucket, storing the paths correctly, and generating signed URLs only on the server.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Parallel Work Through Clear Endpoints
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                By agreeing on the shape of{" "}
                <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">POST /api/listings</code>,{" "}
                <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">POST /api/claims</code>, and{" "}
                <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">POST /api/verify</code> early, we were able to split the work between backend wiring and frontend flows without blocking each other.
              </p>
            </div>
          </div>
        </section>

        {/* Scalable architecture */}
        <section>
  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
    Future: Scaling the Idea
  </h2>
  <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 space-y-8 border border-gray-200 dark:border-gray-700 shadow-sm">
    <figure>
      <img
        src="/project/harvesth-scalable.png"
        alt="Scalable architecture diagram: CDN → load balancer → Next.js instances → Supabase → queue → worker → model"
        className="w-full rounded-xl shadow-xl border-2 border-gray-200 dark:border-gray-700"
      />
      <figcaption className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center font-medium">
        How I would grow Harvest Hub beyond the hackathon version
      </figcaption>
    </figure>

    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
      The current build is a one night hackathon project, but the shape of the system can handle real traffic with a few deliberate upgrades. 
      The target in my head is something like one hundred thousand users and around one million reads per day.
    </p>

    {/* Web and API tier */}
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
        Web and API tier
      </h3>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        I would keep Next.js but put it behind a CDN and a load balancer. Public listing pages are a good fit for edge caching so most read traffic never hits the app directly. 
        The app itself would run as a  few different Next.js instances that share the same environment and talk to the same Supabase project. 
        Read endpoints are tuned to be cache friendly. Write endpoints stay small and transactional so each request either succeeds or fails clearly.
      </p>
    </div>

    {/* Supabase data and storage */}
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
        Supabase data and storage
      </h3>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        On the Supabase side the work is mostly about discipline. 
        I would add targeted indexes on listings, claims, and verification tables that match how the UI actually queries them. 
        Verification rows can stay append only and analytics can read from materialized views or a small reporting table so heavy dashboards do not compete with core traffic. 
        Storage already scales well for images, so the main concern is keeping bucket paths predictable and signed URL lifetimes reasonable.
      </p>
    </div>

    {/* Async image verification */}
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
        Asynchronous image verification
      </h3>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        The main change to the core loop would be verification. 
        Right now the verify route calls the model directly. 
        At scale I would turn that into a job. 
        <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">POST /api/verify</code> would write a job into a queue and return quickly. 
        A small worker service should pull jobs, fetch signed URLs from Supabase Storage, then call the vision model, and then write the score and status back into Postgres.
      </p>
    </div>

    {/* CAP, reliability and safety */}
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
        Availability, consistency, and CAP trade offs
      </h3>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        In terms of CAP theorem, the internet will always give you network partitions at some point, so the real choice is how much consistency you are willing to trade for availability. 
        For Harvest Hub I would be more towards being available: people should still be able to see listings and claim food even if a replica or the worker is having a bad day.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
        That means core writes like creating a listing or a claim stay strongly consistent, but secondary views are allowed to be consistent. 
        A dashboard might be a few seconds behind. A verification status might take a small delay to flip from pending to verified. 
        That is an acceptable trade if it keeps the app responsive in my opinion.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
        Reliability and safety
      </h3>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        On top of that I would add edge caching for read heavy endpoints, rate limits on claim and verify routes. 
      </p>
    </div>

    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
      The overall shape of the system stays the same: Next.js at the edge, Supabase as the main backend, and an async verification service on the side. 
      The difference is that each piece is treated as something people rely on every day, not just something that has to survive a demo.
    </p>
  </div>
</section>

      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Enlarged screenshot"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
