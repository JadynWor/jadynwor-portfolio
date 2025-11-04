import { researchPapers, articles, awards, type ResearchPaper, type Article, type Award } from "./achievementsData";
import { useMemo } from "react";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

type CardItem =
  | ({ type: "research" } & ResearchPaper)
  | ({ type: "articles" } & Article)
  | ({ type: "awards" } & Award);

const heroImage = "/about/IMG_5519.jpeg";

export function Achievements() {
  const cards = useMemo<CardItem[]>(() => {
    return [
      ...researchPapers.map((paper) => ({ ...paper, type: "research" as const })),
      ...articles.map((article) => ({ ...article, type: "articles" as const })),
      ...awards.map((award) => ({ ...award, type: "awards" as const })),
    ];
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 space-y-16">
      {/* Header */}
      <section>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Achievements
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          I build, research, and lead with curiosity and care. Every highlight here carries a personal story about my work across research, leadership, and storytelling.
        </p>
      </section>

      {/* Hero Image */}
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <img
          src={heroImage}
          alt="Jadyn Worthington sharing achievements on stage"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {cards.map((card) => (
          <AchievementCard key={`${card.type}-${card.id}`} card={card} />
        ))}
      </div>

      {cards.length === 0 && (
        <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 px-8 py-16 text-center text-gray-500 dark:text-gray-400">
          I'll share more here soon. For now, feel free to reach out if you'd like to collaborate.
        </div>
      )}
    </section>
  );
}

function AchievementCard({ card }: { card: CardItem }) {
  const link = useMemo(() => {
    switch (card.type) {
      case "research":
        return `/achievements/research/${card.id}`;
      case "articles":
        return `/achievements/articles/${card.id}`;
      case "awards":
        return `/achievements/awards/${card.id}`;
    }
  }, [card]);

  const getTypeLabel = () => {
    switch (card.type) {
      case "research":
        return "Research";
      case "articles":
        return "Press";
      case "awards":
        return "Recognition";
    }
  };

  return (
    <Link to={link} prefetch="intent" className="group block focus:outline-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {card.image && (
          <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-900">
            <motion.img
              src={card.image}
              alt={card.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              {getTypeLabel()}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {card.type === "research" && "venue" in card && card.venue}
              {card.type === "articles" && "publication" in card && card.publication}
              {card.type === "awards" && "organization" in card && card.organization}
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
              {card.title}
            </h3>
            {"description" in card && card.description && (
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                {card.description}
              </p>
            )}
          </div>

          <div className="mt-auto flex items-center justify-between text-sm">
            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              {card.type === "research" && "year" in card && card.year}
              {card.type === "articles" && "date" in card && card.date}
              {card.type === "awards" && "date" in card && card.date}
            </span>
            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
              View Details →
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}