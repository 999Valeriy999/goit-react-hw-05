import React, { useState } from "react";


const SearchBar = ({ onSubmit, query }) => {
  const [value, setValue] = useState(query ?? "");

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onChange={handleChange}
        value={value}
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default SearchBar;
