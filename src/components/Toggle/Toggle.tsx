import React, { ReactNode, useState } from 'react';
import './Toggle.scss';

type Props = {
  icon: React.ComponentType<{ isActive: boolean }>;
  action: () => void;
  isActive: boolean
};

export function Toggle({ icon: Icon, action, isActive }: Props) {

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