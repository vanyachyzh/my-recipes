import './Button.scss';

type Props = {
  onClick: () => void,
  text: string,
  isDisabled?: boolean
}

export const Button: React.FC<Props> = ({ onClick, text, isDisabled }) => {
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
