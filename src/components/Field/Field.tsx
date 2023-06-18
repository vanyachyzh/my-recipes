import React, { ChangeEvent, useState } from 'react';
import './Field.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateQuery } from '../../slices/recipes';

export const Field = () => {
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

