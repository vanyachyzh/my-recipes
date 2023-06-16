import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { fetchRecipes } from './api';
import { Logo } from './components/Logo/Logo';
import { Button } from './components/Button/Button';


fetchRecipes().then((recipes) => {
  console.log(recipes);
});

function App() {
  return (
    <div className="App">
      <Logo></Logo>
      <Button onClick={() => {}}></Button>
    </div>
  );
}

export default App;
