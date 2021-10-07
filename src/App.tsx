import React, { useState } from 'react';
import './App.css';
import { List } from './components/List';
import { AddToList } from './components/AddToList';

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Lionel Messi',
      url: 'https://bit.ly/3FqrSGx',
      age: 34,
      note: 'Best player in the world.',
    },
  ]);

  return (
    <div className='App'>
      <h1>Top football players</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
