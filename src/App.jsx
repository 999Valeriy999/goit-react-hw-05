import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';


function App() {
  return (
    <BrowserRouter>
      <>
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
            <Route path="/movies" element={<MoviesPage />} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;


