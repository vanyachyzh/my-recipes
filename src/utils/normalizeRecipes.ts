import { normalizedRecipe } from "../types/NormalizedRecipe";
import { Recipe } from "../types/Recipe";

export const normalizeRecipes = (recipes: Recipe[]): normalizedRecipe[] => {
  return recipes.map((recipe) => {
    const {
      strMeal,
      strMealThumb,
      strCategory,
      idMeal,
      strInstructions,
    } = recipe;
    const ingredients: Array<[string, string]> = [];
    const instructions: string[] = (strInstructions as string).split("\r\n");

    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;
      const ingredient = recipe[ingredientKey] as string | null;
      const measure = recipe[measureKey] as string | null;

      if (ingredient && measure) {
        ingredients.push([ingredient.trim(), measure.trim()]);
      }
    }

    return {
      idMeal: idMeal as string | number | null,
      strCategory: strCategory as string,
      ingredients,
      instructions,
      strMeal: strMeal as string,
      strMealThumb: strMealThumb as string,
      isFavorite: false,
      isSaved: false
    };
  });
};
