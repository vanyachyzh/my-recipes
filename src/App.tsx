import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { fetchRecipes } from './api';
import { Logo } from './components/Logo/Logo';
import { Button } from './components/Button/Button';
import { HeartIcon, PlusIcon } from './components/Icon/Icon';
import { Toggle } from './components/Toggle/Toggle';
import { Card } from './components/Card/Card';
import { List } from './components/List/List';
import { Selector } from './components/Selector/Selector';


// fetchRecipes().then((recipes) => {
//   console.log(recipes);
// });

function App() {
  return (
    <div className="App">
      <Logo></Logo>
      <Selector />

      <List />


    </div>
  );
}

export default App;
