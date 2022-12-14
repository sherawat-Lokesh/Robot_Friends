import React from "react";

const SearchBar = ({searchField, searchChange }) => {
  return (
    <div className="pa2 ">
      <input
        className="pa3 ba bg--green bg-lightest-blue"
        type="search"
        placeholder="search robots.."
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBar;
