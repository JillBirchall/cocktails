import { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import { SearchBtn } from "./SearchBtn";

export const SearchBox: React.FC = () => {
  const { getCocktails, isLoading } = useGlobalContext();

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchInProgress, setIsSearchInProgress] = useState(false);

  function getSearchResults() {
    if (searchQuery.trim() === "") return;
    setIsSearchInProgress(true);
    getCocktails(searchQuery, "name");
    setSearchQuery("");
  }

  useEffect(() => {
    if (!isLoading) setIsSearchInProgress(false);
  }, [isLoading]);

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
      <SearchBtn
        btnLabel="Search for a Cocktail"
        getSearchResults={getSearchResults}
        isSearchInProgress={isSearchInProgress}
      />
    </form>
  );
};
