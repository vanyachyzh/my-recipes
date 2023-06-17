import './Card.scss';
import { Toggle } from '../Toggle/Toggle';
import { HeartIcon, PlusIcon } from '../Icon/Icon';
import { normalizedRecipe } from '../../types/NormalizedRecipe';
import { Link } from 'react-router-dom';

type Props = {
  recipe: normalizedRecipe,
};

export function Card({ recipe }: Props) {
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
        <Toggle icon={HeartIcon} />
        <Toggle icon={PlusIcon} />
      </div>
    </div>
  )
};
