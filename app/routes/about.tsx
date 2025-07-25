// app/routes/about.tsx
import type { MetaFunction } from "@remix-run/node";
import { Timeline } from "~/components/Timeline";

export const meta: MetaFunction = () => [
  { title: "About — Jadyn Wor" },
  { name: "description", content: "A bit about me and my journey so far." },
];

export default function About() {
  // Replace these with your own images in public/images/
  const photos = [
    "/images/shore.jpg",
    "/images/night-out.jpg",
    "/images/aquarium.jpg",
    "/images/rocks.jpg",
  ];

  // Tailwind rotate classes (make sure these exist in your tailwind.config.js)
  const rotations = ["-6", "3", "-3", "6"] as const;

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <main className="max-w-4xl mx-auto px-6 py-20 space-y-16 text-left">
        {/* Header */}
        <section>
          <h1 className="text-5xl font-bold">About</h1>
          <p className="mt-4 text-lg text-gray-800 dark:text-gray-200">
            A little bit about me…
          </p>
        </section>

        {/* Photo Collage */}
        <section className="relative h-64">
          {photos.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Photo ${idx + 1}`}
              className={`
                absolute top-0 left-1/2
                w-48 h-48 object-cover rounded-xl shadow-lg
                transform -translate-x-1/2 rotate-${rotations[idx]}
              `}
              style={{
                zIndex: photos.length - idx,
                marginLeft: `${(idx - 1.5) * 3}rem`,
              }}
            />
          ))}
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Timeline</h2>
          <Timeline />
        </section>
      </main>
    </div>
  );
}
