// app/components/Timeline.tsx
import { Milestone, timelineData } from "./timeline";
import { motion } from "framer-motion";
import React from "react";

export function Timeline({
  items = timelineData,
}: {
  items?: Milestone[];
}) {
  return (
    <div className="relative before:absolute before:inset-y-0 before:left-1/2 before:w-[2px] before:bg-gray-300">
      {items.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`flex w-full mb-12 ${
            i % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          <div className="w-1/2 px-4">
            <div className="flex items-center gap-3">
              <span
                className={`h-4 w-4 ${m.colorClass} rounded-full`}
              />
              <h3 className="text-lg font-semibold">{m.title}</h3>
              <span className="ml-auto text-sm text-gray-500">
                {m.start}
                {m.end ? ` – ${m.end}` : ""}
              </span>
            </div>
            {m.subtitle && (
              <p className="italic text-gray-400">{m.subtitle}</p>
            )}
            <ul className="mt-2 ml-6 list-disc text-gray-500">
              {m.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
