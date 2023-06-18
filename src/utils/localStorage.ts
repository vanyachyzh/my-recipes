import { NormalizerFn } from "@testing-library/react";
import { normalizedRecipe } from "../types/NormalizedRecipe";

export const updateLocalStorage = (
  recipe: normalizedRecipe,
  listName: string
): void => {
  const list = localStorage.getItem(listName);

  if (list === null) {
    const newList = [recipe];
    localStorage.setItem(listName, JSON.stringify(newList));
  } else {
    const storedRecipes: normalizedRecipe[] = JSON.parse(list);
    const existingRecipeIndex = storedRecipes.findIndex(
      (storedRecipe) => storedRecipe.idMeal === recipe.idMeal
    );

    if (existingRecipeIndex !== -1) {
      storedRecipes.splice(existingRecipeIndex, 1);
    } else {
      storedRecipes.push(recipe);
    }

    localStorage.setItem(listName, JSON.stringify(storedRecipes));
  }
};

export const getItems = (listName: string): normalizedRecipe[] => {
  const storedItems = localStorage.getItem(listName);

  if (storedItems) {
    return JSON.parse(storedItems) as normalizedRecipe[];
  } else {
    return [];
  }
};

export const setItems = (listName: string, items: normalizedRecipe[]): void => {
  const serializedItems = JSON.stringify(items);
  localStorage.setItem(listName, serializedItems);
};





