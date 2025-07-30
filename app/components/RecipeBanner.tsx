// app/components/RecipeBanner.tsx
import React, { useEffect, useState } from "react";
import { useFetcher } from "@remix-run/react";

type Recipe = {
  title: string;
  image: string;
  summary: string;
  sourceUrl: string;
};

export function RecipeBanner() {
  const fetcher = useFetcher<Recipe & { message?: string }>();
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    fetcher.load("/api/recipe-of-the-day");
  }, [fetcher]);

  if (!mounted) return null;

  if (fetcher.state === "loading") {
    return <div className="p-4">Loading recipe… 🍲</div>;
  }

  // If the API returned a `message` field (e.g. Invalid API key)
  if (fetcher.data?.message) {
    console.error("API Error:", fetcher.data.message);
    return (
      <div className="p-4 bg-red-100 text-red-800 rounded">
        Error from API: {fetcher.data.message}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-800 rounded">
        Unexpected error: {error}
      </div>
    );
  }

  if (!fetcher.data) {
    return (
      <div className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg text-center">
        No data returned.
      </div>
    );
  }

  const { title, image, summary, sourceUrl } = fetcher.data;

  return (
    <a
      href={sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center bg-yellow-50 dark:bg-yellow-900 hover:bg-yellow-100 dark:hover:bg-yellow-800 transition rounded-lg p-4 space-x-4"
    >
      <img
        src={image}
        alt={title}
        className="h-16 w-16 rounded-md object-cover flex-shrink-0"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Recipe of the Day
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
          {summary.replace(/<\/?[^>]+(>|$)/g, "")}
        </p>
      </div>
      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
        ▶ View Recipe
      </span>
    </a>
  );
}
