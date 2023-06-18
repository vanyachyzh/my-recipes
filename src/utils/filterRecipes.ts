import { Category } from "../types/Category";
import { normalizedRecipe } from "../types/NormalizedRecipe";

export const filterRecipes = (
  recipes: normalizedRecipe[] | undefined,
  query: string,
  category: Category
): normalizedRecipe[] => {
  const filteredRecipes: normalizedRecipe[] = [];
  const normalizedQuery = query.toLowerCase();

  if (!recipes) {
    return [];
  }

  for (const recipe of recipes) {
    const { strMeal, strCategory } = recipe;

    if (
      (strMeal.toLowerCase().includes(normalizedQuery) ||
      strCategory.toLowerCase().includes(normalizedQuery)) &&
      (category === Category.None || strCategory === category)
    ) {
      filteredRecipes.push(recipe);
    }
  }

  return filteredRecipes;
};
