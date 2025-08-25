// app/components/LeetCodeBadge.tsx
import { useEffect } from "react";
import { useFetcher } from "@remix-run/react";

export function LeetCodeBadge() {
  const fetcher = useFetcher<{ total: number; easy: number; medium: number; hard: number }>();

  useEffect(() => {
    if (fetcher.state === "idle" && !fetcher.data) {
      fetcher.load("/api/leetcode");
    }
  }, [fetcher]);

  if (fetcher.state === "loading" || !fetcher.data) {
    return <div className="text-sm text-gray-500">Fetching LeetCode…</div>;
  }

  const { total, easy, medium, hard } = fetcher.data;
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 dark:bg-amber-900/30 px-3 py-1 text-sm">
      <span className="font-medium">LeetCode:</span>
      <span className="rounded bg-green-100 dark:bg-green-900/40 px-2">Total {total}</span>
      <span className="rounded bg-emerald-100 dark:bg-emerald-900/40 px-2">E {easy}</span>
      <span className="rounded bg-yellow-100 dark:bg-yellow-900/40 px-2">M {medium}</span>
      <span className="rounded bg-red-100 dark:bg-red-900/40 px-2">H {hard}</span>
    </div>
  );
}
