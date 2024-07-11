
import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем компонент Link из React Router
import { API_KEY } from './api'; // Импортируем API_KEY из модуля './api'

const HomePage = () => {
  const serviceUrl = `https://www.themoviedb.org/?api_key=${API_KEY}`;

  return (
    <div>
      <h1>Home page</h1>
      
      <Link to={serviceUrl} target="_blank" rel="noopener noreferrer"></Link> 
    </div>
  );
}

export default HomePage;