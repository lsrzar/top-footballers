import React from 'react';

export interface ListProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

export const List: React.FC<ListProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className='List'>
          <div className='List-header'>
            <img
              width='80px'
              className='List-image'
              src={person.url}
              alt='Person mugshot'
            />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className='List-note'>{person.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};
