import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-primary mt-5">
      <p className="text-light ms-2 mb-0 py-1">
        This is a project created for educational purposes using ReactJS. All
        cocktail information is provided by{" "}
        <a href="https://www.thecocktaildb.com/" className="text-light">
          The Cocktail DB
        </a>
      </p>
    </footer>
  );
};
