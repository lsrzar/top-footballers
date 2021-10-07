import React, { useState } from 'react';
import { ListProps as Props } from './List';

interface AddToListProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

export const AddToList: React.FC<AddToListProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    note: '',
    img: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) {
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);

    setInput({
      name: '',
      age: '',
      img: '',
      note: '',
    });
  };

  return (
    <div className='AddToList'>
      <input
        type='text'
        placeholder='Name'
        className='AddToList-input'
        value={input.name}
        onChange={handleChange}
        name='name'
      />
      <input
        type='text'
        placeholder='Age'
        className='AddToList-input'
        value={input.age}
        onChange={handleChange}
        name='age'
      />
      <input
        type='text'
        placeholder='URL'
        className='AddToList-input'
        value={input.img}
        onChange={handleChange}
        name='img'
      />
      <textarea
        placeholder='Description'
        className='AddToList-input'
        value={input.note}
        onChange={handleChange}
        name='note'
      />
      <button className='AddToList-btn' onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};
