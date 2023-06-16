import React, { ReactNode, useState } from 'react';
import './Toggle.scss';

type Props = {
  icon: React.ComponentType<{ isActive: boolean }>;
};

export function Toggle({ icon: Icon }: Props) {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => {
    setIsActive(prev => !prev);
  }

  return (
    <button
      className='toggle'
      onClick={onClick}
    >
      <Icon isActive={isActive} />
    </button>
  );
}