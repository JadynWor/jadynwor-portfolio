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
      <div className="max-w-[1080px] mx-auto px-6 py-6">
        <div className="text-center">
          <h1 className="text-[28px] font-bold text-gray-900">Award Not Found</h1>
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

      <div className="space-y-10">
        <header className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Recognition</p>
            <h1 className="text-[20px] border-b border-gray-300 pb-1 md:text-4xl font-bold text-gray-900">{award.title}</h1>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
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
            <p className="border border-gray-200 bg-gray-50 p-6 text-gray-700">
              {award.description}
            </p>
          )}
        </header>

        {award.image && (
          <div className="overflow-hidden border border-gray-200">
            <img src={award.image} alt={award.title} className="w-full object-cover" />
          </div>
        )}

        {award.fullContent && (
          <section className="space-y-4">
            <h2 className="text-[18px] font-bold text-gray-900">What this meant for me</h2>
            <p className="text-gray-700">{award.fullContent}</p>
          </section>
        )}

        {award.gallery && award.gallery.length > 1 && (
          <section>
            <h2 className="mb-4 text-sm uppercase tracking-wider text-gray-500">Moments from the celebration</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {award.gallery.map((image, index) => (
                <div key={image} className="overflow-hidden border border-gray-200">
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