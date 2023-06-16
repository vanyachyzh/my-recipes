import { useEffect, useState } from 'react';
import { Recipe } from '../../types/Recipe';
import './Recipe.scss';
import { Button } from '../Button/Button';
import { Toggle } from '../Toggle/Toggle';
import { HeartIcon, PlusIcon } from '../Icon/Icon';
import classNames from 'classnames';

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

export function RecipeInfo() {
  const [stepIndex, setStepIndex] = useState<number>(-1);

  const [card, setCard] = useState<Recipe | null>(null);

  const increaseStep = () => {
    setStepIndex(prev => prev + 1);
  }

  const resetStep = () => {
    setStepIndex(-1);
  }

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
      className='recipe'
    >
      <img
        className='recipe__image'
        src={cardMock.strMealThumb}
        alt="Course"
      />

      <div className='recipe__info'>
        <h4 className='recipe__category'>
          {cardMock.strCategory}
        </h4>

        <h3 className='recipe__title'>
          {cardMock.strMeal}
        </h3>

        <div className='recipe__actions'>
          <Toggle icon={HeartIcon} />
          <Toggle icon={PlusIcon} />
        </div>

        <h3 className='recipe__title'>
          {cardMock.strMeal}
        </h3>



        <ul className='recipe__ingredients'>
          {getIngredients(cardMock).map(ingredient => (
            <li
              className='recipe__ingredient'
              key={ingredient}
            >
              <span>{ingredient}</span>
              <span>11</span>
            </li>
          ))}
        </ul>

        <h3 className='recipe__title'>
          {cardMock.strMeal}
        </h3>

        <div className='recipe__actions'>
          <Button
            onClick={increaseStep}
            text='Start'
          />
          <Button
            onClick={resetStep}
            text='Reset' />
        </div>



        <ul className='recipe__ingredients'>
          {getIngredients(cardMock).map((ingredient, index) => (
            <li
              className={classNames(
                'recipe__ingredient',
                { 'recipe__ingredient--active': index <= stepIndex }
              )}
              key={ingredient}
            >
              <span>{index + "  " + ingredient}</span>
            </li>
          ))}
        </ul>




      </div>
    </div>
  )
};
