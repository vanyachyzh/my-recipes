import React, { ChangeEvent, useState } from 'react';
import './Selector.scss';

export const Selector = () => {
  const [selectedItemId, setSelectedItemId] = useState<string | undefined>('1');

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const itemId = event.target.value;
    setSelectedItemId(itemId);
  };

  return (
    <select
      className='selector'
      value={selectedItemId}
      onChange={handleSelectChange}
    >
      <option className='selector__option' value="1">1</option>
      <option className='selector__option' value="2">2</option>
      <option className='selector__option' value="3">3</option>
    </select>
  );
};

