import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import { fetchFilm } from './api';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const handleSearchSubmit = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">HomePage</NavLink>
            </li>
            <li>
              <NavLink to="/movies">MoviesPage</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage onSubmit={handleSearchSubmit} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;