// app/routes/youtube.tsx
import { Link } from "@remix-run/react";
import React from "react";

export default function YouTube() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          You didn’t read? bro I just said maybe in the future.
        </h1>
        <Link
          to="/contact"
          className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Contact
        </Link>
      </div>
    </div>
  );
}
