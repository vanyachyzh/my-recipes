import { Recipe } from "./types/Recipe";

export function fetchRecipes(): Promise<Recipe[]> {
  const promises: Promise<Recipe>[] = [];

  for (let i = 0; i < 20; i++) {
    const promise = fetch('http://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((data) => data.meals[0] as Recipe);
    promises.push(promise);
  }

  return Promise.all(promises);
}
