import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { List } from '../../components/List/List';
import { filterRecipes } from '../../utils/filterRecipes';
import './HomePage.scss';
import { getRecipes, updateRecipes } from '../../slices/recipes';
import { getItems, setItems } from '../../utils/localStorage';
import { normalizedRecipe } from '../../types/NormalizedRecipe';
import { normalizeRecipes } from '../../utils/normalizeRecipes';
import { Recipe } from '../../types/Recipe';

export function HomePage() {
  const { query } = useAppSelector((state) => state.recipes);
  const { category } = useAppSelector((state) => state.recipes);
  const { recipes } = useAppSelector((state) => state.recipes);
  const { isLoading, hasError } = useAppSelector(state => state.recipes);
  const dispatch = useAppDispatch();
  const storedRecipes = getItems('recipes');

  useEffect(() => {
    if (storedRecipes.length) {
      dispatch(updateRecipes(storedRecipes));
      console.log(storedRecipes, 'from the storage')
    } else {
      dispatch(getRecipes())
      .then(r => {
        console.log(r.payload, 'from the API')
        setItems('recipes', normalizeRecipes(r.payload as Recipe[]))
      });

    }
  }, []);

  if (isLoading) {
    return <h4>Loading...</h4>
  }

  if (hasError) {
    return <h4>Sorry! It looks like server is not responding</h4>
  }

  return (
    <div className="home-page">
      {
        filterRecipes(recipes, query, category).length
          ? <List recipes={filterRecipes(recipes, query, category)} />
          : <h4>It looks like there are no matching recipes for this request!</h4>
      }
    </div>
  );
}
