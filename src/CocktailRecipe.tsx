import { useEffect } from "react";
import { ArrowLeft, Dot } from "react-bootstrap-icons";
import { useGlobalContext } from "./context";

export const CocktailRecipe: React.FC = () => {
  const { currentCocktail, backToResults } = useGlobalContext();

  //Scroll page back to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="container-fluid cocktail-recipe pt-4 pt-md-3">
      <div className="row">
        <div className="col-12">
          <button
            className="back-btn btn btn-outline-primary rounded-pill ms-md-3"
            onClick={backToResults}
          >
            <ArrowLeft /> Back To Results
          </button>
        </div>
      </div>
      <div className="row">
        <h3 className="col-12 text-uppercase text-center mt-4 mt-md-1 h1 fw-normal">
          {currentCocktail.name}
        </h3>
      </div>
      <section className="row mt-4">
        <div className="col-12 col-md-6">
          <img
            src={currentCocktail.image}
            alt={currentCocktail.name}
            className="mx-auto d-block"
          />
        </div>
        <div className="col-12 col-md-5 ms-md-5 ms-lg-0 mt-5 mt-md-2 text-center text-md-start">
          <p>
            <span className="fw-bold text-primary h5">Glass: </span>
            {currentCocktail.glass}
          </p>
          <h4 className="fw-bold text-primary h5 mt-5">Ingredients</h4>
          <ul className="row">
            {currentCocktail.ingredients.map((ingredient, index) => {
              return (
                <li key={index} className="col-12 me-md-2">
                  <Dot className="icon d-none d-md-inline-block" />
                  {ingredient}
                </li>
              );
            })}
          </ul>
          <h4 className="fw-bold text-primary h5 mt-5">Method</h4>
          <p>{currentCocktail!.method}</p>
        </div>
      </section>
    </article>
  );
};
