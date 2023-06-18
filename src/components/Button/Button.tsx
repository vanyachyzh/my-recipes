import { isDisabled } from '@testing-library/user-event/dist/utils';
import './Button.scss';

type Props = {
  onClick?: () => void,
  text: string,
  isDisabled?: boolean
}

export function Button({ onClick, text, isDisabled }: Props) {
  return (
    <button
      onClick={onClick}
      className='button'
      disabled={isDisabled}
    >
      {text}
    </button>

  )
};
