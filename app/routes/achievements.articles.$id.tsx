import { Link, useParams } from "@remix-run/react";
import { articles } from "~/components/achievementsData";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = ({ params }) => {
  const article = articles.find((a) => a.id === params.id);
  return [
    { title: article ? `${article.title} — Jadyn Wor` : "Article — Jadyn Wor" },
    { name: "description", content: article?.description || "Article details" },
  ];
};

export default function ArticlePage() {
  const params = useParams();
  const article = articles.find((a) => a.id === params.id);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Article Not Found</h1>
          <Link
            to="/achievements"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >
            ← Back to Achievements
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-20 space-y-12">
      <div>
        <Link
          to="/achievements"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          ← Back to Achievements
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
        {article.image && (
          <div className="h-72 w-full overflow-hidden">
            <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
          </div>
        )}

        <div className="space-y-6 p-10">
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Press Feature</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">{article.title}</h1>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>{article.publication}</span>
            <span>•</span>
            <span>{article.date}</span>
            {article.author && (
              <>
                <span>•</span>
                <span>{article.author}</span>
              </>
            )}
          </div>

          {article.description && (
            <p className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-6 text-gray-700 dark:text-gray-300">
              {article.description}
            </p>
          )}

          {article.link && (
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-5 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Read the feature on York College / CUNY
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
