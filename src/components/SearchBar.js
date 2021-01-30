import React from "react";

const SearchBar = ({ placeholder, handleSearchQuery }) => {
  return (
    <div
      className="searchbar center"
      style={{
        marginLeft: 50,
        marginRight: 50,
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleSearchQuery(e.target.value)}
      />
      <span className="searchIcon">
        <i style={{ cursor: "pointer" }} className="material-icons">
          search
        </i>
      </span>
    </div>
  );
};

export default SearchBar;
