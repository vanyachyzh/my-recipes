import { mockList } from '../../mock';
import { Card } from '../Card/Card';
import './List.scss';

type Props = {
  onClick?: () => void,
  text: string
}

export function List() {
  return (
    <ul className='list'>
      {mockList.map(recipe => (
        <Card key={recipe.strCategory}></Card>
      ))}
    </ul>
  )
};
