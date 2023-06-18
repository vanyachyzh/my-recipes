import React, { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import './SearchField.scss';
import { updateQuery } from '../../slices/recipes';

export const SearchField = () => {
  const { query } = useAppSelector(state => state.recipes);
  const dispatch = useAppDispatch();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    dispatch(updateQuery(newQuery));
  };

  return (
    <input
      className='field'
      type="text"
      value={query}
      onChange={onChange}
    />
  );
};
