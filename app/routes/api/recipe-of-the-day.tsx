import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const res = await fetch(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY!,
        "X-RapidAPI-Host": process.env.RAPIDAPI_HOST!,
      },
    }
  );
  const data = await res.json();
  const recipe = data.recipes[0]; 
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