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
import { Field } from './components/Field/Field';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { RecipePage } from './pages/RecipePage/RecipePage';


// fetchRecipes().then((recipes) => {
//   console.log(recipes);
// });

function App() {
  return (
    <div className="App">

      <Header />

      <RecipePage />


    </div>
  );
}

export default App;
