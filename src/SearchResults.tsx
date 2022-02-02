import { CocktailCard } from "./CocktailCard";
import { OutlineBtn } from "./components/OutlineBtn";
import { useGlobalContext } from "./context";
import { useEffect, useRef } from "react";

export const SearchResults: React.FC = () => {
  const { cocktails, currentSearch, backToTop } = useGlobalContext();
  const searchResultsRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    searchResultsRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="container py-5 cocktail-results">
      <h1
        className="text-center text-uppercase my-4 pt-3"
        ref={searchResultsRef}
      >
        {currentSearch ? currentSearch + " cocktails" : "Cocktails"}
      </h1>
      {cocktails.length === 0 && (
        <p className="text-center">No results found!</p>
      )}
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {cocktails.map((cocktail) => {
          return (
            <CocktailCard
              name={cocktail.name}
              image={cocktail.image}
              key={cocktail.id}
              id={cocktail.id}
            />
          );
        })}
      </div>
      <div className="d-flex justify-content-center my-3">
        <OutlineBtn btnText="Back to Search" handleClick={backToTop} />
      </div>
    </div>
  );
};
