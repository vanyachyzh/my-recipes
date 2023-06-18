import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { List } from '../../components/List/List';
import { listRecipes } from '../../tempData';
import { filterRecipes } from '../../utils/filterRecipes';
import { normalizeRecipes } from '../../utils/normalizeRecipes';
import './Home.scss';
import { getRecipes, updateCategory, updateRecipes } from '../../slices/recipes';
import { getItems } from '../../utils/localStorage';
import { normalizedRecipe } from '../../types/NormalizedRecipe';

export function HomePage() {
  const { query } = useAppSelector((state) => state.recipes);
  const { category } = useAppSelector((state) => state.recipes);
  const { recipes } = useAppSelector((state) => state.recipes);
  const { isLoading, hasError } = useAppSelector(state => state.recipes);
  const dispatch = useAppDispatch();

  const storedRecipes = getItems('favorite');

  console.log(storedRecipes)


  useEffect(() => {
    if (storedRecipes) {
      dispatch(updateRecipes(storedRecipes));
    } else {
      dispatch(getRecipes());
    }
  }, []);

  if (isLoading) {
    return <h4>Loading...</h4>
  }

  if (hasError) {
    return <h4>Sorry! It looks like server is not responding</h4>
  }

  return (
    <div className="home">
      {
        filterRecipes(recipes, query, category).length
          ? <List recipes={filterRecipes(recipes, query, category)} />
          : <h4>It looks like there are no matching recipes for this request!</h4>
      }
    </div>
  );
}