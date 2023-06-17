import { listRecipes } from '../../tempData';
import { normalizeRecipes } from '../../utils/normalizeRecipes';
import { Card } from '../Card/Card';
import './List.scss';


export function List() {
  console.log(normalizeRecipes(listRecipes))

  return (
    <ul className='list'>
      {normalizeRecipes(listRecipes).map(recipe => (
        <Card
          key={recipe.idMeal}
          recipe={recipe}
        />
      ))}
    </ul>
  )
};
