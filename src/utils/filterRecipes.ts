import { Category } from "../types/Category";
import { normalizedRecipe } from "../types/NormalizedRecipe";

export const filterRecipes = (
  recipes: normalizedRecipe[],
  query: string,
  category: Category
): normalizedRecipe[] => {
  const filteredRecipes: normalizedRecipe[] = [];
  const normalizedQuery = query.toLowerCase();

  for (const recipe of recipes) {
    const { strMeal, strCategory, ingredients } = recipe;

    if (
      (strMeal.toLowerCase().includes(normalizedQuery) ||
      strCategory.toLowerCase().includes(normalizedQuery) ||
      ingredients.some((ingredient) =>
        ingredient[0].toLowerCase().includes(normalizedQuery)
      )) &&
      (category === Category.None || strCategory === category)
    ) {
      filteredRecipes.push(recipe);
    }
  }

  return filteredRecipes;
};
