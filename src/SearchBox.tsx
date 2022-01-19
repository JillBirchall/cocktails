import { useState } from "react";
import { Search } from "react-bootstrap-icons";
import { useGlobalContext } from "./context";

export const SearchBox: React.FC = () => {
  const { getCocktails } = useGlobalContext();

  const [searchQuery, setSearchQuery] = useState("");

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    getCocktails(searchQuery, "name");
    setSearchQuery("");
  }

  return (
    <form className="d-flex search-box">
      <input
        className="form-control rounded-pill"
        type="search"
        placeholder="Cocktail Name"
        aria-label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="btn btn-primary search-btn"
        type="submit"
        onClick={(e) => handleClick(e)}
      >
        <Search className="icon" />
      </button>
    </form>
  );
};
