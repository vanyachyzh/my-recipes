import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { fetchRecipes } from './api';
import { Logo } from './components/Logo/Logo';


fetchRecipes().then((recipes) => {
  console.log(recipes);
});

function App() {
  return (
    <div className="App">
      <Logo></Logo>
    </div>
  );
}

export default App;
