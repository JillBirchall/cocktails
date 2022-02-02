import { SearchResults } from "./SearchResults";
import { Home } from "./Home";
import { CocktailRecipe } from "./CocktailRecipe";
import { ErrorPage } from "./ErrorPage";
import { Loader } from "./components/Loader";
import { Footer } from "./Footer";
import { useGlobalContext } from "./context";

function App() {
  const { isError, isLoading, displayCocktail, showResults } =
    useGlobalContext();

  return (
    <div className="main-container">
      {/* {isLoading && <Loader />} */}
      {isError && <ErrorPage />}
      {!isError && <Home />}
      {!isError && showResults && <SearchResults />}
      {!isError && displayCocktail && <CocktailRecipe />}
      <Footer />
    </div>
  );
}

export default App;
