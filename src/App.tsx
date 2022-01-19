import { SearchResults } from "./SearchResults";
import { NavBar } from "./NavBar";
import { CocktailRecipe } from "./CocktailRecipe";
import { ErrorPage } from "./ErrorPage";
import { Loader } from "./Loader";
import { Footer } from "./Footer";
import { useGlobalContext } from "./context";

function App() {
  const { isError, isLoading, displayCocktail, showResults } =
    useGlobalContext();

  return (
    <div className="main-container">
      <NavBar />
      {isLoading && <Loader />}
      {showResults && <SearchResults />}
      {isError && <ErrorPage />}
      {displayCocktail && <CocktailRecipe />}
      <Footer />
    </div>
  );
}

export default App;
