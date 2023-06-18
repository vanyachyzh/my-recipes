export interface normalizedRecipe {
  idMeal: string | number | null,
  strCategory: string,
  ingredients: [string, string][],
  instructions: string[],
  strMeal: string,
  strMealThumb: string,
  isFavorite: boolean,
  isSaved: boolean,
};
