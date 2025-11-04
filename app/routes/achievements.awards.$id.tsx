import { Link, useParams } from "@remix-run/react";
import { awards } from "~/components/achievementsData";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = ({ params }) => {
  const award = awards.find((a) => a.id === params.id);
  return [
    { title: award ? `${award.title} — Jadyn Wor` : "Award — Jadyn Wor" },
    { name: "description", content: award?.description || "Award details" },
  ];
};

export default function AwardPage() {
  const params = useParams();
  const award = awards.find((a) => a.id === params.id);

  if (!award) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Award Not Found</h1>
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

      <div className="space-y-10">
        <header className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Recognition</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">{award.title}</h1>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>{award.organization}</span>
            <span>•</span>
            <span>{award.date}</span>
            {award.category && (
              <>
                <span>•</span>
                <span>{award.category}</span>
              </>
            )}
          </div>
          {award.description && (
            <p className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-6 text-gray-700 dark:text-gray-300">
              {award.description}
            </p>
          )}
        </header>

        {award.image && (
          <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
            <img src={award.image} alt={award.title} className="w-full object-cover" />
          </div>
        )}

        {award.fullContent && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">What this meant for me</h2>
            <p className="text-gray-700 dark:text-gray-300">{award.fullContent}</p>
          </section>
        )}

        {award.gallery && award.gallery.length > 1 && (
          <section>
            <h2 className="mb-4 text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">Moments from the celebration</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {award.gallery.map((image, index) => (
                <div key={image} className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
                  <img src={image} alt={`${award.title} photo ${index + 1}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}