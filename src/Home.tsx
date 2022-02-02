import React from "react";
import background from "./images/background.jpg";
import Cocktail from "./images/cocktail-small.png";
import { SearchBox } from "./components/SearchBox";
import { SelectBox } from "./components/SelectBox";
import { useGlobalContext } from "./context";

export const Home: React.FC = () => {
  const { ingredients, categories, getRandomCocktail } = useGlobalContext();

  return (
    <section
      className="container-fluid home d-flex flex-column align-items-center"
      style={{ backgroundImage: `url(${background})` }}
      id="home"
    >
      <div className="d-flex justify-content-center pt-2">
        <h1 className="text-light fw-bold">Cocktail Quest</h1>
        <img
          className="logo"
          src={Cocktail}
          alt="A cocktail in a martini glass"
        />
      </div>
      <div className="card search-card bg-primary rounded-3 mt-5 p-3">
        <div className="card-body mt-md-3 ms-md-5">
          <h2 className="text-light card-title text-center">
            Search for or browse cocktails:
          </h2>
          <SearchBox />
          <SelectBox
            labelText="Browse by Category:"
            title="Category"
            options={categories}
          />
          <SelectBox
            labelText="Search by Ingredient:"
            title="Ingredient"
            options={ingredients}
          />
        </div>
      </div>
      <p className="text-light mt-3">Find a Random Cocktail</p>
      <button
        className="btn rounded-pill bg-secondary text-light px-3 py-1 border-0"
        onClick={getRandomCocktail}
      >
        Surprise Me!
      </button>
    </section>
  );
};
