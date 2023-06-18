import { useAppSelector } from "../../app/hooks";
import { List } from "../../components/List/List";
import { getItems } from "../../utils/localStorage";
import './FavoritePage.scss';

export function FavoritePage () {
  const { recipes } = useAppSelector((state) => state.recipes);
  const favoreteRecipes = recipes.filter(recipe => recipe.isFavorite === true);

  return (
    <div className="favorite-page">
      {favoreteRecipes.length
        ? <List recipes={favoreteRecipes} />
        : <h4>You haven't added any recipes to your favorite list!</h4>
      }
    </div>
  )
};