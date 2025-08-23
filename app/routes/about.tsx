// app/routes/about.tsx
import type { MetaFunction } from "@remix-run/node";
import { Hobbies } from "~/components/Hobbies";
import React, { useState } from "react";
import { Timeline } from "~/components/Timeline";
import { motion, useMotionValue, useTransform } from "framer-motion";

export const meta: MetaFunction = () => [
  { title: "About — Jadyn Wor" },
  { name: "description", content: "A bit about me and my journey so far." },
];

export default function About() {
  const photos = [
    {
      src: "/about/IMG_5519.jpeg",
      alt: "Graduation Pictures",
      date: "Spring 2024",
      location: "University of Delaware",
      description: "Combination(Drake Voice)",
      rotation: -8,
      dy: 10,
      z: 10
    },
    {
      src: "/about/IMG_5520.jpeg",
      alt: "Alphaversary Pictures",
      date: "Spring 2024",
      location: "University of Delaware",
      description: "Pretty aesthetic if you ask me :)",
      rotation: 4,
      dy: 4,
      z: 20
    },
    {
      src: "/about/IMG_5521.jpeg",
      alt: "Tech Conference Speaker",
      date: "Spring 2025",
      location: "Tech Council of Delaware",
      description: "Giving a talk on how to get started in tech",
      rotation: -3,
      dy: 8,
      z: 30
    },
    {
      src: "/about/IMG_5522.jpeg",
      alt: "TGP",
      date: "Summer 2025",
      location: "Houston, Texas",
      description: "Was pretty hot out there",
      rotation: 6,
      dy: 0,
      z: 20
    },
    {
      src: "/about/IMG_5523.jpeg",
      alt: "Scuba Diving",
      date: "Summer 2024",
      location: "Cozumel, Mexico",
      description: "Scuba diving with the guys",
      rotation: -5,
      dy: 6,
      z: 15
    }
  ];

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragEnd = (index: number) => {
    setDraggedIndex(null);
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-20 space-y-16 text-left">
      {/* Header */}
      <section>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
          About
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Who I am.
        </p>
      </section>

      {/* Photo Gallery - Draggable Layout */}
      <section className="relative pt-6 min-h-[300px] sm:min-h-[340px]">
        {/* soft floor shadow under the whole strip */}
        <div className="pointer-events-none absolute inset-x-24 sm:inset-x-32 bottom-6 h-10 rounded-full bg-black/20 blur-2xl dark:bg-black/30" />

        <div className="mx-auto flex items-end justify-center">
          {photos.map((p, i) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            const rotate = useTransform(x, [-100, 100], [-15, 15]);
            const scale = useTransform(y, [-100, 100], [0.9, 1.1]);

            return (
              <motion.figure
                key={i}
                className="group relative mx-[-1rem] sm:mx-[-1.25rem] cursor-grab active:cursor-grabbing"
                style={{
                  x,
                  y,
                  rotate: draggedIndex === i ? rotate : p.rotation,
                  scale: draggedIndex === i ? scale : 1,
                  zIndex: draggedIndex === i ? 100 : p.z,
                  transform: draggedIndex === i ? "none" : `translateY(${p.dy}px) rotate(${p.rotation}deg)`,
                }}
                drag
                dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                onDragStart={() => handleDragStart(i)}
                onDragEnd={() => handleDragEnd(i)}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0, 
                  zIndex: 60,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30 
                }}
              >
                {/* image */}
                <img
                  src={p.src}
                  alt={p.alt}
                  className="h-48 w-40 sm:h-56 sm:w-44 md:h-64 md:w-52 object-cover rounded-2xl shadow-2xl ring-1 ring-black/10 dark:ring-white/10 pointer-events-none"
                  draggable={false}
                />

                {/* hover overlay with "backside" info */}
                <figcaption className={`
                    pointer-events-none absolute inset-0 rounded-2xl 
                    flex items-center justify-center text-center p-4
                    bg-black/0 opacity-0
                    transition-all duration-300
                    group-hover:bg-black/60 group-hover:opacity-100
                  `}
                >
                  <div className="text-white transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                    <div className="text-xs font-semibold tracking-wide opacity-90">
                      {p.date} · {p.location}
                    </div>
                    <div className="mt-1 text-sm leading-relaxed">
                      {p.description}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
          Timeline
        </h2>
        <div className="relative before:absolute before:inset-y-0 before:left-1/2 before:w-[2px] before:bg-gray-200 dark:before:bg-gray-700">
          <Timeline />
        </div>
      </section>

      {/* Hobbies */}
      <section>
        <Hobbies />
      </section>
    </main>
  );
}
