import { useState } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Button } from '../Button/Button';
import './RecipeInfo.scss';
import { Toggle } from '../Toggle/Toggle';
import { normalizedRecipe } from '../../types/NormalizedRecipe';
import { setItems } from '../../utils/localStorage';
import { updateRecipes } from '../../slices/recipes';
import { HeartIcon, PlusIcon } from '../Icon/Icon';

export function RecipeInfo() {
  const [currentPointIndex, setCurrentPointIndex] = useState<number>(-1);
  const { currentRecipe } = useAppSelector((state) => state.recipes);

  const increaseStep = () => {
    setCurrentPointIndex((prev) => prev + 1);
  };

  const resetStep = () => {
    setCurrentPointIndex(-1);
  };

  if (!currentRecipe) {
    return null;
  }

  const instructionsLength = currentRecipe.instructions.length;

  let buttonText = 'Start Cooking';
  if (currentPointIndex > -1 && currentPointIndex < instructionsLength) {
    buttonText = 'Next Step';
  } else if (currentPointIndex === instructionsLength) {
    buttonText = 'Bon Appetit';
  }

  return (
    <div className='recipe'>
      <img className='recipe__image' src={currentRecipe?.strMealThumb} alt='Course' />

      <div className='recipe__info'>
        <h4 className='recipe__category'>{currentRecipe?.strCategory}</h4>

        <h3 className='recipe__title'>{currentRecipe?.strMeal}</h3>

        <h3 className='recipe__subtitle'>Ingredients</h3>

        <ul className='recipe__ingredients'>
          {currentRecipe?.ingredients.map((ingredient) => (
            <li className='recipe__ingredient' key={ingredient[0]}>
              <span>{ingredient[0]}</span>
              <span>{ingredient[1]}</span>
            </li>
          ))}
        </ul>

        <h3 className='recipe__subtitle'>Instructions</h3>

        <div className='recipe__actions'>
          <Button
            onClick={increaseStep}
            text={buttonText}
            isDisabled={currentPointIndex === instructionsLength}
          />
          <Button onClick={resetStep} text='Reset' />
        </div>

        <ul className='recipe__instructions'>
          {currentRecipe.instructions.map((instruction, index) => (
            <li
              className={classNames('recipe__point', {
                'recipe__point--active': index <= currentPointIndex,
              })}
              key={instruction}
            >
              {(index + 1) + ' ' + instruction}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

