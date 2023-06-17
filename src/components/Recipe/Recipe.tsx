import { useEffect, useState } from 'react';
import { Recipe } from '../../types/Recipe';
import './Recipe.scss';
import { Button } from '../Button/Button';
import { Toggle } from '../Toggle/Toggle';
import { HeartIcon, PlusIcon } from '../Icon/Icon';
import classNames from 'classnames';
import { listRecipes } from '../../tempData';
import { normalizeRecipes } from '../../utils/normalizeRecipes';

export function RecipeInfo() {
  const [stepIndex, setStepIndex] = useState<number>(-1);

  const [card, setCard] = useState<Recipe | null>(null);

  const increaseStep = () => {
    setStepIndex(prev => prev + 1);
  }

  const resetStep = () => {
    setStepIndex(-1);
  }


  return (
    <div
      className='recipe'
    >
      <img
        className='recipe__image'
        src={normalizeRecipes(listRecipes)[0].strMealThumb}
        alt="Course"
      />

      <div className='recipe__info'>
        <h4 className='recipe__category'>
          {normalizeRecipes(listRecipes)[0].strCategory}
        </h4>

        <h3 className='recipe__title'>
          {normalizeRecipes(listRecipes)[0].strMeal}
        </h3>

        <div className='recipe__actions'>
          <Toggle icon={HeartIcon} />
          <Toggle icon={PlusIcon} />
        </div>

        <h3 className='recipe__title'>
          {normalizeRecipes(listRecipes)[0].strMeal}
        </h3>



        <ul className='recipe__ingredients'>
          {normalizeRecipes(listRecipes)[0].ingredients.map(ingredient => (
            <li
              className='recipe__ingredient'
              key={ingredient[0]}
            >
              <span>{ingredient[0]}</span>
              <span>{ingredient[1]}</span>
            </li>
          ))}
        </ul>

        <h3 className='recipe__title'>
          {normalizeRecipes(listRecipes)[0].strMeal}
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
          {normalizeRecipes(listRecipes)[0].instructions.map((ingredient, index) => (
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
