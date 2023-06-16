import './Button.scss';

type Props = {
  onClick: () => void
}

export function Button({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className='button'
    >
      Something
    </button>
  )
};
