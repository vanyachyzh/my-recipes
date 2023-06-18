import { useAppSelector } from "../../app/hooks";
import { List } from "../../components/List/List";
import { getItems } from "../../utils/localStorage";
import './SavedPage.scss';

export function SavedPage() {
  const { recipes } = useAppSelector((state) => state.recipes);
  const storedRecipes = getItems('recipes');
  const savedRecipes = (storedRecipes.length ? storedRecipes : recipes).filter(recipe => recipe.isSaved === true);

  return (
    <div className="saved-page">
      {savedRecipes.length
        ? <List recipes={savedRecipes} />
        : <h4>You haven't added any recipes to your saved list!</h4>
      }
    </div>
  )
};
