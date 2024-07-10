
import React from 'react';
import { Link } from 'react-router-dom'; // Предполагается использование React Router для маршрутизации
import API_KEY from './api';

const HomePage = () => {
  const serviceUrl = `https://www.themoviedb.org/?api_key=${API_KEY}`;

  return (
    <div>
      <h1>Home page</h1>
      
      <Link to={serviceUrl} target="_blank" rel="noopener noreferrer">Перейти на сервис фильмов</Link>
    </div>
  );
}

export default HomePage;