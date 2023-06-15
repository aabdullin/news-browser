import React from "react";

const FilterInput = ({ value, onChange, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search..."
        className="search-input"
      />
      <button className="search-button" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default FilterInput;
