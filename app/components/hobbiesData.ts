// app/components/hobbiesData.ts
export interface Hobby {
  title: string;
  description: string;
  statText: string;
  statColor: string; // Tailwind class, e.g. "text-red-500"
  statLink?: string; // optional URL
}

export const hobbies: Hobby[] = [
  {
    title: "Amazon FBA",
    description:
      "running a registered business with a ® trademarked brand; product research, logistics, listings, and ads",
    statText: "Active brand — trademark® registered",
    statColor: "text-emerald-600",
    statLink: "/fba",
  },
  {
    title: "Clothing Brand",
    description:
      "streetwear design, drops, and community; scaled two brands through Shopify + content-led launches",
    statText: "Scaled 2 brands to solid revenue",
    statColor: "text-indigo-600",
    //statLink: "/brand",
  },
  {
    title: "Content & Video",
    description:
      "day-in-the-life, product shots, and short-form edits; experimenting with storytelling and pacing",
    statText: "Editing weekly",
    statColor: "text-pink-600",
    statLink: "/content",
  },
  {
    title: "Video Games",
    description:
      "co-op and competitive titles; squad nights and aiming to not friendly-fire in Hell divers 2",
    statText: "Playing: Valorant, Apex, COD6, Phasmophobia, excited to try out new games",
    statColor: "text-sky-600",
    statLink: "/gaming",
  },
];
