import React from "react";



const Navigation = () => {
  return (
    <header>
      <S.Nav>
        <S.StyledNavLink to="/" activeClassName="active">
          Home
        </S.StyledNavLink>
        <S.StyledNavLink to="/movies" activeClassName="active">
          Movies
        </S.StyledNavLink>
      </S.Nav>
    </header>
  );
};

export default Navigation;
