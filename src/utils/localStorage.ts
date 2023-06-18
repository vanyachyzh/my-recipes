import { normalizedRecipe } from "../types/NormalizedRecipe";

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





