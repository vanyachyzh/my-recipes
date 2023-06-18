import React from 'react';
import { normalizedRecipe } from '../../types/NormalizedRecipe';
import { Card } from '../Card/Card';
import './List.scss';

type Props = {
  recipes: normalizedRecipe[];
};

export const List: React.FC<Props> = ({ recipes }) => {
  return (
    <ul className='list'>
      {recipes.map(recipe => (
        <Card
          key={recipe.idMeal}
          recipe={recipe}
        />
      ))}
    </ul>
  )
};
