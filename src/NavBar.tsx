import React from "react";
import { SearchBox } from "./SearchBox";
import { DropdownMenu } from "./DropdownMenu";
import { useGlobalContext } from "./context";
import cocktail from "./images/cocktail-small.png";

export const NavBar: React.FC = () => {
  const { ingredients, categories } = useGlobalContext();

  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-light bg-primary">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img src={cocktail} alt="cocktail" className="m-0" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <DropdownMenu
              title="Categories"
              menuName="category"
              items={categories}
            />
            <DropdownMenu
              title="Ingredients"
              menuName="ingredient"
              items={ingredients}
            />
          </ul>
          <SearchBox />
        </div>
      </div>
    </nav>
  );
};
