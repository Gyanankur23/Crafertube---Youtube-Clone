import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <div style={{ display: "flex", padding: "10px", background: "var(--primary-blue)" }}>
      <input
        type="text"
        placeholder="Search videos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          flex: 1,
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid var(--secondary-orange)",
          marginRight: "10px",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 15px",
          background: "var(--secondary-orange)",
          border: "none",
          color: "var(--text-light)",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
