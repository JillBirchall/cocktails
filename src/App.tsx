import { SearchResults } from "./SearchResults";
import { Home } from "./Home";
import { CocktailRecipe } from "./CocktailRecipe";
import { ErrorPage } from "./ErrorPage";
import { Loader } from "./components/Loader";
import { Footer } from "./Footer";
import { useGlobalContext } from "./context";

function App() {
  const { isError, displayCocktail, showResults, isLoading } =
    useGlobalContext();

  return (
    <div className="main-container">
      {isError && <ErrorPage />}
      {!isError && <Home />}
      {isLoading && <Loader />}
      {!isError && !isLoading && showResults && <SearchResults />}
      {!isError && displayCocktail && <CocktailRecipe />}
      <Footer />
    </div>
  );
}

export default App;
