// app/routes/index.tsx
import type { MetaFunction } from "@remix-run/node";
import { Typewriter } from "~/components/Typewriter";
import { Projects } from "~/components/Projects";

export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Jadyn Wor | Portfolio" },
    { name: "description", content: "Jadyn Wor's full‑stack engineer portfolio" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
};

export default function Index() {
  return (
    <div>
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Typewriter headline */}
        <Typewriter
          words={["hello, Jadyn here"]}
          loop={false}
          delaySpeed={1500}
        />

        {/* Sub‑heading */}
        <p className="mt-8 text-2xl text-gray-800 dark:text-gray-200">
          Welcome to my portfolio!
        </p>
      </main>
      
      {/* Projects Section */}
      <Projects />
    </div>
  );
}
