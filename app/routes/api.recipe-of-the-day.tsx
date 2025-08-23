// app/routes/api/recipe-of-the-day.tsx
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  // 1) Make sure your .env has both keys:
  // RAPIDAPI_KEY=your_key
  // RAPIDAPI_HOST=spoonacular-recipe-food-nutrition-v1.p.rapidapi.com

  const key = process.env.RAPIDAPI_KEY;
  const host = process.env.RAPIDAPI_HOST;
  if (!key || !host) {
    return json({ message: "Missing RapidAPI credentials" }, { status: 500 });
  }

  // 2) Build the URL (you can add tags if you want)
  const url = new URL(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random"
  );
  url.searchParams.set("number", "1");
  // optional: uncomment to filter by tags
  // url.searchParams.set("tags", "vegetarian,dessert");

  // 3) Fetch with both headers
  const res = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": host,
    },
  });

  // 4) Handle HTTP errors
  if (res.status === 429) {
    return json({ message: "429" }, { status: 429 });
  }
  if (!res.ok) {
    return json(
      { message: `API request failed (${res.status})` },
      { status: res.status }
    );
  }

  // 5) Pull out the recipe
  const data = await res.json();
  const recipe = data.recipes?.[0];
  if (!recipe) {
    return json({ message: "No recipe returned" }, { status: 500 });
  }

  // 6) Return only the fields you need
  return json({
    title: recipe.title,
    image: recipe.image,
    summary: recipe.summary,
    sourceUrl: recipe.sourceUrl,
  });
};

export default function RecipeOfTheDayApi() {
  return null;
}
