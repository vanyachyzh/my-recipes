import './Icon.scss';

type Props = {
  isActive: boolean;
}

export function HeartIcon({ isActive }: Props) {
  return (
    <svg className='icon' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Interface / Heart_01">
        <path id="Vector" d="M12 7.69431C10 2.99988 3 3.49988 3 9.49991C3 15.4999 12 20.5001 12 20.5001C12 20.5001 21 15.4999 21 9.49991C21 3.49988 14 2.99988 12 7.69431Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill={isActive ? "red" : "white"} />
      </g>
    </svg>
  )
};

export function PlusIcon({ isActive }: Props) {
  return (
    <svg className='icon' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect> <path d="M30 4H18V18H4V30H18V44H30V30H44V18H30V4Z" fill={isActive ? "blue" : "white"} stroke="#000000" stroke-width="4" stroke-linejoin="round"></path> </g></svg>
  )
};
