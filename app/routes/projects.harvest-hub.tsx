import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { projects } from "~/components/projectsData";
import { useState, useEffect } from "react";

export const meta: MetaFunction = () => ([
  { title: "Harvest Hub — Verified Community Food Sharing" },
  {
    name: "description",
    content:
      "Overnight hackathon project where restaurants post surplus meals, neighbors claim them, and an image model verifies pickups by comparing before and after photos."
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
          An overnight hackathon project that connects restaurants with surplus meals to community members. The twist? An AI-powered image verification system that automatically validates pickups by comparing before and after photos—all stored securely in private Supabase buckets.
        </p>

        {/* Team */}
        <div className="mb-8">
          <p className="text-base text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-gray-100">Team:</span>{" "}
            <span className="text-gray-700 dark:text-gray-300">Joseph Caballero · Dean Walston · Mercedes Mathews · Me</span>
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
              Harvest Hub solves a real problem: connecting surplus food with people who need it, while ensuring the system can't be gamed. Here's how it works:
            </p>
            <ul className="list-disc list-outside space-y-3 text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
              <li><strong>Restaurants post listings</strong> with photos of surplus cooked food and set pickup windows</li>
              <li><strong>Community members claim portions</strong> and upload proof photos after pickup</li>
              <li><strong>AI verification</strong> compares the original listing photo with the proof photo using a similarity score—if it passes the threshold, the claim is automatically verified</li>
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
                  Listing Page
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
                  Claim Flow
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
                  Verification State
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
                Next.js and React with TypeScript for the full-stack application. Supabase handles authentication, PostgreSQL database, and private storage buckets. Next.js API routes manage business logic, while OpenAI's vision model powers the image verification system.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Frontend
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Tailwind CSS for styling, shadcn ui for polished components, lucide-react for intuitive icons, and Framer Motion for smooth animations. This combination let us build a professional interface quickly without getting bogged down in custom CSS.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Platform
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Deployed on Vercel, which seamlessly handles both the Next.js application and API routes in a single deployment.
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
              The hackathon kicked off at 6 PM with three tracks: health advocacy, financial literacy, and food scarcity. We chose food scarcity—and committed to building something that actually worked, not just a polished demo.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              After the initial brainstorming, we worked from 11 PM to 8 AM to build a complete flow:
            </p>
            <ol className="list-decimal list-outside space-y-3 text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
              <li>Restaurants post listings with photos of surplus food</li>
              <li>Community members claim portions they want</li>
              <li>After pickup, users upload proof photos</li>
              <li>The backend verifies the match and updates metrics automatically</li>
            </ol>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Rather than stopping at a Figma mockup, we built real functionality: working APIs for file uploads and database writes, secure storage in Supabase private buckets, and actual verification logic that compares images and makes decisions based on similarity scores.
            </p>
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
                One repository, one deployment for both UI and backend. File-based routing made it easy to organize listing pages, claim flows, and dashboards. API routes handled business logic without needing a separate Node server. Perfect for an overnight project where we wanted to focus on behavior, not infrastructure setup.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Supabase (backend + storage)
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Supabase gave us everything we needed out of the box. Email-based authentication for both restaurants and community users. PostgreSQL tables for <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">restaurants</code>, <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">listings</code>, <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">claims</code>, and <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">image_verifications</code>. Row Level Security ensured users only saw their own data.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Private storage buckets kept all food and proof photos secure, accessible only via short-lived signed URLs generated server-side. This let us skip building custom auth and storage infrastructure, so we could focus on the actual user flows.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                OpenAI (image verification)
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Our API route sends both the original listing image and the proof photo to OpenAI's vision model. The model returns a similarity score. If it's above 95%, we mark the claim as verified. If lower, it gets flagged for review. Simple rule, easy to explain: if your proof photo actually looks like the original tray, the system trusts you.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                shadcn ui + lucide
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Pre-built components for cards, forms, and dialogs. Lucide icons made actions obvious—claim buttons, verify status, and state indicators. This meant we spent our time on UX and data flow, not wrestling with raw CSS.
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
              The architecture is straightforward and purpose-built:
            </p>
            <ul className="list-disc list-outside space-y-3 text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
              <li><strong>Next.js on Vercel</strong> serves all pages (listing browse, create listing, claims, dashboard) and handles API routes: <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">/api/listings</code>, <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">/api/claims</code>, and <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">/api/verify</code></li>
              <li><strong>Supabase</strong> manages authentication, sessions, PostgreSQL database (all entities), and private storage buckets for images</li>
              <li><strong>OpenAI</strong> provides the vision model that scores image similarity for verification</li>
            </ul>
            {/* High Level Architecture Diagram */}
            <figure className="mt-8">
              <img
                src="/project/harvesthub.png.png"
                alt="High level architecture diagram: Client → Next.js → Supabase Auth / DB / Storage → OpenAI"
                className="w-full rounded-xl shadow-xl border-2 border-gray-200 dark:border-gray-700"
              />
              <figcaption className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center font-medium">
                High level architecture — Client → Next.js → Supabase Auth / DB / Storage → OpenAI
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
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Restaurant staff fills out a form in the Next.js UI and uploads a photo of the surplus food tray.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                The API route uploads the image to Supabase Storage (private bucket) and inserts a row into the listings table with restaurant ID, description, pickup window, and image path. Every listing is guaranteed to have both a database record and a secure image in storage.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                2. Create claim – POST /api/claims
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                A community member signs in, browses available listings, selects one, and clicks Claim.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                The API route inserts a row into the claims table with user ID, listing ID, and status set to pending. At this point, the system knows who intends to pick up what, but hasn't marked the transaction as completed yet.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                3. Upload proof and verify – POST /api/verify
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                This is where the magic happens. After pickup, the user uploads a proof photo from their phone.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                The API route:
              </p>
              <ul className="list-disc list-outside space-y-2 text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
                <li>Uploads the proof image to the same private Supabase bucket</li>
                <li>Reads both image paths from PostgreSQL</li>
                <li>Generates short-lived signed URLs for both images (server-side only)</li>
                <li>Sends both URLs to OpenAI's vision model for comparison</li>
                <li>Stores the similarity score in the <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">image_verifications</code> table</li>
                <li>Updates the claim status: verified if score meets threshold, otherwise flagged for review</li>
              </ul>
              <p className="text-lg text-gray-600 dark:text-gray-400 italic mt-4 leading-relaxed">
                This turns two images into a single, traceable verification decision—no manual review needed for clear matches.
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
              The Next.js app runs on Vercel, serving both server and client components. Routes for listings and claims call Supabase Auth server-side to validate sessions before rendering. All write operations—creating listings, making claims, and verifying pickups—flow through API routes, keeping PostgreSQL and Supabase Storage perfectly in sync.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Supabase PostgreSQL is the single source of truth for all data. Storage buckets only expose photos via short-lived signed URLs generated server-side. OpenAI is called exclusively from the server—API keys and storage URLs never touch the browser, keeping everything secure.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-semibold">
              The mental model stays simple: <span className="text-blue-600 dark:text-blue-400">Client → API routes → Supabase + OpenAI</span>
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
              <li><strong>Next.js API routes for all writes:</strong> Centralized business logic, easier to secure and maintain</li>
              <li><strong>Supabase for auth and data:</strong> One platform for everything, faster development, less complexity</li>
              <li><strong>Server-side verification:</strong> Keeps API keys and sensitive logic away from the client, plus flexibility to change models without frontend updates</li>
              <li><strong>shadcn + lucide:</strong> Professional UI components in hours instead of days, letting us focus on functionality</li>
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
                We didn't have time for complex fraud detection systems. Instead, we focused on one clear signal: how similar are the two photos? This gave us an honest, explainable rule that users could understand and trust.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                File Uploads and Signed URLs Under Pressure
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Most of our time went into ensuring:
              </p>
              <ul className="list-disc list-outside space-y-2 text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
                <li>Uploads land in the correct private bucket</li>
                <li>File paths are stored accurately in the database</li>
                <li>Signed URLs are generated only server-side and expire correctly</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Parallel Work Through Clear API Contracts
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                By centering everything on three main endpoints, the team could work in parallel. One person handled API routes, database, and storage, while others built frontend forms and flows using shadcn UI components. Clear contracts meant no blocking dependencies.
              </p>
            </div>
          </div>
        </section>

        {/* Scalable architecture */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Future: Scaling to 100k Users
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-8 space-y-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            {/* Scalable Architecture Diagram */}
            <figure>
              <img
                src="/project/harvesth-scalable.png"
                alt="Scalable architecture diagram: CDN → LB → Next.js instances → Supabase → Queue → Worker → Model"
                className="w-full rounded-xl shadow-xl border-2 border-gray-200 dark:border-gray-700"
              />
              <figcaption className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center font-medium">
                Scalable architecture — CDN → LB → Next.js instances → Supabase → Queue → Worker → Model
              </figcaption>
            </figure>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              To scale beyond a hackathon demo to handle 100k users and 1M reads per day:
            </p>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Web and API Tier
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Use CDN and edge caching for public listing pages. Run multiple Next.js instances behind a load balancer. Keep read endpoints cache-friendly, write endpoints transactional and consistent.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Supabase (Data + Storage)
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Add strategic indexes on listings, claims, and verification tables. Keep verification rows append-only, expose aggregates via materialized views. Leverage Supabase's built-in scaling for both Postgres and storage.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Asynchronous Image Verification
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Refactor <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono">/api/verify</code> to enqueue jobs instead of blocking on the model. A worker service pulls jobs from a queue, fetches signed URLs from storage, calls the vision model, and writes scores back to Postgres. Consider an embedding-based similarity approach (vision model → vectors → cosine similarity) for better flexibility and performance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Reliability and Safety
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Implement edge caching for read-heavy endpoints. Add rate limits on claim and verify endpoints to prevent abuse. Set up centralized monitoring and logging for API latency, error rates, worker throughput, failures, and spikes in rejected claims.
              </p>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              Same architecture shape, just hardened: Next.js at the edge, Supabase as the core backend, an async image verification pipeline on the side.
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

