import { List } from "../../components/List/List";
import { RecipeInfo } from "../../components/Recipe/Recipe";
import { Recipe } from "../../types/Recipe";
import './RecipePage.scss';

const cardMock = {
  strMealThumb: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQNfQEYRdF4g63WJMy4K6dpmaIzkIZw1Tk2jJy5_K01sAWS6NSf3XvkEt-__p8x7rLYTG2lX6oiQT6ZIv8',
  strIngredient1: 'csdsc',
  strIngredient13: 'cscsdcdsc',
  strIngredient14: 'cscsdcdsc',
  strIngredient15: 'dcdsc',
  strIngredient16: 'csdsc',
  strIngredient17: 'csdsc',
  strIngredient167: 'cscdsc',
  strIngredient168: 'cscsdcdsc',
  strMeal: 'borshh',
  strCategory: 'beef'
}

function getIngredients(obj: Recipe): string[] {
  const ingredientValues: string[] = [];

  for (const key in obj) {
    if (key.includes('strIngredient')) {
      const value = obj[key];
      if (value && typeof value === 'string' && value.trim() !== '') {
        ingredientValues.push(value);
      }
    }
  }

  return ingredientValues;
}

export function RecipePage () {
  return (
    <div className="recipe-page">
      <RecipeInfo />
    </div>
  )
};