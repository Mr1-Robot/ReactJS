import React from "react";

import { usePoke } from "../../context/pokemonStore";

export default function SearchBar() {
  const { search, setSearch } = usePoke();

  return (
    <input
      type="text"
      placeholder="Search..."
      id="search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
