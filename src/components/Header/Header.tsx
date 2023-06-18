import React from 'react';
import './Header.scss';
import { Logo } from '../Logo/Logo';
import { Selector } from '../Selector/Selector';
import { Field } from '../Field/Field';
import { HeartIcon, PlusIcon } from '../Icon/Icon';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { Category } from '../../types/Category';
import { updateCategory } from '../../slices/recipes';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <Logo />
      </div>
      <Selector />
      <Field />

      <Link to='favorite' className='header__link'>
        <HeartIcon isActive={true} />
      </Link>

      <Link to='saved' className='header__link'>
        <PlusIcon isActive={true} />
      </Link>
    </header>
  );
};


