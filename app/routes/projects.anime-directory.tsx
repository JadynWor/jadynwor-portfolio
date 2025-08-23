import { Link } from "@remix-run/react";
import { projects } from "../components/projectsData";

export default function AnimeDirectoryProject() {
  const project = projects.find((p) => p.title === "Anime Directory");

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
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-green-700 transition-colors"
        >
          Visit Live Site →.v
        </a>
      </div>

      {/* Project Details */}
      <div className="space-y-12">
        {/* Problem Statement */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            The Problem
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I wanted a “YouTube-style” experience for anime clips where users
              can upload large videos and immediately get an optimized playback
              experience. The challenge: moving big files reliably from the
              browser, processing them at scale (transcoding + thumbnails),
              keeping costs low, and preventing duplicate work when background
              jobs retry. All of this had to be secure (no public write keys)
              and snappy in the UI.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            The Solution
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I built a fully serverless pipeline on Google Cloud. The web app
              (Next.js) authenticates with Firebase and requests a short-lived{" "}
              <strong>V4 signed URL</strong> to upload directly to a{" "}
              <strong>“raw”</strong> Cloud Storage bucket—bypassing my servers.
              A bucket notification triggers <strong>Pub/Sub</strong>, which
              pushes to a <strong>Cloud Run</strong> service. That service uses{" "}
              <strong>FFmpeg</strong> to transcode to 360p and extract a
              thumbnail, uploads results to a <strong>“processed”</strong>{" "}
              bucket, and writes a video document in{" "}
              <strong>Firestore</strong>. The UI lists processed videos and
              streams via a short-lived signed URL, so files stay private.
            </p>
          </div>
        </section>

        {/* Architecture */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Architecture & Technical Details
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                System Architecture
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Flow:</strong> Next.js (Firebase Auth) → callable
                function returns signed upload URL → client PUTs to Raw Bucket →
                GCS notifies Pub/Sub → Pub/Sub push → Cloud Run (FFmpeg) →
                Processed Bucket + thumbnail → Firestore <code>videos</code>{" "}
                document → Next.js lists &amp; streams via signed read URL.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>Idempotency guard in Cloud Run avoids duplicate work.</li>
                <li>
                  Filename validation + least-privilege service accounts for
                  safety.
                </li>
                <li>
                  <code>-movflags +faststart</code> for quicker playback start.
                </li>
                <li>
                  Optional public thumbnails; processed videos stay private.
                </li>
              </ul>
              {/* Placeholder for architecture diagram */}
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-8 text-center">
                <p className="text-gray-500 dark:text-gray-400">
                  <img src="/project/anime-directory-sys.avif" alt="Anime Directory Architecture" className="w-full h-auto" />
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                  Ingest → Raw Bucket → Pub/Sub → Cloud Run (FFmpeg) → Processed
                  Bucket + Firestore → Next.js
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Key Features
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Direct-to-GCS uploads via short-lived V4 signed URLs.</li>
                <li>Background transcoding (FFmpeg) to 360p.</li>
                <li>Automatic thumbnail extraction and upload.</li>
                <li>
                  Firestore video documents with status: processing/processed/
                  failed.
                </li>
                <li>Secure playback via short-lived signed read URLs.</li>
                <li>Next.js grid home, watch page, and “Suggested videos”.</li>
                <li>Serverless, pay-for-what-you-use infrastructure.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Challenges & Learnings */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Challenges & Key Learnings
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Technical Challenges
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Handling Pub/Sub redelivery without double-processing.</li>
                <li>
                  Next.js image optimization with private thumbnails (workarounds
                  &amp; config).
                </li>
                <li>Signed URL content-type matching and filename sanitizing.</li>
                <li>Cloud Run cold starts and resource tuning for FFmpeg.</li>
                <li>Artifact Registry + Docker workflow across regions.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                What I Learned
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  Designing idempotent, retry-safe serverless pipelines with
                  Pub/Sub.
                </li>
                <li>FFmpeg presets and flags that improve startup latency.</li>
                <li>
                  Secure file handling with GCS signed URLs (read/write) and
                  IAM.
                </li>
                <li>
                  Next.js caching behavior (ISR) for dynamic yet cacheable pages.
                </li>
                <li>
                  Practical production wiring on GCP (Cloud Run, AR, Firestore).
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
