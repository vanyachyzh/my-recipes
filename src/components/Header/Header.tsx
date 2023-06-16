import React, { ChangeEvent, useState } from 'react';
import './Header.scss';
import { Logo } from '../Logo/Logo';
import { Selector } from '../Selector/Selector';
import { Field } from '../Field/Field';
import { HeartIcon, PlusIcon } from '../Icon/Icon';

export const Header = () => {


  return (
    <header className='header'>
      <div className='header__logo'>
        <Logo />
      </div>
      <Selector />
      <Field />

      <a className='header__link' href="#">
        <HeartIcon isActive={true} />
      </a>

      <a className='header__link' href="#">
        <PlusIcon isActive={true} />
      </a>

    </header>
  );
};

