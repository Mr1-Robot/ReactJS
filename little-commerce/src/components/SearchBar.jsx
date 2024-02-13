/* eslint-disable react/prop-types */

import classes from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <form
      className={classes["search-bar"]}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        id="search"
        placeholder="Search product..."
        onChange={onSearch}
      />
    </form>
  );
}
