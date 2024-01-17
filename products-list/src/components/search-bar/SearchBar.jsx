export default function SearchBar({ onFilter, onStockFilter }) {
  return (
    <form className="search-bar">
      <p>
        <input
          type="text"
          placeholder="Find product..."
          onChange={(e) => onFilter(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width={20}
          height={20}
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </p>
      <p className="stock-box">
        <label htmlFor="stock">Stock Only</label>
        <input type="checkbox" id="stock" onChange={onStockFilter} />
      </p>
    </form>
  );
}
