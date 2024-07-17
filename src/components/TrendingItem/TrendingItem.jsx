import React from "react";
import {Link,useLocation } from "react-router-dom";


const TrendingItem = ({ id, name }) => {
  const location = useLocation();

  return (
    <li>
      <Link
        state={location}  to={`/movies/${id}`}>
          {name}

        </Link>
        
        
        
    </li>
  );
};

export default TrendingItem;
