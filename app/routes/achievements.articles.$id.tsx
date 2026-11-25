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
      <div className="max-w-[1080px] mx-auto px-6 py-6">
        <div className="text-center">
          <h1 className="text-[28px] font-bold text-gray-900">Article Not Found</h1>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#1a0dab] hover:underline"
          >
            ← Back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-[1080px] mx-auto px-6 py-6 space-y-8">
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#1a0dab] hover:underline"
        >
          ← Back home
        </Link>
      </div>

      <div className="overflow-hidden border border-gray-200 bg-white">
        {article.image && (
          <div className="h-72 w-full overflow-hidden">
            <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
          </div>
        )}

        <div className="space-y-6 p-10">
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Press Feature</p>
            <h1 className="text-[20px] border-b border-gray-300 pb-1 md:text-4xl font-bold text-gray-900">{article.title}</h1>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
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
            <p className="border border-gray-200 bg-gray-50 p-6 text-gray-700">
              {article.description}
            </p>
          )}

          {article.link && (
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Read the feature on York College / CUNY
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
