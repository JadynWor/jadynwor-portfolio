// app/routes/achievements.tsx
import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Achievements — Jadyn Wor" },
  { name: "description", content: "Research papers, articles, and awards." },
];

export default function AchievementsLayout() {
  return <Outlet />;
}

