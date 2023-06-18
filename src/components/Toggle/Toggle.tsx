import React, { ReactNode, useState } from 'react';
import './Toggle.scss';

type Props = {
  icon: React.ComponentType<{ isActive: boolean }>;
  action: () => void;
  isActive: boolean
};

export const Toggle: React.FC<Props> = ({ icon: Icon, action, isActive }) => {
  const onClick = () => {
    action();
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
