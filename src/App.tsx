import { Outlet } from 'react-router-dom';
import './App.scss';

import { Header } from './components/Header/Header';


// fetchRecipes().then((recipes) => {
//   console.log(recipes);
// });

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
