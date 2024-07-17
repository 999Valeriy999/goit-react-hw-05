import React from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { lazy } from "react";
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'


const Home = lazy(() => import("./pages/HomePage/HomePage"));

const MovieDetails = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));

const NotFound = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));

const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);


function App() {
 
  return (
  
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink> 
              <NavLink to ="/movies/"></NavLink>
            </li>
            
              
            
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path= "/" element = {MovieDetails/>}/>

        </Routes>
      </div>
    </BrowserRouter> 
  );
}

export default App;
