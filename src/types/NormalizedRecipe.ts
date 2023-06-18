import { CookingTime } from "./CookingTime";

export interface normalizedRecipe {
  idMeal: string | number | null,
  strCategory: string,
  ingredients: [string, string][],
  instructions: string[],
  strMeal: string,
  strMealThumb: string,
  cookingTime: CookingTime;
  isFavorite: boolean,
  isSaved: boolean,
};
