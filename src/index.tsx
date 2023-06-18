import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import App from './App';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { FavoritePage } from './pages/FavoritePage/FavoritePage';
import { SavedPage } from './pages/SavedPage/SavedPage';
import { RecipePage } from './pages/RecipePage/RecipePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="favorite" element={<FavoritePage />} />
            <Route path="saved" element={<SavedPage />} />
            <Route path="recipe" element={<RecipePage />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
