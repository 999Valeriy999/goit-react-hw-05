import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "./Navigation.style";
 

const Navigation = () => {
  return (
    <header>
      <nav >
        <NavLink 
          to="/" 
          
        >
          Home
        </NavLink>
        <NavLink 
          to="/movies" 
         
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;