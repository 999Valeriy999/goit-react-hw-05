import React from "react";

import { useLocation } from "react-router-dom";

const TrendingItem = ({ id, name }) => {
  const { pathname, search } = useLocation();

  return (
    <li>
      <S.ListLink
        state={{
          pathname,
          search,
        }}
        to={`/movies/${id}`}
      >
        {name}
      </S.ListLink>
    </li>
  );
};

export default TrendingItem;
