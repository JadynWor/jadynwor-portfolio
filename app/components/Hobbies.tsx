// app/components/Hobbies.tsx
import React from "react";
import type { Hobby } from "./hobbiesData";
import { hobbies } from "./hobbiesData";
import { Link } from "@remix-run/react";

export function Hobbies({ items = hobbies }: { items?: Hobby[] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        Hobbies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((h, i) => (
          <div key={i}>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              {h.title}
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              {h.description}
            </p>
            {h.statLink ? (
              <Link
                to={h.statLink}
                className={`mt-2 inline-block ${h.statColor} hover:underline text-sm font-semibold`}
              >
                {h.statText}
              </Link>
            ) : (
              <span className={`mt-2 block ${h.statColor} text-sm font-semibold`}>
                {h.statText}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
