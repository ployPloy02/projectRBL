import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`YOUR_API_ENDPOINT?q=${query}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการเรียกข้อมูล:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="ค้นหา..."
        />
        <button type="submit">ค้นหา</button>
      </form>
      <div>
        {searchResults.map((result) => (
          <div key={result.id}>{result.name}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
