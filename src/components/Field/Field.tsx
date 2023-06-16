import React, { ChangeEvent, useState } from 'react';
import './Field.scss';

export const Field = () => {
  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setValue(query);
  }

  return (
    <input
      className='field'
      type="text"
      onChange={onChange}
    />
  );
};

