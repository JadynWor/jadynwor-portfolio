import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  try {
    // Check for required environment variables
    if (!process.env.RAPIDAPI_KEY || !process.env.RAPIDAPI_HOST) {
      return json(
        { message: "API configuration missing. Please check environment variables." },
        { status: 500 }
      );
    }

    const res = await fetch(
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
        },
      }
    );

    if (!res.ok) {
      return json(
        { message: `API request failed with status: ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    
    if (!data.recipes || !data.recipes[0]) {
      return json(
        { message: "No recipe data received from API" },
        { status: 500 }
      );
    }

    const recipe = data.recipes[0];
    return json({
      title: recipe.title,
      image: recipe.image,
      summary: recipe.summary,
      sourceUrl: recipe.sourceUrl,
    });
  } catch (error) {
    console.error("Recipe API error:", error);
    return json(
      { message: "Failed to fetch recipe data" },
      { status: 500 }
    );
  }
};

export default function RecipeOfTheDayApi() {
  return null;
}