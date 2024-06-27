import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for products, brands, and more"
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
