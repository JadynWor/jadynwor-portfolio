import { Link, useParams } from "@remix-run/react";
import { useMemo, useState } from "react";
import { researchPapers } from "~/components/achievementsData";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = ({ params }) => {
  const paper = researchPapers.find((p) => p.id === params.id);
  return [
    { title: paper ? `${paper.title} — Jadyn Wor` : "Research Paper — Jadyn Wor" },
    { name: "description", content: paper?.description || "Research paper details" },
  ];
};

export default function ResearchPaperPage() {
  const params = useParams();
  const paper = researchPapers.find((p) => p.id === params.id);
  const [showMore, setShowMore] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  const fullContentParagraphs = useMemo(() => {
    if (!paper?.fullContent) return [];
    return paper.fullContent.split(/\n\n+/).map((paragraph) => paragraph.trim()).filter(Boolean);
  }, [paper?.fullContent]);

  if (!paper) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Research Paper Not Found</h1>
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

      <div className="space-y-6">
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Research</p>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">{paper.title}</h1>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <span>{paper.venue}</span>
          <span>•</span>
          <span>{paper.year}</span>
          {paper.doi && (
            <>
              <span>•</span>
              <span className="font-mono">DOI {paper.doi}</span>
            </>
          )}
        </div>

        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-6 text-gray-700 dark:text-gray-300">
          <p>{paper.description}</p>
        </div>

        {paper.keyTakeaways && paper.keyTakeaways.length > 0 && (
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-6">
            <h2 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Highlights</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {paper.keyTakeaways.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400 dark:bg-gray-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {paper.link && (
          <div>
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-5 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              View the full poster
            </a>
          </div>
        )}
      </div>

      {paper.image && (
        <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={() => setShowImageModal(true)}
            className="group block w-full focus:outline-none"
          >
            <img src={paper.image} alt={paper.title} className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
          </button>
        </div>
      )}

      {fullContentParagraphs.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Inside the build</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            {(showMore ? fullContentParagraphs : fullContentParagraphs.slice(0, 2)).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {fullContentParagraphs.length > 2 && (
            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              {showMore ? "Show less" : "Read more"}
            </button>
          )}
        </section>
      )}

      {paper.paperText && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Full project paper</h2>
          <div className="max-h-[32rem] overflow-y-auto rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-6">
            <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700 dark:text-gray-300">{paper.paperText}</pre>
          </div>
        </section>
      )}

      {showImageModal && paper.image && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">
          <button
            type="button"
            onClick={() => setShowImageModal(false)}
            className="absolute right-6 top-6 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Close
          </button>
          <img src={paper.image} alt={`${paper.title} large preview`} className="max-h-full max-w-full rounded-lg border border-gray-300" />
        </div>
      )}
    </article>
  );
}
