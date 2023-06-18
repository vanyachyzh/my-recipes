import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateCategory } from '../../slices/recipes';
import { Category } from '../../types/Category';
import './Selector.scss';

export const Selector = () => {
  const dispatch = useAppDispatch();
  const { category } = useAppSelector((state) => state.recipes);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    dispatch(updateCategory(selectedValue as Category));
  };

  return (
    <select className='selector' value={category} onChange={handleChange}>
      {Object.keys(Category).map((option) => (
        <option key={option} value={option} className='selector__option'>
          {option}
        </option>
      ))}
    </select>
  );
};



