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
    <form className="row search-box align-items-center mt-5">
      <p className="text-light mb-0 col-12 col-md-6">Search for a cocktail:</p>
      <input
        className="form-control rounded-pill col-9 col-md-5"
        type="search"
        placeholder="Cocktail Name"
        aria-label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="btn btn-primary search-btn col-3 col-md-1"
        type="submit"
        onClick={(e) => handleClick(e)}
      >
        <Search className="icon" />
      </button>
    </form>
  );
};
