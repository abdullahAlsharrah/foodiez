import React from "react";
import { SearchBarStyled } from "../styles";

const SearchBar = (prop) => {
  return (
    <SearchBarStyled
      placeholder="Search for a ingredient..."
      onChange={(event) => prop.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
