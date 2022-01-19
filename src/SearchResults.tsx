import { CocktailCard } from "./CocktailCard";
import { useGlobalContext } from "./context";

export const SearchResults: React.FC = () => {
  const { cocktails, currentSearch } = useGlobalContext();

  return (
    <div className="container py-5">
      <h1 className="text-center text-uppercase my-4">
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
    </div>
  );
};
