import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ handleSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  return (
    <div className = "searchbar" >
      <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleChange}
    />
    </div>
  );
}
