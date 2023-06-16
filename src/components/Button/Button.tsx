import './Button.scss';

type Props = {
  onClick?: () => void,
  text: string
}

export function Button({ onClick, text }: Props) {
  return (
    <button
      onClick={onClick}
      className='button'
    >
      {text}
    </button>
  )
};
