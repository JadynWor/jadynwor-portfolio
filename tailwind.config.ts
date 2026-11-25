import type { Config } from "tailwindcss";

export default {
  // Detail pages still use Tailwind utilities; the site is light-only.
  darkMode: "class",
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;
