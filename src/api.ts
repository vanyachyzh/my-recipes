import { Recipe } from "./types/Recipe";

export function fetchRecipes(): Promise<Recipe[]> {
  const promises: Promise<Recipe>[] = [];

  for (let i = 0; i < 10; i++) {
    const promise = fetch('https://www.themealdb.com/api/json/v1/1/randm.php')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then((data) => {
        if (!data.meals || data.meals.length === 0) {
          throw new Error('No meal data found');
        }
        return data.meals[0] as Recipe;
      });

    promises.push(promise);
  }

  return Promise.all(promises);
}

