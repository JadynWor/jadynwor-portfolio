import type { MetaFunction } from "@remix-run/node";
import { Achievements } from "~/components/Achievements";

export const meta: MetaFunction = () => [
  { title: "Achievements — Jadyn Wor" },
  { name: "description", content: "Research papers, articles, and awards." },
];

export default function AchievementsIndex() {
  return <Achievements />;
}
