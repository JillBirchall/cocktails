import { useState } from "react";
import { useGlobalContext } from "./context";
import { SearchBtn } from "./SearchBtn";

export const SearchBox: React.FC = () => {
  const { getCocktails } = useGlobalContext();

  const [searchQuery, setSearchQuery] = useState("");

  function getSearchResults() {
    if (searchQuery.trim() === "") return;
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
      <SearchBtn getSearchResults={getSearchResults} />
    </form>
  );
};
