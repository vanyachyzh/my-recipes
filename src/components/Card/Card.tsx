import './Card.scss';
import { Link } from 'react-router-dom';

import { setItems } from '../../utils/localStorage';
import { normalizedRecipe } from '../../types/NormalizedRecipe';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateRecipes } from '../../slices/recipes';

import { Toggle } from '../Toggle/Toggle';
import { HeartIcon, PlusIcon } from '../Icon/Icon';

type Props = {
  recipe: normalizedRecipe,
};

export function Card({ recipe }: Props) {
  const dispatch = useAppDispatch();
  const { recipes } = useAppSelector((state) => state.recipes);
  const isSaved = recipe.isSaved;
  const isFavorite = recipe.isFavorite;


  const updateField = (fieldName: keyof normalizedRecipe) => {
    const updatedRecipes = recipes.map((r) => {
      if (r.idMeal === recipe.idMeal) {
        return { ...r, [fieldName]: !r[fieldName] };
      }
      return r;
    });

    setItems('recipes', updatedRecipes);
    dispatch(updateRecipes(updatedRecipes));
  };


  return (
    <div
      className='card'
    >
      <img
        className='card__image'
        src={recipe.strMealThumb}
        alt="Course"
      />

      <h4 className='card__category'>
        {recipe.strCategory}
      </h4>

      <h3 className='card__title'>
        {recipe.strMeal}
      </h3>

      <ul className='card__ingredients'>
        {recipe.ingredients.map(ingredient => (
          <li
            className='card__ingredient'
            key={ingredient[0]}
          >
            {`${ingredient[0]},`}
          </li>
        ))}
      </ul>

      <div className='card__actions'>
        <Link to='/recipe' className='card__link'>Open</Link>

        <Toggle
          isActive={isFavorite}
          action={() => updateField('isFavorite')}
          icon={HeartIcon}
        />

        <Toggle
          isActive={isSaved}
          action={() => updateField('isSaved')}
          icon={PlusIcon}
        />
      </div>
    </div>
  )
};
