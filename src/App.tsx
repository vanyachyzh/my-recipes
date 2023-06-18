import { Outlet } from 'react-router-dom';
import './styles/reset.scss';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
