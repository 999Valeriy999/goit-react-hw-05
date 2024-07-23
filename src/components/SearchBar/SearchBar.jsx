import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSubmit, query = "" }) => {
  const [value, setValue] = useState(query || "");  // Убедитесь, что начальное значение не null

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = (value || "").trim();  // Убедитесь, что value не null
    if (trimmedValue !== "") {
      onSubmit(trimmedValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onChange={handleChange}
        value={value || ""}  // Убедитесь, что value не null
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  query: PropTypes.string,
};

export default SearchBar;