import { useEffect, useState } from 'react';
import { Recipe } from '../../types/Recipe';
import './Card.scss';
import { Button } from '../Button/Button';
import { Toggle } from '../Toggle/Toggle';
import { HeartIcon, PlusIcon } from '../Icon/Icon';

type Props = {

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

export function Card() {

  const [card, setCard] = useState<Recipe | null>(null);

// useEffect(() => {
//   const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//   const apiUrl = 'http://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';

//   fetch(proxyUrl + apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       setCard(data.meals[0] as Recipe);
//       console.log(data.meals[0]);
//     });
// }, []);

  // if (card === null) {
  //   return null
  // }



  return (
    <div
      className='card'
    >
      <img
        className='card__image'
        src={cardMock.strMealThumb}
        alt="Course"
      />

      <h4 className='card__category'>
        {cardMock.strCategory}
      </h4>

      <h3 className='card__title'>
        {cardMock.strMeal}
      </h3>

      <ul className='card__ingredients'>
        {getIngredients(cardMock).map(ingredient => (
          <li className='card__ingredient' key={ingredient}>{ingredient}</li>
        ))}
      </ul>



      <div className='card__actions'>
        <Button text='Open'></Button>
        <Toggle icon={HeartIcon} />
        <Toggle icon={PlusIcon} />
      </div>
    </div>
  )
};
